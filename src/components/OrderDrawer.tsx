import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { AqiqahPackage } from '../data/aqiqahData';
import { getWhatsAppUrl } from '../config/siteConfig';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: AqiqahPackage | null;
  servingMode: 'bento' | 'cooked';
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  selectedPackage,
  servingMode,
}) => {
  const [babyName, setBabyName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Pagi (08:00 - 10:00 WIB)');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen || !selectedPackage) return null;

  const currentPrice = servingMode === 'bento' ? selectedPackage.priceBoxPackage : selectedPackage.priceRawCooked;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleCheckoutWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*FORM PEMESANAN MR AQIQAH CATERING*
----------------------------------------
• Paket Pilihan: ${selectedPackage.name}
• Format: ${servingMode === 'bento' ? `Paket Bento Box (${selectedPackage.boxCount} Box)` : 'Daging Olahan Matang Saja'}
• Nama Buah Hati: ${babyName || '-'}
• Nama Ayah / Bunda: ${parentName}
• No. WhatsApp: ${phone}
• Tanggal Acara Syukuran: ${eventDate}
• Jam Pengantaran: ${deliveryTime}
• Alamat Pengiriman: ${address}
• Catatan Khusus: ${notes || '-'}
----------------------------------------
*TOTAL HARGA: ${formatRupiah(currentPrice)}*

Halo Admin MR Aqiqah, saya ingin booking paket aqiqah di atas. Mohon arahan pembayaran DP dan konfirmasi slotnya. Terima kasih.`;
    window.open(getWhatsAppUrl(text), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-[#eae8e3]">
        {/* Header */}
        <div className="p-5 border-b border-[#eae8e3] flex items-center justify-between bg-[#fbf9f4]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#006241]" />
            <span className="font-extrabold text-base text-[#00482f]">
              Formulir Pemesanan Aqiqah
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#6f7a72] hover:bg-[#edebe9] hover:text-[#1b1c19]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-5 flex-1">
          {/* Selected Package Banner */}
          <div className="bg-[#f5f3ee] p-4 rounded-xl border border-[#eae8e3]">
            <div className="text-[11px] font-bold text-[#6f7a72] uppercase">
              Paket Terpilih
            </div>
            <h4 className="font-bold text-sm text-[#00482f] mt-0.5">
              {selectedPackage.name}
            </h4>
            <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-[#dcdad5]">
              <span className="text-xs text-[#3f4943]">
                {servingMode === 'bento' ? `${selectedPackage.boxCount} Bento Box` : 'Olahan Siap Saji'}
              </span>
              <span className="text-base font-extrabold text-[#006241] tabular-nums">
                {formatRupiah(currentPrice)}
              </span>
            </div>
          </div>

          <form id="order-form" onSubmit={handleCheckoutWhatsApp} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                Nama Buah Hati (Untuk Sertifikat & Kartu Ucapan) *
              </label>
              <input
                type="text"
                required
                value={babyName}
                onChange={(e) => setBabyName(e.target.value)}
                placeholder="Contoh: Muhammad Bilal Al-Fatih"
                className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                Nama Orang Tua (Ayah / Bunda) *
              </label>
              <input
                type="text"
                required
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Contoh: Bpk. Rian & Ibu Annisa"
                className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                Nomor WhatsApp Aktif *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="081234567890"
                className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                  Tanggal Acara *
                </label>
                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                  Waktu Kirim *
                </label>
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-2.5 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                >
                  <option value="Pagi (08:00 - 10:00 WIB)">Pagi (08:00 - 10:00)</option>
                  <option value="Siang (11:00 - 13:00 WIB)">Siang (11:00 - 13:00)</option>
                  <option value="Sore (15:00 - 17:00 WIB)">Sore (15:00 - 17:00)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                Alamat Pengiriman Lengkap *
              </label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Jalan, No. Rumah, RT/RW, Patokan lokasi"
                className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                Catatan Khusus (Opsional)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Sate jangan terlalu pedas, gulai ekstra kuah"
                className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
              />
            </div>
          </form>

          <div className="bg-[#f0eee9] p-3 rounded-xl flex items-center gap-2 text-[11px] text-[#3f4943]">
            <ShieldCheck className="w-4 h-4 text-[#00754a] shrink-0" />
            <span>Pembayaran DP aman 20%, pelunasan setelah makanan tiba di lokasi.</span>
          </div>
        </div>

        {/* Footer Checkout CTA */}
        <div className="p-5 border-t border-[#eae8e3] bg-[#fbf9f4] space-y-2">
          <button
            type="submit"
            form="order-form"
            className="w-full py-3.5 bg-[#00754a] hover:bg-[#00482f] text-white font-bold rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#00754a]" />
            <span>Lanjutkan Booking via WhatsApp</span>
          </button>
          <div className="text-center text-[10px] text-[#6f7a72]">
            Data Anda aman dan langsung tersambung ke WhatsApp Customer Service MR Aqiqah.
          </div>
        </div>
      </div>
    </div>
  );
};
