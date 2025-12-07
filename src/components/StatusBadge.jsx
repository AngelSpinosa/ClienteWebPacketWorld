import React from 'react';

const StatusBadge = ({ status, code }) => {
  const styles = {
    delivered: "bg-green-100 text-green-700 border-green-200",
    transit: "bg-blue-100 text-blue-700 border-blue-200",
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    error: "bg-red-100 text-red-700 border-red-200"
  };

  const currentStyle = styles[code] || styles.pending;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wider ${currentStyle}`}>
      {status}
    </span>
  );
};

export default StatusBadge;