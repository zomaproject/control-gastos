import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
  
function ControlPresupuesto({ gastos, presupuesto }) {
  const formateasPresupuesto = (presupuesto) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(presupuesto);
  };
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    setGastado(totalGastado);
    const totalDisponible = presupuesto - totalGastado;
    // Actualizar el porcentaje
    const percent = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(percent);
    }, 1000);
  }, [gastos]);


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas '>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: '#3b82F6',
            trailColor: '#f5f5f5',
            textColor: '#000',
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presuesto:</span> {formateasPresupuesto(presupuesto)}
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
