# Project Canvas: PkM Magister Teknik Informatika UNPAM (Kecamatan Tambun Selatan)

- Last updated: 2026-10-04
- Artifact status: Active

## Working Output & Synced Artifacts

- 📁 **Folder Kuliah Tersinkronisasi:** [source-docs/](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/source-docs) *(Link langsung ke `/Users/yazidhilmi/Documents/Edu/College/Semester 3/PKM`)*
- 📁 **File Word Proposal Final (Format 100% Identik):** [Proposal_PKM_Kecamatan_Tambun_Selatan_2026_FIXED.docx](file:///Users/yazidhilmi/Documents/Edu/College/Semester%203/PKM/Proposal_PKM_Kecamatan_Tambun_Selatan_2026_FIXED.docx)
- 📄 **Teks Proposal Final (Markdown):** [PROPOSAL_FIXED.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/PROPOSAL_FIXED.md)
- 📋 **Panduan Survei, Audit Form, S&K Legal UU PDP, & Draf WA:** [SURVEY_GUIDE.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/SURVEY_GUIDE.md)
- 📊 **Laporan Hasil Riset Aturan PkM UNPAM:** [RESEARCH.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/RESEARCH.md)
- 🧩 **Rancangan Materi Workshop AI + Vibe Coding + GAS:** [01-rancangan-materi-workshop-ai-dashboard-gas.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/01-rancangan-materi-workshop-ai-dashboard-gas.md)
- 🖥️ **Outline Deck ChatGPT ke GAS:** [02-outline-deck-chat-to-gas.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/02-outline-deck-chat-to-gas.md)
- 🔍 **Laporan Audit Awal Proposal:** [PROPOSAL_REVIEW.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/PROPOSAL_REVIEW.md)

## Browser Screenshot Gallery — 25 September 2026

Browser capture untuk deck workshop dilakukan melalui Google Chrome pada project Apps Script latihan yang kosong. Zoom Chrome terverifikasi **110%**. Screenshot resolusi kecil dari percobaan awal tetap disimpan sebagai jejak teknis, tetapi tidak direkomendasikan untuk deck.

### Capture resolusi penuh yang siap ditinjau

- [Editor Google Apps Script, file `Code.gs`, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/02-gas-editor-codegs-110-full.jpg)
- [Menu Tambahkan file, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/03-add-html-file-menu-110-full.jpg)
- [Editor Apps Script resolusi penuh, capture sebelumnya](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/06-editor-raised-110.png)
- [Beranda Apps Script resolusi penuh, capture sebelumnya](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/07-apps-script-home-raised-110.jpg)

### Capture berikutnya

Capture dan artefak lokal sudah tersedia. Import Google Sheets, konfigurasi Apps Script cloud, deployment, dan uji akses tetap menunggu otorisasi serta verifikasi pada akun nyata.

### Capture setelah project latihan diisi

- [Editor `Code.gs` final, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/10-codegs-final-110-full.jpg)
- [Editor `Index.html`, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/08-editor-index-html-110-full.jpg)
- [Bagian awal kode `Index.html`, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/11-index-html-top-110-full.jpg)
- [Menu deployment GAS, zoom 110%](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/browser-screenshots/09-deployment-menu-110-full.jpg)

Demo cloud yang digunakan:

- `Code.gs` berisi fungsi minimal `doGet()` yang menyajikan `Index.html`.
- `Index.html` berisi dashboard statis dengan data sintetis: kartu ringkasan, rekap kategori, dan tabel monitoring.
- Tidak ada Google Sheet warga, credential, token, sharing, atau deployment publik yang diubah.
- Capture hasil dashboard yang sudah ter-render di browser belum dibuat karena deployment belum dilakukan.


## HTML Workshop Deck — versi final lokal, 4 Oktober 2026

- ✅ **Deck HTML final:** [ai-dashboard-gas-workshop.html](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/ai-dashboard-gas-workshop.html)
- 📖 **Petunjuk penggunaan:** [README.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/README.md)
- 🧾 **Manifest provenance capture:** [CAPTURE-MANIFEST.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/assets/CAPTURE-MANIFEST.md)
- 🧪 **QA script:** [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py)

Deck sekarang berisi 18 slide dan dapat dibuka langsung melalui `file://`. Capture browser berasal dari Chrome zoom 110% dan hanya dipakai sebagai bukti langkah UI Apps Script. Deck tidak mengklaim deployment web app berhasil karena URL deployment belum tersedia.

## Accessibility revision — 26 September 2026

- Deck now starts consistently on the title slide instead of restoring a stale hash to the closing slide.
- Theme changed from dark to light/high contrast for projector readability.
- Typography increased for body copy, lists, tables, callouts, captions, and code labels, with targeted spacing adjustments for 1280×720 projection.
- QA remains green via [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py).

## Speaker ownership — 26 September 2026

Deck sekarang memiliki kode pembicara di bagian atas setiap slide:

- `S / PAK SYAM · BASIC AI`
- `Y / YAZID · PRAKTIK DASHBOARD`
- `↔ / BERSAMA`

Penjelasan kode juga tersedia di [README deck](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/README.md).

## Slide navigation correction — 26 September 2026

- Semua slide kini menampilkan nomor stabil `01 / 28` sampai `28 / 28`; label `END` yang membingungkan sudah dihapus.
- QA mencakup jalur pengguna cover → klik Next dua kali → slide 3 dan memverifikasi judul serta nomor `03 / 28`.

## Visual Overlay & Reload Fix — 26 September 2026

- Memperbaiki bug kritis tampilan: aturan `.closing` dan `.cover` di CSS sebelumnya memiliki `display: grid` tanpa scoped `.active`, sehingga slide 28 (Penutup) selalu tampil menutupi slide aktif di bawahnya pada DOM.
- Diperbaiki dengan mengunci semua slide non-aktif ke `display: none !important` dan hanya menerapkan `display: grid` pada `.slide.active.closing` serta `.slide.active.cover`.
- Navigasi hash `#slide-NN` dan reload browser kini bekerja stabil dan mempertahankan slide aktif.
- Script [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py) diperluas untuk menguji oklusi visual riil (`elementFromPoint`) dan lulus tanpa error.

## Panduan Visual Sheets ke Apps Script & Fix Slide Cropping — 26 September 2026

- 🖼️ **Panduan Visual Baru:** [01-google-sheets-extensions-apps-script.png](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/assets/01-google-sheets-extensions-apps-script.png)
  - Menggambarkan alur 2-klik membuka Apps Script dari spreadsheet kosong (`sheets.new` atau file latihan).
  - Dilengkapi panah petunjuk visual tebal dan badge langkah:
    1. Klik menu **Extensions** (atau **Ekstensi** dalam bahasa Indonesia).
    2. Klik pilihan **Apps Script** pada dropdown untuk membuka editor container-bound.
- 📐 **Fix Screenshot Terpotong (Cropping):**
  - Mengganti CSS screenshot menjadi `object-fit: contain` dan membersihkan margin hitam pada screenshot editor.
  - Memperbaiki rendering bullet list di CSS agar tag bold dan inline code tidak tumpang tindih.
- 🧪 **Verifikasi:** Lulus seluruh pengujian otomatis [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py) pada resolusi 1440×810 dan 1280×720 tanpa overflow.

## Real Browser Screenshot, Caption Cleanup & Enlarged Slide Images — 26 September 2026

- 🌐 **Real Browser Screenshot Google Sheets:**
  - Asset [01-google-sheets-extensions-apps-script.png](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/assets/01-google-sheets-extensions-apps-script.png) kini menggunakan tangkapan layar langsung dari Google Sheets asli pada browser Chrome (bukan render CSS tiruan).
  - Dilengkapi panah petunjuk dan badge langkah 1 (menu Ekstensi) dan langkah 2 (Apps Script) dengan penempatan akurat.
- 🧹 **Pembersihan Caption Teknis:**
  - Menghapus label `Capture browser, zoom 110%` dari semua slide praktik (Slide 10, 15, 16, 17, 19).
  - Diganti dengan keterangan praktis bagi peserta workshop.
- 🔍 **Screenshot Lebih Besar & Jelas:**
  - Porsi kolom gambar diperlebar dari 58% menjadi ~64% slide width, dan frame screenshot diperbesar hingga tinggi 350–380px tanpa cropping.
- 🧪 **Hasil Pengujian QA:** Lulus otomatis 100% pada resolusi 1440×810 dan 1280×720.

## GitHub Repository & Live Pages Links — 26 September 2026

- 📦 **Remote Repository GitHub Pribadi:** [github.com/madyazdhil/pkm](https://github.com/madyazdhil/pkm) (Remote SSH: `git@github.com-personal:madyazdhil/pkm.git`)
- 🌐 **Link GitHub Pages (Siap Dibagikan / Presentasi):**
  - **Link Utama (Root):** [https://madyazdhil.github.io/pkm/](https://madyazdhil.github.io/pkm/)
  - **Link Langsung File Deck:** [https://madyazdhil.github.io/pkm/materials/workshop/html-deck/ai-dashboard-gas-workshop.html](https://madyazdhil.github.io/pkm/materials/workshop/html-deck/ai-dashboard-gas-workshop.html)
  - **Link Langsung Slide Tertentu:** [https://madyazdhil.github.io/pkm/#slide-10](https://madyazdhil.github.io/pkm/#slide-10)
- 🚀 **Fitur Auto-Redirect:** Root `index.html` otomatis meneruskan pengunjung ke file deck workshop lengkap dengan slide hash aktif, serta dilengkapi file `.nojekyll`.

## Material Audit — 3 Oktober 2026

- 📋 **Audit kesesuaian audience dan brief:** [MATERIAL_AUDIT.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/MATERIAL_AUDIT.md)
- Kesimpulan: deck sudah punya fondasi teknis yang sesuai, tetapi perlu dipusatkan pada satu use case dashboard pelayanan, dataset sintetis, KPI, dan praktik yang realistis untuk waktu materi efektif sekitar 80 menit.

## Dummy Dataset and Implementation Plan — 3 Oktober 2026

- 📊 **Folder dummy Excel:** [outputs/2026-10-03-dummy-datasets/](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/outputs/2026-10-03-dummy-datasets)
- 📋 **Implementation plan revisi audit:** [02-implementation-plan-audit-remediation-dashboard-data-flow.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/planning/02-implementation-plan-audit-remediation-dashboard-data-flow.md)
- Alur deliverable yang ditetapkan: Excel → Google Sheets → Google Apps Script → dashboard berbasis link web app.


## Audit remediation execution — 4 October 2026

- ✅ **Implementation plan updated in place:** [02-implementation-plan-audit-remediation-dashboard-data-flow.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/planning/02-implementation-plan-audit-remediation-dashboard-data-flow.md)
- ✅ **Final local deck:** [ai-dashboard-gas-workshop.html](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/ai-dashboard-gas-workshop.html)
- ✅ **Deck README and provenance:** [README.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/README.md) · [CAPTURE-MANIFEST.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/assets/CAPTURE-MANIFEST.md)
- ✅ **Starter Apps Script:** [starter-dashboard/](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/starter-dashboard/)
- ✅ **Locally tested dashboard preview:** [preview.html](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/starter-dashboard/preview.html)
- ✅ **Participant guide:** [participant-import-and-deploy-guide.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/participant-import-and-deploy-guide.md)
- ✅ **Worksheet:** [participant-worksheet-dashboard.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/participant-worksheet-dashboard.md)
- ✅ **Evaluation:** [evaluation-pre-post-dashboard.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/evaluation-pre-post-dashboard.md)
- ✅ **Facilitator preflight/access:** [facilitator-preflight-and-access.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/facilitator-preflight-and-access.md)

Cloud status: Google Sheets import, Apps Script configuration, deployment URL, and cross-account access are intentionally **pending** until tested in the real Google account environment.

## Workshop-ready bundle — 4 October 2026

- 📦 **Folder paket workshop:** [2026-10-04-workshop-bundle/](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/outputs/2026-10-04-workshop-bundle)
- 🗜️ **Arsip ZIP siap dibagikan:** [pkm-smt3-workshop-dashboard-bundle-2026-10-04.zip](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/outputs/pkm-smt3-workshop-dashboard-bundle-2026-10-04.zip)
- Isi paket: deck HTML 18 slide beserta asset, starter Apps Script, tiga workbook dummy 100 baris, handout peserta, worksheet, checklist, evaluasi, preflight fasilitator, status QA, dan manifest checksum.
- Status cloud tetap pending: arsip ini tidak mengklaim URL Web App Google yang live sebelum deployment dan akses diuji pada akun nyata.
