'use client';

import React, { useState } from 'react';
import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PromoOfferBar from '@/components/PromoOfferBar';
import AboutSection from '@/components/AboutSection';
import ServicesSection, { HVAC_SERVICES, ServiceItem } from '@/components/ServicesSection';
import PromoBanners from '@/components/PromoBanners';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import EmergencySection from '@/components/EmergencySection';
import ServiceAreasSection, { SERVICE_AREAS, ServiceAreaItem } from '@/components/ServiceAreasSection';
import FinalCtaBanner from '@/components/FinalCtaBanner';
import Footer from '@/components/Footer';

// Modals & Floating Action Bar
import QuoteModal from '@/components/Modals/QuoteModal';
import BookingModal from '@/components/Modals/BookingModal';
import CouponModal from '@/components/Modals/CouponModal';
import FinancingModal from '@/components/Modals/FinancingModal';
import MaintenanceModal from '@/components/Modals/MaintenanceModal';
import ServiceDetailModal from '@/components/Modals/ServiceDetailModal';
import ServiceAreaModal from '@/components/Modals/ServiceAreaModal';
import FloatingActionBar from '@/components/FloatingActionBar';
import { PHONE_SMS } from '@/lib/utils';

export default function Home() {
  // Modal states
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  // Quick navigation handlers
  const handleSelectServiceByName = (name: string) => {
    const found = HVAC_SERVICES.find(
      (s) => s.title.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(s.id)
    );
    if (found) {
      setSelectedService(found);
    } else {
      setSelectedService(HVAC_SERVICES[0]);
    }
  };

  const handleSelectAreaByName = (areaName: string) => {
    const found = SERVICE_AREAS.find(
      (a) => a.name.toLowerCase().includes(areaName.toLowerCase()) || areaName.toLowerCase().includes(a.id)
    );
    if (found) {
      setSelectedArea(found);
    } else {
      setSelectedArea(SERVICE_AREAS[0]);
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. CONTINUOUSLY SCROLLING HVAC BRAND LOGOS */}
      <ManufacturerStrip />

      {/* 2. MAIN HEADER (Logo, Phone, 24/7 Badge, CTA Buttons) */}
      <MainHeader
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 3. MAIN NAVIGATION (Sticky bar with dropdowns & mega menu) */}
      <Navbar
        onSelectService={handleSelectServiceByName}
        onOpenCoupon={() => setIsCouponOpen(true)}
        onOpenFinancing={() => setIsFinancingOpen(true)}
        onOpenMaintenance={() => setIsMaintenanceOpen(true)}
        onOpenArea={handleSelectAreaByName}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPhotos={(cat) => {
          // Open booking or quote for project photo consultation
          setIsQuoteOpen(true);
        }}
      />

      {/* 4. SECTION 1 — HERO */}
      <HeroSection
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenTextUs={() => {
          if (typeof window !== 'undefined' && window.innerWidth < 768) {
            window.location.href = PHONE_SMS;
          } else {
            setIsQuoteOpen(true);
          }
        }}
      />

      {/* 5. SECTION 2 — PROMOTIONAL STRIP */}
      <PromoOfferBar
        onOpenCoupon={() => setIsCouponOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 6. SECTION 3 — ABOUT THE COMPANY & SECTION 4 — BUSINESS TRUST HIGHLIGHTS */}
      <AboutSection
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 7. SECTION 5 — HVAC SERVICES (6 Service Cards) */}
      <ServicesSection
        onSelectService={(service) => setSelectedService(service)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 8. SECTION 6 — FINANCING OPTIONS & SECTION 7 — HVAC SERVICE AGREEMENTS */}
      <PromoBanners
        onOpenFinancing={() => setIsFinancingOpen(true)}
        onOpenMaintenance={() => setIsMaintenanceOpen(true)}
      />

      {/* 9. SECTION 8 — CUSTOMER REVIEWS */}
      <TestimonialsSection />

      {/* 10. SECTION 9 — WHY CHOOSE US */}
      <WhyChooseUsSection />

      {/* 11. SECTION 10 — 24/7 EMERGENCY SERVICE */}
      <EmergencySection
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* 12. SECTION 11 — SERVICE AREAS */}
      <ServiceAreasSection
        onSelectArea={(area) => setSelectedArea(area)}
      />

      {/* 13. SECTION 12 — CONTACT CTA */}
      <FinalCtaBanner
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 14. COMPLETE RESPONSIVE FOOTER */}
      <Footer
        onSelectService={handleSelectServiceByName}
        onOpenArea={handleSelectAreaByName}
      />

      {/* 15. STICKY MOBILE CONTACT BAR */}
      <FloatingActionBar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenCoupon={() => setIsCouponOpen(true)}
      />

      {/* MODALS & POPUPS */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

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
