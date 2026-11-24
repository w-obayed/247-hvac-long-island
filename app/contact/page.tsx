'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Phone,
  FileText,
  Clock,
  CheckCircle2,
  Star,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Mail,
  Send,
  Loader2,
  AlertCircle,
  Sparkles,
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
import { contactFormSchema, ContactFormData, SERVICE_OPTIONS } from '@/lib/validations/contact';

export default function ContactPage() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [isFinancingOpen, setIsFinancingOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArea, setSelectedArea] = useState<ServiceAreaItem | null>(null);

  // Submission feedback states
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      serviceRequired: '' as any,
      message: '',
      honeypot: '',
    },
  });

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

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit your inquiry.');
      }

      setIsSuccess(true);
      // Reset form fields after successful submission
      reset();
    } catch (err: any) {
      setSubmitError(
        err.message || 'Unable to send your request. Please call us directly at (516) 717-7515.'
      );
    }
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
          <span className="text-navy font-bold">Contact Us</span>
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
            alt="Contact 247 HVAC of Long Island"
            fill
            priority
            className="object-cover object-center lg:object-right"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/60 sm:via-[#061A40]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] sm:from-[#061A40]/80 via-transparent to-transparent" />
        </div>

        {/* Background Gradient & Grid Accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/90 sm:via-[#061A40]/80 via-50% to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, Bullets, CTA Buttons */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-3 sm:mb-4 shadow-lg font-heading max-w-full">
                <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
                <span className="truncate sm:overflow-visible">24/7 Fast Emergency Dispatch Desk</span>
              </div>

              {/* Exact Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] mb-4 text-white font-heading">
                Contact Us
              </h1>

              {/* Exact 3 Bullet Points */}
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
      {/* 2 & 3. CONTACT FORM & CONTACT INFORMATION SECTION (BALANCED TWO-COLUMN) */}
      {/* ========================================================================= */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT COLUMN: PRIMARY FOCUS — CONTACT FORM (lg:col-span-7 xl:col-span-8) */}
            <div className="lg:col-span-7 xl:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
              <div className="border-b border-slate-100 pb-5 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-2 font-heading">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prompt Response Guarantee</span>
                </div>
                {/* Exact Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy font-heading tracking-tight">
                  Contact Form
                </h2>
                <p className="text-sm text-slate-600 font-body mt-1">
                  Fill out the details below and a dispatch coordinator will contact you promptly.
                </p>
              </div>

              {/* Success Notification */}
              {isSuccess && (
                <div
                  role="alert"
                  className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-fadeIn"
                >
                  <div className="flex items-center gap-2 font-heading font-black text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span>Thank you! Your message has been received. Our team will contact you soon.</span>
                  </div>
                  <p className="text-sm font-body leading-relaxed text-emerald-800">
                    A dispatch coordinator is reviewing your service details. For immediate assistance or 24/7 emergency service, call us directly at{' '}
                    <a href={PHONE_TEL} className="font-bold text-navy hover:underline font-heading">
                      {PHONE_NUMBER}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors uppercase tracking-wider font-heading"
                  >
                    Send Another Request
                  </button>
                </div>
              )}

              {/* Error Notification */}
              {submitError && (
                <div
                  role="alert"
                  className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-brightRed flex-shrink-0 mt-0.5" />
                  <div className="text-sm font-body">{submitError}</div>
                </div>
              )}

              {/* Exact Form Fields and Order */}
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Hidden Honeypot Field for Spam Protection */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <label htmlFor="honeypot">Leave blank</label>
                  <input
                    type="text"
                    id="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('honeypot')}
                  />
                </div>

                {/* 1 & 2: First Name and Last Name Side by Side on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 1. First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      First Name <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="John"
                      aria-required="true"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      {...register('firstName')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.firstName ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  {/* 2. Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Last Name <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Doe"
                      aria-required="true"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      {...register('lastName')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.lastName ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 3 & 4: Phone and Email Side by Side on Desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* 3. Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Phone <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(516) 000-0000"
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      {...register('phone')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.phone ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* 4. Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                    >
                      Email <span className="text-brightRed">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john.doe@example.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                        errors.email ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 5. Service Required — Full-width Dropdown */}
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                  >
                    Service Required <span className="text-brightRed">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    aria-required="true"
                    aria-invalid={!!errors.serviceRequired}
                    aria-describedby={errors.serviceRequired ? 'serviceRequired-error' : undefined}
                    {...register('serviceRequired')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal ${
                      errors.serviceRequired ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                    }`}
                  >
                    <option value="">Select a service...</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceRequired && (
                    <p id="serviceRequired-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                      {errors.serviceRequired.message}
                    </p>
                  )}
                </div>

                {/* 6. Message — Full-width Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-navy font-heading mb-1.5"
                  >
                    Message <span className="text-brightRed">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your heating, cooling, or HVAC service request..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 bg-slate-50/50 transition-colors focus:outline-hidden focus:ring-2 focus:ring-royal resize-y ${
                      errors.message ? 'border-brightRed bg-red-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-brightRed font-medium mt-1 font-body">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* 7. Request Service — Submit Button Below Form */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-heading min-h-[46px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 flex-shrink-0" />
                        <span>Request Service</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN: CONTACT INFORMATION SECTION (lg:col-span-5 xl:col-span-4) */}
            <div className="lg:col-span-5 xl:col-span-4 space-y-6">
              <div className="bg-[#061A40] text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading block mb-1">
                    Direct Contact
                  </span>
                  {/* Exact Heading */}
                  <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                    HVAC Service
                  </h2>
                </div>

                {/* 1. Service Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brightRed/20 text-brightRed border border-brightRed/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-brightYellow" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-300 font-heading block">
                      Service Availability:
                    </span>
                    <span className="text-lg font-bold text-white font-body">
                      24/7 Emergency
                    </span>
                  </div>
                </div>

                {/* 2. Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-royal/20 text-electric border border-electric/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-brightYellow" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-300 font-heading block">
                      Phone:
                    </span>
                    <a
                      href={PHONE_TEL}
                      className="text-lg font-black text-brightYellow hover:underline font-heading"
                    >
                      Call Now: (516) 717-7515
                    </a>
                  </div>
                </div>

                {/* 3. Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 text-slate-200 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-brightRed" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-300 font-heading block">
                      Address:
                    </span>
                    <p className="text-sm font-semibold text-white font-body leading-relaxed">
                      700 Rockaway Turnpike #400 Lawrence, NY 11559
                    </p>
                  </div>
                </div>

                {/* 4. Social Links */}
                <div className="pt-4 border-t border-white/10">
                  <span className="text-xs uppercase font-bold text-slate-300 font-heading block mb-3">
                    Find us on
                  </span>
                  <div className="flex items-center gap-3">
                    {/* Facebook */}
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-royal text-white flex items-center justify-center border border-white/10 hover:border-royal transition-all duration-200"
                      aria-label="Facebook (opens in a new tab)"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-royal text-white flex items-center justify-center border border-white/10 hover:border-royal transition-all duration-200"
                      aria-label="Instagram (opens in a new tab)"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* Twitter */}
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-white/10 hover:bg-royal text-white flex items-center justify-center border border-white/10 hover:border-royal transition-all duration-200"
                      aria-label="Twitter (opens in a new tab)"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Fast Reassurance Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal flex items-center justify-center font-black flex-shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-navy text-sm font-heading">Upfront Guaranteed Pricing</h3>
                  <p className="text-xs text-slate-600 font-body mt-0.5">
                    Written estimates before work starts with zero hidden fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CTA SECTION */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#061A40] via-[#0E2452] to-[#0066CC] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
            <Clock className="w-3.5 h-3.5 text-brightYellow" />
            <span>24/7 Fast Response Across Long Island</span>
          </div>

          {/* Exact Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
            Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
          </h2>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
            Speak directly with our Long Island technicians for prompt heating and air conditioning repair or a free quote.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
            <a
              href={PHONE_TEL}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <Phone className="w-5 h-5 text-brightRed" />
              <span>Call Now: (516) 717-7515</span>
            </a>

            <button
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
            >
              <FileText className="w-5 h-5" />
              <span>Get A Free Quote</span>
            </button>
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
