import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            ¿Tienes alguna duda sobre tus envíos o necesitas una cotización especial? 
            Nuestro equipo de atención al cliente está listo para ayudarte.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Tarjeta de Información de Contacto */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-100">
            
            <div className="space-y-10">
              {/* Teléfono */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">Llámanos</h4>
                  <p className="text-slate-600 mt-1 text-lg">+52 (555) 123-4567</p>
                  <span className="text-slate-400">Lun-Vie: 9am - 6pm</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">Escríbenos</h4>
                  <p className="text-slate-600 mt-1 text-lg">atencion@packet-world.com</p>
                  <span className="text-slate-400">Respuesta en max. 24h</span>
                </div>
              </div>

              {/* Dirección */}
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-50 p-4 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl">Oficina Central</h4>
                  <p className="text-slate-600 mt-1 text-lg">
                    Av. Reforma 222, Piso 12<br />
                    Col. Juárez, CDMX
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;