import React from 'react';
import Sidebar from './Sidebar';

class Mensajes extends React.Component {
  render() {

    const Texto = () => {
      return (
          <>
          <h1>Prueba</h1>
          <div>Aquí se mostrarán los mensajes</div>
          </>
      )
  };

    return (
      <div>
        <Sidebar contenido={<Texto/>} />
      </div>
    );
  }
}

export default Mensajes;
