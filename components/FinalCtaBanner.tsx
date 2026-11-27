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
    <section id="contact-cta" className="py-16 md:py-20 bg-gradient-to-r from-[#003399] via-[#0055E7] to-[#006BFF] text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#00BFFF_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-electric text-xs font-black uppercase tracking-wider mb-4 border border-white/15 font-heading">
          <Clock className="w-3.5 h-3.5 text-brightYellow" />
          <span>24/7 Fast Response Across Long Island</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-heading">
          Need a Reliable &amp; Professional HVAC Service - 24/7 Emergency
        </h2>

        {/* Description - Inter */}
        <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed mb-8 font-body">
          Contact our HVAC professionals today for dependable heating and cooling services, emergency repairs, installations, and maintenance.
        </p>

        {/* 3 Buttons: Book Now, Call (516) 717-7515, Get a Free Quote (Roboto Condensed) */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto font-heading">
          {/* 1. Book Now — Green */}
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-hvacGreen hover:bg-hvacGreen-hover text-white font-extrabold text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </button>

          {/* 2. Call (516) 717-7515 — Yellow/White */}
          <a
            href={PHONE_TEL}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-base shadow-xl active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <Phone className="w-5 h-5 text-brightRed" />
            <span>Call {PHONE_NUMBER}</span>
          </a>

          {/* 3. Get a Free Quote — Royal Blue */}
          <button
            onClick={onOpenQuote}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-extrabold text-base shadow-xl border border-white/20 active:scale-95 transition-all font-heading uppercase tracking-wide"
          >
            <FileText className="w-5 h-5" />
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Guarantee text */}
        <div className="flex items-center justify-center gap-6 mt-8 text-xs text-slate-300 font-heading">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-electric" /> Upfront Honest Pricing
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brightYellow" /> 24/7 Emergency Dispatch
          </span>
        </div>
      </div>
    </section>
  );
}
