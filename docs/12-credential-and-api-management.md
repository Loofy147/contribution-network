# 12. Credential, Bearer-Token, Key and API Management

**Status:** Target architecture, v0.1  
**Date:** 2026-10-12  
**Applies to:** Contributions Centre control plane, Contribution Network services, GitHub/provider integrations, future APIs and MCP adapters.

## 1. Purpose and governing decision

Credential management is a platform capability, not a settings field that stores pasted secrets. It must let authorized operators connect providers, issue and revoke narrowly scoped API credentials, manage token lifetimes, expose stable API contracts, and audit consequential use without leaking secret material.

Use existing platform identity and managed secret storage first. Do not build a bespoke cryptographic vault or OAuth authorization server unless a demonstrated requirement cannot be met with supported platform services or a mature provider.

Distinguish:
1. **Provider credentials** used by the backend to call external systems, such as GitHub App signing credentials or OAuth refresh tokens.
2. **Issued API keys** identifying a client or integration using Contribution Network APIs.
3. **Bearer access tokens** granting a principal limited, time-bound access to a particular API resource.
4. **Signing, encryption and webhook keys** protecting integrity or confidentiality.
5. **Public configuration identifiers** which are not secrets, even when displayed in client applications.

These categories have different generation, storage, disclosure, rotation, validation, and revocation requirements. Do not treat them as interchangeable fields in one generic token record.

## 2. Trust boundaries

| Component | Responsibility | Must not do |
|---|---|---|
| User interface | Start provider authorization; display credential metadata; show a newly issued key once | Store provider secrets or bearer tokens in source code, local logs, URLs, or ordinary project records |
| Identity provider / app session | Authenticate a human user | Substitute for project-level authorization |
| API gateway / middleware | Validate credential, issuer/type, audience, expiry and coarse scopes; enforce request limits | Assume valid authentication grants access to every project or action |
| Domain authorization service | Evaluate actor, workspace, project, resource and action permissions on every request | Trust client-supplied owner IDs or permissions without checking current policy |
| Credential broker | Obtain, refresh, use and revoke provider credentials through approved flows | Return raw provider credentials to the browser or unrelated API clients |
| Secret manager / KMS | Store backend secrets and cryptographic keys with restricted access and versioning | Be exposed as a general-purpose secret-reading API |
| Audit service | Record actor, credential ID, resource, operation, outcome and correlation ID | Record raw secrets, Authorization headers, private keys, refresh tokens or sensitive request bodies |

Authorization from the ChatGPT-connected GitHub integration, a GitHub App installed by the user, a Contribution Network session, an API key, and an MCP client are separate trust relationships. One does not imply another.

## 3. Credential types and handling rules

### 3.1 Provider connections

Prefer provider-native authorization and app installation over asking users to paste broad personal access tokens. For GitHub, use a GitHub App with selected repositories and least-privilege permissions.

Store connection metadata separately from credentials:
- provider and provider account/installation identifier;
- Network user/workspace that authorized it;
- selected repository/resource IDs;
- approved permission set and consent time;
- state: pending, active, reauthorization_required, revoked, or error;
- secret-manager reference, not secret value;
- created, last-used, expiry/rotation and revocation timestamps;
- safe provider error/status metadata.

For short-lived installation tokens, mint on demand and keep in memory only as required. For refresh tokens or provider secrets that must persist, use a managed secret manager or an encrypted credential vault with envelope encryption and protected key management. Never place a raw token in normal database JSON, browser storage, source control, an issue, a URL, or application logs.

### 3.2 Issued API keys

API keys identify an integration client; they do not prove a human identity and are not sufficient by themselves for high-risk administrative operations.

- Generate keys with a cryptographically secure random generator and sufficient entropy; target at least 256 random bits for opaque machine credentials.
- Show the full value exactly once at creation or rotation. Store only a one-way verifier, preferably a keyed HMAC with its pepper held separately in managed secret storage. If a key must be recoverable for outbound use, store it as an encrypted secret in the secret manager, not as ordinary database text.
- Give each key a stable ID, non-secret display prefix, owner, client purpose, status, scopes, allowed resource/project boundary, creation time, expiry, last-used time, rotation history, and revocation reason.
- Support immediate revocation and overlapping rotation: create a replacement, confirm the consumer migrated, then revoke the old key.
- Never email, log, or return an existing full key. A lost key is replaced, not retrieved.
- Apply per-key quotas and rate limits, and detect unusual failures or usage where practical.
- Use separate keys per integration and environment. Do not share one master key between projects, users, services, development and production.

### 3.3 Bearer access tokens

A bearer token can be used by whoever possesses it. Treat leakage as potential credential compromise.

- Use the existing supported identity/session provider for human login. For external API clients, prefer a mature OAuth authorization service or short-lived service credentials rather than inventing a token issuer without a concrete need.
- Require HTTPS and accept bearer access tokens in the Authorization: Bearer header. Never accept them in query parameters or URLs.
- Validate the complete token contract on every request: signature or opaque-token lookup, issuer, intended audience/resource server, expiry, not-before time when applicable, token type, and permitted scopes. Reject malformed or ambiguous credentials.
- Bind tokens to the minimum needed actor/client, audience, scopes, and project/resource boundary. An authenticated request must still pass current workspace/project authorization.
- Prefer short-lived access tokens. Use refresh-token rotation and revocation protections if refresh tokens are supported. Consider sender-constrained access tokens only when the selected client and infrastructure can support them correctly.
- If opaque tokens are used, store only a hash/verifier and implement lookup, expiry and revocation. If signed tokens are used, use an established library, fixed algorithm allowlists, managed signing keys, key IDs and rotation, and an explicit revocation/expiry strategy. Do not build custom cryptography.
- Do not forward a Contribution Network bearer token to GitHub or any unrelated upstream service. The backend obtains its own provider credential for that service.

### 3.4 Signing and encryption keys

Keep encryption keys, signing private keys, webhook secrets, and API-key verifier peppers in a managed secret/KMS boundary. Separate keys by purpose and environment. Apply key versioning, access policy, rotation, recovery procedures, and an audited emergency-revocation path. Never return signing/encryption keys through normal application APIs.

Webhook signing secrets are distinct from API authentication keys. Verify webhook signatures before treating a payload as trusted, compare signatures in constant time, and deduplicate deliveries.

## 4. Suggested data model

Persist metadata and references—not raw secret values—in the ordinary application database.

| Entity | Important fields | Security rule |
|---|---|---|
| provider_connections | id, owner_id, workspace_id, provider, external_account_id, resource_allowlist, permission_snapshot, secret_ref, status, expires_at, last_used_at, revoked_at | No plaintext credentials |
| api_clients | id, owner_id, purpose, environment, status, created_at | One integration principal per use case |
| api_keys | id, client_id, prefix, verifier, scopes, resource_limits, expires_at, last_used_at, revoked_at, rotation_group_id | Verifier only; no full key value |
| token_sessions (only if needed) | id, subject_id, client_id, token_verifier, audience, scopes, expires_at, revoked_at | Opaque-token verifiers only; avoid duplicating existing identity-provider sessions |
| secret_references | id, owner_id, purpose, secret_manager_ref, version, status, rotation_due_at | No secret material; access restricted to secret-management service |
| audit_events | actor_id, credential_id, resource_type, resource_id, action, decision, request_id, created_at | Append-only for security events; redact secrets and sensitive values |

The concrete schema must account for the current persistence provider's transaction, index, record-size and query limitations. Never implement credential validation by scanning every record. If the available datastore cannot support safe lookup, atomic revocation, rate accounting, or isolation at the required scale, select a suitable managed database/service before exposing public APIs.

## 5. API design and governance

Publish a versioned OpenAPI contract for the system API. The API and any MCP adapter must call the same domain services and authorization rules; neither should be a parallel unrestricted database layer.

Initial resource families:
- /v1/portfolios — portfolio inventory and authorized summaries;
- /v1/projects — projects, owners, state and outcomes;
- /v1/repositories — registered repositories and verified GitHub sync status;
- /v1/provider-connections — connection metadata, authorization start, status and revocation;
- /v1/api-clients and /v1/api-keys — client and key metadata, issuance, rotation and revocation;
- /v1/audit-events — limited, permission-checked audit access.

Raw provider credentials, signing keys, secret values and existing API key values must never be retrievable through list/read endpoints. A secret-entry endpoint, when unavoidable, must accept values over HTTPS with request-body logging disabled/redacted and forward them immediately to a secret manager. Provider OAuth/install flows are preferred.

Define named permissions rather than a universal administrator token; examples include portfolio:read, project:read, repository:read, repository:create, repository:write, credential:manage, and audit:read. These names are illustrative, not implemented scopes. Pair scopes with resource/project restrictions, current user authorization and explicit approval for consequential actions.

Every endpoint should:
- require TLS and authenticate/authorize on each request;
- validate input against a schema and allowlist fields/methods;
- use bounded pagination, timeouts, payload sizes and rate limits;
- return consistent errors without stack traces or secret-bearing provider responses;
- support idempotency keys on consequential create/write operations;
- emit request/correlation IDs and safe security audit events;
- prevent cross-project IDOR, mass assignment, SSRF and arbitrary upstream API forwarding;
- define compatibility, deprecation and versioning rules.

Repository creation, changing permissions, rotating/revoking production credentials, and other consequential operations must show a preview of the target/account/permissions and require an explicit authorized confirmation. Avoid generic endpoints such as “execute arbitrary GitHub API request” or “read any secret.”

## 6. Credential lifecycle

Use explicit states and defined transitions:
1. **Requested** — purpose, owner, environment, requested scope/resource boundary, expiry and approver are recorded.
2. **Authorized** — required consent/approval and provider permission are verified.
3. **Issued or connected** — secret is generated or obtained via a provider flow; raw value is shown only at the permitted handoff.
4. **Active** — validated against a real provider/API call; usage and expiry are observable without recording secret material.
5. **Rotating** — the new credential is validated while controlled overlap is allowed.
6. **Revoked/expired** — future use is rejected; cached credentials are invalidated where possible.
7. **Incident response** — revoke or disable, rotate dependent secrets, inspect redacted audit events, assess impact, and document recovery.

Stopping a consumer process does not revoke a credential at the provider. Revocation must occur at the resource/authorization server where the credential is accepted, with local denial added as appropriate.

## 7. Minimum acceptance gates

Do not mark credential/API management production-ready until tests demonstrate:
- secret values do not appear in UI after the one-time handoff, browser storage, Git history, logs, exceptions or audit payloads;
- expired, malformed, wrong-audience, wrong-scope, revoked and rotated credentials are rejected correctly;
- user and integration credentials cannot cross workspace/project boundaries;
- a key can be revoked immediately and cannot be used afterward;
- rotation works without unexpectedly locking out a consumer, and the old key can be revoked;
- rate limits, authorization failures and malformed inputs are handled safely;
- provider connection grants only approved repositories/permissions and can be disconnected;
- API writes require the correct scope, resource permission and confirmation boundary;
- security audit events are useful but secret-free;
- backup/recovery and emergency credential rotation have an exercised procedure.

Static tests alone are insufficient. Use unit tests, integration tests against a safe test provider/environment, and controlled end-to-end verification. Never test destructive or privileged actions against production resources without an explicit test plan.

## 8. Implementation sequence

**P0 — Safe foundation**
- Inventory current credentials and decide their owner, purpose and environment; rotate any exposed or shared credentials.
- Use the hosting platform's backend secret facility for runtime configuration; add secret scanning and redact headers/bodies from logs.
- Document credential owners, permissions, expiry/rotation, dependencies and emergency revocation.
- Fix GitHub account/repository authorization boundaries before enabling writes.

**P1 — Read-only integration and registry API**
- Implement provider connection status and a selected-repository inventory with read-only permissions.
- Define the OpenAPI contract, authentication middleware, authorization service, safe audit event shape, request limits and idempotency behavior.
- Keep API clients restricted to read-only scopes initially.

**P2 — Controlled key lifecycle**
- Add API client/key metadata, one-time key issuance, hashed verification, scoped authorization, usage/rate controls, rotation, revocation and audit.
- Prefer the established identity/OAuth provider for short-lived bearer access tokens; do not create a custom token issuer unless required.
- Add a credential-management UI only after the backend contract and threat model are tested.

**P3 — Explicitly approved writes**
- Enable selected repository creation and issue/PR operations, with preview, confirmation, least privilege, idempotency and live end-to-end tests.
- Introduce MCP only as another client of the same authenticated, authorized domain/API services.

## 9. References

- OWASP, [Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- OWASP, [REST Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html)
- IETF RFC 9700, [Best Current Practice for OAuth 2.0 Security](https://www.rfc-editor.org/rfc/rfc9700.html)
- IETF RFC 6750, [OAuth 2.0 Bearer Token Usage](https://www.rfc-editor.org/rfc/rfc6750.html)
- GitHub Docs, [Choosing permissions for a GitHub App](https://docs.github.com/en/enterprise-cloud@latest/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app)

These references inform the target design. They do not mean that these controls have already been implemented or verified.
