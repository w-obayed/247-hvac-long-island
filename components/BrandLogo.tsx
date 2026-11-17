import React from 'react';
import Image from 'next/image';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = 'md',
  className = '',
}: BrandLogoProps) {
  // Proportional responsive sizing matching the exact 1024x379 aspect ratio
  const sizeClasses = {
    sm: 'h-10 sm:h-11 w-auto',
    md: 'h-12 sm:h-14 md:h-16 w-auto',
    lg: 'h-14 sm:h-16 md:h-20 w-auto',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.webp"
        alt="247 HVAC of Long Island"
        width={1024}
        height={379}
        priority
        className={`${sizeClasses[size]} max-w-full object-contain`}
      />
    </div>
  );
}
