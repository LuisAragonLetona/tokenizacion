import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../css/soporte.css';

class Soporte extends React.Component {
  render() {

    const Texto = () => {
      return (<div className="mi-contenedor">
        <div className="cont">
          <div className="caja-imagen">
            <img src="img/contacto.png" alt="" />
          </div>
          <form action="#">
            <div className="tema">Envianos un mensaje!</div>
            <div className="input-box">
              <input type="text" required />
              <label>Ingrese su nombre</label>
            </div>
            <div className="input-box">
              <input type="text" required />
              <label>Ingrese su correo</label>
            </div>
            <div className="mensaje-box">
              <textarea></textarea>
              <label>Ingrese su mensaje</label>
            </div>
            <div className="input-box">
              <input type="submit" value="enviar mensaje" />
            </div>
          </form>
        </div>
      </div>

      );
    };

    return (
      <div>
        <Sidebar contenido={<Texto />} />
      </div>
    );
  }
}

export default Soporte;
