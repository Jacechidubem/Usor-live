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
    <section id="faq" className="bg-[#0B0B0B] py-10 md:py-20 px-4 md:px-10">
      {/* max-w-4xl prevents the cards from stretching too wide on PC */}
      <div className="max-w-4xl mx-auto space-y-4 md:space-y-5">
        {faqs.map((q, index) => (
          <FAQItem key={index} question={q} />
        ))}
      </div>
    </section>
  );
}