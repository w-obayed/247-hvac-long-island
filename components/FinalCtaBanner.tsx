'use client';

import React from 'react';
import { Phone, Calendar, FileText, Clock, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface FinalCtaBannerProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export default function FinalCtaBanner({ onOpenBooking, onOpenQuote }: FinalCtaBannerProps) {
  return (
    <section id="contact-cta" className="py-16 md:py-20 bg-gradient-to-r from-[#10243E] via-[#173254] to-[#10243E] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#0B82C3_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F44816]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#0B82C3] text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
          <Clock className="w-3.5 h-3.5 text-[#F44816]" />
          <span>24/7 Emergency Service</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
          Need a Reliable & Professional HVAC Service - <span className="text-[#F44816]">24/7 Emergency</span>
        </h2>

        {/* Description */}
        <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
          We’re there for you 24 hours 7 days a week, when you need us. Contact us for a consultation, estimate, or any questions you might have about your project or our work.
        </p>

        {/* 3 Buttons: Book Now, Call (516) 717-7515, Get a Free Quote */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
          {/* 1. Book Now — Orange #F44816 */}
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#F44816] hover:bg-[#d93d10] text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>

          {/* 2. Call (516) 717-7515 — White / Navy */}
          <a
            href={PHONE_TEL}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#10243E] font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <Phone className="w-5 h-5 text-[#F44816]" />
            <span>Call {PHONE_NUMBER}</span>
          </a>

          {/* 3. Get a Free Quote — Blue #0B82C3 */}
          <button
            onClick={onOpenQuote}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B82C3] hover:bg-[#086396] text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <FileText className="w-5 h-5" />
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Guarantee text */}
        <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-300 font-heading">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0B82C3]" /> Upfront Honest Pricing
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#F44816]" /> 24/7 Emergency Dispatch
          </span>
        </div>
      </div>
    </section>
  );
}
