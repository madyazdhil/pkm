# Project State

- Last updated: 2026-09-25
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
