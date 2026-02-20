import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WalletRecovery from './pages/WalletRecovery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recover-wallet" element={<WalletRecovery />} />
    </Routes>
  );
}

export default App;