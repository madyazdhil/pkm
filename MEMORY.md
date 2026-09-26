# Project Memory

## User Preferences

- Menginginkan dokumen proposal, presentasi, dan materi PkM yang terstruktur, rapi, dan siap digunakan.
- Pembagian peran Yazid dalam PkM: Penanggung jawab materi ke-2 (*Pembuatan aplikasi / dashboard pelayanan sederhana*).

## Key Facts and Terminology

- **Judul PkM (Resmi Terpilih):** Workshop Pemanfaatan Generative AI dan Dashboard Interaktif dalam Peningkatan Efisiensi Administrasi di Kantor Kecamatan Tambun Selatan (Diperbarui dari draf awal pasca-survei).
- **Mitra:** Kantor Kecamatan Tambun Selatan, Kabupaten Bekasi (Jl. Sultan Hasanudin No. 251, Tambun).
- **Ketua Tim:** Muharam Syam Nugraha (NIM: 251012000047).
- **Anggota Tim (7 Orang):** Muharam Syam Nugraha, Ahmad Yazid Hilmi, Taufik, Deni, Sanusi, Idris, Riduan.
- **Folder Sumber External:** `/Users/yazidhilmi/Documents/Edu/College/Semester 3/PKM` (Tersinkronisasi via symlink `source-docs/`).
- Syarat administratif khusus MTI UNPAM (kelulusan, luaran wajib, portal, jumlah anggota, dan sertifikat) belum boleh dianggap pasti tanpa pedoman/konfirmasi resmi.
- Contoh publikasi Teknik Informatika UNPAM memberi pola pelaksanaan yang berguna, tetapi bukan pengganti pedoman terbaru.

## Timeline Utama

- **24 Agustus 2026 (10.00-12.00):** Survei 1 (Silaturahmi, pengantaran proposal awal & surat izin, pengamatan layanan).
- **2 September 2026 (10.00-12.00):** Survei 2 (Penandatanganan Perjanjian Kerjasama/MoU bermaterai & penyerahan proposal final + rundown).
- **Hari H Pelaksanaan (tentatif 2 jam):** Pelatihan aparatur di Kantor Kecamatan Tambun Selatan.

## Decisions

| Date | Decision | Rationale |
| --- | --- | --- |
| 2026-08-13 | Folder kuliah PKM disinkronkan via symlink `source-docs/`. | Menjaga agar perubahan berkas di folder perkuliahan langsung dapat diakses oleh agent. |
| 2026-08-13 | Materi Yazid dikhususkan pada demonstrasi & praktik prototipe dashboard pelayanan berbasis AI. | Sesuai pembagian peran dalam notulen pertemuan tim. |
| 2026-08-13 | Riset dibedakan antara fakta terverifikasi, dokumen tim, contoh praktik, dan hal yang perlu konfirmasi. | Mencegah contoh lama atau asumsi umum diperlakukan sebagai aturan MTI terbaru. |
| 2026-09-05 | Judul PkM diubah menjadi *"Workshop Pemanfaatan Generative AI dan Dashboard Interaktif dalam Peningkatan Efisiensi Administrasi di Kantor Kecamatan Tambun Selatan"*. | Temuan survei lapangan menunjukkan layanan loket sudah baik; kebutuhan riil adalah efisiensi workflow kerja internal dan pembuatan dashboard internal/pemetaan data. |

## Durable Constraints

- Semua materi AI harus mengedepankan prinsip keamanan data (privasi data masyarakat) dan perlunya verifikasi manual keluaran AI.
- Formulir survei/evaluasi PkM harus mematuhi UU PDP (UU No. 27/2022): Nama dibuat Opsional/Anonim, Jabatan berupa demografi umum, dan menyertakan *Informed Consent / Privacy Disclaimer* di bagian atas form.



## Decisions / Proposals – 2026-09-25

- **Format materi:** diarahkan menjadi satu workshop terpadu, bukan tiga pelatihan terpisah: common core basic AI + keamanan data + prompting, lalu praktik tiga kelompok dengan vibe coding dan Google Apps Script. Status: proposed.
- **Target output:** setiap kelompok membuat prototipe dashboard internal berbasis data sintetis, melakukan pengujian, dan mencoba deployment sebagai web app. Status: proposed.
- **Kasus awal:** monitoring surat/disposisi, agenda/kegiatan internal, dan rekap layanan/aduan non-sensitif. Status: proposed, perlu konfirmasi kebutuhan mitra.

- **Fokus deck:** praktik utama memakai ChatGPT melalui chat. Peserta diminta menghasilkan dua file GAS, `Code.gs` dan `Index.html`, lalu menempatkan kode tersebut di Apps Script. JavaScript browser dan CSS dapat berada di dalam `Index.html` pada level pemula. Codex hanya dikenalkan sebagai opsi lanjutan untuk bekerja langsung dengan file/project coding. Status: proposed.
- **Alur teknis utama:** Google Sheets → Google Apps Script → `Code.gs` + `Index.html` → testing → deployment web app. Status: proposed.

## HTML deck — 2026-09-26

- Deck HTML workshop 28 slide sudah dibuat dan diverifikasi lokal: `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`.
- Format final sengaja HTML lokal, bukan PPTX, agar dapat dibuka langsung di browser; README menyimpan kontrol keyboard, notes presenter, overview, fullscreen, dan print.
- Capture Apps Script nyata pada Chrome zoom 110% dipakai sebagai evidence langkah editor/menu. Provenance dan crop tercatat pada `materials/workshop/html-deck/assets/CAPTURE-MANIFEST.md`.
- Deployment tetap dijelaskan sebagai alur panduan; jangan menyebut deployment publik berhasil tanpa URL/hasil halaman yang terbukti.

## Deck accessibility feedback — 2026-09-26

- Default deck opening must always be the cover slide; do not restore a stale closing-slide hash on initial load.
- Projector use requires a light/high-contrast theme rather than the earlier dark theme.
- Audience includes senior participants; prefer larger body text, table text, captions, and callouts even if a few dense slides need tighter spacing.

## Speaker division — 2026-09-26

- Materi dibawakan oleh dua orang: Pak Syam membaca basic AI, Generative AI, verifikasi, dan keamanan data; Yazid memandu ChatGPT prompting, GAS, dua file, testing, deployment, dan praktik dashboard.
- Deck harus menampilkan ownership badge kecil di bagian atas setiap slide: `S`, `Y`, atau `↔`.

## Navigation bug lesson — 2026-09-26

- Avoid a literal `END` label in the closing slide because stale browser/hash state can make the deck look stuck there. Use stable `NN / total` labels on every slide.
- QA must reproduce the exact user path, not only inspect the internal `render()` function.
