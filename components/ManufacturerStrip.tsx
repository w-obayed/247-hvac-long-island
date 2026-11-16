'use client';

import React from 'react';
import { HVAC_BRANDS } from '@/data/brands';

export default function ManufacturerStrip() {
  // Duplicate the brand list to create an uninterrupted, infinite loop
  const duplicatedBrands = [...HVAC_BRANDS, ...HVAC_BRANDS];

  return (
    <div
      className="w-full bg-slate-50 border-b border-slate-200 py-2.5 overflow-hidden select-none relative z-10"
      aria-label="Authorized HVAC Brands and Manufacturers"
    >
      <div className="relative w-full overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="animate-marquee-continuous flex items-center gap-10 md:gap-14">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center px-2 py-0.5 transition-transform duration-200 hover:scale-105 cursor-pointer"
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
