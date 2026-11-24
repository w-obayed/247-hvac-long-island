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
  Lock,
} from 'lucide-react';

import ManufacturerStrip from '@/components/ManufacturerStrip';
import MainHeader from '@/components/MainHeader';
import Navbar from '@/components/Navbar';
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

export default function PrivacyPolicyPage() {
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
          <span className="text-navy font-bold">Privacy Policy</span>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 1. BANNER SECTION (EXACT HOMEPAGE BANNER DESIGN REPLICATED) */}
      {/* ========================================================================= */}
      <section
        id="banner"
        className="relative bg-[#061A40] text-white overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20"
      >
        {/* Background Hero Image */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-60 sm:opacity-75 lg:opacity-85 overflow-hidden pointer-events-none">
          <Image
            src="/images/hero-hvac.jpg"
            alt="247 HVAC of Long Island Privacy Policy"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Background Subtle Gradient & Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Bullets, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">#1 HVAC Services in Long Island</span>
              </div>

              {/* Exact Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-4 text-white font-heading">
                Privacy Policy
              </h1>

              {/* 3 Bullet Points */}
              <div className="space-y-2.5 sm:space-y-3 w-full max-w-xl mb-6 sm:mb-8 font-heading">
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    Our Professional &amp; Reliable Technicians Service This Area
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    24 Hours Emergency Service Available
                  </span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-hvacGreen flex-shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-white">
                    #1 HVAC Services in Long Island
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading mb-6">
                <a
                  href={PHONE_TEL}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brightRed flex-shrink-0" />
                  <span>Call Us Now</span>
                </a>

                <button
                  onClick={() => setIsQuoteOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all uppercase tracking-wider min-h-[44px]"
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Get A Free Quote</span>
                </button>
              </div>

              {/* Quick Trust Reassurance */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm text-slate-300 font-body">
                <div className="flex items-center gap-1 text-brightYellow flex-shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-brightYellow" />
                  ))}
                </div>
                <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
                <span className="text-slate-400 hidden sm:inline">•</span>
                <span className="w-full sm:w-auto text-slate-300">Long Island 24/7 Coverage</span>
              </div>
            </div>

            {/* Right Column: Dispatch Status Card */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-[#0E2452]/90 to-[#061A40]/95 backdrop-blur-md p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">
                      Fast Dispatch
                    </span>
                    <h3 className="text-[24px] font-bold text-white font-heading">Emergency Mobile Units</h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                    <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                    <span>On Duty</span>
                  </div>
                </div>

                <div className="space-y-3 mb-5 font-body">
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Long Island
                      &amp; NYC Communities.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Licensed &amp; Certified:</strong> EPA
                      universal, OSHA compliant master technicians.
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Over 1,000 OEM
                      replacement parts on every service truck.
                    </span>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase font-bold text-slate-300 font-heading">Direct Emergency Line</p>
                    <a href={PHONE_TEL} className="text-xl font-black text-brightYellow hover:underline font-heading">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                  <a
                    href={PHONE_TEL}
                    className="px-3.5 py-2 rounded-lg bg-brightRed text-white font-bold text-xs uppercase tracking-wider hover:bg-brightRed-hover shadow font-heading"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PRIVACY POLICY LEGAL CONTENT (EXACT SUPPLIED HEADINGS & CONTENT) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 text-slate-800">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200/90 shadow-sm space-y-10">
            {/* Header intro info */}
            <div className="border-b border-slate-200 pb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-3 font-heading">
                <Lock className="w-3.5 h-3.5" />
                <span>Customer Data &amp; Trust</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy font-heading tracking-tight">
                Privacy Policy Overview
              </h2>
              <p className="text-sm text-slate-500 font-body mt-1">
                Please review our privacy practices and how we handle website information.
              </p>
            </div>

            {/* Who we are */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Who we are
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Our website address is 247hvaclongisland.com.
              </p>
            </div>

            {/* Comments */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Comments
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{' '}
                <a
                  href="https://automattic.com/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-royal hover:underline font-semibold"
                >
                  https://automattic.com/privacy/
                </a>
                . After approval of your comment, your profile picture is visible to the public in the context of your comment.
              </p>
            </div>

            {/* Media */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Media
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
              </p>
            </div>

            {/* Cookies */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Cookies
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
              </p>
            </div>

            {/* Embedded content from other websites */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Embedded content from other websites
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
              </p>
            </div>

            {/* Who we share your data with */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Who we share your data with
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                If you request a password reset, your IP address will be included in the reset email.
              </p>
            </div>

            {/* How long we retain your data */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                How long we retain your data
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </p>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </div>

            {/* What rights you have over your data */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                What rights you have over your data
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>

            {/* Where your data is sent */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <h3 className="text-xl sm:text-2xl font-black text-navy font-heading tracking-tight">
                Where your data is sent
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                Visitor comments may be checked through an automated spam detection service.
              </p>
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
