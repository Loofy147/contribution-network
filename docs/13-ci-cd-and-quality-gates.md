# 13. CI/CD Pipeline and Quality-Gate Specification

**Status:** Operating specification, v0.1  
**Date:** 2026-10-12  
**Scope:** The active Contribution Network repositories. The future `contribution-cloud/Contributions-centre` remains deferred and is not a pipeline dependency.

## 1. Operating decision

CI must give a trustworthy, repeatable answer about the commit under review. CD must deploy only a validated artifact through an authorized, reversible process.

Do not conflate these states:
- **Static contract passed:** source-level assertions and repository/documentation contracts passed.
- **Build passed:** the intended application built from a clean checkout using declared, locked dependencies.
- **Integration/E2E passed:** tested behavior against the relevant runtime, identity provider, datastore and separate user roles.
- **Release approved:** an identified artifact passed its required gates and an authorized approver accepted the release.
- **Deployment verified:** the expected version is live and post-deployment checks passed.

A green static test does not prove a build, runtime behavior, security, or deployment.

## 2. Current pipelines

### 2.1 Contribution Network — strategy and engineering specifications

The repository is documentation-first. Its CI runs a Node.js documentation contract suite that:
- verifies the README indexes the canonical documents;
- checks local Markdown links resolve inside the repository;
- checks the workflow's minimal permissions, commit-SHA action pins, bounded execution and token handling;
- ensures the current working boundary and non-automated deployment status stay explicit.
A separate Gitleaks workflow scans the full Git history with PR comments and secret-bearing report artifacts disabled. Dependabot raises updates for GitHub Actions.

No dependencies need to be installed for this contract suite. The workflow uses read-only permissions and pinned GitHub Actions.

### 2.2 Contribution Bounties Centre — application prototype

The application CI runs the existing repository contract tests through an npm script and validates the CI policy itself. A separate CodeQL workflow performs JavaScript/TypeScript static analysis. Dependabot proposes routine updates for npm dependencies and GitHub Actions.

**Known build blocker:** the committed source imports AppDeploy-provided `@appdeploy/client` and `@appdeploy/sdk`, which are not declared in the manifest, and the repository has no committed npm lockfile. This prevents us from claiming that a clean, independently reproducible app build is established. The static CI job deliberately does not disguise this by using platform-injected dependencies or browser mocks.

The next build gate is to agree and implement a supported runtime boundary, declare dependencies and a lockfile, and then add a blocking clean-install, type-check and production-build job.

## 3. Trigger and execution policy

The CI workflows should run on:
- pull requests targeting `main`;
- pushes to `main`;
- manual `workflow_dispatch`;
- a scheduled CodeQL analysis where applicable.

Use a regular `pull_request` trigger, not `pull_request_target` for executing changed code. Never execute untrusted pull-request code with privileged repository secrets.

Set workflow-wide permissions to the minimum possible. Grant write permissions only to the specific job that needs them, for example CodeQL result publication. Use job timeouts and concurrency cancellation for superseded CI work. Do not persist the checkout token when subsequent steps do not need authenticated Git operations.

Pin third-party actions to a verified full-length commit SHA, with the upstream release/tag recorded in a comment. Dependabot should keep action references reviewed and current. A version string in a comment is not a replacement for checking the SHA against the upstream repository.

## 4. Required quality gates

### P0 — Source and contract integrity
- Node-based repository/documentation tests pass.
- Local documentation links resolve.
- Workflow permissions, triggers, pinning and timeouts conform to policy.
- QA manifests retain the required browser scenarios.

### P0 — Reproducible application build
- A clean checkout installs using a committed lockfile and `npm ci`.
- Runtime-injected dependencies are declared, or a documented and tested platform adapter separates them from the standalone frontend build.
- TypeScript checks and production build run without undeclared packages, local state or secrets.
- The tested Node.js version and dependency graph are documented.

Until those conditions are implemented and running, this gate remains **blocked**, not passed.

### P0 — Security and authorization
- CodeQL findings are triaged and material findings fixed or explicitly risk-accepted.
- Gitleaks scans the repository history; any confirmed exposed credential is revoked/rotated, not merely deleted from the latest file.
- Dependency updates and vulnerability alerts are reviewed.
- No secrets are placed in source files, frontend assets, workflow logs or normal application records.
- Backend permission checks are covered by negative tests, including cross-project access and unauthorized state transitions.
- Credentials are tested for expiry, scope, rotation and revocation before they enable privileged integrations.

### P1 — Runtime evidence
- Tests run against a controlled test environment with distinct owner/contributor identities.
- State transitions, retries, concurrent acceptance, audit history and exactly-once XP effects are inspected in persisted state.
- Failures, unauthorized requests and malformed inputs are verified, not inferred from UI presentation.

### Release gate
A release candidate must identify the source commit, artifact digest, workflow results, remaining findings and approver. Any production deployment must use a protected GitHub Environment with explicit reviewer approval, environment-scoped credentials, least privilege, and a rollback path.

## 5. CD boundary: deliberately not automated yet

As of this specification, the prototype is hosted on AppDeploy, but a verified GitHub Actions-to-AppDeploy deployment interface, deployment credential, reproducible independent build and smoke-test/rollback path have not been established.

Therefore:
- no GitHub Actions workflow should claim to deploy the application;
- do not store deployment credentials until the exact deployment mechanism and scope are approved;
- do not deploy from pull-request workflows;
- do not deploy a commit solely because static tests passed;
- treat the observed live URL and a committed source snapshot as separate evidence until the deployment records prove which source version is live.

### Conditions to enable CD

1. Document the supported deployment API/CLI or platform integration and identify its owning account.
2. Establish a reproducible build from a clean commit and produce an immutable artifact.
3. Configure a protected `production` environment and narrowly scoped credentials through secret management.
4. Require all build, type, contract, dependency and security gates to pass.
5. Require an explicit production approval and deploy by immutable commit/artifact identity.
6. Run post-deployment health/smoke checks against the target environment.
7. On failure, stop promotion and execute the documented rollback or recovery procedure.
8. Record deployed version, artifact digest, actor/approver, workflow run, verification result and rollback status.

Do not enable the deployment workflow until these conditions can be implemented and tested.

## 6. Branch and repository settings outside workflow files

Workflow YAML cannot by itself enforce all repository settings. Configure and verify these in GitHub repository settings before inviting broader contributors:
- require pull requests for changes to `main`;
- require CI contract checks and CodeQL results before merge, once each check is established;
- dismiss stale approvals or require review of the latest changes where appropriate;
- disallow force-pushes and deletion of `main`;
- keep the default `GITHUB_TOKEN` read-only, overriding it per job only when necessary;
- restrict who may bypass required checks and who may approve production deployments.

These settings have not been verified or changed by this document.

## 7. Change and incident procedure

For each pipeline change:
1. inspect action ownership, release and full commit SHA;
2. update workflow, contract tests, and this specification together;
3. run the checks against the change;
4. inspect the resulting GitHub Actions run and logs;
5. record any gate that cannot run and why;
6. re-fetch the committed files and verify the default branch contains the intended version.

For a compromised action or credential, disable the affected workflow/integration, revoke and rotate credentials at the system that accepts them, assess recent runs and artifacts, then restore operation only after verification.

## 8. Reference guidance

- GitHub Docs, [Secure use reference for GitHub Actions](https://docs.github.com/en/actions/reference/security/secure-use): least privilege, reviewing action code, and pinning actions to full-length commit SHAs.
- GitHub Docs, [Managing GitHub Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository): action policies and repository-level controls.
- GitHub, [actions/checkout releases](https://github.com/actions/checkout/releases) and [actions/setup-node releases](https://github.com/actions/setup-node/releases): upstream release verification and maintenance.

This document states required controls and known gaps; it does not assert that deployment, branch protection, independent builds or end-to-end tests have already been implemented.
