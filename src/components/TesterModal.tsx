import React, { useState } from 'react';
import { X, Utensils, MessageCircle, CheckCircle, ShieldCheck, Clock } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

interface TesterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TesterModal: React.FC<TesterModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [babyStatus, setBabyStatus] = useState('Sudah Lahir (Usia 0-30 Hari)');
  const [testerVariant, setTesterVariant] = useState('Sate Bumbu Kacang + Gulai Rempah');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !phone || !address) return;
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*PERMINTAAN TESTER FOOD GRATIS MR AQIQAH*
----------------------------------------
• Nama Orang Tua: ${parentName}
• No. WhatsApp: ${phone}
• Alamat Pengiriman: ${address}
• Status Buah Hati: ${babyStatus}
• Pilihan Menu Tester: ${testerVariant}
----------------------------------------
Halo Admin MR Aqiqah, saya ingin mencicipi tester makanan gratis seperti data di atas. Mohon dijadwalkan pengirimannya. Terima kasih.`;
    window.open(getWhatsAppUrl(text), '_blank');
    onClose();
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-[#eae8e3] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6f7a72] hover:bg-[#f0eee9] hover:text-[#1b1c19] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#006241] uppercase tracking-wider mb-2">
              <Utensils className="w-4 h-4 text-[#cba258]" />
              <span>Program Tester Makanan Gratis</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#00482f] mb-2 tracking-tight">
              Cicipi Kelezatan Olahan MR Aqiqah di Rumah Anda
            </h3>

            <p className="text-xs sm:text-sm text-[#3f4943] leading-relaxed mb-6">
              Tanpa biaya dan tanpa komitmen. Kami kirimkan sampel porsi sate dan gulai kambing empuk kami agar Ayah & Bunda yakin 100% sebelum syukuran aqiqah.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                  Nama Ayah / Bunda *
                </label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="Contoh: Bunda Sarah / Ayah Rian"
                  className="w-full text-xs sm:text-sm bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3.5 py-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
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
                  placeholder="Contoh: 081234567890"
                  className="w-full text-xs sm:text-sm bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3.5 py-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                  Alamat Lengkap Pengiriman Tester *
                </label>
                <textarea
                  required
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Jalan, Nomor Rumah, RT/RW, Kelurahan, Kecamatan, Kota (Jabodetabek)"
                  className="w-full text-xs sm:text-sm bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3.5 py-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                    Status Buah Hati
                  </label>
                  <select
                    value={babyStatus}
                    onChange={(e) => setBabyStatus(e.target.value)}
                    className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  >
                    <option value="Hamil (HPL Kurang dari 1 Bulan)">Hamil (HPL &lt; 1 Bulan)</option>
                    <option value="Hamil (HPL 1-3 Bulan Lagi)">Hamil (HPL 1-3 Bulan Lagi)</option>
                    <option value="Sudah Lahir (Usia 0-30 Hari)">Sudah Lahir (0-30 Hari)</option>
                    <option value="Sudah Lahir (Usia &gt; 1 Bulan)">Sudah Lahir (&gt; 1 Bulan)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1b1c19] mb-1">
                    Pilihan Tester
                  </label>
                  <select
                    value={testerVariant}
                    onChange={(e) => setTesterVariant(e.target.value)}
                    className="w-full text-xs bg-[#fbf9f4] border border-[#dcdad5] rounded-xl px-3 py-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  >
                    <option value="Sate Bumbu Kacang + Gulai Rempah">Sate Kacang + Gulai</option>
                    <option value="Sate Manis Pedas + Tongseng">Sate Pedas + Tongseng</option>
                    <option value="Sate Maranggi + Sop Bening">Sate Maranggi + Sop</option>
                  </select>
                </div>
              </div>

              <div className="bg-[#f0eee9] p-3 rounded-xl flex items-center gap-2 text-[11px] text-[#3f4943]">
                <ShieldCheck className="w-4 h-4 text-[#00754a] shrink-0" />
                <span>Pengiriman tester 100% gratis, bebas biaya kurir & tanpa keharusan memesan.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#006241] hover:bg-[#00482f] text-white font-bold rounded-full text-sm transition-all shadow-whisper active:scale-95"
              >
                Lanjutkan Permintaan Tester
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-[#d4e9e2] text-[#00482f] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[#00754a]" />
            </div>

            <h3 className="text-xl font-bold text-[#00482f] mb-2">
              Data Permintaan Tester Diterima!
            </h3>

            <p className="text-xs sm:text-sm text-[#3f4943] leading-relaxed mb-6">
              Terima kasih, <strong>{parentName}</strong>. Untuk konfirmasi jadwal pengiriman langsung dengan tim kurir kami hari ini, silakan klik tombol WhatsApp di bawah.
            </p>

            <div className="bg-[#f5f3ee] p-4 rounded-xl text-left text-xs space-y-1.5 text-[#3f4943] mb-6">
              <div><strong>Alamat:</strong> {address}</div>
              <div><strong>Menu Tester:</strong> {testerVariant}</div>
              <div><strong>Status:</strong> Siap Dijadwalkan Kurir</div>
            </div>

            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 bg-[#00754a] hover:bg-[#00482f] text-white font-bold rounded-full text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 mb-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#00754a]" />
              <span>Kirim Konfirmasi ke WhatsApp Admin</span>
            </button>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-[#6f7a72] hover:text-[#1b1c19] underline"
            >
              Tutup jendela ini
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
