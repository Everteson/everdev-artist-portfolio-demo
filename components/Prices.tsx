import React from 'react';
import { DollarSign, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { Button } from './Button';

interface PricesProps {
  lang: Language;
  onOrder: () => void;
}

export const Prices: React.FC<PricesProps> = ({ lang, onOrder }) => {
  const prices = [
    {
      title: 'Icon / Headshot',
      priceBR: 'R$ 80',
      priceUS: '$ 25',
      features: lang === 'PT' 
        ? ['Colorido', 'Fundo Simples', 'Alta Resolução'] 
        : ['Full Color', 'Simple Background', 'High Resolution'],
      popular: false
    },
    {
      title: 'Half Body',
      priceBR: 'R$ 150',
      priceUS: '$ 45',
      features: lang === 'PT' 
        ? ['Colorido', 'Personagem até a cintura', 'Fundo Detalhado (+R$30)'] 
        : ['Full Color', 'Waist-up character', 'Detailed BG (+$10)'],
      popular: true
    },
    {
      title: 'Full Body',
      priceBR: 'R$ 250',
      priceUS: '$ 70',
      features: lang === 'PT' 
        ? ['Corpo Inteiro', 'Pose Dinâmica', 'Fundo Detalhado (+R$50)'] 
        : ['Full Body', 'Dynamic Pose', 'Detailed BG (+$15)'],
      popular: false
    },
    {
      title: 'Chibi',
      priceBR: 'R$ 100',
      priceUS: '$ 30',
      features: lang === 'PT' 
        ? ['Estilo Fofo', 'Corpo Inteiro', 'Fundo Transparente'] 
        : ['Cute Style', 'Full Body', 'Transparent PNG'],
      popular: false
    }
  ];

  return (
    <section id="prices" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blueDark mb-4 flex items-center justify-center gap-2">
            <DollarSign className="w-8 h-8" />
            {lang === 'PT' ? 'Tabela de Preços' : 'Price List'}
          </h2>
          <p className="text-gray-500">
            {lang === 'PT' ? 'Investimento para trazer sua ideia à realidade' : 'Investment to bring your idea to reality'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prices.map((item, index) => (
            <div key={index} className={`relative flex flex-col p-6 bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${item.popular ? 'border-brand-blue shadow-lg ring-1 ring-brand-blue' : 'border-gray-200 shadow-sm hover:shadow-md'}`}>
              
              {item.popular && (
                <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                  <span className="bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {lang === 'PT' ? 'Mais Pedido' : 'Best Seller'}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{item.title}</h3>
              <div className="text-center mb-6">
                <span className="text-3xl font-extrabold text-brand-blueDark">
                  {lang === 'PT' ? item.priceBR : item.priceUS}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {item.features.map((feat, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button onClick={onOrder} variant={item.popular ? 'primary' : 'outline'} className="w-full">
                {lang === 'PT' ? 'Encomendar' : 'Order Now'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};