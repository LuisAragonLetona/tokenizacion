import React, { useState } from 'react';
import '../../css/multipaso.css';

function MyComponent() {
  const [image, setImage] = useState(null);
  const [tokenInfo, setTokenInfo] = useState({
    tokenName: '',
    tokenAmount: '',
    openingPrice: '',
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Verificar la extensión del archivo
      const validExtensions = ["jpg", "jpeg"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (validExtensions.includes(extension)) {
        const reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        // Mostrar un mensaje de error si la extensión no es válida
        alert("Por favor, sube un archivo JPG válido.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTokenInfo({
      ...tokenInfo,
      [name]: value,
    });
  };

  return (
    <div className="container45">
      <div className="form-container">
        <div className="card">
          <div className="card-header">Subir Imagen</div>
          <div className="card-body">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {image && (
              <div className="image-preview-container">
                <img
                  src={image}
                  alt="Imagen subida"
                  className="preview-image"
                />
              </div>
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-header">Información del Token</div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label>Nombre del Token</label>
                <input
                  type="text"
                  name="tokenName"
                  value={tokenInfo.tokenName}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Cantidad de Tokens</label>
                <input
                  type="text"
                  name="tokenAmount"
                  value={tokenInfo.tokenAmount}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Precio de Apertura</label>
                <input
                  type="text"
                  name="openingPrice"
                  value={tokenInfo.openingPrice}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              {image && (
                <div className="preview-info">
                  <img
                    src={image}
                    alt="Previsualización"
                    className="preview-image token-info-image"
                  />
                  <div>
                    <strong>Nombre del Token:</strong> {tokenInfo.tokenName}
                  </div>
                  <div>
                    <strong>Cantidad de Tokens:</strong> {tokenInfo.tokenAmount}
                  </div>
                  <div>
                    <strong>Precio de Apertura:</strong> {tokenInfo.openingPrice}
                  </div>
                </div>
              )}
              <button type="button" className="tokenize-button">
                Tokenizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
