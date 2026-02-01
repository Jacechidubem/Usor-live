import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question }) {
  return (
    <div className="bg-[#121212] border border-gray-800 rounded-[18px] md:rounded-[22px] transition-colors hover:border-gray-700">
      {/* Removed button and state logic. 
         Padding is adjusted for mobile (p-5) and desktop (px-10 py-7) 
      */}
      <div className="px-5 py-5 md:px-10 md:py-7 flex justify-between items-center gap-4">
        <h3 className="text-white text-base md:text-xl font-bold tracking-tight leading-snug">
          {question}
        </h3>
        
        {/* Static Gold Icon Box */}
        <div className="flex-shrink-0 p-2 bg-[#1c1c1e] border border-gray-700 rounded-xl text-[#D4AF37]">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </div>
    </div>
  );
}