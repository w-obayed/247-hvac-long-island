'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { PHONE_NUMBER, PHONE_TEL } from '@/lib/utils';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeAreaTab, setActiveAreaTab] = useState<'nassau' | 'suffolk' | 'queens' | 'brooklyn' | 'manhattan'>('nassau');
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
          <div className="hidden xl:flex items-center justify-between w-full text-[15px] font-semibold tracking-wide">
            {/* Left Nav items */}
            <div className="flex items-center space-x-2 2xl:space-x-3">
              {/* Home */}
              <a
                href="#home"
                className="px-3 py-2 rounded-md hover:text-electric transition-colors relative group text-white"
              >
                <span>Home</span>
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
              </a>

              {/* About */}
              <a
                href="#about"
                className="px-3 py-2 rounded-md hover:text-electric text-slate-100 transition-colors"
              >
                About
              </a>

              {/* Heating Services (Dropdown with Arrow Icon ONLY) */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('heating')}
                  onMouseEnter={() => setActiveDropdown('heating')}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors ${
                    activeDropdown === 'heating' ? 'text-electric' : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'heating'}
                >
                  <span>Heating Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'heating' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'heating' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal font-heading">
                        Heating Solutions
                      </p>
                    </div>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Boiler Installation & Repair');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Boiler Installation & Repair
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Furnace Installation, Repair & Replacement');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Furnace Installation, Repair & Replacement
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Water Heater Installation, Repair & Replacement');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Water Heater Installation, Repair & Replacement
                    </a>
                  </div>
                )}
              </div>

              {/* Cooling Services (Dropdown with Arrow Icon ONLY) */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('cooling')}
                  onMouseEnter={() => setActiveDropdown('cooling')}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors ${
                    activeDropdown === 'cooling' ? 'text-electric' : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'cooling'}
                >
                  <span>Cooling Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'cooling' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'cooling' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-1 w-84 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal font-heading">
                        Cooling & Air Conditioning
                      </p>
                    </div>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Air Conditioner Installation & Replacement');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Air Conditioner Installation & Replacement
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Air Conditioning Repair & Maintenance');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Air Conditioning Repair & Maintenance
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Mini-Splits — Ductless Heat Pumps and Air Conditioners');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      Mini-Splits — Ductless Heat Pumps & AC
                    </a>
                  </div>
                )}
              </div>

              {/* Residential */}
              <a
                href="#about"
                className="px-3 py-2 rounded-md hover:text-electric text-slate-100 transition-colors"
              >
                Residential
              </a>

              {/* Commercial */}
              <a
                href="#services"
                className="px-3 py-2 rounded-md hover:text-electric text-slate-100 transition-colors"
              >
                Commercial
              </a>

              {/* Service Areas (Dropdown with Arrow Icon ONLY) */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('areas')}
                  onMouseEnter={() => setActiveDropdown('areas')}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors ${
                    activeDropdown === 'areas' ? 'text-electric' : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'areas'}
                >
                  <span>Service Areas</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'areas' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'areas' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute -left-20 top-full mt-1 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                      <div>
                        <h4 className="font-bold text-navy text-base font-heading">Service Coverage Areas</h4>
                        <p className="text-xs text-slate-500 font-body">24/7 radio-dispatched mobile repair units across Long Island & NYC</p>
                      </div>
                      <span className="text-xs font-bold bg-hvacGreen/10 text-hvacGreen px-2.5 py-1 rounded-full font-heading">
                        24/7 Available
                      </span>
                    </div>

                    {/* Mega Menu Tabs */}
                    <div className="grid grid-cols-5 gap-1.5 bg-slate-100 p-1.5 rounded-lg mb-4 text-xs font-bold font-heading">
                      {(['nassau', 'suffolk', 'queens', 'brooklyn', 'manhattan'] as const).map((key) => (
                        <button
                          key={key}
                          onClick={() => setActiveAreaTab(key)}
                          className={`py-1.5 px-2 rounded capitalize transition-all font-heading ${
                            activeAreaTab === key ? 'bg-white text-royal shadow-sm font-black' : 'text-slate-600 hover:text-navy'
                          }`}
                        >
                          {key === 'nassau' ? 'Nassau' : key === 'suffolk' ? 'Suffolk' : key}
                        </button>
                      ))}
                    </div>

                    {/* Active Tab Content */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-bold text-navy text-sm font-heading">
                          {AREA_DETAILS[activeAreaTab].name}
                        </h5>
                        <span className="text-xs font-semibold text-brightRed bg-red-50 px-2 py-0.5 rounded border border-red-200 font-heading">
                          {AREA_DETAILS[activeAreaTab].time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mb-3 font-body">{AREA_DETAILS[activeAreaTab].desc}</p>

                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 mb-3 font-body">
                        {AREA_DETAILS[activeAreaTab].towns.map((town) => (
                          <span key={town} className="text-[11px] bg-white px-2 py-1 rounded text-slate-700 border border-slate-200 text-center font-medium font-body">
                            {town}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/80">
                        <a
                          href="#service-areas"
                          onClick={() => {
                            onOpenArea?.(AREA_DETAILS[activeAreaTab].name);
                            setActiveDropdown(null);
                          }}
                          className="text-xs font-bold text-royal hover:underline font-heading"
                        >
                          View {AREA_DETAILS[activeAreaTab].name} Details &rarr;
                        </a>
                        <a
                          href={PHONE_TEL}
                          className="text-xs font-bold text-navy bg-brightYellow px-3 py-1 rounded hover:bg-brightYellow-hover font-heading"
                        >
                          Direct Dispatch: {PHONE_NUMBER}
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Photos (Dropdown with Arrow Icon ONLY) */}
              <div className="relative group">
                <button
                  onClick={() => toggleDropdown('photos')}
                  onMouseEnter={() => setActiveDropdown('photos')}
                  className={`px-3 py-2 rounded-md flex items-center gap-1.5 hover:text-electric transition-colors ${
                    activeDropdown === 'photos' ? 'text-electric' : 'text-slate-100'
                  }`}
                  aria-expanded={activeDropdown === 'photos'}
                >
                  <span>Project Photos</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${
                      activeDropdown === 'photos' ? 'rotate-180 text-electric' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'photos' && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                      <p className="text-xs font-bold uppercase tracking-wider text-royal font-heading">
                        Work Gallery
                      </p>
                    </div>
                    {['Our Team', 'AC Installations', 'Heating Systems', 'Mini-Split Projects', 'Commercial Projects'].map((cat) => (
                      <a
                        key={cat}
                        href="#about"
                        onClick={() => {
                          onOpenPhotos?.(cat);
                          setActiveDropdown(null);
                        }}
                        className="block px-4 py-2 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                      >
                        {cat}
                      </a>
                    ))}
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
                    <a
                      href="#emergency"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 hover:bg-slate-50 text-sm font-bold text-brightRed transition-colors font-heading"
                    >
                      24/7 Emergency HVAC Services
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Air Duct and Ventilation Cleaning');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Air Duct & Ventilation Cleaning
                    </a>
                    <a
                      href="#services"
                      onClick={() => {
                        onSelectService?.('Chimney Sweep');
                        setActiveDropdown(null);
                      }}
                      className="block px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                    >
                      Chimney Sweep
                    </a>
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
              <a
                href="#contact"
                className="px-3 py-2 rounded-md hover:text-electric text-slate-100 transition-colors"
              >
                Contact
              </a>
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
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg font-bold text-white hover:text-electric hover:bg-navy-light transition-colors"
          >
            Home
          </a>

          {/* About */}
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
          >
            About
          </a>

          {/* Heating Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('heating')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
            >
              <span>Heating Services</span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  mobileSubmenu === 'heating' ? 'rotate-180 text-electric' : ''
                }`}
              />
            </button>
            {mobileSubmenu === 'heating' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Boiler Installation & Repair');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Boiler Installation & Repair
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Furnace Installation, Repair & Replacement');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Furnace Installation, Repair & Replacement
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Water Heater Installation, Repair & Replacement');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Water Heater Installation, Repair & Replacement
                </a>
              </div>
            )}
          </div>

          {/* Cooling Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('cooling')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
            >
              <span>Cooling Services</span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  mobileSubmenu === 'cooling' ? 'rotate-180 text-electric' : ''
                }`}
              />
            </button>
            {mobileSubmenu === 'cooling' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Air Conditioner Installation & Replacement');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Air Conditioner Installation & Replacement
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Air Conditioning Repair & Maintenance');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Air Conditioning Repair & Maintenance
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Mini-Splits — Ductless Heat Pumps and Air Conditioners');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Mini-Splits — Ductless Heat Pumps
                </a>
              </div>
            )}
          </div>

          {/* Residential */}
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
          >
            Residential
          </a>

          {/* Commercial */}
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
          >
            Commercial
          </a>

          {/* Service Areas Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('areas')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
            >
              <span>Service Areas</span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  mobileSubmenu === 'areas' ? 'rotate-180 text-electric' : ''
                }`}
              />
            </button>
            {mobileSubmenu === 'areas' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                {['Nassau County', 'Queens', 'Suffolk County', 'Brooklyn', 'Manhattan'].map((area) => (
                  <a
                    key={area}
                    href="#service-areas"
                    onClick={() => {
                      onOpenArea?.(area);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                  >
                    {area}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Project Photos Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('photos')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
            >
              <span>Project Photos</span>
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${
                  mobileSubmenu === 'photos' ? 'rotate-180 text-electric' : ''
                }`}
              />
            </button>
            {mobileSubmenu === 'photos' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/60 rounded-lg my-1">
                {['Our Team', 'AC Installations', 'Heating Systems', 'Mini-Split Projects', 'Commercial Projects'].map((cat) => (
                  <a
                    key={cat}
                    href="#about"
                    onClick={() => {
                      onOpenPhotos?.(cat);
                      setMobileMenuOpen(false);
                    }}
                    className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* More Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('more')}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
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
                <a
                  href="#emergency"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-brightRed font-bold hover:text-white"
                >
                  24/7 Emergency HVAC Services
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Air Duct and Ventilation Cleaning');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Air Duct & Ventilation Cleaning
                </a>
                <a
                  href="#services"
                  onClick={() => {
                    onSelectService?.('Chimney Sweep');
                    setMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-slate-300 hover:text-white"
                >
                  Chimney Sweep
                </a>
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
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 rounded-lg font-bold text-slate-200 hover:text-electric hover:bg-navy-light transition-colors"
          >
            Contact
          </a>

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
