'use client';

import React from 'react';
import {
  Sparkles,
  Gauge,
  Zap,
  Medal,
  CheckCircle2,
  Star,
  ShieldCheck,
  Clock
} from 'lucide-react';

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white text-slate-800 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Split Layout: Left Introductory Column + Right 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* ==============================================================
              LEFT COLUMN: INTRODUCTORY CONTENT (Editorial Hierarchy)
             ============================================================== */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-widest mb-4 font-heading border border-royal/15">
              <span className="w-1.5 h-1.5 rounded-full bg-royal animate-ping flex-shrink-0" />
              <span>The 247 HVAC Difference</span>
            </div>

            {/* Prominent Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.12] mb-5 font-heading">
              Why Homeowners in Long Island Choose Our <span className="text-royal">HVAC Experts</span>
            </h2>

            {/* Introductory Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-body">
              Delivering prompt, honest, and high-efficiency climate solutions backed by decades of proven customer satisfaction.
            </p>

            {/* Decorative Trust Guarantee Card */}
            <div className="w-full rounded-2xl bg-gradient-to-br from-[#061A40] via-[#0A2558] to-[#061A40] text-white p-6 sm:p-7 shadow-xl border border-royal/20 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-royal/25 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-13 h-13 rounded-xl bg-royal text-white flex items-center justify-center font-black text-lg flex-shrink-0 font-heading shadow-md border border-white/20">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading leading-tight">
                    100% Satisfaction Commitment
                  </h4>
                  <p className="text-xs text-slate-300 font-body mt-0.5">
                    Licensed, insured, and certified Long Island technicians
                  </p>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs font-heading relative z-10">
                <span className="flex items-center gap-1.5 text-brightYellow font-bold">
                  <Star className="w-3.5 h-3.5 fill-current text-brightYellow" />
                  <span>5.0 Star Rated Service</span>
                </span>
                <span className="text-electric font-bold tracking-wide">
                  Zero Overtime Fees
                </span>
              </div>
            </div>
          </div>

          {/* ==============================================================
              RIGHT COLUMN: 2x2 FEATURE GRID (Distinctive Creative Cards)
             ============================================================== */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* FEATURE 01 — Professional Service */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                {/* Header Row: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-royal/10 text-royal border border-royal/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Sparkles className="w-6 h-6 text-royal" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-royal bg-royal/10 px-2.5 py-1 rounded-full border border-royal/20">
                    01
                  </span>
                </div>

                {/* Animated Accent Line */}
                <div className="h-1 bg-gradient-to-r from-royal to-electric w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
                  Professional Service
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  Polite, uniformed, background-checked technicians who arrive promptly and treat your home with total respect.
                </p>
              </div>

              {/* Guaranteed Standards Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-royal font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

            {/* FEATURE 02 — Expertise & Reliability (Dark Contrast Accent Card) */}
            <div className="bg-gradient-to-br from-[#061A40] via-[#0A2E6E] to-[#061A40] text-white rounded-2xl p-6 sm:p-7 border border-royal/40 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group motion-reduce:transform-none">
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-electric/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row: Icon + Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 text-electric border border-white/25 backdrop-blur-sm flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Gauge className="w-6 h-6 text-electric" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-electric bg-white/10 px-2.5 py-1 rounded-full border border-white/20">
                    02
                  </span>
                </div>

                {/* Animated Accent Line */}
                <div className="h-1 bg-gradient-to-r from-electric to-royal w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-heading">
                  Expertise & Reliability
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body">
                  Over 30 years troubleshooting and servicing complex heating, ventilation, and air conditioning systems.
                </p>
              </div>

              {/* Guaranteed Standards Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs font-bold text-electric font-heading relative z-10">
                <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

            {/* FEATURE 03 — 24/7 Emergency Availability */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                {/* Header Row: Icon + Number Badge + Dispatch Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-brightRed border border-red-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Zap className="w-6 h-6 text-brightRed" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-brightRed uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-md border border-red-100 font-heading">
                      <span className="w-1.5 h-1.5 rounded-full bg-brightRed animate-ping" />
                      Rapid Dispatch
                    </span>
                    <span className="text-xs font-black font-heading tracking-widest text-brightRed bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                      03
                    </span>
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="h-1 bg-gradient-to-r from-brightRed to-amber-500 w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
                  24/7 Emergency Availability
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  Round-the-clock emergency dispatch across Long Island. No overtime surcharges on critical diagnostic calls.
                </p>
              </div>

              {/* Guaranteed Standards Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brightRed font-heading">
                <CheckCircle2 className="w-4 h-4 text-brightRed flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

            {/* FEATURE 04 — Quality Workmanship */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                {/* Header Row: Icon + Number Badge + OEM Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-hvacGreen border border-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Medal className="w-6 h-6 text-hvacGreen" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-hvacGreen uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 font-heading">
                      OEM Certified
                    </span>
                    <span className="text-xs font-black font-heading tracking-widest text-hvacGreen bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      04
                    </span>
                  </div>
                </div>

                {/* Animated Accent Line */}
                <div className="h-1 bg-gradient-to-r from-hvacGreen to-brightYellow w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-heading">
                  Quality Workmanship
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                  High-grade OEM replacement parts, factory warranty protection, and precision code-compliant installations.
                </p>
              </div>

              {/* Guaranteed Standards Indicator */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-hvacGreen font-heading">
                <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                <span>Guaranteed Standards</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
