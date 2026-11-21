'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem } from '../ServicesSection';
import { X, CheckCircle2, Phone, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onOpenBooking,
}: ServiceDetailModalProps) {
  if (!service) return null;

  const overview = service.fullDesc || service.description;
  const featuresList = service.features || service.bullets || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header with image */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-slate-900">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center text-sm font-bold z-10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6 text-white font-heading">
            <span className="inline-block px-2.5 py-0.5 rounded bg-royal text-white text-[11px] font-extrabold uppercase tracking-wider mb-1.5 font-heading">
              {service.category} Solution
            </span>
            <h3 className="text-[24px] font-black leading-tight drop-shadow-md font-heading">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-royal mb-1.5 font-heading">
              Service Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
              {overview}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-royal mb-2.5 font-heading">
              What&apos;s Included In This Service
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-body">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-slate-800 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="p-3.5 rounded-xl bg-royal/10 border border-royal/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-royal flex-shrink-0" />
              <div>
                <p className="text-xs font-black text-navy uppercase font-heading">100% Workmanship Warranty</p>
                <p className="text-[11px] text-slate-600 font-body">All installations & repairs backed by licensed master technicians.</p>
              </div>
            </div>
            <span className="text-xs font-bold text-royal hidden sm:inline font-heading">24/7 Support</span>
          </div>

          {/* Dedicated Page Link for Boiler or other linked services */}
          {service.href && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy font-heading uppercase tracking-wide">
                  Dedicated Service Guide Available
                </p>
                <p className="text-xs text-slate-600 font-body">
                  View full boiler repair diagnostics, installation specs, and pricing details.
                </p>
              </div>
              <Link
                href={service.href}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-royal hover:bg-royal-hover text-white text-xs font-bold font-heading uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap"
              >
                <span>View Boiler Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 font-heading">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3.5 rounded-lg bg-hvacGreen hover:bg-hvacGreen-hover text-white font-black text-sm shadow-md transition-all text-center flex items-center justify-center gap-2 font-heading uppercase tracking-wider"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Service Now</span>
            </button>
            <a
              href={PHONE_TEL}
              className="py-3.5 px-6 rounded-lg bg-navy hover:bg-navy-light text-white font-black text-sm text-center flex items-center justify-center gap-2 font-heading uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-brightYellow" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
