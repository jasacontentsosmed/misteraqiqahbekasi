import React, { useState } from 'react';
import { MENU_ITEMS, MenuItem } from '../data/aqiqahData';
import { Flame, Sparkles, ChefHat, Check } from 'lucide-react';

interface MenuShowcaseProps {
  onOpenTesterModal: () => void;
}

export const MenuShowcase: React.FC<MenuShowcaseProps> = ({ onOpenTesterModal }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sate' | 'kuah' | 'nasi'>('all');

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="py-16 bg-[#fbf9f4] border-t border-[#eae8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
            Citarasa Pilihan Keluarga
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00482f] tracking-tight mt-1 mb-3">
            Olahan Daging Kambing Lezat, Empuk & Bebas Bau Prengus
          </h2>
          <p className="text-sm sm:text-base text-[#3f4943] leading-relaxed">
            Dimasak oleh chef berpengalaman lebih dari 12 tahun dengan rempah alami pilihan. Tamu dan kerabat Anda akan menikmati sajian aqiqah istimewa hingga suapan terakhir.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-7 inline-flex p-1 bg-[#edebe9] rounded-full border border-[#dcdad5]">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#00482f] text-white shadow-sm'
                  : 'text-[#3f4943] hover:text-[#00482f]'
              }`}
            >
              Semua Menu
            </button>
            <button
              onClick={() => setActiveCategory('sate')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                activeCategory === 'sate'
                  ? 'bg-[#00482f] text-white shadow-sm'
                  : 'text-[#3f4943] hover:text-[#00482f]'
              }`}
            >
              Olahan Sate
            </button>
            <button
              onClick={() => setActiveCategory('kuah')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                activeCategory === 'kuah'
                  ? 'bg-[#00482f] text-white shadow-sm'
                  : 'text-[#3f4943] hover:text-[#00482f]'
              }`}
            >
              Olahan Kuah
            </button>
            <button
              onClick={() => setActiveCategory('nasi')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-bold rounded-full transition-all ${
                activeCategory === 'nasi'
                  ? 'bg-[#00482f] text-white shadow-sm'
                  : 'text-[#3f4943] hover:text-[#00482f]'
              }`}
            >
              Varian Nasi
            </button>
          </div>
        </div>

        {/* Featured Visual Spotlight (Sate & Bento Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Spotlight 1: Sate Kambing */}
          <div className="bg-white rounded-2xl border border-[#eae8e3] overflow-hidden shadow-whisper flex flex-col sm:flex-row">
            <div className="sm:w-1/2 relative min-h-[220px]">
              <img
                src="/src/assets/images/food_sate_kambing_1792122893576.jpg"
                alt="Sate Kambing Empuk MR Aqiqah"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#00482f] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Resep Rahasia
              </div>
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#cba258] uppercase tracking-wider mb-1">
                  Paling Digemari
                </div>
                <h3 className="text-lg font-bold text-[#00482f] mb-2">
                  Sate Kambing Lembut Tanpa Lemak Berlebih
                </h3>
                <p className="text-xs text-[#3f4943] leading-relaxed mb-4">
                  Daging dipotong proporsional, dibumbui marinasi khas meresap hingga ke dalam serat, dan dibakar arang batok kelapa untuk aroma smokey istimewa.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0eee9] flex items-center justify-between text-xs text-[#6f7a72]">
                <span>Tekstur: <strong>Empuk & Juicy</strong></span>
                <span>Prengus: <strong>0% (Nol)</strong></span>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Bento Box Kebuli */}
          <div className="bg-white rounded-2xl border border-[#eae8e3] overflow-hidden shadow-whisper flex flex-col sm:flex-row">
            <div className="sm:w-1/2 relative min-h-[220px]">
              <img
                src="/src/assets/images/food_nasi_kebuli_box_1792122894374.jpg"
                alt="Bento Box Nasi Kebuli Basmati MR Aqiqah"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#1e3932] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Kemasan Higienis
              </div>
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-[#cba258] uppercase tracking-wider mb-1">
                  Standar Bintang Lima
                </div>
                <h3 className="text-lg font-bold text-[#00482f] mb-2">
                  Bento Box Nasi Kebuli Basmati Rempah
                </h3>
                <p className="text-xs text-[#3f4943] leading-relaxed mb-4">
                  Beras Basmati lembut harum berpadu dengan gulai kental, sate, acar nanas segar, dan kerupuk dalam kemasan thinwall bersekat anti tumpah.
                </p>
              </div>
              <div className="pt-3 border-t border-[#f0eee9] flex items-center justify-between text-xs text-[#6f7a72]">
                <span>Kemasan: <strong>Thinwall Sekat 4</strong></span>
                <span>Ketahanan: <strong>Hingga 18 Jam</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-[#eae8e3] shadow-whisper hover:shadow-whisper-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#006241]">
                    {item.category === 'sate' ? 'Olahan Sate' : item.category === 'kuah' ? 'Olahan Kuah' : 'Pilihan Nasi'}
                  </span>
                  <div className="flex items-center gap-1">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] text-[#6f7a72] font-medium">
                        {tag}{i < item.tags.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-base font-bold text-[#1b1c19] mb-2">{item.name}</h4>
                <p className="text-xs text-[#3f4943] leading-relaxed mb-4">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-[#f0eee9] space-y-2">
                <div className="flex items-center justify-between text-xs text-[#6f7a72]">
                  <span>Kekayaan Rempah:</span>
                  <div className="flex gap-1 text-[#006241]">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < item.richness ? 'bg-[#006241]' : 'bg-[#eae8e3]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-[11px] text-[#3f4943] bg-[#f5f3ee] p-2 rounded-lg">
                  Cocok dipadukan dengan: <strong className="text-[#00482f]">{item.recommendedWith}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Prengus Guarantee Ribbon */}
        <div className="mt-12 bg-[#edebe9] rounded-2xl p-6 sm:p-8 border border-[#dcdad5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#00482f] text-white flex items-center justify-center shrink-0">
              <ChefHat className="w-6 h-6 text-[#cba258]" />
            </div>
            <div>
              <h4 className="font-bold text-base text-[#00482f]">
                Rahasia Masakan Kambing Anti-Prengus Kami
              </h4>
              <p className="text-xs text-[#3f4943] mt-0.5">
                Pemotongan syar'i tanpa stres, pemisahan kelenjar khusus, dan rebusan pertama dengan daun salam & jahe segar memastikan bau prengus hilang total.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTesterModal}
            className="px-6 py-2.5 bg-[#00482f] hover:bg-[#006241] text-white font-bold rounded-full text-xs transition-colors shrink-0 whitespace-nowrap active:scale-95"
          >
            Buktikan dengan Tester Gratis
          </button>
        </div>
      </div>
    </section>
  );
};
