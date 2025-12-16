import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const branches = [
  {
    id: 1,
    city: "Aguascalientes Centro",
    state: "Aguascalientes",
    address: "Av. Adolfo López Mateos 120, Zona Centro",
    phone: "(449) 123-4567",
    description: "Nuestra matriz en el corazón de México. Un punto estratégico de conexión logística para todo el bajío.",
    image: "/1.png" // Asignada imagen 1
  },
  {
    id: 2,
    city: "Monterrey",
    state: "Nuevo León",
    address: "Av. Revolución 100, Col. Centro",
    phone: "(81) 8123-4567",
    description: "Especialistas en manejo de carga pesada y envíos empresariales urgentes hacia la frontera norte.",
    image: "/2.png" // Asignada imagen 2
  },
  {
    id: 3,
    city: "Guadalajara",
    state: "Jalisco",
    address: "Calz. Lázaro Cárdenas 2305, Zona Industrial",
    phone: "(33) 3123-4567",
    description: "El centro de distribución más tecnológico de occidente. Conexión directa con el pacífico.",
    image: "/3.png" // Asignada imagen 3
  },
  {
    id: 4,
    city: "Puebla",
    state: "Puebla",
    address: "Blvd. Hermanos Serdán 789, San Rafael",
    phone: "(222) 2123-4567",
    description: "Instalaciones modernas diseñadas para agilizar el tránsito entre el centro y el sur de la república.",
    image: "/4.png" // Asignada imagen 4
  },
  {
    id: 5,
    city: "Xalapa",
    state: "Veracruz",
    address: "Av. Xalapa 500, Progreso Macuiltépetl",
    phone: "(228) 812-3456",
    description: "Atendemos la capital veracruzana con rutas optimizadas para entregas en zonas montañosas.",
    image: "/5.png" // Reutilizando imagen 1 (Reemplaza con tu imagen local si tienes una específica)
  },
  {
    id: 6,
    city: "Veracruz Puerto",
    state: "Veracruz",
    address: "Av. Rafael Cuervo 10, Playa Linda",
    phone: "(229) 912-3456",
    description: "Nuestra sucursal costera facilita el movimiento rápido de mercancías en zona portuaria.",
    image: "/6.jpg" // Reutilizando imagen 2 (Reemplaza con tu imagen local si tienes una específica)
  }
];

const BranchesSection = () => {
  return (
    <section id="sucursales" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Cobertura Nacional</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Estamos donde tú nos necesitas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conoce nuestra red de sucursales estratégicamente ubicadas para ofrecerte la mayor velocidad y seguridad en tus envíos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              {/* Contenedor de Imagen */}
              <div className="h-56 w-full relative overflow-hidden">
                <img 
                  src={branch.image} 
                  alt={`Sucursal ${branch.city}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback visual si la imagen no carga
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback de imagen */}
                <div className="hidden absolute inset-0 bg-slate-200 items-center justify-center text-slate-400">
                  <MapPin size={48} />
                </div>

                {/* Etiqueta de Estado */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-sm z-10 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  {branch.state}
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {branch.city}
                </h3>
                
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">
                  {branch.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100">
                  <div className="flex items-start gap-3 text-sm text-slate-600">
                    <MapPin className="text-blue-600 mt-0.5 shrink-0" size={18} />
                    <span>{branch.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Phone className="text-blue-600 shrink-0" size={18} />
                    <span className="font-medium">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm text-slate-600">
                    <Clock className="text-blue-600 shrink-0" size={18} />
                    <span>Lun - Vie: 9:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;