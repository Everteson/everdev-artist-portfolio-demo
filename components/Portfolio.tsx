import React, { useState } from 'react';
import { ArtItem, Language } from '../types';
import { Button } from './Button';
import { ExternalLink, Plus } from 'lucide-react';

interface PortfolioProps {
  lang: Language;
}

// Initial set
const initialArtworks: ArtItem[] = [
  { id: 1, title: 'Pink Magical Girl', category: 'Chibi', imageUrl: 'https://picsum.photos/id/64/400/400' }, 
  { id: 2, title: 'Cyberpunk Banner', category: 'Banner', imageUrl: 'https://picsum.photos/id/132/400/400' },
  { id: 3, title: 'Happy Emote', category: 'Emote', imageUrl: 'https://picsum.photos/id/102/400/400' },
  { id: 4, title: 'Fantasy Warrior', category: 'Illustration', imageUrl: 'https://picsum.photos/id/238/400/400' },
];

// Additional set to simulate "Load More"
const moreArtworks: ArtItem[] = [
  { id: 5, title: 'Cozy Room', category: 'Illustration', imageUrl: 'https://picsum.photos/id/319/400/400' },
  { id: 6, title: 'Pixel Art', category: 'Pixel', imageUrl: 'https://picsum.photos/id/532/400/400' },
  { id: 7, title: 'Stream Overlay', category: 'Design', imageUrl: 'https://picsum.photos/id/180/400/400' },
  { id: 8, title: 'Character Sheet', category: 'Concept', imageUrl: 'https://picsum.photos/id/250/400/400' },
];

export const Portfolio: React.FC<PortfolioProps> = ({ lang }) => {
  const [items, setItems] = useState<ArtItem[]>(initialArtworks);
  const [loadedAll, setLoadedAll] = useState(false);

  const handleLoadMore = () => {
    setItems([...items, ...moreArtworks]);
    setLoadedAll(true);
  };

  return (
    <section id="portfolio" className="py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blueDark mb-4">
            {lang === 'PT' ? 'Trabalhos em Destaque' : 'Featured Artwork'}
          </h2>
          <p className="text-gray-500">
            {lang === 'PT' ? 'Um vislumbre do meu mundo criativo' : 'A glimpse into my creative world'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {items.map((art) => (
            <div key={art.id} className="group relative rounded-2xl overflow-hidden shadow-lg bg-white aspect-square cursor-pointer animate-in fade-in zoom-in duration-500">
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{art.title}</h3>
                <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{art.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Portfolio Button */}
        <div className="flex justify-center flex-col items-center gap-4">
          {!loadedAll ? (
            <Button onClick={handleLoadMore} variant="primary" size="lg" className="px-10" icon={<Plus size={18} />}>
              {lang === 'PT' ? 'Ver Mais Projetos' : 'Load More Projects'}
            </Button>
          ) : (
             <span className="text-gray-400 italic mb-2">
                {lang === 'PT' ? 'Você viu tudo!' : 'You\'ve seen it all!'}
             </span>
          )}
          
          <a href="#" className="text-brand-blueDark hover:text-brand-blue text-sm font-medium flex items-center gap-1 transition-colors">
            {lang === 'PT' ? 'arte por: @EverDevArt' : 'art by: @EverDevArt'}
            <ExternalLink size={12} />
          </a>
        </div>

      </div>
    </section>
  );
};