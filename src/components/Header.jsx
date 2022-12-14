import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';

function Header({ setGastos, gastos, presupuesto, setPresupuesto, isValid, setIsValid }) {
  return (
    <header>
      <h1>Planififcador de Gastos</h1>
      {isValid ? (
        <ControlPresupuesto
          setGastos = {setGastos}
          setIsValid = {setIsValid}
          setPresupuesto = {setPresupuesto}
          gastos={gastos} presupuesto={presupuesto} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValid={setIsValid}
        />
      )}
    </header>
  );
}

export default Header;
