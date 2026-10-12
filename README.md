# Contribution Network Bounties

**Status:** Business-model foundation — draft v0.1  
**Last updated:** 2026-10-12

## Purpose

The Contribution Network is a project-based, cross-niche network for turning needs into outcomes by coordinating many kinds of contribution. A contribution may be work, knowledge, research, data, an asset, a resource, funding, review, access, distribution, coordination, maintenance, or another lawful form of value.

The network is not just a job board or a software-bounty site. **The project is the unit of coordination; contributions are the units of participation; the accepted outcome is the unit of delivery.**

The Contribution Network itself is Project 0 and the first real project: its founder is the first consumer, using the system to build, test, and improve the system. This dogfooding validates first-consumer usefulness, not external market demand by itself. Other projects, including examples such as Proofline, may later use the network; they are examples, not the definition or limit of its scope.

## Foundational documents

1. [Business model](docs/01-business-model.md) — users, customers, value proposition, platform role, revenue and strategic choices.
2. [Project and contribution lifecycle](docs/02-project-and-contribution-lifecycle.md) — how projects are framed, contributions proposed and combined, and outcomes accepted.
3. [Value, rewards and economics](docs/03-value-rewards-and-economics.md) — optional valuation, reward agreements, project budgets and unit economics.
4. [Governance and validation plan](docs/04-governance-and-validation.md) — trust, rights, disputes, market research and pilot gates.
5. [Research and competitive benchmarks](docs/05-research-and-benchmarks.md) — academic and official sources, comparable models, and what remains unproven.
6. [Elimination-first design method](docs/06-elimination-first-design-method.md) — challenge requirements, delete unnecessary parts, simplify, accelerate cycle time, then automate.
7. [Critical design review](docs/07-critical-design-review.md) — structured criticism, revised launch thesis, pilot metrics, gates, and stop conditions.
8. [Open-source and paid-work pathway](docs/08-open-source-and-paid-pathway.md) — contributor learning, funding modes, rights, and safeguards.
9. [Integrated contribution-to-capability-to-work model](docs/09-integrated-contribution-to-capability-work.md) — one shared work system connecting public outcomes, funded tasks, learning, contribution evidence, and customer delivery.
10. [First-consumer project charter](docs/10-first-consumer-project-charter.md) — the Network itself as the first real project, founder contribution XP, dogfooding, verification levels, and initial engineering priorities.
11. [Engineering primitives and integration architecture](docs/11-engineering-primitives.md) — GitHub App permissions, MCP authorization/tool boundaries, database organization, secrets, audit/idempotency, and rollout gates.
12. [Credential, bearer-token, key and API management](docs/12-credential-and-api-management.md) — provider credentials, API key issuance, bearer-token validation, secret storage, scopes, rotation/revocation, versioned API contracts, and acceptance gates.

## Working principles

- **Outcome-first:** begin with the project objective and who benefits, not with a predetermined list of tasks.
- **Cross-niche:** contributions from different domains can combine within one project.
- **Value pluralism:** value may be monetary or non-monetary and may be difficult to quantify.
- **Optional valuation, explicit terms:** a contribution's value estimate can be unknown or omitted. Any promised compensation, conditions, ownership, permitted reuse, and credit must still be clear before work starts.
- **Evidence over activity:** record what was contributed and how it was used; do not treat submissions, hours, popularity, or AI-generated claims as proof of value by themselves.
- **Fair allocation:** define acceptance, reward and dispute rules before contributors commit.
- **Project-level traceability:** maintain records of dependencies, contributors, evidence, decisions, rewards and rights.
- **Trust by design:** protect confidential information, respect licensing and permissions, minimize data collection, and prevent deceptive or harmful activity.
- **Eliminate before optimizing:** challenge requirements, delete unnecessary parts, simplify what remains, accelerate cycle time, and automate only after the process is proven.
- **Validate before automating:** operate the first projects manually and build only after repeated needs are observed.
- **Narrow launch, broad architecture:** support a broad contribution model conceptually, but market and validate one specific buyer problem first.
- **No premature tokenization:** the model does not require a token, speculative asset, or on-chain mechanism.
- **One contribution system, explicit funding modes:** voluntary public work, funded public work, customer-funded public deliverables, and confidential paid work can connect through one workflow without blurring their money, rights, privacy, or obligations.
- **Learning through useful work:** review, mentorship, increasing responsibility, and evidence can support contributor growth; none guarantees a paid assignment.
- **Reciprocal public/private value:** customer demand may fund reusable public improvements only when the scope, license, release, and customer benefit are agreed.
- **Measure both shared and separate outcomes:** public usefulness, contributor development, customer delivery, and commercial sustainability are related but distinct.
- **First consumer first:** build and use the Network itself as the first real project. The founder's useful contributions count under the same transparent evidence and XP rules; author identity, verification strength, and release approval remain explicitly recorded.

## Initial business-model hypothesis

A project owner or funder defines a desired outcome and funds a project budget, or otherwise states a credible funding model. Contributors propose or complete valuable contributions under clear terms. The network supports project framing, contribution discovery, coordination, verification, attribution and settlement. It earns revenue from disclosed coordination/delivery fees and optional business services; project funding is not automatically platform revenue.

The network may support several operating modes:

- **Self-service:** the project owner coordinates the project using network tools.
- **Coordinated:** the network helps break down work, match contributions, manage milestones and verify work.
- **Managed delivery:** the network assumes defined responsibility for integration and a contracted final outcome.

These modes have different costs, responsibilities and risk. They must be validated before a permanent pricing policy is chosen.

## What is not decided yet

- Exact launch customer segment and first paid use case.
- Initial pricing and fee payer.
- Whether the first operating mode is self-service, coordinated or managed delivery.
- Eligibility and review requirements for each contribution type.
- Default IP, license, credit and reuse terms.
- Legal entity, jurisdictions, worker classification, payment-provider design and any regulated activity.
- Whether or when the network should offer subscriptions, licensing, outcome-sharing or cooperative/member governance.

Do not present these hypotheses as proven market facts.

## Current decision

The long-term ambition is a cross-niche contribution network. Its first real project is the Network itself, built and improved by its founder as first consumer. This internal project can validate usefulness, workflow, and engineering quality. A separate narrow buyer/problem pilot is still required before claiming external market demand or choosing to scale a commercial service. Do not confuse these two kinds of evidence.

The immediate objective is to build and use the Network on its own first real project. Track actual founder contributions, tests, decisions, and accepted outcomes through transparent evidence and XP rules; use a manual GitHub-based fallback when the running product cannot yet support a workflow. In parallel, keep external demand, paid pilots, and full delivery economics as separate evidence gates for any later commercial offering. See the [critical design review](docs/07-critical-design-review.md), [open-source pathway](docs/08-open-source-and-paid-pathway.md), [integrated model](docs/09-integrated-contribution-to-capability-work.md), and [first-consumer charter](docs/10-first-consumer-project-charter.md).

### Current working state and future control plane

Until the system passes its readiness gates, active design, implementation, tracking, and improvement stay in the existing `Loofy147` repositories: this strategic repository and [`Contribution-bounties-centre-`](https://github.com/Loofy147/Contribution-bounties-centre-), supported by GitHub issues and pull requests. [`contribution-cloud/Contributions-centre`](https://github.com/contribution-cloud/Contributions-centre) is reserved as the future portfolio and repository-management control plane. It is intentionally deferred: do not initialize it, move active work there, or make development depend on it before the system is demonstrably ready. The transition boundary and acceptance gates are documented in [the first-consumer charter](docs/10-first-consumer-project-charter.md) and [the engineering architecture](docs/11-engineering-primitives.md).

## License and usage

No repository license has been selected yet. Do not infer reuse permissions from the repository being public. Choose and add a license after deciding what it covers, including third-party materials.
