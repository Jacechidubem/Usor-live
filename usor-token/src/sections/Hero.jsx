import React from 'react';
import { BadgeCheck } from 'lucide-react'; 
import coin from '../assets/logo.png'; 
import coin2 from '../assets/logo2.png'; 

export default function Hero() {
  return (
    <section className="bg-[#0B0B0B] px-4 md:px-10 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* TEXT CONTENT: order-1 ensures this stays at the top on mobile */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start order-1">
          
          <div className="inline-flex items-center gap-2 bg-[#121212] border border-white/10 px-4 py-2 rounded-full mb-6 md:mb-10">
            <BadgeCheck 
              className="w-4 h-4 md:w-5 md:h-5 text-black" 
              fill="#D4AF37"
              strokeWidth={1.5} 
            />
            <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider">Official airdrop</span>
          </div>

          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8">
            Discover <br className="hidden md:block" /> Exclusive <br />
            <span className="text-[#D4AF37] tracking-tight">$USOR Airdrop</span>
          </h1>

          <p className="text-gray-400 text-sm md:text-lg max-w-lg mb-8 md:mb-12 leading-relaxed">
            Get direct <span className="text-[#D4AF37]">USOR airdrop</span> and never miss out on free crypto rewards. Track, participate, and claim airdrop from top blockchain projects across Solana ecosystem. <span className="text-[#D4AF37] font-bold">Hurry up!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 lg:mb-0">
            <button className="bg-white text-black px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Get Started
            </button>
            <button className="bg-transparent border border-gray-800 text-white px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/5 transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE CONTAINER: order-2 pushes this BELOW the text on mobile */}
        <div className="relative flex justify-center items-center order-2 lg:order-2">
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[80px] md:blur-[120px] rounded-full"></div>
          
          <img 
            src={coin2} 
            alt="US Oil Coin Frame" 
            className="relative z-10 w-full max-w-[280px] md:max-w-[500px] animate-pulse" 
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
      </div>
    </section>
  );
}