import React, { useState } from 'react';
import { Send, CheckCircle, Mail, User, MessageSquare } from 'lucide-react';
import { Button } from './Button';
import { Language } from '../types';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitted(false);
      // alert('Resetting form for demo');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="bg-brand-blueDark p-10 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                {lang === 'PT' ? 'Vamos trabalhar juntos!' : 'Let\'s work together!'}
              </h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                {lang === 'PT' 
                  ? 'Preencha o formulário para solicitar um orçamento ou tirar dúvidas. Estou animada para ouvir suas ideias!' 
                  : 'Fill out the form to request a quote or ask questions. I\'m excited to hear your ideas!'}
              </p>
            </div>
            
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-white/20 rounded-lg"><Mail size={20}/></div>
                 <span className="text-sm font-medium">contact@everdev.art</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="p-2 bg-white/20 rounded-lg"><User size={20}/></div>
                 <span className="text-sm font-medium">@EverDevArt</span>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
                <CheckCircle className="w-20 h-20 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {lang === 'PT' ? 'Mensagem Enviada!' : 'Message Sent!'}
                </h3>
                <p className="text-gray-500">
                  {lang === 'PT' 
                    ? 'Obrigado pelo contato. Responderei em breve no seu email.' 
                    : 'Thanks for reaching out. I will reply to your email shortly.'}
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
                  {lang === 'PT' ? 'Enviar Outra' : 'Send Another'}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    {lang === 'PT' ? 'Seu Nome' : 'Your Name'}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input required type="text" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Everton..." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                    <input required type="email" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="hello@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    {lang === 'PT' ? 'Interesse' : 'Interest'}
                  </label>
                  <select className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white text-gray-600">
                    <option value="commission">{lang === 'PT' ? 'Comissão (Arte)' : 'Commission (Art)'}</option>
                    <option value="question">{lang === 'PT' ? 'Dúvida Geral' : 'General Question'}</option>
                    <option value="collab">{lang === 'PT' ? 'Colaboração' : 'Collaboration'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">
                    {lang === 'PT' ? 'Mensagem' : 'Message'}
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                    <textarea required rows={4} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder={lang === 'PT' ? 'Descreva sua ideia...' : 'Describe your idea...'} />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" icon={<Send size={18} />}>
                  {lang === 'PT' ? 'Enviar Mensagem' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};