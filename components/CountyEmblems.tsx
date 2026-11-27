import React from 'react';

interface EmblemProps {
  className?: string;
}

export function NassauSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-amber-50 p-1 border-2 border-amber-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="48" fill="#F8E7B2" stroke="#B8860B" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#003399" strokeWidth="1" strokeDasharray="2 1.5" />
        <text x="50" y="16" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#003399" letterSpacing="1">
          NASSAU COUNTY
        </text>
        <text x="50" y="90" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#003399">
          STATE OF NEW YORK
        </text>
        <path d="M35 30H65V55C65 67 50 75 50 75C50 75 35 67 35 55V30Z" fill="#003399" stroke="#B8860B" strokeWidth="2" />
        <path d="M48 40C48 37 52 37 52 40C52 42 55 44 55 47C55 51 51 53 50 56C49 53 45 51 45 47C45 44 48 42 48 40Z" fill="#FFE000" />
        <circle cx="50" cy="42" r="3" fill="#E60012" />
      </svg>
    </div>
  );
}

export function QueensSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-sky-50 p-1 border-2 border-sky-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="48" fill="#EBF8FF" stroke="#0091DA" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#003399" strokeWidth="1" />
        <text x="50" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#006BFF" letterSpacing="1">
          QUEENS
        </text>
        <text x="50" y="90" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#003399">
          BOROUGH OF QUEENS
        </text>
        <path d="M32 44L41 55L50 42L59 55L68 44L65 65H35L32 44Z" fill="#FFE000" stroke="#006BFF" strokeWidth="1.5" />
        <circle cx="50" cy="55" r="4" fill="#006BFF" />
        <circle cx="38" cy="60" r="2.5" fill="#E60012" />
        <circle cx="62" cy="60" r="2.5" fill="#E60012" />
      </svg>
    </div>
  );
}

export function SuffolkSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-[#EAF4FF] p-1 border-2 border-blue-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="48" fill="#F0F4FA" stroke="#003399" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#006BFF" strokeWidth="1.5" />
        <text x="50" y="16" fontSize="7" fontWeight="bold" textAnchor="middle" fill="#003399" letterSpacing="1">
          SUFFOLK COUNTY
        </text>
        <text x="50" y="90" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#003399">
          LONG ISLAND, N.Y.
        </text>
        <path d="M28 62C34 60 40 64 46 62C52 60 58 64 64 62C70 60 76 64 80 62V70H20V62H28Z" fill="#006BFF" opacity="0.7" />
        <path d="M36 56L64 56L58 64L42 64L36 56Z" fill="#8B4513" />
        <line x1="50" y1="32" x2="50" y2="56" stroke="#4A5568" strokeWidth="2" />
        <path d="M50 34L60 44H50V34Z" fill="#FFFFFF" stroke="#003399" strokeWidth="1" />
        <path d="M50 36L42 45H50V36Z" fill="#FFFFFF" stroke="#003399" strokeWidth="1" />
        <circle cx="50" cy="30" r="4" fill="#FFE000" />
      </svg>
    </div>
  );
}

export function BrooklynSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-indigo-50 p-1 border-2 border-indigo-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="48" fill="#F7FAFC" stroke="#006BFF" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="42" stroke="#B8860B" strokeWidth="1" strokeDasharray="3 2" />
        <text x="50" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#003399" letterSpacing="1">
          BROOKLYN
        </text>
        <text x="50" y="90" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#006BFF">
          EENDRAGHT MAEKT MAGHT
        </text>
        <ellipse cx="50" cy="36" rx="6" ry="7" fill="#FBD38D" />
        <path d="M42 43L50 48L58 43L55 70H45L42 43Z" fill="#006BFF" />
        <line x1="38" y1="35" x2="38" y2="72" stroke="#B8860B" strokeWidth="2" />
        <circle cx="38" cy="34" r="2.5" fill="#E60012" />
      </svg>
    </div>
  );
}

export function ManhattanSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-orange-50 p-1 border-2 border-orange-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <clipPath id="circleClip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
        <g clipPath="url(#circleClip)">
          <rect x="4" y="4" width="31" height="92" fill="#006BFF" />
          <rect x="35" y="4" width="30" height="92" fill="#FFFFFF" />
          <rect x="65" y="4" width="31" height="92" fill="#FF8000" />
        </g>
        <circle cx="50" cy="50" r="47" stroke="#003399" strokeWidth="2" />
        <path d="M40 38H60V58C60 66 50 72 50 72C50 72 40 66 40 58V38Z" fill="#003399" stroke="#FFE000" strokeWidth="1.5" />
        <line x1="44" y1="44" x2="56" y2="56" stroke="#FFE000" strokeWidth="2" />
        <line x1="56" y1="44" x2="44" y2="56" stroke="#FFE000" strokeWidth="2" />
        <text x="50" y="24" fontSize="7" fontWeight="black" textAnchor="middle" fill="#003399">
          MANHATTAN
        </text>
      </svg>
    </div>
  );
}

export function BronxSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full shadow-md bg-emerald-50 p-1 border-2 border-emerald-300 flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <circle cx="50" cy="50" r="48" fill="#F0FDF4" stroke="#059669" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#003399" strokeWidth="1" strokeDasharray="2 1.5" />
        <text x="50" y="16" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#003399" letterSpacing="1">
          THE BRONX
        </text>
        <text x="50" y="90" fontSize="6" fontWeight="bold" textAnchor="middle" fill="#059669">
          NE CEDE MALIS
        </text>
        <circle cx="50" cy="50" r="16" fill="#FFE000" stroke="#059669" strokeWidth="1.5" />
        <path d="M42 50L50 38L58 50L50 62L42 50Z" fill="#006BFF" />
        <circle cx="50" cy="50" r="4" fill="#E60012" />
      </svg>
    </div>
  );
}

export function CountyEmblem({
  type,
  className = 'w-16 h-16',
}: {
  type: 'nassau' | 'queens' | 'suffolk' | 'brooklyn' | 'manhattan' | 'bronx';
  className?: string;
}) {
  switch (type) {
    case 'nassau':
      return <NassauSeal className={className} />;
    case 'queens':
      return <QueensSeal className={className} />;
    case 'suffolk':
      return <SuffolkSeal className={className} />;
    case 'brooklyn':
      return <BrooklynSeal className={className} />;
    case 'manhattan':
      return <ManhattanSeal className={className} />;
    case 'bronx':
      return <BronxSeal className={className} />;
    default:
      return <NassauSeal className={className} />;
  }
}
