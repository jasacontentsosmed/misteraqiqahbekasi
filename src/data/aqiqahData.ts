export interface AqiqahPackage {
  id: string;
  name: string;
  genderTarget: 'perempuan' | 'laki' | 'keduanya';
  animalCount: number;
  animalType: 'Jantan Pilihan' | 'Betina Hemat';
  portionRange: string;
  priceRawCooked: number; // Harga masakan olahan tanpa nasi box
  priceBoxPackage: number; // Harga paket bento box lengkap
  boxCount: number;
  skewersCount: number;
  soupPortions: number;
  popular?: boolean;
  highlightText?: string;
  features: string[];
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'sate' | 'kuah' | 'nasi';
  description: string;
  spiciness: number; // 1-5
  richness: number; // 1-5
  recommendedWith: string;
  image?: string;
  tags: string[];
}

export const AQIQAH_PACKAGES: AqiqahPackage[] = [
  {
    id: 'pkt-p-standar',
    name: 'Paket Berkah Standar (Perempuan)',
    genderTarget: 'perempuan',
    animalCount: 1,
    animalType: 'Jantan Pilihan',
    portionRange: '60 - 70 Porsi Bento Box',
    priceRawCooked: 2150000,
    priceBoxPackage: 3100000,
    boxCount: 65,
    skewersCount: 260,
    soupPortions: 65,
    popular: true,
    highlightText: 'Paling Banyak Dipilih',
    features: [
      '1 Ekor Kambing Jantan Syar’i Gemuk & Sehat',
      '260 Tusuk Sate Lembut (Bumbu Kacang / Kecap)',
      '65 Porsi Gulai / Tongseng Rempah Khas',
      '65 Bento Box Thinwall Higienis Food Grade',
      'Nasi Putih Pulen Wangi / Kebuli Rempah (+opsi)',
      'Acar Nanas Segar, Sambal, & Kerupuk Udang',
      'Sertifikat Aqiqah Kayu Eksklusif + Pigura',
      'Video Dokumentasi Sembelih Sebut Nama Anak',
      'Gratis Ongkir se-Jabodetabek'
    ]
  },
  {
    id: 'pkt-l-standar',
    name: 'Paket Berkah Standar (Laki-Laki)',
    genderTarget: 'laki',
    animalCount: 2,
    animalType: 'Jantan Pilihan',
    portionRange: '120 - 140 Porsi Bento Box',
    priceRawCooked: 4100000,
    priceBoxPackage: 5950000,
    boxCount: 130,
    skewersCount: 520,
    soupPortions: 130,
    popular: true,
    highlightText: 'Sunnah 2 Ekor Sempurna',
    features: [
      '2 Ekor Kambing Jantan Syar’i Gemuk & Sehat',
      '520 Tusuk Sate Lembut Pilihan Chef',
      '130 Porsi Gulai Rempah / Tongseng Gurih',
      '130 Bento Box Thinwall Higienis Food Grade',
      'Nasi Pulen Wangi / Pilihan Nasi Kebuli Basmati',
      'Acar Nanas Segar, Sambal, & Kerupuk Udang',
      'Sertifikat Aqiqah Kayu + Risalah Nama Anak',
      'Video Dokumentasi Penyembelihan Lengkap',
      'Gratis Ongkir & Boneka Maskot Aqiqah'
    ]
  },
  {
    id: 'pkt-p-hemat',
    name: 'Paket Hemat Praktis (Perempuan)',
    genderTarget: 'perempuan',
    animalCount: 1,
    animalType: 'Betina Hemat',
    portionRange: '50 Porsi Bento Box',
    priceRawCooked: 1750000,
    priceBoxPackage: 2500000,
    boxCount: 50,
    skewersCount: 200,
    soupPortions: 50,
    popular: false,
    highlightText: 'Ekonomis & Sah Syar’i',
    features: [
      '1 Ekor Kambing Betina Syar’i Cukup Umur',
      '200 Tusuk Sate Bumbu Kacang Sedap',
      '50 Porsi Gulai Kambing Rempah',
      '50 Bento Box Thinwall Higienis',
      'Nasi Putih Pulen + Acar Segar + Kerupuk',
      'Sertifikat Aqiqah Lembaran Berbingkai',
      'Video Dokumentasi Penyembelihan',
      'Gratis Pengantaran ke Lokasi'
    ]
  },
  {
    id: 'pkt-l-hemat',
    name: 'Paket Hemat Praktis (Laki-Laki)',
    genderTarget: 'laki',
    animalCount: 2,
    animalType: 'Betina Hemat',
    portionRange: '100 Porsi Bento Box',
    priceRawCooked: 3350000,
    priceBoxPackage: 4850000,
    boxCount: 100,
    skewersCount: 400,
    soupPortions: 100,
    popular: false,
    highlightText: 'Hemat 2 Ekor Sah',
    features: [
      '2 Ekor Kambing Betina Sehat Sesuai Syariat',
      '400 Tusuk Sate Kambing Bumbu Kacang',
      '100 Porsi Gulai Santan Gurih',
      '100 Bento Box Thinwall Higienis',
      'Nasi Putih Pulen + Pelengkap Lengkap',
      'Sertifikat Aqiqah Berbingkai',
      'Video Dokumentasi Penyembelihan',
      'Gratis Ongkir Seluruh Area Layanan'
    ]
  },
  {
    id: 'pkt-p-premium',
    name: 'Paket Istimewa Sultan (Perempuan)',
    genderTarget: 'perempuan',
    animalCount: 1,
    animalType: 'Jantan Pilihan',
    portionRange: '85 - 100 Porsi Bento Box',
    priceRawCooked: 2750000,
    priceBoxPackage: 3950000,
    boxCount: 85,
    skewersCount: 350,
    soupPortions: 85,
    popular: false,
    highlightText: 'Daging Jumbo & Paling Empuk',
    features: [
      '1 Ekor Kambing Jantan Super Kelas A Jumbo',
      '350 Tusuk Sate Daging Pilihan (Tanpa Gajih)',
      '85 Porsi Tongseng Spesial / Tengkleng Solo',
      '85 Bento Box Eksklusif Premium Segel Emas',
      'Pilihan Nasi Kebuli / Mandhi Beras Basmati',
      'Acar Nanas Kismis, Sambal Goreng Kentang, Kerupuk',
      'Sertifikat Pigura Kayu Jati Belanda + Boneka Domba',
      'Video Call Live / Dokumentasi Full HD Sembelih',
      'Garansi Rasa Bintang Lima'
    ]
  },
  {
    id: 'pkt-l-premium',
    name: 'Paket Istimewa Sultan (Laki-Laki)',
    genderTarget: 'laki',
    animalCount: 2,
    animalType: 'Jantan Pilihan',
    portionRange: '170 - 200 Porsi Bento Box',
    priceRawCooked: 5350000,
    priceBoxPackage: 7750000,
    boxCount: 170,
    skewersCount: 700,
    soupPortions: 170,
    popular: false,
    highlightText: 'Spesial Syukuran Mewah',
    features: [
      '2 Ekor Kambing Jantan Super Kelas A Jumbo',
      '700 Tusuk Sate Daging Tanpa Lemak Berlebih',
      '170 Porsi Gulai Kental / Tongseng Rempah',
      '170 Bento Box Eksklusif Kemasan Tebal',
      'Nasi Kebuli Basmati Aroma Rempah Timur Tengah',
      'Buah Pisang Cavendish + Puding Sutra Pandan',
      'Sertifikat Pigura Kayu Eksklusif + 2 Boneka Maskot',
      'Liputan Video Sembelih Profesional',
      'Prioritas Pengiriman Tepat Waktu'
    ]
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'sate-kacang',
    name: 'Sate Kambing Bumbu Kacang',
    category: 'sate',
    description: 'Daging empuk dipanggang arang batok kelapa dengan olesan bumbu rempah dan siraman saus kacang gurih legit.',
    spiciness: 2,
    richness: 4,
    recommendedWith: 'Gulai Kambing & Nasi Kebuli',
    tags: ['Favorit Keluarga', 'Daging Empuk', 'Tanpa Prengus']
  },
  {
    id: 'sate-kecap',
    name: 'Sate Kambing Manis Pedas Rawit',
    category: 'sate',
    description: 'Karamelisasi kecap manis istimewa dengan irisan bawang merah segar, tomat, dan cabai rawit pedas harum.',
    spiciness: 3,
    richness: 3,
    recommendedWith: 'Tongseng Kambing & Nasi Putih',
    tags: ['Aroma Smokey', 'Kecap Premium', 'Pedas Segar']
  },
  {
    id: 'sate-maranggi',
    name: 'Sate Maranggi Rempah Gurih',
    category: 'sate',
    description: 'Marinasi ketumbar, gula aren, dan jahe meresap ke serat daging tanpa perlu saus kacang. Gurih harum autentik.',
    spiciness: 1,
    richness: 5,
    recommendedWith: 'Sop Bening Kambing',
    tags: ['Khas Purwakarta', 'Rempah Meresap', 'Best Texture']
  },
  {
    id: 'gulai-kambing',
    name: 'Gulai Kambing Santan Rempah',
    category: 'kuah',
    description: 'Kuah santan kental dengan 14 jenis rempah Nusantara, kapulaga, kayu manis, dan cengkeh. Gurih nikmat menghangatkan.',
    spiciness: 2,
    richness: 5,
    recommendedWith: 'Sate Kacang & Kerupuk Udang',
    tags: ['Kaya Rempah', 'Kuah Kental', 'Hangat']
  },
  {
    id: 'tongseng-kambing',
    name: 'Tongseng Kambing Sayur Segar',
    category: 'kuah',
    description: 'Perpaduan kuah gulai, kecap manis, irisan kubis renyah dan tomat hijau asam segar yang menyeimbangkan rasa gurih.',
    spiciness: 3,
    richness: 4,
    recommendedWith: 'Sate Kecap & Nasi Kebuli',
    tags: ['Sayur Segar', 'Manis Gurih', 'Paling Segar']
  },
  {
    id: 'tengkleng-solo',
    name: 'Tengkleng Tulang & Daging Solo',
    category: 'kuah',
    description: 'Kuah santan encer gurih berempah tajam khas Solo dengan sensasi gurih sumsum dan daging empuk menempel di tulang.',
    spiciness: 3,
    richness: 4,
    recommendedWith: 'Sate Bakar Madu',
    tags: ['Tradisi Solo', 'Aroma Pekat', 'Sensasi Sumsum']
  },
  {
    id: 'sop-bening',
    name: 'Sop Kambing Rempah Kuah Bening',
    category: 'kuah',
    description: 'Kuah kaldu bening ringan beraroma pala, kayu manis, daun seledri segar dan wortel. Sangat cocok untuk tamu lansia dan anak.',
    spiciness: 1,
    richness: 2,
    recommendedWith: 'Nasi Putih Pulen',
    tags: ['Ringan', 'Non-Santan', 'Ramah Anak']
  },
  {
    id: 'nasi-kebuli',
    name: 'Nasi Kebuli Basmati Kismis',
    category: 'nasi',
    description: 'Beras Basmati berbulir panjang dimasak dengan kaldu kambing, minyak samin, rempah kapulaga, serta taburan kismis manis.',
    spiciness: 1,
    richness: 5,
    recommendedWith: 'Sate & Gulai',
    tags: ['Beras Basmati', 'Minyak Samin', 'Aroma Timur Tengah']
  },
  {
    id: 'nasi-mandhi',
    name: 'Nasi Mandhi Aroma Asap',
    category: 'nasi',
    description: 'Nasi beraroma smoky rempah lembut khas Hadramaut dengan rempah saffron dan cengkeh yang elegan.',
    spiciness: 1,
    richness: 4,
    recommendedWith: 'Sate Maranggi & Tongseng',
    tags: ['Khas Arab', 'Gurih Lembut', 'Elegan']
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    family: 'Keluarga Bpk. Rian & Ibu Annisa',
    babyName: 'Muhammad Bilal Al-Fatih',
    location: 'Bintaro Jaya, Tangerang Selatan',
    rating: 5,
    date: '3 hari lalu',
    comment: 'Alhamdulillah aqiqah anak pertama kami berjalan lancar. Tamu-tamu memuji sate dan gulai kambingnya, betul-betul tidak ada bau prengus sama sekali! Packaging bento box-nya juga sangat rapi dan higienis. Terima kasih MR Aqiqah.',
    packageTaken: 'Paket Standar Laki-laki (2 Ekor)'
  },
  {
    id: '2',
    family: 'Keluarga Bpk. Hendra & Ibu Dr. Fathia',
    babyName: 'Aisyah Humaira',
    location: 'Tebet, Jakarta Selatan',
    rating: 5,
    date: '1 minggu lalu',
    comment: 'Pesan tester food dulu seminggu sebelumnya, diantar hangat ke rumah dan rasanya mantap. Hari H pengantaran tepat jam 9 pagi sesuai janji. Sertifikat pigura kayunya cantik sekali untuk kenang-kenangan anak kami.',
    packageTaken: 'Paket Istimewa Perempuan (1 Ekor)'
  },
  {
    id: '3',
    family: 'Keluarga Bpk. Dimas & Ibu Sarah',
    babyName: 'Rayyan Malik Ibrahim',
    location: 'Bekasi Barat',
    rating: 5,
    date: '2 minggu lalu',
    comment: 'Dapat video dokumentasi pemotongan kambing yang menyebut nama anak dengan jelas dan syar’i. Hati jadi tenang ibadahnya sah. Rasanya bintang lima dan porsinya pas untuk dibagikan ke panti dan tetangga.',
    packageTaken: 'Paket Standar Laki-laki (2 Ekor)'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Apakah hewan aqiqah disembelih sesuai syariat Islam?',
    answer: 'Ya, 100% syar’i. Seluruh hewan disembelih oleh juru sembelih halal (JULEHA) bersertifikat, sehat tidak cacat, dan memenuhi syarat usia (musinnah). Kami juga mendokumentasikan video penyembelihan dengan membaca doa dan menyebut nama buah hati Anda.'
  },
  {
    question: 'Bagaimana jika masakan basi atau berbau prengus?',
    answer: 'Kami memberikan Garansi Citarasa & Higienis: Jika masakan basi atau berbau prengus saat sampai, kami ganti baru atau uang kembali 100% tanpa dipersulit. Kami menggunakan teknik marinasi rempah khusus dan proses memasak higienis tertutup.'
  },
  {
    question: 'Apakah bisa mencoba tester rasa makanan sebelum memesan?',
    answer: 'Tentu bisa! Kami menyediakan Fasilitas Gratis Tester Food yang siap diantar langsung ke rumah Calon Ayah & Bunda di wilayah Jabodetabek agar Anda bisa memastikan kualitas dan kelezatan masakan kami.'
  },
  {
    question: 'Berapa hari sebelum acara sebaiknya melakukan pemesanan?',
    answer: 'Idealnya H-3 hingga H-7 sebelum hari H agar kami dapat mempersiapkan hewan dan slot juru masak terbaik. Namun untuk pesanan mendesak (H-1), silakan chat admin WhatsApp kami untuk konfirmasi ketersediaan kuota slot.'
  },
  {
    question: 'Apakah bisa dibantu penyaluran ke panti asuhan atau yayasan?',
    answer: 'Sangat bisa. Kami memiliki mitra panti asuhan, pesantren tahfidz, dan kaum dhuafa terpercaya. Kami sertakan foto serah terima dan tanda terima resmi atas nama keluarga Anda.'
  }
];
