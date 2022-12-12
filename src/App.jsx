import { useState } from 'react';

import  { generarId } from './helpers/helpers';
import Header from './components/Header';
import Modal from './components/Modal';
import nuevaImagen from './img/nuevo-gasto.svg';
import ListadoGastos from './components/ListadoGastos';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);
  const handleNuevoGasto = (e) => {
    e.preventDefault();
    setModal(true);
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    gasto.id = generarId();
    gasto.fecha  = Date.now()
    setGastos([...gastos, gasto]);

    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
      gastos = {gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <ListadoGastos gastos={gastos} />

          <div className='nuevo-gasto'>
            <img src={nuevaImagen} alt='icono' onClick={handleNuevoGasto} />
          </div>
        </>
      )}
      {modal && (
        <Modal
          guardarGasto={guardarGasto}
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
        />
      )}
    </div>
  );
}

export default App;
