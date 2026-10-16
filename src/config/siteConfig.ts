/**
 * Konfigurasi Sentral MR Aqiqah Catering
 * Ubah nomor WhatsApp dan informasi kontak di sini untuk memperbarui seluruh tombol pesanan di website.
 */

export const SITE_CONFIG = {
  brand: {
    name: 'MR Aqiqah Catering',
    tagline: 'Layanan Aqiqah Praktis, Berkah, Halal & Higienis',
    establishedYear: 2008,
    yearsOfExperience: 18,
    halalMuiCert: '00160098760920',
  },

  contact: {
    // Nomor WhatsApp utama untuk menerima pesanan (format internasional tanpa tanda +, contoh: 6281234567890)
    whatsappNumber: '6281234567890',
    // Tampilan nomor yang ramah dibaca pengguna
    whatsappDisplay: '+62 812-3456-7890',
    // Email layanan
    email: 'salam@mraqiqah.com',
    // Jam operasional customer care
    operatingHours: 'Setiap Hari 07.00 – 22.00 WIB',
  },

  serviceArea: {
    title: 'Cakupan Layanan Pengantaran Free Ongkir',
    areas: [
      'DKI Jakarta (Selatan, Barat, Timur, Pusat, Utara)',
      'Kota & Kabupaten Tangerang & Tangerang Selatan',
      'Kota & Kabupaten Bekasi',
      'Kota Depok & Kota Bogor Area Terjangkau',
    ],
  },
};

/**
 * Helper untuk membuat URL WhatsApp langsung dengan pesan otomatis
 */
export const getWhatsAppUrl = (messageText: string): string => {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodedText}`;
};
