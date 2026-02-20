import React, { useState } from 'react';
import { X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar({ onConnect, onDisconnect, isConnected, connectedWallet }) {
  const [showDisconnect, setShowDisconnect] = useState(false);

  const handleDisconnect = () => {
    if (onDisconnect) {
      onDisconnect();
    }
    setShowDisconnect(false);
  };

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

      {isConnected && connectedWallet ? (
        <div className="relative">
          <button
            onClick={() => setShowDisconnect(!showDisconnect)}
            className="bg-[#d4af37] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-2 hover:bg-[#d4af37]/90 transition-colors"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Connected to {connectedWallet}
          </button>
          
          {showDisconnect && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setShowDisconnect(false)}
              ></div>
              <div className="absolute right-0 top-full mt-2 bg-[#121212] border border-gray-800 rounded-xl shadow-2xl z-20 min-w-[200px] overflow-hidden">
                <button
                  onClick={handleDisconnect}
                  className="w-full px-4 py-3 text-left text-white hover:bg-[#1c1c1e] transition-colors flex items-center gap-3 text-sm font-bold"
                >
                  <X size={18} className="text-red-400" />
                  <span>Disconnect Wallet</span>
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <button 
          onClick={onConnect}
          className="bg-[#d4af37] text-black px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.2)]"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
}