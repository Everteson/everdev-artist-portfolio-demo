import React from 'react';
import { Home, Image, PenTool, FileText, DollarSign, Clock, Languages, Menu, X, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { Button } from './Button';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, toggleLang }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { label: lang === 'PT' ? 'Início' : 'Home', href: '#home', icon: <Home size={16} /> },
    { label: lang === 'PT' ? 'Portfólio' : 'Portfolio', href: '#portfolio', icon: <Image size={16} /> },
    { label: lang === 'PT' ? 'Comissionar' : 'Commission', href: '#contact', icon: <PenTool size={16} /> },
    { label: lang === 'PT' ? 'Termos' : 'T.O.S', href: '#terms', icon: <FileText size={16} /> },
    { label: lang === 'PT' ? 'Preços' : 'Prices', href: '#prices', icon: <DollarSign size={16} /> },
    { label: lang === 'PT' ? 'Horário' : 'Schedule', href: '#schedule', icon: <Clock size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-brand-blueDark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo (Left aligned on mobile, centered on desktop roughly due to flex structure) */}
          <div className="flex-shrink-0 flex items-center gap-1 text-brand-blueDark font-bold text-xl cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Sparkles className="w-5 h-5 text-brand-blue" />
            <span className="tracking-widest">EverDev</span>
            <Sparkles className="w-5 h-5 text-brand-blue" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-blueDark hover:bg-sky-50 transition-colors ${item.label === (lang === 'PT' ? 'Início' : 'Home') ? 'bg-sky-50 text-brand-blueDark' : ''}`}
              >
                <span className="mr-1.5">{item.icon}</span>
                {item.label}
              </a>
            ))}
             <button
              onClick={toggleLang}
              className="ml-2 flex items-center px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
            >
              <Languages size={14} className="mr-1" />
              {lang}
            </button>
          </div>

           {/* Mobile Lang Toggle (Right side) */}
           <div className="md:hidden">
             <button onClick={toggleLang} className="text-gray-500 font-bold text-sm">
                {lang}
             </button>
           </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-brand-blueDark hover:bg-sky-50"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};