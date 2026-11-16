'use client';

import React from 'react';
import Image from 'next/image';
import {
  Calendar,
  Phone,
  FileText,
  MessageSquare,
  ShieldCheck,
  Clock,
  Flame,
  Snowflake,
  Star,
  CheckCircle2
} from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, PHONE_SMS } from '@/lib/utils';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
  onOpenTextUs: () => void;
}

export default function HeroSection({
  onOpenBooking,
  onOpenQuote,
  onOpenTextUs,
}: HeroSectionProps) {
  return (
    <section id="home" className="relative bg-[#061A40] text-white overflow-hidden py-10 md:py-16 lg:py-20">
      {/* Background Hero Image - Increased visibility and reduced overlay darkness */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-70 lg:opacity-85 overflow-hidden">
        <Image
          src="/images/hero-hvac.jpg"
          alt="Outdoor HVAC Condenser and Heat Pump System Installation in Long Island"
          fill
          priority
          className="object-cover object-center lg:object-right"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
        {/* Soft edge blend for smooth transition into brand navy background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061A40]/80 via-transparent to-transparent" />
      </div>

      {/* Background Subtle Gradient & Grid Accent - Lightened overlay to let image shine through */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061A40] via-[#061A40]/80 via-40% to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0066CC_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Trust Highlights, CTA Buttons */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brightRed text-white font-black text-xs uppercase tracking-wider mb-4 shadow-lg font-heading">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span>#1 HVAC Emergency Services in Long Island</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-5 text-white font-heading">
              Trusted HVAC Repair in <br />
              <span className="text-[#00BFFF] drop-shadow-sm">Long Island, NY</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed mb-6 font-body">
              Is your heating or cooling system not working when you need it most? Our experienced technicians provide fast and dependable HVAC repair in Long Island for residential and commercial properties.
            </p>

            {/* Four Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-xl mb-8">
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                <ShieldCheck className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white font-heading">Professional HVAC Contractor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                <Clock className="w-5 h-5 text-brightYellow flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white font-heading">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                <Flame className="w-5 h-5 text-brightRed flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white font-heading">Heating Installation & Repairs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-3.5 py-2.5 rounded-lg border border-white/10">
                <Snowflake className="w-5 h-5 text-electric flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-white font-heading">AC Installation & Repairs</span>
              </div>
            </div>

            {/* 4 Main CTA Buttons (Roboto Condensed) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto font-heading">
              {/* 1. Book Now — Green (#25843D) */}
              <button
                onClick={onOpenBooking}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Now</span>
              </button>

              {/* 2. Call (516) 717-7515 — Blue or White */}
              <a
                href={PHONE_TEL}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white text-[#061A40] font-black text-sm sm:text-base shadow-xl hover:bg-slate-100 active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <Phone className="w-5 h-5 text-brightRed" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              {/* 3. Instant Quote — Royal Blue (#0066CC) */}
              <button
                onClick={onOpenQuote}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0066CC] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#0052A3] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <FileText className="w-5 h-5" />
                <span>Instant Quote</span>
              </button>

              {/* 4. Text Us — Green (#25843D) */}
              <a
                href={PHONE_SMS}
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    e.preventDefault();
                    onOpenTextUs();
                  }
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#25843D] text-white font-black text-sm sm:text-base shadow-xl hover:bg-[#1D6B31] active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Text Us</span>
              </a>
            </div>

            {/* Quick trust reassurance footer */}
            <div className="flex items-center gap-4 mt-6 text-xs text-slate-300 font-body">
              <div className="flex items-center gap-1 text-brightYellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-brightYellow" />
                ))}
              </div>
              <span className="font-semibold text-white font-heading">5.0 Star Rated HVAC Service</span>
              <span className="text-slate-400">•</span>
              <span>Nassau & Suffolk County 24/7 Coverage</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card with Dispatch Status */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-gradient-to-b from-navy-light/90 to-navy-dark/95 backdrop-blur-md p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-electric font-heading">Fast Dispatch</span>
                  <h3 className="text-lg font-bold text-white font-heading">Emergency Mobile Units</h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-hvacGreen/20 text-hvacGreen border border-hvacGreen/30 text-xs font-bold font-heading">
                  <span className="w-2 h-2 rounded-full bg-hvacGreen animate-pulse" />
                  <span>On Duty</span>
                </div>
              </div>

              <div className="space-y-3 mb-5 font-body">
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-white">30-45 Minute Response:</strong> Nassau, Queens & Western Suffolk.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-white">Licensed & Certified:</strong> EPA universal, OSHA compliant master technicians.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-white">Stocked Vehicles:</strong> Over 1,000 OEM replacement parts on every service truck.</span>
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
  );
}
