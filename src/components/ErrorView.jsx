import React from 'react';
import { XCircle } from 'lucide-react';

const ErrorView = ({ onRetry }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in zoom-in duration-300">
    <div className="bg-red-50 p-6 rounded-full mb-6">
      <XCircle size={48} className="text-red-500" />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 mb-2">No encontramos ese envío.</h2>
    <p className="text-slate-500 max-w-md mb-8">
      El número de guía ingresado no existe en nuestro sistema o es incorrecto. Por favor, verifica los dígitos e inténtalo nuevamente.
    </p>
    <button 
      onClick={onRetry}
      className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
    >
      Intentar de nuevo
    </button>
  </div>
);

export default ErrorView;