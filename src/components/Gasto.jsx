import { formatearFecha } from '../helpers/helpers';
import ahorro from '../img/icono_ahorro.svg';
import casa from '../img/icono_casa.svg';
import salud from '../img/icono_salud.svg';
import ocio from '../img/icono_ocio.svg';
import comida from '../img/icono_comida.svg';
import gastos from '../img/nuevo-gasto.svg';
import suscripciones from '../img/icono_suscripciones.svg';

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';

import 'react-swipeable-list/dist/styles.css';
const diccionarioIconos = {
  ahorro,
  casa,
  salud,
  ocio,
  comida,
  gastos,
  suscripciones,
};

const Gasto = ({ eliminarGasto, gasto, setEditar }) => {
  const { categoria, nombre, cantidad, fecha, id } = gasto;
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction destructive={true} onClick={() => setEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => eliminarGasto(id)}
        // destructive={true}
        // console.log('hola')
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img src={diccionarioIconos[categoria]} alt={categoria} />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>
                Agregado el {''}
                <span>{formatearFecha(fecha)}</span>
              </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Gasto;
