# 10. First-Consumer Project Charter

**Status:** Operating charter, v0.2  
**Date:** 2026-10-12  
**Decision:** The Contribution Network itself is the first real project and its first consumer is its founder/operator.

## 1. Correct the starting premise

The Contribution Network is not only a hypothetical business model waiting for an external customer to justify its existence. Its founder is the first consumer and has a real need to build, operate, evaluate, and improve the network. The network itself is therefore the first end-to-end project through which the system is developed and used.

This is a deliberate **dogfooding** strategy: use the system's own project, contribution, acceptance, evidence, and XP concepts to improve the product itself. Build a useful project overall, not merely a mock marketplace or a demo disconnected from real work.

The founder can contribute what they can: requirements, architecture, product decisions, research, code, tests, documentation, design, security analysis, issue triage, integration, operations, and other useful work. These contributions count under the same transparent principles as community contributions.

This premise changes the development sequence, not the evidence standard. The founder's real use can validate usefulness for this first consumer and expose product defects. It does **not**, by itself, prove external customer demand, repeatable commercial economics, or product-market fit. Those remain separate questions for any future commercial offering.

## 2. Portfolio structure

Use the following hierarchy:

1. **Network:** shared operating rules, governance, identity/permissions, evidence, contribution records, XP, and future payment boundaries.
2. **Project lines:** strategic groupings such as 10, 17, and 5 where these are intended to represent the corresponding Sustainable Development Goals. A line is organizational metadata, not a hard limit on what may be built.
3. **Projects:** independent objectives with an owner, intended users or beneficiaries, scope, priorities, constraints, and acceptance conditions. The Contribution Network itself is Project 0 / the first real project.
4. **Work packages and contributions:** bounded deliverables or other clearly described inputs that move a project toward its outcome.
5. **Evidence and decisions:** inspectable results, tests, review rationale, rights, attribution, XP decisions, and any separate financial obligations.

The number of lines, projects, contributors, and contribution types is not fixed. New projects should use the shared framework rather than require new platform code by default.

## 3. Shared contribution principle

Any lawful and relevant form of contribution may be proposed, including but not limited to:

- problem discovery, requirements, prioritization, and architecture;
- research, analysis, domain knowledge, and data curation;
- software, automation, configuration, and infrastructure;
- product design, UX, accessibility, and visual assets;
- tests, validation, security review, quality assurance, and critique;
- documentation, examples, translation, localization, and education;
- integration, coordination, maintenance, operations, and incident response;
- community support, mentoring, partnerships, distribution, and resource provision;
- funding or other non-cash inputs under explicit terms.

Do not force every contribution into one taxonomy. Keep separate dimensions for the form of value, its project function, its acceptance/fulfilment method, funding mode, reward, and rights.

An unsolicited contribution does not automatically create payment, ownership, or publication rights. Material obligations and permissions must be explicitly agreed.

## 4. Founder contributions and XP

**Founder contributions are eligible for XP.** The founder does not need to be an external user or a community member to have their work recorded. XP must represent evidenced contribution outcomes, not merely account status, authorship, activity volume, commits, or time spent.

For each XP-eligible contribution, preserve:
- a contributor identity and the actual role performed;
- the project/work package and agreed scope;
- a short description of the result;
- acceptance criteria appropriate to the contribution;
- inspectable evidence or a reasoned record when the result cannot be represented as a file;
- the acceptance decision, verifier/reviewer identity, and rationale;
- any XP award, its rule/version, and a unique record preventing duplicate awards.

For the current prototype, the existing 50 XP per accepted contribution is a baseline rule, not a claim that all contributions require equal effort or have equal economic value. Keep XP separate from cash, payment obligations, and any claim of professional competence. Revise the scoring model only when real usage shows a clear need and a fair, explainable rule can be tested.

### Verification when one person is building the project

Do not block solo development because an independent reviewer is not always available. Instead, label the strength of verification accurately:

- **Evidence-checked / self-verified:** the author supplies the evidence and checks the published conditions. Suitable for bounded, low-risk work; it is not independent validation.
- **Independently reviewed:** a different qualified reviewer checks the work and criteria.
- **Automated checks passed:** repeatable tests or controls passed. State exactly which checks ran; automation does not validate requirements it does not cover.
- **Provisional or disputed:** material evidence is missing, a conflict exists, or a decision is challenged.

A contributor can receive XP for a genuinely completed, transparently self-verified contribution where the policy allows it; record that verification level rather than presenting it as independently approved. Security-sensitive changes, production releases, financial operations, access-control changes, and consequential disputes require stronger gates proportionate to risk. Use independent review when available, and never let an XP award bypass a safety or release gate.

Separate **author**, **reviewer**, **approver**, and **payout authority** as distinct fields even where one person currently fills more than one role. Record conflicts and apply stricter controls as the project gains contributors, funds, or production risk.

Never issue duplicate XP for the same accepted contribution when it appears in multiple views or is revised. Revisions should update the same contribution lineage and preserve history; a materially distinct additional outcome may be recorded separately with its own evidence.

## 5. Product development: build overall, validate each change

Use the Network as the first real project, but avoid trying to build every possible future feature at once.

Prioritize work using this order:

1. **User value:** remove a real obstacle to building, using, maintaining, or contributing to the Network.
2. **Correctness and trust:** permissions, state transitions, evidence, auditability, privacy, rights, XP integrity, and financial boundaries.
3. **Reliability:** reproducible setup, tests, recovery, observability, dependency management, and safe releases.
4. **Contribution effectiveness:** make it easier to discover work, agree terms, contribute, review, revise, integrate, and learn.
5. **Scale and convenience:** automate and expand only when repeated use demonstrates the need.

Apply the elimination-first method to each feature: challenge the requirement, remove unnecessary steps, simplify what remains, shorten feedback cycles, then automate stable repeated work. This is not a reason to shrink the ambition; it is a way to build the full project without accumulating unnecessary complexity.

A feature is not complete solely because it appears in the interface. Define its intended behavior, acceptance evidence, failure cases, and limitations. Distinguish static tests, unit tests, integration tests, live end-to-end tests, security review, and user validation. Report only the checks that actually ran.

## 6. Self-hosting and the bootstrap rule

The Network should progressively use its own contribution model to improve itself. However, do not make delivery depend on an incomplete feature that is needed to build that very feature.

Until the application reliably supports a workflow, use the simplest reliable fallback: GitHub issues and pull requests, a decision log, tests, or a structured contribution ledger. Mark which records were managed manually and which went through the running product.

Move a workflow into the product only after its behavior and safeguards are understood. Keep a clear trace from the original request through implementation, review, evidence, and release. Do not claim that dogfooding occurred merely because a feature exists; record an actual use and the result.

## 7. Repository responsibilities

- **`contribution-network`:** strategy, portfolio structure, operating contracts, economics, governance, and decision history. This charter is the authoritative statement of the first-consumer premise.
- **[`Contribution-bounties-centre-`](https://github.com/Loofy147/Contribution-bounties-centre-):** the initial application prototype implementing parts of the contract. Its [portfolio-alignment page](https://github.com/Loofy147/Contribution-bounties-centre-/blob/main/docs/portfolio-alignment.md) records the shared rules and implementation gaps. Application rules and tests should be aligned with this charter incrementally. The app does not yet implement the complete founder self-contribution XP and verification-level workflow.
- **GitHub issues and pull requests:** concrete work items, implementation trace, code review, and release evidence.
- **Shared project/contribution records:** connect strategic intent to the work performed without duplicating policy text unnecessarily.

Do not maintain competing copies of the same authoritative rule. If product behavior conflicts with the charter, record the discrepancy and resolve it; do not assume either the documentation or interface is correct without verification.

## 8. Initial engineering priorities

1. **Make the source reproducible.** Resolve undeclared AppDeploy client/server runtime dependencies or document and test a compatible local path. Record actual setup, build, and test outcomes.
2. **Prove the critical workflow.** Verify authorization, bounty/contribution ownership, criteria snapshots, review decisions, resubmission, history, and no duplicate XP under retries or concurrency.
3. **Fix acceptance-criteria policy.** Prefer at least one clear verifiable criterion; add criteria only when needed. Update validation, tests, product copy, and docs together rather than keeping a fixed 2–10 requirement by inertia.
4. **Create project/portfolio support in stages.** Start with project identity, owner, outcome, status, line/tags, work packages, contributors, evidence, and decisions. Add multi-project permissions and isolation before inviting unrelated communities.
5. **Create an honest contribution/XP ledger.** Record accepted work, evidence, author/reviewer roles, verification level, XP rule, and idempotency. Do not treat XP as money or a credential.
6. **Close the trust gaps.** Define security reports, dispute/appeal paths, rights and licenses, privacy controls, backup/restore, release/rollback, and incident handling proportional to current exposure.
7. **Add funding and payment only as real capabilities.** Until funding receipt, settlement, failure, refunds, and related obligations are implemented and tested, present paid items as proposals/listings—not guaranteed payouts or escrow.
8. **Use the product on itself.** Track actual development and maintenance work as contributions, including the founder's contributions, and record what dogfooding exposed and changed.

These are ordered priorities, not a requirement to finish every item before useful work can proceed. Safety-critical checks must not be bypassed for speed.

## 9. How to measure progress

Track internal product progress separately from market and social-impact claims.

**First-consumer usefulness**
- important workflows the founder can complete end to end;
- recurring obstacles removed;
- time and rework to define, implement, review, and release improvements;
- defects found by actual use;
- documentation and setup reproducibility.

**Trust and engineering**
- authorization and state-transition tests passed;
- acceptance and XP side effects are idempotent;
- verification evidence and audit history are complete;
- recovery and rollback have been exercised;
- known limitations and unresolved risks remain visible.

**Contribution quality**
- accepted outcomes and their evidence;
- review turnaround and revision causes;
- contributor-reported clarity and fairness;
- founder and community contributions recorded without double-counting;
- verification level correctly labeled.

**External validation, when pursued**
- a real outside user or buyer using the system;
- a specific unmet need and observed alternative;
- willingness to commit resources or pay;
- repeat use and full delivery economics.

Successful internal use is legitimate progress. It must not be confused with external product-market fit. Likewise, do not delay improvements that matter to the first consumer merely because an external customer has not yet appeared.

## 10. Operating decision

Build the Contribution Network as a real, evolving project for its first consumer—the founder—and use it to validate, improve, and document its own operating model. Count the founder's contributions under transparent evidence and XP rules. Keep the architecture open to community-run projects and contribution types, while shipping in safe, testable increments.

The ambition is broad; each change still needs a clear reason, a proportionate acceptance test, and honest evidence. The project should become more useful, secure, powerful, and maintainable through demonstrated work—not through claims about features that have not been verified.
