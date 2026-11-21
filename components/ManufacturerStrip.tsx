'use client';

import React from 'react';
import Image from 'next/image';

interface SliderLogo {
  id: number;
  src: string;
  alt: string;
}

// 18 manufacturer brand logos in exact sequential order from brand-logo-1 to brand-logo-18
const MANUFACTURER_LOGOS: SliderLogo[] = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/slider-images/brand-logo-${i + 1}.webp`,
  alt: `HVAC Manufacturer Partner Brand Logo ${i + 1}`,
}));

export default function ManufacturerStrip() {
  // Duplicate the 18 logos to create a seamless infinite continuous marquee loop
  const duplicatedLogos = [...MANUFACTURER_LOGOS, ...MANUFACTURER_LOGOS];

  return (
    <div
      className="w-full bg-white border-b border-slate-200 py-3.5 sm:py-4 overflow-hidden select-none relative z-10"
      aria-label="Authorized HVAC Manufacturer Logos"
    >
      <div className="relative w-full overflow-hidden">
        {/* Continuous Marquee Track */}
        <div className="animate-marquee-continuous flex items-center gap-6 sm:gap-8 md:gap-10">
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.id}-${idx}`}
              className="flex-shrink-0 flex items-center justify-center w-[160px] sm:w-[180px] md:w-[200px] h-10 sm:h-12 px-3 py-1 transition-transform duration-200 hover:scale-105 cursor-pointer"
              title={logo.alt}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, 200px"
                  className="object-contain object-center select-none pointer-events-none"
                  priority={idx < 8}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
