import React from 'react';

const stats = [
  { number: "2M+", label: "Paquetes Entregados" },
  { number: "150+", label: "Sucursales" },
  { number: "98%", label: "Eficiencia de Entrega" },
  { number: "24/7", label: "Soporte Activo" }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, index) => (
            <div key={index} className="pt-8 md:pt-0 px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium tracking-wide text-sm uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;