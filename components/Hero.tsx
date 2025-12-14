import React from 'react';
import { Sparkles, ArrowRight, Clock, Image as ImageIcon } from 'lucide-react';
import { Button } from './Button';
import { Language } from '../types';

interface HeroProps {
  lang: Language;
  onCommission: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onCommission }) => {
  return (
    <div id="home" className="relative pt-12 pb-20 bg-gradient-to-b from-sky-50 to-white overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-brand-pink/40 animate-pulse">
        <Sparkles size={48} />
      </div>
      <div className="absolute bottom-20 right-10 text-brand-blue/30 animate-bounce">
        <Sparkles size={32} />
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Title */}
        <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-3xl animate-pulse">✨</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-title tracking-tight">EverDev</h1>
            <span className="text-3xl animate-pulse">✨</span>
        </div>

        {/* Subtitle Categories */}
        <p className="text-sm md:text-base text-gray-500 font-semibold tracking-widest uppercase mb-8">
          {lang === 'PT' ? 'ILUSTRAÇÕES • BANNERS • EMOTES • CHIBI\'S' : 'ILLUSTRATIONS • BANNERS • EMOTES • CHIBIS'}
        </p>

        {/* Intro Text */}
        <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed mb-10">
          {lang === 'PT' 
            ? "Olá! Sou uma artista especializada em ilustrações digitais, emotes para Discord/Twitch, banners personalizados e arte estilo chibi. Cada trabalho é feito com amor e atenção aos detalhes para trazer suas ideias à vida!"
            : "Hello! I am an artist specializing in digital illustrations, Discord/Twitch emotes, custom banners, and chibi art style. Every piece is crafted with love and attention to detail to bring your ideas to life!"}
        </p>

        {/* Status Badge */}
        <div className="flex justify-center mb-10">
            <div className="bg-brand-blue text-white px-6 py-2 rounded-full font-bold shadow-md flex items-center gap-2 animate-bounce cursor-default">
                <Sparkles size={16} />
                {lang === 'PT' ? "Comissões: Abertas" : "Commissions: Open"}
            </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={onCommission} size="lg" className="w-full sm:w-auto shadow-brand-blue/30 shadow-xl">
                {lang === 'PT' ? 'Solicitar Comissão' : 'Request Commission'}
                <ArrowRight size={18} className="ml-2" />
            </Button>
            
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full" icon={<ImageIcon size={18}/>}>
                  {lang === 'PT' ? 'Ver Portfólio' : 'View Portfolio'}
              </Button>
            </a>
            
            <a href="#schedule" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full" icon={<Clock size={18}/>}>
                  {lang === 'PT' ? 'Horário de Atendimento' : 'Business Hours'}
              </Button>
            </a>
        </div>
      </div>
    </div>
  );
};