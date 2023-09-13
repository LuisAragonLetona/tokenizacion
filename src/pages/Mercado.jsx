// Mercado.jsx
import React, { useState, useEffect } from 'react';
import ModalProducto from './ModalProducto'; // Importa el componente Modal
import '../css/mercado.css';

const Mercado = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Datos ficticios de ejemplo para productos y tokens del cliente (sustituir por tus propios datos)
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: 1, descripcion: 'Descripción del producto 1:' },
    { id: 2, nombre: 'Producto 2', precio: 3, descripcion: 'Descripción del producto 2:' },
    { id: 3, nombre: 'Producto 3', precio: 5, descripcion: 'Descripción del producto 3:' },
    // Agregar más productos según sea necesario
  ];

  const tokensClientes = [
    { id: 1, nombre: 'Token 1', cantidad: 5 },
    { id: 2, nombre: 'Token 2', cantidad: 10 },
    { id: 2, nombre: 'Token 3', cantidad: 15 }
    // Agregar más tokens del cliente según sea necesario
  ];

  // Función para mostrar la ventana modal con la información del producto
  const openModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  // Función para cerrar la ventana modal
  const closeModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="marketplace">
      <h1 className="header">PRODUCTOS DISPONIBLES</h1>
      <div className="barra-busqueda">
        {/* ... Input de búsqueda y botón de búsqueda ... */}
      </div>
      <div className="producto-cards">
        {productos.map((producto) => (
          <div key={producto.id} className="producto-card">
            <h3>{producto.nombre}</h3>
            <h4>{producto.descripcion}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><b>Precio:</b> {producto.precio} ETH</p>
            <button onClick={() => openModal(producto)}>Comprar</button>
            <br />
            <br />
          </div>
        ))}
      </div>
      <div className="pagination">
        {/* ... Paginación ... */}
        <br />
        <br />
        <a href="#">《</a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">》</a>
      </div>
      {/* Ventana modal */}
      {showModal && (
        <ModalProducto
          isOpen={showModal}
          onClose={closeModal}
          producto={selectedProduct}
          walletInfo={{
            direccion: '0x37A7218ae5765B8CB5a51839dEA0ADF419FE2286',
            saldo: '25.4003',
          }}
          userTokens={tokensClientes}
        />
      )}
    </div>
  );
};

export default Mercado;