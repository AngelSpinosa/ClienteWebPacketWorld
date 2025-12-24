import React from 'react';
import { CheckCircle, Truck, Package, AlertCircle } from 'lucide-react';

const StatusBadge = ({ status, code }) => {
  // Definición de estilos por estado
  const styles = {
    delivered: "bg-green-100 text-green-700 border-green-200",
    transit: "bg-blue-100 text-blue-700 border-blue-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    exception: "bg-red-100 text-red-700 border-red-200",
  };

  // Icono dinámico según el código
  const getIcon = () => {
    switch (code) {
      case 'delivered': return <CheckCircle size={14} className="mr-1" />;
      case 'transit': return <Truck size={14} className="mr-1" />;
      case 'exception': return <AlertCircle size={14} className="mr-1" />;
      default: return <Package size={14} className="mr-1" />;
    }
  };

  // Fallback si el código no existe
  const activeStyle = styles[code] || styles.pending;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border flex items-center w-fit ${activeStyle}`}>
      {getIcon()}
      {status}
    </span>
  );
};

export default StatusBadge;