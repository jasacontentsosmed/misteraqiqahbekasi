import React from 'react';
import { Gift, Video, ShieldCheck, Heart, Truck, Award, CheckCircle } from 'lucide-react';

interface FeaturesAndGuaranteeProps {
  onOpenTesterModal: () => void;
}

export const FeaturesAndGuarantee: React.FC<FeaturesAndGuaranteeProps> = ({ onOpenTesterModal }) => {
  return (
    <section id="fasilitas" className="py-16 bg-[#f5f3ee] border-t border-[#eae8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
            Fasilitas Eksklusif & Jaminan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00482f] tracking-tight mt-1 mb-3">
            Bukan Sekadar Catering, Tapi Kenangan Indah Seumur Hidup
          </h2>
          <p className="text-sm sm:text-base text-[#3f4943] leading-relaxed">
            Setiap paket MR Aqiqah dirancang komplit agar Ayah dan Bunda bisa fokus beribadah dan menyambut tamu dengan bangga tanpa repot.
          </p>
        </div>

        {/* Feature Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Visual Showcase on Left */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-whisper border border-[#eae8e3] bg-white group">
              <img
                src="/src/assets/images/aqiqah_ceremony_gift_1792122894278.jpg"
                alt="Sertifikat Aqiqah Kayu Eksklusif dan Boneka Maskot MR Aqiqah"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-[#1e3932]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-[#cba258] uppercase">
                    Free Souvenir Eksklusif
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/95 mt-0.5">
                    Sertifikat Pigura Kayu + Boneka Domba Halus + Kartu Ucapan Custom Foto
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature List on Right */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white p-5 rounded-2xl border border-[#eae8e3] shadow-whisper flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4e9e2] text-[#00482f] flex items-center justify-center shrink-0">
                <Video className="w-5 h-5 text-[#006241]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#00482f]">
                  Video Dokumentasi Penyembelihan Syar'i (Full HD)
                </h4>
                <p className="text-xs text-[#3f4943] mt-1 leading-relaxed">
                  Kami merekam proses penyembelihan secara syar'i, membacakan basmalah dan menyebut nama lengkap buah hati Anda. Ayah Bunda juga diperkenankan hadir langsung ke kandang atau menyaksikan lewat Video Call.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#eae8e3] shadow-whisper flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4e9e2] text-[#00482f] flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-[#006241]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#00482f]">
                  Sertifikat Aqiqah Pigura Kayu Elegan
                </h4>
                <p className="text-xs text-[#3f4943] mt-1 leading-relaxed">
                  Sertifikat resmi tanda terlaksananya aqiqah dengan nama anak, tanggal lahir, dan nama orang tua yang dicetak rapi dan dibingkai pigura kayu berkualitas tinggi untuk hiasan dinding kamar buah hati.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#eae8e3] shadow-whisper flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4e9e2] text-[#00482f] flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-[#006241]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#00482f]">
                  Pengantaran Tepat Waktu & Gratis Ongkir Jabodetabek
                </h4>
                <p className="text-xs text-[#3f4943] mt-1 leading-relaxed">
                  Armada kurir internal yang terlatih menjaga suhu makanan tetap hangat. Kami menjamin ketepatan waktu agar sajian siap sebelum acara syukuran Anda dimulai.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#eae8e3] shadow-whisper flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#d4e9e2] text-[#00482f] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#006241]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#00482f]">
                  Garansi Rasa & Kesegaran 100% Uang Kembali
                </h4>
                <p className="text-xs text-[#3f4943] mt-1 leading-relaxed">
                  Jika makanan yang diterima basi, asam, atau berbau prengus yang tidak wajar, kami berikan penggantian baru atau pengembalian dana 100% tanpa birokrasi berbelit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Step Easy Process */}
        <div className="mt-14 pt-10 border-t border-[#eae8e3]">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00482f]">
              Alur Pemesanan Sangat Praktis (3 Langkah Mudah)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#eae8e3] text-center shadow-whisper">
              <div className="w-10 h-10 rounded-full bg-[#00482f] text-white font-black text-sm flex items-center justify-center mx-auto mb-3">
                01
              </div>
              <h4 className="font-bold text-sm text-[#1b1c19] mb-1">Pilih Paket & Varian Menu</h4>
              <p className="text-xs text-[#3f4943] leading-relaxed">
                Tentukan paket sesuai jenis kelamin anak, pilihan menu masakan favorit, serta jumlah box via WhatsApp atau formulir website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#eae8e3] text-center shadow-whisper">
              <div className="w-10 h-10 rounded-full bg-[#00482f] text-white font-black text-sm flex items-center justify-center mx-auto mb-3">
                02
              </div>
              <h4 className="font-bold text-sm text-[#1b1c19] mb-1">Penyembelihan Syar'i & Dokumentasi</h4>
              <p className="text-xs text-[#3f4943] leading-relaxed">
                Kambing disembelih sesuai sunnah dengan menyebut nama anak. Ayah Bunda menerima video dokumentasi jernih berformat Full HD.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#eae8e3] text-center shadow-whisper">
              <div className="w-10 h-10 rounded-full bg-[#00482f] text-white font-black text-sm flex items-center justify-center mx-auto mb-3">
                03
              </div>
              <h4 className="font-bold text-sm text-[#1b1c19] mb-1">Diantar Hangat Sampai Lokasi</h4>
              <p className="text-xs text-[#3f4943] leading-relaxed">
                Makanan siap santap tiba tepat waktu bersama sertifikat berbingkai kayu, kartu ucapan, dan souvenir, siap dibagikan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
