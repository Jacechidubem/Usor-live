// src/sections/Partners.jsx
import React from 'react';

// Using your uploaded image files directly
import pyth from '../assets/pyth.png';
import solblaze from '../assets/solblaze.png';
import bonk from '../assets/bonk.png';
import orca from '../assets/orca.png';
import jito from  '../assets/jito.png';
import marinade from '../assets/marinade.png';
import metaplex from '../assets/metaplex.png';

export default function Partners() {
  const logos = [pyth, solblaze, bonk, orca, jito, marinade, metaplex];
  
  return (
    <div className="bg-[#0B0B0B] py-14 border-y border-gray-900 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap items-center">
        {/* Double the array for a seamless loop */}
        {[...logos, ...logos].map((img, i) => (
          <div key={i} className="mx-16 flex-shrink-0">
            <img 
              src={img} 
              alt="Partner Logo" 
              className="h-10 w-auto object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}