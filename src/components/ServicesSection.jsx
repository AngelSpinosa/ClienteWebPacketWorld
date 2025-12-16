import React from 'react';
import { Globe, Smartphone, Truck, ShieldCheck, BarChart3, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Rastreo Web en Tiempo Real",
    description: "Consulta el estatus exacto de tus envíos al instante. Nuestra plataforma web permite visualizar el historial completo de cambios de estado, desde la recepción en sucursal hasta la entrega final.",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "bg-blue-600"
  },
  {
    id: 2,
    title: "Logística Móvil Avanzada",
    description: "Nuestros conductores utilizan una aplicación móvil dedicada para gestionar rutas y actualizar estados en tiempo real, garantizando que la información que ves sea siempre la más reciente.",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    color: "bg-indigo-600"
  },
  {
    id: 3,
    title: "Flotilla Sostenible y Diversa",
    description: "Contamos con una gestión de unidades moderna que incluye vehículos a gasolina, diesel, híbridos y eléctricos, adaptándonos a las necesidades de carga y cuidando el medio ambiente.",
    icon: <Truck className="w-8 h-8 text-white" />,
    color: "bg-emerald-600"
  },
  {
    id: 4,
    title: "Gestión Integral de Envíos",
    description: "Sistema centralizado para la administración de paquetes. Calculamos costos automáticamente basados en dimensiones y peso para ofrecerte tarifas justas y transparentes.",
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    color: "bg-slate-800"
  },
  {
    id: 5,
    title: "Seguridad y Control",
    description: "Monitoreo constante de cada etapa del proceso. Si un paquete es detenido o cancelado, registramos el motivo y el colaborador responsable para una total trazabilidad.",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    color: "bg-amber-600"
  },
  {
    id: 6,
    title: "Red de Colaboradores",
    description: "Un equipo humano capacitado, desde ejecutivos de tienda hasta conductores certificados, conectados a través de nuestra plataforma para brindarte el mejor servicio.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-rose-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
            En Packet-World integramos tecnología de punta en aplicaciones web, móviles y de escritorio para ofrecerte una experiencia logística sin interrupciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-300">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed group-hover:text-slate-600">
                {service.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;