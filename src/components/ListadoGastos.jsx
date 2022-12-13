import Gasto from './Gasto';

const ListadoGastos = ({ gastos, setEditar }) => {
  return (
    <>
      <div className='listado-gastos contenedor'>
       <h2> {gastos.length ? "Gastos" : "No hay gastos"} </h2>
          {''}
        {gastos.map( gasto =>  {
        return <Gasto
              key = {gasto.id}
              gasto ={gasto}
              setEditar = {setEditar}
            />}
       )}
      </div>
    </>
  );
};

export default ListadoGastos;
