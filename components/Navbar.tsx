'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';
import { SERVICE_AREAS_CATEGORIES, NASSAU_COUNTY_LOCATIONS, QUEENS_LOCATIONS } from '@/data/serviceAreasData';

interface NavbarProps {
  onSelectService?: (serviceName: string) => void;
  onOpenCoupon?: () => void;
  onOpenFinancing?: () => void;
  onOpenMaintenance?: () => void;
  onOpenArea?: (areaName: string) => void;
  onOpenBooking?: () => void;
  onOpenPhotos?: (category: string) => void;
}

export default function Navbar({
  onSelectService,
  onOpenFinancing,
  onOpenMaintenance,
  onOpenArea,
  onOpenBooking,
  onOpenPhotos,
}: NavbarProps) {
  const rawPathname = usePathname();
  const pathname = rawPathname || '/';

  // Dynamic active-route detection for all navigation items
  const isHomeActive = pathname === '/';

  const isAboutActive = pathname === '/about-us' || pathname === '/about';

  const isResidentialActive = pathname === '/residential' || pathname === '/residential-hvac';

  const isCommercialActive = pathname === '/commercial' || pathname === '/commercial-hvac';

  const isContactActive = pathname === '/contact' || pathname === '/contact-us';

  const isHeatingActive =
    pathname === '/heating-services' ||
    pathname.startsWith('/furnace-installation-repair') ||
    pathname.startsWith('/boiler-installation-repair') ||
    pathname.startsWith('/water-heater-installation-repair');

  const isCoolingActive =
    pathname === '/cooling-services' ||
    pathname.startsWith('/air-conditioner') ||
    pathname.startsWith('/air-conditioning') ||
    pathname.startsWith('/mini-splits');

  const isAreasActive =
    pathname === '/service-areas' ||
    pathname.startsWith('/service-areas/') ||
    pathname === '/queens' ||
    pathname === '/nassau-county' ||
    pathname === '/nassau' ||
    pathname === '/suffolk-county' ||
    pathname === '/suffolk';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAreaTab, setActiveAreaTab] = useState<string>('nassau');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 130);
      setActiveDropdown(null);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenu((prev) => (prev === name ? null : name));
  };

  const AREA_DETAILS = {
    nassau: {
      name: 'Nassau County',
      time: '30-45 Min Dispatch',
      towns: ['Hempstead', 'Garden City', 'Oyster Bay', 'North Hempstead', 'Long Beach', 'Glen Cove', 'Mineola', 'Great Neck', 'Levittown', 'Massapequa'],
      desc: 'Complete residential and commercial HVAC service across all North and South Shore Nassau County communities.',
    },
    suffolk: {
      name: 'Suffolk County',
      time: '35-50 Min Dispatch',
      towns: ['Huntington', 'Babylon', 'Islip', 'Smithtown', 'Brookhaven', 'Riverhead', 'Commack', 'Hauppauge', 'Patchogue', 'Melville'],
      desc: 'Rapid emergency heating & cooling repair across Western and Central Suffolk County.',
    },
    queens: {
      name: 'Queens',
      time: '30-45 Min Dispatch',
      towns: ['Flushing', 'Astoria', 'Bayside', 'Forest Hills', 'Long Island City', 'Whitestone', 'Howard Beach', 'Middle Village'],
      desc: 'Fast, dependable HVAC installation & furnace/boiler repair for Queens homeowners and businesses.',
    },
    brooklyn: {
      name: 'Brooklyn',
      time: '35-55 Min Dispatch',
      towns: ['Bay Ridge', 'Park Slope', 'Williamsburg', 'Flatbush', 'Brooklyn Heights', 'Dyker Heights', 'Sheepshead Bay'],
      desc: 'Full-service heating, ductless mini-split, and air conditioning solutions for Brooklyn brownstones & commercial spaces.',
    },
    manhattan: {
      name: 'Manhattan',
      time: '45-60 Min Dispatch',
      towns: ['Upper East Side', 'Upper West Side', 'Midtown', 'Financial District', 'Chelsea', 'Greenwich Village', 'Harlem'],
      desc: 'Licensed technicians specializing in high-rise, brownstone, and luxury residential HVAC systems.',
    },
  };

  return (
    <nav
      ref={navRef}
      className={`w-full bg-[#061A40] text-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl border-b border-royal/40 py-0.5' : 'border-b border-navy-light'
      }`}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14 font-heading">
          {/* ========================================================= */}
          {/* 1. LARGE DESKTOP (Above 1280px / xl:): Single Horizontal Row */}
          {/* ========================================================= */}
          <div className="hidden xl:flex items-center justify-between w-full text-[18px] font-semibold tracking-wide">
            {/* Left Nav items */}
            <div className="flex items-center space-x-2 2xl:space-x-3">
              {/* Home */}
              <Link
                href="/"
                className={`px-3 py-2 rounded-md hover:text-electric transition-colors relative group ${
                  isHomeActive ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                <span>Home</span>
                {isHomeActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                )}
              </Link>

              {/* About */}
              <Link
                href="/about-us"
                className={`px-3 py-2 rounded-md hover:text-electric transition-colors relative group ${
                  isAboutActive ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                <span>About</span>
                {isAboutActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                )}
              </Link>

              {/* Heating Services (Dropdown with Direct Link & Hover) */}
              <div
                className="relative group flex items-center"
                onMouseEnter={() => setActiveDropdown('heating')}
              >
                <Link
                  href="/heating-services"
                  onClick={() => setActiveDropdown(null)}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors relative ${
                    isHeatingActive
                      ? 'text-white font-bold'
                      : activeDropdown === 'heating'
                      ? 'text-electric'
                      : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'heating'}
                >
                  <span>Heating Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'heating' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                  {isHeatingActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                  )}
                </Link>

                {activeDropdown === 'heating' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal font-heading">
                        Heating Solutions
                      </p>
                      <Link
                        href="/heating-services"
                        onClick={() => setActiveDropdown(null)}
                        className={`text-[11px] font-bold font-heading hover:underline ${
                          pathname === '/heating-services' ? 'text-electric underline' : 'text-royal'
                        }`}
                      >
                        All Services »
                      </Link>
                    </div>
                    <Link
                      href="/furnace-installation-repair-replacement"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading ${
                        pathname.startsWith('/furnace')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Furnace Installation, Repair & Replacement
                    </Link>
                    <Link
                      href="/boiler-installation-repair"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading ${
                        pathname.startsWith('/boiler')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Boiler Installation & Repair
                    </Link>
                    <Link
                      href="/water-heater-installation-repair-replacement"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading ${
                        pathname.startsWith('/water-heater')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Water Heater Installation, Repair & Replacement
                    </Link>
                  </div>
                )}
              </div>

              {/* Cooling Services (Dropdown with Direct Link & Hover) */}
              <div
                className="relative group flex items-center"
                onMouseEnter={() => setActiveDropdown('cooling')}
              >
                <Link
                  href="/cooling-services"
                  onClick={() => setActiveDropdown(null)}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors relative ${
                    isCoolingActive
                      ? 'text-white font-bold'
                      : activeDropdown === 'cooling'
                      ? 'text-electric'
                      : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'cooling'}
                >
                  <span>Cooling Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'cooling' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                  {isCoolingActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                  )}
                </Link>

                {activeDropdown === 'cooling' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-1 w-[390px] bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal font-heading">
                        Cooling & Air Conditioning
                      </p>
                      <Link
                        href="/cooling-services"
                        onClick={() => setActiveDropdown(null)}
                        className={`text-[11px] font-bold font-heading hover:underline ${
                          pathname === '/cooling-services' ? 'text-electric underline' : 'text-royal'
                        }`}
                      >
                        All Services »
                      </Link>
                    </div>
                    <Link
                      href="/air-conditioners-installation-replacement"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading whitespace-nowrap ${
                        pathname.startsWith('/air-conditioner') || pathname.startsWith('/air-conditioners-installation')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Air Conditioners Installation & Replacement
                    </Link>
                    <Link
                      href="/air-conditioning-repair"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading whitespace-nowrap ${
                        pathname.startsWith('/air-conditioning') || pathname.startsWith('/air-conditioners-repair')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Air Conditioning Repair & Maintenance
                    </Link>
                    <Link
                      href="/mini-splits-ductless-heat-pumps-air-conditioners"
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-4 py-2.5 transition-colors text-sm font-medium font-heading whitespace-nowrap ${
                        pathname.startsWith('/mini-splits')
                          ? 'bg-slate-100 text-royal font-bold'
                          : 'hover:bg-slate-50 hover:text-royal'
                      }`}
                    >
                      Mini-Splits — Ductless Heat Pumps & AC
                    </Link>
                  </div>
                )}
              </div>

              {/* Residential */}
              <Link
                href="/residential"
                className={`px-3 py-2 rounded-md hover:text-electric transition-colors relative group ${
                  isResidentialActive ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                <span>Residential</span>
                {isResidentialActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                )}
              </Link>

              {/* Commercial */}
              <Link
                href="/commercial"
                className={`px-3 py-2 rounded-md hover:text-electric transition-colors relative group ${
                  isCommercialActive ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                <span>Commercial</span>
                {isCommercialActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                )}
              </Link>

              {/* Service Areas (Dropdown with Direct Link & Hover) */}
              <div
                className="relative group flex items-center"
                onMouseEnter={() => setActiveDropdown('areas')}
              >
                <Link
                  href="/service-areas"
                  onClick={() => setActiveDropdown(null)}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors relative ${
                    isAreasActive
                      ? 'text-white font-bold'
                      : activeDropdown === 'areas'
                      ? 'text-electric'
                      : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'areas'}
                >
                  <span>Service Areas</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'areas' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                  {isAreasActive && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                  )}
                </Link>

                {activeDropdown === 'areas' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute -left-20 top-full mt-1 w-[760px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <div>
                        <h4 className="font-bold text-navy text-base font-heading">Service Coverage Areas</h4>
                        <p className="text-xs text-slate-500 font-body">24/7 radio-dispatched mobile repair units across Long Island & NYC</p>
                      </div>
                      <Link
                        href="/service-areas"
                        onClick={() => setActiveDropdown(null)}
                        className={`text-xs font-bold font-heading flex items-center gap-1 px-3 py-1.5 rounded-full ${
                          pathname === '/service-areas'
                            ? 'bg-royal text-white'
                            : 'text-royal bg-royal/10 hover:underline'
                        }`}
                      >
                        <span>All Service Areas Overview &rarr;</span>
                      </Link>
                    </div>

                    {/* County / Borough Tabs */}
                    <div className="grid grid-cols-6 gap-1.5 bg-slate-100 p-1.5 rounded-lg mb-4 text-xs font-bold font-heading">
                      {SERVICE_AREAS_CATEGORIES.map((county) => (
                        <button
                          key={county.id}
                          onClick={() => setActiveAreaTab(county.id)}
                          className={`py-2 px-2 rounded-md transition-all font-heading text-center text-[12px] truncate ${
                            activeAreaTab === county.id
                              ? 'bg-royal text-white shadow-sm font-black'
                              : 'text-slate-700 hover:text-navy hover:bg-white/60'
                          }`}
                          title={county.name}
                        >
                          {county.shortName}
                        </button>
                      ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      {(() => {
                        const current = SERVICE_AREAS_CATEGORIES.find((c) => c.id === activeAreaTab) || SERVICE_AREAS_CATEGORIES[0];
                        return (
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-bold text-navy text-sm font-heading">
                                {current.name}
                              </h5>
                              <span className="text-xs font-semibold text-brightRed bg-red-50 px-2 py-0.5 rounded border border-red-200 font-heading">
                                {current.dispatchTime}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 mb-3 font-body">{current.description}</p>

                            {current.locations.length > 0 ? (
                              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1.5 mb-3 max-h-52 overflow-y-auto pr-1 font-body">
                                {current.locations.map((loc) =>
                                  loc.isAvailable && loc.href ? (
                                    <Link
                                      key={loc.name}
                                      href={loc.href}
                                      onClick={() => setActiveDropdown(null)}
                                      className={`text-[11px] px-2 py-1 rounded font-bold text-center shadow-sm flex items-center justify-center gap-1 transition-colors ${
                                        pathname === loc.href
                                          ? 'bg-brightYellow text-navy'
                                          : 'bg-royal hover:bg-royal-hover text-white'
                                      }`}
                                    >
                                      <span>★ {loc.name}</span>
                                    </Link>
                                  ) : (
                                    <Link
                                      key={loc.name}
                                      href={`/service-areas#${current.id}`}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-[11px] bg-white hover:bg-slate-100 hover:text-royal px-2 py-1 rounded text-slate-700 border border-slate-200 text-center font-medium transition-colors truncate"
                                      title={loc.name}
                                    >
                                      {loc.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            ) : (
                              <div className="py-4 text-center bg-white rounded-lg border border-slate-200/80 mb-3">
                                <p className="text-xs font-semibold text-navy font-heading">
                                  {current.name} Full Service Area
                                </p>
                                <p className="text-xs text-slate-500 mt-1 font-body">
                                  Serving residential & commercial properties throughout {current.name} with 24/7 emergency response.
                                </p>
                              </div>
                            )}

                            <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 font-heading">
                              <Link
                                href={
                                  current.id === 'nassau'
                                    ? '/service-areas/nassau-county'
                                    : current.id === 'queens'
                                    ? '/queens'
                                    : current.id === 'suffolk'
                                    ? '/suffolk-county'
                                    : `/service-areas#${current.id}`
                                }
                                onClick={() => setActiveDropdown(null)}
                                className="text-xs font-bold text-royal hover:underline"
                              >
                                {current.id === 'nassau'
                                  ? 'Nassau County'
                                  : current.id === 'queens'
                                  ? 'Queens'
                                  : current.id === 'suffolk'
                                  ? 'Suffolk County, NY'
                                  : `View ${current.name} Details`}{' '}
                                &rarr;
                              </Link>
                              <a
                                href={PHONE_TEL}
                                className="text-xs font-bold text-navy bg-brightYellow px-3 py-1 rounded hover:bg-brightYellow-hover"
                              >
                                Direct Dispatch: {PHONE_NUMBER}
                              </a>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  </div>
                )}
              </div>

              {/* More (Dropdown with Arrow Icon ONLY) */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('more')}
                  onMouseEnter={() => setActiveDropdown('more')}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors ${
                    activeDropdown === 'more' ? 'text-electric' : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'more'}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'more' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'more' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute right-0 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <Link
                      href="/24-7-emergency-hvac-services"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 hover:bg-slate-50 text-sm font-bold text-brightRed transition-colors font-heading"
                    >
                      24/7 Emergency HVAC Services
                    </Link>
                    <Link
                      href="/air-duct-and-ventilation-cleaning-service"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Air Duct & Ventilation Cleaning
                    </Link>
                    <Link
                      href="/chimney-sweep"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Chimney Sweep
                    </Link>
                    <div className="my-1 border-t border-slate-100" />
                    <button
                      onClick={() => {
                        onOpenFinancing?.();
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Financing Options
                    </button>
                    <button
                      onClick={() => {
                        onOpenMaintenance?.();
                        setActiveDropdown(null);
                      }}
                      className="w-full text-left block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Service Agreements
                    </button>
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={`px-3 py-2 rounded-md hover:text-electric transition-colors relative group ${
                  isContactActive ? 'text-white font-bold' : 'text-slate-100'
                }`}
              >
                <span>Contact</span>
                {isContactActive && (
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
                )}
              </Link>
            </div>

            {/* Right side emergency prompt */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 font-heading">
              <span className="w-2 h-2 rounded-full bg-brightRed animate-ping" />
              <span className="text-slate-200">24/7 Long Island Dispatch</span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. MEDIUM & MOBILE (Below 1280px / max-xl:): Hamburger Header */}
          {/* ========================================================= */}
          <div className="flex xl:hidden items-center justify-between w-full h-full py-1">
            <span className="text-xs uppercase font-extrabold tracking-wider text-slate-200 font-heading">
              Navigation Menu
            </span>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-light text-white hover:text-electric hover:bg-navy-muted transition-all font-heading text-xs font-bold uppercase tracking-wider"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span>{mobileMenuOpen ? 'Close Menu' : 'Menu'}</span>
              {mobileMenuOpen ? <X className="w-4 h-4 text-brightRed" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. RESPONSIVE DROPDOWN PANEL (Below 1280px) */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#061A40] border-t border-navy-light px-4 sm:px-6 py-4 space-y-2 max-h-[85vh] overflow-y-auto overflow-x-hidden font-heading animate-fadeIn shadow-2xl">
          {/* Home */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
              isHomeActive
                ? 'text-electric bg-navy-light/60 font-black'
                : 'text-white hover:text-electric hover:bg-navy-light'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
              isAboutActive
                ? 'text-electric bg-navy-light/60 font-black'
                : 'text-slate-200 hover:text-electric hover:bg-navy-light'
            }`}
          >
            About
          </Link>

          {/* Heating Submenu */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
                isHeatingActive
                  ? 'text-electric bg-navy-light/60 font-black'
                  : 'text-slate-200 hover:text-electric hover:bg-navy-light'
              }`}
            >
              <Link
                href="/heating-services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                Heating Services
              </Link>
              <button
                onClick={() => toggleMobileSubmenu('heating')}
                className="p-1.5 focus:outline-hidden"
                aria-label="Toggle Heating Submenu"
              >
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    mobileSubmenu === 'heating' ? 'rotate-180 text-electric' : ''
                  }`}
                />
              </button>
            </div>
            {mobileSubmenu === 'heating' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                <Link
                  href="/heating-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base font-bold ${
                    pathname === '/heating-services' ? 'text-electric font-black' : 'text-electric hover:text-white'
                  }`}
                >
                  All Heating Services »
                </Link>
                <Link
                  href="/furnace-installation-repair-replacement"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/furnace') ? 'text-white font-bold bg-navy-light/40 rounded' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Furnace Installation, Repair & Replacement
                </Link>
                <Link
                  href="/boiler-installation-repair"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/boiler') ? 'text-white font-bold bg-navy-light/40 rounded' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Boiler Installation & Repair
                </Link>
                <Link
                  href="/water-heater-installation-repair-replacement"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/water-heater') ? 'text-white font-bold bg-navy-light/40 rounded' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Water Heater Installation, Repair & Replacement
                </Link>
              </div>
            )}
          </div>

          {/* Cooling Submenu */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
                isCoolingActive
                  ? 'text-electric bg-navy-light/60 font-black'
                  : 'text-slate-200 hover:text-electric hover:bg-navy-light'
              }`}
            >
              <Link
                href="/cooling-services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                Cooling Services
              </Link>
              <button
                onClick={() => toggleMobileSubmenu('cooling')}
                className="p-1.5 focus:outline-hidden"
                aria-label="Toggle Cooling Submenu"
              >
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    mobileSubmenu === 'cooling' ? 'rotate-180 text-electric' : ''
                  }`}
                />
              </button>
            </div>
            {mobileSubmenu === 'cooling' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                <Link
                  href="/cooling-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base font-bold ${
                    pathname === '/cooling-services' ? 'text-electric font-black' : 'text-electric hover:text-white'
                  }`}
                >
                  All Cooling Services »
                </Link>
                <Link
                  href="/air-conditioners-installation-replacement"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/air-conditioner') || pathname.startsWith('/air-conditioners-installation')
                      ? 'text-white font-bold bg-navy-light/40 rounded'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Air Conditioners Installation & Replacement
                </Link>
                <Link
                  href="/air-conditioning-repair"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/air-conditioning') || pathname.startsWith('/air-conditioners-repair')
                      ? 'text-white font-bold bg-navy-light/40 rounded'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Air Conditioning Repair & Maintenance
                </Link>
                <Link
                  href="/mini-splits-ductless-heat-pumps-air-conditioners"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm sm:text-base ${
                    pathname.startsWith('/mini-splits')
                      ? 'text-white font-bold bg-navy-light/40 rounded'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Mini-Splits — Ductless Heat Pumps & AC
                </Link>
              </div>
            )}
          </div>

          {/* Residential */}
          <Link
            href="/residential"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
              isResidentialActive
                ? 'text-electric bg-navy-light/60 font-black'
                : 'text-slate-200 hover:text-electric hover:bg-navy-light'
            }`}
          >
            Residential
          </Link>

          {/* Commercial */}
          <Link
            href="/commercial"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
              isCommercialActive
                ? 'text-electric bg-navy-light/60 font-black'
                : 'text-slate-200 hover:text-electric hover:bg-navy-light'
            }`}
          >
            Commercial
          </Link>

          {/* Service Areas Submenu */}
          <div>
            <div
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
                isAreasActive
                  ? 'text-electric bg-navy-light/60 font-black'
                  : 'text-slate-200 hover:text-electric hover:bg-navy-light'
              }`}
            >
              <Link
                href="/service-areas"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1"
              >
                Service Areas
              </Link>
              <button
                onClick={() => toggleMobileSubmenu('areas')}
                className="p-1.5 focus:outline-hidden"
                aria-label="Toggle Service Areas Submenu"
              >
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform ${
                    mobileSubmenu === 'areas' ? 'rotate-180 text-electric' : ''
                  }`}
                />
              </button>
            </div>
            {mobileSubmenu === 'areas' && (
              <div className="pl-4 pr-2 py-2 space-y-2.5 bg-navy-dark/70 rounded-lg my-1">
                {/* Overview Link */}
                <Link
                  href="/service-areas"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm font-black rounded-md uppercase tracking-wider ${
                    pathname === '/service-areas'
                      ? 'text-white bg-royal shadow-sm'
                      : 'text-electric bg-white/10 hover:bg-white/20'
                  }`}
                >
                  All Service Areas Overview &rarr;
                </Link>

                {/* 1. Nassau County */}
                <div className="pt-1 border-t border-white/10">
                  <div className="flex items-center justify-between px-3 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Nassau County
                    </span>
                    <Link
                      href="/service-areas/nassau-county"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-bold ${
                        pathname === '/service-areas/nassau-county'
                          ? 'text-white underline'
                          : 'text-brightYellow hover:underline'
                      }`}
                    >
                      Nassau County &rarr;
                    </Link>
                  </div>
                  <div className="pl-2 space-y-1">
                    {NASSAU_COUNTY_LOCATIONS.filter((loc) => loc.isAvailable && loc.href).map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-1.5 text-sm font-bold rounded ${
                          pathname === loc.href
                            ? 'bg-royal text-white'
                            : 'text-brightYellow hover:underline'
                        }`}
                      >
                        ★ {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 2. Queens */}
                <div className="pt-1 border-t border-white/10">
                  <div className="flex items-center justify-between px-3 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Queens
                    </span>
                    <Link
                      href="/queens"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-bold ${
                        pathname === '/queens' || pathname === '/service-areas/queens'
                          ? 'text-white underline'
                          : 'text-brightYellow hover:underline'
                      }`}
                    >
                      Queens &rarr;
                    </Link>
                  </div>
                  <div className="pl-2 space-y-1">
                    {QUEENS_LOCATIONS.filter((loc) => loc.isAvailable && loc.href).map((loc) => (
                      <Link
                        key={loc.name}
                        href={loc.href!}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-3 py-1.5 text-sm font-bold rounded ${
                          pathname === loc.href || pathname === `/${loc.slug}`
                            ? 'bg-royal text-white'
                            : 'text-brightYellow hover:underline'
                        }`}
                      >
                        ★ {loc.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3. Suffolk County */}
                <div className="pt-1 border-t border-white/10">
                  <div className="flex items-center justify-between px-3 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Suffolk County, NY
                    </span>
                    <Link
                      href="/suffolk-county"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs font-bold ${
                        pathname === '/suffolk-county' || pathname === '/service-areas/suffolk-county'
                          ? 'text-white underline'
                          : 'text-brightYellow hover:underline'
                      }`}
                    >
                      Suffolk County &rarr;
                    </Link>
                  </div>
                  <div className="pl-2 space-y-1">
                    <Link
                      href="/suffolk-county"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1 text-xs text-slate-300 hover:text-white"
                    >
                      Suffolk County 24/7 Coverage &rarr;
                    </Link>
                  </div>
                </div>

                {/* 4. Brooklyn */}
                <div className="pt-1 border-t border-white/10">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                    Brooklyn
                  </div>
                  <div className="pl-2 space-y-1">
                    <Link
                      href="/service-areas#brooklyn"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1 text-xs text-slate-300 hover:text-white"
                    >
                      Brooklyn 24/7 HVAC Service &rarr;
                    </Link>
                  </div>
                </div>

                {/* 5. Manhattan */}
                <div className="pt-1 border-t border-white/10">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                    Manhattan
                  </div>
                  <div className="pl-2 space-y-1">
                    <Link
                      href="/service-areas#manhattan"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1 text-xs text-slate-300 hover:text-white"
                    >
                      Manhattan 24/7 HVAC Service &rarr;
                    </Link>
                  </div>
                </div>

                {/* 6. Bronx */}
                <div className="pt-1 border-t border-white/10">
                  <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                    Bronx
                  </div>
                  <div className="pl-2 space-y-1">
                    <Link
                      href="/service-areas/bronx"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1 text-xs text-brightYellow hover:underline font-bold"
                    >
                      ★ Bronx HVAC Services &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* More Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('more')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[18px] font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
            >
              <span>More</span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  mobileSubmenu === 'more' ? 'rotate-180 text-electric' : ''
                }`}
              />
            </button>
            {mobileSubmenu === 'more' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                <Link
                  href="/24-7-emergency-hvac-services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm sm:text-base text-brightRed font-bold hover:text-white"
                >
                  24/7 Emergency HVAC Services
                </Link>
                <Link
                  href="/air-duct-and-ventilation-cleaning-service"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm sm:text-base text-slate-300 hover:text-white"
                >
                  Air Duct & Ventilation Cleaning
                </Link>
                <Link
                  href="/chimney-sweep"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm sm:text-base text-slate-300 hover:text-white"
                >
                  Chimney Sweep
                </Link>
                <button
                  onClick={() => {
                    onOpenFinancing?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Financing Options
                </button>
                <button
                  onClick={() => {
                    onOpenMaintenance?.();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Service Agreements
                </button>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2.5 rounded-lg text-[18px] font-bold transition-colors ${
              isContactActive
                ? 'text-electric bg-navy-light/60 font-black'
                : 'text-slate-200 hover:text-electric hover:bg-navy-light'
            }`}
          >
            Contact
          </Link>

          {/* Direct Emergency Dispatch in Drawer */}
          <div className="pt-3 border-t border-navy-light/60">
            <a
              href={PHONE_TEL}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-brightYellow text-navy font-black text-sm uppercase tracking-wider shadow"
            >
              <span>Call Emergency: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
