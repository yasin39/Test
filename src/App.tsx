/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceModels } from './components/ServiceModels';
import { HospitalDirectory } from './components/HospitalDirectory';
import { CompanionProfiles } from './components/CompanionProfiles';
import { DailyReportPreview } from './components/DailyReportPreview';
import { CompanionCalculator } from './components/CompanionCalculator';
import { ProtocolTimeline } from './components/ProtocolTimeline';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { KvkkModal } from './components/KvkkModal';
import { Hospital, ServiceModel, CompanionProfile } from './types';
import { Phone, MessageSquare, ShieldCheck, HeartPulse } from 'lucide-react';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryInitialData, setInquiryInitialData] = useState<Record<string, unknown> | null>(null);
  const [kvkkModalOpen, setKvkkModalOpen] = useState(false);

  const handleOpenInquiry = (initialData?: Record<string, unknown>) => {
    setInquiryInitialData(initialData || null);
    setInquiryModalOpen(true);
  };

  const handleSelectHospital = (hospital: Hospital) => {
    handleOpenInquiry({
      locationType: 'hospital',
      hospitalName: hospital.name,
      notes: `${hospital.name} (${hospital.district}) için refakatçi talebi.`
    });
  };

  const handleSelectService = (service: ServiceModel) => {
    handleOpenInquiry({
      serviceType: service.title,
      notes: `${service.code} - ${service.title} (${service.hours}) refakat modeli seçildi.`
    });
  };

  const handleSelectCompanion = (companion: CompanionProfile) => {
    handleOpenInquiry({
      genderPreference: companion.gender,
      notes: `Tercih edilen refakatçi: ${companion.name} (${companion.title}, ${companion.experienceYears} Yıl Deneyim).`
    });
  };

  const handlePlanCalculated = (planSummary: {
    locationType: 'hospital' | 'home';
    targetLocation: string;
    serviceTitle: string;
    conditionTitle: string;
    days: number;
    estimatedPrice: number;
  }) => {
    handleOpenInquiry({
      locationType: planSummary.locationType,
      targetLocation: planSummary.targetLocation,
      serviceTitle: planSummary.serviceTitle,
      conditionTitle: planSummary.conditionTitle,
      days: planSummary.days,
      notes: `Hesaplanan Plan: ${planSummary.days} Günlük ${planSummary.serviceTitle} (~${planSummary.estimatedPrice.toLocaleString('tr-TR')} TL).`
    });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById('hesaplayici');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHospitals = () => {
    const el = document.getElementById('hastaneler');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#252827] flex flex-col font-sans selection:bg-[#164A4A] selection:text-[#F7F4EE]">
      {/* Header */}
      <Header onOpenInquiry={handleOpenInquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 00 / Editorial Hero */}
        <Hero
          onOpenInquiry={handleOpenInquiry}
          onScrollToCalculator={scrollToCalculator}
          onScrollToHospitals={scrollToHospitals}
        />

        {/* 01 / Service Models (01 - 04) */}
        <ServiceModels onSelectService={handleSelectService} />

        {/* 02 / Ankara Hospital Hub & Network */}
        <HospitalDirectory onSelectHospitalForInquiry={handleSelectHospital} />

        {/* 03 / Verified Caregiver Staff & Profiles */}
        <CompanionProfiles onSelectCompanion={handleSelectCompanion} />

        {/* 04 / Transparent Daily Status Report Preview */}
        <DailyReportPreview />

        {/* 05 / Transparent Cost & Duration Plan Calculator */}
        <CompanionCalculator onPlanSelectedForInquiry={handlePlanCalculated} />

        {/* Process Protocol Timeline */}
        <ProtocolTimeline />

        {/* Ankara Family Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenKvkk={() => setKvkkModalOpen(true)}
      />

      {/* Mobile Sticky Quick Contact & Emergency Dock */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FFFFFF] border-t border-[#DDD7CB] p-2.5 flex items-center justify-between gap-2 shadow-lg">
        <a
          href="tel:03124270606"
          className="flex-1 py-2.5 px-3 bg-[#E9E4D9] text-[#164A4A] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-1.5 border border-[#DDD7CB]"
        >
          <Phone className="w-3.5 h-3.5 text-[#164A4A]" />
          <span>0312 427 06 06</span>
        </a>

        <button
          onClick={() => handleOpenInquiry()}
          className="flex-1 py-2.5 px-3 bg-[#164A4A] text-[#F7F4EE] rounded-[6px] text-xs font-semibold flex items-center justify-center space-x-1.5"
        >
          <HeartPulse className="w-3.5 h-3.5 text-[#87B8B8]" />
          <span>Refakatçi İste</span>
        </button>

        <a
          href="https://wa.me/905324270606"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-[#25D366]/10 text-emerald-800 rounded-[6px] border border-emerald-300"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-emerald-800" />
        </a>
      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialData={inquiryInitialData}
      />

      {/* KVKK / Privacy Modal */}
      <KvkkModal
        isOpen={kvkkModalOpen}
        onClose={() => setKvkkModalOpen(false)}
      />
    </div>
  );
}
