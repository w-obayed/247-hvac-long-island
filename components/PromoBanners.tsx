'use client';

import React from 'react';
import Image from 'next/image';
import { CreditCard, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PromoBannersProps {
  onOpenFinancing: () => void;
  onOpenMaintenance: () => void;
}

export default function PromoBanners({ onOpenFinancing, onOpenMaintenance }: PromoBannersProps) {
  return (
    <section className="pt-2 sm:pt-4 pb-16 md:pb-24 bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* SECTION 6 — HVAC EQUIPMENT FINANCING CARD */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-slate-500/50 min-h-[460px] sm:min-h-[480px]">
            {/* Full-Card Background Image */}
            <Image
              src="/images/air-conditioner.jpg"
              alt="Modern High-Efficiency HVAC Equipment and Air Conditioning System Installation"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle Gradient & Brand Navy Overlay for Superior Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] via-[#061A40]/85 to-[#061A40]/65 group-hover:via-[#061A40]/80 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[#0066CC]/15 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-electric text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 font-heading">
                  <CreditCard className="w-4 h-4 flex-shrink-0" />
                  <span>HVAC Equipment Financing</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 font-heading leading-tight">
                  Flexible Financing Options for Your HVAC Needs
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-body">
                  Explore convenient financing options for eligible heating and cooling installations, replacements, and home comfort upgrades.
                </p>

                {/* Financing Feature Highlights */}
                <div className="space-y-2.5 mb-8 font-body">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                    <span>Convenient monthly payment arrangements</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                    <span>Subject to approved credit via authorized lending partners</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-electric flex-shrink-0" />
                    <span>Quick online pre-qualification without obligation</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onOpenFinancing}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-electric hover:bg-electric-hover text-navy font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>Explore Financing Options</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* SECTION 7 — ANNUAL MAINTENANCE PROTECTION CARD */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-slate-500/50 min-h-[460px] sm:min-h-[480px]">
            {/* Full-Card Background Image */}
            <Image
              src="/images/technician-service.jpg"
              alt="Certified HVAC Technician Performing Annual Maintenance and Precision System Inspection"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle Gradient & Brand Navy Overlay for Superior Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061A40] via-[#061A40]/85 to-[#061A40]/65 group-hover:via-[#061A40]/80 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[#E50914]/10 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brightRed/30 backdrop-blur-md text-brightYellow text-xs font-bold uppercase tracking-wider mb-4 border border-brightRed/40 font-heading">
                  <FileCheck className="w-4 h-4 text-brightYellow flex-shrink-0" />
                  <span>Annual Maintenance Protection</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 font-heading leading-tight">
                  Protect Your Comfort With Our HVAC Service Agreements
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-body">
                  Keep your heating and cooling systems running efficiently with scheduled maintenance and professional HVAC care.
                </p>

                {/* Maintenance Plan Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 font-body">
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Scheduled Maintenance:</strong> Pre-season tune-ups.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Preventive Inspections:</strong> Early issue detection.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Performance Checks:</strong> Lower utility bills.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brightYellow flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Convenient Scheduling:</strong> Priority appointment times.</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onOpenMaintenance}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-xs sm:text-sm shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>View Service Agreements</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
