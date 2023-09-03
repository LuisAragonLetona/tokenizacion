import React from 'react';

function MensajeMMW({ metamaskDetected, connectedToPlatform, onConnectWallet, walletAddress, walletBalance }) {
  return (
    <div className="mensaje-mmw">
      {!metamaskDetected && (
        <div>
          Es necesario tener una billetera MetaMask instalada en su navegador para operar en la plataforma.
        </div>
      )}
      {metamaskDetected && !connectedToPlatform ?
        <div>
          Se ha detectado una billetera, pero no se ha conectado a la plataforma.{' '}
          <button onClick={onConnectWallet}>Conectar wallet</button>
        </div> : <div>
          <p className='wallet-address'>Dirección de la billetera: {walletAddress}</p>
          <p>Saldo de la billetera: {walletBalance} ETH</p>
        </div>}
    </div>
  );
}

export default MensajeMMW;


