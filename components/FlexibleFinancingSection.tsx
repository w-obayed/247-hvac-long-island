'use client';

import React from 'react';
import Image from 'next/image';
import { CreditCard, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, CalendarCheck } from 'lucide-react';

export default function FlexibleFinancingSection() {
  return (
    <section id="financing" className="py-14 sm:py-18 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white text-slate-800 relative overflow-hidden border-t border-slate-100">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column (lg:col-span-7): Heading, Exact Description, Benefits, Finance Button */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-4 border border-royal/15 font-heading">
              <CreditCard className="w-3.5 h-3.5 text-royal flex-shrink-0" />
              <span>Affordable Payment Options</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight leading-[1.15] mb-5 font-heading">
              Flexible Financing Options for <span className="text-royal">Your HVAC Needs</span>
            </h2>

            {/* Exact Client Supplied Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-body">
              Get flexible financing options for your equipment, installation, and services. We make it easier for you to afford what you need without compromising on quality. Enjoy manageable monthly payments and competitive rates to ensure that you can get the best solutions without the financial strain.
            </p>

            {/* Financing Benefit Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8 font-body">
              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-hvacGreen/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <DollarSign className="w-4 h-4 text-hvacGreen" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy font-heading">Manageable Payments</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Low monthly installments tailored to your budget.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-royal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CalendarCheck className="w-4 h-4 text-royal" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy font-heading">Competitive Rates</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Transparent terms with no hidden prepayment fees.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-electric/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-royal" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy font-heading">Full Coverage</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Applies to equipment, installation, and replacements.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy font-heading">Fast Online Decisions</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Simple digital pre-qualification in just minutes.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Primary Finance Button + Supporting Fujitsu Financing */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto font-heading">
              {/* Primary Finance Button */}
              <a
                href="https://app.apptracker.dev/EGIA-464482"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-royal hover:bg-royal-hover text-white font-black text-base shadow-lg shadow-royal/20 active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[48px]"
                title="Apply for HVAC Financing (opens in a new tab)"
              >
                <CreditCard className="w-5 h-5 flex-shrink-0" />
                <span>Finance</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 ml-1" />
              </a>

              {/* Secondary Fujitsu Financing Option */}
              <a
                href="https://prequalification.enerbank.com/apply/loanproduct?sponsorPhoneNumber=8004046394&contractorNumber=9721&loanCode=DFG3864"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border-2 border-slate-200 hover:border-royal text-navy hover:text-royal font-bold text-sm shadow-xs active:scale-95 transition-all duration-200 uppercase tracking-wider min-h-[48px]"
                title="Fujitsu Financing Pre-qualification (opens in a new tab)"
              >
                <span>Fujitsu Pre-Approval</span>
              </a>
            </div>
          </div>

          {/* Right Column (lg:col-span-5): Relevant Financing Image with Modern Framing */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <div className="relative h-64 xs:h-72 sm:h-80 md:h-96 lg:h-[460px] w-full" style={{ position: 'relative' }}>
                <Image
                  src="/image-website/Flexible-Financing-Options-for-Your-HVAC-Needs.jpeg"
                  alt="Flexible Financing Options for Your HVAC Needs - 247 HVAC of Long Island"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Value Pill */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/40 shadow-lg flex items-center justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase font-extrabold text-royal font-heading tracking-wider block">Special Financing Available</span>
                    <p className="text-xs sm:text-sm font-bold text-navy font-heading">Low Monthly Payments • Quick Approval</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-hvacGreen/10 flex items-center justify-center flex-shrink-0 text-hvacGreen font-black font-heading text-xs">
                    0%*
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
