// CONFIGURACIÓN DE LA API
const BASE_URL = 'http://localhost:8095/APIpacket-world/api';

// Función para mapear los estados de la BD a los estilos visuales del Frontend
const obtenerEstiloEstado = (estadoRaw) => {
  if (!estadoRaw) return 'pending';
  const estado = estadoRaw.toLowerCase();
  
  if (estado.includes('entregado')) return 'delivered';
  if (estado.includes('camino') || estado.includes('tránsito') || estado.includes('transito')) return 'transit';
  if (estado.includes('cancelado') || estado.includes('error') || estado.includes('detenido')) return 'error';
  
  return 'pending'; // Default para 'Registrado', 'En Almacén', etc.
};

export async function buscarEnvioPorGuia(numeroGuia) {
  try {
    // 1. Construimos la URL del endpoint
    // VERIFICA: Revisa en tu archivo WSEnvio.java cuál es la ruta exacta (@Path).
    // Ejemplo común: /envio/rastreo/{guia} o /envios/{guia}
    const response = await fetch(`${BASE_URL}/envio/rastreo/${numeroGuia}`);

    if (!response.ok) {
      if (response.status === 404) return null; // No encontrado
      throw new Error(`Error del servidor: ${response.status}`);
    }

    const dataApi = await response.json();

    // Validamos si la respuesta viene vacía o es un array vacío
    if (!dataApi || (Array.isArray(dataApi) && dataApi.length === 0)) {
      return null;
    }

    // 2. ADAPTADOR (Mapping)
    // Si la API devuelve un Array, tomamos el primero. Si es objeto, lo usamos directo.
    const envio = Array.isArray(dataApi) ? dataApi[0] : dataApi;

    // Aquí transformamos las variables de tu API (Español/BD) a las del Frontend (Inglés/UI)
    // Ajusta los nombres de la derecha (ej. envio.numeroGuia) según tu POJO Java.
    return {
      guideNumber: envio.numeroGuia || envio.guia || "Sin Guía",
      status: envio.estatus || envio.estado || "Desconocido",
      statusCode: obtenerEstiloEstado(envio.estatus || envio.estado),
      origin: `${envio.ciudadOrigen || 'Origen'}, ${envio.calleOrigen || ''}`,
      destination: `${envio.ciudadDestino || 'Destino'}, ${envio.calleDestino || ''}`,
      
      // Historial: Si tu API devuelve el historial dentro del objeto envío
      history: (envio.historial || []).map(h => ({
        status: h.estatus || "Actualización",
        date: h.fecha || h.fechaCambio || "Fecha no disponible",
        description: h.comentario || h.notas || "",
        location: h.ubicacion || "Ubicación registrada"
      })),

      // Paquetes: Si tu API devuelve la lista de paquetes
      packages: (envio.paquetes || []).map(p => ({
        id: p.idPaquete || "1",
        description: p.descripcion || "Paquete estándar",
        weight: p.peso ? `${p.peso} kg` : "N/A",
        dimensions: p.dimensiones || `${p.alto}x${p.ancho}x${p.profundidad}` || "N/A"
      }))
    };

  } catch (error) {
    console.error("Error conectando a la API Packet-World:", error);
    // Retornamos null para que la UI muestre el mensaje de "No encontrado" o Error
    throw error;
  }
}