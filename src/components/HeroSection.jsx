import React, { useState } from 'react';
import { Search, CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = ({ onSearch, isLoading }) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) onSearch(inputVal);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Conectamos destinos, <br />
        <span className="text-blue-600">entregamos confianza.</span>
      </h1>
      <p className="text-lg text-slate-500 mb-10 max-w-2xl">
        La solución logística líder para tus envíos. Monitorea tu paquete en tiempo real sin complicaciones.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
        </div>
        <input
          type="text"
          className="w-full pl-12 pr-32 py-4 rounded-full border-2 border-slate-200 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-lg shadow-sm hover:shadow-md"
          placeholder="Ingresa tu número de guía (Ej. 2025ABC123)"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 rounded-full transition-colors flex items-center gap-2 disabled:opacity-70"
        >
          {isLoading ? 'Buscando...' : 'Rastrear'}
          {!isLoading && <ArrowRight size={16} />}
        </button>
      </form>
      
      <div className="mt-8 flex gap-4 text-sm text-slate-400">
        <span className="flex items-center gap-1"><CheckCircle size={14} /> Rastreo 24/7</span>
        <span className="flex items-center gap-1"><CheckCircle size={14} /> Cobertura Nacional</span>
      </div>
    </div>
  );
};

export default HeroSection;