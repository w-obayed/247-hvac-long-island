'use client';

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
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
    id: 'queens',
    name: 'Queens',
    dispatchTime: '30-45 Min Dispatch',
    description: 'Rapid heating and cooling emergency diagnostics, rooftop commercial units, and home air conditioning maintenance throughout Queens.',
    communities: ['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach'],
    keyServices: ['Rooftop Package Units', 'Furnace Heat Exchanger Service', 'Commercial Refrigeration'],
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
  return (
    <section id="service-areas" className="py-16 md:py-24 bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-royal/10 text-royal text-xs font-black uppercase tracking-wider mb-2 font-heading">
            <MapPin className="w-3.5 h-3.5 text-royal" />
            <span>Local Service Coverage</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
            Proudly Serving Long Island and Surrounding Areas
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
            We proudly serve Nassau, Queens, Suffolk County, Brooklyn, Manhattan and surrounding Long Island communities with 24/7 radio-dispatched mobile units.
          </p>
        </div>

        {/* 5 Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* County Emblem */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <CountyEmblem type={area.id as any} className="w-full h-full" />
                  </div>
                  <span className="text-[11px] font-bold text-brightRed bg-red-50 border border-red-200 px-2 py-0.5 rounded-full font-heading">
                    {area.dispatchTime}
                  </span>
                </div>

                {/* Location Name */}
                <h3 className="text-lg font-bold text-navy group-hover:text-royal transition-colors mb-2 font-heading">
                  {area.name}
                </h3>

                {/* Description - Inter */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3 font-body">
                  {area.description}
                </p>

                {/* Major Towns */}
                <div className="flex flex-wrap gap-1 mb-5 font-body">
                  {area.communities.slice(0, 4).map((c) => (
                    <span key={c} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium font-body">
                      {c}
                    </span>
                  ))}
                  {area.communities.length > 4 && (
                    <span className="text-[10px] text-slate-400 font-medium font-body">
                      +{area.communities.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* View Locations Button (Roboto Condensed) */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectArea(area)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-navy hover:bg-royal text-white text-xs font-bold transition-colors shadow-sm font-heading uppercase tracking-wide"
                >
                  <span>View Locations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
