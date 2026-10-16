import React, { useState } from 'react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/aqiqahData';
import { Star, ChevronDown, ChevronUp, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="ulasan" className="py-16 bg-[#fbf9f4] border-t border-[#eae8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
              Cerita Bahagia Pelanggan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00482f] tracking-tight mt-1 mb-3">
              Dipercaya Lebih dari 12.400 Keluarga Muslim
            </h2>
            <p className="text-sm sm:text-base text-[#3f4943]">
              Inilah kisah nyata para orang tua yang mempercayakan syukuran aqiqah sang buah hati bersama MR Aqiqah Catering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl border border-[#eae8e3] shadow-whisper flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#cba258] mb-3">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#cba258]" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-[#3f4943] italic leading-relaxed mb-6">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f0eee9]">
                  <div className="text-sm font-bold text-[#00482f]">{item.family}</div>
                  <div className="text-xs text-[#1b1c19] font-medium mt-0.5">
                    Aqiqah: <strong>{item.babyName}</strong>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#6f7a72] mt-1.5">
                    <span>{item.location}</span>
                    <span className="text-[#00754a] font-semibold">{item.packageTaken}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq" className="max-w-4xl mx-auto pt-10 border-t border-[#eae8e3]">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
              Tanya Jawab Seputar Aqiqah
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00482f] tracking-tight mt-1">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-[#3f4943] mt-2">
              Segala hal yang perlu Ayah Bunda ketahui seputar pelaksanaan aqiqah syar'i di MR Aqiqah.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#eae8e3] overflow-hidden transition-all shadow-whisper"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#1b1c19] flex items-center justify-between gap-4 hover:bg-[#fbf9f4] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#00482f] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#3f4943] leading-relaxed border-t border-[#f0eee9] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
