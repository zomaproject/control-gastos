import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import Filtros from './components/Filtros';
import { useState, useEffect } from 'react';
import { generarId } from './helpers/helpers';
import nuevaImagen from './img/nuevo-gasto.svg';

function App() {
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem('presupuesto') ?? 0
  );
  const [isValid, setIsValid] = useState(false);
  const [editar, setEditar] = useState({});
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos')
      ? JSON.parse(localStorage.getItem('gastos'))
      : []
  );

  const [filtro, setFiltro] = useState([]);
  const [gastosFiltrados, setGastosFiltrados] = useState([]);
  useEffect(() => {
    if (Object.keys(editar).length) {
      setModal(true);
      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [editar]);

  useEffect(() => {
    if (filtro) {
      const filtrados = gastos.filter((gastos) => gastos.categoria === filtro);
      setGastosFiltrados(filtrados);
    }
  }, [filtro]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuesto = Number(localStorage.getItem('presupuesto')) ?? 0;
    if (presupuesto > 0) {
      setIsValid(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  const handleNuevoGasto = () => {
    setModal(true);
    setEditar({});
    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const eliminarGasto = (id) => {
    const gastosActualidaos = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualidaos);
  };
  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastosActualidaos = gastos.map((gastoState) =>
        gastoState.id === gasto.id ? gasto : gastoState
      );
      setGastos(gastosActualidaos);
      setEditar({});
    } else {
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos = {setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValid={isValid}
        setIsValid={setIsValid}
      />
      {isValid && (
        <>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              setEditar={setEditar}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
            />
          </main>

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
          setEditar={setEditar}
        />
      )}
    </div>
  );
}

export default App;
