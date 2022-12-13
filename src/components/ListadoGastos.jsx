import Gasto from './Gasto';

const ListadoGastos = ({
  filtro,
  gastosFiltrados,
  eliminarGasto,
  gastos,
  setEditar,
}) => {
  return (
    <>
      <div className='listado-gastos contenedor'>
        {filtro ? (
          <>
            <h2>
              {gastosFiltrados.length
                ? 'Gastos'
                : 'No Hay Gastos en esta categoría'}
            </h2>
            {gastosFiltrados.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setEditar={setEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
            {gastos.map((gasto) => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
                setEditar={setEditar}
                eliminarGasto={eliminarGasto}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ListadoGastos;
