import React from 'react';
import { PhoneCall, UserCheck, MessageSquare, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const ProtocolTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Ön Değerlendirme & Hasta İhtiyaç Analizi',
      time: 'İlk 15 Dakika',
      desc: 'Koordinatörümüzle hastanın yattığı hastane, servis, tanı ve hareket kısıtlarını (ör. kalça protezi, onkoloji veya demans) netleştiriyoruz.',
      icon: PhoneCall
    },
    {
      step: '02',
      title: 'Onaylı Refakatçi Eşleştirmesi & Servise İntikal',
      time: '90 - 120 Dakika',
      desc: 'Hastanın profil ve cinsiyet tercihine uygun, tecrübeli refakatçimiz hastaneye ulaşır, aileyle veya servis sekreterliğiyle refakat kartını teslim alır.',
      icon: UserCheck
    },
    {
      step: '03',
      title: '3 Vakit Dijital Bilgilendirme Raporu',
      time: 'Gün Boyunca',
      desc: 'Sabah hekim viziti notları, öğle yemeği & mobilizasyon mesafesi ve öğleden sonraki genel huzur durumu WhatsApp ile aileye aktarılır.',
      icon: MessageSquare
    },
    {
      step: '04',
      title: 'Güvenli Nöbet Teslimi & Kalite Takibi',
      time: 'Hizmet Sonu & Nöbet Devri',
      desc: 'Günün sonunda aileye veya gece nöbetçisine oda düzeni ve hasta teslim edilir. Memnuniyet anketiyle süreç kesintisiz güvenceye alınır.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full py-14 sm:py-20 border-b border-[#DDD7CB] bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#DDD7CB]">
          <div>
            <div className="label-editorial text-[#6B7270] mb-1">
              DÖRT AŞAMALI GÜVEN PROTOKOLÜ
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#164A4A]">
              Süreç Nasıl İşler? Adım Adım Refakat.
            </h2>
          </div>
          <p className="text-sm text-[#6B7270] max-w-md">
            Acil ya da planlı tüm refakat ihtiyaçlarınızda belirsizlikleri ortadan kaldıran şeffaf operasyon akışımız.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#FFFFFF] border border-[#DDD7CB] rounded-[8px] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[#164A4A]">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-[#164A4A] bg-[#E9E4D9] px-2 py-0.5 rounded-[4px] border border-[#DDD7CB]">
                      {item.time}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-[6px] bg-[#E9E4D9] flex items-center justify-center text-[#164A4A] mb-3 border border-[#DDD7CB]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-base font-semibold text-[#164A4A] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#6B7270] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DDD7CB] flex items-center text-[11px] font-semibold text-[#164A4A]">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-[#164A4A]" />
                  <span>Kurumsal Standart</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
