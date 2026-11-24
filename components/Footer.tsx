'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_EMAIL, BUSINESS_NAME } from '@/lib/utils';

const TRUSTED_VERIFIED_COMPANIES = [
  {
    name: 'Birdeye',
    logo: '/image-website/birdeye-logo-white.png',
    url: 'https://reviews.birdeye.com/24-7-hvac-local-of-long-island-166791886507722',
    alt: 'Birdeye - 247 HVAC of Long Island Verified Customer Reviews',
  },
  {
    name: 'Manta',
    logo: '/image-website/manta-logo.png',
    url: 'https://www.manta.com/c/m1r0hpq/247-hvac-of-long-island#reviews',
    alt: 'Manta - 247 HVAC of Long Island Verified Business Profile',
  },
  {
    name: 'Chamber of Commerce',
    logo: '/image-website/chamber-of-commerce-logo.svg',
    url: 'https://www.bestprosintown.com/ny/lawrence/24-7-hvac-local-of-long-island-/',
    alt: 'Chamber of Commerce - Verified Business Directory',
  },
  {
    name: 'BestProsInTown',
    logo: '/image-website/bestprosintown-logo.png',
    url: 'https://www.bestprosintown.com/ny/lawrence/24-7-hvac-local-of-long-island-/',
    alt: 'BestProsInTown - Verified Local HVAC Contractor Rating',
  },
  {
    name: 'Cylex',
    logo: '/image-website/cylex-logo.webp',
    url: 'https://www.cylex.us.com/company/24-7-hvac-37229291.html',
    alt: 'Cylex - Verified Business Directory Profile',
  },
  {
    name: 'ProvenExpert',
    logo: '/image-website/provenexpert-logo.png',
    url: 'https://www.provenexpert.com/en-us/247-hvac-local-of-long-island/',
    alt: 'ProvenExpert - Independent Customer Satisfaction Ratings',
  },
];

interface FooterProps {
  onSelectService?: (serviceName: string) => void;
  onOpenArea?: (areaName: string) => void;
}

export default function Footer({ onSelectService, onOpenArea }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#061A40] text-slate-300 pt-16 pb-28 md:pb-12 border-t border-navy-light select-none">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* 5-Column Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Column 1 — Company Information */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="mb-4 inline-block hover:opacity-95 transition-opacity" aria-label="247 HVAC of Long Island Home">
              <BrandLogo variant="dark" size="md" />
            </Link>
            <p className="text-base text-slate-300 leading-relaxed mb-6 font-body">
              Your trusted HVAC experts in Long Island, NY. Providing reliable heating, cooling, and air conditioning services for homes and businesses with upfront pricing and 24/7 emergency dispatch.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/247.Hvac.of.long.island"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-royal transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-royal transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-royal transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center text-slate-300 hover:text-white hover:bg-royal transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Heating Services */}
          <div>
            <Link
              href="/heating-services"
              className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading block hover:text-electric transition-colors"
            >
              Heating Services »
            </Link>
            <ul className="space-y-2 text-sm sm:text-xs font-body">
              {[
                { title: 'All Heating Services', href: '/heating-services' },
                { title: 'Furnace Services', href: '/furnace-installation-repair-replacement' },
                { title: 'Boiler Services', href: '/boiler-installation-repair' },
                { title: 'Water Heater Services', href: '/water-heater-installation-repair-replacement' },
                { title: 'Heating Repairs', href: '/furnace-installation-repair-replacement' },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-electric transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Cooling Services */}
          <div>
            <Link
              href="/cooling-services"
              className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading block hover:text-electric transition-colors"
            >
              Cooling Services »
            </Link>
            <ul className="space-y-2 text-sm sm:text-xs font-body">
              {[
                { title: 'All Cooling Services', href: '/cooling-services' },
                { title: 'AC Installation', href: '/air-conditioners-installation-replacement' },
                { title: 'AC Repair', href: '/air-conditioning-repair' },
                { title: 'Mini-Split Systems', href: '/mini-splits-ductless-heat-pumps-air-conditioners' },
                { title: 'AC Maintenance', href: '/air-conditioning-repair' },
                { title: 'Commercial Cooling', href: '/commercial' },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-electric transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs font-body">
              <li>
                <Link href="/service-areas/baldwin" className="hover:text-electric transition-colors text-brightYellow font-bold flex items-center gap-1">
                  <span>★ Baldwin, NY</span>
                </Link>
              </li>
              <li>
                <Link href="/service-areas/nassau-county" className="hover:text-electric transition-colors">
                  Nassau County (27 Towns)
                </Link>
              </li>
              <li>
                <Link href="/queens" className="hover:text-electric transition-colors">
                  Queens (8 Towns)
                </Link>
              </li>
              <li>
                <Link href="/suffolk-county" className="hover:text-electric transition-colors">
                  Suffolk County, NY
                </Link>
              </li>
            </ul>
            <div className="mt-4 pt-3 border-t border-navy-light/60 font-heading">
              <Link
                href="/service-areas"
                className="text-xs sm:text-xs font-bold text-electric hover:underline block uppercase tracking-wider"
              >
                View All Service Areas &rarr;
              </Link>
            </div>
          </div>

          {/* Column 5 — Contact Information */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading">
              Contact Information
            </h4>
            <div className="space-y-3 text-sm sm:text-xs">
              <div>
                <span className="text-slate-400 block text-[11px] sm:text-[10px] uppercase font-bold font-heading">Direct Phone</span>
                <a href={PHONE_TEL} className="text-base font-black text-brightYellow hover:underline font-heading">
                  {PHONE_NUMBER}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] sm:text-[10px] uppercase font-bold font-heading">Availability</span>
                <span className="font-semibold text-white flex items-center gap-1.5 mt-0.5 font-body">
                  <Clock className="w-3.5 h-3.5 text-brightRed" />
                  24 Hours — 7 Days
                </span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] sm:text-[10px] uppercase font-bold font-heading">Email Inquiries</span>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-electric transition-colors break-all font-body">
                  {BUSINESS_EMAIL}
                </a>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] sm:text-[10px] uppercase font-bold font-heading">Headquarters</span>
                <span className="flex items-center gap-1.5 text-slate-300 font-body">
                  <MapPin className="w-3.5 h-3.5 text-royal flex-shrink-0" />
                  Long Island, New York
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Footer: Trusted and Verified By Section */}
        <div className="pt-8 pb-8 border-t border-navy-light/70">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-electric flex-shrink-0" />
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200 font-heading">
                Trusted and Verified By
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-body hidden sm:inline">
              Verified independent customer ratings, credentials & business reviews
            </span>
          </div>

          {/* 6 Equal-Sized Responsive Logo Containers */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {TRUSTED_VERIFIED_COMPANIES.map((company) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center h-16 sm:h-18 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 active:scale-98 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-[#061A40]"
                style={{ position: 'relative', overflow: 'hidden' }}
                aria-label={`View 247 HVAC of Long Island profile on ${company.name} (opens in a new tab)`}
                title={`Verified on ${company.name}`}
              >
                <div
                  className="relative w-full h-full flex items-center justify-center p-1"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                >
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain transition-transform duration-200 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    unoptimized={company.logo.endsWith('.svg')}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom: Privacy Policy, Terms of Service Buttons & Copyright */}
        <div className="pt-6 border-t border-navy-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 font-body">
          <p className="text-center sm:text-left">
            © {currentYear} {BUSINESS_NAME}. All Rights Reserved.
          </p>

          {/* Bottom-Right Side Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2.5 sm:gap-3">
            <Link
              href="/privacy-policy"
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-navy-light hover:bg-royal text-white border border-white/10 hover:border-royal text-xs font-semibold font-heading uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus:ring-2 focus:ring-electric"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-navy-light hover:bg-royal text-white border border-white/10 hover:border-royal text-xs font-semibold font-heading uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus:ring-2 focus:ring-electric"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
