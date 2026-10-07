import React, { useState, useEffect } from 'react';
import { HOSPITALS, ANKARA_DISTRICTS } from '../data/mockData';
import { X, CheckCircle2, ShieldCheck, ArrowRight, MessageSquare, Phone, Calendar, User, HeartPulse } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Record<string, unknown> | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    patientName: '',
    patientAge: '',
    locationType: 'hospital' as 'hospital' | 'home',
    hospitalName: HOSPITALS[0].name,
    district: 'Çankaya',
    serviceType: 'Gündüz Hastane Refakati (08:00 - 18:00)',
    patientCondition: 'Destekle Yürüyen / Yürüteç - Tekerlekli Sandalye',
    startDate: new Date().toISOString().split('T')[0],
    durationDays: '3',
    genderPreference: 'any' as 'any' | 'female' | 'male',
    notes: '',
    kvkkConsent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  // Prefill when opened with initialData
  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        locationType: (initialData.locationType as 'hospital' | 'home') || prev.locationType,
        hospitalName: (initialData.targetLocation as string) || (initialData.hospitalName as string) || prev.hospitalName,
        serviceType: (initialData.serviceTitle as string) || (initialData.serviceType as string) || prev.serviceType,
        patientCondition: (initialData.conditionTitle as string) || prev.patientCondition,
        durationDays: initialData.days ? String(initialData.days) : prev.durationDays,
        notes: (initialData.notes as string) || prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `ANK-${Math.floor(1000 + Math.random() * 9000)}`;
    setInquiryCode(randomCode);
    setIsSubmitted(true);
  };

  const getWhatsAppDirectLink = () => {
    const loc = formData.locationType === 'hospital' ? formData.hospitalName : `Evde (${formData.district} / Ankara)`;
    const text = `Merhaba AnkaraRefakat Koordinatörü,\nTalep Kodu: ${inquiryCode}\n\n• Ad Soyad: ${formData.fullName}\n• Telefon: ${formData.phone}\n• Hasta: ${formData.patientName} (${formData.patientAge} Yaş)\n• Yer: ${loc}\n• Hizmet: ${formData.serviceType}\n• Durum: ${formData.patientCondition}\n• Süre: ${formData.durationDays} Gün\n• Başlangıç: ${formData.startDate}\n• Not: ${formData.notes || 'Yok'}\n\nLütfen uygun refakatçi durumunu teyit eder misiniz?`;
    return `https://wa.me/905324270606?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#252827]/40 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-[#6B7270] hover:text-[#252827] rounded-[4px] hover:bg-[#E9E4D9]"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="pb-4 border-b border-[#DDD7CB] mb-5">
              <div className="label-editorial text-[#6B7270] mb-1">
                ANKARA REFAKATÇİ TALEP FORMU
              </div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#164A4A]">
                Refakat Hizmeti Ön Başvurusu
              </h2>
              <p className="text-xs text-[#6B7270] mt-1">
                Aşağıdaki bilgileri ilettiğinizde koordinatörümüz 15 dakika içerisinde hastanın servis kurallarına uygun onaylı refakatçi eşleştirmesi için sizi arayacaktır.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Row 1: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Adınız ve Soyadınız (Hasta Yakını) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz"
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] p-2.5 text-xs text-[#252827]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    İletişim Telefon Numaranız *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0 (5XX) XXX XX XX"
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] p-2.5 text-xs text-[#252827]"
                  />
                </div>
              </div>

              {/* Row 2: Patient Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Hastanın Adı & Soyadı *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="Örn: Mehmet Bey"
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] p-2.5 text-xs text-[#252827]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Hastanın Yaşı
                  </label>
                  <input
                    type="text"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    placeholder="Örn: 74"
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] p-2.5 text-xs text-[#252827]"
                  />
                </div>
              </div>

              {/* Row 3: Location Setting */}
              <div className="p-3 bg-[#F7F4EE] rounded-[6px] border border-[#DDD7CB] space-y-2.5">
                <div className="font-semibold text-[#164A4A] text-xs">
                  Hizmet Yeri Tercihi:
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="locationType"
                      checked={formData.locationType === 'hospital'}
                      onChange={() => setFormData({ ...formData, locationType: 'hospital' })}
                      className="accent-[#164A4A]"
                    />
                    <span className="font-medium text-[#252827]">Hastanede Yatan Hasta</span>
                  </label>

                  <label className="flex items-center space-x-1.5 cursor-pointer">
                    <input
                      type="radio"
                      name="locationType"
                      checked={formData.locationType === 'home'}
                      onChange={() => setFormData({ ...formData, locationType: 'home' })}
                      className="accent-[#164A4A]"
                    />
                    <span className="font-medium text-[#252827]">Evde Bakım / Nekahat</span>
                  </label>
                </div>

                {formData.locationType === 'hospital' ? (
                  <select
                    value={formData.hospitalName}
                    onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[4px] p-2 text-xs text-[#252827]"
                  >
                    {HOSPITALS.map((hosp) => (
                      <option key={hosp.id} value={hosp.name}>
                        {hosp.name} ({hosp.district})
                      </option>
                    ))}
                  </select>
                ) : (
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[4px] p-2 text-xs text-[#252827]"
                  >
                    {ANKARA_DISTRICTS.map((dist) => (
                      <option key={dist} value={dist}>
                        {dist} İlçesi / Ankara
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Row 4: Service Type and Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Hizmet Modeli
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] p-2.5 text-xs text-[#252827]"
                  >
                    <option value="Gündüz Hastane Refakati (08:00 - 18:00)">Gündüz Hastane Refakati (08:00 - 18:00)</option>
                    <option value="Poliklinik & Tetkik Eşliği (4-6 Saat)">Poliklinik & Tetkik Eşliği (4-6 Saat)</option>
                    <option value="Evde Nekahat & Yaşlı Eşliği (Gündüz)">Evde Nekahat & Yaşlı Eşliği (Gündüz)</option>
                    <option value="24 Saat Kesintisiz Nöbetli Refakat">24 Saat Kesintisiz Nöbetli Refakat</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Tahmini Gün Sayısı
                  </label>
                  <select
                    value={formData.durationDays}
                    onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] p-2.5 text-xs text-[#252827]"
                  >
                    <option value="1">1 Gün (Tek Seferlik)</option>
                    <option value="3">3 Gün (Ameliyat Nekahati)</option>
                    <option value="5">5 Gün</option>
                    <option value="7">7 Gün (1 Hafta)</option>
                    <option value="14">14 Gün (2 Hafta)</option>
                    <option value="30">30 Gün (1 Ay ve Üzeri)</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Start Date and Gender Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Başlama Tarihi
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] p-2.5 text-xs text-[#252827]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#252827] mb-1">
                    Refakatçi Cinsiyet Tercihi
                  </label>
                  <select
                    value={formData.genderPreference}
                    onChange={(e) => setFormData({ ...formData, genderPreference: e.target.value as 'any' | 'female' | 'male' })}
                    className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] rounded-[6px] p-2.5 text-xs text-[#252827]"
                  >
                    <option value="any">Fark Etmez (En Uygun Kadro)</option>
                    <option value="female">Kadın Refakatçi</option>
                    <option value="male">Erkek Refakatçi</option>
                  </select>
                </div>
              </div>

              {/* Row 6: Notes */}
              <div>
                <label className="block font-semibold text-[#252827] mb-1">
                  Klinik Durum / Tanı / Ameliyat Notları (İsteğe Bağlı)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Örn: Kalça protezi ameliyatı oldu, yürüteçle ayağa kaldırılması gerekiyor..."
                  className="w-full bg-[#FFFFFF] border border-[#DDD7CB] focus:border-[#164A4A] focus:outline-none rounded-[6px] p-2.5 text-xs text-[#252827]"
                />
              </div>

              {/* KVKK Checkbox */}
              <div className="flex items-start space-x-2 pt-1">
                <input
                  type="checkbox"
                  required
                  id="kvkk"
                  checked={formData.kvkkConsent}
                  onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                  className="mt-0.5 accent-[#164A4A]"
                />
                <label htmlFor="kvkk" className="text-[11px] text-[#6B7270] leading-tight cursor-pointer">
                  Hastane refakatçi koordinasyonu kapsamında paylaştığım bilgilerin KVKK ve Hasta Hakları Mevzuatı uyarınca işlenmesini kabul ediyorum.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-[#DDD7CB] flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-xs"
                >
                  <span>Talebi İlet (15 Dakikada Geri Dönüş)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:03124270606"
                  className="py-3 px-4 border border-[#164A4A] text-[#164A4A] hover:bg-[#E9E4D9] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Acil Çağrı</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 bg-[#E9E4D9] text-[#164A4A] rounded-full flex items-center justify-center mx-auto border border-[#DDD7CB]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-[10px] font-bold tracking-widest text-[#164A4A] uppercase bg-[#E9E4D9] px-2.5 py-1 rounded-[3px] border border-[#DDD7CB]">
                TALEP KODU: {inquiryCode}
              </span>
              <h3 className="font-heading text-2xl font-bold text-[#164A4A] mt-2">
                Talebiniz Kaydedildi
              </h3>
              <p className="text-xs text-[#6B7270] max-w-md mx-auto mt-1 leading-relaxed">
                Sayın <strong>{formData.fullName}</strong>, başvurunuz AnkaraRefakat Nöbetçi Koordinatörlüğüne ulaştı. 15 dakika içerisinde <strong>{formData.phone}</strong> numaranızdan aranacaksınız.
              </p>
            </div>

            {/* Summary Box */}
            <div className="p-4 bg-[#F7F4EE] rounded-[6px] border border-[#DDD7CB] text-xs text-left space-y-1.5 max-w-md mx-auto">
              <div>
                <span className="text-[#6B7270]">Hasta: </span>
                <strong className="text-[#164A4A]">{formData.patientName}</strong>
              </div>
              <div>
                <span className="text-[#6B7270]">Hizmet Yeri: </span>
                <strong className="text-[#252827]">
                  {formData.locationType === 'hospital' ? formData.hospitalName : `Ev Ortamı (${formData.district})`}
                </strong>
              </div>
              <div>
                <span className="text-[#6B7270]">Hizmet Türü: </span>
                <strong className="text-[#252827]">{formData.serviceType} ({formData.durationDays} Gün)</strong>
              </div>
            </div>

            {/* Direct WhatsApp Action for instant transfer */}
            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
              <a
                href={getWhatsAppDirectLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 bg-[#164A4A] hover:bg-[#236565] text-[#F7F4EE] text-xs font-semibold rounded-[6px] flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Bu Talebi WhatsApp ile Gönder</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 px-4 bg-[#FFFFFF] border border-[#DDD7CB] hover:bg-[#E9E4D9] text-[#252827] text-xs font-semibold rounded-[6px]"
              >
                Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
