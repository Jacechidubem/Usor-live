// src/sections/Hero.jsx
import React from 'react';
import { BadgeCheck } from 'lucide-react'; 
import coin from '../assets/logo.png'; 
import coin2 from '../assets/logo2.png'; 

export default function Hero() {
  return (
    <section className="bg-[#0B0B0B] px-10 py-20 grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
      <div className="text-left">
        {/* Updated Badge: Solid Filled Verification */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10">
          <BadgeCheck 
            className="w-5 h-5 text-black" 
            fill="#D4AF37"  /* This creates the solid gold fill */
            strokeWidth={1.5} 
          />
          <span className="text-white text-xs font-bold uppercase tracking-wider">Official airdrop</span>
        </div>

        <h1 className="text-white text-7xl font-bold leading-[1.1] mb-8">
          Discover <br /> Exclusive <br />
          <span className="text-[#D4AF37] tracking-tight">$USOR Airdrop</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-lg mb-12">
          Get direct <span className="text-[#D4AF37]">USOR airdrop</span> and never miss out on free crypto rewards. Track, participate, and claim airdrop from top blockchain projects across Solana ecosystem. <span className="text-[#D4AF37] font-bold">Hurry up!</span>
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-colors">
            Get Started
          </button>
          <button className="bg-transparent border border-gray-800 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* LAYERED IMAGE CONTAINER */}
      <div className="relative flex justify-center items-center">
        <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
        
        <img 
          src={coin2} 
          alt="US Oil Coin Frame" 
          className="relative z-10 w-full max-w-[500px] animate-pulse" 
        />

        <img 
          src={coin} 
          alt="US Oil Logo Inner" 
          className="absolute z-20 w-[28%] rounded-full shadow-2xl" 
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)' 
          }}
        />
      </div>
    </section>
  );
}