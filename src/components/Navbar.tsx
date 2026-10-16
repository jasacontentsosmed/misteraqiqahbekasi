import React from 'react';
import { ShoppingBag, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { LogoMRAqiqah } from './LogoMRAqiqah';
import { Badge18Tahun } from './Badge18Tahun';
import { getWhatsAppUrl } from '../config/siteConfig';

interface NavbarProps {
  onOpenTesterModal: () => void;
  onOpenOrderDrawer: () => void;
  orderCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTesterModal,
  onOpenOrderDrawer,
  orderCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { label: 'Paket Aqiqah', href: '#paket' },
    { label: 'Pilihan Olahan', href: '#menu' },
    { label: 'Kalkulator Biaya', href: '#kalkulator' },
    { label: 'Keunggulan & Souvenir', href: '#fasilitas' },
    { label: 'Ulasan Keluarga', href: '#ulasan' },
    { label: 'Tanya Jawab', href: '#faq' },
  ];

  const handleWhatsAppContact = () => {
    const text = 'Halo Admin MR Aqiqah Catering, saya ingin konsultasi mengenai paket aqiqah untuk putra/putri kami.';
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-[#eae8e3]">
      {/* Slim Top Notice Banner */}
      <div className="bg-[#1e3932] text-[#fbf9f4] text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#cba258]" />
          <span>Garansi 100% Bebas Prengus & Halal MUI</span>
          <span className="text-[#cba258] hidden sm:inline">·</span>
          <span className="hidden sm:inline">Gratis Tester Food Diantar Langsung ke Rumah</span>
        </span>
      </div>

      {/* Strict 3-Zone Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6 lg:gap-8">
        {/* Zone 1: Logo #6 di sebelah kiri */}
        <a
          href="#"
          className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0"
        >
          <LogoMRAqiqah size={58} className="transition-transform group-hover:scale-105 duration-200 drop-shadow-xs" />
          <div className="flex flex-col">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#00482f] leading-none">
              MR Aqiqah
            </span>
            <span className="text-[11px] font-semibold text-[#6f7a72] uppercase tracking-wider mt-1">
              Catering Premium
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 concise single-line nav links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-[#3f4943]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#00482f] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#00754a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Logo #7 di sebelah kanan + Primary Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Logo #7: Medali 18 Tahun di sebelah kanan */}
          <div
            className="flex items-center gap-2 pr-1"
            title="18 Tahun Melayani Keluarga Jabodetabek (2008 - 2026)"
          >
            <Badge18Tahun size={50} className="transition-transform hover:scale-105 duration-200 -my-2.5 drop-shadow-xs" />
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-[11px] font-extrabold text-[#991b1b] leading-tight">
                18 Tahun
              </span>
              <span className="text-[10px] text-[#6f7a72] leading-tight font-medium">
                2008 – 2026
              </span>
            </div>
          </div>

          <button
            onClick={onOpenTesterModal}
            className="hidden sm:inline-flex items-center text-xs font-bold text-[#00482f] hover:text-[#006241] bg-[#d4e9e2]/60 hover:bg-[#d4e9e2] px-3.5 py-2 rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            Minta Tester Gratis
          </button>

          <button
            onClick={handleWhatsAppContact}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#00754a] hover:bg-[#00482f] rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#00754a]" />
            <span>Chat WhatsApp</span>
          </button>

          {orderCount > 0 && (
            <button
              onClick={onOpenOrderDrawer}
              className="relative p-2.5 text-[#00482f] hover:bg-[#f0eee9] rounded-full transition-colors"
              title="Lihat Pilihan Pesanan"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#cba258] text-[#1b1c19] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#fbf9f4]">
                {orderCount}
              </span>
            </button>
          )}

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#3f4943] hover:text-[#00482f] rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#eae8e3] bg-[#fbf9f4] px-4 pt-3 pb-6 space-y-4">
          {/* Mobile Brand Banner with Logo #6 on Left and Logo #7 on Right */}
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#eae8e3]">
            <div className="flex items-center gap-2.5">
              <LogoMRAqiqah size={44} />
              <div className="flex flex-col">
                <span className="font-extrabold text-sm text-[#00482f] leading-tight">
                  MR Aqiqah &amp; Catering
                </span>
                <span className="text-[10px] text-[#6f7a72] font-semibold">
                  Halal &amp; Berkah Syar'i
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 pl-2 border-l border-[#eae8e3]">
              <Badge18Tahun size={42} />
              <div className="text-[10px] font-bold text-[#991b1b] leading-tight">
                18 Thn<br />
                <span className="text-[9px] text-[#6f7a72] font-normal">Jabodetabek</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-[#1b1c19] hover:bg-[#f0eee9] rounded-lg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#eae8e3] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTesterModal();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-[#00482f] bg-[#d4e9e2] rounded-full"
            >
              Minta Tester Makanan Gratis
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppContact();
              }}
              className="w-full py-2.5 text-center text-sm font-bold text-white bg-[#00754a] rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#00754a]" />
              Konsultasi WhatsApp Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
