import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ onConnect }) {
  return (
    // REMOVED: 'fixed', 'top-0', and 'z-[100]'
    // ADDED: 'relative' to ensure it stays at the top of the page flow
    <nav className="relative w-full bg-[#0B0B0B] border-b border-gray-900 px-4 md:px-10 py-3 md:py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <img src={logo} alt="U.S Oil" className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#d4af37]/20" />
        <span className="text-white text-lg md:text-2xl font-bold tracking-tight">U.S Oil</span>
      </div>

      <div className="hidden lg:flex items-center gap-10 text-gray-400 font-bold text-xs uppercase tracking-widest">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#live-chart" className="hover:text-white transition-colors">Live Chart</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </div>

      <button 
        onClick={onConnect}
        className="bg-[#d4af37] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)]"
      >
        Connect Wallet
      </button>
    </nav>
  );
}