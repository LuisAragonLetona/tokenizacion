import React from 'react';
import Sidebar from './Sidebar';
import Rt from './sub_RT/Rt';
import Nb from './sub_RT/Navbar.js';

class RegistroTokens extends React.Component {
  render() {

    const Texto = () => {
      return (
        <>
        <br></br>
          <div style={{ textAlign: 'center' }}>
            <h1>Registro de Tokens</h1>
            <Nb/>
            <Rt/>
          </div>
        </>
      )
    };

    return (
      <div>
        <Sidebar contenido={<Texto />} />
      </div>
    );
  }
}

export default RegistroTokens;
