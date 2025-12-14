import React from 'react';
import { FileText, AlertCircle, Check, DollarSign, Clock } from 'lucide-react';
import { Language } from '../types';

interface TermsProps {
  lang: Language;
}

export const Terms: React.FC<TermsProps> = ({ lang }) => {
  const termsList = [
    {
      icon: <DollarSign className="text-brand-blue" />,
      title: lang === 'PT' ? 'Pagamento' : 'Payment',
      desc: lang === 'PT' 
        ? 'Pagamento 50% adiantado e 50% após o esboço aprovado. Aceito Pix e PayPal.' 
        : '50% payment upfront and 50% after sketch approval. I accept PayPal.'
    },
    {
      icon: <Clock className="text-brand-blue" />,
      title: lang === 'PT' ? 'Prazos' : 'Deadlines',
      desc: lang === 'PT' 
        ? 'O prazo médio é de 7 a 14 dias úteis, dependendo da complexidade e da fila.' 
        : 'Average turnaround time is 7-14 business days, depending on complexity and queue.'
    },
    {
      icon: <AlertCircle className="text-brand-blue" />,
      title: lang === 'PT' ? 'Reembolso' : 'Refunds',
      desc: lang === 'PT' 
        ? 'Não há reembolso após a aprovação do esboço e início da lineart.' 
        : 'No refunds after the sketch is approved and lineart has started.'
    },
    {
      icon: <Check className="text-brand-blue" />,
      title: lang === 'PT' ? 'Direitos de Uso' : 'Usage Rights',
      desc: lang === 'PT' 
        ? 'Uso pessoal apenas. Para uso comercial (merch, vtuber, jogos), taxas extras se aplicam.' 
        : 'Personal use only. For commercial use (merch, vtuber, games), extra fees apply.'
    }
  ];

  return (
    <section id="terms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-blueDark mb-4 flex items-center justify-center gap-2">
            <FileText className="w-8 h-8" />
            {lang === 'PT' ? 'Termos de Serviço' : 'Terms of Service'}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {lang === 'PT' 
              ? 'Por favor, leia atentamente antes de solicitar uma comissão.' 
              : 'Please read carefully before requesting a commission.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {termsList.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/30 hover:bg-sky-50/50 transition-all">
              <div className="p-3 bg-brand-pink/50 rounded-lg shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-brand-text mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};