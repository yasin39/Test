import React, { useState } from 'react';
import { Phone, MessageSquare, Shield, Clock, Menu, X, ArrowRight, HeartPulse } from 'lucide-react';

interface HeaderProps {
  onOpenInquiry: (initialData?: Record<string, unknown>) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F4EE] border-b border-[#DDD7CB]">
      {/* Top Emergency & Information Strip */}
      <div className="bg-[#164A4A] text-[#F7F4EE] text-xs py-2 px-4 sm:px-8 border-b border-[#003333]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#87B8B8] animate-pulse"></span>
            <span className="font-medium text-[#E0F2F1]">ANKARA 7/24 KOORDİNASYON VE ACİL REFAKAT MERKEZİ</span>
            <span className="hidden md:inline text-[#87B8B8]">—</span>
            <span className="hidden md:inline text-neutral-200">
              Bilkent Şehir, Hacettepe, İbni Sina ve tüm hastanelerde 90-120 dakikada nöbetçi refakatçi yönlendirmesi
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-medium">
            <a
              href="tel:03124270606"
              className="flex items-center space-x-1.5 hover:text-[#9ED0CF] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#9ED0CF]" />
              <span className="font-semibold tracking-wider">0 (312) 427 06 06</span>
            </a>
            <span className="text-[#87B8B8]/50">|</span>
            <a
              href="https://wa.me/905324270606?text=Merhaba,%20Ankara'da%20refakat%C3%A7i%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 hover:text-[#9ED0CF] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#9ED0CF]" />
              <span className="hidden sm:inline">WhatsApp Danışma</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logotype */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 rounded-[6px] bg-[#164A4A] flex items-center justify-center text-[#F7F4EE] shadow-xs">
            <HeartPulse className="w-6 h-6 stroke-[1.8]" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#164A4A]">
                ANKARA REFAKAT
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-[#E9E4D9] text-[#164A4A] rounded-[4px] border border-[#DDD7CB]">
                ONAYLI SAĞLIK EŞLİĞİ
              </span>
            </div>
            <p className="text-[11px] font-medium text-[#6B7270] tracking-wider uppercase">
              Hastane ve Evde Güvenilir Refakat Hizmetleri
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#252827]">
          <button
            onClick={() => scrollToSection('hizmetler')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Hizmet Modelleri
          </button>
          <button
            onClick={() => scrollToSection('hastaneler')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Hastaneler & Uygunluk
          </button>
          <button
            onClick={() => scrollToSection('kadro')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Refakatçi Kadromuz
          </button>
          <button
            onClick={() => scrollToSection('raporlama')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Günlük Raporlama
          </button>
          <button
            onClick={() => scrollToSection('hesaplayici')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Plan & Maliyet
          </button>
          <button
            onClick={() => scrollToSection('sss')}
            className="hover:text-[#164A4A] transition-colors text-left py-1"
          >
            Sıkça Sorulanlar
          </button>
        </nav>

        {/* Desktop Primary Action */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="tel:03124270606"
            className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-[#164A4A] border border-[#164A4A] rounded-[6px] hover:bg-[#E9E4D9] transition-all"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5" />
            0312 427 06 06
          </a>
          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#F7F4EE] bg-[#164A4A] hover:bg-[#236565] active:bg-[#003333] rounded-[6px] transition-all shadow-xs"
          >
            Refakatçi Talep Et
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={() => onOpenInquiry()}
            className="sm:hidden px-3 py-1.5 text-xs font-semibold text-[#F7F4EE] bg-[#164A4A] rounded-[6px]"
          >
            Talep Et
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#252827] hover:bg-[#E9E4D9] rounded-[6px] border border-[#DDD7CB]"
            aria-label="Menü"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F4EE] border-t border-[#DDD7CB] px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-[#252827]">
            <button
              onClick={() => scrollToSection('hizmetler')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>01 / Hizmet Modelleri</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
            <button
              onClick={() => scrollToSection('hastaneler')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>02 / Ankara Hastaneleri & Kapsama</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
            <button
              onClick={() => scrollToSection('kadro')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>03 / Onaylı Refakatçi Kadromuz</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
            <button
              onClick={() => scrollToSection('raporlama')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>04 / Günlük Dijital Rapor Örneği</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
            <button
              onClick={() => scrollToSection('hesaplayici')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>05 / Refakat Maliyet & Süre Hesaplayıcı</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
            <button
              onClick={() => scrollToSection('sss')}
              className="text-left py-2 border-b border-[#DDD7CB]/60 flex items-center justify-between"
            >
              <span>06 / Sıkça Sorulan Sorular</span>
              <ArrowRight className="w-4 h-4 text-[#6B7270]" />
            </button>
          </div>

          <div className="pt-2 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-[#F7F4EE] bg-[#164A4A] rounded-[6px]"
            >
              Hemen Refakatçi Talebi Oluştur
            </button>
            <a
              href="tel:03124270606"
              className="w-full py-2.5 flex items-center justify-center text-sm font-semibold text-[#164A4A] border border-[#164A4A] rounded-[6px]"
            >
              <Phone className="w-4 h-4 mr-2" />
              0 (312) 427 06 06 Ara
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
