// src/components/FAQItem.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question }) {
  return (
    <div className="bg-[#121212] border border-gray-800 rounded-[20px] hover:border-[#D4AF37]/20 transition-all duration-300">
      <div className="px-10 py-8 flex justify-between items-center gap-4">
        <h3 className="text-white text-xl font-bold tracking-tight">{question}</h3>
        
        {/* Glowing Gold Dropdown Container */}
        <div className="p-2 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <ChevronDown className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </div>
    </div>
  );
}