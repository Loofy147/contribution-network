# 7. Critical Design Review and Revised Model

**Status:** Decision review, v0.2  
**Date:** 2026-10-12  
**Purpose:** Challenge the current model before additional product design or implementation.

## Executive verdict

**Continue with the concept, but do not build a broad marketplace yet.** The current documents are thoughtfully cautious about rights, evidence, rewards, and premature automation. However, the business remains commercially unproven and too broad at the point where focus matters most: the first buyer, the first recurring problem, the first offer, and the economics of coordinating it.

The strongest version of the idea is not “a platform for every kind of contribution in every niche.” It is:

> **A human-led service that helps a specific kind of buyer deliver a repeatable outcome by coordinating several materially different kinds of contribution under clear terms, acceptance evidence, rights, and budget.**

“Cross-niche” should remain a long-term design principle, not the initial go-to-market promise. A narrow paid project is the experiment; a general network is a possible later product. This is consistent with the current benchmark evidence: managed project scoping already exists at Topcoder, standard contract and payment options exist at Upwork, and open-source sponsorship already recognizes contributions beyond code. The potential difference must be demonstrated through better outcomes, integration, trust, or economics—not asserted from breadth alone. See [Topcoder](https://www.topcoder.com/how-it-works), [Upwork client pricing](https://www.upwork.com/pricing/client), and [GitHub Sponsors](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors).

## 1. Assessment snapshot

| Area | Assessment | Why it matters |
|---|---|---|
| Core concept | Promising, unproven | Project-level coordination can be useful, but no customer evidence is recorded yet |
| Initial customer and problem | **Critical gap** | No selected buyer, recurring use case, alternative, or demonstrated budget |
| Launch offer | **Critical gap** | The documents describe a platform, coordination service, and managed-delivery business at once |
| Breadth of contribution types | Strategic potential; launch risk | A universal model can become an abstraction tax if each type needs different proof, rights, and acceptance |
| Differentiation | Unproven | Adjacent offerings already cover challenges, freelancers, sponsorship, and managed crowdsourcing |
| Incentives and rights | Strong foundation; high operating burden | The conceptual distinctions are good, but every exception creates negotiation and dispute cost |
| Unit economics | **Critical gap** | Coordinator, integration, review, rework, acquisition, and dispute costs are not yet measured |
| Trust and governance | Risks identified; controls not validated | Policies on paper do not demonstrate fair or reliable execution |
| Data and lifecycle design | Needs simplification | Current status list mixes separate lifecycle dimensions, and contribution categories mix different concepts |
| Build and automation discipline | Strong | Manual validation and elimination-first design are appropriate starting principles |

This is a qualitative assessment of the documents, not a score of market viability. There is no sales, pilot, or customer data yet.

## 2. The most important criticisms

### 2.1 The model starts with the supply concept, not a buyer's urgent problem — P0

“Any type of contribution” describes what the network might coordinate. It does not tell a customer why to buy, what they would replace, how often they would buy, or what outcome justifies the fee.

A business cannot validate “all niches” at once. Buyers differ in procurement, budget authority, urgency, evidence standards, risk, payment practices, and whether they want a tool, a service, or a guaranteed deliverable.

**Correction:** select one initial buyer/problem pair using evidence. Interview buyers who recently experienced the problem, document what they used instead, and ask for a specific paid pilot. Keep other use cases in a backlog; do not treat them as launch requirements.

### 2.2 Three businesses are bundled together — P0

The draft includes:
- self-service workflow software;
- a coordination/facilitation service;
- managed delivery in which the network assumes final-outcome risk.

These businesses have different customer promises, staffing needs, liability, costs, and pricing. Managed delivery may be valuable, but it should not silently emerge from a tool that was initially meant only to connect participants.

**Correction:** test the coordinated-service mode first. The network's role, decision authority, integration duties, service limits, and escalation rules must be explicit. Do not promise a guaranteed final outcome or act as a funds custodian merely because the workflow connects project participants. Reassess the operating model after paid pilots.

### 2.3 Coordination is both the value proposition and the main cost risk — P0

Combining several contributions does not automatically create a better outcome. It can create additional search, communication, dependency, review, integration, rework, and settlement costs. If the service saves the buyer three hours but requires ten hours of unpriced coordination, it may be a poor business even if the project succeeds.

**Correction:** measure the entire service, including founder/steward time at a realistic cost. Compare the pilot with the buyer's prior or best available alternative. The value claim should be a measurable improvement in outcome quality, elapsed time, buyer effort, risk, or total cost—not simply “more people contributed.”

### 2.4 “Contribution” currently mixes different kinds of things — P1

The taxonomy mixes:
- **form of input** (money, data, artifact, equipment);
- **function** (research, production, review, coordination);
- **access or relationship** (introduction, partnership);
- **financing** (funding);
- **delivery/reward method** (outcome-based).

These are different dimensions. For example, “review” describes a function, while “dataset” describes an artifact and “outcome-based” describes an arrangement. Funding is a financial input, not interchangeable with an accepted work product. A contribution can have more than one function, but these dimensions should not be forced into one flat category list.

**Correction:** keep a small shared record and separate the axes:
1. contribution form: work/activity, knowledge, artifact/IP, data/evidence, money, physical/digital resource, access/relationship, distribution, or other;
2. project function: research, production, review, coordination, maintenance, and so on;
3. fulfilment/acceptance method: evidence appropriate to that contribution;
4. reward agreement: a separate field or agreement, not a contribution category.

Do not score or compare all of these forms on one universal value scale.

### 2.5 Optional valuation must not mean optional rationale or ambiguous obligations — P1

It is correct not to require a monetary valuation for every contribution. But each accepted contribution still needs a clear purpose in the project, and each commitment needs clear terms.

**Correction:** distinguish:
- **expected project role/effect:** required in plain language, which may be qualitative;
- **formal value estimate:** optional and may be unknown, a range, or qualitative;
- **compensation/benefit agreement:** explicit before work begins if any benefit is promised;
- **rights and attribution:** separately explicit before work begins;
- **acceptance evidence:** appropriate to the contribution type.

Never infer the amount owed from a value estimate. Never imply that compensation will be decided after the work if no prior formula or agreement exists.

### 2.6 The proposed feature set is broader than the evidence permits — P1

The documents name many reward arrangements, project origins, contribution categories, revenue streams, operating modes, reputation ideas, and future governance choices. As a map of possibilities this is useful; as a first product specification it invites overbuilding.

**Correction:** pilot only what a specific project needs. Default to a funded project, fixed or negotiated cash terms where payment is involved, plainly voluntary contributions when no payment is promised, explicit rights, and human review. Defer royalties, revenue share, equity, reciprocal exchange, universal reputation, tokens, DAO/cooperative mechanisms, automated valuation, a public all-purpose marketplace, and custom workflow software until a repeated need is observed.

### 2.7 A completed project can still be an unviable business — P0

A successful delivery does not prove that customers will buy repeatedly, that contributors will return, or that the economics work. Volunteer or founder-subsidized labor can mask a negative-margin operation.

**Correction:** separate project success from commercial success. Measure external customer payment, fully loaded delivery cost, contribution margin, repeat demand, contributor experience, and the operational burden of exceptions.

### 2.8 Trust policies need executable operating rules — P1

The draft correctly identifies IP, privacy, fraud, disputes, fairness, and settlement risks. But it still needs simple operational rules for who decides, what evidence counts, what happens when criteria change, and who resolves a conflict.

**Correction:** before commitment, identify the decision-maker, reviewer, payment/benefit terms, rights, confidentiality, cancellation, revision limits, and dispute route. Scope changes require approval. Disputed or high-risk work may require a second reviewer. Do not use reputation or automated scoring as a substitute for an explainable decision.

### 2.9 Status and field design should not get ahead of the pilot — P1

The current lifecycle list mixes project states, contribution states, funding states, and settlement states. That makes rules harder to explain and invites a complex application schema before the workflow is known.

**Correction:** keep these as distinct dimensions, with a small status set for each. For the manual pilot, a spreadsheet and short decision log are sufficient. Add fields only when they change a decision, protect a participant, satisfy a real rule, or improve measurement.

## 3. Revised strategic decisions

### Keep

- Projects are the unit of coordination; integrated accepted outcomes are how project success is judged.
- Many contribution forms may be combined when they genuinely help deliver the outcome.
- Formal contribution valuation can be optional; commitments, rights, and acceptance rules cannot be ambiguous.
- Evidence, attribution, integration, review, settlement, and dispute handling matter.
- Start manually; do not automate an unproven process.
- Do not require a token, universal score, or speculative financial mechanism.

### Change

- Reframe “all niches” as a long-term capability, not an initial customer promise.
- Make the launch hypothesis a buyer-led coordination service for one repeatable outcome.
- Treat contributor funding, work, artifacts, access, and resources as different input forms with type-appropriate evidence and terms.
- Make the buyer, payer, outcome approver, and beneficiary explicit; they may be different people.
- Measure service economics including coordination and integration labor.
- Simplify the lifecycle schema and keep project, contribution, funding, and settlement statuses separate.

### Defer

- Public self-service marketplace launch.
- Multiple operating modes as concurrent offers.
- Custom SaaS, complex integrations, and automated matching.
- Automated valuation, universal reputation, pooled rewards, royalties, revenue share, or equity.
- Escrow or holding client funds without a suitable legal and payment arrangement.
- Governance structures that require an actual community and proven operating need.

### Do not claim yet

- That the network is unique or defensible.
- That all contribution types can be fairly compared within one framework.
- That cross-niche coordination is cheaper or faster than existing alternatives.
- That fees, subscriptions, or managed-delivery margins will be viable.
- That one successful pilot proves repeatable market fit.

## 4. Choose the first wedge without guessing

Build a shortlist of 3–5 candidate buyer/problem pairs. For each, record evidence—not just opinions—against these tests:

1. **Pain is recent and concrete:** the buyer has recently tried to solve the problem and can describe the cost of the current approach.
2. **A buyer and budget exist:** someone has authority to pay for the result or coordination service.
3. **The outcome is observable:** acceptance can be decided from evidence known before work begins.
4. **Coordination is genuinely multi-contribution:** at least two materially different contribution forms or specialist functions must be combined; otherwise a standard contractor or marketplace may already solve it.
5. **The workflow can repeat:** similar projects are likely to recur, rather than depend on a one-off exceptional situation.
6. **A manual supply path exists:** the needed contributors can be sourced and reviewed without building a marketplace first.
7. **Initial risk is manageable:** privacy, IP, safety, jurisdictional, and payment issues can be handled with proportionate controls.
8. **Economics have room:** the budget can cover contributor costs, review/integration, coordination, overhead, and a reasonable risk allowance.

Use **Pass / Fail / Unknown** with a short evidence note for each criterion. Do not produce a weighted score that disguises missing evidence. Reject or defer a candidate when a critical buyer, budget, acceptance, or supply assumption remains unknown.

A useful offer template is:

> We help [specific buyer] achieve [specific repeatable outcome] by coordinating [specific contribution forms/functions], measured by [observable acceptance criteria], with [clear scope and terms].

If that sentence remains generic after buyer research, the wedge is not yet clear enough.

## 5. The first pilot: what it must prove

### Pilot design

- One externally paying customer, not only a founder-funded demonstration.
- One narrowly scoped outcome and a named person authorized to accept it.
- At least two materially different contribution forms or specialist functions if the goal is to test the network's coordination thesis.
- A written scope, exclusions, acceptance criteria, budget, decision owner, rights, confidentiality, revision/cancellation rules, and payment terms before anyone commits.
- A human project steward and a simple contribution ledger.
- No substantial speculative unpaid work. Any voluntary contribution is clearly voluntary, and its terms and permitted use are explicit.
- A transparent separation of customer revenue, pass-through contributor funds, platform/service fees, non-cash inputs, and unpaid learning subsidy.
- A baseline from the customer's previous or best available alternative, where one exists.

The first pilot should not attempt to prove the entire future platform. It should answer whether the buyer's problem exists, whether orchestration helps, and whether the service can be delivered economically and fairly.

### Minimum measurement sheet

| Question | Measure |
|---|---|
| Did a real buyer pay? | Signed scope, amount actually paid, fee payer, and payment date |
| Was the outcome delivered? | Pre-agreed acceptance result, evidence, defects, and limitations |
| Did coordination help? | Buyer coordination hours, elapsed time, handoffs, blockers, and comparison with baseline |
| Could contributions be combined? | Distinct contribution forms/functions used, dependencies, integration failures, rework |
| Was the process fair and clear? | Terms agreed before work, reasons for decisions, revision disputes, rights/attribution records |
| Did the economics work? | Service revenue excluding pass-through funds, contributor costs, review/integration, coordinator time, acquisition effort, processing, dispute and rework costs |
| Will this repeat? | Follow-on purchase, paid referral, or a second comparable buyer—not compliments alone |
| Will participants return? | On-time settlement, contributor feedback, repeat willingness/action, unresolved disputes |

Record founder and volunteer time; do not treat it as free. Where exact unit costs are not yet known, label estimates and run sensitivity cases for higher coordination, rework, and acquisition cost.

### Provisional decision gates

These are proposed operating rules, not universal industry benchmarks. Update them when the first baseline and economics are available.

**Gate A — Problem evidence:** conduct a focused round of interviews with buyers who recently faced the same type of problem. Continue only when there is a specific current workaround, identifiable budget owner, observable outcome, and credible route to a paid pilot.

**Gate B — Pilot acceptance:** proceed only when a real external buyer agrees to the scope and terms and the project has enough funded budget—or a clearly disclosed non-cash model—to honor every promised commitment. Close the project with an acceptance decision and settlement record.

**Gate C — Repeatability before software:** as a default, require three paid pilots in the same initial use case across at least two customers, or document a compelling exception. The same essential workflow should repeat; delivery must be acceptable, rights and settlements must be honored, and fully costed economics must show a credible path to positive contribution margin. The exact numerical thresholds for time, margin, rework, and repeat purchase should be set before each experiment, not chosen after seeing results.

**Stop or redesign** if buyers like the concept but will not pay, if the buyer can coordinate more cheaply without the network, if integration/rework consumes the margin, if value cannot be accepted fairly, or if rights/payment risks cannot be managed proportionately.

## 6. Apply the elimination-first method

1. **Question requirements:** every proposed requirement needs an outcome, owner, evidence, and removal test.
2. **Delete:** remove fields, steps, reward types, and features that do not change decisions or protect a real interest.
3. **Simplify:** use one small core record and only add contribution-specific rules where needed.
4. **Accelerate:** measure queue time, review delays, scope changes, rework, and settlement; reduce the cause rather than bypassing fair review.
5. **Automate last:** after repeated paid projects show stable workflow and known exceptions.

For each proposed feature, decide **Keep / Remove / Simplify / Defer / Automate** and record the evidence. This review itself must not become an extra approval bureaucracy.

## 7. Research basis and limits

The current research is directional, not a market validation study. Relevant reference points include:
- Kohler's work on how crowdsourcing models create and capture value, and the challenge of sustaining those models: [California Management Review (2015)](https://journals.sagepub.com/doi/10.1525/cmr.2015.57.4.63) and [Journal of Business Strategy (2017)](https://www.emerald.com/jbs/article-abstract/38/2/25/196130/Crowdsourcing-business-models-that-last).
- Research that classifies different marketplace business-model choices across value creation, delivery, and capture: [Taeuscher and Laudien, “Understanding platform business models”](https://pure.manchester.ac.uk/ws/files/78787819/2017_Taeuscher_Laudien_Platform_Business_Models_Author_version.pdf).
- A systematic literature review of crowdsourcing and open innovation: [Review of Managerial Science](https://link.springer.com/article/10.1007/s11846-021-00482-9).
- Practical comparisons with adjacent service and marketplace models in [Research and Competitive Benchmarks](05-research-and-benchmarks.md).

These sources support careful model selection and comparative research; they do not establish that this specific network has demand, is unique, or can earn a profit. The decisive evidence must come from actual buyers, paid delivery, and measured economics.

## Final decision

**Proceed to buyer/problem selection and a paid manual coordination pilot. Do not proceed to broad product implementation yet.** The next meaningful milestone is not another feature list: it is a well-chosen customer, a signed outcome and terms, delivered evidence, a full cost record, and a decision based on what happened.
