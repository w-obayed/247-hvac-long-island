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
      <PageBanner
        id="banner"
        badgeText="#1 HVAC Services in Long Island"
        title="Privacy Policy"
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
