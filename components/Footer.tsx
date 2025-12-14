import React from 'react';
import { Instagram, Twitter, MessageCircle, Mail, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            {/* Brand */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start text-brand-blueDark font-bold text-xl mb-1">
                    <Sparkles className="w-5 h-5 text-brand-blue" />
                    <span className="tracking-widest">EverDev</span>
                    <Sparkles className="w-5 h-5 text-brand-blue" />
                </div>
                <p className="text-xs text-gray-400">art by: @EverDevArt</p>
            </div>

            {/* Socials */}
            <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110">
                    <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors transform hover:scale-110">
                    <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors transform hover:scale-110">
                    <MessageCircle size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors transform hover:scale-110">
                    <Mail size={20} />
                </a>
            </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© 2024 EverDev. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-2">
                <span>ILUSTRAÇÕES</span> • <span>BANNERS</span> • <span>EMOTES</span> • <span>CHIBI'S</span>
            </div>
        </div>

      </div>
    </footer>
  );
};