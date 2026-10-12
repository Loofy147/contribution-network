# 3. Contribution Value, Rewards and Economics

**Status:** Working framework, v0.1  
**Date:** 2026-10-12

## 3.1 Four concepts that must stay separate

1. **Contribution:** what a person or organization provides.
2. **Value evidence/assessment:** what can be demonstrated about its usefulness or effect.
3. **Reward agreement:** what benefit or payment has been promised in exchange, if any.
4. **Rights and attribution:** who owns, licenses, may reuse, or should be credited for the contribution.

These are related but not interchangeable. A contribution's estimated business value is not automatically the amount owed to its contributor. A high reward does not prove high value. A low or unknown value estimate does not erase an agreed payment.

## 3.2 Value may be optional

The network must permit value to be:
- defined in advance;
- proposed by a contributor;
- negotiated by the project owner and contributor;
- estimated as a range;
- assessed after evidence is available;
- described qualitatively;
- measured in non-monetary units where meaningful; or
- not assessed.

Store the valuation status explicitly, for example:
- NOT_ASSESSED
- CONTRIBUTOR_PROPOSED
- PROJECT_ESTIMATE
- NEGOTIATED_ESTIMATE
- MEASURED_OUTCOME
- QUALITATIVE
- NOT_APPLICABLE

An estimate should include its method, assumptions, author and date where meaningful. Avoid false precision and universal scores that compare incomparable contributions (for example, a referral, a safety review and a dataset) as though they were the same thing.

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

## 3.4 Contribution record fields

Recommended fields:
- contribution_id, project_id, request_id;
- contributor identity or organization, plus permitted attribution name;
- category and description;
- expected effect and related project objective;
- artifact/evidence links and provenance;
- dependencies and status;
- acceptance criteria, reviewer and decision evidence;
- valuation status, estimate/range, currency or unit, method, assumptions and assessor;
- reward mode, amount/formula, payer, recipient, conditions and due date;
- approved expenses and milestone references;
- rights holder, license, attribution and reuse restrictions;
- confidentiality/privacy/security classification;
- dispute, revision and settlement history.

Do not make public every value, payment, identity or evidence record. Define project-level visibility and confidentiality rules.

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
