# 6. Elimination-First Design Method

**Status:** Operating principle, v0.1  
**Date:** 2026-10-12

## Purpose

Use this sequence whenever defining the business model, writing requirements, designing operations, or building software for the Contribution Network:

1. **Question the requirements.** Make each requirement precise, necessary, owned, and evidence-based.
2. **Delete parts or process steps.** Remove requirements, fields, handoffs, approvals, or features that do not justify their existence.
3. **Simplify or optimize what remains.** Make the necessary work clearer, smaller and less error-prone.
4. **Accelerate cycle time.** Reduce waiting, queues, rework, handoffs and unnecessary dependencies.
5. **Automate last.** Automate a process only after it is necessary, simplified, and proven to work repeatedly.

Do not skip ahead to software or AI automation just because a process is repetitive. First determine whether the process should exist.

## Step 1 — Question requirements

For every requirement, ask:
- What outcome does it protect or enable?
- Who needs it, and who owns the decision?
- What evidence proves that it is necessary?
- What breaks if we remove it?
- Is it a legal, safety, trust, customer or operational requirement—or just a habit or preference?
- Can it be replaced with a smaller requirement or a clear default?

Write requirements as observable outcomes, constraints or acceptance criteria. Avoid vague demands such as "must be comprehensive," "must support every scenario," or "must be automated" without a reason and a test.

A requirement without a clear owner or rationale is a candidate for removal—not automatically a permanent obligation.

## Step 2 — Delete unnecessary parts

Challenge the full workflow, not only individual features. Remove:
- duplicate records and repeated data entry;
- approval steps without a defined risk or decision;
- status fields no one uses;
- reports that do not change a decision;
- contribution categories that do not affect routing, acceptance, rights or rewards;
- integrations that are not needed to complete the current project;
- processes that merely exist because another unnecessary process created them.

When deleting a step, check downstream consequences. Preserve legal, safety, privacy, payment, accountability and participant-protection requirements that genuinely apply.

## Step 3 — Simplify or optimize

Only after removing unnecessary work:
- standardize common project and contribution records;
- use the smallest workflow that maintains traceability and fairness;
- provide defaults with explicit exceptions where useful;
- combine adjacent steps when they need the same actor, evidence and decision;
- make acceptance criteria visible before work begins;
- use one source of truth for budget, terms, status and evidence;
- separate universal rules from niche-specific review requirements.

Optimization should not merely make a bad process faster. Prefer eliminating work over doing unnecessary work more efficiently.

## Step 4 — Accelerate cycle time

Measure end-to-end time, not just how quickly one task is completed.

Track:
- time from project proposal to qualified project;
- time waiting for funding, a decision, a reviewer or a dependency;
- time from contribution submission to acceptance;
- time spent on rework and disputed decisions;
- time from acceptance to reward settlement;
- time from customer request to accepted final outcome.

Reduce queueing, handoffs, unclear ownership, late scope changes and repeated reviews. Keep quality and fairness checks that prevent costly failure. A faster low-quality result is not an improvement.

## Step 5 — Automate last

Automate only when:
- the process has a clear purpose and stable rules;
- it has been executed manually often enough to understand normal and exceptional cases;
- inputs and outputs are defined;
- failure states and human escalation paths are known;
- automation reduces total cost or improves reliability enough to justify build, maintenance and oversight;
- the automation can be measured, audited and rolled back where needed.

Start with small, reversible automation. Keep human decisions for ambiguous value, sensitive disputes, rights decisions and other judgments that cannot be reliably reduced to rules. Do not equate an AI output with verified evidence.

## Application to the Contribution Network

### Requirements
The network must support project-level outcomes and different contribution types. It does **not** need to implement every reward type, every niche-specific evaluation method, every payment rail or every integration on day one.

### Delete
Do not build a complex contributor score, universal contribution-value formula, token, DAO, royalty engine, public marketplace, multi-tenant backend or automated escrow before there is evidence these are necessary. Do not ask every project to complete every possible field if some fields are irrelevant; distinguish required safeguards from optional metadata.

### Simplify
Use a small shared core:
- project and outcome;
- contribution request/record;
- evidence and decision;
- value assessment (optional);
- reward agreement (when applicable);
- rights and attribution;
- funding and settlement state;
- dependencies and closure.

Add niche-specific rules only where the contribution type or project risk requires them.

### Accelerate
For the first pilot, use existing tools and one accountable project steward. Keep contribution offers small, acceptance criteria explicit, decision owners named, and review queues visible. Measure waiting and rework before proposing new software.

### Automate
After repeated pilots, automate high-volume stable work such as reminders, status transitions, evidence-pack generation and fee calculations—only after testing failure paths. Keep valuation, reward disputes, rights, and ambiguous acceptance decisions reviewable by people.

## Required design record

For every material proposed feature or process, record:

- **Outcome:** what user/project outcome it supports.
- **Requirement owner:** who can explain why it is needed.
- **Evidence:** observed need, rule, risk or pilot result.
- **Removal test:** what happens if it is deleted.
- **Simpler alternative:** the smallest way to achieve the outcome.
- **Cycle-time effect:** which wait, handoff or rework is changed.
- **Automation case:** only after the prior steps; expected benefit, failure handling and maintenance cost.
- **Decision:** keep, remove, simplify, defer, or automate.
- **Review trigger:** what evidence would cause reconsideration.

This record should be short. The method must not become another bureaucracy.

## Guardrail

The sequence is a decision discipline, not a rigid excuse to remove safeguards. Do not delete obligations that genuinely protect participants, customers, data, funds, or legal rights. Do not automate a process simply to appear advanced. Revisit decisions when real project evidence contradicts the current design.
