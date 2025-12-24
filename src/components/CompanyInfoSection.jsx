import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Target, Eye, Shield, Users, Award, Zap } from 'lucide-react';

const CompanyInfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header de la Sección (Siempre visible) */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Nuestra Esencia
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto mb-8">
            En Packet-World no solo transportamos paquetes, conectamos historias, negocios y personas. Descubre qué nos mueve.
          </p>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`
              group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 mx-auto
              ${isOpen 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-600/20'}
            `}
          >
            {isOpen ? 'Cerrar Información' : 'Conocer a Packet-World'}
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Contenido Desplegable */}
        <div 
          className={`grid transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100 mt-12' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="min-h-0"> {/* Contenedor interno necesario para la animación de grid */}
            
            {/* Historia / Quiénes Somos */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 text-center md:text-left">
                  <div className="inline-block p-4 bg-blue-100 rounded-2xl text-blue-600 mb-4">
                    <Users size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Quiénes Somos</h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Fundada en 2010 en el corazón logístico de México, <span className="font-bold text-blue-600">Packet-World</span> nació con una meta clara: eliminar las barreras de distancia para las empresas mexicanas. Lo que comenzó con una pequeña flotilla de 5 unidades, hoy se ha transformado en una de las redes de distribución más confiables del país, integrando tecnología de punta con un servicio humano y cercano.
                  </p>
                </div>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              
              {/* Tarjeta Misión */}
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                    <Target size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Nuestra Misión</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Brindar soluciones logísticas integrales que garanticen la seguridad y puntualidad de cada envío, impulsando el crecimiento de nuestros clientes a través de un servicio eficiente, transparente y tecnológicamente avanzado.
                </p>
              </div>

              {/* Tarjeta Visión */}
              <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-50 text-indigo-500 rounded-xl">
                    <Eye size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Nuestra Visión</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Consolidarnos para el año 2030 como la empresa líder en logística inteligente en México y Latinoamérica, siendo reconocidos por nuestra innovación sustentable y nuestra capacidad de adaptación a las necesidades del comercio global.
                </p>
              </div>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Nuestros Valores Corporativos</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="text-center p-6 bg-slate-50 rounded-2xl group hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Integridad</h4>
                  <p className="text-sm text-slate-500">Actuamos con honestidad y transparencia en cada entrega, cuidando lo que es tuyo como si fuera nuestro.</p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-2xl group hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Eficiencia</h4>
                  <p className="text-sm text-slate-500">Optimizamos rutas y procesos para garantizar que el tiempo juegue siempre a tu favor.</p>
                </div>

                <div className="text-center p-6 bg-slate-50 rounded-2xl group hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Excelencia</h4>
                  <p className="text-sm text-slate-500">No nos conformamos con cumplir; buscamos superar las expectativas en cada interacción.</p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyInfoSection;