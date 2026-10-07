import React, { useState, useMemo } from 'react';
import { HOSPITALS, ANKARA_DISTRICTS } from '../data/mockData';
import { Calculator, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Info, Sparkles, Building2, Home } from 'lucide-react';

interface CompanionCalculatorProps {
  onPlanSelectedForInquiry: (planSummary: {
    locationType: 'hospital' | 'home';
    targetLocation: string;
    serviceTitle: string;
    conditionTitle: string;
    days: number;
    estimatedPrice: number;
  }) => void;
}

export const CompanionCalculator: React.FC<CompanionCalculatorProps> = ({
  onPlanSelectedForInquiry
}) => {
  const [locationType, setLocationType] = useState<'hospital' | 'home'>('hospital');
  const [selectedHospital, setSelectedHospital] = useState<string>(HOSPITALS[0].name);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('Çankaya');

  const [serviceType, setServiceType] = useState<'gunduz' | 'tetkik' | 'evde' | 'nobet'>('gunduz');
  const [patientCondition, setPatientCondition] = useState<'mild' | 'moderate' | 'bedridden'>('moderate');
  const [days, setDays] = useState<number>(3);

  // Price Calculation Engine based on authentic professional care metrics
  const calculation = useMemo(() => {
    let baseDaily = 1750; // standard 10h hospital companion base (TL)

    if (serviceType === 'tetkik') {
      baseDaily = 1250; // 4-6 hours flexible appointment
    } else if (serviceType === 'evde') {
      baseDaily = 1600; // 8-9 hours home companion
    } else if (serviceType === 'nobet') {
      baseDaily = 3400; // 24 hours 2-shift rotation
    }

    // Condition multiplier
    let conditionMultiplier = 1.0;
    if (patientCondition === 'mild') conditionMultiplier = 1.0;
    if (patientCondition === 'moderate') conditionMultiplier = 1.08;
    if (patientCondition === 'bedridden') conditionMultiplier = 1.18;

    const dailyRate = Math.round(baseDaily * conditionMultiplier);
    const subtotal = dailyRate * days;

    // Multi-day courtesy discount
    let discountPercent = 0;
    if (days >= 7 && days < 14) discountPercent = 0.08;
    else if (days >= 14 && days < 30) discountPercent = 0.12;
    else if (days >= 30) discountPercent = 0.18;

    const discountAmount = Math.round(subtotal * discountPercent);
    const totalPrice = subtotal - discountAmount;

    let serviceTitle = 'Gündüz Hastane Refakati (08:00 - 18:00)';
    if (serviceType === 'tetkik') serviceTitle = 'Poliklinik & Tetkik Eşliği (4-6 Saat)';
    if (serviceType === 'evde') serviceTitle = 'Evde Nekahat & Yaşlı Eşliği (Gündüz)';
    if (serviceType === 'nobet') serviceTitle = '24 Saat Kesintisiz Nöbetli Refakat';

    let conditionTitle = 'Kendi Başına Yürüyebilen / Hafif Destek';
    if (patientCondition === 'moderate') conditionTitle = 'Destekle Yürüyen / Yürüteç - Tekerlekli Sandalye';
    if (patientCondition === 'bedridden') conditionTitle = 'Yatağa Tam Bağımlı / Cerrahi Sonrası Erken Dönem';

    return {
      dailyRate,
      subtotal,
      discountPercent,
      discountAmount,
      totalPrice,
      serviceTitle,
      conditionTitle
    };
  }, [serviceType, patientCondition, days]);

  const targetLocation = locationType === 'hospital' ? selectedHospital : `Ev Ortamı (${selectedDistrict} / Ankara)`;

  const handleProceedToInquiry = () => {
    onPlanSelectedForInquiry({
      locationType,
      targetLocation,
      serviceTitle: calculation.serviceTitle,
      conditionTitle: calculation.conditionTitle,
      days,
      estimatedPrice: calculation.totalPrice
    });
  };

  const getWhatsAppMessage = () => {
    const text = `Merhaba AnkaraRefakat Yetkilisi, web sitenizden bir refakatçi planı oluşturdum:\n\n• Hizmet Yeri: ${targetLocation}\n• Hizmet Türü: ${calculation.serviceTitle}\n• Hasta Durumu: ${calculation.conditionTitle}\n• Süre: ${days} Gün\n• Tahmini Toplam Plan: ~${calculation.totalPrice.toLocaleString('tr-TR')} TL\n\nUygunluk ve refakatçi teyidi rica ediyorum.`;
    return `https://wa.me/905324270606?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="hesaplayici" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              05 / ŞEFFAF PLANLAMA VE MALİYET ARACI
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              İhtiyacınıza Uygun Refakat Planını Belirleyin.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Sürpriz ek maliyetler veya gizli şartlar yok. Hastanızın durumuna ve gün sayısına göre şeffaf planı birkaç tıkla hesaplayın.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Columns) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-6 space-y-6">
            {/* Step 1: Location Type */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#164A4A] uppercase tracking-wider mb-2.5">
                <span className="w-4 h-4 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px]">1</span>
                <span>Hizmet Nerede Verilecek?</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLocationType('hospital')}
                  className={`p-3 rounded-[6px] border text-left flex items-center space-x-3 transition-all ${
                    locationType === 'hospital'
                      ? 'border-[#164A4A] bg-[#E9E4D9]/50 text-[#164A4A] font-semibold'
                      : 'border-[#DDD7CB] bg-[#FFFFFF] text-[#252827] hover:bg-[#F7F4EE]'
                  }`}
                >
                  <Building2 className="w-5 h-5 text-[#164A4A]" />
                  <div>
                    <div className="text-xs font-semibold">Hastanede Yatan Hasta</div>
                    <div className="text-[11px] text-[#6B7270]">Yataklı servis veya cerrahi katı</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setLocationType('home')}
                  className={`p-3 rounded-[6px] border text-left flex items-center space-x-3 transition-all ${
                    locationType === 'home'
                      ? 'border-[#164A4A] bg-[#E9E4D9]/50 text-[#164A4A] font-semibold'
                      : 'border-[#DDD7CB] bg-[#FFFFFF] text-[#252827] hover:bg-[#F7F4EE]'
                  }`}
                >
                  <Home className="w-5 h-5 text-[#164A4A]" />
                  <div>
                    <div className="text-xs font-semibold">Evde Nekahat / Eşlik</div>
                    <div className="text-[11px] text-[#6B7270]">Ev ortamında gündüz gözetimi</div>
                  </div>
                </button>
              </div>

              {/* Dynamic location dropdown */}
              <div className="mt-3">
                {locationType === 'hospital' ? (
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B7270] mb-1">
                      Ankara Hastanesi Seçimi:
                    </label>
                    <select
                      value={selectedHospital}
                      onChange={(e) => setSelectedHospital(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] py-2 px-3 text-xs text-[#252827] focus:outline-none"
                    >
                      {HOSPITALS.map((hosp) => (
                        <option key={hosp.id} value={hosp.name}>
                          {hosp.name} ({hosp.district})
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#6B7270] mb-1">
                      İlçe / Bölge:
                    </label>
                    <select
                      value={selectedDistrict}
                      onChange={(e) => setSelectedDistrict(e.target.value)}
                      className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] py-2 px-3 text-xs text-[#252827] focus:outline-none"
                    >
                      {ANKARA_DISTRICTS.map((dist) => (
                        <option key={dist} value={dist}>
                          {dist}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Service Model */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#164A4A] uppercase tracking-wider mb-2.5">
                <span className="w-4 h-4 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px]">2</span>
                <span>Hizmet Türü & Saat Aralığı</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    id: 'gunduz',
                    title: 'Gündüz Hastane Refakati',
                    time: '08:00 - 18:00 (10 Saat)',
                    desc: 'Vizit, beslenme, mobilizasyon takibi'
                  },
                  {
                    id: 'tetkik',
                    title: 'Poliklinik & Tetkik Eşliği',
                    time: '4 - 6 Saat Esnek',
                    desc: 'MR, kemoterapi, poliklinik refakati'
                  },
                  {
                    id: 'evde',
                    title: 'Evde Gündüz Nekahat Eşliği',
                    time: '09:00 - 17:00 / 8 Saat',
                    desc: 'İlaç hatırlatma, sohbet ve güvenlik'
                  },
                  {
                    id: 'nobet',
                    title: '24 Saat Kesintisiz Nöbet',
                    time: '12 + 12 Saat Çift Kadro',
                    desc: 'Gece ve gündüz kesintisiz refakat'
                  }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setServiceType(item.id as 'gunduz' | 'tetkik' | 'evde' | 'nobet')}
                    className={`p-3 rounded-[6px] border text-left transition-all ${
                      serviceType === item.id
                        ? 'border-[#164A4A] bg-[#E9E4D9]/40 text-[#164A4A]'
                        : 'border-[#DDD7CB] bg-[#FFFFFF] text-[#252827] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.title}</div>
                    <div className="text-[11px] font-semibold text-[#164A4A] mt-0.5">{item.time}</div>
                    <div className="text-[10px] text-[#6B7270] mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Patient Mobility Status */}
            <div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#164A4A] uppercase tracking-wider mb-2.5">
                <span className="w-4 h-4 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px]">3</span>
                <span>Hastanın Hareket / Mobilite Durumu</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'mild', label: 'Kendi Yürüyebilen', hint: 'Hafif kol desteği yeterli' },
                  { id: 'moderate', label: 'Destekle Yürüyen', hint: 'Yürüteç / Tekerlekli Sandalye' },
                  { id: 'bedridden', label: 'Yatağa Bağımlı', hint: 'Ameliyat nekahati / Pozisyonlama' }
                ].map((cond) => (
                  <button
                    key={cond.id}
                    type="button"
                    onClick={() => setPatientCondition(cond.id as 'mild' | 'moderate' | 'bedridden')}
                    className={`p-2.5 rounded-[6px] border text-left transition-all ${
                      patientCondition === cond.id
                        ? 'border-[#164A4A] bg-[#E9E4D9]/40 text-[#164A4A] font-semibold'
                        : 'border-[#DDD7CB] bg-[#FFFFFF] text-[#252827] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    <div className="text-xs font-semibold">{cond.label}</div>
                    <div className="text-[10px] text-[#6B7270]">{cond.hint}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Duration (Days) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#164A4A] uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px]">4</span>
                  <span>Kaç Günlük Refakat Planlanıyor?</span>
                </div>
                <span className="text-xs font-bold text-[#164A4A] bg-[#E9E4D9] px-2.5 py-0.5 rounded-[4px] border border-[#DDD7CB]">
                  {days} Günlük Paket
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[1, 3, 5, 7, 10, 14, 21, 30].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold border transition-all ${
                      days === d
                        ? 'bg-[#164A4A] text-[#F7F4EE] border-[#164A4A]'
                        : 'bg-[#FFFFFF] text-[#252827] border-[#DDD7CB] hover:bg-[#E9E4D9]'
                    }`}
                  >
                    {d} Gün {d >= 7 ? `(-%${d >= 30 ? 18 : d >= 14 ? 12 : 8})` : ''}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results & Summary Panel (5 Columns) */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-6 space-y-5">
            <div className="pb-4 border-b border-[#DDD7CB]">
              <span className="text-[10px] font-bold tracking-widest text-[#164A4A] uppercase bg-[#E9E4D9] px-2 py-0.5 rounded-[3px] border border-[#DDD7CB]">
                ŞEFFAF PLAN ÖZETİ
              </span>
              <h3 className="font-heading text-lg font-bold text-[#164A4A] mt-2">
                {calculation.serviceTitle}
              </h3>
              <p className="text-xs text-[#6B7270] mt-0.5">
                Konum: <strong>{targetLocation}</strong>
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 text-xs text-[#252827]">
              <div className="flex justify-between py-1 border-b border-[#DDD7CB]/50">
                <span className="text-[#6B7270]">Günlük Baz Hizmet Bedeli:</span>
                <span className="font-semibold text-[#164A4A]">
                  ~{calculation.dailyRate.toLocaleString('tr-TR')} TL / gün
                </span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#DDD7CB]/50">
                <span className="text-[#6B7270]">Toplam Gün Sayısı:</span>
                <span className="font-semibold text-[#252827]">{days} Gün</span>
              </div>

              {calculation.discountAmount > 0 && (
                <div className="flex justify-between py-1 border-b border-[#DDD7CB]/50 text-emerald-800">
                  <span>Haftalık / Süre İndirimi (%{Math.round(calculation.discountPercent * 100)}):</span>
                  <span className="font-semibold">
                    -{calculation.discountAmount.toLocaleString('tr-TR')} TL
                  </span>
                </div>
              )}

              <div className="pt-2 flex items-baseline justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#164A4A] block">
                    Tahmini Toplam Tutar:
                  </span>
                  <span className="text-[10px] text-[#6B7270]">KDV ve tüm ulaşım giderleri dahil</span>
                </div>
                <div className="text-right">
                  <span className="font-heading text-2xl font-bold text-[#164A4A]">
                    ~{calculation.totalPrice.toLocaleString('tr-TR')} TL
                  </span>
                </div>
              </div>
            </div>

            {/* Standard Inclusions */}
            <div className="p-3.5 bg-[#E9E4D9]/60 rounded-[6px] border border-[#DDD7CB] space-y-2 text-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#164A4A]">
                Bu Plana Dahil Standart Güvenceler:
              </div>
              <ul className="space-y-1.5 text-[#252827] text-[11px]">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#164A4A] shrink-0" />
                  <span>Başhekimlik ve servis kurallarına tam uyum</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#164A4A] shrink-0" />
                  <span>Sabah hekim viziti not alma & aileye aktarım</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#164A4A] shrink-0" />
                  <span>Günde 3 kez WhatsApp dijital durum raporu</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#164A4A] shrink-0" />
                  <span>Uyumsuzluk halinde aynı gün ücretsiz yedek refakatçi</span>
                </li>
              </ul>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleProceedToInquiry}
                className="w-full py-3 px-4 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-xs"
              >
                <span>Bu Planla Ön Başvuru Yap</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#FFFFFF] border border-[#164A4A] hover:bg-[#E9E4D9] text-[#164A4A] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#164A4A]" />
                <span>Bu Planı WhatsApp ile Gönder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
