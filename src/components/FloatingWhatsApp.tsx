import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const handleChat = () => {
    const text = 'Halo Admin MR Aqiqah Catering, saya ingin bertanya dan konsultasi paket aqiqah untuk anak kami.';
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Speech bubble badge for desktop */}
      <div className="hidden sm:flex items-center bg-white py-2 px-3.5 rounded-full shadow-lg border border-[#eae8e3] text-xs font-bold text-[#00482f]">
        <span>Konsultasi Aqiqah Gratis</span>
      </div>

      <button
        onClick={handleChat}
        aria-label="Chat WhatsApp"
        className="w-14 h-14 rounded-full bg-[#00754a] hover:bg-[#00482f] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-[#00754a]/30"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#00754a] group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};
