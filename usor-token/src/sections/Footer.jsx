// src/sections/Footer.jsx
import React from 'react';
import { Send } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  const footerLinks = {
    Platform: ["Airdrop", "Trading", "Staking", "Analytics"],
    Community: ["Documentation", "Support", "Blog", "Events"],
    Resources: ["API", "Whitepaper", "Roadmap", "Tokenomics"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"]
  };

  return (
    /* Background changed to a slightly brighter #111111 */
    <footer className="bg-[#111111] pt-24 pb-12 px-10 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-24">
          
          {/* Left Column: Brand & Socials */}
          <div className="max-w-xs mb-10 md:mb-0">
            {/* Circular Logo */}
            <img 
              src={logo} 
              alt="U.S. Oil" 
              className="w-14 h-14 rounded-full object-cover mb-6 border border-gray-700" 
            />
            <h3 className="text-white text-3xl font-bold mb-4 tracking-tighter">U.S Oil</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The revolutionary token based on Solana blockchain. Join millions of users building the future of DeFi.
            </p>
            
            <div className="flex gap-3">
              {/* X Icon */}
              <a href="#" className="w-10 h-10 bg-[#1c1c1e] rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 hover:border-[#D4AF37]/30 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a href="#" className="w-10 h-10 bg-[#1c1c1e] rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 hover:border-[#D4AF37]/30 transition-all">
                <Send size={18} />
              </a>

              {/* Discord Logo */}
              <a href="#" className="w-10 h-10 bg-[#1c1c1e] rounded-lg flex items-center justify-center text-gray-400 border border-gray-800 hover:border-[#D4AF37]/30 transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.052-.102.001-.226-.112-.269a13.041 13.041 0 0 1-1.872-.894.077.077 0 0 1-.008-.128c.125-.094.252-.192.37-.296a.074.074 0 0 1 .077-.01c3.927 1.797 8.18 1.797 12.061 0a.073.073 0 0 1 .077.01c.118.104.246.202.372.296a.077.077 0 0 1-.006.128 12.553 12.553 0 0 1-1.873.894.077.077 0 0 0-.111.27c.353.698.765 1.362 1.227 1.993a.077.077 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.086 2.156 2.419 0 1.334-.946 2.419-2.156 2.419zm7.974 0c-1.182 0-2.156-1.085-2.156-2.419 0-1.333.946-2.419 2.156-2.419 1.21 0 2.175 1.086 2.156 2.419 0 1.334-.946 2.419-2.156 2.419z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Grid of Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white font-bold mb-6 text-sm">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">© 2026 U.S Oil . All rights reserved.</p>
          
          <div className="flex gap-12">
            <div className="text-right">
              <p className="text-[#D4AF37] font-bold text-lg leading-tight">$5.7M</p>
              <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Total Volume</p>
            </div>
            <div className="text-right">
              <p className="text-[#D4AF37] font-bold text-lg leading-tight">$20.8M</p>
              <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Market Cap</p>
            </div>
            <div className="text-right">
              <p className="text-[#D4AF37] font-bold text-lg leading-tight">24/7</p>
              <p className="text-gray-600 text-[10px] uppercase font-bold tracking-widest mt-1">Support</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}