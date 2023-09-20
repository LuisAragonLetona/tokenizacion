import React, { useState, useEffect } from 'react';
import '../../css/PW.css';

const InfPubli = () => {
  const [nombre, setNombre] = useState(() => {
    const storedNombre = localStorage.getItem('nombre');
    return storedNombre ? storedNombre : 'Juan Arevalo';
  });

  const [telefono, setTelefono] = useState(() => {
    const storedTelefono = localStorage.getItem('telefono');
    return storedTelefono ? storedTelefono : '+503-7777-7777';
  });

  const [correo, setCorreo] = useState(() => {
    const storedCorreo = localStorage.getItem('correo');
    return storedCorreo ? storedCorreo : 'micorrreo@gmail.com';
  });

  const [nacionalidad, setNacionalidad] = useState(() => {
    const storedNacionalidad = localStorage.getItem('nacionalidad');
    return storedNacionalidad ? storedNacionalidad : 'El Salvador';
  });

  const [fraseFavorita, setFraseFavorita] = useState(() => {
    const storedFrase = localStorage.getItem('fraseFavorita');
    return storedFrase ? storedFrase : 'Ingresa tu frase favorita';
  });

  useEffect(() => {
    localStorage.setItem('nombre', nombre);
  }, [nombre]);

  useEffect(() => {
    localStorage.setItem('telefono', telefono);
  }, [telefono]);

  useEffect(() => {
    localStorage.setItem('correo', correo);
  }, [correo]);

  useEffect(() => {
    localStorage.setItem('nacionalidad', nacionalidad);
  }, [nacionalidad]);

  useEffect(() => {
    localStorage.setItem('fraseFavorita', fraseFavorita);
  }, [fraseFavorita]);

  const customStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '555px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  const tablaStyle = {
    width: '100%',
    textAlign: 'left',
  };

  const datoStyle = {
    fontSize: '15px',
    paddingLeft: '10px',
  };

  const botonStyle = {
    fontSize: '10px',
    float: 'right',
  };

  const cuadroTextoStyle = {
    fontSize: '10px',
    width: '100%',
    resize: 'none',
    maxWidth: '100%',
  };

  return (
    <div style={customStyle}>
      <h4>Información Pública</h4>
      <table style={tablaStyle}>
        <tbody>
          <tr>
            <td style={datoStyle}>Nombre: {nombre}</td>
            <td>
              <button onClick={() => setNombre(prompt("Ingrese el nuevo nombre:"))} style={botonStyle}>Modificar</button>
              <br></br>
            </td>
          </tr>
          <tr>
            <td style={datoStyle}>Teléfono: {telefono}</td>
            <td>
              <button onClick={() => setTelefono(prompt("Ingrese el nuevo teléfono:"))} style={botonStyle}>Modificar</button>
              <br></br>
            </td>
          </tr>
          <tr>
            <td style={datoStyle}>Correo: {correo}</td>
            <td>
              <button onClick={() => setCorreo(prompt("Ingrese el nuevo correo:"))} style={botonStyle}>Modificar</button>
              <br></br>
            </td>
          </tr>
          <tr>
            <td style={datoStyle}>Nacionalidad: {nacionalidad}</td>
            <td>
              <button onClick={() => setNacionalidad(prompt("Ingrese la nueva nacionalidad:"))} style={botonStyle}>Modificar</button>
              <br></br>
            </td>
          </tr>
          <tr>
            <td>
              <textarea
                rows="4"
                cols="40"
                value={fraseFavorita}
                onChange={(e) => setFraseFavorita(e.target.value.substring(0, 160))}
                style={cuadroTextoStyle}
              />
            </td>
            <td>
              <button onClick={() => setFraseFavorita(prompt("Ingresa tu nueva frase favorita:", fraseFavorita.substring(0, 160)))} style={botonStyle}>Modificar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InfPubli;
