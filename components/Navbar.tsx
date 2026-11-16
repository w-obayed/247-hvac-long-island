'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Flame,
  Snowflake,
  MapPin,
  Camera,
  Layers,
  Phone,
  Calendar,
  Tag,
  Clock,
  Sparkles,
  Menu,
  X,
  CreditCard,
  FileCheck
} from 'lucide-react';
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
  onOpenCoupon,
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
    };
    window.addEventListener('scroll', handleScroll);
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
        isScrolled ? 'shadow-xl border-b border-royal/40 py-1' : 'border-b border-navy-light'
      }`}
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 md:h-14 font-heading">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold tracking-wide">
            {/* Home */}
            <a
              href="#home"
              className="px-3 py-2 rounded-md hover:bg-navy-light text-white transition-colors relative group flex items-center"
            >
              <span>Home</span>
              <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-electric rounded-full" />
            </a>

            {/* About */}
            <a
              href="#about"
              className="px-3 py-2 rounded-md hover:bg-navy-light text-slate-100 hover:text-white transition-colors"
            >
              About
            </a>

            {/* Heating Services (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('heating')}
                onMouseEnter={() => setActiveDropdown('heating')}
                className={`px-3 py-2 rounded-md hover:bg-navy-light flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'heating' ? 'bg-navy-light text-electric' : 'text-slate-100'
                }`}
              >
                <Flame className="w-4 h-4 text-brightRed" />
                <span>Heating Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'heating' ? 'rotate-180 text-electric' : 'text-slate-300'}`} />
              </button>

              {activeDropdown === 'heating' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-royal flex items-center gap-1.5 font-heading">
                      <Flame className="w-3.5 h-3.5 text-brightRed" />
                      Heating Solutions
                    </p>
                  </div>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Boiler Installation & Repair');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-brightRed" />
                    <span>Boiler Installation & Repair</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Furnace Installation, Repair & Replacement');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>Furnace Installation, Repair & Replacement</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Water Heater Installation, Repair & Replacement');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-electric" />
                    <span>Water Heater Installation, Repair & Replacement</span>
                  </a>
                </div>
              )}
            </div>

            {/* Cooling Services (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('cooling')}
                onMouseEnter={() => setActiveDropdown('cooling')}
                className={`px-3 py-2 rounded-md hover:bg-navy-light flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'cooling' ? 'bg-navy-light text-electric' : 'text-slate-100'
                }`}
              >
                <Snowflake className="w-4 h-4 text-electric" />
                <span>Cooling Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'cooling' ? 'rotate-180 text-electric' : 'text-slate-300'}`} />
              </button>

              {activeDropdown === 'cooling' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1 w-84 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-royal flex items-center gap-1.5 font-heading">
                      <Snowflake className="w-3.5 h-3.5 text-electric" />
                      Cooling & Air Conditioning
                    </p>
                  </div>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Air Conditioner Installation & Replacement');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-royal" />
                    <span>Air Conditioner Installation & Replacement</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Air Conditioning Repair & Maintenance');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-brightRed" />
                    <span>Air Conditioning Repair & Maintenance</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Mini-Splits — Ductless Heat Pumps and Air Conditioners');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-hvacGreen" />
                    <span>Mini-Splits — Ductless Heat Pumps & AC</span>
                  </a>
                </div>
              )}
            </div>

            {/* Residential */}
            <a
              href="#about"
              className="px-3 py-2 rounded-md hover:bg-navy-light text-slate-100 hover:text-white transition-colors"
            >
              Residential
            </a>

            {/* Commercial */}
            <a
              href="#services"
              className="px-3 py-2 rounded-md hover:bg-navy-light text-slate-100 hover:text-white transition-colors"
            >
              Commercial
            </a>

            {/* Service Areas (Modern Mega Menu) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('areas')}
                onMouseEnter={() => setActiveDropdown('areas')}
                className={`px-3 py-2 rounded-md hover:bg-navy-light flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'areas' ? 'bg-navy-light text-electric' : 'text-slate-100'
                }`}
              >
                <MapPin className="w-4 h-4 text-brightYellow" />
                <span>Service Areas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'areas' ? 'rotate-180 text-electric' : 'text-slate-300'}`} />
              </button>

              {activeDropdown === 'areas' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute -left-36 top-full mt-1 w-[680px] bg-white rounded-xl shadow-2xl border border-slate-100 p-5 text-slate-800 z-50 animate-fadeIn"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <h4 className="font-bold text-navy text-base font-heading">Long Island & NYC Service Coverage</h4>
                      <p className="text-xs text-slate-500 font-body">Fast radio-dispatched emergency mobile units available 24/7</p>
                    </div>
                    <span className="text-xs font-bold bg-hvacGreen/10 text-hvacGreen px-2.5 py-1 rounded-full flex items-center gap-1 font-heading">
                      <Clock className="w-3.5 h-3.5" /> 24/7 Available
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
                      <h5 className="font-bold text-navy text-sm flex items-center gap-1.5 font-heading">
                        <MapPin className="w-4 h-4 text-royal" />
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
                        className="text-xs font-bold text-royal hover:underline flex items-center gap-1 font-heading"
                      >
                        View {AREA_DETAILS[activeAreaTab].name} Landing Details &rarr;
                      </a>
                      <a
                        href={PHONE_TEL}
                        className="text-xs font-bold text-navy bg-brightYellow px-3 py-1 rounded hover:bg-brightYellow-hover font-heading"
                      >
                        Dispatch Tech: {PHONE_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Photos (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('photos')}
                onMouseEnter={() => setActiveDropdown('photos')}
                className={`px-3 py-2 rounded-md hover:bg-navy-light flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'photos' ? 'bg-navy-light text-electric' : 'text-slate-100'
                }`}
              >
                <Camera className="w-4 h-4 text-electric" />
                <span>Project Photos</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'photos' ? 'rotate-180 text-electric' : 'text-slate-300'}`} />
              </button>

              {activeDropdown === 'photos' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 top-full mt-1 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                >
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-royal flex items-center gap-1.5 font-heading">
                      <Camera className="w-3.5 h-3.5" />
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
                      className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-50 hover:text-royal transition-colors text-sm font-medium font-heading"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-royal" />
                      <span>{cat}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* More (Dropdown) */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('more')}
                onMouseEnter={() => setActiveDropdown('more')}
                className={`px-3 py-2 rounded-md hover:bg-navy-light flex items-center gap-1.5 transition-colors ${
                  activeDropdown === 'more' ? 'bg-navy-light text-electric' : 'text-slate-100'
                }`}
              >
                <Layers className="w-4 h-4 text-slate-300" />
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'more' ? 'rotate-180 text-electric' : 'text-slate-300'}`} />
              </button>

              {activeDropdown === 'more' && (
                <div
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute right-0 top-full mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 text-slate-800 z-50 animate-fadeIn"
                >
                  <a
                    href="#emergency"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 text-sm font-bold text-brightRed transition-colors font-heading"
                  >
                    <span className="w-2 h-2 rounded-full bg-brightRed animate-ping" />
                    <span>24/7 Emergency HVAC Services</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Air Duct and Ventilation Cleaning');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                  >
                    <Sparkles className="w-4 h-4 text-electric" />
                    <span>Air Duct & Ventilation Cleaning</span>
                  </a>
                  <a
                    href="#services"
                    onClick={() => {
                      onSelectService?.('Chimney Sweep');
                      setActiveDropdown(null);
                    }}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                  >
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>Chimney Sweep</span>
                  </a>
                  <div className="my-1 border-t border-slate-100" />
                  <button
                    onClick={() => {
                      onOpenFinancing?.();
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                  >
                    <CreditCard className="w-4 h-4 text-royal" />
                    <span>Financing Options</span>
                  </button>
                  <button
                    onClick={() => {
                      onOpenMaintenance?.();
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-slate-50 hover:text-royal text-sm font-medium text-slate-700 font-heading"
                  >
                    <FileCheck className="w-4 h-4 text-hvacGreen" />
                    <span>Service Agreements</span>
                  </button>
                </div>
              )}
            </div>

            {/* Contact */}
            <a
              href="#contact"
              className="px-3 py-2 rounded-md hover:bg-navy-light text-slate-100 hover:text-white transition-colors font-heading"
            >
              Contact
            </a>
          </div>

          {/* Right Header Badges */}
          <div className="hidden lg:flex items-center gap-3">
            {/* $100 OFF coupon trigger */}
            <button
              onClick={onOpenCoupon}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gradient-to-r from-brightYellow to-amber-300 text-navy font-black text-xs shadow-sm hover:scale-105 active:scale-95 transition-transform font-heading tracking-wider uppercase"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>$100 OFF COUPON</span>
            </button>

            {/* Emergency fast dispatch pill */}
            <a
              href={PHONE_TEL}
              className="flex items-center gap-1.5 text-xs font-bold text-white bg-brightRed px-2.5 py-1 rounded shadow hover:bg-brightRed-hover transition-colors font-heading"
            >
              <Phone className="w-3 h-3" />
              <span>(516) 717-7515</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCoupon}
              className="text-xs font-bold bg-brightYellow text-navy px-2 py-1 rounded font-heading"
            >
              $100 OFF
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-white hover:bg-navy-light focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061A40] border-t border-navy-light px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto font-heading">
          {/* Direct call badge */}
          <a
            href={PHONE_TEL}
            className="flex items-center justify-between p-3 rounded-lg bg-brightRed text-white font-black text-sm"
          >
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 24/7 Dispatch: {PHONE_NUMBER}
            </span>
            <span className="text-xs bg-white text-brightRed px-2 py-0.5 rounded font-bold">CALL NOW</span>
          </a>

          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-white hover:bg-navy-light"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            About
          </a>

          {/* Mobile Heating Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('heating')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
            >
              <span className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brightRed" /> Heating Services
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'heating' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'heating' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/40 rounded-lg my-1">
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

          {/* Mobile Cooling Submenu */}
          <div>
            <button
              onClick={() => toggleMobileSubmenu('cooling')}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
            >
              <span className="flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-electric" /> Cooling Services
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileSubmenu === 'cooling' ? 'rotate-180' : ''}`} />
            </button>
            {mobileSubmenu === 'cooling' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-navy-dark/40 rounded-lg my-1">
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

          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Residential
          </a>

          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Commercial
          </a>

          <a
            href="#service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Service Areas (Nassau, Queens, Suffolk, Brooklyn, Manhattan)
          </a>

          <a
            href="#emergency"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-brightRed hover:bg-navy-light"
          >
            24/7 Emergency HVAC Services
          </a>

          <button
            onClick={() => {
              onOpenFinancing?.();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Financing Options
          </button>

          <button
            onClick={() => {
              onOpenMaintenance?.();
              setMobileMenuOpen(false);
            }}
            className="w-full text-left px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Service Agreements
          </button>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md font-semibold text-slate-200 hover:bg-navy-light"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-navy-light/60 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking?.();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-hvacGreen text-white font-bold text-center shadow font-heading uppercase tracking-wider"
            >
              Book Service Online
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
