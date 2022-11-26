import React from "react";
import { useState } from "react";
import Mensaje from "./Mensaje";

function NuevoPresupuesto({presupuesto, setPresupuesto, setIsValid}) {
   
    const [mensaje, setMensaje] = useState('')
      
    const handlePresupuest = (e) => {
        e.preventDefault();
        if(!(presupuesto) || Number(presupuesto) < 0) {
            setMensaje('No es un presupuesto válido')
            return
        }
        setMensaje('')
        setIsValid(true)
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuest}>

        <div className="campo">

          <label htmlFor="">Presupuesto</label>
          <input
            type={"number"}
            className="nuevo-presupuesto"
            placeholder="Añade tu presuesto"
            value={presupuesto}
            onChange = {e=> setPresupuesto(Number(e.target.value))}
          />

        </div>

        <input type={"submit"} value="Añadir"

         />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje> }
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
