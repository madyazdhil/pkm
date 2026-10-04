# Panduan Fasilitator: Preflight, Versi, dan Akses

Dokumen ini membantu tim menjaga demo tetap realistis. Isi bagian yang bertanda `Isi sebelum hari H` setelah keputusan internal dibuat.

## 1. Isi sebelum hari H

- **Tanggal/jam pelaksanaan:** ____________________
- **Durasi materi Yazid:** ____________________ menit
- **Pemateri utama:** ____________________
- **Pendamping teknis:** ____________________
- **PIC data/akses:** ____________________
- **Akun Google demo:** ____________________
- **Spreadsheet demo:** ____________________
- **URL web app teruji (jika ada):** ____________________
- **Siapa yang boleh mengakses:** ____________________
- **Status konfirmasi dengan Syam/Taufik:** ____________________

Jangan menaruh password, token, atau API key pada dokumen ini.

## 2. T-1 hari

- [ ] Pastikan deck yang dipakai adalah versi 18 slide.
- [ ] Buka tiga workbook dummy dan cek sheet `Data` serta `Panduan`.
- [ ] Pastikan dataset utama menghasilkan total 100, selesai 25, dan masih diproses 50.
- [ ] Siapkan satu Google Sheet demo dari workbook utama.
- [ ] Jalankan `setupSpreadsheetId()` pada project Apps Script demo.
- [ ] Uji dashboard lokal dan, bila dipilih oleh tim, uji deployment cloud dengan akun latihan.
- [ ] Simpan screenshot fallback jika URL cloud tidak tersedia.
- [ ] Siapkan prompt card, worksheet, checklist, dan evaluasi pre/post.
- [ ] Tentukan siapa yang membantu peserta ketika header, izin, atau koneksi bermasalah.

## 3. T-0 sebelum peserta masuk

- [ ] Laptop terhubung ke proyektor dan browser pada zoom yang nyaman.
- [ ] Tab demo tidak menampilkan data nyata atau informasi akun yang sensitif.
- [ ] File latihan tersedia offline atau dapat dibagikan melalui Drive.
- [ ] Deck dibuka pada slide 1.
- [ ] URL cloud tidak disebut sebagai berhasil sebelum dibuka dan diuji.
- [ ] Jalur fallback: tampilkan preview lokal/screenshot dan jelaskan bahwa ini bukan deployment live.

## 4. Urutan demo yang disarankan

1. Tunjukkan masalah kerja dan file Excel.
2. Tunjukkan `Panduan`, header, status, dan KPI manual.
3. Jelaskan aturan data aman.
4. Konversi Excel ke Google Sheets menggunakan **File → Save as Google Sheets** bila diperlukan.
5. Tunjukkan prompt card.
6. Tempel `Code.gs` dan `Index.html`.
7. Jalankan `setupSpreadsheetId()`.
8. Uji dashboard dan ubah satu status latihan.
9. Tunjukkan deployment/link hanya bila benar-benar siap.
10. Arahkan peserta ke worksheet dan checklist.

## 5. Matriks status bukti

| Item | Bukti yang cukup | Jangan diklaim sebagai |
|---|---|---|
| Workbook latihan | File XLSX terbuka, 100 baris, sheet `Data`/`Panduan` | Data resmi kecamatan |
| Preview lokal | Browser menampilkan fixture sintetik | Deployment Google live |
| Menu deployment | Screenshot menu Apps Script | URL aktif |
| URL web app | URL dibuka pada akun yang berhak dan diuji | Akses publik untuk semua |
| KPI | Hitungan manual cocok dan berubah setelah uji data | Angka resmi tanpa validasi |

## 6. Jika praktik tersendat

Gunakan urutan diagnosis:

1. Apakah akun Google benar?
2. Apakah file sudah benar-benar menjadi Google Sheets?
3. Apakah sheet bernama `Data`?
4. Apakah header wajib masih sama?
5. Apakah `setupSpreadsheetId()` sudah dijalankan pada project yang sama?
6. Apakah pesan error lengkap sudah dicatat?
7. Apakah kelompok perlu memakai screenshot fallback?

Untuk slot materi sekitar 80 menit, satu demo end-to-end dan satu perubahan kecil sudah cukup. Deployment semua kelompok bersifat opsional dan bergantung pada akun, izin, jaringan, serta waktu.
