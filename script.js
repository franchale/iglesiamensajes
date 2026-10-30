// Función asíncrona para cargar el archivo
async function cargarTexto() {
  const contenedor = document.getElementById('contenido');
  
  try {
    // Si el archivo está en la misma carpeta, basta con poner su nombre
    const respuesta = await fetch('mi-texto-1.txt');
    
    // Si el servidor responde con un error (ej. 404 No encontrado)
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
    }
    
    // Extraemos el contenido como texto plano
    const texto = await respuesta.text();
    
    // Lo insertamos en el HTML
    contenedor.textContent = texto;

  } catch (error) {
    console.error('Hubo un problema al leer el archivo:', error);
    contenedor.textContent = 'No se pudo cargar el contenido del archivo.';
  }
}

// Ejecutar la función automáticamente cuando la página termine de cargar
window.addEventListener('DOMContentLoaded', cargarTexto);
