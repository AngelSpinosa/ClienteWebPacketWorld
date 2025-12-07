import React from 'react';
import { Package, MapPin, Clock } from 'lucide-react';
import StatusBadge from './StatusBadge';

const ShipmentResults = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 animate-in fade-in duration-500">
      
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
        {/* Datos Generales */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Datos Generales</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-slate-500 block mb-1">Destinatario Registrado</label>
                <p className="font-medium text-slate-900">{data.client}</p>
              </div>
              <div>
                <label className="text-xs text-slate-500 block mb-1">Tipo de Servicio</label>
                <p className="font-medium text-slate-900">{data.serviceType}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1 shrink-0" size={18} />
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Origen (Sucursal)</label>
                  <p className="font-medium text-slate-900">{data.origin}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-green-600 mt-1 shrink-0" size={18} />
                <div>
                  <label className="text-xs text-slate-500 block mb-1">Destino (Entrega)</label>
                  <p className="font-medium text-slate-900">{data.destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Paquetes */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Package size={16} /> Detalle de Paquetes
            </h3>
            {data.packages.length > 1 && (
              <p className="text-sm text-slate-500 mb-4">Este envío contiene las siguientes piezas registradas:</p>
            )}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
                  <tr>
                    <th className="px-4 py-3 rounded-l-lg">Descripción</th>
                    <th className="px-4 py-3">Dimensiones</th>
                    <th className="px-4 py-3 rounded-r-lg text-right">Peso</th>
                  </tr>
                </thead>
                <tbody>
                  {data.packages.map((pkg) => (
                    <tr key={pkg.id} className="border-b border-slate-100 last:border-0">
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

        {/* Historial Timeline */}
        <div className="bg-slate-50 rounded-xl p-6 h-fit border border-slate-200">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Clock size={16} /> Historial de Movimientos
          </h3>
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pb-2">
            {data.history.map((event, index) => (
              <div key={index} className="pl-6 relative group">
                {/* Dot */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${index === 0 ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'}`}></div>
                
                <p className={`font-bold ${index === 0 ? 'text-blue-700' : 'text-slate-700'}`}>{event.status}</p>
                <span className="text-xs text-slate-400 font-mono block mb-1">{event.date}</span>
                <p className="text-sm text-slate-600 mb-1">{event.description}</p>
                <p className="text-xs text-slate-400 italic flex items-center gap-1">
                  <MapPin size={10} /> {event.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentResults;