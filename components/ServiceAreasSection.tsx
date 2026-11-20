'use client';

import React from 'react';
import { MapPin, ArrowRight, Radio, CheckCircle2, Navigation, Clock } from 'lucide-react';
import { CountyEmblem } from './CountyEmblems';

export interface ServiceAreaItem {
  id: string;
  name: string;
  dispatchTime: string;
  description: string;
  communities: string[];
  keyServices: string[];
}

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    id: 'nassau',
    name: 'Nassau County',
    dispatchTime: '30-45 Min Dispatch',
    description: 'Our team is ready to help throughout Nassau County with dependable heating and cooling services across residential and commercial properties.',
    communities: ['East Rockaway', 'Long Beach', 'Hewlett', 'Woodmere', 'Oceanside', 'Malverne', 'Lynbrook', 'Lawrence'],
    keyServices: ['Heating & AC System Repairs', 'Installations & Replacements', 'Routine HVAC Maintenance'],
  },
  {
    id: 'suffolk',
    name: 'Suffolk County',
    dispatchTime: '35-50 Min Dispatch',
    description: 'Heating and cooling services to homeowners and businesses across Suffolk County communities.',
    communities: ['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Brookhaven', 'Riverhead', 'Melville', 'Commack'],
    keyServices: ['Heating System Repairs', 'AC Installation & Replacement', 'Air Duct & Ventilation Cleaning'],
  },
  {
    id: 'queens',
    name: 'Queens',
    dispatchTime: '30-45 Min Dispatch',
    description: 'Dependable heating and cooling solutions across Queens communities.',
    communities: ['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach'],
    keyServices: ['Residential & Commercial HVAC', 'Emergency 24/7 Dispatch', 'System Maintenance & Repairs'],
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    dispatchTime: '35-55 Min Dispatch',
    description: 'Professional heating, cooling, and mini-split solutions across Brooklyn.',
    communities: ['Bay Ridge', 'Park Slope', 'Williamsburg', 'Flatbush', 'Brooklyn Heights', 'Dyker Heights'],
    keyServices: ['Ductless Mini Splits', 'Boiler & Furnace Service', 'Air Conditioning Maintenance'],
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    dispatchTime: '45-60 Min Dispatch',
    description: 'Professional HVAC repair, maintenance, and climate solutions across Manhattan.',
    communities: ['Upper East Side', 'Upper West Side', 'Midtown', 'Financial District', 'Chelsea', 'Tribeca'],
    keyServices: ['Heating & Cooling Solutions', 'Emergency HVAC Repairs', 'Routine Maintenance Service'],
  },
];

interface ServiceAreasSectionProps {
  onSelectArea: (area: ServiceAreaItem) => void;
}

export default function ServiceAreasSection({ onSelectArea }: ServiceAreasSectionProps) {
  const nassauArea = SERVICE_AREAS[0];
  const surroundingAreas = SERVICE_AREAS.slice(1);

  return (
    <section id="service-areas" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F5F7FA] text-slate-800 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#0B82C3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F44816]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            ROW 1: ASYMMETRIC SPLIT (Introduction + Nassau County Flagship)
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6 sm:mb-8">
          
          {/* SECTION INTRODUCTION CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#10243E] via-[#173254] to-[#10243E] text-white p-5 sm:p-7 lg:p-8 shadow-xl border border-white/10 relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#0B82C3]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#0B82C3] text-xs sm:text-xs font-black uppercase tracking-widest mb-3.5 sm:mb-4 font-heading border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-[#0B82C3] animate-pulse flex-shrink-0" />
                <span>Communities Served</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15] mb-3.5 sm:mb-4 font-heading">
                Service Areas
              </h2>

              {/* Description */}
              <p className="text-base text-slate-200 leading-relaxed font-body mb-6">
                Our technicians proudly provide heating and cooling services to homeowners and businesses across multiple communities. Whether you need system repairs, installations, or routine maintenance, our team is ready to help throughout Nassau County, including East Rockaway, Long Beach, Hewlett, Woodmere, Oceanside, Malverne, Lynbrook, and Lawrence, as well as neighboring areas across Suffolk County, Queens, Brooklyn, and Manhattan.
              </p>
            </div>

            {/* Live Fleet Dispatch Telemetry Status */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-xs font-heading">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <span className="text-white font-bold block leading-tight truncate">24/7 Mobile Fleet</span>
                  <span className="text-[11px] text-slate-300 font-body block truncate">Average 30–45 Min Dispatch</span>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Units Active
              </span>
            </div>
          </div>

          {/* FEATURED FLAGSHIP CARD: NASSAU COUNTY (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border-2 border-[#0B82C3]/30 shadow-lg hover:shadow-2xl hover:border-[#0B82C3] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 motion-reduce:transform-none">
            {/* Top Animated Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-[#0B82C3] via-[#F44816] to-[#0B82C3] w-16 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header: County Emblem + Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center p-1.5 sm:p-2 group-hover:scale-105 transition-transform shadow-sm flex-shrink-0 motion-reduce:transform-none">
                      <CountyEmblem type="nassau" className="w-full h-full" />
                    </div>
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0B82C3] text-white text-[11px] sm:text-[10px] font-black uppercase tracking-wider font-heading mb-1 shadow-sm">
                        <span>Primary Service Hub</span>
                      </div>
                      <h3 className="text-[24px] font-black text-[#10243E] group-hover:text-[#0B82C3] transition-colors font-heading leading-tight truncate sm:overflow-visible">
                        {nassauArea.name}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F44816] bg-[#FFF1EB] border border-[#F44816]/30 px-3 py-1 rounded-full font-heading flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-[#F44816] flex-shrink-0" />
                    <span>{nassauArea.dispatchTime}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed mb-5 font-body">
                  {nassauArea.description}
                </p>

                {/* Key Services & Communities Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-[#10243E] uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-[#0B82C3] flex-shrink-0" />
                      <span>Key Communities</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 font-body">
                      {nassauArea.communities.map((c) => (
                        <span key={c} className="text-[11px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200/60 leading-tight">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#10243E] uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B82C3] flex-shrink-0" />
                      <span>Core Capabilities</span>
                    </h4>
                    <div className="space-y-1.5 font-body">
                      {nassauArea.keyServices.map((service) => (
                        <div key={service} className="flex items-start gap-2 text-xs sm:text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B82C3] flex-shrink-0 mt-1.5" />
                          <span className="leading-tight">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-body text-center sm:text-left">
                  North & South Shore full coverage
                </span>
                <button
                  onClick={() => onSelectArea(nassauArea)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg bg-[#10243E] hover:bg-[#0B82C3] text-white text-sm sm:text-sm font-bold transition-all shadow-md font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>View Locations</span>
                  <ArrowRight className="w-4 h-4 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            ROW 2: BALANCED 4-COLUMN REGIONAL SHOWCASE
           ============================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {surroundingAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group motion-reduce:transform-none h-full"
            >
              <div>
                {/* Animated Accent Line */}
                <div className="h-1 bg-gradient-to-r from-slate-200 via-[#0B82C3] to-[#F44816] w-10 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Emblem + Dispatch Pill Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shadow-sm flex-shrink-0 motion-reduce:transform-none">
                    <CountyEmblem type={area.id as any} className="w-full h-full" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#F44816] bg-[#FFF1EB] border border-[#F44816]/30 px-2.5 py-0.5 rounded-full font-heading flex-shrink-0">
                    <Clock className="w-3 h-3 text-[#F44816] flex-shrink-0" />
                    <span>{area.dispatchTime}</span>
                  </span>
                </div>

                {/* Region Title */}
                <h3 className="text-[24px] font-bold text-[#10243E] group-hover:text-[#0B82C3] transition-colors mb-2 font-heading leading-tight">
                  {area.name}
                </h3>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed mb-4 font-body">
                  {area.description}
                </p>

                {/* Communities Tags */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-heading">
                    Neighborhoods
                  </span>
                  <div className="flex flex-wrap gap-1 font-body">
                    {area.communities.map((c) => (
                      <span key={c} className="text-[11px] sm:text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200/50 leading-tight">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Service Highlights */}
                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 font-body">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1 font-heading">
                    Key Services
                  </span>
                  {area.keyServices.map((service) => (
                    <div key={service} className="flex items-start gap-1.5 text-xs sm:text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B82C3] flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Locations CTA Button (Pinned to Bottom) */}
              <div className="pt-3 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => onSelectArea(area)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#10243E] hover:bg-[#0B82C3] text-white text-sm sm:text-sm font-bold transition-all shadow-sm font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>{area.id === 'manhattan' ? 'Manhattan Areas »' : 'View Locations'}</span>
                  {area.id !== 'manhattan' && <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
