import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/tokenForm.css'; // Importa un archivo CSS para los estilos

const TokenForm = () => {
  const [tokenInfo, setTokenInfo] = useState({
    name: '',
    description: '',
    quantity: '', // No se establece un valor inicial
  });

  const [validationMessages, setValidationMessages] = useState({
    name: '',
    description: '',
    quantity: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValidationMessages = {};

    if (!tokenInfo.name.trim()) {
      newValidationMessages.name = 'Por favor, ingrese un nombre válido.';
    }

    if (!tokenInfo.description.trim()) {
      newValidationMessages.description = 'Por favor, ingrese una descripción válida.';
    }

    if (isNaN(tokenInfo.quantity) || tokenInfo.quantity < 1) {
      newValidationMessages.quantity = 'La cantidad debe ser un número mayor o igual a 1.';
    }

    if (Object.keys(newValidationMessages).length > 0) {
      setValidationMessages(newValidationMessages);
      return;
    }

    // Si los datos son válidos, restablece los mensajes de validación
    setValidationMessages({
      name: '',
      description: '',
      quantity: '',
    });

    // Mostrar una alerta de éxito
    window.alert('Datos enviados con éxito.');

    // Limpiar los campos del formulario
    setTokenInfo({
      name: '',
      description: '',
      quantity: '', // Restaurar el valor inicial vacío para la cantidad
    });
  };

  const handleInputChange = (e) => {
    // Limpia el mensaje de validación cuando el usuario comienza a escribir en el campo
    const inputName = e.target.name;
    setValidationMessages({
      ...validationMessages,
      [inputName]: '',
    });

    // Actualiza el valor del campo
    setTokenInfo({
      ...tokenInfo,
      [inputName]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>Registrar Nuevo Token</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre del Token:</label>
        <input
          type="text"
          id="name"
          name="name" // Agrega el atributo name para identificar el campo
          value={tokenInfo.name}
          onChange={handleInputChange}
        />
        <div className="validation-message">{validationMessages.name}</div>

        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description" // Agrega el atributo name para identificar el campo
          value={tokenInfo.description}
          onChange={handleInputChange}
        />
        <div className="validation-message">{validationMessages.description}</div>

        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          name="quantity" // Agrega el atributo name para identificar el campo
          value={tokenInfo.quantity}
          onChange={handleInputChange}
        />
        <div className="validation-message">{validationMessages.quantity}</div>

        <button type="submit">Registrar</button>
      </form>

      {/* Agrega un enlace para regresar a Tokens.jsx */}
      <p><Link to="/tokens" className='backtoTokens'>Regresar a Tokens</Link></p>      
    </div>
  );
};

export default TokenForm;
