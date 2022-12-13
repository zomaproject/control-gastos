const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action=''>
        <div className='campo'>
          <label>Filtras gastos</label>
          <select
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
            }}
          >
            <option value=''>--Seleccione--</option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='gastos'>gastos</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
