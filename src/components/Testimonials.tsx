import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Building2, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              AİLELERİN TECRÜBELERİ & REFERANSLAR
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Zor Günlerde Yanında Olduğumuz Aileler.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Hastanelerin yoğun temposunda güvenle arkasını yaslayan Ankaralı hekim, akademisyen ve çalışan ailelerin samimi görüşleri.
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-6 flex flex-col justify-between"
            >
              <div>
                {/* Hospital & Context Banner */}
                <div className="pb-3 mb-3 border-b border-[#DDD7CB] flex items-center justify-between text-[11px]">
                  <span className="font-semibold text-[#164A4A] flex items-center">
                    <Building2 className="w-3.5 h-3.5 mr-1 text-[#164A4A]" />
                    {t.hospital.split('(')[0]}
                  </span>
                  <span className="text-[#6B7270]">{t.date}</span>
                </div>

                <div className="flex text-amber-600 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-600" />
                  ))}
                </div>

                <blockquote className="text-xs text-[#252827] leading-relaxed italic mb-4">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-3 border-t border-[#DDD7CB]">
                <div className="font-heading font-semibold text-sm text-[#164A4A]">
                  {t.author}
                </div>
                <div className="text-[11px] text-[#6B7270] flex items-center mt-0.5">
                  <MapPin className="w-3 h-3 mr-1 text-[#6B7270]" />
                  <span>{t.district}</span>
                </div>
                <div className="text-[10px] text-[#164A4A] bg-[#E9E4D9] px-2 py-0.5 rounded-[3px] inline-block mt-2 font-medium">
                  {t.patientContext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
