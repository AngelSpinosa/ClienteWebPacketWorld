'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ErrorView from '../components/ErrorView';
import ShipmentResults from '../components/ShipmentResults';

// Importamos los componentes de la Landing Page
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import WhyUsSection from '../components/WhyUsSection';
import BranchesSection from '../components/BranchesSection';
import ServicesSection from '../components/ServicesSection'; 
import ContactSection from '../components/ContactSection';
import CompanyInfoSection from '@/components/CompanyInfoSection';  

import { buscarEnvioPorGuia } from '@/services/apiService';

export default function Home() {
  const [view, setView] = useState('home'); // 'home', 'results'
  const [loading, setLoading] = useState(false);
  const [currentShipment, setCurrentShipment] = useState(null);
  const [hasError, setHasError] = useState(false);

  const handleSearch = async (guideNumber) => {
    setLoading(true);
    setHasError(false);
    
    // Cambiamos a la vista de resultados inmediatamente para mostrar el loader
    setView('results'); 

    try {
      const data = await buscarEnvioPorGuia(guideNumber);
      
      // -------------------------------------------------------
      // 🔍 BLOQUE DE DEPURACIÓN (Borrar en producción)
      // -------------------------------------------------------
      console.group("🔍 Depuración de Búsqueda");
      console.log("Número de guía:", guideNumber);
      console.log("Objeto completo recibido del API:", data);

      if (data) {
        // Verificamos propiedades comunes de historial
        if (Array.isArray(data.historial)) {
          console.log(`✅ Propiedad 'historial' encontrada con ${data.historial.length} eventos.`);
        } else if (Array.isArray(data.history)) {
          console.log(`⚠️ Propiedad 'history' encontrada (en inglés). Asegúrate que ShipmentResults use 'history'.`);
        } else if (Array.isArray(data.tracking)) {
          console.log(`⚠️ Propiedad 'tracking' encontrada. Asegúrate que ShipmentResults use 'tracking'.`);
        } else {
          console.error("❌ NO se encontró ninguna lista de historial (historial, history, tracking) en el objeto.");
          console.log("Las llaves disponibles en 'data' son:", Object.keys(data));
        }
      } else {
        console.error("❌ La respuesta del API fue nula o undefined.");
      }
      console.groupEnd();
      // -------------------------------------------------------

      if (data) {
        setCurrentShipment(data);
        setHasError(false);
      } else {
        setCurrentShipment(null);
        setHasError(true);
      }
    } catch (error) {
      console.error("Error crítico en la búsqueda:", error);
      setCurrentShipment(null);
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setView('home');
    setHasError(false);
    setCurrentShipment(null);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      <Header onLogoClick={handleReset} />
      
      <main className="flex-grow">
        {/* VISTA DE HOME (LANDING PAGE) */}
        {view === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* Sección Héroe (Buscador) */}
            <HeroSection onSearch={handleSearch} isLoading={loading} />
            
            {/* Secciones Informativas */}
            <FeaturesSection />
            <BranchesSection />
            <ServicesSection />
            <ContactSection />
            <WhyUsSection />
            <CompanyInfoSection />
            <StatsSection />
          </div>
        )}

        {/* VISTA DE RESULTADOS */}
        {view === 'results' && (
          <div className="min-h-[60vh] py-10"> 
            {loading ? (
              <div className="flex flex-col justify-center items-center h-64 animate-in fade-in">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-slate-500 font-medium">Buscando tu paquete...</p>
              </div>
            ) : hasError ? (
              <ErrorView onRetry={handleReset} />
            ) : (
              <ShipmentResults data={currentShipment} />
            )}
            
            {/* Botón para regresar al inicio visible en resultados */}
            {!loading && (
              <div className="text-center mt-8 mb-12">
                 <button 
                  onClick={handleReset}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                 >
                   Realizar otra búsqueda
                 </button>
              </div>
            )}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}