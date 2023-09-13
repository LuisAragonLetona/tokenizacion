import React from 'react';
import Sidebar from './Sidebar';

class General extends React.Component {
  render() {
    const Texto = () => {
      return (
          <>
          <h1>Bienvenido Usuario</h1>
          <div></div>
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

export default General;