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
    <section id="home" className="relative bg-[#FFF1EB] text-[#10243E] overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 border-b border-[#F44816]/10">
      {/* Background Hero Image */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 h-full z-0 opacity-40 sm:opacity-50 lg:opacity-60 overflow-hidden pointer-events-none">
        <Image
          src="/image-website/air-con-installation.jpg"
          alt="Trusted HVAC Repair in Long Island, NY"
          fill
          priority
          className="object-cover object-center lg:object-right"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
        />
        {/* Soft edge blend for smooth transition into soft orange background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF1EB] via-[#FFF1EB]/80 sm:via-[#FFF1EB]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF1EB] sm:from-[#FFF1EB]/90 via-transparent to-transparent" />
      </div>

      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B82C3_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-10" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Description, Trust Highlights, CTA Buttons */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left w-full">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F44816] text-white font-black text-xs sm:text-xs uppercase tracking-wider mb-3.5 sm:mb-4 shadow-md font-heading max-w-full">
              <span className="w-2 h-2 rounded-full bg-white animate-ping flex-shrink-0" />
              <span className="truncate sm:overflow-visible">24/7 Emergency Service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.12] mb-3.5 sm:mb-5 text-[#10243E] font-heading">
              Trusted HVAC Repair in <br />
              <span className="text-[#0B82C3] drop-shadow-sm">Long Island, NY</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-700 max-w-2xl font-normal leading-relaxed mb-5 sm:mb-6 font-body">
              Is your heating or cooling system not working when you need it most? Our experienced technicians provide fast and dependable HVAC repair in Long Island for residential and commercial properties.
            </p>

            {/* Five Highlights from Supplied Content */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3.5 w-full max-w-xl mb-6 sm:mb-8 font-heading">
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B82C3] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#10243E]">Professional HVAC Contractor</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F44816] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#10243E]">24/7 Emergency Service</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#F44816] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#10243E]">Heating Installation & Repairs</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <Snowflake className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B82C3] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#10243E]">AC Installation & Repairs</span>
              </div>
              <div className="col-span-1 xs:col-span-2 sm:col-span-2 flex items-center gap-2.5 bg-white/90 backdrop-blur-sm px-3.5 py-2.5 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#0B82C3] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-[#10243E]">Mini-Splits Installation & Repairs</span>
              </div>
            </div>

            {/* 4 Main CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto font-heading">
              {/* 1. Book Now — Orange (#F44816) */}
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#F44816] text-white font-black text-sm sm:text-base shadow-lg hover:bg-[#D83B0E] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Book Now</span>
              </button>

              {/* 2. Call (516) 717-7515 — Dark Navy (#10243E) */}
              <a
                href={PHONE_TEL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#10243E] text-white font-black text-sm sm:text-base shadow-lg hover:bg-[#1B3557] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#F44816] flex-shrink-0" />
                <span>Call {PHONE_NUMBER}</span>
              </a>

              {/* 3. Instant Quote — Blue (#0B82C3) */}
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#0B82C3] text-white font-black text-sm sm:text-base shadow-lg hover:bg-[#096BA2] active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Instant Quote</span>
              </button>

              {/* 4. Text Us — Orange (#F44816) */}
              <a
                href={PHONE_SMS}
                onClick={(e) => {
                  if (typeof window !== 'undefined' && window.innerWidth >= 768) {
                    e.preventDefault();
                    onOpenTextUs();
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg border-2 border-[#F44816] text-[#F44816] hover:bg-[#F44816] hover:text-white font-black text-sm sm:text-base shadow-sm active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>Text Us</span>
              </a>
            </div>

            {/* Quick trust reassurance footer */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-5 sm:mt-6 text-xs sm:text-sm text-slate-700 font-body">
              <div className="flex items-center gap-1 text-[#F59E0B] flex-shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-[#F59E0B]" />
                ))}
              </div>
              <span className="font-bold text-[#10243E] font-heading">5.0 Average</span>
              <span className="text-slate-400 hidden sm:inline">•</span>
              <span className="w-full sm:w-auto text-slate-600 font-medium">Rated 5 out of 5</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Card */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0B82C3]/20 bg-white p-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-extrabold text-[#0B82C3] font-heading">HVAC Repair</span>
                  <h3 className="text-[24px] font-bold text-[#10243E] font-heading">Professional HVAC Contractor</h3>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF1EB] text-[#F44816] border border-[#F44816]/30 text-xs font-bold font-heading">
                  <span className="w-2 h-2 rounded-full bg-[#F44816] animate-pulse" />
                  <span>24/7 Service</span>
                </div>
              </div>

              <div className="space-y-3 mb-5 font-body">
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-[#10243E]">24/7 Emergency Service:</strong> Fast response in Long Island.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-[#10243E]">Heating Installation & Repairs:</strong> Residential and commercial.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-[#10243E]">AC Installation & Repairs:</strong> Dependable cooling solutions.</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0 mt-0.5" />
                  <span><strong className="font-heading font-bold text-[#10243E]">Mini-Splits Installation & Repairs:</strong> High efficiency climate systems.</span>
                </div>
              </div>

              <div className="bg-[#F5F7FA] rounded-xl p-4 border border-slate-200 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase font-bold text-slate-500 font-heading">Direct Emergency Line</p>
                  <a href={PHONE_TEL} className="text-xl font-black text-[#10243E] hover:text-[#0B82C3] font-heading">
                    {PHONE_NUMBER}
                  </a>
                </div>
                <a
                  href={PHONE_TEL}
                  className="px-3.5 py-2 rounded-lg bg-[#F44816] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#D83B0E] shadow font-heading"
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
