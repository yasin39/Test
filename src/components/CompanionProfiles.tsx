import React, { useState } from 'react';
import { CompanionProfile } from '../types';
import { COMPANIONS } from '../data/mockData';
import { ShieldCheck, Award, Star, Clock, CheckCircle2, UserCheck, ArrowRight, X, Building2 } from 'lucide-react';

interface CompanionProfilesProps {
  onSelectCompanion: (companion: CompanionProfile) => void;
}

export const CompanionProfiles: React.FC<CompanionProfilesProps> = ({ onSelectCompanion }) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'female' | 'male'>('all');
  const [selectedCompanionModal, setSelectedCompanionModal] = useState<CompanionProfile | null>(null);

  const filteredCompanions = COMPANIONS.filter((comp) => {
    if (selectedGender === 'all') return true;
    return comp.gender === selectedGender;
  });

  return (
    <section id="kadro" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              03 / REFAKATÇİ KADROMUZ & DOĞRULAMA STANDARTLARI
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Emanetinizin Bilincinde, Sertifikalı Kadro.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Gelişigüzel değil; adli sicili, sağlık raporu, referansları ve hastane tecrübesi tek tek incelenmiş refakatçilerimizle çalışıyoruz.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="my-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#6B7270] mr-2">Filtrele:</span>
            {[
              { id: 'all', label: 'Tüm Kadro' },
              { id: 'female', label: 'Kadın Refakatçiler' },
              { id: 'male', label: 'Erkek Refakatçiler' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedGender(tab.id as 'all' | 'female' | 'male')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-[4px] border transition-all ${
                  selectedGender === tab.id
                    ? 'bg-[#164A4A] text-[#F7F4EE] border-[#164A4A]'
                    : 'bg-[#FFFFFF] text-[#252827] border-[#DDD7CB] hover:bg-[#E9E4D9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Institutional Quality Seal */}
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#164A4A] bg-[#E9E4D9] px-3 py-1.5 rounded-[4px] border border-[#DDD7CB]">
            <div className="w-2 h-2 bg-[#164A4A]"></div>
            <span>ANKARA REFAKAT ONAYLI KADRO PROTOKOLÜ</span>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCompanions.map((comp) => (
            <div
              key={comp.id}
              className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] overflow-hidden flex flex-col justify-between transition-all hover:border-[#164A4A]"
            >
              <div>
                {/* Photo & Availability Tag */}
                <div className="relative aspect-square bg-[#E9E4D9] overflow-hidden border-b border-[#DDD7CB]">
                  <img
                    src={comp.avatarUrl}
                    alt={comp.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] border ${
                        comp.isAvailableToday
                          ? 'bg-[#164A4A] text-[#F7F4EE] border-[#164A4A]'
                          : 'bg-[#E9E4D9] text-[#6B7270] border-[#DDD7CB]'
                      }`}
                    >
                      {comp.isAvailableToday ? '● Bugün Müsait' : 'Nöbette'}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 bg-[#FFFFFF]/90 backdrop-blur-xs border border-[#DDD7CB] px-2 py-0.5 rounded-[4px] text-[11px] font-semibold text-[#164A4A] flex items-center">
                    <Star className="w-3 h-3 text-amber-600 fill-amber-600 mr-1" />
                    <span>{comp.rating.toFixed(1)}</span>
                    <span className="text-[#6B7270] ml-1">({comp.reviewCount})</span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-4 space-y-2.5">
                  <div>
                    <h3 className="font-heading text-base font-semibold text-[#164A4A]">
                      {comp.name}
                    </h3>
                    <p className="text-xs text-[#6B7270]">{comp.title}</p>
                  </div>

                  {/* Experience Matrix */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-2 border-y border-[#DDD7CB]">
                    <div>
                      <span className="text-[10px] uppercase text-[#6B7270] block">Deneyim:</span>
                      <strong className="text-[#164A4A] font-semibold">{comp.experienceYears} Yıl</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#6B7270] block">Yatış Günü:</span>
                      <strong className="text-[#164A4A] font-semibold">{comp.completedDays}+ Gün</strong>
                    </div>
                  </div>

                  {/* Primary Hospitals */}
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-[#6B7270] mb-1">
                      Tecrübeli Olduğu Merkezler:
                    </div>
                    <p className="text-xs text-[#252827] line-clamp-2">
                      {comp.primaryHospitals.join(', ')}
                    </p>
                  </div>

                  {/* Specialties Chips */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {comp.specialties.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 bg-[#E9E4D9] text-[#164A4A] rounded-[3px] border border-[#DDD7CB]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 pt-2 border-t border-[#DDD7CB] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedCompanionModal(comp)}
                  className="text-xs font-semibold text-[#164A4A] hover:underline"
                >
                  Belgeleri İncele
                </button>

                <button
                  onClick={() => onSelectCompanion(comp)}
                  className="px-3 py-1.5 text-xs font-semibold text-[#F7F4EE] bg-[#164A4A] hover:bg-[#236565] rounded-[4px] transition-colors"
                >
                  Talep Et
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Companion Credentials Modal */}
      {selectedCompanionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252827]/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-lg">
            <button
              onClick={() => setSelectedCompanionModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#6B7270] hover:text-[#252827] rounded-[4px] hover:bg-[#E9E4D9]"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <img
                src={selectedCompanionModal.avatarUrl}
                alt={selectedCompanionModal.name}
                className="w-16 h-16 rounded-[6px] object-cover border border-[#DDD7CB]"
              />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#164A4A] bg-[#E9E4D9] px-2 py-0.5 rounded-[3px] inline-block mb-1 border border-[#DDD7CB]">
                  ANKARA REFAKAT ONAYLI KADRO
                </div>
                <h3 className="font-heading text-lg font-bold text-[#164A4A]">
                  {selectedCompanionModal.name}
                </h3>
                <p className="text-xs text-[#6B7270]">
                  {selectedCompanionModal.title} · {selectedCompanionModal.experienceYears} Yıl Saha Deneyimi
                </p>
              </div>
            </div>

            <p className="text-xs text-[#252827] leading-relaxed mb-4 p-3 bg-[#F7F4EE] rounded-[4px] border border-[#DDD7CB]">
              "{selectedCompanionModal.bio}"
            </p>

            <div className="space-y-3 text-xs">
              <div>
                <h4 className="font-semibold text-[#164A4A] uppercase tracking-wider text-[11px] mb-1.5">
                  Resmi Doğrulanmış Sertifika ve Belgeler:
                </h4>
                <ul className="space-y-1.5">
                  {selectedCompanionModal.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-[#252827]">
                      <CheckCircle2 className="w-4 h-4 text-[#164A4A] shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                  <li className="flex items-center space-x-2 text-[#252827]">
                    <ShieldCheck className="w-4 h-4 text-[#164A4A] shrink-0" />
                    <span>Güncel Adli Sicil & Sağlık Portör Onayı ({selectedCompanionModal.verifiedDate})</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#164A4A] uppercase tracking-wider text-[11px] mb-1.5">
                  Hizmet Verilen Ankara İlçeleri:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {selectedCompanionModal.districts.map((dist, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#E9E4D9] text-[#164A4A] rounded-[4px] border border-[#DDD7CB]"
                    >
                      {dist}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DDD7CB] flex items-center justify-between">
              <span className="text-xs text-[#6B7270]">
                Doğrulama Dönemi: <strong>{selectedCompanionModal.verifiedDate}</strong>
              </span>

              <button
                onClick={() => {
                  const comp = selectedCompanionModal;
                  setSelectedCompanionModal(null);
                  onSelectCompanion(comp);
                }}
                className="px-4 py-2 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] text-xs font-semibold rounded-[4px]"
              >
                Bu Refakatçiyi Eşleştir
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
