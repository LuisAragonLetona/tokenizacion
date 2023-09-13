import React from 'react';
import { Link } from 'react-router-dom';
import '../css/tokens.css'; // Importa los estilos CSS

const Tokens = () => {
  return (
    <div className="container">
      <h1 className="header">GESTIÓN DE TOKENS</h1>
      <div className="cards-gestion-tokens">
        <div className="card-gestion-tokens">
          <img
            src="/img/add.png" // Ruta a la imagen "add.png" en la carpeta "public/img"
            alt="Agregar nuevo token"
          />
          <h2>Agregar nuevo token</h2>
          <p>
            Registra tus propios tokens en el mercado. Ingresa detalles como el nombre, la descripción y la cantidad.
          </p>
          <Link to="/nuevo-token">
            <button className='button-tokens'>Ir a Agregar Token</button>
          </Link>
        </div>
        <div className="card-gestion-tokens">
          <img
            src="/img/own.png" // Ruta a la imagen "own.png" en la carpeta "public/img"
            alt="Mis tokens registrados"
          />
          <h2>Mis tokens registrados</h2>
          <p>
            Visualiza y gestiona tus tokens registrados. Realiza seguimiento de tus tokens propios.
          </p>
          <Link to="/mis-tokens">
            <button className='button-tokens'>Ir a Mis Tokens</button>
          </Link>
        </div>
        <div className="card-gestion-tokens">
          <img
            src="/img/people.png" // Ruta a la imagen "people.png" en la carpeta "public/img"
            alt="Tokens de otros usuarios"
          />
          <h2>Tokens de otros usuarios</h2>
          <p>
            Explora tokens registrados por otros usuarios. Realiza un seguimiento de tokens emitidos por terceros.
          </p>
          <Link to="/tokens-de-otros">
            <button className='button-tokens'>Ir a Tokens de Otros Usuarios</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tokens;
