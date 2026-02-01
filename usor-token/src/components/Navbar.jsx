// src/components/Navbar.jsx
import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ onConnect }) {
  return (
    <nav className="bg-[#0B0B0B] border-b border-gray-900 px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="U.S Oil" className="w-10 h-10 rounded-full" />
        <span className="text-white text-2xl font-bold">U.S Oil</span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-gray-400 font-medium">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#live-chart" className="hover:text-white transition-colors">Live Chart</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </div>

      <button 
        onClick={onConnect}
        className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-bold text-sm"
      >
        Connect Wallet
      </button>
    </nav>
  );
}