export type HospitalType = 'sehir' | 'universite' | 'kamu' | 'ozel';

export interface Hospital {
  id: string;
  name: string;
  shortName: string;
  type: HospitalType;
  district: string; // e.g. Çankaya, Yenimahalle, Mamak
  address: string;
  campusNote: string;
  coverageLevel: 'Tam Gün Aktif' | '2 Saat İçinde Sevkiyat' | 'Özel Protokol';
  availableCompanionsCount: number;
  featuredUnits: string[];
  imageUrl: string;
  protocols: string[];
}

export interface ServiceModel {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  hours: string;
  timingBadge: string;
  suitableFor: string;
  scopeList: string[];
  recommendedDuration: string;
  imageUrl: string;
}

export interface CompanionProfile {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  age: number;
  completedDays: number;
  rating: number;
  reviewCount: number;
  districts: string[];
  primaryHospitals: string[];
  specialties: string[];
  certifications: string[];
  verifiedDate: string;
  bio: string;
  avatarUrl: string;
  gender: 'female' | 'male';
  isAvailableToday: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  district: string;
  hospital: string;
  serviceType: string;
  date: string;
  quote: string;
  patientContext: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'surec' | 'guvenlik' | 'hastane' | 'ucret';
}

export interface DailyReportSample {
  patientName: string;
  companionName: string;
  hospitalName: string;
  roomNo: string;
  reportDate: string;
  shifts: {
    time: string;
    label: string;
    note: string;
    vitalStatus: string;
  }[];
  doctorNotes: string;
  nutritionNote: string;
  generalMood: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  patientName: string;
  patientAge: string;
  locationType: 'hospital' | 'home';
  hospitalId?: string;
  district?: string;
  serviceType: string;
  patientCondition: string;
  startDate: string;
  durationDays: number;
  notes: string;
  preferredCompanionGender: 'any' | 'female' | 'male';
}
