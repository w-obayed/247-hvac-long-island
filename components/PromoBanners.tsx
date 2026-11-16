'use client';

import React from 'react';
import { CreditCard, FileCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PromoBannersProps {
  onOpenFinancing: () => void;
  onOpenMaintenance: () => void;
}

export default function PromoBanners({ onOpenFinancing, onOpenMaintenance }: PromoBannersProps) {
  return (
    <section className="py-14 md:py-20 bg-white text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* SECTION 6 — FINANCING OPTIONS */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#061A40] via-[#0A2E6E] to-[#0066CC] text-white p-7 sm:p-9 shadow-xl border border-royal/30 flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-royal/30 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-electric text-xs font-bold uppercase tracking-wider mb-4 border border-white/10 font-heading">
                <CreditCard className="w-4 h-4" />
                <span>HVAC Equipment Financing</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 font-heading">
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric hover:bg-electric-hover text-navy font-black text-sm shadow-lg active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <span>Explore Financing Options</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SECTION 7 — HVAC SERVICE AGREEMENTS */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#061A40] via-[#122A59] to-[#061A40] text-white p-7 sm:p-9 shadow-xl border border-white/10 flex flex-col justify-between group">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brightRed/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brightRed/20 text-brightYellow text-xs font-bold uppercase tracking-wider mb-4 border border-brightRed/30 font-heading">
                <FileCheck className="w-4 h-4 text-brightYellow" />
                <span>Annual Maintenance Protection</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 font-heading">
                Protect Your Comfort With Our HVAC Service Agreements
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 font-body">
                Keep your heating and cooling systems running efficiently with scheduled maintenance and professional HVAC care.
              </p>

              {/* Maintenance Plan Potential Benefits */}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brightYellow hover:bg-brightYellow-hover text-navy font-black text-sm shadow-lg active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider"
              >
                <span>View Service Agreements</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
