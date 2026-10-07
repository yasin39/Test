import { Hospital, ServiceModel, CompanionProfile, Testimonial, FaqItem, DailyReportSample } from '../types';

export const ANKARA_DISTRICTS = [
  'Çankaya',
  'Yenimahalle',
  'Keçiören',
  'Mamak',
  'Etimesgut',
  'Altındağ',
  'Sincan',
  'Gölbaşı',
  'Pursaklar'
];

export const HOSPITALS: Hospital[] = [
  {
    id: 'bilkent-sehir',
    name: 'Ankara Bilkent Şehir Hastanesi',
    shortName: 'Bilkent Şehir',
    type: 'sehir',
    district: 'Çankaya',
    address: 'Üniversiteler Mah. 1604. Cad. No:9 Çankaya / Ankara',
    campusNote: 'Genel, Kalp Damar, Onkoloji, Nöroloji ve Fizik Tedavi Kulelerinde 24 Saat Aktif',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 6,
    featuredUnits: ['Genel Cerrahi', 'Onkoloji Kulesi', 'Ortopedi & Travmatoloji', 'Nöroloji / İnme', 'FTR Kampüsü'],
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Girişte refakatçi kartı teslim koordinasyonu',
      'Kat ve kule arası transferde tekerlekli sandalye desteği',
      'Vizit saatlerinde hekim bilgi notu kaydı',
      'Başhemşirelik talimatlarına %100 uyum'
    ]
  },
  {
    id: 'hacettepe-tip',
    name: 'Hacettepe Üniversitesi Erişkin ve Onkoloji Hastanesi',
    shortName: 'Hacettepe Sıhhiye',
    type: 'universite',
    district: 'Altındağ / Sıhhiye',
    address: 'Hacettepe Mah. Sıhhiye Yerleşkesi Altındağ / Ankara',
    campusNote: 'Erişkin Hastanesi, Onkoloji Hastanesi ve İhsan Doğramacı Yerleşkesi',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 4,
    featuredUnits: ['Medikal Onkoloji', 'Genel Cerrahi', 'Kardiyoloji', 'Göğüs Hastalıkları', 'Göz ve KBB'],
    imageUrl: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Kemoterapi seanslarında kesintisiz 4-6 saatlik yan eşlik',
      'Sıhhiye kampüs içi bölümler arası refakat ve evrak yönlendirme',
      'Kan alma, EKG ve radyoloji tetkiklerine tekerlekli sandalye ile eşlik',
      'Taburculukta reçete ve çıkış işlemlerine yardım'
    ]
  },
  {
    id: 'ibni-sina',
    name: 'Ankara Üniversitesi İbni Sina Araştırma ve Uygulama Hastanesi',
    shortName: 'AÜ İbni Sina',
    type: 'universite',
    district: 'Altındağ / Samanpazarı',
    address: 'Hacettepe Mah. Talatpaşa Bulvarı Samanpazarı / Ankara',
    campusNote: 'Cerrahi ve Dahili Bloklar, Yataklı Servisler',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 3,
    featuredUnits: ['Ortopedi & Travmatoloji', 'Beyin ve Sinir Cerrahisi', 'Gastroenteroloji', 'Nefroloji'],
    imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Ameliyat sonrası erken dönem mobilizasyon yürüyüşleri',
      'Dahiliye ve cerrahi kat servislerinde hasta pozisyonlama',
      'Beslenme ve hidrasyon saatlerinin disiplinli takibi'
    ]
  },
  {
    id: 'etlik-sehir',
    name: 'Ankara Etlik Şehir Hastanesi',
    shortName: 'Etlik Şehir',
    type: 'sehir',
    district: 'Yenimahalle / Keçiören',
    address: 'Varlık Mah. Halil Sezai Erkut Cad. Yenimahalle / Ankara',
    campusNote: 'Genel, Kadın Doğum, Çocuk, Kalp Damar ve Onkoloji Hastaneleri',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 5,
    featuredUnits: ['Kardiyoloji & KVC', 'Genel Cerrahi', 'Girişimsel Radyoloji', 'Fizik Tedavi'],
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Geniş kampüs alanında hasta odasından tetkik merkezine hızlı ulaşım',
      'Gündüz nöbetinde hekim ve hemşire bilgilendirmelerinin aileye aktarımı',
      'Hijyen ve kişisel özbakım desteği'
    ]
  },
  {
    id: 'gulhane-eah',
    name: 'Sağlık Bilimleri Üniversitesi Gülhane EAH (GATA)',
    shortName: 'Gülhane EAH',
    type: 'kamu',
    district: 'Keçiören / Etlik',
    address: 'General Dr. Tevfik Sağlam Cad. Keçiören / Ankara',
    campusNote: 'Gazi Uyum Merkezi ve Cerrahi Yataklı Servisler',
    coverageLevel: '2 Saat İçinde Sevkiyat',
    availableCompanionsCount: 3,
    featuredUnits: ['Ortopedi & Gaziler FTR', 'Genel Cerrahi', 'Nöroloji', 'Göğüs Cerrahisi'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Fizik tedavi ve rehabilitasyon egzersizlerinde gözetmen eşliği',
      'Yürüteç veya bastonla oda içi güvenli koridor yürüyüşleri',
      'Yatak yarası önleme amaçlı düzenli pozisyon değişimi'
    ]
  },
  {
    id: 'baskent-hastanesi',
    name: 'Başkent Üniversitesi Ankara Hastanesi',
    shortName: 'Başkent Bahçelievler',
    type: 'universite',
    district: 'Çankaya / Bahçelievler',
    address: 'Mareşal Fevzi Çakmak Cad. 10. Sok. No:45 Bahçelievler / Ankara',
    campusNote: 'Ana Bina, Ek Poliklinikler ve Onkoloji Merkezi',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 4,
    featuredUnits: ['Organ Nakli', 'Medikal Onkoloji', 'Kardiyovasküler Cerrahi', 'Geriatri'],
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Özel ve yarı-özel odalarda saygılı ve sessiz refakat protokolü',
      'Diyetisyen önerilerine uygun porsiyonlama ve su tüketimi kaydı',
      'Aileye gün içi 3 seans düzenli durum bildirimi'
    ]
  },
  {
    id: 'gazi-tip',
    name: 'Gazi Üniversitesi Tıp Fakültesi Hastanesi',
    shortName: 'Gazi Beşevler',
    type: 'universite',
    district: 'Yenimahalle / Beşevler',
    address: 'Emniyet Mah. Mevlana Bulvarı No:29 Beşevler / Ankara',
    campusNote: 'Erişkin Yataklı Blokları ve Ameliyathane Katları',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 3,
    featuredUnits: ['Genel Cerrahi', 'Beyin Cerrahisi', 'Ortopedi', 'Dahiliye'],
    imageUrl: 'https://images.unsplash.com/photo-1519494080410-f9ab76cb1066?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Operasyon sonrası ilk 24-48 saat yoğun başucu gözetimi',
      'Serum ve dren durumunun görsel kontrolü ve hemşireye anında haber verilmesi',
      'Moral ve psikolojik dinginlik sağlayan nezih iletişim'
    ]
  },
  {
    id: 'guven-hastanesi',
    name: 'Ankara Güven Hastanesi (Ayrancı & Çayyolu)',
    shortName: 'Güven Ayrancı',
    type: 'ozel',
    district: 'Çankaya / Ayrancı',
    address: 'Şimşek Sok. No:29 Kavaklıdere - Ayrancı / Ankara',
    campusNote: 'Ayrancı Merkez Kampüs ve Çayyolu Sağlık Kampüsü',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 4,
    featuredUnits: ['VIP Yataklı Servisler', 'Cerrahi Yoğun Bakım Sonrası', 'Kardiyoloji', 'Onkoloji'],
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Hassas VIP hasta bakım standartlarına tam entegrasyon',
      'Özel hemşirelik ekibiyle koordineli çalışma',
      'Gizlilik ve mahremiyet sözleşmeli personel'
    ]
  },
  {
    id: 'tobb-etu',
    name: 'TOBB ETÜ Hastanesi',
    shortName: 'TOBB Söğütözü',
    type: 'ozel',
    district: 'Çankaya / Söğütözü',
    address: 'Yasemin Cad. No:5 Söğütözü / Ankara',
    campusNote: 'Söğütözü Kampüsü',
    coverageLevel: 'Tam Gün Aktif',
    availableCompanionsCount: 2,
    featuredUnits: ['Kardiyoloji', 'Ortopedi', 'Genel Cerrahi', 'Göz Hastalıkları'],
    imageUrl: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=800&q=80',
    protocols: [
      'Butik sağlık protokollerine uygun nezih refakat',
      'Taburculuk hazırlığı ve araç transfer eşliği'
    ]
  }
];

export const SERVICE_MODELS: ServiceModel[] = [
  {
    id: 'servis-hastane-gunduz',
    code: '01 / HASTANE',
    title: 'Gündüz Hastane Refakati',
    shortDesc: 'Hastanede yatan yakınınızın yanında 08:00 - 18:00 saatleri arasında hekim viziti, tetkik, mobilizasyon ve özbakım refakati.',
    hours: '08:00 - 18:00 (10 Saat)',
    timingBadge: 'Gündüz 10 Saat',
    suitableFor: 'Ameliyat sonrası ilk 3-5 gün, onkoloji yatışları, ortopedik cerrahi sonrası yatak içi destek.',
    scopeList: [
      'Sabah hekim vizitini dinleme, istekleri ve hekim önerilerini aileye iletme',
      'Fizyoterapist veya hemşire gözetiminde yatak içi döndürme ve koridor yürüyüşü',
      'Yemek saati beslenme yardımı, su tüketimi ve ağız bakımı desteği',
      'Gerektiğinde kat görevlisi veya servis hemşiresine anında haber verme',
      'Gün boyunca aileye 3 kez WhatsApp üzerinden yazılı ve fotoğraflı durum aktarımı'
    ],
    recommendedDuration: '3 - 7 Günlük Bloklar',
    imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'servis-tetkik-eslik',
    code: '02 / TETKİK & RANDEVU',
    title: 'Poliklinik, Tetkik ve Seans Eşliği',
    shortDesc: 'Hastanın evinden alınıp hastanedeki MR, tomografi, kemoterapi, kan tahlili veya heyet randevularına refakat edilip eve bırakılması.',
    hours: '08:30 - 14:30 (4-6 Saat Esnek)',
    timingBadge: '4 - 6 Saat Esnek',
    suitableFor: 'Kemoterapi günü refakati, üniversite hastanesi tahlil kuyrukları, göz veya ortopedi poliklinik muayeneleri.',
    scopeList: [
      'Kapıdan teslim alma (veya hastane girişinde karşılama)',
      'Tekerlekli sandalye temini ve servisler arası asansör/ulaşım idaresi',
      'Sıra takibi, tahlil tüpleri ve radyoloji barkodlarının teslimi',
      'Eczane ve reçete ilaçlarının temininde eşlik',
      'Güvenli bir şekilde eve geri dönüş ve aileye eksiksiz teslimat'
    ],
    recommendedDuration: 'Günlük Randevu Başına',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'servis-evde-nekahat',
    code: '03 / EVDE BAKIM',
    title: 'Evde Nekahat ve Sosyal Eşlik',
    shortDesc: 'Taburculuk sonrası evde iyileşme sürecinde ya da yalnız yaşayan kıdemli büyüklerimizin gündüz saatlerinde güvenliği ve refahı.',
    hours: '09:00 - 17:00 / 08:30 - 18:30',
    timingBadge: 'Ev Ortamı / Gündüz',
    suitableFor: 'Kalça kırığı sonrası ev nekahati, hafif demans/unutkanlık gözetimi, taburculuk sonrası ilk haftalar.',
    scopeList: [
      'Düşme riski önleme ve evin içinde güvenli mobilizasyon gözetimi',
      'Hekim tarafından reçete edilmiş ilaçların saatinde alınmasının hatırlatılması',
      'Hafif öğün ısıtma, çorba ve beslenme desteği, su dengesi takibi',
      'Bilişsel sohbet, gazete/kitap okuma, moral ve ruhsal esenlik sağlama',
      'Haftalık aile takip çizelgesi ve genel sağlık eğilim notları'
    ],
    recommendedDuration: '1 Hafta - 1 Ay ve Üzeri',
    imageUrl: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'servis-kesintisiz-nobet',
    code: '04 / 24 SAAT NÖBET',
    title: '24 Saat Kesintisiz Çift Nöbet Refakati',
    shortDesc: 'Yoğun bakım sonrası ya da kritik ilk 72 saatte, biri dinlenirken diğeri uyanık kalarak 12+12 saatlik kesintisiz başucu desteği.',
    hours: '24 Saat (12 + 12 Saat İki Refakatçi)',
    timingBadge: 'Kesintisiz 24 Saat',
    suitableFor: 'Ağır cerrahi geçiren hastalar, solunum desteği olan odalar, ailenin şehir dışında olduğu acil durumlar.',
    scopeList: [
      'Tek bir refakatçinin yorulup uyuyakalmasını engelleyen 2’li nöbet sistemi',
      'Gece boyunca düşme, yataktan kalkma girişimlerini engelleme ve pozisyon verme',
      'Sabah ve akşam nöbet tesliminde detaylı sağlık ve hekim notları devri',
      '24 saat koordinasyon merkezimizce saatlik durum kontrol araması'
    ],
    recommendedDuration: '2 - 10 Günlük Kritik Aralıklar',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80'
  }
];

export const COMPANIONS: CompanionProfile[] = [
  {
    id: 'ref-emine-kaya',
    name: 'Emine Kaya',
    title: 'Kıdemli Hasta & Yaşlı Refakatçisi',
    experienceYears: 12,
    age: 48,
    completedDays: 420,
    rating: 5.0,
    reviewCount: 38,
    districts: ['Çankaya', 'Yenimahalle', 'Altındağ'],
    primaryHospitals: ['Ankara Bilkent Şehir Hastanesi', 'Hacettepe Üniversitesi', 'Güven Hastanesi'],
    specialties: ['Ortopedi Mobilizasyonu', 'Ameliyat Sonrası Bakım', 'Geriatrik Özbakım'],
    certifications: ['Hasta & Yaşlı Özbakım MEB Sertifikası', 'Temel İlkyardım Yetki Belgesi', 'Hijyen Eğitimi Belgesi'],
    verifiedDate: 'Eylül 2026',
    bio: '12 yıldır Ankara’nın önde gelen üniversite ve kamu hastanelerinde refakat hizmeti sunmaktadır. Sessiz, dikkatli, hekim talimatlarına harfiyen uyan ve sabırlı yapısıyla tanınır.',
    avatarUrl: 'https://images.unsplash.com/photo-1594824813576-9214cf4c7b8e?auto=format&fit=crop&w=600&q=80',
    gender: 'female',
    isAvailableToday: true
  },
  {
    id: 'ref-selma-ozturk',
    name: 'Selma Öztürk',
    title: 'Onkoloji & Kronik Hasta Eşlik Uzmanı',
    experienceYears: 9,
    age: 44,
    completedDays: 310,
    rating: 4.9,
    reviewCount: 29,
    districts: ['Çankaya', 'Altındağ', 'Keçiören'],
    primaryHospitals: ['Hacettepe Onkoloji', 'AÜ İbni Sina', 'Başkent Üniversitesi'],
    specialties: ['Kemoterapi Süreç Refakati', 'Nütrisyon ve Sıvı Takibi', 'Moral & Bilişsel Destek'],
    certifications: ['Hasta Bakım Elemanı Sertifikası', 'İletişim ve Empati Eğitimi', 'Adli Sicil ve Sağlık Onayı'],
    verifiedDate: 'Ekim 2026',
    bio: 'Özellikle onkolojik tedavi gören ve uzun süreli hastane yatışı bulunan hastalarımızda ailelerin en güvendiği isimlerdendir. Pozitif, düzenli ve titizdir.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    gender: 'female',
    isAvailableToday: true
  },
  {
    id: 'ref-murat-yilmaz',
    name: 'Murat Yılmaz',
    title: 'Cerrahi Mobilizasyon Refakatçisi',
    experienceYears: 8,
    age: 41,
    completedDays: 285,
    rating: 5.0,
    reviewCount: 24,
    districts: ['Yenimahalle', 'Çankaya', 'Etimesgut'],
    primaryHospitals: ['Bilkent Şehir Hastanesi', 'Etlik Şehir', 'Gazi Üniversitesi'],
    specialties: ['Ağır Hasta Transferi', 'Yatak İçi Pozisyonlama', 'Fizik Tedavi Yardımı'],
    certifications: ['Hasta Taşıma ve Mobilizasyon Eğitimi', 'İlkyardımcı Sertifikası', 'Sağlık Kurulu Onay Belgesi'],
    verifiedDate: 'Ağustos 2026',
    bio: 'Erkek hastaların ameliyat sonrası yürüme, ayağa kalkma ve koridor turlarında fiziksel güç ve teknik bilgi gerektiren süreçlerde güven verir. Saygılı ve dakiktir.',
    avatarUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
    gender: 'male',
    isAvailableToday: true
  },
  {
    id: 'ref-fatma-demir',
    name: 'Fatma Demir',
    title: 'Demans & Nöroloji Refakatçisi',
    experienceYears: 14,
    age: 51,
    completedDays: 520,
    rating: 4.9,
    reviewCount: 46,
    districts: ['Çankaya', 'Gölbaşı', 'Yenimahalle'],
    primaryHospitals: ['Güven Hastanesi', 'TOBB ETÜ', 'Başkent Üniversitesi'],
    specialties: ['Demans & Alzheimer İletişimi', 'Evde Nekahat Eşliği', 'İlaç Rutini Yönetimi'],
    certifications: ['Geriatri Bakım Sertifikası', 'Hasta Hakları ve Etik Eğitimi', 'Düzenli Sağlık Portör Taraması'],
    verifiedDate: 'Eylül 2026',
    bio: '14 yıldır hem hastanede hem evde ileri yaştaki bireylere şefkat ve nezaketle yoldaşlık etmektedir. Ailelerin gözünü arkada bırakmayan sakin ve tecrübeli bir duruşa sahiptir.',
    avatarUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
    gender: 'female',
    isAvailableToday: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Prof. Dr. Ahmet K.',
    district: 'Çankaya / Gaziosmanpaşa',
    hospital: 'Bilkent Şehir Hastanesi (KVC Servisi)',
    serviceType: 'Gündüz 10 Saat Refakat (5 Gün)',
    date: 'Eylül 2026',
    quote: 'Annemin açık kalp ameliyatı sonrası yoğun bakımdan odaya çıktığı kritik günlerde Emine Hanım ile çalıştık. Kendisi hekim vizitlerini harfiyen dinledi, bize gün içinde saat saat bilgi verdi. AnkaraRefakat’ın kurumsal duruşu ve disiplini bizi inanılmaz rahatlattı.',
    patientContext: '76 Yaşında Bayan Hasta, Kalp Ameliyatı Sonrası'
  },
  {
    id: 'test-2',
    author: 'Zeynep B. (Yüksek Mimar)',
    district: 'Çankaya / Ayrancı',
    hospital: 'Hacettepe Üniversitesi Onkoloji',
    serviceType: 'Kemoterapi & Tetkik Eşliği',
    date: 'Ağustos 2026',
    quote: 'Babamın Hacettepe’deki zorlu kemoterapi günlerinde iş toplantılarım nedeniyle yanında bulunamadığım anlar oluyordu. Selma Hanım babamı evden alıp hastaneye götürdü, tekerlekli sandalyeyle her kapıyı açtı, moral verdi. Gerçek bir aile şefkati gösterdi.',
    patientContext: '71 Yaşında Erkek Hasta, Medikal Onkoloji'
  },
  {
    id: 'test-3',
    author: 'Burak & Deniz T.',
    district: 'Yenimahalle / Çayyolu',
    hospital: 'AÜ İbni Sina Hastanesi',
    serviceType: 'Ortopedi Cerrahisi Sonrası 7 Gün',
    date: 'Ekim 2026',
    quote: 'Babamızın kalça protezi ameliyatı sonrası Murat Bey refakatçimiz oldu. İri yapılı bir hastayı ayağa kaldırmak teknik bilgi ister; Murat Bey hemşirelerle tam bir uyum içinde çalıştı, düşme riskini sıfıra indirdi. Ankara’da böylesi saygın bir hizmet büyük bir nimet.',
    patientContext: '82 Yaşında Erkek Hasta, Kalça Protezi'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'guvenlik',
    question: 'Refakatçi kadronuz hangi güvenlik ve yeterlilik taramalarından geçiyor?',
    answer: 'Tüm personelimiz istihdam öncesinde güncel adli sicil kaydı (e-Devlet onaylı), bulaşıcı hastalık ve hepatit/akciğer taramasını içeren sağlık heyet raporu, MEB onaylı Hasta/Yaşlı Bakım Sertifikası ve en az 3 doğrulanmış hekim/aile referansı ile kadromuza dahil edilir. Tüm çalışanlarımızla gizlilik ve hasta mahremiyeti sözleşmesi imzalanır.'
  },
  {
    id: 'faq-2',
    category: 'hastane',
    question: 'Hastanelerde refakatçi kartı ve giriş izinlerini nasıl organize ediyorsunuz?',
    answer: 'Ankara’daki Bilkent Şehir, Hacettepe, İbni Sina, Gülhane ve özel hastanelerin hasta yatış ve servis idari süreçlerine tamamen hakimiz. Refakatçimiz göreve başlamadan önce hastane girişinde veya katta aileyle buluşarak servis sekreterliğinden adınıza refakatçi kartını alır veya tarafınızca teslim edilen karta göre başhemşireliğe kaydını yaptırır.'
  },
  {
    id: 'faq-3',
    category: 'surec',
    question: 'Aynı gün içinde acil refakatçi yönlendirebiliyor musunuz?',
    answer: 'Evet. Ankara merkez ilçelerinde (Çankaya, Yenimahalle, Keçiören, Mamak, Altındağ) rezervde bulunan nöbetçi onaylı refakatçilerimiz sayesinde acil çağrılarda 90 ila 120 dakika içerisinde hastanede veya adreste hazır bulunabiliyoruz.'
  },
  {
    id: 'faq-4',
    category: 'ucret',
    question: 'Ücretlendirme politikası nasıldır ve ek masraflar çıkıyor mu?',
    answer: 'AnkaraRefakat’ta gizli masraf yoktur. Belirlenen gündüz (10 saat), 24 saat nöbet veya seanslık ücretler sabittir. Refakatçinin şehir içi ulaşımı ve yeme-içme masrafları prensip olarak tarafımızca organize edilir veya paket dahilinde şeffafça baştan teyit edilir.'
  },
  {
    id: 'faq-5',
    category: 'surec',
    question: 'Refakatçi ile hasta arasında uyumsuzluk olursa ne yapıyoruz?',
    answer: 'Memnuniyet ve güven esaslı çalışıyoruz. Nadiren de olsa hasta veya refakatçi arasında mizaç uyumsuzluğu yaşanması halinde, 24 saatlik koordinasyon birimimiz aynı gün içerisinde yedek kadromuzdan yeni bir onaylı refakatçi yönlendirmesini ücretsiz olarak gerçekleştirir.'
  },
  {
    id: 'faq-6',
    category: 'surec',
    question: 'Gün içinde aileye nasıl bilgi veriliyor?',
    answer: 'Refakatçilerimiz hastanın mahremiyetini zedelemeden sabah viziti sonrası (10:30), öğle yemeği ve ilaç alımı sonrası (14:30) ve akşam nöbet bitiminde (18:00) olmak üzere günde en az 3 kez WhatsApp üzerinden yazılı özet durum raporu iletir.'
  }
];

export const SAMPLE_DAILY_REPORT: DailyReportSample = {
  patientName: 'Ali Rıza Bey (74 Yaş)',
  companionName: 'Emine Kaya',
  hospitalName: 'Ankara Bilkent Şehir Hastanesi',
  roomNo: 'Onkoloji Kulesi, Kat 6, Oda 614',
  reportDate: '7 Ekim 2026',
  shifts: [
    {
      time: '08:15',
      label: 'Göreve Başlama & Sabah Özbakımı',
      note: 'Hasta odasına ulaşıldı. Yüz ve el temizliği yapıldı. Sabah tansiyonu servis hemşiresi tarafından ölçüldü (125/80), nabız 74.',
      vitalStatus: 'Stabil'
    },
    {
      time: '10:00',
      label: 'Hekim Viziti & Dinleme Notu',
      note: 'Prof. Dr. hocamız ve asistanlar vizit yaptı. Drenin yarın sabah çekilebileceğini, bugün koridorda 3 kez 10 dakikalık yavaş yürüyüş yapılmasını istedi. Sıvı alımı teşvik edildi.',
      vitalStatus: 'Olumlu'
    },
    {
      time: '12:30',
      label: 'Öğle Yemeği & Mobilizasyon',
      note: 'Diyet çorbası ve sebze püresi kaşık yardımıyla tüketildi, 2 bardak su içirildi. Koridorda kol kola 12 dakika rahat bir yürüyüş tamamlandı.',
      vitalStatus: 'Aktif'
    },
    {
      time: '15:45',
      label: 'İlaç Rutini & Dinlenme',
      note: 'Öğleden sonraki oral antibiyotik ve mide koruyucu hemşire eşliğinde içildi. 45 dakika sakin bir uyku uyudu. Morali yerinde.',
      vitalStatus: 'Huzurlu'
    },
    {
      time: '18:00',
      label: 'Akşam Teslimatı & Nöbet Sonu',
      note: 'Hasta yatağı havalandırıldı, temiz kıyafet giydirildi. Gece refakatçisi / aile üyesine oda düzeni ve günün notları teslim edildi.',
      vitalStatus: 'Eksiksiz Teslim'
    }
  ],
  doctorNotes: 'Dren takibi iyi gidiyor, yarın taburculuk planı netleştirilecek.',
  nutritionNote: 'Gün boyu 1.4 litre su, tam porsiyon çorba ve komposto tüketildi.',
  generalMood: 'Hasta sakin ve işbirliğine açık, yürüyüşlerde kendine güveni arttı.'
};
