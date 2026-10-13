# 11. Engineering Primitives and Integration Architecture

**Status:** Target architecture, v0.1  
**Date:** 2026-10-12  
**Scope:** Contribution Network, Contributions Centre app, GitHub integration, MCP, database structure, and production engineering foundations.

## 1. Design decision

Build a coherent platform from reusable engineering primitives rather than adding integrations as isolated features.

The Network is its first project and first consumer. Use the app to improve the app, but preserve a clear distinction between:
- the strategic contract defined here;
- the application implementation in [Contribution Bounties Centre](https://github.com/Loofy147/Contribution-bounties-centre-);
- ChatGPT's connected GitHub tools, used to inspect and modify repositories during this conversation;
- a future user-authorized GitHub connection inside the app;
- a future MCP server that exposes selected Network capabilities to AI clients.

These are different trust boundaries. Access in one does not implicitly grant access in another.

### 1.1 Current working state and deferred control-plane transition

The active working state remains in the existing `Loofy147` repositories:
- [`contribution-network`](https://github.com/Loofy147/contribution-network) is the strategic and operating source of truth.
- [`Contribution-bounties-centre-`](https://github.com/Loofy147/Contribution-bounties-centre-) is the current application implementation and prototype.

[`contribution-cloud/Contributions-centre`](https://github.com/contribution-cloud/Contributions-centre) is reserved for the later portfolio/repository control plane. Do not initialize it, migrate active work to it, or make the current build depend on it before system readiness has been demonstrated. Its intended purpose is to inventory projects and repositories, govern their lifecycle, and eventually initiate authorized repository operations through the system.

Use the Section 6 readiness gates in the [first-consumer charter](10-first-consumer-project-charter.md) as the handover baseline. Before transitioning, also verify that the target control plane can be initialized with an accurate seed inventory, respects the separate `contribution-cloud` GitHub identity/permissions, and records the actual result of every repository operation. Access through ChatGPT's connected GitHub tools is not proof that the future app integration is configured.

## 2. Core trust boundaries

1. **App identity:** authenticates a user to the Contribution Network through the app's identity provider.
2. **Workspace/project authorization:** determines which projects, records and actions that user can access in the Network.
3. **GitHub connection:** separately authorizes the app to access selected repositories under the permissions approved on GitHub.
4. **MCP client authorization:** authorizes an AI client to call specific Network tools and resources.
5. **Secrets boundary:** stores app credentials and encryption material only in backend secret storage.
6. **Data boundary:** every project-scoped record and query has an explicit project/workspace authorization path.
7. **Audit boundary:** every consequential mutation records actor, resource, decision, timestamp, and operation outcome.

Never treat an identity from one boundary as proof of permission in another. A signed-in Network user does not automatically have GitHub access; a GitHub installation does not automatically make that user an owner of a Network project; and an MCP tool name is not a permission check.

## 3. GitHub connection inside the application

### 3.1 Recommended integration

Use a **GitHub App** for the app's repository integration rather than asking users to paste a personal access token. GitHub recommends GitHub Apps for many integrations because permissions are fine-grained, repository access can be restricted, and installation tokens are short-lived. See:
- [Differences between GitHub Apps and OAuth Apps](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps)
- [Choosing permissions for a GitHub App](https://docs.github.com/en/enterprise-cloud@latest/apps/creating-github-apps/registering-a-github-app/choosing-permissions-for-a-github-app)
- [Authenticating as an app installation](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)

The existing AppDeploy login and GitHub connection are separate. Current AppDeploy login methods listed in the SDK reference are Google, Apple, X, and passwordless email; do not represent that as “Login with GitHub.” The app should first identify the Network user, then offer a separate **Connect GitHub** action.

### 3.2 Staged permission matrix

**Stage A — read-only pilot (default):**

| GitHub App permission | Level | Purpose |
|---|---|---|
| Metadata | Read | Required repository/app metadata |
| Contents | Read | Inspect files and default branch content when the user links a repository |
| Issues | Read | Link project work to GitHub issues |
| Pull requests | Read | Inspect PRs, reviews and merge state |
| Checks | Read | Show required check results, if this capability is implemented |
| Actions | Read, only if needed | Workflow run/status details; defer if not required |

Install the GitHub App only on repositories the user selects. Start narrower than the whole account. Do not request organization administration, repository administration, secrets, Actions write, or workflow write for the initial read-only product.

**Stage B — explicitly enabled write actions:**

- Issues: write only when a user deliberately creates or updates an issue through the Network.
- Pull requests: write only when a user deliberately opens or updates a PR.
- Contents: write only when an approved feature needs to create a branch or commit files.
- Workflows: no access unless a separately approved feature demonstrably needs it.

Write permissions are not an automatic consequence of connecting GitHub. Present each capability and the repositories it affects, and allow disconnect/revocation.

GitHub App permissions constrain what the app can do, and installation/user access is also limited by the user's access and repositories selected during installation. Do not equate “full permissions” with safe defaults; request the minimum for the enabled feature set.

### 3.3 Connection flow

1. The user signs into the Network.
2. The user selects **Connect GitHub**; the backend creates a cryptographically random, one-time state nonce bound to that Network user and a short expiry.
3. Redirect to GitHub's GitHub App installation/authorization flow over HTTPS.
4. The callback validates and consumes state, rejects replay, binds the authenticated Network user to the returned GitHub installation and selected repositories, and records the granted permissions.
5. The backend lists installations/repositories through GitHub APIs and lets the user link a selected repository to a Network project only if the installation can actually access it.
6. For repository API calls, mint a short-lived installation token on demand and keep it in memory only as long as required. Installation tokens normally expire after one hour; do not write them to ordinary project records.
7. If user-to-server OAuth tokens are added for a required use case, store them only in an encrypted token vault with rotation/revocation handling. Never store a raw token in the browser, URL, logs, Git repository, or normal record JSON.
8. Support disconnecting a repository and revoking/uninstalling the app. Remove or invalidate cached access state and retain only the minimal audit record required.

Use a distinct, verified HTTPS callback URL. Validate state, callback origin, installation/repository ownership, API response shape, and permissions before saving any link. Do not accept a user-supplied repository URL as proof of access.

### 3.4 Webhook sync

Use webhooks only for events needed by implemented features. When enabled:
- validate X-Hub-Signature-256 against the configured webhook secret using constant-time comparison;
- verify the event and repository belong to the installation and linked project;
- deduplicate deliveries by GitHub delivery ID;
- enqueue or record the event before performing slow work;
- make processing idempotent, retry bounded transient failures, and send failed events to an inspectable dead-letter/replay path;
- do not log secrets, authorization headers, or private payload fields unnecessarily.

See [Using webhooks with GitHub Apps](https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/using-webhooks-with-github-apps).

### 3.5 Required configuration and current status

Before a live connection can be deployed, register a GitHub App and configure at minimum the selected callback URL, permissions and installation visibility. The app's current AppDeploy secret list was empty when checked, so no GitHub App credentials are presently configured.

For the credential taxonomy, API-key lifecycle, bearer-token validation, secret references, rotation/revocation, and API acceptance gates, use the dedicated [Credential, Bearer-Token, Key and API Management contract](12-credential-and-api-management.md). This document remains the integration overview; the dedicated contract governs credential lifecycle requirements.

Candidate backend-only secret names:
- GITHUB_APP_ID
- GITHUB_CLIENT_ID
- GITHUB_CLIENT_SECRET
- GITHUB_PRIVATE_KEY_PEM
- GITHUB_WEBHOOK_SECRET (only when webhooks are enabled)
- GITHUB_TOKEN_ENCRYPTION_KEY (only if persisting encrypted user tokens is justified)

Submit credential values through a secure secret-entry flow, not chat, source files, frontend settings or GitHub issues. Do not create empty secrets or pretend the integration is connected before registration, configuration, and a real authorization test.

## 4. MCP: tool boundary, not a synonym for GitHub access

The GitHub tools connected to this ChatGPT conversation do not constitute an MCP server implemented by the Contribution Network app.

The proposed Network MCP surface should use the same domain services as the HTTP API, not a parallel data-access implementation. Initial read tools could include:
- list and inspect projects the caller is authorized to see;
- list work packages and contributions by project;
- read a contribution's evidence and review state;
- inspect the connected GitHub repository links and sync status;
- read relevant audit events according to project permission.

Write tools can later create project work packages, record contributions, request reviews, or open GitHub issues/PRs, but only through the same authorization, validation, audit, idempotency, and confirmation controls as the web app. Never expose unrestricted database CRUD or arbitrary GitHub API forwarding as a general MCP tool.

For a remote HTTP MCP server, implement the current stable MCP authorization guidance and OAuth security requirements; validate token audience and scopes for the MCP resource, never forward the MCP caller's token to GitHub, and never treat a tool's presence as authorization. See the [MCP authorization specification](https://github.com/modelcontextprotocol/modelcontextprotocol/blob/2025-11-25/docs/specification/2025-11-25/basic/authorization.mdx). Confirm the transport and OAuth requirements against the MCP specification version adopted by the chosen server SDK before implementation.

MCP tool safety requirements:
- use typed schemas and bounded inputs/outputs;
- check Network authorization per tool call and resource;
- distinguish read, write, and administrative tools;
- require explicit confirmation for consequential or destructive changes;
- bind idempotency keys to the authenticated user and canonical payload;
- record tool name, user, resource IDs, decision, result and timing;
- treat issue bodies, repository files, PR comments and webhook text as untrusted data that may contain prompt injection;
- never allow retrieved content to change system-level policy, permissions or available tool set;
- rate-limit calls and cap page sizes, timeouts and output size;
- redact secrets and private data from tool responses and logs.

Start with a documented tool contract and API adapter. Deploy a separate MCP service if the current AppDeploy route runtime cannot meet the selected MCP HTTP transport requirements reliably; do not fake MCP compatibility with a few ad hoc JSON routes.

## 5. Database organization

### 5.1 Current baseline and known constraint

The existing prototype currently uses AppDeploy's key-value/table database with logical tables such as bounties, contributions, and profiles. It is not a relational database with built-in foreign keys and SQL indexes. The SDK contract states that list filters run after records are read, reads/writes are quota-limited, records have size limits, and growing tables must not be fully scanned for per-user lookups.

The current /api/my-work handler lists broad bounty and contribution collections and then filters them in application code. This is tolerable only as a small prototype. It is a P0 scaling/security-review item before unrelated projects and larger datasets are hosted. Do not add more full-collection scans as the network grows.

### 5.2 Logical domain model

Keep these entities separate even if the first persistence provider stores them as table records:

| Domain | Logical entity/table | Purpose |
|---|---|---|
| Identity | profiles | Public display/reputation summary; never the full authorization source |
| Authorization | workspaces, workspace_memberships, project_memberships | Membership and roles scoped to workspace/project |
| Portfolio | project_lines, projects | Strategic lines, project objective, owner, lifecycle and visibility |
| Planning | work_packages (existing bounties migrate/alias here) | Scope, dependencies, acceptance contract, funding mode and rights reference |
| Contributions | contributions | Contributor's offer/submission, artifact links, version and state |
| Evidence/history | contribution_events, review_events, audit_events | Append-only submission, review, revision, permission and decision events |
| Reputation | xp_ledger | One entry per eligible award/reversal; profile XP is a derived/cached total |
| GitHub | github_installations, github_repository_links | Installation identity and explicit project-to-repository mapping; no raw access tokens |
| Integration jobs | github_sync_runs, github_webhook_receipts, idempotency_receipts | Sync checkpoints, delivery de-duplication, safe retries and recovery |
| MCP | mcp_tool_runs or shared audit events | Trace authorized tool calls, result and failure without storing unnecessary payloads |
| Funding (later) | reward_agreements, funding_records, settlements | Promises, available funds, liabilities and settlement; not part of the current prototype |

Do not create every table at once. Add the minimal records needed by each shipped workflow, preserving clear ownership and data boundaries.

### 5.3 Required record envelope and relations

For project-scoped records, standardize fields where appropriate:
- stable id;
- workspaceId and/or projectId;
- createdAt, updatedAt, createdBy;
- schemaVersion for records whose shape will evolve;
- explicit lifecycle status;
- source/reference IDs and evidence provenance;
- visibility classification where public and confidential records can coexist.

Enforce ownership and membership in the server on every read and mutation. Do not trust client-supplied createdBy, role names, project IDs, installation IDs or permission declarations. Validate each foreign/reference ID against the authenticated user's allowed project and integration scope. Keep public project metadata separate from confidential customer inputs and GitHub credentials.

Because the current AppDeploy database lacks relational foreign keys, enforce referential integrity in domain services and tests. Use chosen IDs and bounded lookups where appropriate; use stable safe key encoding when a user/project ID becomes part of a physical table name. Do not put arbitrary IDs into table names without encoding.

If the network reaches sustained multi-project scale, evaluate a relational database such as PostgreSQL with explicit migrations, foreign keys, query indexes, transaction boundaries, and row-level security. Move behind repository interfaces so domain services do not depend on provider-specific calls. Do not claim RLS is active until policies are implemented and integration-tested.

### 5.4 Query, history and transaction rules

- Replace broad read-then-filter patterns with project/user-scoped access paths or dedicated bounded indexes. Never depend on a filter after reading a large table to enforce tenant boundaries.
- Keep review and revision history append-only rather than relying indefinitely on arrays capped to the newest 20 events. A summary may be denormalized for UI speed; the event record is the audit source.
- Record each XP award in xp_ledger with a unique award key tied to the accepted contribution version and rule version. Apply the ledger entry and cached profile increment atomically when supported.
- For writes with meaningful side effects, create a stable idempotency receipt in the same transaction as the side effect; validate that a replay has the same actor and payload. Reconcile unknown transaction outcomes rather than blindly retrying.
- Use bounded pagination and explicit limits. Do not fetch all history, repositories, users or contributions in a single request.
- Set byte-size and retention limits for evidence. Store large files in object storage and retain metadata/hash/access policy in records; do not embed blobs or indefinitely growing audit arrays in a database row.
- Introduce versioned migrations and a tested backup/restore procedure before a schema transition. Backfill in bounded batches and keep a rollback path.

## 6. Authorization model

Use a deny-by-default policy evaluated on the backend:
- platform operator;
- workspace owner/admin;
- project owner/maintainer;
- contributor;
- reviewer;
- read-only participant.

These are proposed roles, not a reason to implement a large permission framework immediately. Start with the roles required by the first project, but model membership at project/workspace boundaries so permissions do not become global by accident.

For every route or MCP tool, document:
- allowed roles and resource scope;
- whether the action is read-only or mutating;
- whether an independent approval is needed;
- audit event and idempotency behavior;
- expected failure cases.

GitHub permissions remain a separate matrix, scoped to installed repositories. A Network role must not silently escalate GitHub access.

## 7. Other valuable engineering primitives

### P0 — Trust and correctness
- centralized authorization/policy checks on backend services;
- server-side schema validation for all inputs and third-party API responses;
- stable IDs, idempotency receipts and bounded retry rules;
- append-only audit/decision events for security-sensitive mutations;
- separate secrets manager and secret redaction;
- project/data isolation tests;
- CI contract tests plus live integration tests for authorization and XP.

### P1 — Integration reliability
- verified webhook signatures, deduplication, checkpoints and dead-letter recovery;
- structured logs with request/correlation IDs, error classes and latency;
- rate limits, pagination limits and external API quota handling;
- exponential backoff with bounded retry for safe transient reads only;
- explicit timeout/circuit-breaker behavior for third-party APIs;
- feature flags and staged rollout for GitHub writes and MCP tools;
- dependency inventory, lockfile discipline, vulnerability updates, secret scanning and software-supply-chain controls.

### P1 — Operations
- backup and restore tests;
- release health checks and rollback instructions;
- environment/configuration inventory;
- incident and vulnerability reporting procedures;
- data minimization, retention/deletion policy and export;
- smoke tests for login, project scoping, integration status and the contribution lifecycle.

### P2 — Scale and automation
- transactional outbox/job queue for sync and long-running integration work;
- scheduled reconciliation for missed webhook events;
- relational persistence when query patterns and volume justify it;
- MCP write tools and broader integrations after read-only behavior is safe;
- observability dashboards and service-level objectives based on actual use.

Automation must be idempotent and observable. Do not add retries, jobs or queues without defining duplicate effects, partial failures, recovery and operator visibility.

## 8. Delivery sequence and acceptance gates

### Phase 0 — Establish contracts
- Document the resource/permission matrix and callback flow.
- Declare the strategic document as policy source of truth.
- Define the logical data model, project boundary and migration conventions.
- Inventory app secrets and runtime dependencies without revealing values.

**Exit:** architecture approved; current limitations are visible; no feature falsely claims a live GitHub or MCP connection.

### Phase 1 — Safe read-only GitHub connection
- Register a GitHub App with minimal read permissions.
- Configure secure callback and backend secrets.
- Implement state/CSRF protection, installation discovery, repository selection, permission display and disconnect.
- Persist only installation/repository mapping and safe sync state; generate short-lived tokens server-side.

**Exit:** a user can connect only repositories the installation can access; a different Network user cannot inspect or use that link; revoked/uninstalled access fails closed; tokens never appear in browser, normal database rows or logs.

### Phase 2 — Data boundary and reliability
- Replace broad global collection scans with scoped access patterns.
- Add append-only audit/review events and idempotent XP ledger behavior.
- Add schema validation and per-workspace/project authorization tests.
- Verify backup/restore and runtime reproducibility.

**Exit:** cross-project read/write attempts fail; duplicate/replayed requests do not double-award XP or create duplicate effects; failures and unknown outcomes can be reconciled.

### Phase 3 — MCP read-only tools
- Implement a typed MCP tool contract over domain services.
- Enforce HTTP MCP authorization if remote, including audience validation.
- Apply per-tool permissions, bounds, audit logging, injection defenses and read-only integration tests.

**Exit:** unauthorized resources remain unavailable through MCP; untrusted GitHub text cannot alter tool permissions; tool outputs contain only authorized fields and bounded data.

### Phase 4 — Opt-in writes and sync
- Add issue/PR creation or file/branch writes one permission at a time.
- Add signed webhooks, delivery deduplication and replay tooling.
- Require user confirmation for external mutations and maintain audit trails.

**Exit:** writes are restricted to selected repositories, permission failures are safe, duplicate webhooks do not duplicate effects, and disconnect/revocation stops future writes.

## 9. Current implementation status

As checked on 2026-10-13:
- The live ContribQuest app is deployed and AppDeploy reports `ready`, with no frontend or backend errors in the latest QA snapshot.
- The application now has per-user indexes for authored bounties, submitted contributions, and received reviews. The protected `/api/my-work` route reads those user-scoped tables instead of using broad global lists to assemble private work.
- New bounty, contribution, review, and resubmission transitions update canonical records and user indexes transactionally. An active-submission guard is used to prevent duplicate active submissions.
- A bounded lazy migration indexes existing records by pages and reports progress in the UI. New submissions are refused until the contributor-history index has completed, avoiding the earlier incomplete filtered-scan fallback.
- This is the first scaling/data-isolation increment, **not** complete workspace/project membership authorization. The app does not yet enforce project membership boundaries because explicit workspace/project membership records and negative cross-project authorization tests remain to be implemented. Index reads are bounded; UI pagination beyond the first index page remains follow-up work.
- The AppDeploy app secret list was empty at the last verified inventory. No GitHub App connection is configured and no Network MCP server is implemented.
- The source snapshot imports AppDeploy client/server packages that are not declared in the checked-in package manifest; standalone reproducibility remains unverified.
- The latest repository contract workflow passed on commit `8940845f8b50bc160336e4dcd8bd3f96fad417b7`. CodeQL and secret scanning were still running on that commit when this status was refreshed. The contract suite is static; it is not an end-to-end membership, webhook, GitHub connection, or MCP test.

These are observed boundaries, not reasons to abandon the project. They determine the safe build order and keep the implementation status distinct from planned integrations.

## 10. Decision rule

First ship the least-privileged working slice: app identity + one selected GitHub installation + read-only repository data + project-scoped records + audit/idempotency. Add a write permission or MCP mutation only when the corresponding use case is defined, tested, auditable, and reversible.

The goal is not to collect integrations. It is to give the Network a secure, extensible substrate on which project work, contributors, evidence, GitHub, MCP tools, and later funding can operate without mixing their identities or permissions.
