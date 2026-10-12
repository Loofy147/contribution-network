# 9. Integrated Contribution-to-Capability-to-Work Model

**Status:** Strategic design proposal, v0.1  
**Date:** 2026-10-12

## Executive thesis

The open-source and paid-work goals should not be treated as two separate tracks connected only by a portfolio. They should share one project and contribution system—with different funding, rights, privacy, and obligation modes.

**The proposed model is a contribution-to-capability-to-work loop:**

1. Real project needs create clearly scoped work.
2. Work is classified by who funds it, what it produces, what rules apply, and what evidence will establish acceptance.
3. Contributors can learn while completing useful work, with review and mentoring when needed.
4. Accepted contributions generate inspectable evidence of what someone can do; contributors choose what evidence to share.
5. Funders and customers use relevant evidence to source contributors for future work, while still checking fit, availability, and the requirements of that assignment.
6. Paid projects, sponsorships, and grants can fund contributor compensation, review, mentoring, maintenance, and reusable public improvements.
7. Lessons and reusable assets—only when rights and confidentiality permit—improve the commons and make future work more effective.

This is a proposed mechanism, not a proven competitive advantage. Existing programs already combine open-source contribution, mentorship, stipends, and possible career benefits. The hypothesis to test is whether the Contribution Network can coordinate those mechanisms across different contribution types and customer projects in a fair, repeatable, economically sustainable way.

## 1. A shared work system with distinct funding modes

The same project may contain several kinds of work. Do not force an entire project into a simplistic “open source” or “commercial” category. Classify each work package explicitly.

### Mode A — Public, voluntary contribution

- The output serves a genuine public or community purpose.
- Participation is optional, bounded, and not a hidden requirement for paid work.
- There is no payment promise unless separately stated.
- The license, permitted reuse, attribution, acceptance criteria, and review expectations are clear.
- It must be useful even if the contributor never receives a paid assignment.

### Mode B — Public work with explicit funding

- A sponsor, grant, donation pool, or customer explicitly funds an outcome that will be released under a stated open license.
- Compensation or stipend terms, eligible work, acceptance, deadlines, rights, and the payer are clear before commitment.
- The public receives a reusable asset and the contributor is paid according to the agreement.
- Funding may also cover reviewer time, mentoring, documentation, maintenance, and integration—not only the visible production task.

### Mode C — Customer-funded work with a public deliverable

- A customer pays for work that is intentionally released to the commons under a license agreed in advance.
- The customer understands the public-release terms and receives a defined benefit such as a needed capability, implementation, support, or influence over funded scope—not exclusive ownership unless the arrangement actually provides it.
- The contract separates the customer-specific deliverable from any shared component, and explicitly addresses third-party dependencies, security, data, and release approval.

### Mode D — Customer-funded confidential or proprietary work

- Work is covered by a specific paid agreement, including compensation, acceptance, confidentiality, rights, deadlines, and settlement.
- It may be related to the public project, but confidential data and customer-owned materials stay out of the public contribution record.
- The contributor's public portfolio may show only what is authorized; an alternative private reference or evidence route should be available where appropriate.

These modes can coexist in a larger project, but the modes must not be blurred. Public visibility does not grant rights, voluntary status does not imply an assignment of ownership, and customer payment does not automatically authorize public release.

## 2. The work package is the bridge

Use one compact work-package record across the system. Required fields are limited to what is needed to act fairly and deliver the outcome:

- **Project outcome:** the problem this work helps solve.
- **Scope and output:** what will be provided and what is excluded.
- **Acceptance:** evidence, criteria, decision owner, reviewer, and revision limits.
- **Funding mode:** voluntary, sponsor/grant-funded, or customer-funded.
- **Funding state and terms:** payer, approved budget or explicit absence of payment, recipient, timing, and settlement conditions where applicable.
- **Rights and visibility:** license, ownership, attribution, confidentiality, and what may be published or reused.
- **Dependencies and risk:** what must happen first and any material safety, privacy, security, or domain constraints.
- **Capability relevance (optional):** skill or practice the work may help develop; this is not a promise of training or employment.
- **Support and review:** named reviewer/mentor where needed, the available review capacity, and who pays for it when material.
- **Evidence record:** artifact, decision, rationale, test results, limitations, and contributor's actual role.
- **Status and history:** agreement, material changes, acceptance, dispute, and settlement where relevant.

Do not require every field on every task. Use conditional fields for private, risky, or paid cases; avoid collecting sensitive personal data without a purpose. A contributor's career/portfolio record should be opt-in, accurate, and separated from confidential internal evaluations.

## 3. Connect real customer demand to useful public work

The strongest bridge is not asking people to volunteer and hoping customers will later appear. It is **letting real demand fund work that can benefit both the paying user and the wider community when the customer agrees**.

A customer request should be decomposed into:
1. a customer-specific requirement;
2. reusable infrastructure, documentation, testing, accessibility, data standards, or maintenance that could benefit others;
3. work that must remain confidential or proprietary;
4. the review, integration, mentoring, and support required to deliver the outcome.

Then offer the customer a clear choice where commercially and legally appropriate:
- fund only the customer-specific deliverable;
- fund the shared improvement for public release;
- fund a split scope, with separate acceptance criteria, cost, license, and release decisions.

Do not promise that all paid work will be open source. Some buyers cannot release their data, designs, or deliverables. Public release should be a deliberate, funded, rights-cleared choice—not an assumption.

A paid project may produce useful upstream improvements, reusable tests or tools, and public documentation. When those outputs can be released, contributors get inspectable work evidence, the customer gets the contracted outcome, and the wider project gets a shared asset. Measure whether this arrangement saves duplicated effort or improves delivery; do not assume it does.

## 4. Make learning part of delivery—not unpaid screening

Capability development should be integrated into project work where it improves outcomes and is fairly funded.

- Break suitable work into progressively more demanding scopes, without inventing meaningless tasks.
- Publish the expected output and acceptance criteria before work begins.
- Pair less experienced contributors with a named reviewer or mentor when justified.
- Budget review and mentoring time when it materially benefits the project; do not silently transfer all training costs to overloaded volunteers.
- Let contributors select tasks based on interest, readiness, and availability.
- Use accepted work, feedback, and collaboration evidence to help contributors understand their current strengths and next learning steps.
- Offer paid beginner-level tasks when there is funded work suitable for developing contributors.
- For commercially necessary trials, scope and pay the trial appropriately; do not disguise a customer's real deliverable as a voluntary audition.

The intent is not to guarantee a career outcome or turn every task into a formal training course. It is to make real contribution a setting where useful work, feedback, and increasing responsibility can reinforce each other.

### Progression through increasing responsibility

Design the work system so people can take on greater responsibility as their evidence and preferences develop. An illustrative progression is:

1. **First useful contribution:** a bounded task with clear guidance, an acceptance test, and a fast first review.
2. **Independent contributor:** owns a defined deliverable, handles feedback, communicates blockers, and documents limitations.
3. **Integrator or reviewer:** coordinates dependencies, checks quality, or reviews work from others.
4. **Maintainer, mentor, or project steward:** owns a larger outcome, supports others, manages risk, or coordinates several contribution types.

This is not a mandatory ladder, job title, or universal level system. People may enter at any stage, stay in a preferred role, move sideways across domains, or demonstrate readiness using other evidence. Compensation is based on the agreement for the work, not an assumed status. Use these stages to help scope suitable responsibilities and identify support—not to create a public ranking.

### Design dual-purpose work carefully

Where appropriate, a work package can include both:
- a **delivery objective** the project or customer needs; and
- an **opt-in learning objective** the contributor wants to practice.

The delivery objective and acceptance criteria remain primary. A learning objective must not be used to lower quality requirements, justify unpaid commercial output, or impose unwanted training. If mentoring or extra review is needed, name the reviewer and account for that effort. A well-designed task can then produce a useful deliverable, a fair learning opportunity, evidence of actual work, and an improved future match—without pretending these benefits are automatic.

## 5. Use evidence for matching, not a universal score

A contributor's record should answer: **what did this person actually do, under what conditions, what evidence shows the result, and how much responsibility did they hold?**

Useful evidence includes:
- artifact or deliverable and its license/visibility;
- accepted scope and what the person personally contributed;
- acceptance criteria and reviewer findings;
- test, review, or validation results;
- response to feedback, collaboration, communication, and maintenance where relevant;
- limitations, unresolved defects, and subsequent changes;
- optional learning goals and competencies practiced.

Do not rank contributors by total activity, commits, stars, time spent, or a single universal score. Paid selection must also consider the specific role, availability, rate, working constraints, and relevant evidence. A contributor must be able to demonstrate capability through other routes if open contribution is impossible because of time, disability/access needs, confidentiality obligations, or lack of opportunity.

## 6. Funding architecture: make the bridge explicit

Potential sources and uses should be tracked separately, without pretending that one funder pays for everything.

| Funding source | Possible use | Key limit |
|---|---|---|
| Customer project budget | Paid contribution, integration, review, support, agreed public components | Only the agreed scope and rights may be funded/released |
| Sponsorship | Public maintenance, specific open tasks, maintainer time, community infrastructure | Sponsorship does not automatically fund every contribution |
| Grant or fellowship | Mentorship, stipends, public-good work, inclusion, project capacity | Eligibility, reporting, and grant restrictions apply |
| Network service revenue | Coordination, matching, quality assurance, contributor support, operations | The fee must be disclosed and supported by viable unit economics |
| Community donation | Public goods or maintenance according to published policy | Do not treat uncertain donations as guaranteed task funding |

Where a paid project depends on substantial review, onboarding, mentoring, or integration, those costs should be included in its budget. If a customer wants an upstream public improvement, price and agree that scope explicitly. Any allocation of revenue to shared development should be disclosed and governed; do not imply a universal percentage before evidence and obligations are understood.

## 7. Governance requirements

The connection is only fair and credible if the following rules hold:

- No promise or implication that volunteer work guarantees future employment, paid assignments, or selection.
- No unpaid contribution required as the sole gateway to a paid role.
- No concealed customer work labeled as community contribution.
- Funding status is visible and accurate; do not imply a task is paid when no budget is committed.
- Compensation, acceptance, rights, confidentiality, attribution, cancellation, and dispute terms are clear before relevant commitments.
- A change in scope, funding mode, or publication/rights terms requires explicit agreement before the changed work proceeds.
- Review and mentoring capacity is limited and measured; do not open more tasks than maintainers can responsibly handle.
- Contribution evidence is contextual, correctable, and shared externally only with appropriate consent and permission.
- Paid selection is explainable and based on project-relevant evidence, not popularity or unpaid availability.
- Public assets are released only under a suitable license with clear contributor and third-party rights.

## 8. What to test first

Use a small, real project—not a complete platform.

### Pilot setup

1. Choose a useful public outcome with a clear user or beneficiary.
2. Identify one real customer or sponsor need that overlaps with the public roadmap, while preserving the customer's choice and confidentiality.
3. Create a few work packages in at least two funding modes, each with clear status, output, acceptance criteria, rights, and review ownership.
4. Fund at least one contributor or meaningful review/mentoring work if a real budget is available; do not make a fake payment promise just to demonstrate the model.
5. Invite a small group of contributors and let them choose appropriate tasks.
6. Record review effort, accepted outputs, learning feedback, integration cost, and funding/settlement.
7. If a paid opportunity emerges, publish its terms and evaluate contributors using relevant evidence and availability; do not promise a route to it.
8. Record which public components can be reused, what customer benefit was delivered, and whether the integrated model reduced duplication or cost.

### Measures

**Public value:** usefulness and adoption of released assets, maintenance health, and the share of work that is actually accepted and reused.

**Contributor development:** time to first meaningful review, completion of a first useful contribution, feedback quality, skills practiced, increased responsibility if chosen, contributor return, and perceived fairness.

**Paid delivery:** externally funded work, acceptance and defects, repeat customer demand, selection quality, settlement, disputes, and fully costed margin.

**Bridge quality:** whether evidence from previous work improved a paid-work decision; whether customers funded reusable public components; whether review/mentorship improved outcome quality enough to justify its cost; whether the public improvements reduced later duplication; and whether participants experienced the process as fair.

Track all measures separately as well as together. A high rate of transition to paid work is not the objective for every participant, and by itself does not prove public value. Stop or revise the mechanism if work mainly generates activity or portfolios without useful outcomes, funded demand, fair treatment, or sustainable review capacity.

## 9. What makes this different—and what is not yet proven

Established programs already combine parts of this idea:
- the Linux Foundation Mentorship program describes paid, structured learning and contributor development for open-source projects;
- Outreachy offers paid open-source internships while explicitly stating that an internship is not a guarantee of employment with a sponsor;
- GitHub Sponsors lets users directly support open-source contributors and maintainers.

References:
- [Linux Foundation Mentorship](https://docs.linuxfoundation.org/lfx/mentorship/mentor-guide/introduction)
- [Outreachy](https://www.outreachy.org/)
- [GitHub Sponsors documentation](https://docs.github.com/en/sponsors)

These examples show that the component mechanisms are established; they do not establish that one unified cross-niche system is novel or sustainable. The testable differentiator is the integration of project demand, funding modes, contribution records, review/learning support, rights, and paid selection within one transparent workflow—and whether that integration creates better outcomes at an acceptable cost.

## Final recommendation

Design the Contribution Network as **one contribution system with multiple clearly separated funding and rights modes**, not as a volunteer pipeline that eventually points toward paid work.

The best connection is a reciprocal loop: useful public work creates shared assets and evidence; customer demand can fund contributors, mentoring, and reusable improvements; accepted work strengthens capability and improves later matching; and experience from paid delivery helps the public project evolve where rights permit.

Test that loop manually in a real project before building software. The evidence should demonstrate public usefulness, contributor fairness, better delivery/matching, and credible economics—not merely more activity or more people hoping to get paid.
