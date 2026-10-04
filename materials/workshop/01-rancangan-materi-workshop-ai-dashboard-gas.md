# Rancangan Materi Workshop
## Dashboard Rekap Layanan Kecamatan dari Data Excel

- **Project:** PkM Magister Teknik Informatika UNPAM – Kecamatan Tambun Selatan
- **Status:** Revised implementation draft
- **Tanggal pembaruan:** 4 Oktober 2026
- **Pemateri:** Muharam Syam Nugraha — teori AI dan prompting; Ahmad Yazid Hilmi — praktik dashboard
- **Audience:** Aparatur, pegawai, dan staf Kantor Kecamatan Tambun Selatan
- **Durasi kerja:** dua skenario yang perlu dikonfirmasi tim: inti 80 menit atau workshop penuh sekitar 120 menit
- **Output peserta:** pemahaman teori AI/prompting dan dashboard web berbasis link, bukan canvas percakapan

> **Gagasan utama:** peserta mulai dari file Excel, memahami kolom dan pertanyaan kerja, mengimpor data ke Google Sheets, memakai ChatGPT sebagai bantuan rancangan/kode, menempatkan kode di Google Apps Script, menguji dashboard, lalu membagikan link hanya jika aksesnya sudah diperiksa.

## 1A. Pembagian pemateri

### Pak Syam — teori AI dan prompting

Pak Syam menjelaskan basic AI, Generative AI, contoh pemanfaatan untuk pekerjaan administrasi, batasan AI, verifikasi manusia, keamanan data, dan cara menyusun prompt yang jelas. Bagian teori menggunakan contoh yang dekat dengan pekerjaan aparatur, tetapi tidak meminta peserta memasukkan data warga asli.

### Yazid — praktik dashboard

Yazid memandu alur Excel → Google Sheets → ChatGPT sebagai alat bantu → `Code.gs` + `Index.html` → testing → link web app. Peserta tidak harus menulis kode dari nol. Mereka perlu memahami sumber data, definisi KPI, tempat menempelkan dua file, dan cara memeriksa hasil.

### Serah-terima

Pak Syam menutup teori dengan latihan prompt. Yazid menggunakan prompt tersebut sebagai jembatan menuju dataset dan dashboard latihan.

## 1. Fokus materi

Materi ini tidak mengajarkan peserta menjadi programmer. Peserta belajar satu alur yang dapat dijelaskan:

```text
Excel latihan
    ↓
Google Sheets
    ↓
ChatGPT membantu prompt dan kode
    ↓
Code.gs + Index.html di Google Apps Script
    ↓
Dashboard di browser
    ↓
Link web app yang diuji
```

ChatGPT adalah alat bantu dalam proses. Dashboard yang dilihat peserta dibuat dan dijalankan di Google Apps Script.

## 2. Use case utama

### Dashboard Rekap Layanan Kecamatan

Data utama latihan memakai file `dummy-data-rekap-layanan-kecamatan.xlsx`.

Pertanyaan kerja yang dijawab:

- Berapa jumlah layanan pada data yang tersedia?
- Berapa layanan yang sudah selesai?
- Berapa layanan yang masih diproses?
- Jenis layanan apa yang paling banyak?
- Bagaimana melihat data berdasarkan status atau jenis layanan?
- Kapan data terakhir diperbarui?

### Variasi kelompok

- **Kelompok 1:** rekap layanan kecamatan.
- **Kelompok 2:** monitoring surat dan disposisi.
- **Kelompok 3:** agenda dan kegiatan internal.

Semua kelompok menggunakan alur teknis yang sama. Perbedaannya hanya nama kolom, KPI, dan pertanyaan kerja.

## 3. Dataset latihan

Tiga file tersedia di `outputs/2026-10-03-dummy-datasets/`:

1. `dummy-data-rekap-layanan-kecamatan.xlsx`
2. `dummy-data-monitoring-surat-disposisi.xlsx`
3. `dummy-data-agenda-kegiatan-internal.xlsx`

Setiap file memiliki:

- sheet `Data`;
- sheet `Panduan`;
- 100 baris data sintetis;
- header yang konsisten;
- tidak ada identitas warga, nomor kontak, alamat lengkap, isi surat, atau dokumen rahasia.

## 4. Tujuan pembelajaran

Setelah mengikuti materi, peserta dapat:

1. menjelaskan siapa pengguna dashboard dan pertanyaan kerja yang ingin dijawab;
2. mengunggah atau mengonversi file Excel ke Google Sheets;
3. memeriksa header, tanggal, status, dan jumlah baris;
4. menjelaskan minimal tiga KPI serta sumber kolomnya;
5. meminta ChatGPT menghasilkan `Code.gs` dan `Index.html` secara terpisah;
6. menempatkan kode ke Google Apps Script;
7. menguji tabel, filter, KPI, dan grafik sederhana;
8. membuka dashboard melalui link web app atau menunjukkan fallback screenshot;
9. menjelaskan batasan data, verifikasi manual, dan pengaturan akses.

## 5. Dashboard minimum

Setiap kelompok menargetkan:

- tiga kartu ringkasan;
- satu tabel;
- satu filter utama;
- satu grafik sederhana;
- tanggal pembaruan data;
- label data latihan/sintetis;
- catatan bahwa dashboard bukan pengganti sistem layanan resmi.

### Definisi KPI untuk dataset rekap layanan

- **Total layanan:** jumlah baris layanan valid dari data latihan.
- **Selesai:** jumlah layanan dengan `Status = Selesai`.
- **Masih diproses:** jumlah layanan dengan `Status = Diproses` atau `Status = Menunggu Dokumen`.
- **Dibatalkan:** ditampilkan sebagai status, tetapi tidak dihitung sebagai selesai.

Definisi KPI harus dijelaskan sebelum peserta mempercantik tampilan.

## 6. Keamanan data

Untuk latihan:

- gunakan file dummy atau data yang sudah dianonimkan;
- jangan memasukkan NIK, nomor KK, nomor telepon, alamat lengkap, data kesehatan, isi surat, aduan asli, password, token, atau API key ke ChatGPT;
- jangan membuat data sensitif dapat diakses publik;
- periksa kembali keluaran AI, angka, nama kolom, status, dan tanggal;
- keputusan administratif tetap berada pada petugas yang berwenang.

## 7. Dua skenario durasi

### Skenario inti 80 menit

Dipakai jika slot materi efektif tetap terbatas. Teori Pak Syam dipadatkan, tetapi tetap menyentuh AI, keamanan, verifikasi, dan formula prompt. Yazid memprioritaskan satu demo end-to-end dan satu perubahan kecil.

| Durasi | Sesi | Pemateri | Hasil |
|---:|---|---|---|
| 5 menit | Pembukaan dan pembagian peran | Bersama | Ekspektasi peserta jelas |
| 15 menit | Basic AI, Generative AI, batasan, dan keamanan | Pak Syam | Peserta memahami manfaat dan risiko |
| 10 menit | Formula prompt dan contoh singkat | Pak Syam | Peserta memiliki struktur prompt |
| 3 menit | Serah-terima | Bersama | Teori terhubung ke dashboard |
| 10 menit | Data Excel → Sheets → pertanyaan kerja | Yazid | Sheet dan KPI siap dipakai |
| 17 menit | Demo ChatGPT → dua file → dashboard | Yazid | Peserta melihat proses utuh |
| 12 menit | Satu perubahan dan testing | Yazid | Satu fitur diuji |
| 5 menit | Checklist dan penutup | Bersama | Peserta menyimpan prompt dan batasan |
| 3 menit | Buffer | Fasilitator | Waktu untuk kendala kecil |

### Skenario workshop penuh sekitar 120 menit

Dipakai jika seluruh sesi dua jam tersedia. Pak Syam dapat memberi contoh teori dan latihan prompt yang lebih bernapas, sedangkan Yazid memberi ruang praktik dan pendampingan.

| Durasi | Sesi | Pemateri | Hasil |
|---:|---|---|---|
| 5 menit | Pembukaan dan tujuan | Bersama | Alur dan output dipahami |
| 30 menit | Basic AI, Generative AI, contoh penggunaan, batasan, verifikasi, keamanan | Pak Syam | Peserta memahami prinsip dan risiko |
| 15 menit | Formula prompting dan latihan | Pak Syam | Prompt kerja tersusun |
| 5 menit | Serah-terima | Bersama | Teori dihubungkan ke praktik |
| 10 menit | Data Excel → Google Sheets → KPI | Yazid | Dataset siap dibaca |
| 15 menit | Demo ChatGPT → `Code.gs` + `Index.html` | Yazid | Struktur dua file dipahami |
| 25 menit | Praktik satu perubahan kecil | Yazid + pendamping | Fitur berhasil diubah |
| 10 menit | Testing dan akses | Yazid | Angka, filter, dan akses diperiksa |
| 5 menit | Share-out dan penutup | Bersama | Prompt, bukti, dan PIC tersimpan |

Deployment semua kelompok tidak menjadi syarat. Jika akses cloud bermasalah, gunakan preview lokal/screenshot dan catat blocker.

## 8. Metode fasilitasi

### Demo fasilitator

1. Pak Syam menyampaikan slide teori dan latihan prompt sesuai `panduan-pemateri-dua-sesi.md`.
2. Tampilkan file Excel dummy.
3. Tunjukkan sheet `Panduan`.
4. Upload atau buka Excel dengan Google Sheets.
5. Jelaskan pertanyaan kerja dan tiga KPI.
6. Buka ChatGPT dan tempel prompt card.
7. Tunjukkan dua output kode secara terpisah.
8. Buka Apps Script dari menu Extensions/Ekstensi.
9. Tempel `Code.gs`.
10. Buat file HTML bernama `Index`.
11. Tempel `Index.html`.
12. Uji dashboard.
13. Ubah satu filter atau label.
14. Periksa ulang KPI.
15. Tunjukkan deployment/link hanya jika benar-benar dapat diuji.

### Praktik kelompok

Setiap kelompok mengisi canvas kerja berikut sebelum meminta perubahan kode:

- pengguna dashboard;
- pertanyaan kerja;
- nama kolom dan arti kolom;
- tiga KPI;
- satu filter;
- satu risiko data;
- siapa PIC yang akan menyimpan dan memperbarui data.

## 9. Output kelompok

Setiap kelompok mengumpulkan:

- file/data source yang dipakai;
- prompt utama;
- screenshot atau link dashboard;
- checklist pengujian;
- satu batasan atau risiko;
- nama PIC tindak lanjut.

Deployment bukan syarat wajib apabila akun, izin, atau jaringan tidak memungkinkan. Dalam kondisi tersebut, kelompok menyerahkan screenshot hasil dan catatan blocker.

## 10. Materi pendukung

- [Starter Dashboard GAS](starter-dashboard/README.md)
- [Prompt Card](starter-dashboard/PROMPT_CARD.md)
- [Checklist Peserta](checklist-data-dashboard.md)
- [Dummy Excel](../../outputs/2026-10-03-dummy-datasets/README.md)
- [Implementation Plan](../../planning/02-implementation-plan-audit-remediation-dashboard-data-flow.md)
