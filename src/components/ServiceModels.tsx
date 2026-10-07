import React from 'react';
import { ServiceModel } from '../types';
import { SERVICE_MODELS } from '../data/mockData';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';

interface ServiceModelsProps {
  onSelectService: (service: ServiceModel) => void;
}

export const ServiceModels: React.FC<ServiceModelsProps> = ({ onSelectService }) => {
  return (
    <section id="hizmetler" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              01 / DÖRT TEMEL REFAKAT MODELİ
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Hastanede ve Evde Ölçülü, Saygın Eşlik.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Sevdiklerinizin klinik ve sosyal ihtiyaçlarına göre tasarlanmış, saatleri ve görev sınırları net 4 kurumsal refakat protokolü.
          </p>
        </div>

        {/* 4 Service Blocks in 2x2 or Editorial Columns */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICE_MODELS.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all hover:border-[#164A4A]"
            >
              <div>
                {/* Image & Header Banner */}
                <div className="relative h-48 bg-[#E9E4D9] overflow-hidden border-b border-[#DDD7CB]">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#164A4A]/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 bg-[#164A4A] text-[#F7F4EE] text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-[4px] uppercase">
                    {service.code}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#E9E4D9] text-[#164A4A] text-[11px] font-semibold px-2 py-0.5 rounded-[4px] border border-[#DDD7CB]">
                    {service.timingBadge}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-[#F7F4EE]">
                    <div className="text-lg font-heading font-semibold text-white">
                      {service.title}
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-[#252827] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Kimler İçin Uygun */}
                  <div className="p-3 bg-[#E9E4D9]/60 rounded-[4px] border border-[#DDD7CB] text-xs">
                    <span className="font-semibold text-[#164A4A] block mb-0.5">
                      Kimler İçin Tavsiye Edilir:
                    </span>
                    <span className="text-[#6B7270]">{service.suitableFor}</span>
                  </div>

                  {/* Scope Checklist */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#6B7270]">
                      Hizmet Kapsamı & Görevler:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#252827]">
                      {service.scopeList.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#164A4A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Info */}
              <div className="px-6 py-4 bg-[#F7F4EE] border-t border-[#DDD7CB] flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-[#6B7270]">Önerilen Süre: </span>
                  <strong className="text-[#164A4A]">{service.recommendedDuration}</strong>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="px-4 py-2 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] text-xs font-semibold rounded-[4px] flex items-center space-x-1.5 transition-all"
                >
                  <span>Bu Modeli Seç & Planla</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
