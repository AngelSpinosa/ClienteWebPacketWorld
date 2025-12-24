import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  "Rastreo en tiempo real con GPS de alta precisión.",
  "Flota moderna de unidades eléctricas y sostenibles.",
  "Plataforma web intuitiva para gestión de envíos masivos.",
  "Integración API para e-commerce y empresas."
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Contenido de texto */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Innovación en cada kilómetro
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Hemos reinventado la logística para adaptarnos a la velocidad del mundo actual. Con Packet-World, tienes el control total de tus operaciones logísticas desde la palma de tu mano.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Elemento visual (Tarjeta simulada) */}
        <div className="flex-1 w-full relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-8 -left-4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Paquete #MX-9921</h4>
                <p className="text-green-600 text-sm font-bold flex items-center gap-1">
                  ● En tránsito
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Origen</span>
                <span className="font-medium text-slate-800">CDMX, Centro</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Destino</span>
                <span className="font-medium text-slate-800">Guadalajara, Jal</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
                <div className="h-full bg-blue-600 w-3/4"></div>
              </div>
              <p className="text-center text-xs text-slate-400 mt-2">Tiempo estimado: 2 horas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;