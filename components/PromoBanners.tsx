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
    <section className="pt-2 sm:pt-4 pb-16 md:pb-24 bg-[#F5F7FA] text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* SECTION 6 — HVAC EQUIPMENT FINANCING CARD */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-700/40 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:border-slate-500/50 min-h-[460px] sm:min-h-[480px]">
            {/* Full-Card Background Image */}
            <Image
              src="/image-website/Flexible-Financing-Options-for-Your-HVAC-Needs.jpeg"
              alt="Flexible Financing Options for Your HVAC Needs"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle Gradient & Brand Overlay for Superior Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/90 to-[#10243E]/70 group-hover:via-[#10243E]/85 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[#0B82C3]/15 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[#0B82C3] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20 font-heading">
                  <CreditCard className="w-4 h-4 flex-shrink-0" />
                  <span>HVAC Equipment Financing</span>
                </div>

                <h3 className="text-[24px] font-black text-white tracking-tight mb-3 font-heading leading-tight">
                  Flexible Financing Options for Your HVAC Needs
                </h3>

                <p className="text-base text-slate-200 leading-relaxed mb-6 font-body">
                  Get flexible financing options for your equipment, installation, and services. We make it easier for you to afford what you need without compromising on quality. Enjoy manageable monthly payments and competitive rates to ensure that you can get the best solutions without the financial strain.
                </p>

                {/* Financing Feature Highlights */}
                <div className="space-y-2.5 mb-8 font-body">
                  <div className="flex items-center gap-2.5 text-sm sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0" />
                    <span>Equipment, Installation & Services</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0" />
                    <span>Manageable Monthly Payments</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm sm:text-sm text-slate-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0" />
                    <span>Competitive Rates & Quality Solutions</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onOpenFinancing}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#F44816] hover:bg-[#D83B0E] text-white font-black text-sm sm:text-sm shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
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
              src="/image-website/ac-installation.jpg"
              alt="Air Conditioners Repair & Maintenance"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Subtle Gradient & Brand Overlay for Superior Contrast & Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#10243E] via-[#10243E]/90 to-[#10243E]/70 group-hover:via-[#10243E]/85 transition-colors duration-300 pointer-events-none" />
            <div className="absolute inset-0 bg-[#F44816]/15 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-9 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F44816]/20 backdrop-blur-md text-[#FFF1EB] text-xs font-bold uppercase tracking-wider mb-4 border border-[#F44816]/30 font-heading">
                  <FileCheck className="w-4 h-4 text-[#F44816] flex-shrink-0" />
                  <span>Annual Maintenance Protection</span>
                </div>

                <h3 className="text-[24px] font-black text-white tracking-tight mb-3 font-heading leading-tight">
                  Air Conditioners Repair & Maintenance
                </h3>

                <p className="text-base text-slate-200 leading-relaxed mb-6 font-body">
                  If your system is showing these signs, you can explore air conditioner repair and maintenance to address potential problems early.
                </p>

                {/* Maintenance Plan Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 font-body">
                  <div className="flex items-start gap-2 text-sm sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Preventive Care:</strong> Early issue detection.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Energy Efficiency:</strong> Keep energy bills low.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Year-Round Comfort:</strong> Dependable cooling.</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm sm:text-sm text-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0 mt-0.5" />
                    <span><strong className="font-heading font-bold text-white">Convenient Service:</strong> Priority scheduling.</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button
                  onClick={onOpenMaintenance}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B82C3] hover:bg-[#096BA2] text-white font-black text-sm sm:text-sm shadow-xl active:scale-95 transition-all duration-200 font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>Explore Maintenance Options</span>
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
