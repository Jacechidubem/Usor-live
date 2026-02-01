// src/sections/FAQSection.jsx
import React from 'react';
import FAQItem from '../components/FAQItem';

export default function FAQSection() {
  const faqs = [
    "What is this airdrop about?",
    "Is this platform legitimate and trustworthy?",
    "What is our official relationship with Solana?",
    "How do I claim my airdrop tokens?",
    "What makes our token unique?"
  ];

  return (
    <section className="bg-[#0B0B0B] py-10 px-10">
      <div className="max-w-7xl mx-auto space-y-6">
        {faqs.map((q, index) => (
          <FAQItem key={index} question={q} />
        ))}
      </div>
    </section>
  );
}