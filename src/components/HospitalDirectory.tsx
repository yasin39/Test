import React, { useState } from 'react';
import { Hospital, HospitalType } from '../types';
import { HOSPITALS } from '../data/mockData';
import { Building2, MapPin, CheckCircle2, ShieldCheck, ArrowRight, Search, Filter, X, Stethoscope } from 'lucide-react';

interface HospitalDirectoryProps {
  onSelectHospitalForInquiry: (hospital: Hospital) => void;
}

export const HospitalDirectory: React.FC<HospitalDirectoryProps> = ({
  onSelectHospitalForInquiry
}) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeHospitalModal, setActiveHospitalModal] = useState<Hospital | null>(null);

  const filteredHospitals = HOSPITALS.filter((h) => {
    const matchesType = selectedType === 'all' || h.type === selectedType;
    const matchesSearch =
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.featuredUnits.some((u) => u.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesSearch;
  });

  return (
    <section id="hastaneler" className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              02 / ANKARA HASTANE AĞI & KAPSAMA ALANI
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Başkentin Köklü Sağlık Kurumlarında Hazırız.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Üniversite tıp fakülteleri, şehir hastaneleri ve özel merkezlerin başhekimlik ve servis kurallarına hakim personelle hizmet veriyoruz.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="my-8 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Tüm Hastaneler' },
              { id: 'sehir', label: 'Şehir Hastaneleri' },
              { id: 'universite', label: 'Üniversite Tıp Fakülteleri' },
              { id: 'ozel', label: 'Özel Hastaneler' },
              { id: 'kamu', label: 'EAH & Kamu' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedType(tab.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-[4px] border transition-all ${
                  selectedType === tab.id
                    ? 'bg-[#164A4A] text-[#F7F4EE] border-[#164A4A]'
                    : 'bg-[#FFFFFF] text-[#252827] border-[#DDD7CB] hover:bg-[#E9E4D9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#6B7270] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hastane, ilçe veya branş ara..."
              className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] pl-9 pr-4 py-2 text-xs text-[#252827] placeholder:text-[#6B7270]"
            />
          </div>
        </div>

        {/* Hospital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] overflow-hidden flex flex-col transition-all hover:border-[#164A4A]/70"
            >
              {/* Photo & Badge */}
              <div className="relative h-44 bg-[#E9E4D9] overflow-hidden border-b border-[#DDD7CB]">
                <img
                  src={hospital.imageUrl}
                  alt={hospital.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#164A4A] text-[#F7F4EE] text-[10px] font-semibold uppercase px-2.5 py-1 rounded-[4px] tracking-wider">
                  {hospital.type === 'sehir'
                    ? 'Şehir Hastanesi'
                    : hospital.type === 'universite'
                    ? 'Üniversite Hastanesi'
                    : hospital.type === 'ozel'
                    ? 'Özel Sağlık Grubu'
                    : 'Eğitim & Araştırma'}
                </div>
                <div className="absolute top-3 right-3 bg-[#F7F4EE]/95 border border-[#DDD7CB] text-[#164A4A] text-[11px] font-medium px-2 py-0.5 rounded-[4px]">
                  {hospital.district}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6B7270] mb-1.5">
                    <span className="flex items-center text-[#164A4A] font-semibold">
                      <span className="w-2 h-2 rounded-full bg-[#164A4A] mr-1.5"></span>
                      {hospital.coverageLevel}
                    </span>
                    <span className="text-[11px] font-medium text-[#6B7270]">
                      {hospital.availableCompanionsCount} Refakatçi Rezervde
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-semibold text-[#164A4A] mb-2 leading-snug">
                    {hospital.name}
                  </h3>

                  <p className="text-xs text-[#6B7270] mb-3 line-clamp-2">
                    {hospital.campusNote}
                  </p>

                  {/* Featured Units Chips */}
                  <div className="mb-4">
                    <div className="text-[10px] uppercase font-semibold text-[#6B7270] mb-1.5 tracking-wider">
                      Öne Çıkan Yataklı Servisler:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {hospital.featuredUnits.slice(0, 3).map((unit, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#E9E4D9] text-[#252827] text-[11px] rounded-[4px] border border-[#DDD7CB]"
                        >
                          {unit}
                        </span>
                      ))}
                      {hospital.featuredUnits.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[11px] text-[#6B7270]">
                          +{hospital.featuredUnits.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-[#DDD7CB] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveHospitalModal(hospital)}
                    className="text-xs font-semibold text-[#164A4A] hover:text-[#236565] underline underline-offset-4"
                  >
                    Protokol Detayları
                  </button>

                  <button
                    onClick={() => onSelectHospitalForInquiry(hospital)}
                    className="px-3 py-1.5 text-xs font-semibold text-[#F7F4EE] bg-[#164A4A] hover:bg-[#236565] rounded-[4px] transition-colors flex items-center"
                  >
                    <span>Talep Et</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12 bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px]">
            <Building2 className="w-10 h-10 text-[#6B7270] mx-auto mb-3" />
            <h4 className="font-heading text-base font-semibold text-[#252827]">
              Aradığınız kriterlere uygun hastane bulunamadı
            </h4>
            <p className="text-xs text-[#6B7270] mt-1 max-w-md mx-auto">
              Ankara’daki tüm kamu, üniversite ve özel hastanelerde refakatçi sağlayabiliyoruz. Doğrudan çağrı merkezimizle iletişime geçebilirsiniz.
            </p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold bg-[#164A4A] text-[#F7F4EE] rounded-[4px]"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>

      {/* Hospital Detail Modal */}
      {activeHospitalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252827]/40 backdrop-blur-xs">
          <div className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-lg">
            <button
              onClick={() => setActiveHospitalModal(null)}
              className="absolute top-4 right-4 p-1.5 text-[#6B7270] hover:text-[#252827] rounded-[4px] hover:bg-[#E9E4D9]"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="label-editorial text-[#6B7270] mb-1">
              ANKARA HASTANE REFAKAT PROTOKOLÜ
            </div>
            <h3 className="font-heading text-xl font-bold text-[#164A4A] mb-1">
              {activeHospitalModal.name}
            </h3>
            <p className="text-xs text-[#6B7270] mb-4 flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#164A4A]" />
              {activeHospitalModal.address}
            </p>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-[#E9E4D9] rounded-[4px] border border-[#DDD7CB]">
                <div className="font-semibold text-[#164A4A] uppercase tracking-wider text-[11px] mb-1">
                  Yerleşke & Kampüs Durumu
                </div>
                <p className="text-[#252827]">{activeHospitalModal.campusNote}</p>
              </div>

              <div>
                <h4 className="font-semibold text-[#164A4A] uppercase tracking-wider text-[11px] mb-2">
                  Bu Hastanedeki Özel Refakat Standartlarımız:
                </h4>
                <ul className="space-y-2">
                  {activeHospitalModal.protocols.map((proto, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-[#252827]">
                      <CheckCircle2 className="w-4 h-4 text-[#164A4A] shrink-0 mt-0.5" />
                      <span>{proto}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-[#164A4A] uppercase tracking-wider text-[11px] mb-2">
                  Sık Hizmet Verilen Yataklı Servisler:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeHospitalModal.featuredUnits.map((unit, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#F7F4EE] border border-[#DDD7CB] text-[#164A4A] font-medium rounded-[4px]"
                    >
                      {unit}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#DDD7CB] flex items-center justify-between">
              <span className="text-xs text-[#6B7270]">
                Mevcut Onaylı Kadro: <strong className="text-[#164A4A]">{activeHospitalModal.availableCompanionsCount} Refakatçi</strong>
              </span>

              <button
                onClick={() => {
                  const hosp = activeHospitalModal;
                  setActiveHospitalModal(null);
                  onSelectHospitalForInquiry(hosp);
                }}
                className="px-4 py-2 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] text-xs font-semibold rounded-[4px] transition-colors"
              >
                Bu Hastaneye Refakatçi İste
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
