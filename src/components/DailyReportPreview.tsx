import React, { useState } from 'react';
import { SAMPLE_DAILY_REPORT } from '../data/mockData';
import { Clock, CheckCircle2, MessageSquare, Heart, FileText, ChevronRight, User, Stethoscope, Share2 } from 'lucide-react';

export const DailyReportPreview: React.FC = () => {
  const [activeShiftIndex, setActiveShiftIndex] = useState(1); // default to Doctor Vizit
  const activeShift = SAMPLE_DAILY_REPORT.shifts[activeShiftIndex];

  return (
    <section id="raporlama" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              04 / ŞEFFAF BİLGİLENDİRME SİSTEMİ
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Günde 3 Vakit Aileye Canlı Durum Raporu.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            İşinizde ya da şehir dışında olsanız dahi, hastanızın hekim vizitinden beslenmesine kadar her detayı düzenli WhatsApp bülteniyle öğrenin.
          </p>
        </div>

        {/* 12-Column Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Explanatory Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px]">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#164A4A] uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4 text-[#164A4A]" />
                <span>Neden Günlük Raporlama?</span>
              </div>
              <p className="text-xs text-[#252827] leading-relaxed">
                Hastanelerde refakat yalnızca başucunda oturmak değildir. Hekimin vizitinde söylediklerini not almak, hemşireye soruları doğru iletmek ve hastanın saatlik beslenme ve su dengesini kayıt altına almak hayati önem taşır.
              </p>

              <div className="mt-4 pt-4 border-t border-[#DDD7CB] space-y-3 text-xs">
                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px] font-bold shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-[#164A4A] block">Sabah Vizit Bildirimi (10:00 - 11:00):</strong>
                    <span className="text-[#6B7270]">Hekimin taburculuk, ilaç değişimi veya tahlil direktifleri özetlenir.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px] font-bold shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-[#164A4A] block">Öğle Durum Bildirimi (14:00 - 15:00):</strong>
                    <span className="text-[#6B7270]">Beslenme porsiyonu, su miktarı ve koridor mobilizasyon mesafesi.</span>
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#164A4A] text-[#F7F4EE] flex items-center justify-center text-[10px] font-bold shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-[#164A4A] block">Akşam Nöbet Devir Bildirimi (18:00):</strong>
                    <span className="text-[#6B7270]">Günün kapanış raporu, genel moral değerlendirmesi ve teslimat notu.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#E9E4D9] rounded-[6px] border border-[#DDD7CB] flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2 text-[#164A4A]">
                <MessageSquare className="w-4 h-4 text-[#164A4A]" />
                <span className="font-semibold">WhatsApp & SMS Bildirimleri</span>
              </div>
              <span className="text-[11px] font-medium text-[#6B7270]">Her Gün Otomatik</span>
            </div>
          </div>

          {/* Right Column: Live Report Card Simulation */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-6 shadow-xs">
            {/* Report Header Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DDD7CB]">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#164A4A] uppercase bg-[#E9E4D9] px-2 py-0.5 rounded-[3px] border border-[#DDD7CB]">
                  GÜNLÜK HASTA REFAKAT GÜNCESİ
                </span>
                <h3 className="font-heading text-lg font-bold text-[#164A4A] mt-1">
                  {SAMPLE_DAILY_REPORT.patientName}
                </h3>
                <p className="text-xs text-[#6B7270]">
                  {SAMPLE_DAILY_REPORT.hospitalName} · {SAMPLE_DAILY_REPORT.roomNo}
                </p>
              </div>

              <div className="text-right text-xs">
                <span className="text-[#6B7270] block">Refakatçi:</span>
                <strong className="text-[#164A4A] font-semibold">{SAMPLE_DAILY_REPORT.companionName}</strong>
                <span className="text-[11px] text-[#6B7270] block">{SAMPLE_DAILY_REPORT.reportDate}</span>
              </div>
            </div>

            {/* Shift Timeline Selector */}
            <div className="my-5 flex gap-1.5 overflow-x-auto pb-1">
              {SAMPLE_DAILY_REPORT.shifts.map((shift, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveShiftIndex(idx)}
                  className={`px-3 py-2 rounded-[4px] text-xs font-semibold whitespace-nowrap border transition-all text-left ${
                    activeShiftIndex === idx
                      ? 'bg-[#164A4A] text-[#F7F4EE] border-[#164A4A]'
                      : 'bg-[#F7F4EE] text-[#252827] border-[#DDD7CB] hover:bg-[#E9E4D9]'
                  }`}
                >
                  <span className="text-[10px] block opacity-80">{shift.time}</span>
                  <span>{shift.label.split('&')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Shift Details Box */}
            <div className="p-4 bg-[#F7F4EE] rounded-[6px] border border-[#DDD7CB] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#164A4A]" />
                  <span className="font-semibold text-xs text-[#164A4A]">
                    Saat {activeShift.time} — {activeShift.label}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#164A4A] bg-[#FFFFFF] px-2 py-0.5 rounded-[4px] border border-[#DDD7CB]">
                  Durum: {activeShift.vitalStatus}
                </span>
              </div>

              <p className="text-xs text-[#252827] leading-relaxed bg-[#FFFFFF] p-3 rounded-[4px] border border-[#DDD7CB]">
                "{activeShift.note}"
              </p>
            </div>

            {/* Daily Summary Metrics */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-[#E9E4D9]/60 rounded-[4px] border border-[#DDD7CB]">
                <span className="text-[10px] uppercase font-semibold text-[#6B7270] block mb-1">
                  Hekim Vizit Notu
                </span>
                <p className="text-[#252827] font-medium leading-tight">
                  {SAMPLE_DAILY_REPORT.doctorNotes}
                </p>
              </div>

              <div className="p-3 bg-[#E9E4D9]/60 rounded-[4px] border border-[#DDD7CB]">
                <span className="text-[10px] uppercase font-semibold text-[#6B7270] block mb-1">
                  Beslenme & Sıvı Dengesi
                </span>
                <p className="text-[#252827] font-medium leading-tight">
                  {SAMPLE_DAILY_REPORT.nutritionNote}
                </p>
              </div>

              <div className="p-3 bg-[#E9E4D9]/60 rounded-[4px] border border-[#DDD7CB]">
                <span className="text-[10px] uppercase font-semibold text-[#6B7270] block mb-1">
                  Psikolojik Moral
                </span>
                <p className="text-[#252827] font-medium leading-tight">
                  {SAMPLE_DAILY_REPORT.generalMood}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
