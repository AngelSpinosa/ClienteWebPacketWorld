import React from 'react';
import { Truck, Globe, Clock, ShieldCheck, Headphones, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: "Envíos Nacionales",
    description: "Cobertura total en todo el país con tiempos de entrega garantizados de 24 a 48 horas."
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: "Servicio Express",
    description: "Para cuando el tiempo es crítico. Prioridad máxima en recolección y entrega."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    title: "App para Conductores",
    description: "Tecnología de punta para nuestros colaboradores, asegurando rutas optimizadas."
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "Soporte 24/7",
    description: "Equipo de atención al cliente siempre disponible para resolver tus dudas."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones logísticas a tu medida</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            En Packet-World no solo transportamos paquetes, entregamos promesas. Descubre por qué somos la opción preferida de miles de empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group bg-slate-50 hover:bg-white">
              <div className="mb-4 bg-white p-3 rounded-lg w-fit shadow-sm group-hover:bg-blue-50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;