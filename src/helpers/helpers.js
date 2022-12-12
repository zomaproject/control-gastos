export const generarId = ()=> {
   return  Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export const  formatearFecha  = fecha => {
  const nuevaFecha = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return nuevaFecha.toLocaleString('es-ES', opciones)
}


