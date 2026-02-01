import React, { useState, useEffect } from 'react';
import { X, Search, ChevronLeft, HelpCircle, Wallet } from 'lucide-react';

// Official IDs to prioritize and mark as Popular
const FEATURED_IDS = [
  'a7949439adef861091a999ba90800783', // Solflare ID
  'a51d56f64264775137d5c95273e961d0'  // Phantom ID
];

// Sub-component for the help rows to match image_16359f.png
const HelpRow = ({ title, description, icons }) => (
  <div className="flex flex-col items-center gap-2 mb-8 last:mb-0">
    <div className="flex gap-2.5">
      {icons.map((icon, i) => (
        <div 
          key={i} 
          className={`w-10 h-10 rounded-[12px] flex items-center justify-center text-lg shadow-inner ${icon.bg}`}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
    <h4 className="text-white font-bold text-sm mt-1">{title}</h4>
    <p className="text-gray-500 text-[11px] leading-relaxed px-10">{description}</p>
  </div>
);

export default function WalletModal({ onClose }) {
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('primary'); 

  const PROJECT_ID = '6622279b1c66799a78c81b3db742423c'; 

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://explorer-api.walletconnect.com/v3/wallets?projectId=${PROJECT_ID}&entries=120`
        );
        const data = await response.json();
        const listings = Object.values(data.listings);

        const sorted = listings.sort((a, b) => {
          const aIndex = FEATURED_IDS.indexOf(a.id);
          const bIndex = FEATURED_IDS.indexOf(b.id);
          if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          return 0;
        });

        setWallets(sorted);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWallets();
  }, [PROJECT_ID]);

  const filteredWallets = wallets.filter(w => 
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  // REDIRECTION: Sends users to the specific download page
  const handleAction = (name) => {
    if (name.toLowerCase() === 'solflare' || name.toLowerCase() === 'get started' || name.toLowerCase() === 'get a wallet') {
      window.location.href = "https://www.solflare.com/download/";
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-[#121212] border border-gray-800 w-full max-w-md max-h-[85vh] rounded-[32px] overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b border-gray-800/50 flex-shrink-0">
          {view !== 'primary' ? (
            <button onClick={() => setView('primary')} className="text-gray-400 hover:text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
          ) : (
            <button onClick={() => setView('help')} className="text-gray-500 hover:text-white transition-colors">
              <HelpCircle size={22} />
            </button>
          )}
          <h2 className="text-white font-bold text-lg mx-auto pl-2">
            {view === 'help' ? 'What is a Wallet?' : view === 'all' ? 'All Wallets' : 'Connect Wallet'}
          </h2>
          <button onClick={onClose} className="text-gray-400"><X size={24} /></button>
        </div>

        <div className="p-5 overflow-y-auto custom-scrollbar flex-1">
          {loading ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
               <div className="w-8 h-8 border-4 border-[#D4AF37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
            </div>
          ) : view === 'help' ? (
            /* EXACT HELP VIEW: Matches image_16359f.png and 15b657.png */
            <div className="py-4 text-center">
              <HelpRow 
                title="One login for all of web3"
                description="Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
                icons={[
                  { emoji: '🔑', bg: 'bg-orange-500/10 text-orange-400' },
                  { emoji: '🌐', bg: 'bg-blue-500/10 text-blue-400' },
                  { emoji: '🔒', bg: 'bg-purple-500/10 text-purple-400' }
                ]}
              />
              <HelpRow 
                title="A home for your digital assets"
                description="A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
                icons={[
                  { emoji: '💹', bg: 'bg-green-500/10 text-green-400' },
                  { emoji: '👩‍🎤', bg: 'bg-pink-500/10 text-pink-400' },
                  { emoji: '💰', bg: 'bg-teal-500/10 text-teal-400' }
                ]}
              />
              <HelpRow 
                title="Your gateway to a new web"
                description="With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
                icons={[
                  { emoji: '🧭', bg: 'bg-emerald-500/10 text-emerald-400' },
                  { emoji: '🏦', bg: 'bg-indigo-500/10 text-indigo-400' },
                  { emoji: '🗺️', bg: 'bg-amber-500/10 text-amber-400' }
                ]}
              />
              
              <button 
                onClick={() => handleAction('get a wallet')}
                className="w-full bg-[#3396ff] text-white font-bold py-4 rounded-2xl mt-8 flex items-center justify-center gap-2 hover:bg-[#2b7ede] transition-all shadow-[0_0_20px_rgba(51,150,255,0.2)]"
              >
                <div className="bg-white/20 p-1 rounded-lg">
                   <Wallet size={16} />
                </div>
                Get a wallet
              </button>
            </div>
          ) : (
            <>
              {view === 'all' && (
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search wallet"
                    className="w-full bg-[#1c1c1e] border border-gray-800 rounded-xl py-3 pl-12 text-white outline-none focus:border-[#D4AF37]/50"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              )}

              <div className={view === 'primary' ? 'space-y-3' : 'grid grid-cols-3 gap-y-8 gap-x-4'}>
                {filteredWallets.slice(0, view === 'primary' ? 5 : undefined).map((w) => (
                  <button 
                    key={w.id} 
                    onClick={() => handleAction(w.name)}
                    className={view === 'primary' 
                      ? "w-full flex items-center justify-between p-4 bg-[#1c1c1e] border border-gray-800 rounded-2xl hover:bg-[#252527] transition-all" 
                      : "flex flex-col items-center gap-2"
                    }
                  >
                    <div className={view === 'primary' ? "flex items-center gap-4" : "w-14 h-14 bg-[#1c1c1e] rounded-[20px] flex items-center justify-center p-3 border border-gray-800"}>
                      <img 
                        src={`https://explorer-api.walletconnect.com/v3/logo/md/${w.image_id}?projectId=${PROJECT_ID}`} 
                        className={view === 'primary' ? "w-9 h-9 object-contain" : "w-full h-full object-contain"} 
                        alt={w.name} 
                      />
                      {view === 'primary' && <span className="text-white font-bold">{w.name}</span>}
                    </div>
                    
                    {FEATURED_IDS.includes(w.id) && view === 'primary' && (
                      <span className="text-[10px] font-black uppercase bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 rounded-md">
                        Popular
                      </span>
                    )}
                    
                    {view === 'all' && (
                      <span className="text-gray-500 text-[10px] font-bold uppercase truncate w-full text-center mt-1">
                        {w.name}
                      </span>
                    )}
                  </button>
                ))}

                {view === 'primary' && (
                  <>
                    <button 
                      onClick={() => setView('all')} 
                      className="w-full flex items-center justify-between p-4 bg-[#1c1c1e] border border-gray-800 rounded-2xl hover:bg-[#252527] transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-2 gap-0.5 w-9 h-9 p-1.5 bg-[#252527] rounded-xl">
                          <div className="bg-gray-500 rounded-[2px]"></div>
                          <div className="bg-gray-400 rounded-[2px]"></div>
                          <div className="bg-gray-400 rounded-[2px]"></div>
                          <div className="bg-gray-500 rounded-[2px]"></div>
                        </div>
                        <span className="text-white font-bold">All Wallets</span>
                      </div>
                      <span className="bg-gray-800 text-gray-500 text-[10px] px-2 py-1 rounded-md tracking-tighter">120+</span>
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-6">
                      Haven't got a wallet? <button onClick={() => handleAction('get started')} className="text-[#D4AF37] font-bold hover:underline">Get started</button>
                    </p>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}