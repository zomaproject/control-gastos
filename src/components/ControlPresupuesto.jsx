import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ControlPresupuesto({
  setIsValid,
  setGastos,
  setPresupuesto,
  gastos,
  presupuesto,
}) {
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

  const handleResetApp = () =>  {
    const resultado = confirm('Desear reinciar presupuesto y gasto')
    if(resultado) {
      setGastos([]) 
      setPresupuesto(0)
      setIsValid(false)
    }
    
  }


  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas '>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
            trailColor: '#f5f5f5',
            textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>
      <div className='contenido-presupuesto'>
        <button 
          className = 'reset-app'
          type='button'
          onClick={handleResetApp}
        >
          Reset App
        </button>
        <p>
          <span>Presuesto:</span> {formateasPresupuesto(presupuesto)}
        </p>
        <p className={`${disponible} < 0 ? 'negativo' : ''`}>
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
