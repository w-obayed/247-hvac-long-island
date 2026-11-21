'use client';

import React from 'react';
import Link from 'next/link';
import BrandLogo from './BrandLogo';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL, BUSINESS_EMAIL, BUSINESS_NAME } from '@/lib/utils';

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
                href="https://facebook.com"
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
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading">
              Heating Services
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs font-body">
              {[
                { title: 'Furnace Services', target: 'Furnace Installation, Repair & Replacement' },
                { title: 'Boiler Services', target: 'Boiler Installation, Repair & Replacement', href: '/boiler-installation-repair' },
                { title: 'Water Heater Services', target: 'Water Heater Installation, Repair & Replacement' },
                { title: 'Heating Repairs', target: 'Furnace Installation, Repair & Replacement' },
                { title: 'Heating Installation', target: 'Boiler Installation, Repair & Replacement', href: '/boiler-installation-repair' },
              ].map((item) => (
                <li key={item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="hover:text-electric transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <a
                      href="/#services"
                      onClick={() => onSelectService?.(item.target)}
                      className="hover:text-electric transition-colors"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Cooling Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-navy-light pb-2 font-heading">
              Cooling Services
            </h4>
            <ul className="space-y-2 text-sm sm:text-xs font-body">
              {[
                { title: 'AC Installation', target: 'Air Conditioner Installation & Replacement' },
                { title: 'AC Repair', target: 'Air Conditioner Repair & Maintenance' },
                { title: 'Mini-Split Systems', target: 'Mini-Split Installation, Repair & Replacement' },
                { title: 'AC Maintenance', target: 'Air Conditioner Repair & Maintenance' },
                { title: 'Commercial Cooling', target: 'Air Conditioner Installation & Replacement' },
              ].map((item) => (
                <li key={item.title}>
                  <a
                    href="#services"
                    onClick={() => onSelectService?.(item.target)}
                    className="hover:text-electric transition-colors"
                  >
                    {item.title}
                  </a>
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
                <Link href="/service-areas#nassau" className="hover:text-electric transition-colors">
                  Nassau County (27 Towns)
                </Link>
              </li>
              <li>
                <Link href="/service-areas#queens" className="hover:text-electric transition-colors">
                  Queens (8 Towns)
                </Link>
              </li>
              <li>
                <Link href="/service-areas#suffolk" className="hover:text-electric transition-colors">
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

        {/* Partner Trust Badges */}
        <div className="pt-8 pb-8 border-t border-navy-light/70 flex flex-wrap items-center justify-between gap-6 font-heading">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-royal" />
            <span>Trusted & Verified By:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-black tracking-widest text-slate-400">
            <span className="hover:text-white transition-colors">BIRDEYE</span>
            <span className="hover:text-white transition-colors">MANTA</span>
            <span className="hover:text-white transition-colors">CYLEX</span>
            <span className="hover:text-white transition-colors">PROVEN EXPERT</span>
          </div>
        </div>

        {/* Footer Bottom: Privacy Policy, Terms of Service, Copyright */}
        <div className="pt-6 border-t border-navy-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3 font-body">
          <p>© {currentYear} {BUSINESS_NAME}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#about" className="hover:text-slate-200 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#home" className="hover:text-slate-200 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
