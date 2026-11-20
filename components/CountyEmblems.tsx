import React from 'react';
import Image from 'next/image';

interface EmblemProps {
  className?: string;
}

export function NassauSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center`}>
      <Image
        src="/image-website/nassau-county-seal.jpg"
        alt="Nassau County Seal"
        fill
        className="object-contain p-0.5"
        sizes="64px"
      />
    </div>
  );
}

export function QueensSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center`}>
      <Image
        src="/image-website/queens-county-ny-seal.jpg"
        alt="Queens County Seal"
        fill
        className="object-contain p-0.5"
        sizes="64px"
      />
    </div>
  );
}

export function SuffolkSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center`}>
      <Image
        src="/image-website/Suffolk-County-NY-Seal.jpg"
        alt="Suffolk County Seal"
        fill
        className="object-contain p-0.5"
        sizes="64px"
      />
    </div>
  );
}

export function BrooklynSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center`}>
      <Image
        src="/image-website/Brooklyn-NY-Seal.jpg"
        alt="Brooklyn NY Seal"
        fill
        className="object-contain p-0.5"
        sizes="64px"
      />
    </div>
  );
}

export function ManhattanSeal({ className = 'w-16 h-16' }: EmblemProps) {
  return (
    <div className={`relative ${className} rounded-full overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center`}>
      <Image
        src="/image-website/Manhattan-NY-Seal.jpg"
        alt="Manhattan NY Seal"
        fill
        className="object-contain p-0.5"
        sizes="64px"
      />
    </div>
  );
}

export function CountyEmblem({
  type,
  className = 'w-16 h-16',
}: {
  type: 'nassau' | 'queens' | 'suffolk' | 'brooklyn' | 'manhattan';
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
    default:
      return <NassauSeal className={className} />;
  }
}
