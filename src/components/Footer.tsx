import React from 'react';
import { Phone, MapPin, Mail, ShieldCheck, HeartPulse, MessageSquare, ArrowUp } from 'lucide-react';
import { HOSPITALS } from '../data/mockData';

interface FooterProps {
  onOpenInquiry: () => void;
  onOpenKvkk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onOpenKvkk }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#164A4A] text-[#F7F4EE] border-t border-[#003333]">
      {/* Top Advisory Banner */}
      <div className="border-b border-[#236565] py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[6px] bg-[#236565] flex items-center justify-center text-[#9ED0CF]">
              <HeartPulse className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-[#F7F4EE]">
                Ankara’da Güvenilir Refakatçi İhtiyacınız mı Var?
              </h3>
              <p className="text-xs text-[#87B8B8]">
                Nöbetçi koordinasyon ekibimiz Ankara genelinde 7/24 telefonun başındadır.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:03124270606"
              className="px-4 py-2.5 bg-[#003333] hover:bg-[#236565] text-[#F7F4EE] rounded-[6px] text-xs font-semibold flex items-center space-x-2 border border-[#87B8B8]/30 transition-all"
            >
              <Phone className="w-4 h-4 text-[#9ED0CF]" />
              <span>0 (312) 427 06 06</span>
            </a>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 bg-[#9ED0CF] hover:bg-[#B9ECEB] text-[#002020] rounded-[6px] text-xs font-bold transition-all shadow-xs"
            >
              Hemen Refakatçi İste
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-heading text-xl font-bold tracking-tight text-[#F7F4EE]">
                ANKARA REFAKAT
              </span>
            </div>
            <p className="text-xs text-[#87B8B8] leading-relaxed">
              Bilkent Şehir Hastanesi, Hacettepe, İbni Sina, Gülhane ve Ankara genelindeki tüm sağlık kuruluşlarında onaylı, şefkatli ve tecrübeli refakat personeli desteği.
            </p>
            <div className="p-3 bg-[#003333] rounded-[6px] border border-[#236565] text-xs space-y-1">
              <div className="flex items-center text-[#9ED0CF] font-semibold text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                <span>%100 Onaylı & Güvenli Kadro</span>
              </div>
              <p className="text-[10px] text-neutral-300">
                Adli sicil, bulaşıcı hastalık taraması ve hasta bakım sertifikalı personel.
              </p>
            </div>
          </div>

          {/* Ankara Hospitals Shortcuts */}
          <div>
            <h4 className="label-editorial text-[#9ED0CF] mb-3">
              ANKARA HASTANE AĞI
            </h4>
            <ul className="space-y-2 text-xs text-neutral-200">
              {HOSPITALS.slice(0, 5).map((hosp) => (
                <li key={hosp.id}>
                  <a href="#hastaneler" className="hover:text-[#9ED0CF] transition-colors flex items-center">
                    <span className="w-1 h-1 rounded-full bg-[#87B8B8] mr-2"></span>
                    {hosp.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#hastaneler" className="text-[#9ED0CF] font-medium hover:underline text-[11px] block pt-1">
                  + Diğer Tüm Özel ve Kamu Hastaneleri
                </a>
              </li>
            </ul>
          </div>

          {/* Service Models */}
          <div>
            <h4 className="label-editorial text-[#9ED0CF] mb-3">
              HİZMET MODELLERİ
            </h4>
            <ul className="space-y-2 text-xs text-neutral-200">
              <li>
                <a href="#hizmetler" className="hover:text-[#9ED0CF] transition-colors">
                  01 / Gündüz Hastane Refakati (08:00 - 18:00)
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-[#9ED0CF] transition-colors">
                  02 / Poliklinik & Tetkik Eşliği (4-6 Saat)
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-[#9ED0CF] transition-colors">
                  03 / Evde Nekahat & Yaşlı Sosyal Eşliği
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="hover:text-[#9ED0CF] transition-colors">
                  04 / 24 Saat Kesintisiz Çift Nöbet
                </a>
              </li>
              <li>
                <a href="#raporlama" className="hover:text-[#9ED0CF] transition-colors">
                  Günlük 3 Vakit WhatsApp Raporlama
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="label-editorial text-[#9ED0CF] mb-3">
              İLETİŞİM & MERKEZ
            </h4>
            <div className="space-y-2 text-xs text-neutral-200">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#9ED0CF] shrink-0 mt-0.5" />
                <span>
                  Tunalı Hilmi Caddesi No: 84 / Kavaklıdere - Çankaya / Ankara
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#9ED0CF] shrink-0" />
                <a href="tel:03124270606" className="hover:text-[#9ED0CF]">
                  0 (312) 427 06 06
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-[#9ED0CF] shrink-0" />
                <a
                  href="https://wa.me/905324270606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9ED0CF]"
                >
                  WhatsApp: 0 (532) 427 06 06
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#9ED0CF] shrink-0" />
                <span>bilgi@ankararefakat.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rules & Copyright */}
        <div className="mt-12 pt-6 border-t border-[#236565] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#87B8B8]">
          <div>
            © {new Date().getFullYear()} AnkaraRefakat Sağlık ve Refakat Hizmetleri. Tüm hakları saklıdır.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenKvkk}
              className="hover:text-[#F7F4EE] transition-colors underline"
            >
              KVKK & Hasta Mahremiyeti
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center hover:text-[#F7F4EE] transition-colors"
            >
              <span>Yukarı Dön</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
