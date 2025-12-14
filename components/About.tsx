import React from 'react';
import { Palette, Sparkles, Star } from 'lucide-react';
import { Language, ServiceItem } from '../types';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const services: ServiceItem[] = [
    {
      title: lang === 'PT' ? 'Ilustrações Personalizadas' : 'Custom Illustrations',
      description: lang === 'PT' ? 'Arte original adaptada à sua visão e preferências de estilo.' : 'Original artwork tailored to your vision and style preferences.',
      icon: 'palette'
    },
    {
      title: lang === 'PT' ? 'Emotes & Banners' : 'Emotes & Banners',
      description: lang === 'PT' ? 'Perfeito para streaming, jogos e presença nas redes sociais.' : 'Perfect for streaming, gaming, and social media presence.',
      icon: 'sparkles'
    },
    {
      title: lang === 'PT' ? 'Personagens Chibi' : 'Chibi Characters',
      description: lang === 'PT' ? 'Designs de personagens adoráveis e estilizados, cheios de personalidade.' : 'Adorable, stylized character designs full of personality.',
      icon: 'star'
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'palette': return <Palette className="w-10 h-10 text-brand-blue" />;
      case 'sparkles': return <Sparkles className="w-10 h-10 text-brand-blue" />;
      case 'star': return <Star className="w-10 h-10 text-brand-blue" />;
      default: return <Sparkles />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-bold text-brand-blueDark mb-6">
          {lang === 'PT' ? 'Sobre a Artista' : 'About the Artist'}
        </h2>
        
        <p className="max-w-3xl mx-auto text-gray-600 mb-16 leading-relaxed">
           {lang === 'PT' 
             ? "Bem-vindo ao meu mundo criativo! Sou apaixonada por dar vida a personagens e ideias através da arte digital. Especializada em ilustrações vibrantes, banners atraentes, emotes expressivos e personagens chibi encantadores. Cada peça é criada com atenção aos detalhes e um toque de magia. ✨"
             : "Welcome to my creative world! I'm passionate about bringing characters and ideas to life through digital art. Specializing in vibrant illustrations, eye-catching banners, expressive emotes, and charming chibi characters. Each piece is crafted with attention to detail and a touch of magic. ✨"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:border-brand-blue/30 hover:shadow-[0_8px_30px_rgb(167,226,245,0.2)] transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                 <div className="p-4 bg-sky-50 rounded-full">
                    {getIcon(service.icon)}
                 </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};