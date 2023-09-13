import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/tokens.css'; // Importa los estilos CSS

const TokensTerceros = () => {
  const [thirdPartyTokens, setThirdPartyTokens] = useState([]);

  // Lógica para mostrar los tokens de terceros

  // Datos ficticios de ejemplo para tokens registrados por otros usuarios (sustituir por tus propios datos)
  const tokensClientes = [
    { id: 1, nombre: 'Token 1', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 5 },
    { id: 2, nombre: 'Token 2', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 10 },
    { id: 3, nombre: 'Token 3', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 15 },
    { id: 4, nombre: 'Token 4', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 20 },
    { id: 5, nombre: 'Token 5', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 25 },
    { id: 6, nombre: 'Token 6', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 30 },
    { id: 7, nombre: 'Token 7', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 35 },
    { id: 8, nombre: 'Token 8', descripcion: 'elit at imperdiet dui accumsan.', cantidad: 40 }
    // Agregar más tokens de terceros según sea necesario
  ];

  return (
    <div className='container'>
      <h2>Tokens de Terceros</h2>
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

export default TokensTerceros;
