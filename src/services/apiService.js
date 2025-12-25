// CONFIGURACIÓN DE LA API
// CORRECCIÓN: Ajustamos el puerto a 8080 y el contexto a 'packet-world' para coincidir con tu servidor
const BASE_URL = 'http://localhost:8080/packet-world/api';

// Función para mapear los estados de la BD a los estilos visuales del Frontend
const obtenerEstiloEstado = (estadoRaw) => {
  if (!estadoRaw) return 'pending';
  const estado = estadoRaw.toLowerCase();
  
  if (estado.includes('entregado')) return 'delivered';
  if (estado.includes('camino') || estado.includes('tránsito') || estado.includes('transito')) return 'transit';
  if (estado.includes('cancelado') || estado.includes('error') || estado.includes('detenido')) return 'error';
    
  return 'pending'; 
};

export async function buscarEnvioPorGuia(numeroGuia) {
  try {
    const response = await fetch(`${BASE_URL}/envio/rastreo/${numeroGuia}`);

    if (!response.ok) {
      if (response.status === 404) return null; // No encontrado
      throw new Error(`Error del servidor: ${response.status}`);
    }

    // OJO: La API devuelve un 204 No Content (null) si no encuentra nada, 
    // pero fetch puede interpretarlo como ok con body vacío.
    if (response.status === 204) {
        return null;
    }

    const dataApi = await response.json();

    // Validamos si la respuesta viene vacía o es un array vacío
    if (!dataApi || (Array.isArray(dataApi) && dataApi.length === 0)) {
      return null;
    }

    // ADAPTADOR (Mapping)
    // Tu API devuelve una Lista, tomamos el primer elemento [0]
    const envio = Array.isArray(dataApi) ? dataApi[0] : dataApi;

    return {
      guideNumber: envio.noGuia || "Sin Guía",
      // Mapeamos 'estadoDeEnvio' (tu POJO) a 'status' (Frontend)
      status: envio.estadoDeEnvio || "Desconocido", 
      statusCode: obtenerEstiloEstado(envio.estadoDeEnvio),
      
      // Concatenamos ciudad y calle del POJO
      origin: `${envio.nombreCiudadOrigen || ''}, ${envio.origenCalle || ''}`,
      destination: envio.destino || "Destino registrado", 
      
      // Mapeamos el historial
      history: (envio.historial || []).map(h => ({
        status: h.nombreEstado || "Actualización", // Usamos nombreEstado del POJO Historial
        date: h.fechaCambio || "Fecha no disponible",
        description: h.motivo || "",
        location: "Sucursal" // Tu historial actual no tiene ubicación específica, ponemos un default
      })),

      // Paquetes (Si la lista viene nula, ponemos array vacío)
      packages: (envio.paquetes || []).map(p => ({
        id: p.idPaquete,
        description: p.descripcion,
        weight: `${p.peso} kg`,
        dimensions: `${p.alto}x${p.ancho}x${p.profundidad}`
      }))
    };

  } catch (error) {
    console.error("Error conectando a la API Packet-World:", error);
    throw error;
  }
}