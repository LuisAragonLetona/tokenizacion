import React from 'react';
import Sidebar from './Sidebar';

class Mensajes extends React.Component {
  render() {

    const Texto = () => {
      return (
          <>
          <h1>dfgd</h1>
          <div>ddd otra cosa</div>
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
