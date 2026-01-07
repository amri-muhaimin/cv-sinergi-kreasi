# Website CV Sinergi Kreasi (Static)

Website ini **statis** (HTML/CSS/JS) — mudah diedit dan bisa di-host di domain gratis seperti **GitHub Pages**, **Cloudflare Pages**, **Netlify**, atau **Vercel**.

## Struktur folder
- `index.html` — halaman depan (ringkasan CV Sinergi Kreasi)
- `layanan-software.html` — layanan software + paket
- `layanan-data.html` — layanan pengolahan/analisis data + paket
- `layanan-katering.html` — layanan nasi box & snack box + paket
- `layanan-kue.html` — layanan kue kering + paket
- `kontak.html` — info kontak
- `assets/`
  - `logo.png` — logo utama (digunakan di navbar dan hero)
  - `logo-original.jpg` — logo versi asli (backup)
  - `styles.css` — gaya tambahan (warna brand, tombol, card)
  - `main.js` — konfigurasi kontak (telepon/WA/email/alamat) + menu mobile

## Edit cepat
1. Ubah konten teks langsung di file `.html`.
2. Ubah warna/tampilan tombol & card di `assets/styles.css`.
3. Ubah nomor WA / email / alamat di `assets/main.js`.

## Deploy ke domain gratis (contoh cepat)

### A) GitHub Pages
1. Buat repo GitHub (public).
2. Upload semua file (termasuk folder `assets/`).
3. Settings → Pages → pilih `Deploy from a branch` → branch `main` / folder `/ (root)`.
4. Tunggu sampai link aktif.

### B) Cloudflare Pages / Netlify / Vercel
- Pilih "Import from Git" → pilih repo → Build command: **kosong** (static) → Output: **/**

> Karena website ini statis, Anda tidak perlu build step.

## Catatan
Harga di halaman layanan bersifat **estimasi** dan dapat disesuaikan saat konsultasi.
Lihat file `REFERENSI_HARGA.md` untuk ringkasan sumber referensi.
