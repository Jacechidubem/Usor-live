import React, { useState, useEffect } from 'react';
import { Layers, TrendingUp, Star, Clock } from 'lucide-react'; 
import logo from '../assets/logo.png';

export default function LiveCharts() {
  // Logic to generate a single new mock transaction
  const generateTx = () => ({
    hash: Math.random().toString(36).substring(2, 10) + "..." + Math.random().toString(36).substring(2, 6),
    from: Math.random().toString(36).substring(2, 8) + "..." + Math.random().toString(36).substring(2, 6),
    to: Math.random().toString(36).substring(2, 8) + "..." + Math.random().toString(36).substring(2, 6),
    amount: (Math.random() * 50000 + 10000).toLocaleString(undefined, { minimumFractionDigits: 2 }),
  });

  // Initialize with three unique transactions
  const [transactions, setTransactions] = useState([generateTx(), generateTx(), generateTx()]);

  useEffect(() => {
    // 10-second interval for sequential updates
    const interval = setInterval(() => {
      setTransactions(prev => {
        const newTx = generateTx();
        // Shift logic: New item at index 0, followed by previous index 0 and 1
        return [newTx, prev[0], prev[1]]; 
      });
    }, 10000); 

    return () => clearInterval(interval); 
  }, []);

  const stats = [
    { label: "Market Cap", value: "$20.812.764", icon: <Layers className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" /> },
    { label: "24h Volume", value: "$5.660.799", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" /> },
    { label: "24h Change", value: "+8.57%", icon: <Star className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" /> },
    { label: "Current Price", value: "$0.020813", icon: <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#D4AF37]" /> }
  ];

  return (
    <section id="live-chart" className="bg-[#0B0B0B] py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">Live Charts</h2>
          <p className="text-gray-400 text-base md:text-lg">Real-time price tracking and market analysis</p>
        </div>
        
        <div className="bg-[#121212] border border-gray-800 rounded-[24px] md:rounded-[32px] overflow-hidden">
          
          {/* TOP PORTION: MARKET STATS */}
          <div className="p-8 md:p-16 text-center">
            <div className="relative inline-flex justify-center items-center mb-8 md:mb-10">
              <div className="absolute inset-0 bg-[#D4AF37]/30 blur-[40px] md:blur-[60px] rounded-full animate-pulse"></div>
              <img src={logo} alt="Logo" className="relative z-10 w-24 h-24 md:w-40 md:h-40 rounded-full border-4 border-[#121212] shadow-2xl" />
            </div>

            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">U.S Oil</h3>
            
            <div className="flex justify-center mb-10 md:mb-16">
              <div className="flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 md:px-5 py-2 rounded-full">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                <span className="text-[#D4AF37] text-[10px] md:text-sm font-bold uppercase tracking-widest">Live Statistics</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-[#1c1c1e] border border-gray-800 p-6 md:p-8 rounded-2xl flex items-center gap-4 text-left">
                  <div className="bg-gray-800/50 p-3 md:p-4 rounded-xl">{stat.icon}</div>
                  <div>
                    <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase mb-1">{stat.label}</p>
                    <p className="text-white text-lg md:text-xl font-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM PORTION: LIVE TRANSACTIONS */}
          <div className="p-4 md:p-8 pt-0">
            <div className="flex justify-between items-center mb-6 md:mb-8 px-2 md:px-4">
              <h3 className="text-white text-xl md:text-2xl font-bold">Live Transactions</h3>
              <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/20">
                <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></span>
                <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Live Feed</span>
              </div>
            </div>

            {/* HORIZONTAL SCROLL CONTAINER */}
            <div className="overflow-x-auto pb-4 scrollbar-hide">
              {/* MIN-WIDTH: Forces the table to stay wide enough to scroll */}
              <div className="space-y-3 md:space-y-4 min-w-[850px] md:min-w-full">
                {transactions.map((tx) => (
                  <div 
                    key={tx.hash} 
                    className="grid grid-cols-5 items-center p-5 md:p-6 bg-[#1c1c1e] border border-gray-800 rounded-2xl hover:border-[#D4AF37]/30 transition-all duration-700 animate-in fade-in slide-in-from-top-2"
                  >
                    <div>
                      <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase mb-1">Hash</p>
                      <p className="text-[#D4AF37] font-mono text-xs md:text-sm whitespace-nowrap">{tx.hash}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase mb-1">From</p>
                      <p className="text-white font-medium text-xs md:text-sm whitespace-nowrap">{tx.from}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase mb-1">To</p>
                      <p className="text-white font-medium text-xs md:text-sm whitespace-nowrap">{tx.to}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[9px] md:text-[10px] font-bold uppercase mb-1">Amount</p>
                      <p className="text-[#D4AF37] font-bold text-base md:text-lg whitespace-nowrap">{tx.amount} USOR</p>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-4 py-1.5 rounded-xl whitespace-nowrap">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]"></span>
                        <span className="text-[#D4AF37] text-[10px] font-black uppercase">Confirmed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}