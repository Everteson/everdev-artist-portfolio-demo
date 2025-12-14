import React from 'react';
import { Clock, Calendar, Zap } from 'lucide-react';
import { Language } from '../types';

interface ScheduleProps {
  lang: Language;
}

export const Schedule: React.FC<ScheduleProps> = ({ lang }) => {
  return (
    <section id="schedule" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          
          {/* Main Title Block */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-brand-blueDark mb-4 flex items-center justify-center md:justify-start gap-2">
              <Clock className="w-8 h-8" />
              {lang === 'PT' ? 'Horários & Status' : 'Schedule & Status'}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {lang === 'PT' 
                ? 'Organizo minha semana para entregar arte de qualidade sem perder os prazos. Confira meu status atual para saber se posso aceitar seu pedido imediatamente.'
                : 'I organize my week to deliver quality art without missing deadlines. Check my current status to see if I can accept your order immediately.'}
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {lang === 'PT' ? 'STATUS: ACEITANDO PEDIDOS' : 'STATUS: ACCEPTING ORDERS'}
            </div>
          </div>

          {/* Schedule Card */}
          <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Calendar size={120} />
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-6 border-b pb-2">
              {lang === 'PT' ? 'Horário de Atendimento' : 'Business Hours'} (GMT-3)
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-500">{lang === 'PT' ? 'Segunda - Sexta' : 'Monday - Friday'}</span>
                <span className="font-bold text-brand-blueDark">10:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-500">{lang === 'PT' ? 'Sábado' : 'Saturday'}</span>
                <span className="font-bold text-brand-blueDark">10:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-gray-500">{lang === 'PT' ? 'Domingo' : 'Sunday'}</span>
                <span className="font-bold text-red-400">{lang === 'PT' ? 'Fechado' : 'Closed'}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <div className="flex items-center gap-3 text-sm text-gray-600 bg-sky-50 p-4 rounded-lg">
                 <Zap className="w-5 h-5 text-yellow-500 shrink-0" />
                 <p>
                   {lang === 'PT' 
                     ? 'Respondo e-mails e DMs em até 24 horas úteis.' 
                     : 'I reply to emails and DMs within 24 business hours.'}
                 </p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};