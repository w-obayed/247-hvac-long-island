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
  // Proportional responsive sizing matching the exact 1024x682 aspect ratio (1.5:1)
  const sizeClasses = {
    sm: 'h-11 sm:h-12 w-auto',
    md: 'h-14 sm:h-16 md:h-20 w-auto',
    lg: 'h-16 sm:h-20 md:h-24 w-auto',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src="/images/logo.png"
        alt="247 HVAC of Long Island"
        width={1024}
        height={682}
        priority
        className={`${sizeClasses[size]} w-auto max-w-full object-contain`}
      />
    </div>
  );
}
