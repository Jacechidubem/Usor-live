// src/sections/LiveCoin.jsx
import React from 'react';

export default function LiveCoin() {
  return (
    <section className="py-20 flex flex-col items-center bg-[#0B0B0B]">
      <div className="relative mb-12">
        {/* The Glow Effect */}
        <div className="absolute inset-0 bg-usor-gold/20 blur-[80px] rounded-full"></div>
        
        {/* The Coin Image */}
        <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-usor-gold/30 p-2">
          <img 
            src="/assets/logo.png" 
            alt="U.S Oil Token" 
            className="w-full h-full rounded-full shadow-[0_0_50px_rgba(255,193,7,0.4)]"
          />
        </div>
        
        {/* Animated Orbiting Ring (Optional extra touch) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[20%] border border-usor-gold/40 rounded-[100%] rotate-[15deg]"></div>
      </div>

      <h2 className="text-3xl font-bold text-white mb-4">U.S Oil</h2>
      
      {/* Live Badge */}
      <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-usor-gold/30 bg-usor-gold/5">
        <span className="w-2 h-2 bg-usor-gold rounded-full animate-pulse"></span>
        <span className="text-usor-gold text-xs font-bold uppercase tracking-widest">
          Live Statistics
        </span>
      </div>
    </section>
  );
}