import React from 'react';

const Footer = () => (
  <footer className="w-full py-8 bg-slate-50 border-t border-slate-200 mt-auto">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <p className="text-slate-400 text-sm mb-4">
        © 2025 Packet-World. Líderes en envíos por paquetería. Todos los derechos reservados.
      </p>
      <div className="flex justify-center gap-6 text-sm text-slate-500">
        <button className="hover:text-slate-800">Rastreo</button>
        <button className="hover:text-slate-800">Términos y Condiciones</button>
        <button className="hover:text-slate-800">Política de Privacidad</button>
      </div>
    </div>
  </footer>
);

export default Footer;