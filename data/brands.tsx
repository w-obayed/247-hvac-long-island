import React from 'react';

export interface BrandItem {
  name: string;
  category: string;
  renderLogo: () => React.ReactNode;
}

export const HVAC_BRANDS: BrandItem[] = [
  {
    name: 'Daikin',
    category: 'VRV & Inverter Ductless Systems',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 font-black tracking-tight text-[#0097E6] select-none min-w-[150px]">
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-current transform -rotate-12 flex-shrink-0">
          <polygon points="12,2 22,20 2,20" />
        </svg>
        <span className="italic font-extrabold uppercase tracking-wider text-2xl sm:text-3xl">DAIKIN</span>
      </div>
    ),
  },
  {
    name: 'Fujitsu',
    category: 'Halcyon Mini-Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 text-[#E50012] font-black select-none min-w-[160px]">
        <span className="font-extrabold tracking-wider text-2xl sm:text-3xl">FUJITSU</span>
        <svg viewBox="0 0 24 16" className="w-8 h-6 sm:w-9 sm:h-6 fill-none stroke-current stroke-2 flex-shrink-0">
          <path d="M4 8c0-3 3-5 5-5s5 5 8 5 5-2 5-5-3-5-5-5-5 5-8 5-5-2-5-5" />
        </svg>
      </div>
    ),
  },
  {
    name: 'Goodman',
    category: 'Residential AC & Gas Furnaces',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center bg-[#D32F2F] text-white px-5 py-2 rounded-md shadow-sm select-none min-w-[180px]">
        <span className="font-black tracking-tight text-lg sm:text-xl uppercase leading-none">Goodman</span>
        <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase opacity-95 leading-tight mt-0.5">Air Conditioning & Heating</span>
      </div>
    ),
  },
  {
    name: 'Heil',
    category: 'High-Efficiency Heating & Cooling',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-gradient-to-r from-[#C62828] to-[#1565C0] text-white px-6 py-2 rounded-md font-black italic tracking-[0.2em] text-xl sm:text-2xl shadow-sm select-none min-w-[140px]">
        <span>HEIL</span>
      </div>
    ),
  },
  {
    name: 'Lennox',
    category: 'Signature Series AC & Heat Pumps',
    renderLogo: () => (
      <div className="text-[#D32F2F] font-black italic tracking-widest text-3xl sm:text-4xl flex items-center select-none min-w-[170px]">
        <span className="transform -skew-x-12">LENNOX</span>
      </div>
    ),
  },
  {
    name: 'Maytag',
    category: 'Commercial & Home HVAC',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#003B71] border-2 border-[#003B71] px-4 py-1.5 rounded-md font-black tracking-wider text-lg sm:text-xl uppercase select-none min-w-[150px] justify-center">
        <svg viewBox="0 0 20 20" className="w-6 h-6 fill-[#003B71] flex-shrink-0">
          <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6 6L10 14L14 6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <span>MAYTAG</span>
      </div>
    ),
  },
  {
    name: 'Midea',
    category: 'Smart Inverter Air Conditioners',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 text-[#0091DA] font-bold text-3xl sm:text-4xl tracking-tight select-none min-w-[160px]">
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#0091DA] flex-shrink-0">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
        </svg>
        <span className="font-sans font-extrabold lowercase tracking-tight">midea</span>
      </div>
    ),
  },
  {
    name: 'Mitsubishi Electric',
    category: 'Diamond Certified Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 text-slate-900 font-bold select-none min-w-[190px]">
        <div className="relative w-6 h-6 flex-shrink-0">
          <div className="absolute top-0 left-2 w-3 h-3 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 left-0 w-3 h-3 bg-[#E60012] rotate-45 transform origin-center" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#E60012] rotate-45 transform origin-center" />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-extrabold uppercase text-base sm:text-lg tracking-tight text-[#1A202C]">MITSUBISHI</span>
          <span className="text-[11px] sm:text-xs uppercase font-bold text-[#E60012] tracking-wider mt-0.5">ELECTRIC</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Rheem',
    category: 'High-Efficiency Water Heaters & HVAC',
    renderLogo: () => (
      <div className="relative flex items-center justify-center bg-[#D6001C] text-white px-6 py-2 rounded-full font-black text-lg sm:text-xl italic tracking-widest shadow-sm select-none min-w-[130px]">
        <span>Rheem</span>
      </div>
    ),
  },
  {
    name: 'Ruud',
    category: 'Commercial & Residential Heating',
    renderLogo: () => (
      <div className="flex items-center justify-center border border-slate-300 bg-black text-white px-6 py-2 rounded-md font-black text-lg sm:text-xl tracking-widest uppercase select-none min-w-[130px]">
        <span className="text-[#FF2222]">R</span>UUD
      </div>
    ),
  },
  {
    name: 'Carrier',
    category: 'Turn to the Experts HVAC',
    renderLogo: () => (
      <div className="flex items-center justify-center bg-[#003882] text-white px-6 py-2 rounded-full font-black text-xl sm:text-2xl tracking-tight shadow-sm border border-[#0055c4] select-none min-w-[140px]">
        <span className="italic font-serif tracking-wide">Carrier</span>
      </div>
    ),
  },
  {
    name: 'Coleman',
    category: 'Heating & Air Conditioning Systems',
    renderLogo: () => (
      <div className="flex items-center gap-2 bg-[#B71C1C] text-white px-5 py-2 rounded-md shadow-sm select-none min-w-[150px] justify-center">
        <svg viewBox="0 0 20 20" className="w-6 h-6 fill-white flex-shrink-0">
          <path d="M10 2a3 3 0 00-3 3v2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a3 3 0 00-3-3zm-1 5V5a1 1 0 112 0v2H9z" />
        </svg>
        <span className="font-black text-base sm:text-lg uppercase tracking-wider">Coleman</span>
      </div>
    ),
  },
  {
    name: 'Comfort-Aire',
    category: 'Quality Home Cooling Solutions',
    renderLogo: () => (
      <div className="flex items-center gap-2 text-[#004B87] font-black text-lg sm:text-xl border-b-2 border-[#009CDE] pb-1 select-none min-w-[160px] justify-center">
        <span className="italic uppercase tracking-tight">COMFORT</span>
        <span className="text-[#009CDE] italic font-semibold tracking-tight">AIRE</span>
      </div>
    ),
  },
  {
    name: 'Trane',
    category: "It's Hard To Stop A Trane",
    renderLogo: () => (
      <div className="flex items-center gap-2.5 text-[#E65100] font-black text-xl sm:text-2xl tracking-wider uppercase select-none min-w-[150px]">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E65100] flex items-center justify-center text-white text-xs sm:text-sm font-black flex-shrink-0">
          T
        </div>
        <span className="tracking-tight text-slate-900 font-black">TRANE</span>
      </div>
    ),
  },
  {
    name: 'American Standard',
    category: 'Heating & Air Conditioning',
    renderLogo: () => (
      <div className="flex flex-col items-center justify-center border border-[#1A365D] bg-[#F7FAFC] px-5 py-1.5 rounded-md shadow-sm text-center select-none min-w-[160px]">
        <span className="text-xs sm:text-sm font-black uppercase text-[#1A365D] tracking-wider leading-none">American</span>
        <span className="text-[10px] sm:text-xs font-extrabold uppercase text-[#C53030] tracking-widest leading-none mt-0.5">Standard</span>
      </div>
    ),
  },
  {
    name: 'Bosch',
    category: 'Inverter Ducted Split Heat Pumps',
    renderLogo: () => (
      <div className="flex items-center gap-2.5 text-slate-900 font-black text-xl sm:text-2xl tracking-wider select-none min-w-[150px]">
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8 fill-[#E20015] flex-shrink-0">
          <circle cx="12" cy="12" r="10" fill="none" stroke="#E20015" strokeWidth="2" />
          <circle cx="12" cy="12" r="4" fill="#E20015" />
          <line x1="12" y1="2" x2="12" y2="8" stroke="#E20015" strokeWidth="2" />
          <line x1="12" y1="16" x2="12" y2="22" stroke="#E20015" strokeWidth="2" />
        </svg>
        <span className="font-extrabold text-[#111827] uppercase tracking-normal">BOSCH</span>
      </div>
    ),
  },
];
