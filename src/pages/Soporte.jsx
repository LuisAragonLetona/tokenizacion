import React from 'react';
import Sidebar from './Sidebar';
import '../css/soporte.css';
import contactoImage from '../img/contacto.png'; // Importa la imagen correctamente

class Soporte extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const Texto = () => {
      return (
        <div className="mi-contenedor">
          <div className="cont">
            <div className="caja-imagen">
              <img src={contactoImage} alt="" />
            </div>
            <form action="#">
              <div className="tema">Envíanos un mensaje!</div>
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
        <Sidebar setUser={this.props.setUser} contenido={<Texto />} />
      </div>
    );
  }
}

export default Soporte;
