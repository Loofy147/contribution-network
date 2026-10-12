# 2. Project and Contribution Lifecycle

**Status:** Working process proposal, v0.1  
**Date:** 2026-10-12

## 2.1 The unit structure

Use four connected record types:

1. **Project:** the objective, beneficiary/customer, scope, constraints, budget/funding model, outcome criteria, team, deadlines, and governance rules.
2. **Contribution request:** a defined need within a project, including expected result, dependencies, eligibility, evidence, acceptance criteria, deadline, and reward terms if any.
3. **Contribution record:** an actual offer or submitted contribution by a person or organization, with evidence, attribution, status, rights and agreed benefit/reward.
4. **Outcome/deliverable:** the integrated result and its acceptance evidence.

A contribution may satisfy a request, be proposed before a request exists, or be an unsolicited offer. Unsolicited contributions should not create automatic payment or ownership rights; their use and terms must be explicitly accepted.

## 2.2 Project lifecycle

### Stage 1 — Propose
Record:
- problem or opportunity;
- intended outcome and beneficiary;
- project owner and decision-maker;
- scope and explicit exclusions;
- success criteria and evidence;
- required contribution domains;
- dependencies and major risks;
- budget and funding status;
- desired deadline;
- intended ownership, licensing and reuse model.

A vague aspiration may enter discovery, but should not be presented as an actionable funded project.

### Stage 2 — Qualify
Check whether the project has a credible owner, legitimate purpose, achievable scope, appropriate rights to use required inputs, a plausible funding plan, and clear acceptance decisions.

Decide whether it belongs in self-service, coordinated or managed-delivery mode.

### Stage 3 — Plan contributions
Break the objective into contribution requests and identify:
- tasks with clear independent acceptance criteria;
- interdependent contributions that must be sequenced;
- shared outcomes requiring joint evaluation;
- non-task contributions such as access, information, assets or funding;
- integration and review work;
- maintenance or follow-up requirements.

Avoid decomposing work so aggressively that the coordination cost exceeds the benefit.

### Stage 4 — Publish terms
Each request should state what is needed, why it matters, how the contribution will be assessed, what evidence is required, when it is due, what happens after acceptance, and the applicable reward and rights.

Where price/value is optional or unknown, state that explicitly. If the contributor expects payment, a reward agreement must be accepted before work begins.

### Stage 5 — Offer and agree
A contributor can:
- accept a predefined bounty;
- propose a price or terms;
- negotiate a milestone or scope;
- offer a voluntary contribution;
- offer a resource or asset with clearly specified availability and permissions;
- propose an alternative way of meeting the project's need.

Project owners may accept, decline or request clarification, with reasons recorded for material decisions.

### Stage 6 — Contribute
Track status and evidence without equating online activity, hours or raw submission count with success. Record changes in scope and obtain approval before materially changing reward or rights terms.

### Stage 7 — Review and accept
Apply the published criteria. The reviewer records ACCEPTED, REVISION REQUESTED, REJECTED, DISPUTED, or BLOCKED, along with evidence and reasons.

A submission should not be marked accepted merely because a deadline passed or an automated tool returned no error. Avoid asking a contributor to perform substantial unpaid extra work under an informal revision request.

### Stage 8 — Integrate
Combine accepted contributions, test dependencies and evaluate whether the project-level outcome is met. Integration is a distinct workstream and must have an owner and budget when it requires meaningful effort.

### Stage 9 — Settle and attribute
Record agreed payments, non-cash benefits, approved expenses, credits, licenses, ownership and attribution. Keep payment settlement separate from a subjective estimate of the contribution's economic value.

### Stage 10 — Close and learn
Publish a closing summary consistent with confidentiality and rights: what outcome was delivered, what evidence exists, what remains limited, how funds were used, and what each participant may claim or reuse. Ask for feedback, record actual costs and identify follow-on maintenance needs.

## 2.3 Keep lifecycle dimensions separate

Do not use one universal status list for projects, contribution requests, individual contributions, funding, and settlement. These are different questions and should not be combined into one enum.

For the manual pilot, use the smallest status sets that affect decisions:

**Project:** DRAFT → QUALIFYING → OPEN → ACTIVE → ACCEPTANCE → CLOSED; CANCELLED may occur where appropriate.

**Contribution request:** DRAFT → OPEN → PAUSED / FILLED / CANCELLED.

**Contribution:** OFFERED → AGREED → IN_PROGRESS → SUBMITTED → ACCEPTED / REVISION_REQUESTED / REJECTED / DISPUTED / WITHDRAWN. Use BLOCKED only when someone needs to act to unblock the contribution.

**Funding:** record whether funds are UNFUNDED, PARTIALLY_FUNDED, or FUNDED separately from project status. Record the actual amount committed, received, and available where relevant.

**Settlement:** NOT_DUE / DUE / PAID / DISPUTED_OR_HELD / REFUNDED_OR_CANCELLED, only when a monetary settlement applies. Non-monetary benefits may need a fulfilment note rather than a payment status.

Implement only the states the pilot actually needs. An accepted contribution can still be awaiting settlement; a project can be open while unfunded only if that fact is unmistakable and no one is misled into believing a reward is funded.

## 2.4 Contribution model: separate the dimensions

The contribution taxonomy should describe what is offered without conflating its form, function, valuation method, or reward arrangement.

**Contribution form — what is provided:**
- work or activity;
- knowledge, expertise, or judgment;
- artifact or intellectual property;
- data, evidence, or source material;
- money or other financial support;
- physical or digital resource, equipment, or infrastructure;
- access, introduction, or relationship;
- distribution, audience access, or promotion;
- another lawful input that has been explicitly described.

**Project function — what it does in the project:**
- framing and research;
- production or implementation;
- review, testing, or assurance;
- coordination, integration, or governance;
- funding and resource provisioning;
- distribution and market access;
- maintenance and support.

These are flexible labels, not fixed mutually exclusive buckets. One record can have a form and one or more functions where that helps route or review the work.

**Acceptance/fulfilment method — how it is checked:** inspect an artifact, test a result, confirm an agreed resource was provided, document an introduction or permissioned access, reconcile funding, or use another evidence method appropriate to the promise.

**Reward mode — what was agreed:** keep this separate from contribution form and function. An accepted data contribution, for example, might be paid, voluntary, licensed, reimbursed, or governed by a different agreement. The taxonomy must not decide compensation, ownership, or economic value.

Funding is a project input and a financing relationship; do not count it as if it were the same kind of deliverable as labor or an artifact. Likewise, “outcome-based” is a possible acceptance or reward arrangement, not a contribution category.

## 2.4 Contribution categories

Keep categories extensible. Initial taxonomy:

- **Production:** code, design, writing, translation, fabrication, implementation, analysis.
- **Knowledge:** expertise, research, ideas, methods, problem framing, domain judgment.
- **Data and evidence:** datasets, source material, observations, labels, measurements, documentation.
- **Review and assurance:** testing, validation, critique, moderation, accessibility, security, independent verification.
- **Assets and intellectual property:** software components, content, templates, methods, designs, patents or licenses, where rights are clear.
- **Resources and infrastructure:** tools, compute credits, equipment, facilities, workspace, materials or services.
- **Funding:** cash, grants, sponsorship, prizes, pooled support.
- **Access and relationships:** introductions, permissioned access, partnerships, user recruitment.
- **Distribution and market access:** promotion, sales leads, audience reach, community support, event access.
- **Coordination and governance:** project management, integration, facilitation, decision records, community administration.
- **Maintenance and support:** ongoing care, bug fixing, support, updates, monitoring.
- **Outcome-based contributions:** measurable results delivered under predefined attribution and reward rules.

One contribution may have multiple categories. The taxonomy describes what was provided; it does not by itself determine value or reward.

## 2.5 Dependency and integration rules

Every contribution request that depends on other work should reference those dependencies. Projects should identify:
- critical path and blockers;
- expected integration owner;
- test/review responsibility;
- contingency and rework budget;
- what occurs if a dependency is delayed, rejected or unavailable.

A complete project is not the sum of all accepted contributions unless the pieces actually integrate and satisfy the outcome criteria.

## 2.6 Minimal project record

Required before a project is opened for commitments:
- project ID and owner;
- title, outcome and beneficiary/customer;
- scope and exclusions;
- acceptance criteria;
- funding status and approved budget or explicit non-cash model;
- contributor/reviewer decision roles;
- privacy and input rights;
- contribution and reward terms;
- dispute and cancellation rules;
- deadline and communication channel.

A contribution call should never imply that the platform guarantees payment, ownership, employment, or project success unless the relevant terms really provide it.
