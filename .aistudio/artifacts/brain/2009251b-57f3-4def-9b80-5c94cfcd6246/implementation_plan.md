# Rencana Perbaikan Error Deployment Vercel (npm ERESOLVE)

Rencana ini merinci solusi komprehensif untuk mengatasi kegagalan proses build Vercel pada tahap `npm install` yang disebabkan oleh konflik *peer dependency* antara versi `esbuild` root (`^0.25.0`) dan kebutuhan `vite@8.3.4` (`^0.27.0 || ^0.28.0`).

## Keputusan Kritis & Pilihan Pengguna

> [!IMPORTANT]
> Sesuai konfirmasi pilihan Anda:
> - **Strategi**: Menerapkan solusi lengkap (Triple Layer Protection) agar Vercel dapat meng-install dependensi tanpa hambatan:
>   1. Menghapus deklarasi eksplisit `esbuild` di `devDependencies` `package.json` (karena Vite sudah mengelola esbuild internalnya sendiri).
>   2. Menambahkan file konfigurasi `.npmrc` dengan `legacy-peer-deps=true`.
>   3. Mengatur `installCommand` di `vercel.json` menjadi `npm install --legacy-peer-deps`.
>   4. Melakukan commit perubahan langsung ke branch `main`.

---

## 1. Analisa Akar Masalah (Root Cause)

Dari log error Vercel:
```text
npm error code ERESOLVE
npm error Found: esbuild@0.25.12 from dev esbuild@"^0.25.0"
npm error Could not resolve dependency:
npm error peerOptional esbuild@"^0.27.0 || ^0.28.0" from vite@8.3.4
npm error Conflicting peer dependency: esbuild@0.28.2
```

1. **Penyebab**:
   - `package.json` mencantumkan `"esbuild": "^0.25.0"` pada `devDependencies`.
   - `vite@^8.3.0` mengharapkan `esbuild` versi `^0.27.0 || ^0.28.0`.
   - Di lingkungan cloud seperti Vercel, npm v8+ secara default memberlakukan aturan *strict peer dependency resolution*, sehingga proses install langsung dihentikan (*exit code 1*).

2. **Solusi Terbaik**:
   - Vite 8 secara otomatis mem-bundle esbuild yang kompatibel. Menghapus entri `esbuild` manual dari `package.json` akan menghilangkan konflik utama.
   - Penambahan `.npmrc` dengan `legacy-peer-deps=true` memastikan npm pada mesin Vercel selalu menyelesaikan dependensi dengan toleransi tinggi jika ada dependensi lain yang berselisih versi minor.

---

## 2. Langkah Implementasi yang Akan Dijalankan

### Langkah 1: Perbarui `package.json`
- Menghapus baris `"esbuild": "^0.25.0"` dari `devDependencies`.
- Menjaga dependensi penting lainnya (`vite`, `react`, `@tailwindcss/vite`, `lucide-react`).

### Langkah 2: Buat File `.npmrc`
- Membuat file `.npmrc` di root project dengan isi:
  ```ini
  legacy-peer-deps=true
  ```

### Langkah 3: Perbarui `vercel.json`
- Menambahkan parameter install command eksplisit:
  ```json
  "installCommand": "npm install --legacy-peer-deps"
  ```

### Langkah 4: Verifikasi & Commit ke Branch `main`
- Menguji `compile_applet` dan `lint_applet` untuk memastikan build tetap berhasil 100%.
- Menjalankan `git add` dan `git commit` di branch `main` sehingga Anda bisa langsung push perbaikan ini ke GitHub / Vercel otomatis me-redeploy.
