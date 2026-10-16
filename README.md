# MR Aqiqah Catering — Website & Panduan Deployment Vercel

Website resmi **MR Aqiqah Catering** (Layanan Aqiqah Praktis, Berkah, Halal & Higienis dengan Citarasa Bintang Lima). Dibangun menggunakan **React 19**, **Vite 8**, dan **Tailwind CSS v4** dengan standar arsitektur modern yang ringan, cepat, dan siap langsung dideploy di **Vercel**.

---

## 🚀 Panduan Cepat Deploy ke Vercel (3 Langkah Mudah)

Repository ini sudah dilengkapi dengan file `vercel.json` dan konfigurasi *Single Page Application (SPA) rewrite* otomatis, sehingga proses deploy di Vercel dapat dilakukan dalam hitungan menit tanpa konfigurasi manual yang rumit.

### Langkah 1: Push / Simpan Repository ke GitHub / GitLab
1. Buat repository baru di akun GitHub atau GitLab Anda (misalnya: `mr-aqiqah-catering`).
2. Hubungkan dan push seluruh kode di repository ini:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit MR Aqiqah Catering"
   git branch -M main
   git remote add origin https://github.com/USERNAME/mr-aqiqah-catering.git
   git push -u origin main
   ```

### Langkah 2: Import Project ke Dashboard Vercel
1. Buka [https://vercel.com](https://vercel.com) dan login menggunakan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Cari repository `mr-aqiqah-catering` yang baru saja Anda push, lalu klik **"Import"**.

### Langkah 3: Konfirmasi Pengaturan Build & Deploy
Vercel akan secara otomatis mendeteksi konfigurasi project dari file `vercel.json` dan `package.json`:
- **Framework Preset**: `Vite` (Otomatis)
- **Root Directory**: `./` (Default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

Klik tombol **"Deploy"**. Dalam waktu sekitar 30–60 detik, website Anda akan aktif secara langsung dengan domain gratis dari Vercel (contoh: `mr-aqiqah-catering.vercel.app`).

---

## 📱 Cara Mengubah Nomor WhatsApp Resmi

Seluruh tombol pesanan, konsultasi, dan formulir tester di website terhubung ke satu file konfigurasi sentral. Anda **tidak perlu mengedit banyak file**. Cukup ubah di file berikut:

📁 **`src/config/siteConfig.ts`**

```typescript
export const SITE_CONFIG = {
  contact: {
    // Ganti dengan nomor WhatsApp aktif catering Anda (format internasional tanpa tanda +, contoh: 6281299998888)
    whatsappNumber: '6281234567890',
    
    // Tampilan teks nomor yang terbaca di footer
    whatsappDisplay: '+62 812-3456-7890',
    
    // Email resmi
    email: 'salam@mraqiqah.com',
    
    // Jam operasional
    operatingHours: 'Setiap Hari 07.00 – 22.00 WIB',
  },
  // ...
};
```

Setiap kali file ini diubah dan di-push ke GitHub, Vercel akan otomatis melakukan *re-deploy* versi terbaru dalam hitungan detik.

---

## 🌐 Menghubungkan Custom Domain (misal: `mraqiqah.com`)

Setelah deploy di Vercel selesai:
1. Buka dashboard project Anda di Vercel.
2. Masuk ke tab **Settings** > **Domains**.
3. Ketik nama domain Anda (contoh: `mraqiqah.com` atau `www.mraqiqah.com`) lalu klik **Add**.
4. Vercel akan memberikan data DNS (A Record dan CNAME). Masukkan data tersebut ke penyedia domain Anda (seperti Niagahoster, Domainesia, Rumahweb, atau Cloudflare).
5. Sertifikat SSL HTTPS gratis akan otomatis terpasang oleh Vercel.

---

## 💻 Menjalankan Project Secara Lokal

Untuk menguji atau melakukan pengembangan di komputer lokal:

```bash
# 1. Install seluruh dependensi
npm install

# 2. Jalankan server lokal
npm run dev

# 3. Buka di browser
# http://localhost:3000
```

Untuk menguji build produksi secara lokal:
```bash
npm run build
npm run preview
```

---

## 📂 Struktur Penting Repository

```
├── vercel.json                 # Konfigurasi routing Vercel SPA rewrite & header cache
├── package.json                # Dependensi React 19, Tailwind CSS v4, Lucide
├── index.html                  # Entry point HTML & Google Fonts (Manrope, Inter)
├── src/
│   ├── config/
│   │   └── siteConfig.ts       # KONFIGURASI SENTRAL: Nomor WA, email, jam operasional
│   ├── components/
│   │   ├── Navbar.tsx          # Header 3-zone (Logo #6 kiri, Medali #7 kanan)
│   │   ├── LogoMRAqiqah.tsx    # Komponen SVG Logo No. 6 (Ornamen Klasik MR)
│   │   ├── Badge18Tahun.tsx    # Komponen SVG Medali No. 7 (18 Tahun Rosette Ribbon)
│   │   ├── Hero.tsx            # Banner sambutan & 4 pilar garansi
│   │   ├── PackageSection.tsx  # Katalog paket aqiqah bento / masak saja
│   │   ├── InteractiveCalculator.tsx # Kalkulator biaya & pemesanan syar'i
│   │   ├── MenuShowcase.tsx    # Olahan sate, kuah gulai/tongseng, kebuli
│   │   ├── FeaturesAndGuarantee.tsx  # Dokumentasi sembelih & souvenir pigura
│   │   ├── TestimonialsAndFaq.tsx    # Ulasan keluarga & accordion FAQ
│   │   ├── TesterModal.tsx     # Modal formulir sampel makanan gratis
│   │   ├── OrderDrawer.tsx     # Drawer formulir data bayi & booking
│   │   ├── FloatingWhatsApp.tsx# Tombol WhatsApp melayang
│   │   └── Footer.tsx          # Footer informatif & legalitas Halal MUI
│   ├── data/
│   │   └── aqiqahData.ts       # Data paket, daftar menu, ulasan, & FAQ
│   ├── App.tsx                 # Root layout & orkestrasi modal
│   └── index.css               # Desain token Tailwind v4 & font base
```

---

© 2026 MR Aqiqah Catering. Hak Cipta Dilindungi.
