import React from "react";

function ControlPresupuesto({presupuesto,}) {
    const formateasPresupuesto = (presupuesto) => {
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(presupuesto)
    }
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
          <span>Disponible:</span> {formateasPresupuesto(0)}
        </p>

        <p>
          <span>Gastado:</span> {formateasPresupuesto(0)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
