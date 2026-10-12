# 3. Contribution Value, Rewards and Economics

**Status:** Working framework, v0.1  
**Date:** 2026-10-12

## 3.1 Four concepts that must stay separate

1. **Contribution:** what a person or organization provides.
2. **Value evidence/assessment:** what can be demonstrated about its usefulness or effect.
3. **Reward agreement:** what benefit or payment has been promised in exchange, if any.
4. **Rights and attribution:** who owns, licenses, may reuse, or should be credited for the contribution.

These are related but not interchangeable. A contribution's estimated business value is not automatically the amount owed to its contributor. A high reward does not prove high value. A low or unknown value estimate does not erase an agreed payment.

## 3.2 Value may be optional; purpose may not be unclear

The project must be able to explain the expected role or intended effect of a contribution in plain language. That rationale may be qualitative. A formal monetary estimate or universal score is not required.

Formal assessment may be:
- defined before the contribution;
- proposed by a contributor;
- negotiated by the parties;
- expressed as a range;
- assessed after evidence is available;
- described qualitatively;
- measured in a relevant non-monetary unit; or
- omitted when it would not affect a decision.

Keep this as a simple optional note in the pilot ledger: estimate or description, basis/assumptions where useful, author, and date. Do not introduce a complex valuation status machine until repeated projects show a decision it helps make.

Avoid false precision and universal scores that compare incomparable contributions (for example, a referral, a safety review, a dataset, and cash) as though they were the same thing. A value estimate is not compensation, and the amount of agreed compensation is not proof of economic value.

## 3.3 Reward modes

Potential modes include:
- predefined fixed bounty;
- fixed fee for a milestone or deliverable;
- hourly/time-based payment when suitable and lawful;
- contributor-proposed price accepted before work;
- negotiated price or scope;
- share of a pre-funded project reward pool under written allocation rules;
- expense reimbursement;
- non-monetary benefit or recognition;
- voluntary contribution with no payment promise;
- outcome-dependent bonus with a measurable trigger agreed in advance;
- contractual royalty or revenue share;
- ownership, equity or cooperative/member rights where legally structured;
- reciprocal contribution or in-kind exchange, with explicit scope and rights.

The initial pilot should favor fixed rewards, negotiated rewards and clearly voluntary contributions. Use more complex modes only after there is a specific need and legal/accounting review.

### Mandatory clarity rule

**Value may be unknown; obligation must not be ambiguous.**

Before work begins, the parties must know whether compensation exists and how it is determined, when it is payable, what acceptance conditions apply, who owns or licenses the result, and what happens after rejection, cancellation or dispute.

If a project says "we will decide later what your contribution was worth," it must not imply a payment promise. If payment is outcome-dependent, the outcome measure and calculation must be agreed in advance.

## 3.4 Minimum pilot record and conditional fields

Use one row or record per agreed contribution. Record only what is needed to coordinate the work, make a fair decision, honor the agreement, and learn from the pilot.

**Minimum for a contribution with commitments:**
- project and contribution identifier;
- contributor or organization and permitted attribution name;
- what is offered and its expected role/effect;
- request/dependency link, if any;
- evidence or artifact link and relevant provenance;
- agreed scope, acceptance criteria, deadline, reviewer, and decision/reason;
- reward/benefit terms, payer, recipient, conditions and due date, if applicable;
- rights, license, attribution, reuse and confidentiality terms;
- status, material changes, dispute and settlement history where relevant.

**Conditional fields—only when they affect the project:** value estimate/range and method; currency or non-monetary unit; approved expenses; funding and milestone references; security/privacy classification; detailed review evidence; organization identifiers; and contract or compliance references.

Do not make public every identity, payment, value, or evidence record. Set access and retention based on what the project needs and applicable obligations. Treat this as a pilot checklist, not a final database schema.

## 3.5 Reward allocation

Reward allocation can use different rules depending on the project:
- fixed reward for each accepted contribution;
- milestone budgets;
- a project-level pool divided by a predefined rubric;
- a customer-approved change budget;
- revenue share based on a defined, auditable calculation;
- voluntary contributions that are recognized but have no promised monetary reward.

If a pooled reward is used, publish the pool size or funding formula, eligible contribution types, review rules, who decides, how conflicts are handled, and whether an appeal is available. Do not silently change allocation rules after people have contributed.

Avoid automatically awarding all pool value to the most visible or last-stage work. Research, coordination, quality assurance, maintenance and foundational infrastructure may be essential but less visible. Record them and design criteria suited to the project.

## 3.6 Budget structure

For each project, distinguish:
- customer/sponsor commitment;
- cleared or available funds;
- contributor reward budget;
- review and integration budget;
- project management budget;
- payment-processing and currency costs;
- contingency / rework reserve;
- network fee;
- refunds or liabilities;
- actual expenditure;
- remaining balance and closure treatment.

Do not advertise a reward as funded if money is not available or the funding condition is not made clear. The platform should not imply it is holding escrow unless the legal and payment setup supports that service.

## 3.7 Revenue and unit economics

Candidate network revenue:
- coordination and facilitation fee;
- fee for managed delivery;
- transaction fee on defined eligible payments;
- organization subscription;
- paid review/verification services;
- enterprise workflow or integration fees;
- license revenue on assets the operator actually has permission to license.

Illustrative formulas:

**Project gross contribution**
= customer project revenue
− direct contributor payments
− direct review/integration costs
− transaction costs
− other direct project costs.

**Network operating contribution**
= recognized platform fees and service/subscription revenue
− network-paid direct operations
− acquisition, support, dispute, compliance and infrastructure costs allocated to those revenues.

**Take rate** (if used)
= network transaction-fee revenue ÷ eligible transaction value.

Always specify whether the denominator is funded budget, accepted work value or payouts; those are not interchangeable.

Project budget / funds passed to contributors are not automatically platform revenue. Estimated non-cash contribution value is not cash revenue. Voluntary work does not mean the resulting project has zero cost: stewardship, integration and verification still consume resources.

## 3.8 Example only — no forecast

For an illustrative project with $10,000 of customer revenue:
- $6,500 contributor compensation;
- $1,000 review/integration costs;
- $300 payment and other direct costs;
- $2,200 remaining project contribution before general overhead, tax and other indirect costs.

The $2,200 is not net profit. The numbers are invented solely to demonstrate the accounting structure and must not be treated as a market benchmark.

## 3.9 Pricing experiments

During customer discovery, test:
- fixed fee for an outcome;
- coordination fee added to a customer-funded project budget;
- separately priced review/integration;
- subscription only after repeated workflow is established.

Make the fee payer and calculation visible before commitment. Test what customers will actually buy; do not decide a final percentage based only on competitor fees.

## 3.10 What to learn from every project

Record:
- funded value and actual platform revenue;
- contributor payout and settlement timing;
- coordinator hours;
- review/rework hours;
- completion and acceptance rate;
- cycle time and blocked time;
- dispute/refund rate;
- customer acquisition effort;
- repeat or referral demand;
- contributor feedback and reward clarity;
- which contribution categories created measurable value.

Use these observations to adjust scope, pricing and operations before investing in complex automated valuation or reward distribution.
