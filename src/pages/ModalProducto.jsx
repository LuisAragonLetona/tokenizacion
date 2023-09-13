import React from 'react';
import '../css/modalProducto.css';

const ModalProducto = ({ isOpen, onClose, producto, walletInfo, userTokens }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h1 className='cerrar-modal' onClick={onClose} title="Cerrar">
                    X
                </h1>
                <h2>{producto.nombre}</h2>
                <b><p>{producto.descripcion}</p></b>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Precio: {producto.precio} ETH</p>

                {/* Información de la wallet */}
                <h3>Wallet Conectada</h3>
                <p><b>Dirección de cuenta:</b> {walletInfo.direccion}</p>
                <p><b>Saldo:</b> {walletInfo.saldo} ETH</p>

                {/* Información de tokens del usuario */}
                <h3>Tokens del Usuario</h3>
                {userTokens.map((token) => (
                    <div key={token.id}>
                        <p><b>{token.nombre}:</b> {token.cantidad}</p>
                    </div>
                ))}
                <button className="modal-close" onClick={() => { onClose(); alert('Su compra ha sido realizada con éxito'); }}>
                    Realizar compra
                </button>
            </div>
        </div>
    );
};

export default ModalProducto;
