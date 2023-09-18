import React, { useState } from 'react';
import '../../css/PW.css';
import Switch from 'react-switch';

const AjusPerfil = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);


  const handleSwitch1Change = (checked) => {
    setSwitch1(checked);
  };

  const handleSwitch2Change = (checked) => {
    setSwitch2(checked);
  };

  const handleSwitch3Change = (checked) => {
    setSwitch3(checked);
  };



  // Establecer el tamaño predeterminado con CSS personalizado
  const customStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    width: '555px', // Ancho predeterminado
    height: '450px', // Altura predeterminada
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centrar elementos horizontalmente
  };

  const switchContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: '10px 0',
  };

  return (
    <div style={customStyle}>
      <h4>Ajustes de Cuenta</h4> {/* Agrega el título aquí */}
      <div className="switch-container" style={switchContainerStyle}>
        <label htmlFor="switch1" style={{ fontSize: '14px' }}>
          Envíame un correo cuando alguien me siga
        </label>
        <Switch
          id="switch1"
          onChange={handleSwitch1Change}
          checked={switch1}
          onColor="#00cc00" // Cambia el color cuando está encendido (verde)
          offColor="#ff0000" // Cambia el color cuando está apagado (rojo)
          height={20}
          width={40}
        />
      </div>
      <div className="switch-container" style={switchContainerStyle}>
        <label htmlFor="switch2" style={{ fontSize: '14px' }}>
          Envíame un correo cuando alguien invierte en mis Tokens
        </label>
        <Switch
          id="switch2"
          onChange={handleSwitch2Change}
          checked={switch2}
          onColor="#00cc00"
          offColor="#ff0000"
          height={20}
          width={40}
        />
      </div>
      <div className="switch-container" style={switchContainerStyle}>
        <label htmlFor="switch3" style={{ fontSize: '14px' }}>
          Activar notificacion de mensajes
        </label>
        <Switch
          id="switch3"
          onChange={handleSwitch3Change}
          checked={switch3}
          onColor="#00cc00"
          offColor="#ff0000"
          height={20}
          width={40}
        />
      </div>
    </div>
  );
}

export default AjusPerfil;
