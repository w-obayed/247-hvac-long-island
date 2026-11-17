'use client';

import React from 'react';
import { ServiceAreaItem } from '../ServiceAreasSection';
import { CountyEmblem } from '../CountyEmblems';
import { Phone, X, CheckCircle2 } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

interface ServiceAreaModalProps {
  area: ServiceAreaItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export default function ServiceAreaModal({
  area,
  onClose,
  onOpenBooking,
}: ServiceAreaModalProps) {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#061A40] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex-shrink-0 bg-white/10 rounded-xl p-1 flex items-center justify-center border border-white/20">
              <CountyEmblem type={area.id as any} className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-[24px] font-black tracking-tight font-heading">{area.name}</h3>
              <p className="text-xs text-electric font-semibold font-heading">{area.dispatchTime}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
            {area.description}
          </p>

          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-royal mb-2.5 font-heading">
              Popular Towns & Neighborhoods Covered
            </h4>
            <div className="flex flex-wrap gap-1.5 font-body">
              {area.communities.map((town) => (
                <span
                  key={town}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-navy font-bold text-xs border border-slate-200"
                >
                  📍 {town}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-royal mb-2.5 font-heading">
              Key Services Available in {area.name}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-700 font-body">
              {area.keyServices.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hvacGreen flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Alert Box */}
          <div className="p-3.5 bg-red-50 rounded-xl border border-red-200 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-black text-brightRed font-heading">Emergency In {area.name}?</p>
              <p className="text-[11px] text-slate-600 font-body">Trucks on call 24 hours / 7 days a week.</p>
            </div>
            <a
              href={PHONE_TEL}
              className="px-3.5 py-2 rounded-lg bg-brightRed text-white text-xs font-extrabold hover:bg-brightRed-hover shadow flex items-center gap-1.5 flex-shrink-0 font-heading uppercase tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{PHONE_NUMBER}</span>
            </a>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex gap-3 font-heading">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="flex-1 py-3 rounded-lg bg-hvacGreen hover:bg-hvacGreen-hover text-white font-black text-sm shadow-md active:scale-95 transition-all font-heading uppercase tracking-wider"
            >
              Book Service in {area.name}
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 rounded-lg border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors font-heading uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
