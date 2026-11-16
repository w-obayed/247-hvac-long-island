'use client';

import React from 'react';
import { HVAC_BRANDS } from '@/data/brands';

export default function ManufacturerStrip() {
  // Duplicate the brand list to create an uninterrupted, infinite loop
  const duplicatedBrands = [...HVAC_BRANDS, ...HVAC_BRANDS];

  return (
    <div
      className="w-full bg-white border-b border-slate-200 py-3.5 sm:py-4 overflow-hidden select-none relative z-10"
      aria-label="Authorized HVAC Manufacturer Logos"
    >
      <div className="relative w-full overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="animate-marquee-continuous flex items-center gap-6 sm:gap-8 md:gap-10">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-4 py-1 h-10 sm:h-12 min-w-[170px] sm:min-w-[210px] transition-transform duration-200 hover:scale-105 cursor-pointer"
              title={`${brand.name} Authorized Service & Installation — ${brand.category}`}
            >
              {brand.renderLogo()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
