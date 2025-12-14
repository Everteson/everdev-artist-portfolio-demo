import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { Language } from '../types';

interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const CommissionModal: React.FC<CommissionModalProps> = ({ isOpen, onClose, lang }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-brand-blue/10 px-6 py-4 flex justify-between items-center border-b border-brand-blue/10">
          <h3 className="text-lg font-bold text-brand-blueDark">
            {lang === 'PT' ? 'Solicitar Comissão' : 'Request Commission'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {lang === 'PT' ? 'Solicitação Enviada!' : 'Request Sent!'}
              </h4>
              <p className="text-gray-500">
                {lang === 'PT' ? 'Entrarei em contato em breve.' : 'I will be in touch shortly.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {lang === 'PT' ? 'Nome / Nickname' : 'Name / Nickname'}
                </label>
                <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input required type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {lang === 'PT' ? 'Tipo de Arte' : 'Art Type'}
                </label>
                <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white">
                  <option>Chibi Character</option>
                  <option>Discord/Twitch Emote</option>
                  <option>Banner / Header</option>
                  <option>Full Illustration</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {lang === 'PT' ? 'Descrição da Ideia' : 'Idea Description'}
                </label>
                <textarea rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all" placeholder="Tell me about your character..." />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full" icon={<Send size={16} />}>
                  {lang === 'PT' ? 'Enviar Solicitação' : 'Send Request'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};