import React from "react";
import CerraBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";
import { useState } from "react";

function Modal({guardarGasto, setModal, animarModal, setAnimarModal }) {
  const [mensaje, setMensaje] = useState("");

  const [input, setInput] = React.useState({
    nombre: "",
    cantidad: 0,
    categoria: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.name === 'cantidad'  ? Number(e.target.value) : e.target.value
    });
  };

  const ocultarModal = (e) => {
    e.preventDefault();
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(input).includes('')){
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }
    guardarGasto(input)
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerraBtn} alt="cerrar" onClick={ocultarModal} />
      </div>
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje> }
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={input.nombre}
            onChange={handleChange}
            placeholder="Nombre del Gasto"
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="text"
            value={input.cantidad}
            name="cantidad"
            onChange={handleChange}
            id="cantidad"
            placeholder="Ej. 300"
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            value={input.select}
            name="categoria"
            onChange={handleChange}
            id="categoria"
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
        <input type="submit" value="Añadir Gastos" />
      </form>
    </div>
  );
}

export default Modal;
