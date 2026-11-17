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
    description: 'Providing comprehensive residential & commercial HVAC repair, furnace replacement, and mini-split installations across Long Island North & South Shores.',
    communities: ['Hempstead', 'Garden City', 'Oyster Bay', 'North Hempstead', 'Long Beach', 'Glen Cove', 'Mineola', 'Great Neck'],
    keyServices: ['Emergency Boiler Repair', 'AC Condenser Replacement', 'Ductless Heat Pumps'],
  },
  {
    id: 'suffolk',
    name: 'Suffolk County',
    dispatchTime: '35-50 Min Dispatch',
    description: 'Extensive heating and cooling repair services across Western & Central Suffolk with fully equipped service vehicles.',
    communities: ['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Brookhaven', 'Riverhead', 'Melville', 'Commack'],
    keyServices: ['Oil-to-Gas Conversions', 'High SEER Central AC', 'Hydronic Heating Repair'],
  },
  {
    id: 'queens',
    name: 'Queens',
    dispatchTime: '30-45 Min Dispatch',
    description: 'Rapid heating and cooling emergency diagnostics, rooftop commercial units, and home air conditioning maintenance throughout Queens.',
    communities: ['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach'],
    keyServices: ['Rooftop Package Units', 'Furnace Heat Exchanger Service', 'Commercial Refrigeration'],
  },
  {
    id: 'brooklyn',
    name: 'Brooklyn',
    dispatchTime: '35-55 Min Dispatch',
    description: 'Specialized ductless mini-split systems, steam boiler tune-ups, and modern air conditioning for historic brownstones & modern apartments.',
    communities: ['Bay Ridge', 'Park Slope', 'Williamsburg', 'Flatbush', 'Brooklyn Heights', 'Dyker Heights'],
    keyServices: ['Brownstone Ductless AC', 'Steam Boiler Re-piping', 'Multi-Zone Climate Systems'],
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    dispatchTime: '45-60 Min Dispatch',
    description: 'EPA-certified technicians handling PTAC, water source heat pumps, and luxury residential & boutique commercial HVAC systems.',
    communities: ['Upper East Side', 'Upper West Side', 'Midtown', 'Financial District', 'Chelsea', 'Tribeca'],
    keyServices: ['Water Source Heat Pumps', 'PTAC & Fan Coil Repair', 'Quiet Inverter Systems'],
  },
];

interface ServiceAreasSectionProps {
  onSelectArea: (area: ServiceAreaItem) => void;
}

export default function ServiceAreasSection({ onSelectArea }: ServiceAreasSectionProps) {
  const nassauArea = SERVICE_AREAS[0];
  const surroundingAreas = SERVICE_AREAS.slice(1);

  return (
    <section id="service-areas" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==============================================================
            ROW 1: ASYMMETRIC SPLIT (Introduction + Nassau County Flagship)
           ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-6 sm:mb-8">
          
          {/* SECTION INTRODUCTION CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#061A40] via-[#0A2E6E] to-[#061A40] text-white p-5 sm:p-7 lg:p-8 shadow-xl border border-royal/30 relative overflow-hidden group">
            {/* Ambient Glow */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-royal/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-electric text-[11px] sm:text-xs font-black uppercase tracking-widest mb-3.5 sm:mb-4 font-heading border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-electric animate-pulse flex-shrink-0" />
                <span>Local Service Coverage</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.15] mb-3.5 sm:mb-4 font-heading">
                Proudly Serving Long Island and <span className="text-electric">Surrounding Areas</span>
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-body mb-6">
                We proudly serve Nassau, Queens, Suffolk County, Brooklyn, Manhattan and surrounding Long Island communities with 24/7 radio-dispatched mobile units.
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
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border-2 border-royal/30 shadow-lg hover:shadow-2xl hover:border-royal transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 motion-reduce:transform-none">
            {/* Top Animated Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-royal via-electric to-royal w-16 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

            <div className="flex-1 flex flex-col justify-between">
              <div>
                {/* Header: County Emblem + Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center p-1.5 sm:p-2 group-hover:scale-105 transition-transform shadow-sm flex-shrink-0 motion-reduce:transform-none">
                      <CountyEmblem type="nassau" className="w-full h-full" />
                    </div>
                    <div className="min-w-0">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-royal text-white text-[10px] font-black uppercase tracking-wider font-heading mb-1 shadow-sm">
                        <span>Primary Service Hub</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-navy group-hover:text-royal transition-colors font-heading leading-tight truncate sm:overflow-visible">
                        {nassauArea.name}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brightRed bg-red-50 border border-red-200 px-3 py-1 rounded-full font-heading flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-brightRed flex-shrink-0" />
                    <span>{nassauArea.dispatchTime}</span>
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-body">
                  {nassauArea.description}
                </p>

                {/* Key Services & Communities Breakdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5 pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5">
                      <Navigation className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                      <span>Key Communities</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5 font-body">
                      {nassauArea.communities.map((c) => (
                        <span key={c} className="text-[10px] sm:text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200/60 leading-tight">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-navy uppercase tracking-wider mb-2 font-heading flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen flex-shrink-0" />
                      <span>Core Capabilities</span>
                    </h4>
                    <div className="space-y-1.5 font-body">
                      {nassauArea.keyServices.map((service) => (
                        <div key={service} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-royal flex-shrink-0 mt-1.5" />
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg bg-navy hover:bg-royal text-white text-xs sm:text-sm font-bold transition-all shadow-md font-heading uppercase tracking-wider min-h-[44px]"
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
                <div className="h-1 bg-gradient-to-r from-slate-200 via-royal to-electric w-10 group-hover:w-full transition-all duration-500 rounded-full mb-4" />

                {/* Emblem + Dispatch Pill Header */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform shadow-sm flex-shrink-0 motion-reduce:transform-none">
                    <CountyEmblem type={area.id as any} className="w-full h-full" />
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brightRed bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full font-heading flex-shrink-0">
                    <Clock className="w-3 h-3 text-brightRed flex-shrink-0" />
                    <span>{area.dispatchTime}</span>
                  </span>
                </div>

                {/* Region Title */}
                <h3 className="text-lg font-bold text-navy group-hover:text-royal transition-colors mb-2 font-heading leading-tight">
                  {area.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 font-body">
                  {area.description}
                </p>

                {/* Communities Tags (Full natural wrap without awkward clipping) */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5 font-heading">
                    Neighborhoods
                  </span>
                  <div className="flex flex-wrap gap-1 font-body">
                    {area.communities.map((c) => (
                      <span key={c} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium border border-slate-200/50 leading-tight">
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
                    <div key={service} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Locations CTA Button (Pinned to Bottom) */}
              <div className="pt-3 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => onSelectArea(area)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-navy hover:bg-royal text-white text-xs sm:text-sm font-bold transition-all shadow-sm font-heading uppercase tracking-wider min-h-[44px]"
                >
                  <span>View Locations</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
