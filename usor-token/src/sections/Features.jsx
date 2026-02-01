// src/sections/Features.jsx
import React from 'react';
import { Coins, Zap, ShieldCheck, Timer } from 'lucide-react'; // Proper Lucide icons

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
    <section className="bg-[#0B0B0B] py-24 px-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-white text-5xl font-bold mb-8 leading-tight">How Airdrop Works</h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-md">
          Airdrop is a free token distributions to cryptocurrency holders. They're used to promote new projects, reward early adopters, and build community engagement. Simply hold eligible tokens and receive free rewards automatically.
        </p>
        <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-3 rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-colors">
          Watch Live
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <div 
            key={i} 
            className="p-8 rounded-[32px] border border-gray-800 bg-[#121212] hover:border-[#D4AF37]/40 transition-all duration-300"
          >
            <div className="text-[#D4AF37] mb-6 bg-[#D4AF37]/10 w-12 h-12 flex items-center justify-center rounded-xl">
              {card.icon}
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}