# License and Content-Rights Policy

**Status:** Portfolio recommendation v0.1, dated 2026-10-15. This is an engineering and governance record, not jurisdiction-specific legal advice. A license is a legal permission grant; do not merge a license change until the rightsholder and exact material scope are confirmed.

## Decision summary

Use different licenses for different products and content, rather than putting the same license across every repository.

| Asset/repository | Recommended treatment | Current state / gate |
| --- | --- | --- |
| This strategic repository, \`Loofy147/contribution-network\` | Leave unlicensed for now. Its business-model, economic, governance, launch and customer strategy documents are not automatically open for reuse. If selected material is to be openly reusable later, consider CC BY 4.0 for those documents only, after scope and ownership review. Do not use a Creative Commons license for software. | No repository license selected. Public visibility is not a reuse grant. |
| Application prototype, \`Loofy147/Contribution-bounties-centre-\` | Candidate: GNU AGPL-3.0-or-later for first-party application code, because the product is networked and reciprocal source access for modified server versions may be desirable. AGPL allows commercial use; it is not a noncommercial restriction. | [Draft licensing PR #17](https://github.com/Loofy147/Contribution-bounties-centre-/pull/17). Do not merge until source ownership/provenance is confirmed and AppDeploy/third-party scopes are explicitly excluded. Main remains unlicensed until an authorized merge. |
| Internal Video Workbench, \`Loofy147/video-workbench\` | Candidate: PolyForm Internal Use 1.0.0 only if the intended product remains internal-only and distribution/third-party hosting are not granted. It is source-available, not OSI-approved open source, and does not grant distribution rights. | [Draft foundation PR #1](https://github.com/Loofy147/video-workbench/pull/1) includes the proposal. The repo is currently public: do not merge this license until the owner decides whether to make the repository private. If it should remain public for outside adoption, choose a different license matching that intent. |
| Research repository, \`Loofy147/trading-validations-principles\` | Do not add an open-source license in this pass. Keep user-supplied market data, licensed research material, and source code provenance separate. | Private research repository; user handles separate legal gates. |
| Future portfolio control plane, \`contribution-cloud/Contributions-centre\` | Defer. Do not initialize or license it until the system-readiness and portfolio-boundary decisions are satisfied. | Repository is empty and intentionally deferred. |
| FastVideo framework fork/reference | Root metadata identifies Apache-2.0 for the framework source. That does not automatically cover every dependency, checkpoint, dataset, brand, linked project, or hosted service. | Selectively reviewed as a source reference; no framework code was copied into Video Workbench. |

## Why these choices differ

### AGPL-3.0-or-later for the networked application

AGPL is designed to address the gap where a modified server-side program is made available to users over a network without conventional distribution of copies. It can support commercial operation, but covered modifications have source-sharing duties under the license. It is appropriate only if the project wants that reciprocal obligation and can lawfully offer all covered first-party source under it.

Before merging the application proposal:
1. Confirm the project owner has the rights to license the current first-party source and generated/platform-exported files.
2. List all external snippets, assets, fonts, icons, and dependencies and check their terms.
3. Keep AppDeploy itself, \`@appdeploy/sdk\`, \`@appdeploy/client\`, and third-party packages outside the project grant. They remain under their own terms. The app README currently says these AppDeploy packages are imported but absent from the manifest, and the source has not been proven to build independently.
4. Decide whether contributors must sign a Developer Certificate of Origin or another contribution agreement. Record who reviewed each source group.
5. Preserve the caveat that adding a license does not establish independent build, authorization, payout handling, security, or end-to-end workflow verification.

### PolyForm Internal Use for an internal-only tool

This license can align with internal company use, but it does not permit distribution. A public GitHub repository is not the same as an internal repository; GitHub provides certain platform-level view/fork functions for public repositories. The owner must make the repository visibility and license decision together. Do not treat the currently public Video Workbench repo as an approved internal-only distribution posture.

### Strategic documentation

This strategy repository contains commercial hypotheses, economics and governance, not merely code. It remains unlicensed. If the owner later wants readers to copy/adapt selected written materials, consider a documented Creative Commons Attribution 4.0 grant limited to those specific documents, not the software or third-party material. Public repository visibility alone does not grant broad redistribution rights.

## Repository-wide content rules

A software license does not establish rights to:
- Third-party product names, trademarks, logos, screenshots, videos, music, voice, fonts or other media.
- Model checkpoints, model cards, datasets, benchmark records or external API outputs governed by separate terms.
- User/contributor submissions, personal information, customer data or confidential material.
- Imported files that have not been reviewed for source, license and modification history.

Each adopted item should record source URL, immutable version/revision, retrieval date, applicable license/terms, modifications, attribution notices, allowed use (including commercial use), redistribution/hosting duties, security/maintenance status and owner acceptance. Store private assets outside public Git histories. Do not repair a missing license by assuming that a public repository is freely reusable.

## Official sources

- [GitHub: Licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)
- [GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0.html)
- [PolyForm Internal Use License 1.0.0](https://polyformproject.org/licenses/internal-use/1.0.0)
- [PolyForm license texts at tag 1.0.0](https://github.com/polyformproject/polyform-licenses/tree/1.0.0)
- [Creative Commons FAQ](https://creativecommons.org/faq/index.html) (do not use CC licenses for software)
- [FastVideo framework license file](https://github.com/Loofy147/FastVideo/blob/main/LICENSE)

## Revisit triggers

Review the policy when any repository changes visibility, begins accepting external contributions, distributes an installable package, launches a hosted service for third parties, takes in customer-contributed assets, or adopts external source code/model/media. Any such change requires an explicit scope/rights review before release.
