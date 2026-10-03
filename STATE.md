# Project State

## Dummy Dataset and Implementation Plan — 2026-10-03

- Tiga workbook Excel dummy selesai dibuat di `outputs/2026-10-03-dummy-datasets/`, masing-masing 100 baris, dengan sheet `Data` dan `Panduan`.
- Alur baru yang direncanakan: Excel peserta → Google Sheets → ChatGPT sebagai alat bantu prompt/kode → Google Apps Script → dashboard web berbasis link. Canvas ChatGPT bukan output akhir.
- Implementation plan revisi audit tersedia di `planning/02-implementation-plan-audit-remediation-dashboard-data-flow.md`.
- Belum dimulai: revisi deck HTML dan materi pendukung; masih menunggu keputusan apakah peserta memakai Excel masing-masing atau dataset latihan panitia, serta apakah deployment dilakukan semua kelompok atau demo fasilitator.

## Material Audit — 2026-10-03

- Audit substansi deck `materials/workshop/html-deck/ai-dashboard-gas-workshop.html` selesai dan disimpan di `MATERIAL_AUDIT.md`.
- Kesimpulan: fondasi deck sesuai tema, tetapi audience-fit dan brief-fit masih parsial; fokus terlalu tool-centric dan belum memilih satu use case/data utama untuk dashboard pelayanan.
- Prioritas revisi: pilih satu dashboard rekap layanan berbasis data sintetis, tambahkan data dictionary + KPI + contoh hasil end-to-end, pindahkan Codex ke appendix, dan selaraskan rundown dengan waktu materi efektif sekitar 80 menit (10.40–12.00 pada notulen).
- QA visual otomatis belum dapat dijalankan ulang karena modul Python `playwright` belum tersedia; audit substansi selesai dari artefak lokal.

- Last updated: 2026-10-03
- Status: In progress
- Current focus: Memfokuskan deck pada alur ChatGPT melalui chat → dua file GAS (`Code.gs` dan `Index.html`) → testing → publish web app, dengan Codex hanya sebagai pengenalan lanjutan.

## Completed

- Symlink folder kuliah `/Users/yazidhilmi/Documents/Edu/College/Semester 3/PKM` -> `projects/pkm-smt3/source-docs` berhasil dibuat.
- Notulen rapat tim dan draft proposal Kecamatan Tambun Selatan telah diekstrak dan diintegrasikan ke konteks project.
- Laporan riset panduan umum PkM MTI UNPAM tersedia di `RESEARCH.md`.
- Klaim administratif yang belum didukung pedoman resmi sudah ditandai perlu konfirmasi; fakta tim 7 orang dan dokumen lokal diprioritaskan.
- Judul PkM resmi diperbarui menjadi *"Workshop Pemanfaatan Generative AI dan Dashboard Interaktif dalam Peningkatan Efisiensi Administrasi di Kantor Kecamatan Tambun Selatan"* berdasarkan hasil observasi kebutuhan riil aparatur kecamatan.

## Next Steps

1. **Konfirmasi desain workshop dengan tim:**
   - Menetapkan durasi final (120 atau 150 menit), platform AI utama, dan pembagian fasilitator.
2. **Menyiapkan starter kit praktik:**
   - Membuat tiga Google Sheet berisi data sintetis, satu starter project Google Apps Script, prompt card dua-file, dan checklist pengujian.
3. **Finalisasi deck dan modul peserta:**
   - Mengubah outline deck ChatGPT → GAS menjadi slide final, lembar kasus kelompok, dan panduan deployment singkat.
4. **Penyelarasan dokumen proposal:**
   - Menyesuaikan judul, tujuan, metode, indikator keberhasilan, dan pembagian materi agar konsisten dengan format workshop.

## Blockers

- Pedoman/template resmi terbaru MTI/LPPM belum tersedia dalam sumber project; situs publik tertahan verifikasi Cloudflare.

## Open Questions

- Apakah perlu bantuan untuk menyusun slide presentasi / modul panduan praktik dashboard pelayanan berbasis AI untuk Materi 2?
- Apa ketentuan resmi mengenai status PkM, luaran wajib, sertifikat, portal unggah, dan kaitannya dengan sidang/kelulusan?



## New Working Artifact

- Draft rancangan materi workshop: `materials/workshop/01-rancangan-materi-workshop-ai-dashboard-gas.md`
- Status: proposed; menunggu keputusan tim atas durasi, platform AI, starter code, dan kasus final.

- Outline deck fokus ChatGPT → GAS: `materials/workshop/02-outline-deck-chat-to-gas.md`

## Browser Screenshot Progress — 2026-09-25

- Chrome pada project Apps Script latihan terverifikasi menampilkan zoom **110%**.
- Capture resolusi penuh berhasil disimpan untuk editor `Code.gs` dan menu **Tambahkan file**.
- Capture awal berukuran 132 × 136 px ditandai sebagai tidak layak untuk deck; versi resolusi penuh diprioritaskan.
- Project Apps Script latihan masih kosong dan belum diberi kode custom, belum dibuat `Index.html`, belum di-deploy, dan belum diubah pengaturannya.
- Menunggu konfirmasi pengguna sebelum mengetik kode demo sintetis serta membuat file HTML cloud.

## Demo GAS dan Capture Lanjutan — 2026-09-25

- Konfirmasi `cont` diperlakukan sebagai izin melanjutkan pengisian project Apps Script latihan.
- `Code.gs` berhasil disimpan dengan fungsi minimal:
  `function doGet() { return HtmlService.createHtmlOutputFromFile('Index');}`
- File `Index.html` berhasil dibuat dan namanya diperbaiki menjadi `Index.html` setelah sempat salah ketik sementara.
- `Index.html` berisi dashboard statis berbasis data sintetis dengan kartu total, rekap kategori, dan tabel monitoring.
- Capture baru berhasil disimpan untuk editor `Index.html`, bagian awal `Index.html`, `Code.gs` final, dan menu deployment pada zoom **110%**.
- Deployment publik, perubahan sharing, dan pengujian URL web app belum dilakukan. Capture halaman dashboard ter-render menunggu konfirmasi deployment/test yang terpisah.

## Deployment Test Blocker — 2026-09-25

- Menu **Deploy → Uji deployment** sudah disiapkan pada browser zoom 110%, tetapi item belum membuka halaman karena project belum memiliki deployment yang dapat diuji.
- Membuat deployment baru akan membuat endpoint deployment pada akun Google. Ini adalah perubahan cloud yang memerlukan konfirmasi tepat sebelum aksi.
- Browser dibiarkan pada menu deployment agar alur dapat dilanjutkan setelah konfirmasi pengguna.

## HTML Deck Completion — 2026-09-26

- Deck HTML workshop selesai dibuat di `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`.
- Isi deck: 28 slide berbahasa Indonesia tentang basic AI, verifikasi, keamanan data, ChatGPT melalui chat, Codex sebagai pengenalan lanjutan, GAS, Code.gs/Kode.gs, Index.html, CSS/JavaScript di HTML, prompt dua file, copy-paste, testing, deployment, arsitektur, tiga kasus kelompok, rubrik, rundown, share-out, dan referensi.
- Capture browser nyata pada zoom 110% diturunkan ke `materials/workshop/html-deck/assets/` dengan manifest provenance. Capture deployment diberi catatan bahwa menu bukan bukti URL deployment berhasil.
- Deck memiliki navigasi tombol/keyboard, counter, overview, notes presenter, fullscreen, hash slide, dan print stylesheet.
- QA browser lokal lulus melalui `scripts/qa_html_deck.py` pada viewport 1440×810 dan 1280×720: 28 slide, seluruh image load, tidak ada overflow, navigasi maju/mundur, notes, dan overview bekerja.
- QA `file://` juga lulus untuk membuka deck langsung tanpa server.
- Status: implemented and verified locally. Tidak ada deployment/access Google yang diubah.

## Feedback pass — 2026-09-26

- User reported that the deck appeared to open directly on the closing slide, was too dark for projector use, and needed larger text for a more senior audience.
- Fixed startup behavior: the local deck now always opens on the title slide, even if the browser URL previously retained `#slide-28`.
- Reworked the visual theme to a light projector-first palette with higher contrast and larger body/callout/table text.
- Re-ran browser QA at 1440×810 and 1280×720. All 28 slides remain within the viewport, images load, and keyboard/notes/overview behavior passes.

## Speaker ownership labels — 2026-09-26

- Deck diberi badge pembicara pada setiap slide agar mudah dibawakan oleh dua orang.
- `S / PAK SYAM · BASIC AI`: slide 3–6.
- `Y / YAZID · PRAKTIK DASHBOARD`: slide 7–26.
- `↔ / BERSAMA`: pembuka, referensi, dan penutup.
- README deck menjelaskan arti kode tersebut.
- QA browser tetap lulus setelah badge ditambahkan.

## Slide END bug fix — 2026-09-26

- User reported that attempting to reach slide 3 still showed an `END` presentation.
- Root cause addressed: the closing slide had a literal `END` label while other slide labels were partly stale, which made the active slide state confusing when the browser/hash was stale. All 28 slides now use stable `NN / 28` labels; the closing slide is `28 / 28`.
- Added an explicit QA path for two Next clicks from cover to slide 3. It passes and lands on `Masalah kerja yang ingin dibantu`, `03 / 28`.

## Slide reload / permanent closing overlay fix — 2026-09-26

- User reported that the presentation still showed the closing slide when reloaded or navigating.
- True root cause discovered: `.closing` and `.cover` CSS classes had unconditional `display: grid` rules defined after `.slide { display: none }`. Because `.slide.closing` is the last child in the DOM, it was rendered with `display: grid` on top of every active slide at all times.
- Fixed: removed unconditional `display: grid` from `.cover` and `.closing`; added `.slide.active.closing { display: grid }` and `body:not(.overview) .slide:not(.active) { display: none !important }`.
- Script updated to properly read URL hash on reload (`location.hash.match(/slide-(\d+)/)`), so navigating to slide 3 and reloading correctly remains on slide 3.
- QA script `scripts/qa_html_deck.py` enhanced with visual occlusion testing (`elementFromPoint` at center of screen) and strict assertion that exactly 1 slide has `display !== 'none'`. All tests pass.

## Spreadsheet to Apps Script Visual Guide & Slide Cropping Fix — 2026-09-26

- **Slide 10 Overhaul:** Mengganti screenshot beranda Apps Script dengan visual step-by-step resolusi tinggi (`01-google-sheets-extensions-apps-script.png`) yang menggambarkan Google Sheets nyata lengkap dengan nama dokumen, formula bar, tabel data, menu dropdown *Extensions*, serta badge petunjuk visual dengan panah tebal:
  - `Langkah 1: Klik menu "Extensions" ▼ (atau Ekstensi)`
  - `Langkah 2: Klik Apps Script ➔ Tab editor terbuka otomatis!`
- **Eliminasi Pemotongan Gambar (Slide Cropping):**
  - Mengubah CSS `.browser-shot img` dari `object-fit: cover` menjadi `object-fit: contain` dengan background terang `#ffffff` sehingga seluruh screenshot/panduan tampil utuh tanpa terpotong di tepi.
  - Membersihkan artifact garis hitam vertikal 46px pada border kiri screenshot editor Apps Script (`02-codegs-editor-110.jpg`, `03-add-html-menu-110.jpg`, `04-index-editor-110.jpg`, `06-deployment-menu-110.jpg`).
- **Perbaikan Overlap Teks Bullet List:**
  - Menghapus aturan `display: grid; grid-template-columns: 22px 1fr` pada `.list li` yang memecah tag inline (`<b>`, `<span>`) menjadi cell terpisah (seperti pada slide 17 `<b>INDEX.HTML</b>`). Diganti dengan penomoran/bullet berbasis `position: relative` dan `padding-left: 26px`.
- **Penyesuaian Responsif 720p:**
  - Menyelaraskan padding dan ukuran font pada slide *Hasil yang dibawa pulang* dan *Membuka Apps Script* di breakpoint `max-height: 760px`.
  - QA otomatis (`scripts/qa_html_deck.py`) lulus 100% pada resolusi 1440×810 dan 1280×720 tanpa overflow.

## Real Browser Screenshot, Caption Cleanup & Enlarged Slide Images — 2026-09-26

- **Tangkapan Layar Riil dari Browser (Bukan CSS Mockup):**
  - Mengambil screenshot langsung dari Google Sheets asli pada browser Chrome (sesi terautentikasi via CDP) dengan menu **Ekstensi** dan item **Apps Script** terbuka secara riil.
  - Memperbarui asset `01-google-sheets-extensions-apps-script.png` dengan screenshot asli 960 × 310 px, dilengkapi badge petunjuk langkah 1 dan langkah 2 serta panah penunjuk presisi ke menu dan item dropdown.
- **Pembersihan Caption Teknis:**
  - Menghapus seluruh label teknis internal yang membingungkan peserta (seperti `Capture browser, zoom 110% • ...`) pada slide 10, 15, 16, 17, dan 19.
  - Mengganti caption menjadi ringkasan fungsi yang informatif dan relevan dengan materi praktik peserta.
- **Pembesaran Ukuran Gambar Screenshot (Enlarged Images):**
  - Mengubah layout kolom `.step-layout` menjadi `0.72fr 1.28fr` sehingga area screenshot meningkat menjadi ~64% lebar slide.
  - Menyesuaikan tinggi frame `.browser-shot.editor` dan `.browser-shot.medium` menjadi 350-380px tanpa ruang kosong (letterboxing).
  - Memindahkan kotak pengingat (quote) pada slide 19 ke kolom teks kiri agar gambar menu deployment dapat tampil maksimal.
- **Verifikasi QA:**
  - Pengujian visual Playwright dan automated assertions via `scripts/qa_html_deck.py` lulus 100% (`PASS: HTML deck QA`) pada 1440×810 dan 1280×720.

## GitHub Remote Push & GitHub Pages Setup — 2026-09-26

- **Personal GitHub Remote Configured:**
  - Remote ditautkan ke akun pribadi: `git@github.com-personal:madyazdhil/pkm.git`.
  - Berhasil diautentikasi dengan SSH host alias `github.com-personal`.
- **GitHub Pages Entry Point:**
  - Menambahkan `index.html` pada root repository dengan auto-redirect instan (termasuk preservasi hash `#slide-NN`) ke deck presentasi.
  - Menambahkan `index.html` dan `.nojekyll` di folder `materials/workshop/html-deck/` agar seluruh rute URL langsung membuka deck tanpa halaman 404.
  - URL publik yang dapat dibagikan:
    - Root link: `https://madyazdhil.github.io/pkm/`
    - Direct deck link: `https://madyazdhil.github.io/pkm/materials/workshop/html-deck/ai-dashboard-gas-workshop.html`
- **Pembersihan Git Tracking:**
  - Mengabaikan symlink lokal `source-docs` dari pelacakan Git agar tidak menjadi symlink rusak (broken link) di GitHub.
