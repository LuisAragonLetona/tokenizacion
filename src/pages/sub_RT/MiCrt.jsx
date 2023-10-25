import React from 'react';
import Sidebar from '../Sidebar';
import Nb from './Navbar.js';
import Banner from './Banner';
import Post from './Post';

class MisContratos extends React.Component {
  render() {

    const Texto = () => {
      return (
        <>
        <br></br>
          <div style={{ textAlign: 'center' }}>
            <h1>Mis Tokens NFTs</h1>
            <Nb/>
            <Banner/>
            <Post/>
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

export default MisContratos;