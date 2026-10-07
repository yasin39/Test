import React from 'react';
import { ShieldCheck, Clock, CheckCircle2, Award, ArrowRight, Phone, Building2, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: (initialData?: Record<string, unknown>) => void;
  onScrollToCalculator: () => void;
  onScrollToHospitals: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInquiry,
  onScrollToCalculator,
  onScrollToHospitals
}) => {
  return (
    <section className="relative w-full border-b border-[#DDD7CB] overflow-hidden bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-16">
        {/* Editorial Sub-index & Location Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#DDD7CB]">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-[0.14em] text-[#164A4A] uppercase">
            <span className="w-2 h-2 bg-[#164A4A]"></span>
            <span>ANKARA MERKEZ & TÜM HASTANELER</span>
            <span className="text-[#6B7270]">/</span>
            <span className="text-[#6B7270] font-normal">GÜNDÜZ & 24 SAAT REFAKAT PROTOKOLÜ</span>
          </div>

          <div className="flex items-center space-x-4 text-xs text-[#6B7270]">
            <span className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#164A4A] mr-1.5"></span>
              90-120 Dakika Hızlı İntikal
            </span>
            <span className="hidden sm:inline-block">·</span>
            <span className="hidden sm:flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#164A4A] mr-1" />
              Adli Sicil & Sağlık Doğrulamalı
            </span>
          </div>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 Columns on LG): Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <span className="px-3 py-1 bg-[#E9E4D9] text-[#164A4A] border border-[#DDD7CB] text-xs font-semibold uppercase tracking-wider rounded-[4px]">
                Kurumsal Hasta & Yaşlı Refakat Sistemi
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold text-[#164A4A] leading-[1.18] tracking-tight">
              Ankara’nın Köklü Hastanelerinde ve Evinizde Güvenilir Refakatçi Desteği.
            </h1>

            <p className="text-base sm:text-lg text-[#252827]/85 font-normal leading-relaxed max-w-2xl">
              Bilkent Şehir, Hacettepe, İbni Sina, Gülhane ve tüm başkent hastanelerinde; başhekimlik kurallarına tam uyumlu, referanslı ve şefkatli refakatçilerimizle sevdiklerinizin başucundayız. Hekim viziti takibi, mobilizasyon, beslenme ve aileye gün içi 3 vakit dijital durum raporu.
            </p>

            {/* Micro Trust Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start space-x-3 p-3 bg-[#E9E4D9]/60 rounded-[6px] border border-[#DDD7CB]">
                <ShieldCheck className="w-5 h-5 text-[#164A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#164A4A]">
                    Tam Doğrulanmış Kadro
                  </h4>
                  <p className="text-xs text-[#6B7270] mt-0.5 leading-normal">
                    Adli sicil kaydı, hepatit/akciğer sağlık taraması ve MEB hasta bakım sertifikalı personel.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-[#E9E4D9]/60 rounded-[6px] border border-[#DDD7CB]">
                <Clock className="w-5 h-5 text-[#164A4A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#164A4A]">
                    3 Vakit Durum Bildirimi
                  </h4>
                  <p className="text-xs text-[#6B7270] mt-0.5 leading-normal">
                    Sabah viziti, öğle öğünü ve akşam nöbet tesliminde aileye detaylı WhatsApp özeti.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => onOpenInquiry()}
                className="px-6 py-3.5 text-sm font-semibold tracking-wide text-[#F7F4EE] bg-[#164A4A] hover:bg-[#236565] active:bg-[#003333] rounded-[6px] transition-all flex items-center justify-center shadow-xs"
              >
                <span>Refakatçi Talebi Oluştur</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={onScrollToCalculator}
                className="px-5 py-3.5 text-sm font-semibold text-[#164A4A] bg-[#FFFFFF] border border-[#DDD7CB] hover:bg-[#E9E4D9] rounded-[6px] transition-all flex items-center justify-center"
              >
                <span>Plan ve Ücret Hesapla</span>
              </button>

              <button
                onClick={onScrollToHospitals}
                className="px-4 py-3.5 text-sm font-medium text-[#6B7270] hover:text-[#164A4A] flex items-center transition-colors"
              >
                <Building2 className="w-4 h-4 mr-1.5" />
                <span>Hastaneler & Uygunluk →</span>
              </button>
            </div>

            {/* Ankara Hospital Anchor Tag Strip */}
            <div className="pt-3 border-t border-[#DDD7CB]">
              <p className="text-[11px] font-semibold text-[#6B7270] uppercase tracking-wider mb-2">
                Aktif Refakatçi Bulunan Ankara Hastaneleri:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-[#252827]">
                {[
                  'Bilkent Şehir',
                  'Hacettepe Sıhhiye',
                  'AÜ İbni Sina',
                  'Etlik Şehir',
                  'Gülhane EAH',
                  'Başkent Bahçelievler',
                  'Gazi Tıp',
                  'Güven Ayrancı & Çayyolu',
                  'TOBB ETÜ'
                ].map((hospitalName) => (
                  <span
                    key={hospitalName}
                    className="inline-flex items-center px-2 py-0.5 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[4px] text-[11px] text-[#164A4A] font-medium"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#164A4A] mr-1"></span>
                    {hospitalName}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 Columns on LG): Editorial Photographic & Verification Panel */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-4 sm:p-5 shadow-xs">
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] rounded-[4px] overflow-hidden border border-[#DDD7CB] bg-[#E9E4D9]">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80"
                  alt="Ankara hastanesinde güvenli refakat ve şefkatli hasta eşliği"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#164A4A]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-[#F7F4EE]">
                  <div className="text-[10px] uppercase tracking-widest font-semibold text-[#87B8B8]">
                    Hacettepe Erişkin Yataklı Servis
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    "Saygı, sükunet ve hekim viziti disiplini."
                  </div>
                </div>
              </div>

              {/* Verified Badge Header Strip */}
              <div className="mt-4 p-3 bg-[#E9E4D9] rounded-[4px] border border-[#DDD7CB] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 bg-[#164A4A]"></div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#164A4A]">
                    ANKARA REFAKAT ONAYLI KADRO
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#164A4A] bg-[#FFFFFF] px-2 py-0.5 rounded-[4px] border border-[#DDD7CB]">
                  2026/27 Lisanslı
                </span>
              </div>

              {/* Data Rows */}
              <div className="mt-3 divide-y divide-[#DDD7CB] text-xs">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6B7270]">Bugün Ankara İçi Aktif Kadro:</span>
                  <span className="font-semibold text-[#164A4A]">34 Onaylı Refakatçi</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6B7270]">Hastaneye Ortalama Varış Süresi:</span>
                  <span className="font-semibold text-[#164A4A]">75 - 110 Dakika</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6B7270]">Aile Memnuniyet Oranı:</span>
                  <span className="font-semibold text-[#164A4A]">%99.4 (1.400+ Yatış Günü)</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-[#6B7270]">Sözleşmeli Güvence:</span>
                  <span className="font-semibold text-[#164A4A]">Kurumsal Hizmet & KVKK Garantisi</span>
                </div>
              </div>

              {/* Quick Direct Call Button */}
              <div className="mt-4 pt-3 border-t border-[#DDD7CB]">
                <a
                  href="tel:03124270606"
                  className="w-full py-2.5 px-3 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9ED0CF]" />
                  <span>Acil Refakat Koordinatörünü Ara: 0 (312) 427 06 06</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
