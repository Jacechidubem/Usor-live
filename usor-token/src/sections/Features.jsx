import React from 'react';
import { Coins, Zap, ShieldCheck, Timer } from 'lucide-react';

const cards = [
  { 
    title: "Free Tokens", 
    desc: "Receive free cryptocurrency tokens without any investment required.", 
    icon: <Coins className="w-6 h-6" /> 
  },
  { 
    title: "Instant Claims", 
    desc: "Claim your airdrops instantly with our automated system.", 
    icon: <Zap className="w-6 h-6" /> 
  },
  { 
    title: "Secure Process", 
    desc: "All airdrops are verified and secure through blockchain technology.", 
    icon: <ShieldCheck className="w-6 h-6" /> 
  },
  { 
    title: "Early Access", 
    desc: "Get early access to promising new projects and tokens.", 
    icon: <Timer className="w-6 h-6" /> 
  }
];

export default function Features() {
  return (
    <section className="bg-[#0B0B0B] py-20 md:py-32 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* LEFT SIDE: Heading and Button */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">How Airdrop Works</h2>
          <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl">
            Airdrop is a free token distributions to cryptocurrency holders. reward early adopters, and build community engagement.Simply hold eligible tokens and receive free awards automatically.
          </p>
          <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-3 rounded-xl font-bold text-sm md:text-lg hover:bg-[#D4AF37]/10 transition-colors">
            Watch Live
          </button>
        </div>

        {/* RIGHT SIDE: 2x2 Grid on PC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div key={i} className="p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-gray-800 bg-[#121212] hover:border-[#D4AF37]/40 transition-all">
              <div className="text-[#D4AF37] mb-6 bg-[#D4AF37]/10 w-12 h-12 flex items-center justify-center rounded-xl">
                {card.icon}
              </div>
              <h3 className="text-white text-lg md:text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}