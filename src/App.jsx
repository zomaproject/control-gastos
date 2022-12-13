import { useState } from 'react';

import { generarId } from './helpers/helpers';
import Header from './components/Header';
import Modal from './components/Modal';
import nuevaImagen from './img/nuevo-gasto.svg';
import ListadoGastos from './components/ListadoGastos';
import { useEffect } from 'react';

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValid, setIsValid] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const [editar, setEditar] = useState({})

  useEffect(() => {
    if (Object.keys(editar).length) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [editar])

  const handleNuevoGasto = (e) => {
    setModal(true);
    setEditar({})
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    console.log('Al inicio',gasto)
    if(gasto.id){

    console.log('Al pasar por el if',gasto)
      const gastosActualidaos = gastos.map((gastoState) => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualidaos)
    }else {
      console.log('Al pasar por el esel', gasto)
      gasto.id = generarId();
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto]);
    }
    console.log('Al final', gasto)
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <ListadoGastos gastos={gastos}

            setEditar={setEditar}
          />

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
          editar={editar}
        />
      )}
    </div>
  );
}

export default App;
