# Project Canvas: PkM Magister Teknik Informatika UNPAM (Kecamatan Tambun Selatan)

- Last updated: 2026-09-25
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

Pembuatan file `Index.html`, penempelan kode sintetis, pengujian dashboard, dan capture menu deployment menunggu konfirmasi eksplisit sebelum project cloud latihan diubah. Status: in progress.

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


## HTML Workshop Deck — 26 September 2026

- ✅ **Deck HTML final:** [ai-dashboard-gas-workshop.html](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/ai-dashboard-gas-workshop.html)
- 📖 **Petunjuk penggunaan:** [README.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/README.md)
- 🧾 **Manifest provenance capture:** [CAPTURE-MANIFEST.md](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/materials/workshop/html-deck/assets/CAPTURE-MANIFEST.md)
- 🧪 **QA script:** [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py)

Deck berisi 28 slide dan dapat dibuka langsung melalui `file://`. Capture browser berasal dari Chrome zoom 110% dan hanya dipakai sebagai bukti langkah UI Apps Script. Deck tidak mengklaim deployment web app berhasil karena URL deployment belum tersedia.

## Accessibility revision — 26 September 2026

- Deck now starts consistently on the title slide instead of restoring a stale hash to the closing slide.
- Theme changed from dark to light/high contrast for projector readability.
- Typography increased for body copy, lists, tables, callouts, captions, and code labels, with targeted spacing adjustments for 1280×720 projection.
- QA remains green via [qa_html_deck.py](file:///Users/yazidhilmi/Documents/Edu/Fireside-chat/projects/pkm-smt3/scripts/qa_html_deck.py).
