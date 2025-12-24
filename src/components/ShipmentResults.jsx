import React from 'react';
import { Package, MapPin, Clock, ChevronLeft } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ShipmentResults = ({ data, onBack }) => {
  if (!data) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 animate-in fade-in duration-500">
      
      {/* Botón para regresar a buscar */}
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-slate-500 hover:text-blue-600 transition-colors text-sm font-medium"
      >
        <ChevronLeft size={16} className="mr-1" /> Volver a buscar
      </button>

      {/* Encabezado del Resultado */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-200">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Estado del Envío</h2>
          <p className="text-slate-500">Guía: <span className="font-mono font-medium text-slate-900">{data.guideNumber}</span></p>
        </div>
        <div className="mt-4 md:mt-0">
          <StatusBadge status={data.status} code={data.statusCode} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* COLUMNA IZQUIERDA: Datos Generales y Paquetes */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Datos Generales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Destinatario</label>
                <p className="font-medium text-slate-900">{data.client}</p>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Servicio</label>
                <p className="font-medium text-slate-900">{data.serviceType}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 shrink-0" size={18} />
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Origen</label>
                  <p className="font-medium text-slate-900">{data.origin}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 mt-1 shrink-0" size={18} />
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Destino</label>
                  <p className="font-medium text-slate-900">{data.destination}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Package size={16} /> Contenido
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
                  <tr>
                    <th className="px-4 py-3 rounded-l-lg">Descripción</th>
                    <th className="px-4 py-3">Medidas</th>
                    <th className="px-4 py-3 rounded-r-lg text-right">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {data.packages.map((pkg) => (
                    <tr key={pkg.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-900">{pkg.description}</td>
                      <td className="px-4 py-3 text-slate-500 font-mono">{pkg.dimensions}</td>
                      <td className="px-4 py-3 text-slate-500 text-right">{pkg.weight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Historial de Movimientos */}
        <div className="bg-slate-50 rounded-xl p-6 h-fit border border-slate-200 shadow-inner">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Clock size={16} /> Historial de Movimientos
          </h3>
          {/* Aquí se renderiza la línea de tiempo */}
          <div className="relative border-l-2 border-slate-300 ml-3 space-y-8 pb-2">
            {data.history && data.history.map((event, index) => (
              <div key={index} className="pl-6 relative group">
                {/* Punto indicador en la línea */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 
                  ${index === 0 ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-400'}`}>
                </div>
                
                <div className="flex flex-col">
                  <span className={`text-sm font-bold ${index === 0 ? 'text-blue-700' : 'text-slate-700'}`}>
                    {event.status}
                  </span>
                  <span className="text-xs text-slate-500 font-mono mb-1">{event.date}</span>
                  <p className="text-sm text-slate-600 mb-2 leading-relaxed">{event.description}</p>
                  
                  {event.location && (
                    <p className="text-xs text-slate-500 italic flex items-center gap-1 bg-slate-200/50 w-fit px-2 py-1 rounded">
                      <MapPin size={10} /> {event.location}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentResults;