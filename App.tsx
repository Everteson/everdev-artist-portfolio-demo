import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { CommissionModal } from './components/CommissionModal';
import { Terms } from './components/Terms';
import { Prices } from './components/Prices';
import { Schedule } from './components/Schedule';
import { Contact } from './components/Contact';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('PT');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle Language Handler
  const toggleLang = () => {
    setLang((prev) => (prev === 'PT' ? 'EN' : 'PT'));
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  const handleOpenCommission = () => setIsModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Navbar lang={lang} toggleLang={toggleLang} />
      
      <main>
        <Hero lang={lang} onCommission={handleOpenCommission} />
        <About lang={lang} />
        <Portfolio lang={lang} />
        
        {/* Full content sections instead of placeholders */}
        <Terms lang={lang} />
        <Prices lang={lang} onOrder={handleOpenCommission} />
        <Schedule lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
      
      <CommissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        lang={lang} 
      />
    </div>
  );
}

export default App;