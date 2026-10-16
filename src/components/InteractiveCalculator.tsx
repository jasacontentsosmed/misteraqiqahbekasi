import React, { useState } from 'react';
import { Calculator, MessageCircle, Check, Copy, Share2, Sparkles, AlertCircle } from 'lucide-react';

interface InteractiveCalculatorProps {
  initialGender?: 'laki' | 'perempuan';
  onOrderNow?: (details: any) => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({
  initialGender = 'perempuan',
}) => {
  const [gender, setGender] = useState<'laki' | 'perempuan'>(initialGender);
  const [animalGrade, setAnimalGrade] = useState<'hemat' | 'standar' | 'super'>('standar');
  const [packageType, setPackageType] = useState<'bento' | 'cooked'>('bento');
  const [boxQuantity, setBoxQuantity] = useState<number>(gender === 'laki' ? 120 : 60);
  const [riceType, setRiceType] = useState<'putih' | 'kebuli' | 'mandhi'>('kebuli');
  const [sateChoice, setSateChoice] = useState<string>('Sate Kambing Bumbu Kacang');
  const [kuahChoice, setKuahChoice] = useState<string>('Gulai Kambing Rempah');
  const [addBanana, setAddBanana] = useState<boolean>(false);
  const [addPudding, setAddPudding] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Price calculation
  const animalCount = gender === 'laki' ? 2 : 1;

  const animalPrices = {
    hemat: 1750000,
    standar: 2150000,
    super: 2750000,
  };

  const riceAdditionalPricePerBox = {
    putih: 0,
    kebuli: 7000,
    mandhi: 8000,
  };

  const baseBoxPrice = 15000; // Base thinwall bento box with standard side dishes (acar, sambal, kerupuk)

  const animalCost = animalPrices[animalGrade] * animalCount;

  // Box cost
  const boxCostPerUnit = packageType === 'bento' 
    ? baseBoxPrice + riceAdditionalPricePerBox[riceType] + (addBanana ? 3000 : 0) + (addPudding ? 3500 : 0)
    : 0;

  const totalBoxCost = packageType === 'bento' ? boxCostPerUnit * boxQuantity : 0;
  const grandTotal = animalCost + totalBoxCost;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Adjust box quantity recommendation when gender switches
  const handleGenderChange = (newGender: 'laki' | 'perempuan') => {
    setGender(newGender);
    if (newGender === 'laki' && boxQuantity < 100) {
      setBoxQuantity(120);
    } else if (newGender === 'perempuan' && boxQuantity > 100) {
      setBoxQuantity(60);
    }
  };

  const buildSummaryText = () => {
    return `*SIMULASI PESANAN MR AQIQAH CATERING*
----------------------------------------
• Jenis Kelamin Bayi: ${gender === 'laki' ? 'Anak Laki-Laki (Sunnah 2 Ekor)' : 'Anak Perempuan (Sunnah 1 Ekor)'}
• Kelas Hewan: ${
      animalGrade === 'hemat'
        ? 'Betina Syar’i Hemat'
        : animalGrade === 'standar'
        ? 'Jantan Syar’i Standar (Pilihan Utama)'
        : 'Jantan Kelas Super Jumbo'
    } (${animalCount} Ekor)
• Format Layanan: ${packageType === 'bento' ? `Paket Nasi Bento Box (${boxQuantity} Box)` : 'Daging Olahan Matang Saja'}
${packageType === 'bento' ? `• Jenis Nasi: ${riceType === 'putih' ? 'Nasi Putih Pulen' : riceType === 'kebuli' ? 'Nasi Kebuli Basmati Rempah' : 'Nasi Mandhi Khas Arab'}` : ''}
• Olahan Sate: ${sateChoice}
• Olahan Kuah: ${kuahChoice}
${addBanana ? '• Tambahan: Buah Pisang Cavendish (+Rp 3.000/box)\n' : ''}${addPudding ? '• Tambahan: Puding Sutra Pandan (+Rp 3.500/box)\n' : ''}• Fasilitas Gratis Termasuk:
  - Sertifikat Aqiqah Pigura Kayu Eksklusif
  - Video Dokumentasi Penyembelihan
  - Risalah Aqiqah & Kartu Ucapan Nama Bayi
  - Free Ongkir Jabodetabek
----------------------------------------
*TOTAL ESTIMASI: ${formatRupiah(grandTotal)}*

Halo Admin MR Aqiqah, saya ingin konfirmasi simulasi pesanan di atas untuk aqiqah anak kami.`;
  };

  const handleWhatsAppCheckout = () => {
    const text = encodeURIComponent(buildSummaryText());
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(buildSummaryText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="kalkulator" className="py-16 bg-[#f5f3ee] border-t border-[#eae8e3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#006241] uppercase tracking-wider bg-[#d4e9e2] px-3 py-1 rounded-full mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Syar'i Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00482f] tracking-tight">
            Hitung Rencana Biaya Aqiqah Sesuai Kebutuhan
          </h2>
          <p className="text-sm sm:text-base text-[#3f4943] mt-2">
            Sesuaikan jumlah kambing, jenis olahan menu favorit, dan kemasan bento box secara fleksibel tanpa biaya tersembunyi.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Gender of Baby */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#eae8e3] shadow-whisper">
              <label className="text-xs font-bold text-[#6f7a72] uppercase tracking-wider block mb-3">
                1. Jenis Kelamin Buah Hati (Ketentuan Sunnah)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleGenderChange('perempuan')}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    gender === 'perempuan'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <span className="font-bold text-sm text-[#00482f]">Anak Perempuan</span>
                  <span className="text-xs text-[#3f4943] mt-0.5">1 Ekor Kambing Syar'i</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleGenderChange('laki')}
                  className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    gender === 'laki'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <span className="font-bold text-sm text-[#00482f]">Anak Laki-Laki</span>
                  <span className="text-xs text-[#3f4943] mt-0.5">2 Ekor Kambing Syar'i (Sunnah)</span>
                </button>
              </div>
            </div>

            {/* Step 2: Animal Grade */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#eae8e3] shadow-whisper">
              <label className="text-xs font-bold text-[#6f7a72] uppercase tracking-wider block mb-3">
                2. Pilihan Kualitas Hewan Aqiqah ({animalCount} Ekor)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setAnimalGrade('hemat')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    animalGrade === 'hemat'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <div className="font-bold text-sm text-[#00482f]">Betina Hemat</div>
                  <div className="text-xs text-[#3f4943] mt-0.5">Sah Syar'i</div>
                  <div className="text-xs font-bold text-[#006241] mt-2">
                    {formatRupiah(animalPrices.hemat)} /ekor
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAnimalGrade('standar')}
                  className={`p-3 rounded-xl border text-left transition-all relative ${
                    animalGrade === 'standar'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <div className="font-bold text-sm text-[#00482f]">Jantan Standar</div>
                  <div className="text-xs text-[#3f4943] mt-0.5">Paling Diminati</div>
                  <div className="text-xs font-bold text-[#006241] mt-2">
                    {formatRupiah(animalPrices.standar)} /ekor
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAnimalGrade('super')}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    animalGrade === 'super'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <div className="font-bold text-sm text-[#00482f]">Jantan Super Jumbo</div>
                  <div className="text-xs text-[#3f4943] mt-0.5">Daging Tebal Maksimal</div>
                  <div className="text-xs font-bold text-[#006241] mt-2">
                    {formatRupiah(animalPrices.super)} /ekor
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Serving Format */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#eae8e3] shadow-whisper">
              <label className="text-xs font-bold text-[#6f7a72] uppercase tracking-wider block mb-3">
                3. Bentuk Penyajian
              </label>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => setPackageType('bento')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    packageType === 'bento'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <span className="font-bold text-sm text-[#00482f] block">Paket Bento Box Thinwall</span>
                  <span className="text-xs text-[#3f4943] mt-0.5 block">Siap langsung dibagikan ke kerabat & panti</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPackageType('cooked')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    packageType === 'cooked'
                      ? 'border-[#006241] bg-[#d4e9e2]/30 ring-2 ring-[#006241]/20'
                      : 'border-[#eae8e3] hover:border-[#bec9c0]'
                  }`}
                >
                  <span className="font-bold text-sm text-[#00482f] block">Daging Masak Saja</span>
                  <span className="text-xs text-[#3f4943] mt-0.5 block">Diwadahi wadah besar untuk prasmanan rumah</span>
                </button>
              </div>

              {/* Bento Box Sub-configuration */}
              {packageType === 'bento' && (
                <div className="pt-4 border-t border-[#f0eee9] space-y-4">
                  {/* Quantity Slider */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                      <span className="text-[#3f4943]">Jumlah Bento Box:</span>
                      <span className="text-base font-extrabold text-[#00482f] tabular-nums">
                        {boxQuantity} Box
                      </span>
                    </div>
                    <input
                      type="range"
                      min={gender === 'laki' ? 80 : 40}
                      max={gender === 'laki' ? 250 : 150}
                      step={10}
                      value={boxQuantity}
                      onChange={(e) => setBoxQuantity(Number(e.target.value))}
                      className="w-full h-2 bg-[#eae8e3] rounded-lg appearance-none cursor-pointer accent-[#006241]"
                    />
                    <div className="flex justify-between text-[11px] text-[#6f7a72] mt-1">
                      <span>{gender === 'laki' ? '80 Box' : '40 Box'}</span>
                      <span>Disarankan: {gender === 'laki' ? '120-140 Box' : '60-70 Box'}</span>
                      <span>{gender === 'laki' ? '250 Box' : '150 Box'}</span>
                    </div>
                  </div>

                  {/* Choice of Rice */}
                  <div>
                    <label className="text-xs font-semibold text-[#3f4943] block mb-2">
                      Pilihan Varian Nasi:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setRiceType('putih')}
                        className={`p-2.5 rounded-lg border text-center text-xs font-bold transition-all ${
                          riceType === 'putih'
                            ? 'bg-[#00482f] text-white border-[#00482f]'
                            : 'bg-[#fbf9f4] text-[#3f4943] border-[#eae8e3]'
                        }`}
                      >
                        Nasi Putih Pulen
                        <div className="text-[10px] font-normal opacity-80">Standar</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRiceType('kebuli')}
                        className={`p-2.5 rounded-lg border text-center text-xs font-bold transition-all ${
                          riceType === 'kebuli'
                            ? 'bg-[#00482f] text-white border-[#00482f]'
                            : 'bg-[#fbf9f4] text-[#3f4943] border-[#eae8e3]'
                        }`}
                      >
                        Nasi Kebuli Basmati
                        <div className="text-[10px] font-normal opacity-80">+Rp 7.000 /box</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setRiceType('mandhi')}
                        className={`p-2.5 rounded-lg border text-center text-xs font-bold transition-all ${
                          riceType === 'mandhi'
                            ? 'bg-[#00482f] text-white border-[#00482f]'
                            : 'bg-[#fbf9f4] text-[#3f4943] border-[#eae8e3]'
                        }`}
                      >
                        Nasi Mandhi Arab
                        <div className="text-[10px] font-normal opacity-80">+Rp 8.000 /box</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Step 4: Menu Selections */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#eae8e3] shadow-whisper">
              <label className="text-xs font-bold text-[#6f7a72] uppercase tracking-wider block mb-3">
                4. Pilihan Olahan Menu Masakan (2 Menu Pilihan)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#3f4943] block mb-1.5">
                    Olahan 1: Sate Kambing
                  </label>
                  <select
                    value={sateChoice}
                    onChange={(e) => setSateChoice(e.target.value)}
                    className="w-full text-xs font-semibold bg-[#fbf9f4] border border-[#dcdad5] rounded-xl p-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  >
                    <option value="Sate Kambing Bumbu Kacang">Sate Kambing Bumbu Kacang (Favorit)</option>
                    <option value="Sate Kambing Manis Pedas Rawit">Sate Kambing Manis Pedas Rawit</option>
                    <option value="Sate Maranggi Rempah Gurih">Sate Maranggi Rempah Gurih</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#3f4943] block mb-1.5">
                    Olahan 2: Masakan Kuah
                  </label>
                  <select
                    value={kuahChoice}
                    onChange={(e) => setKuahChoice(e.target.value)}
                    className="w-full text-xs font-semibold bg-[#fbf9f4] border border-[#dcdad5] rounded-xl p-2.5 text-[#1b1c19] focus:outline-none focus:ring-2 focus:ring-[#006241]"
                  >
                    <option value="Gulai Kambing Rempah">Gulai Kambing Rempah Kental</option>
                    <option value="Tongseng Kambing Sayur Segar">Tongseng Kambing Sayur Segar</option>
                    <option value="Tengkleng Solo Tulang & Daging">Tengkleng Solo Tulang & Daging</option>
                    <option value="Sop Kambing Rempah Bening">Sop Kambing Rempah Bening</option>
                  </select>
                </div>
              </div>

              {/* Add-ons checkboxes */}
              {packageType === 'bento' && (
                <div className="mt-4 pt-4 border-t border-[#f0eee9] space-y-2">
                  <span className="text-xs font-bold text-[#6f7a72] uppercase tracking-wider block">
                    Pelengkap Tambahan (Opsional):
                  </span>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-[#1b1c19]">
                      <input
                        type="checkbox"
                        checked={addBanana}
                        onChange={(e) => setAddBanana(e.target.checked)}
                        className="rounded border-[#bec9c0] text-[#006241] focus:ring-[#006241] w-4 h-4"
                      />
                      <span>Pisang Cavendish (+Rp 3.000/box)</span>
                    </label>

                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-medium text-[#1b1c19]">
                      <input
                        type="checkbox"
                        checked={addPudding}
                        onChange={(e) => setAddPudding(e.target.checked)}
                        className="rounded border-[#bec9c0] text-[#006241] focus:ring-[#006241] w-4 h-4"
                      />
                      <span>Puding Sutra Pandan (+Rp 3.500/box)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Live Order Summary Column (5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-2xl border-2 border-[#006241] p-6 shadow-whisper relative overflow-hidden">
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#cba258]" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-[#006241] uppercase tracking-wider">
                  Ringkasan Estimasi Biaya
                </span>
                <span className="text-[11px] font-semibold text-[#6f7a72]">
                  Resmi MR Aqiqah
                </span>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3 pb-4 border-b border-[#eae8e3] text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-[#3f4943]">
                    Hewan ({animalCount}x {animalGrade === 'hemat' ? 'Betina' : animalGrade === 'standar' ? 'Jantan Standar' : 'Jantan Super'}):
                  </span>
                  <span className="font-bold text-[#1b1c19] tabular-nums">
                    {formatRupiah(animalCost)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#3f4943]">
                    Biaya Sembelih & Masak 2 Menu:
                  </span>
                  <span className="font-bold text-[#00754a]">
                    GRATIS
                  </span>
                </div>

                {packageType === 'bento' && (
                  <div className="flex justify-between">
                    <span className="text-[#3f4943]">
                      {boxQuantity} Bento Box ({riceType}):
                    </span>
                    <span className="font-bold text-[#1b1c19] tabular-nums">
                      {formatRupiah(totalBoxCost)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-[#3f4943]">
                    Ongkir Wilayah Jabodetabek:
                  </span>
                  <span className="font-bold text-[#00754a]">
                    GRATIS
                  </span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="py-4">
                <div className="text-xs text-[#6f7a72] mb-0.5">Total Estimasi Keseluruhan:</div>
                <div className="text-3xl font-black text-[#00482f] tabular-nums tracking-tight">
                  {formatRupiah(grandTotal)}
                </div>
                <div className="text-[11px] text-[#3f4943] mt-1">
                  *Bisa bayar DP 20%, sisa dilunasi saat paket sampai di rumah.
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="bg-[#f5f3ee] p-3.5 rounded-xl mb-5 space-y-1.5 text-xs text-[#3f4943]">
                <div className="font-bold text-[#00482f] mb-1">Sudah Termasuk Fasilitas Lengkap:</div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00754a]" />
                  <span>Sertifikat Aqiqah Pigura Kayu Eksklusif</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00754a]" />
                  <span>Video Dokumentasi Penyembelihan (HD)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00754a]" />
                  <span>Kartu Ucapan Custom Foto & Nama Bayi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#00754a]" />
                  <span>Garansi Daging Tidak Prengus & Segar</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 px-4 bg-[#00754a] hover:bg-[#00482f] text-white rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#00754a]" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full py-2.5 px-4 bg-[#edebe9] hover:bg-[#e4e2dd] text-[#00482f] rounded-full font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00754a]" />
                      <span>Rincian Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Rincian Simulasi</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
