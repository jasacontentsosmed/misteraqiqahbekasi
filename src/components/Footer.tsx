import React from 'react';
import { ShieldCheck, MapPin, Phone, Clock, Mail, Heart } from 'lucide-react';
import { LogoMRAqiqah } from './LogoMRAqiqah';
import { Badge18Tahun } from './Badge18Tahun';
import { SITE_CONFIG } from '../config/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3932] text-[#fbf9f4] pt-14 pb-10 border-t border-[#00482f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoMRAqiqah size={52} />
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-white leading-tight">
                  MR Aqiqah Catering
                </span>
                <span className="text-[11px] text-[#cba258] font-semibold uppercase tracking-wider">
                  Catering Aqiqah Syar'i Sejak 2008
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-sm">
              Layanan aqiqah syar'i premium yang memadukan keutamaan sunnah, higienitas kemasan bento modern, dan kelezatan masakan kambing tanpa bau prengus.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-[#cba258]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Halal MUI No. 00160098760920 · JULEHA</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-white/90">
                <Badge18Tahun size={28} />
                <span>18 Tahun Melayani (2008 – 2026)</span>
              </div>
            </div>
          </div>

          {/* Service Area (3 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#cba258] uppercase tracking-wider">
              Wilayah Jangkauan Layanan (Free Ongkir)
            </h4>
            <ul className="text-xs text-white/80 space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>DKI Jakarta (Selatan, Barat, Timur, Pusat, Utara)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>Kota & Kabupaten Tangerang & Tangerang Selatan</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>Kota & Kabupaten Bekasi</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>Kota Depok & Kota Bogor Area Terjangkau</span>
              </li>
            </ul>
          </div>

          {/* Operational & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#cba258] uppercase tracking-wider">
              Kontak & Operasional
            </h4>
            <div className="text-xs text-white/80 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>Customer Care: {SITE_CONFIG.contact.operatingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsappDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8bdbb1] shrink-0" />
                <span>Email: {SITE_CONFIG.contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} MR Aqiqah Catering. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1">
            <span>Dihadirkan dengan penuh keberkahan untuk keluarga Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-[#cba258] fill-[#cba258]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
