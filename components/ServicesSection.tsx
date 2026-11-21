'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Flame,
  Snowflake,
  Droplets,
  Wrench,
  Layers,
  ArrowRight,
  Calendar,
  CheckCircle2
} from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'heating' | 'cooling';
  description: string;
  fullDesc?: string;
  image: string;
  icon: any;
  bullets: string[];
  features?: string[];
  href?: string;
}

export const HVAC_SERVICES: ServiceItem[] = [
  {
    id: 'furnace',
    title: 'Furnace Installation, Repair & Replacement',
    category: 'heating',
    description: 'Expert diagnostics, emergency heat restoration, and high-efficiency gas/oil furnace installations for Long Island homes.',
    fullDesc: 'When your furnace stops heating in the middle of winter, 247 HVAC provides fast, dependable diagnostics and repairs. We install high-efficiency furnaces (up to 98% AFUE) and repair all major brands with OEM parts.',
    image: '/images/furnace.jpg',
    icon: Flame,
    bullets: ['Same-day emergency furnace repairs', 'High-efficiency 96%+ AFUE replacements', 'OEM heat exchanger & blower motor service'],
    features: ['Heat exchanger leak inspection', 'Blower motor & capacitor testing', 'Safety limit switch diagnostics', 'Thermostat calibration & airflow balancing'],
  },
  {
    id: 'boiler',
    title: 'Boiler Installation, Repair & Replacement',
    category: 'heating',
    description: 'Specialized hydronic radiant heating and steam boiler repair, maintenance, and energy-saving replacements.',
    fullDesc: 'We specialize in hydronic radiant floor heating and steam boilers. Whether diagnosing low water cut-offs, replacing noisy circulators, or installing state-of-the-art condensing gas boilers, our master technicians deliver reliable warmth.',
    image: '/images/boiler.jpg',
    icon: Droplets,
    bullets: ['Steam & hot water boiler repairs', 'Circulator pump & zone valve replacements', 'Annual system tune-ups and efficiency checks'],
    features: ['Zone valve and aquastat testing', 'Pressure relief valve verification', 'Steam trap and radiator purge', 'Combustion efficiency analysis'],
    href: '/boiler-installation-repair',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    category: 'heating',
    description: 'Tankless and conventional hot water heater repairs, replacements, and routine flush maintenance for continuous hot water.',
    fullDesc: 'Never run out of hot water with 247 HVAC water heating solutions. We install and repair high-efficiency tankless and traditional gas/electric water heaters across Nassau and Suffolk counties.',
    image: '/images/water-heater.jpg',
    icon: Droplets,
    bullets: ['On-demand tankless water heating systems', 'Fast emergency leak repairs & replacements', 'Expansion tank & pressure valve installations'],
    features: ['Same-day emergency tank replacements', 'Scale and mineral flush maintenance', 'Gas burner assembly inspection', 'Anode rod and element replacement'],
  },
  {
    id: 'air-conditioner',
    title: 'Air Conditioner Installation & Replacement',
    category: 'cooling',
    description: 'Keep your property cool with top-tier central AC installations, SEER2 upgrades, and customized ductwork configurations.',
    fullDesc: 'Upgrade your home with high-performance, energy-efficient central air conditioning. Our installations comply with the latest SEER2 efficiency regulations, lowering electricity consumption while providing balanced cooling.',
    image: '/images/air-conditioner.jpg',
    icon: Snowflake,
    bullets: ['Energy Star high SEER2 AC equipment', 'Custom ductwork sizing & precision airflow', 'Manufacturer warranty registration included'],
    features: ['Manual J heat-load calculations', 'Precision airflow and ductwork balancing', 'Quiet condenser motor technology', 'Smart WiFi thermostat setup included'],
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioner Repair & Maintenance',
    category: 'cooling',
    description: 'Fast troubleshooting for frozen coils, refrigerant leaks, faulty capacitors, blown fuses, and noisy condenser fans.',
    fullDesc: 'Is your AC blowing warm air or making strange noises? Our certified mobile units carry universal capacitors, contactors, fan motors, and EPA-approved refrigerants to restore cooling on the initial visit.',
    image: '/images/ac-repair.jpg',
    icon: Wrench,
    bullets: ['24/7 emergency AC cooling repairs', 'Comprehensive 21-point system precision tune-up', 'Eco-friendly refrigerant recharge & leak detection'],
    features: ['Electronic refrigerant leak detection', 'Evaporator coil deep chemical clean', 'Electrical connection & amperage test', 'Condensate drain line flush & clear'],
  },
  {
    id: 'mini-split',
    title: 'Mini-Split Installation, Repair & Replacement',
    category: 'cooling',
    description: 'Versatile ductless heat pumps offering independent multi-zone temperature control and ultra-quiet energy savings.',
    fullDesc: 'Ductless mini-split heat pumps offer the ultimate room-by-room heating and cooling flexibility without ductwork. Perfect for room additions, older homes, and year-round multi-zone efficiency.',
    image: '/images/mini-split.jpg',
    icon: Layers,
    bullets: ['Multi-zone and single-room installations', 'Heating & cooling in one compact unit', 'Inverter technology reduces energy bills up to 40%'],
    features: ['Hyper-heating down to -13°F outdoors', 'Individual handheld remote control per zone', 'Whisper-quiet indoor air delivery (as low as 19 dB)', 'Rebate eligible through local utility programs'],
  },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export default function ServicesSection({ onSelectService, onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50 text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-royal mb-2 block font-heading">
            Comprehensive Climate Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4 font-heading">
            Our Residential & Commercial HVAC Services
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-body">
            We provide a full range of heating and cooling services to keep homes and businesses comfortable throughout the year.
          </p>
        </div>

        {/* 6 Professional Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {HVAC_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Service Card Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <div className="absolute top-3.5 left-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md font-heading uppercase tracking-wider ${
                        service.category === 'heating' ? 'bg-brightRed' : 'bg-royal'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="capitalize">{service.category} Service</span>
                    </span>
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {service.href ? (
                      <Link href={service.href}>
                        <h3 className="text-[24px] font-bold text-navy mb-2.5 group-hover:text-royal transition-colors font-heading cursor-pointer">
                          {service.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="text-[24px] font-bold text-navy mb-2.5 group-hover:text-royal transition-colors font-heading">
                        {service.title}
                      </h3>
                    )}
                    <p className="text-base text-slate-600 leading-relaxed mb-4 font-body">
                      {service.description}
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-6 font-body">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-hvacGreen flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions: Learn More & Book Now */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 font-heading">
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:text-royal-hover group/link font-heading tracking-wide uppercase"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => onSelectService(service)}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-royal hover:text-royal-hover group/link font-heading tracking-wide uppercase"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </button>
                    )}

                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-hvacGreen text-white text-xs sm:text-xs font-black shadow hover:bg-hvacGreen-hover active:scale-95 transition-all font-heading uppercase tracking-wider"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
