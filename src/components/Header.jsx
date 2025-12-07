import React from 'react';
// Ya no importamos 'Box' porque usaremos tu imagen

const Header = ({ onLogoClick }) => (
  <header className="w-full py-6 px-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
    <div 
      onClick={onLogoClick} 
      className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <img 
          src="/logo.png" 
          alt="Packet-World Logo" 
          className="object-contain w-full h-full"
          onError={(e) => {
            e.target.style.display = 'none'; // Si falla, oculta la imagen
            e.target.nextSibling.style.display = 'flex'; // Muestra el fallback
          }}
        />
        {/* Fallback por si la imagen no carga */}
        <div className="hidden absolute inset-0 bg-primary rounded-lg text-white items-center justify-center font-bold text-xl">
          PW
        </div>
      </div>

      <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight font-sans">
        Packet-World
      </span>
    </div>

    <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
      <button className="hover:text-primary transition-colors">Sucursales</button>
      <button className="hover:text-primary transition-colors">Servicios</button>
      <button className="hover:text-primary transition-colors">Atención al Cliente</button>
    </nav>
  </header>
);

export default Header;