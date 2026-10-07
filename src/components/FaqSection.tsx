import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, ChevronUp, HelpCircle, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="sss" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center pb-8 border-b border-[#DDD7CB]">
          <div className="label-editorial text-[#6B7270] mb-1">
            06 / MERAK EDİLEN KONULAR
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-sm text-[#6B7270] max-w-lg mx-auto mt-2">
            Hastane süreçleri, güvenlik ve refakat protokolümüz hakkında aklınıza gelebilecek tüm soruları şeffaflıkla yanıtladık.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-8 divide-y divide-[#DDD7CB] border-b border-[#DDD7CB]">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                >
                  <span className="font-heading text-sm sm:text-base font-semibold text-[#164A4A] group-hover:text-[#236565] transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-[4px] bg-[#E9E4D9] text-[#164A4A] shrink-0 border border-[#DDD7CB]">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-[#252827] leading-relaxed p-4 bg-[#FFFFFF] rounded-[6px] border border-[#DDD7CB]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-8 p-4 bg-[#E9E4D9] rounded-[6px] border border-[#DDD7CB] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3 text-[#164A4A]">
            <HelpCircle className="w-5 h-5 text-[#164A4A] shrink-0" />
            <div>
              <span className="font-semibold block">Başka bir konuda sorunuz mu var?</span>
              <span className="text-[#6B7270]">Ankara refakat koordinatörümüz 7/24 telefonun başındadır.</span>
            </div>
          </div>

          <a
            href="tel:03124270606"
            className="px-4 py-2 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] font-semibold rounded-[4px] whitespace-nowrap"
          >
            0 (312) 427 06 06 Ara
          </a>
        </div>
      </div>
    </section>
  );
};
