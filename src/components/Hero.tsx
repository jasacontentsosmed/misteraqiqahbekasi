import React from 'react';
import { CheckCircle2, ShieldAlert, Award, Star, ArrowRight, Utensils, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenTesterModal: () => void;
  onExplorePackages: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenTesterModal,
  onExplorePackages,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#fbf9f4] via-[#f5f3ee] to-[#fbf9f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Balanced Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#006241] uppercase tracking-wider mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[#cba258]">
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
                <Star className="w-3.5 h-3.5 fill-[#cba258]" />
              </span>
              <span>18 Tahun Melayani (2008 – 2026)</span>
              <span aria-hidden="true">·</span>
              <span>12.400+ Keluarga Bahagia</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#00482f] leading-[1.18] tracking-tight mb-5" style={{ textWrap: 'balance' }}>
              Ibadah Aqiqah Tenang, Olahan Lezat Anti-Prengus untuk Buah Hati
            </h1>

            {/* Subhead Body */}
            <p className="text-base sm:text-lg text-[#3f4943] leading-relaxed mb-6 max-w-2xl">
              Layanan catering aqiqah premium berstandar syariah. Daging empuk gurih, dikemas dalam kemasan Box Eksklusif Premium dan setiap makanan dikemas dalam Box Thinwall sehingga lebih higienis. Dilengkapi dengan dokumentasi video penyembelihan, sertifikat aqiqah dan boneka domba.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-sm text-[#1b1c19] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00754a] shrink-0" />
                <span>100% Syar'i disembelih JULEHA bersertifikat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00754a] shrink-0" />
                <span>Garansi uang kembali jika basi / prengus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00754a] shrink-0" />
                <span>Gratis sample tester diantar ke rumah</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00754a] shrink-0" />
                <span>Gratis ongkir se-Jabodetabek & tepat waktu</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePackages}
                className="px-7 py-3.5 text-sm sm:text-base font-bold text-white bg-[#006241] hover:bg-[#00482f] rounded-full transition-all duration-200 shadow-whisper hover:shadow-whisper-hover active:scale-95 inline-flex items-center gap-2"
              >
                <span>Lihat Pilihan Paket</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenTesterModal}
                className="px-6 py-3.5 text-sm sm:text-base font-bold text-[#00482f] bg-[#edebe9] hover:bg-[#e4e2dd] rounded-full transition-colors active:scale-95 inline-flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-[#006241]" />
                <span>Minta Tester Makanan Gratis</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-whisper border border-[#eae8e3] bg-white group">
              <img
                src="/src/assets/images/hero_aqiqah_catering_1792122892617.jpg"
                alt="Sajian Hidangan Premium MR Aqiqah Catering Nasi Kebuli dan Sate Kambing"
                className="w-full h-[360px] sm:h-[420px] lg:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay & Floating Brand Pill */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-[#1e3932]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-[#cba258] uppercase tracking-wider">
                      Kemasan Bento Eksklusif
                    </span>
                    <span className="text-xs text-emerald-200 font-semibold">
                      Food Grade Thinwall
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-white/95">
                    Nasi Kebuli Basmati, Sate Bakar Madu & Gulai Kambing Rempah Kental
                  </p>
                </div>
              </div>

              {/* Floating Top Trust Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#00482f] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 border border-[#bec9c0]">
                <Award className="w-4 h-4 text-[#cba258]" />
                <span>Sertifikasi Halal MUI & JULEHA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Service Metrics Strip Below Hero */}
        <div className="mt-14 pt-8 border-t border-[#eae8e3] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#d4e9e2] flex items-center justify-center shrink-0 text-[#00482f]">
              <ShieldAlert className="w-5 h-5 text-[#006241]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#00482f]">Jaminan Anti-Prengus</h4>
              <p className="text-xs text-[#3f4943] mt-0.5 leading-snug">Daging empuk higienis, garansi ganti 100% jika basi</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#d4e9e2] flex items-center justify-center shrink-0 text-[#00482f]">
              <Award className="w-5 h-5 text-[#006241]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#00482f]">Sertifikat Kayu Eksklusif</h4>
              <p className="text-xs text-[#3f4943] mt-0.5 leading-snug">Pigura kayu mewah + boneka maskot domba lucu</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#d4e9e2] flex items-center justify-center shrink-0 text-[#00482f]">
              <Utensils className="w-5 h-5 text-[#006241]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#00482f]">Gratis Tester Makanan</h4>
              <p className="text-xs text-[#3f4943] mt-0.5 leading-snug">Cicipi olahan gratis di rumah sebelum memesan</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#d4e9e2] flex items-center justify-center shrink-0 text-[#00482f]">
              <HeartHandshake className="w-5 h-5 text-[#006241]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#00482f]">Video Call / Dokumentasi</h4>
              <p className="text-xs text-[#3f4943] mt-0.5 leading-snug">Penyembelihan disaksikan langsung / video syar'i</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
