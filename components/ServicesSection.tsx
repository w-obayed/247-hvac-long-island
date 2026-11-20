'use client';

import React from 'react';
import Image from 'next/image';
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
}

export const HVAC_SERVICES: ServiceItem[] = [
  {
    id: 'furnace',
    title: 'Furnace Installation, Repair & Replacement',
    category: 'heating',
    description: 'Our technicians handle system installations, repairs, and replacements across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/furnace-installation.jpg',
    icon: Flame,
    bullets: ['System installations, repairs, and replacements', 'Residential and commercial heating solutions', 'Airflow and indoor comfort optimization'],
    features: ['Furnace installation and replacement', 'Emergency heating system repairs', 'Air duct and ventilation cleaning services', 'Airflow and indoor comfort testing'],
  },
  {
    id: 'boiler',
    title: 'Boiler Installation, Repair & Replacement',
    category: 'heating',
    description: 'Our technicians handle boiler installations, repairs, and replacements across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/boiller-installation-repair-e1661179456943.jpg',
    icon: Droplets,
    bullets: ['Boiler installation, repair & replacement', 'Dependable heating solutions', 'Improve airflow and indoor comfort'],
    features: ['Boiler system repairs and replacements', 'Hydronic and steam heating service', 'Air duct and ventilation inspections', 'Comprehensive comfort solutions'],
  },
  {
    id: 'water-heater',
    title: 'Water Heater Installation, Repair & Replacement',
    category: 'heating',
    description: 'Our technicians handle water heater installations, repairs, and replacements across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/water-heater-installation.jpg',
    icon: Droplets,
    bullets: ['Water heater installations & replacements', 'Fast emergency water heater repair', 'Reliable hot water solutions'],
    features: ['Water heater replacement and installation', 'Precision diagnostics and repairs', 'Ventilation and airflow inspections', 'Energy-efficient hot water solutions'],
  },
  {
    id: 'air-conditioner',
    title: 'Air Conditioners Installation & Replacement',
    category: 'cooling',
    description: 'Our technicians handle air conditioner installations and replacements across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/air-con-installation.jpg',
    icon: Snowflake,
    bullets: ['Air conditioners installation & replacement', 'High efficiency cooling systems', 'Air duct and ventilation cleaning'],
    features: ['Complete air conditioning installation', 'Energy-efficient system replacement', 'Airflow balancing and duct inspection', 'Dependable residential & commercial cooling'],
  },
  {
    id: 'ac-repair',
    title: 'Air Conditioners Repair & Maintenance',
    category: 'cooling',
    description: 'Our technicians handle air conditioner repairs and routine maintenance across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/ac-installation-bd.jpg',
    icon: Wrench,
    bullets: ['Air conditioners repair & maintenance', 'Address potential problems early', 'Improve airflow and indoor comfort'],
    features: ['Prompt cooling system repairs', 'Comprehensive seasonal maintenance', 'Air duct and ventilation cleaning', 'Prevent bigger issues and reduce energy bills'],
  },
  {
    id: 'mini-split',
    title: 'Mini Splits Installation, Repair & Replacement',
    category: 'cooling',
    description: 'Our technicians handle mini splits installations, repairs, and replacements across Long Island.',
    fullDesc: 'We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.',
    image: '/image-website/heat-pump-installation.jpg',
    icon: Layers,
    bullets: ['Mini splits installation, repair & replacement', 'Multi-zone heating and cooling', 'High efficiency ductless systems'],
    features: ['Ductless mini split installations', 'System repairs and replacements', 'Zone temperature control balancing', 'Clean airflow and superior comfort'],
  },
];

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export default function ServicesSection({ onSelectService, onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F7FA] text-slate-800">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-[#0B82C3] mb-2 block font-heading">
            Heating & Cooling Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#10243E] tracking-tight mb-4 font-heading">
            Our Residential & Commercial HVAC Services in Long Island
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-body">
            We provide a full range of cooling and heating services to keep homes and businesses comfortable throughout the year. Our technicians handle system installations, repairs, and replacements across Long Island, while also offering air duct and ventilation cleaning services to help improve airflow and indoor comfort.
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
                        service.category === 'heating' ? 'bg-[#F44816]' : 'bg-[#0B82C3]'
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
                    <h3 className="text-[24px] font-bold text-[#10243E] mb-2.5 group-hover:text-[#0B82C3] transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-base text-slate-600 leading-relaxed mb-4 font-body">
                      {service.description}
                    </p>

                    {/* Feature bullets */}
                    <ul className="space-y-1.5 mb-6 font-body">
                      {service.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs sm:text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B82C3] flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions: Learn More & Book Now */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3 font-heading">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B82C3] hover:text-[#086396] group/link font-heading tracking-wide uppercase transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F44816] text-white text-xs sm:text-xs font-black shadow hover:bg-[#d93d10] active:scale-95 transition-all font-heading uppercase tracking-wider"
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
