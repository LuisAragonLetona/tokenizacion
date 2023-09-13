import React from 'react';
import { Link } from 'react-router-dom';
import '../css/tokens.css'; // Importa los estilos CSS

const TokensPropios = () => {
  // Datos ficticios de ejemplo para tokens registrados por el usuario (sustituir por tus propios datos)
  const tokensClientes = [
    { id: 1, nombre: 'Token 1', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 5 },
    { id: 2, nombre: 'Token 2', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 10 },
    { id: 3, nombre: 'Token 3', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 15 },
    // Agregar más tokens del usuario según sea necesario
  ];
  return (
    <div className='container'>
      <h2>Tus Tokens Propios</h2>
      <div className="token-card-container">        
        {tokensClientes.map((token) => (
          <div key={token.id} className="token-card">
            <h3>{token.nombre}</h3>
            <p><b>Descripción:</b> {token.descripcion}</p>
            <p><b>Cantidad:</b> {token.cantidad}</p>
          </div>
        ))}
      </div>
      {/* Agrega un enlace para regresar a Tokens.jsx */}
      <p><Link to="/tokens" className='backtoTokens'>Regresar a Tokens</Link></p>      
    </div>
  );
};

export default TokensPropios;
