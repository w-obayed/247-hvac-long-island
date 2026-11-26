'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  FileText,
  Clock,
  CheckCircle2,
  Star,
  ChevronRight,
  ShieldCheck,
  FileCheck,
  Mail,
  Globe,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import PageBanner from '@/components/PageBanner';
import Footer from '@/components/Footer';
import FloatingActionBar from '@/components/FloatingActionBar';

import QuoteModal from '@/components/Modals/QuoteModal';
import BookingModal from '@/components/Modals/BookingModal';
import CouponModal from '@/components/Modals/CouponModal';
import FinancingModal from '@/components/Modals/FinancingModal';
import MaintenanceModal from '@/components/Modals/MaintenanceModal';
import ServiceDetailModal from '@/components/Modals/ServiceDetailModal';
import ServiceAreaModal from '@/components/Modals/ServiceAreaModal';

import { HVAC_SERVICES, ServiceItem } from '@/components/ServicesSection';
import { SERVICE_AREAS, ServiceAreaItem } from '@/components/ServiceAreasSection';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

export default function TermsOfServicePage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    setSelectedService(found || HVAC_SERVICES[0]);
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    setSelectedArea(found || SERVICE_AREAS[0]);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* GLOBAL HEADER & NAVIGATION */}
      <ManufacturerStrip />
      <MainHeader
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <Navbar
        onSelectService={handleSelectServiceByName}
        onOpenCoupon={() => setIsCouponOpen(true)}
        onOpenFinancing={() => setIsFinancingOpen(true)}
        onOpenMaintenance={() => setIsMaintenanceOpen(true)}
        onOpenArea={handleSelectAreaByName}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotos={() => setIsQuoteOpen(true)}
      />

      {/* BREADCRUMB */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-100 border-b border-slate-200/80 py-2.5 text-xs text-slate-600 font-body"
      >
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 flex items-center gap-1.5 font-medium">
          <Link href="/" className="hover:text-royal transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-navy font-bold">Terms of Service</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <PageBanner
        id="banner"
        badgeText="#1 HVAC Services in Long Island"
        title="Terms of Service"
        bullets={[
          { text: "Our Professional & Reliable Technicians Service This Area", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "24 Hours Emergency Service Available", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
          { text: "#1 HVAC Services in Long Island", icon: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-hvacGreen flex-shrink-0" /> },
        ]}
        showCallButton
        callButtonLabel="Call Us Now"
        onOpenQuote={() => setIsQuoteOpen(true)}
        quoteButtonLabel="Get A Free Quote"
      />

      {/* ========================================================================= */}
      {/* 2. TERMS OF SERVICE LEGAL CONTENT (EXACT SUPPLIED SECTIONS & CONTENT) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm space-y-10">
            {/* Header intro info */}
            <div className="border-b border-slate-200 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Agreement &amp; Terms</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy font-heading tracking-tight">
                Terms of Service Agreement
              </h2>
              <p className="text-sm text-slate-500 font-body mt-1">
                Please review these Terms of Service governing your use of our website and services.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Acceptance of Terms
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                By accessing or using the 247 HVAC of Long Island website, you agree to these Terms of Service. If you do not agree with these terms, please do not use the website.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Services
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                247 HVAC of Long Island provides heating, ventilation, and air conditioning services, including installation, repair, maintenance, and related services. The availability and scope of services may depend on the property, equipment, location, and individual service requirements.
              </p>
            </div>

            {/* Service Requests and Appointments */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Service Requests and Appointments
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Submitting a contact form or requesting an appointment through this website does not automatically confirm a service appointment. Appointment details and availability must be confirmed by the company.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Customers should provide accurate contact information and relevant details about their service requests.
              </p>
            </div>

            {/* Estimates and Pricing */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Estimates and Pricing
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Any estimates or pricing information provided through the website or during initial communication is subject to confirmation. Final pricing, scope of work, and any applicable charges should be confirmed with the company before work begins.
              </p>
            </div>

            {/* Payments and Service Agreements */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Payments and Service Agreements
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Payment terms, applicable charges, and any service-specific conditions will be communicated and agreed upon separately before or during the service engagement. Any written service agreement or approved estimate will govern the specific work agreed upon.
              </p>
            </div>

            {/* Website Use */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Website Use
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Visitors agree not to misuse the website, attempt unauthorized access, interfere with website operations, submit misleading information, or use the website for unlawful purposes.
              </p>
            </div>

            {/* Third-Party Links and Services */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Third-Party Links and Services
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                This website may contain links to third-party websites or services. 247 HVAC of Long Island does not control those external websites and is not responsible for their content, privacy practices, or availability.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Limitation of Liability
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                To the extent permitted by applicable law, 247 HVAC of Long Island is not responsible for losses arising from the use of this website, temporary website interruptions, or reliance on general website information. This section does not limit liability where such limitation is prohibited by law.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Changes to These Terms
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                247 HVAC of Long Island may update these Terms of Service from time to time. Updated terms will be published on this page. Continued use of the website after changes are published constitutes acceptance of the updated terms, to the extent permitted by applicable law.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Contact Information
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-2 font-body text-slate-700">
                <p className="font-bold text-navy font-heading text-lg">247 HVAC of Long Island</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-royal flex-shrink-0" />
                  <span>Phone:</span>
                  <a href={PHONE_TEL} className="text-royal font-bold hover:underline font-heading">
                    {PHONE_NUMBER}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-royal flex-shrink-0" />
                  <span>Email:</span>
                  <a href="mailto:info@247hvaclongisland.com" className="text-royal font-bold hover:underline">
                    info@247hvaclongisland.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-royal flex-shrink-0" />
                  <span>Website:</span>
                  <a href="https://247hvaclongisland.com/" className="text-royal font-bold hover:underline">
                    https://247hvaclongisland.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      {/* FLOATING ACTION BAR FOR MOBILE */}
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* MODALS */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <CouponModal
        isOpen={isCouponOpen}
        onClose={() => setIsCouponOpen(false)}
        onBookWithCoupon={() => setIsBookingOpen(true)}
      />
      <FinancingModal
        isOpen={isFinancingOpen}
        onClose={() => setIsFinancingOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <MaintenanceModal
        isOpen={isMaintenanceOpen}
        onClose={() => setIsMaintenanceOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      <ServiceAreaModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
    </main>
  );
}
