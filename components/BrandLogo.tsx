import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export default function BrandLogo({
  variant = 'light',
  size = 'md',
  showTagline = true,
}: BrandLogoProps) {
  const isDark = variant === 'dark';

  const mascotSizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 md:w-14 md:h-14',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Mascot Graphic */}
      <div
        className={`relative ${mascotSizes[size]} flex-shrink-0 rounded-full bg-gradient-to-br from-white to-slate-100 p-1 shadow-md border-2 border-royal flex items-center justify-center overflow-hidden`}
        title="247 HVAC of Long Island Mascot"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle badge */}
          <circle cx="50" cy="50" r="48" fill="#F4F8FD" />
          <circle cx="50" cy="50" r="44" stroke="#0066CC" strokeWidth="2.5" strokeDasharray="3 2" />

          {/* Technician Body / Red Uniform */}
          <path
            d="M20 90C20 74 32 68 50 68C68 68 80 74 80 90C80 96 20 96 20 90Z"
            fill="#E50914"
          />
          {/* Collar / Details */}
          <path d="M42 68L50 80L58 68" fill="#061A40" />
          <path d="M48 68L50 90L52 68" stroke="#FFFFFF" strokeWidth="1.5" />

          {/* Technician Head */}
          <ellipse cx="50" cy="46" rx="19" ry="21" fill="#FFD5B2" />
          {/* Friendly Smile */}
          <path
            d="M42 54C45 58 55 58 58 54"
            stroke="#633112"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Eyes */}
          <ellipse cx="43" cy="44" rx="2.5" ry="3" fill="#1A202C" />
          <ellipse cx="57" cy="44" rx="2.5" ry="3" fill="#1A202C" />
          {/* Rosy cheeks */}
          <circle cx="39" cy="49" r="3" fill="#FFAAA6" opacity="0.6" />
          <circle cx="61" cy="49" r="3" fill="#FFAAA6" opacity="0.6" />

          {/* Red Baseball Cap */}
          <path
            d="M29 38C29 24 40 18 50 18C60 18 71 24 71 38C62 36 38 36 29 38Z"
            fill="#E50914"
          />
          {/* Cap Visor */}
          <path
            d="M26 38C38 34 62 34 78 40C68 44 32 44 26 38Z"
            fill="#C20710"
          />
          {/* Cap Logo */}
          <circle cx="50" cy="28" r="5" fill="#FFE500" />
          <text
            x="50"
            y="31"
            fontSize="6"
            fontWeight="bold"
            textAnchor="middle"
            fill="#061A40"
          >
            24/7
          </text>

          {/* Wrench */}
          <g transform="translate(14, 45) rotate(-28)">
            <rect x="0" y="8" width="6" height="26" rx="2" fill="#718096" />
            <path
              d="M-3 2C-3 -4 9 -4 9 2C6 3 6 7 9 8C-3 8 0 3 -3 2Z"
              fill="#A0AEC0"
              stroke="#4A5568"
              strokeWidth="1.2"
            />
          </g>
          {/* Hand holding wrench */}
          <circle cx="28" cy="62" r="6" fill="#FFD5B2" />
        </svg>
      </div>

      {/* Brand Text - Roboto Condensed */}
      <div className="flex flex-col leading-tight font-heading">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              isDark ? 'text-white' : 'text-[#061A40]'
            }`}
          >
            247 HVAC
          </span>
          <span
            className={`font-bold uppercase tracking-wide text-xs md:text-sm ${
              isDark ? 'text-electric' : 'text-royal'
            }`}
          >
            Of Long Island
          </span>
        </div>

        {showTagline && (
          <div className="flex items-center gap-1.5 text-[11px] md:text-xs font-semibold mt-0.5 tracking-tight font-heading">
            <span className="text-brightRed">Heating</span>
            <span className="text-slate-400">•</span>
            <span className="text-royal">Cooling</span>
            <span className="text-slate-400">•</span>
            <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
              Air Conditioners
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
