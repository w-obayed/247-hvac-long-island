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
    <section id="why-choose-us" className="py-16 md:py-24 bg-[#FFFFFF] text-slate-800 border-t border-slate-100 relative overflow-hidden">
      {/* Subtle Background Glow Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0B82C3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F44816]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Split Layout: Left Introductory Column + Right 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: INTRODUCTORY CONTENT */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B82C3]/10 text-[#0B82C3] text-xs font-black uppercase tracking-widest mb-4 font-heading border border-[#0B82C3]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B82C3] animate-ping flex-shrink-0" />
              <span>HVAC Experts</span>
            </div>

            {/* Prominent Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10243E] tracking-tight leading-[1.12] mb-5 font-heading">
              Why Homeowners in Long Island Choose Our <span className="text-[#0B82C3]">HVAC Experts</span>
            </h2>

            {/* Introductory Description */}
            <p className="text-base text-slate-600 leading-relaxed mb-8 font-body">
              Homeowners and businesses across Long Island choose our HVAC team because of our commitment to reliable service, skilled technicians, and honest communication. We focus on delivering dependable heating and cooling solutions while making the entire service process simple and stress-free for every customer.
            </p>

            {/* Decorative Trust Card */}
            <div className="w-full rounded-2xl bg-gradient-to-br from-[#10243E] via-[#173254] to-[#10243E] text-white p-6 sm:p-7 shadow-xl border border-white/10 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#0B82C3]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-13 h-13 rounded-xl bg-[#F44816] text-white flex items-center justify-center font-black text-lg flex-shrink-0 font-heading shadow-md">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white font-heading leading-tight">
                    You are in safe hands
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200 font-body mt-0.5">
                    Over 40 years to perfect the quality of our customer service
                  </p>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-heading relative z-10">
                <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>5.0 Average Rating</span>
                </span>
                <span className="text-white font-bold tracking-wide">
                  24/7 Availability
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x2 FEATURE GRID */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            
            {/* FEATURE 01 — You are in safe hands */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B82C3]/10 text-[#0B82C3] border border-[#0B82C3]/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Sparkles className="w-6 h-6 text-[#0B82C3]" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-[#0B82C3] bg-[#0B82C3]/10 px-2.5 py-1 rounded-full border border-[#0B82C3]/20">
                    01
                  </span>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#0B82C3] to-[#F44816] w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-[24px] font-bold text-[#10243E] mb-2 font-heading">
                  You are in safe hands
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  As one of Long Island&apos;s oldest heating and cooling companies, we’ve had over 40 years to perfect the quality of our customer service. While technology keeps improving, we have never forgotten that it’s the people that matter, from our technicians to your family.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-xs font-bold text-[#0B82C3] font-heading">
                <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0" />
                <span>Over 40 Years Experience</span>
              </div>
            </div>

            {/* FEATURE 02 — Expertise and Reliability (Highlighted Soft Orange card) */}
            <div className="bg-[#FFF1EB] text-[#10243E] rounded-2xl p-6 sm:p-7 border border-[#F44816]/30 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group motion-reduce:transform-none">
              <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-[#F44816]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F44816] text-white flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-black font-heading tracking-widest text-[#F44816] bg-white/80 px-2.5 py-1 rounded-full border border-[#F44816]/20">
                    02
                  </span>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#F44816] to-[#0B82C3] w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-[24px] font-bold text-[#10243E] mb-2 font-heading">
                  Expertise and Reliability
                </h3>
                <p className="text-base text-slate-700 leading-relaxed font-body">
                  Our technicians love what they do. It shows in everything from their delight in ongoing education to just arriving at your door on time. Whether it’s ongoing training or handling projects like boiler installation and repair, our technicians focus on delivering dependable solutions.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F44816]/20 flex items-center gap-1.5 text-xs sm:text-xs font-bold text-[#F44816] font-heading relative z-10">
                <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0" />
                <span>Dependable Solutions</span>
              </div>
            </div>

            {/* FEATURE 03 — Always Available */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF1EB] text-[#F44816] border border-[#F44816]/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Zap className="w-6 h-6 text-[#F44816]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-[#F44816] uppercase tracking-wider bg-[#FFF1EB] px-2 py-0.5 rounded-md border border-[#F44816]/30 font-heading">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F44816] animate-ping" />
                      24/7 Service
                    </span>
                    <span className="text-xs font-black font-heading tracking-widest text-[#F44816] bg-[#FFF1EB] px-2.5 py-1 rounded-full border border-[#F44816]/30">
                      03
                    </span>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#F44816] to-[#0B82C3] w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-[24px] font-bold text-[#10243E] mb-2 font-heading">
                  Always Available
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-body">
                  We’re there for you 24 hours 7 days a week, when you need us. Contact us for a consultation, estimate, or any questions you might have about your project or our work.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-xs font-bold text-[#F44816] font-heading">
                <CheckCircle2 className="w-4 h-4 text-[#F44816] flex-shrink-0" />
                <span>24 Hours 7 Days a Week</span>
              </div>
            </div>

            {/* FEATURE 04 — Signs Your HVAC System May Need Attention */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B82C3]/10 text-[#0B82C3] border border-[#0B82C3]/20 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 flex-shrink-0 motion-reduce:transform-none">
                    <Medal className="w-6 h-6 text-[#0B82C3]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black font-heading tracking-widest text-[#0B82C3] bg-[#0B82C3]/10 px-2.5 py-1 rounded-full border border-[#0B82C3]/20">
                      04
                    </span>
                  </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-[#0B82C3] to-[#F44816] w-12 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                <h3 className="text-[24px] font-bold text-[#10243E] mb-2 font-heading">
                  Signs Your HVAC System May Need Attention
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-body mb-3">
                  Heating and cooling systems often show warning signs before a larger problem develops. If you notice unusual noises, uneven temperatures, weak airflow, or rising energy bills, your system may be struggling to operate efficiently. Paying attention to these early indicators can help prevent bigger issues and keep your home or business comfortable throughout the year.
                </p>
                <p className="text-sm text-slate-700 font-semibold font-body">
                  If your system is showing these signs, you can explore air conditioner repair and maintenance to address potential problems early.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs sm:text-xs font-bold text-[#0B82C3] font-heading">
                <CheckCircle2 className="w-4 h-4 text-[#0B82C3] flex-shrink-0" />
                <span>Prevent Bigger Issues</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
