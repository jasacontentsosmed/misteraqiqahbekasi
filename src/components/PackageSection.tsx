import React, { useState } from 'react';
import { AQIQAH_PACKAGES, AqiqahPackage } from '../data/aqiqahData';
import { Check, Star, Sparkles, ArrowRight } from 'lucide-react';

interface PackageSectionProps {
  onSelectPackage: (pkg: AqiqahPackage, mode: 'bento' | 'cooked') => void;
  onOpenTesterModal: () => void;
}

export const PackageSection: React.FC<PackageSectionProps> = ({
  onSelectPackage,
  onOpenTesterModal,
}) => {
  const [filterGender, setFilterGender] = useState<'all' | 'perempuan' | 'laki'>('all');
  const [servingMode, setServingMode] = useState<'bento' | 'cooked'>('bento');

  const filteredPackages = AQIQAH_PACKAGES.filter((pkg) => {
    if (filterGender === 'all') return true;
    return pkg.genderTarget === filterGender;
  });

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="paket" className="py-16 bg-[#fbf9f4] border-t border-[#eae8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
            Pilihan Lengkap & Syar'i
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00482f] mt-2 mb-3 tracking-tight">
            Paket Aqiqah Berkah Siap Santap
          </h2>
          <p className="text-sm sm:text-base text-[#3f4943] leading-relaxed">
            Pilih paket aqiqah sesuai sunnah untuk buah hati Anda. Tersedia kemasan Bento Box Thinwall higienis siap bagikan atau olahan matang praktis.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Gender Filter Tabs */}
            <div className="inline-flex p-1 bg-[#edebe9] rounded-full border border-[#dcdad5]">
              <button
                onClick={() => setFilterGender('all')}
                className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                  filterGender === 'all'
                    ? 'bg-[#00482f] text-white shadow-sm'
                    : 'text-[#3f4943] hover:text-[#00482f]'
                }`}
              >
                Semua Paket
              </button>
              <button
                onClick={() => setFilterGender('perempuan')}
                className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                  filterGender === 'perempuan'
                    ? 'bg-[#00482f] text-white shadow-sm'
                    : 'text-[#3f4943] hover:text-[#00482f]'
                }`}
              >
                Anak Perempuan (1 Ekor)
              </button>
              <button
                onClick={() => setFilterGender('laki')}
                className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                  filterGender === 'laki'
                    ? 'bg-[#00482f] text-white shadow-sm'
                    : 'text-[#3f4943] hover:text-[#00482f]'
                }`}
              >
                Anak Laki-Laki (2 Ekor)
              </button>
            </div>

            {/* Serving Format Selector */}
            <div className="inline-flex p-1 bg-[#edebe9] rounded-full border border-[#dcdad5]">
              <button
                onClick={() => setServingMode('bento')}
                className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                  servingMode === 'bento'
                    ? 'bg-[#00754a] text-white shadow-sm'
                    : 'text-[#3f4943] hover:text-[#00754a]'
                }`}
              >
                Paket Nasi Bento Box
              </button>
              <button
                onClick={() => setServingMode('cooked')}
                className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                  servingMode === 'cooked'
                    ? 'bg-[#00754a] text-white shadow-sm'
                    : 'text-[#3f4943] hover:text-[#00754a]'
                }`}
              >
                Daging Masak Saja
              </button>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const currentPrice = servingMode === 'bento' ? pkg.priceBoxPackage : pkg.priceRawCooked;

            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-whisper hover:shadow-whisper-hover ${
                  pkg.popular
                    ? 'border-[#006241] ring-2 ring-[#006241]/20'
                    : 'border-[#eae8e3]'
                }`}
              >
                {/* Popularity or Benefit Highlight */}
                {pkg.popular && (
                  <div className="bg-[#00482f] text-white text-[11px] font-bold py-1 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-[#cba258] text-[#cba258]" />
                    <span>{pkg.highlightText || 'Paling Diminati'}</span>
                  </div>
                )}

                {!pkg.popular && pkg.highlightText && (
                  <div className="bg-[#f0eee9] text-[#00482f] text-[11px] font-bold py-1 px-4 text-center tracking-wider uppercase">
                    {pkg.highlightText}
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1">
                  {/* Category & Title */}
                  <div className="text-xs font-semibold text-[#6f7a72] mb-1">
                    {pkg.genderTarget === 'laki' ? 'Syariat Laki-laki · 2 Ekor' : 'Syariat Perempuan · 1 Ekor'}
                  </div>
                  <h3 className="text-xl font-bold text-[#00482f] tracking-tight mb-2">
                    {pkg.name}
                  </h3>

                  <div className="text-xs text-[#3f4943] mb-4">
                    <strong className="text-[#1b1c19]">{pkg.portionRange}</strong>
                  </div>

                  {/* Pricing Display */}
                  <div className="pt-3 pb-4 mb-4 border-y border-[#f0eee9]">
                    <div className="text-xs text-[#6f7a72] mb-1">
                      {servingMode === 'bento' ? 'Harga Paket Komplit:' : 'Harga Olahan Siap Saji:'}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#006241] tabular-nums tracking-tight">
                        {formatRupiah(currentPrice)}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#6f7a72] mt-1">
                      {servingMode === 'bento'
                        ? `Sudah termasuk ${pkg.boxCount} box kemasan premium`
                        : `Olahan ${pkg.skewersCount} tusuk sate + ${pkg.soupPortions} porsi kuah`}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#1b1c19] uppercase tracking-wider mb-2">
                      Fasilitas Termasuk:
                    </div>
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#3f4943]">
                        <Check className="w-4 h-4 text-[#00754a] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Footer */}
                <div className="p-6 pt-0 bg-white">
                  <button
                    onClick={() => onSelectPackage(pkg, servingMode)}
                    className={`w-full py-3 px-4 rounded-full text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 ${
                      pkg.popular
                        ? 'bg-[#006241] hover:bg-[#00482f] text-white shadow-sm'
                        : 'bg-[#edebe9] hover:bg-[#e4e2dd] text-[#00482f]'
                    }`}
                  >
                    <span>Pilih Paket Ini</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 bg-[#1e3932] rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold text-[#cba258] uppercase tracking-wider">
              Kemudahan & Kepercayaan Ayah Bunda
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2">
              Masih Ragu dengan Rasa & Keempukan Masakan Kami?
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
              Kami kirimkan paket tester olahan sate kambing & gulai rempah secara gratis langsung ke rumah Anda sebelum Anda memutuskan untuk memesan.
            </p>
          </div>

          <button
            onClick={onOpenTesterModal}
            className="px-6 py-3 bg-[#cba258] hover:bg-[#ba8e3a] text-[#1e3932] font-bold rounded-full text-sm transition-all duration-200 whitespace-nowrap active:scale-95 shrink-0 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#1e3932]" />
            <span>Kirim Tester Makanan Gratis</span>
          </button>
        </div>
      </div>
    </section>
  );
};
