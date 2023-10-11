import React from 'react';
import Sidebar from './Sidebar';
import Multipaso from './sub_RT/Multipaso';

class RegistroTokens extends React.Component {
  render() {

    const Texto = () => {
      return (
        <>
        <br></br>
          <div style={{ textAlign: 'center' }}>
            <h1>Registro de Tokens</h1>
            <Multipaso/>
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
