import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Partners from './sections/Partners';       
import Features from './sections/Features';       
import LiveCharts from './sections/LiveCharts';   
import FAQSection from './sections/FAQSection';   // Updated: Replaces manual FAQ loop
import Footer from './sections/Footer';           
import WalletModal from './components/WalletModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  // Requirement: Clicking anywhere opens the modal IF not connected
  const handleGlobalClick = (e) => {
    if (showModal || isConnected) return;
    setShowModal(true);
  };

  const handleConnectWallet = () => {
    setIsConnected(true);
    setShowModal(false);
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white overflow-x-hidden font-sans" onClick={handleGlobalClick}>
      <Navbar 
        isConnected={isConnected} 
        onConnect={() => setShowModal(true)} 
      />

      <main className="relative">
        {/* 1. Hero Section (Screenshot 160) */}
        <Hero onConnect={() => setShowModal(true)} />
        
        {/* 2. Partners Grayscale Bar (Screenshot 161) */}
        <Partners />
        
        {/* 3. Features & "How Airdrop Works" (Screenshot 161) */}
        <Features />
        
        {/* 4. Live Charts & Transactions (Screenshot 162 & 163 merged) */}
        <LiveCharts />
        
        {/* 5. FAQ Section (Screenshot 235992: Full-width, no title) */}
        <FAQSection />
      </main>

      {/* 6. Footer & Fixed Bottom Bar (Screenshot 165/33515e) */}
      <Footer />

      {/* Wallet Modal Overlay */}
      {showModal && (
        <WalletModal 
          onClose={(e) => {
            e.stopPropagation();
            setShowModal(false);
          }} 
          onSelect={handleConnectWallet}
        />
      )}
    </div>
  );
}

export default App;