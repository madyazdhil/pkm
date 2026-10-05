# Project State

## Audit Remediation Execution — 4 October 2026

- **Status:** Two-presenter deck revision implemented and locally verified. Cloud import/deployment/access validation remains pending.
- **Current focus:** Deliver a projector-readable 28-slide workshop deck and participant kit that teaches Excel → Google Sheets → ChatGPT assistance → Apps Script → tested dashboard link.
- **Primary use case:** Dashboard Rekap Layanan Kecamatan using synthetic non-sensitive data.
- **Event timing assumption:** Two scenarios are documented: an 80-minute compressed core and a workshop penuh sekitar 120 menit. Final timing and ownership still need coordination with Syam/Taufik.

## Completed this turn

- Rebuilt all three Excel workbooks in `outputs/2026-10-03-dummy-datasets/` with 100 records each, `Data` and `Panduan` sheets, and corrected semantic issues.
- Added dataset QA and fixture generation scripts.
- Strengthened `materials/workshop/starter-dashboard/Code.gs` with explicit spreadsheet-ID configuration, strict header/status/ID/date/number validation, bounded data/table sizes, and a shared `calculateDashboard_()` calculation path.
- Updated `Index.html` for loading/error states, stale-state clearing, accessible status/error regions, explicit last-loaded wording, and filter-safe rendering.
- Rebuilt the local preview from the actual `Index.html` and the same server calculation code, with Google service IO mocked only for offline testing.
- Reworked the HTML deck to 28 slides: an explicit Pak Syam theory block plus Yazid’s dashboard practice block, while retaining the local rendered dashboard screenshot, corrected flow layout, 720p overflow, print visibility, and overview event cleanup.
- Added participant materials:
  - `participant-import-and-deploy-guide.md`
  - `participant-worksheet-dashboard.md`
  - `checklist-data-dashboard.md`
  - `evaluation-pre-post-dashboard.md`
  - `facilitator-preflight-and-access.md`
- Updated the implementation plan in place with completed local criteria and explicit cloud-pending items.

## Verification completed

- `python3 scripts/qa_dummy_datasets.py` — pass: structure, distributions, surat semantics, agenda semantics.
- `node scripts/verify_dummy_datasets.mjs` — pass: all three workbooks import, expected sheets exist, no formula errors.
- `node scripts/qa_starter_dashboard.mjs` — pass: baseline KPI, filters, status mutation, configured source, and validation errors.
- `python3 scripts/qa_html_deck.py` — pass: revised 28-slide deck at 1440×810 and 1280×720, startup/navigation/hash/notes/overview/print, and local preview KPI/filter behavior.
- `git diff --check` — pass after cleanup.

## Pending / blockers

- No Google Drive import, Apps Script cloud edit, deployment, URL, or cross-account access test was performed in this turn.
- Before the workshop, a facilitator must run `setupSpreadsheetId()` in the bound Apps Script project, test the actual URL, and fill the preflight/access sheet.
- Final event timing and PIC assignments must be confirmed with the rest of the PkM team.

## Durable next steps

1. Perform the cloud validation only when the user explicitly authorizes the Google Workspace actions: import one workbook, configure the bound Apps Script project, and test the deployment/access policy.
2. Run the workshop using the dummy dataset first; do not introduce real resident data during the training.
3. Collect each group’s data dictionary, KPI definitions, prompt, test checklist, screenshot/URL, and follow-up PIC.

## Workshop bundle packaging — 4 October 2026

- **Status:** Local workshop package created and verified; cloud deployment/access validation remains pending.
- **Bundle folder:** `outputs/2026-10-04-workshop-bundle/`
- **Shareable archive:** `outputs/pkm-smt3-workshop-dashboard-bundle-2026-10-04.zip`
- **Contents:** 28-slide deck with assets, explicit theory/practice speaker split, starter Apps Script project and preview, three 100-row Excel workbooks, participant handouts, facilitator preflight, QA status, and SHA-256 manifest.
- **Local package checks:** ZIP integrity passed, deck relative assets resolved, source QA artifacts remain green from the prior verified run.
- **Browser rerun:** initial sandbox launch failed; approved retry passed. The revised 28-slide deck also passed automated QA.


## Speaker split revision — 4 October 2026

- **Status:** Implemented locally and verified with deck QA at 1440×810 and 1280×720.
- The 18-slide version was identified as too compressed because it left too little room for Pak Syam’s theory material.
- Canonical deck is now 28 slides with visible ownership badges and presenter notes:
  - Pak Syam: slides 3–10, theory and prompt exercise;
  - Yazid: slides 12–26, dashboard practice;
  - shared: slides 1–2, 11, 27–28.
- Working rundown has an 80-minute core and a conditional 120-minute full-slot scenario. The user has not approved a duration extension.


## Verification after speaker split — 4 October 2026

- Final deck contains 28 slides.
- Pak Syam theory block: slides 3–10.
- Yazid practice block: slides 12–26.
- Shared slides: 1–2, 11, 27–28.
- QA passed after tightening the prompt exercise for both 1440×810 and 1280×720.
- The workshop outline now documents both an 80-minute compressed scenario and a full approximately 120-minute scenario.
- The workshop bundle was refreshed with the new deck, presenter guide, outline, facilitator guide, manifest, and ZIP archive.


## Speaker script and group assignment correction — 4 October 2026

- **Status:** Implemented locally and QA verified.
- Added [naskah-bicara-pemateri-dua-sesi.md](materials/workshop/naskah-bicara-pemateri-dua-sesi.md), a direct-reading talk track for Mas Syam and Yazid addressed to Bapak/Ibu, including slide-by-slide language, participant prompts, handoffs, and 80/120-minute variants.
- Revised slide 2 in the canonical deck to state that group division has already been completed, ask participants to remain with their assigned group, and show the three practice cases: rekap layanan, surat/disposisi, and agenda internal.
- Updated the shareable workshop bundle with the revised deck, presenter guide, and speaker script.


## GitHub sharing — 5 October 2026

- **Status:** Pushed to `origin/main` and publicly verified.
- **Deck:** https://madyazdhil.github.io/pkm/materials/workshop/html-deck/ai-dashboard-gas-workshop.html
- **Naskah Markdown:** https://madyazdhil.github.io/pkm/materials/workshop/naskah-bicara-pemateri-dua-sesi.md
- **Naskah rendered GitHub:** https://github.com/madyazdhil/pkm/blob/main/materials/workshop/naskah-bicara-pemateri-dua-sesi.md
- **ZIP bundle:** https://github.com/madyazdhil/pkm/raw/main/outputs/pkm-smt3-workshop-dashboard-bundle-2026-10-04.zip
- HTTP HEAD checks returned 200 for the deck, Markdown file, GitHub blob, and raw Markdown URL.


## Participant Excel download links — 5 October 2026

- Added `materials/workshop/download-dataset-peserta.md` with direct download links for all three synthetic Excel workbooks.
- Copied the page into `outputs/2026-10-04-workshop-bundle/04-participant-kit/`.
- Links are grouped by participant case: rekap layanan, surat/disposisi, and agenda internal.
