import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ControlPresupuesto({ gastos, presupuesto,}) {
    const formateasPresupuesto = (presupuesto) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(presupuesto)
    }
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
   

    useEffect(() => {
      const totalGastado = gastos.reduce( (total, gasto) => total + gasto.cantidad, 0)
      setGastado(totalGastado)
      const totalDisponible =  presupuesto - totalGastado
      setDisponible(totalDisponible)
        }, [gastos])
    
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas ">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> {formateasPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> {formateasPresupuesto(disponible)}
        </p>

        <p>
          <span>Gastado:</span> {formateasPresupuesto(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
