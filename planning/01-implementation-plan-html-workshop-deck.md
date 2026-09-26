# Implementation plan: deck HTML workshop AI dan GAS

- Dimulai: 25 September 2026, dilanjutkan 26 September 2026 (WIB)
- Goal: `continue untill html ppt is done`
- Output utama: `materials/workshop/html-deck/ai-dashboard-gas-workshop.html`

## Kriteria selesai

1. Deck HTML berbahasa Indonesia dapat dibuka lokal tanpa dependensi CDN.
2. Materi basic AI, verifikasi, keamanan data, ChatGPT chat vs Codex, GAS, dua file, testing, deployment, dan tiga kasus kelompok lengkap.
3. Screenshot asli browser zoom 110% dipotong agar UI relevan terbaca dan informasi browser yang tidak relevan tidak terbawa. Screenshot bukan UI rekayasa.
4. Navigasi keyboard/tombol, nomor slide, overview, catatan presenter, layar penuh, dan print bekerja.
5. Pengujian layout tidak mendeteksi konten terpotong di viewport presentasi. Tidak mengklaim cloud deployment berhasil tanpa bukti.
6. README, manifest capture, STATE/CANVAS, log, dan checkpoint Git tersedia.

## Langkah

- [x] Memuat konteks project, outline, dan instruksi skill.
- [x] Membuat draft nyata HTML deck.
- [x] Memperbaiki screenshot, struktur dua file, test URL, dan alur deployment sesuai docs.
- [x] Menyelesaikan layout dan menguji UI browser serta print.
- [x] Mengemas deliverable, memperbarui project memory, dan commit lokal.

## Batasan

Tanggal dan durasi acara tetap tentatif. Pengaturan akses Google tidak diubah. Screenshot hasil deployment cloud tidak boleh dipalsukan. Tool image input tidak tersedia pada sesi ini, sehingga QA manual visual tidak diklaim. QA layout dilakukan melalui browser geometry, image load checks, navigasi, overview, notes, print mode, dan pembukaan `file://`.
