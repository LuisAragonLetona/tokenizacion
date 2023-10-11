import React, { useEffect, useState } from 'react';
import IPFS from 'ipfs'; // Importar la biblioteca de IPFS
import '../../css/multipaso.css';

const MyComponent = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [ipfsHash, setIpfsHash] = useState('');
  const [weiPrice, setWeiPrice] = useState('');
  const [metamaskAddress, setMetamaskAddress] = useState('');
  const [ipfsNode, setIpfsNode] = useState(null); // Estado para almacenar el nodo IPFS

  useEffect(() => {
    // Inicializar el nodo IPFS cuando el componente se monta
    const initIpfs = async () => {
      const node = await IPFS.create();
      setIpfsNode(node);
    };
    initIpfs();
  }, []); // Este efecto se ejecutará solo una vez al cargar el componente

  const handleUploadToIpfs = async () => {
    if (ipfsNode) {
      // Convertir la imagen a un objeto de tipo Blob
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      const blob = new Blob([buffer]);

      // Subir el archivo a IPFS
      try {
        const result = await ipfsNode.add(blob);
        console.log('Archivo subido a IPFS. Hash:', result.cid.toString());
        setIpfsHash(result.cid.toString());
      } catch (error) {
        console.error('Error al subir el archivo a IPFS:', error);
      }
    } else {
      console.error('Error: IPFS no está inicializado.');
    }
  };

  const handleTokenization = () => {
    // Lógica para tokenizar la imagen con la URL y el hash IPFS
    // Puedes agregar tu lógica aquí para enviar la información a tu contrato inteligente, por ejemplo
    console.log('Tokenizando la imagen...');
    console.log('Dirección URL de la imagen:', imageUrl);
    console.log('Hash IPFS de la imagen:', ipfsHash);
    console.log('Precio en Wei del token:', weiPrice);
    console.log('Dirección del propietario de la Wallet Metamask:', metamaskAddress);
    // Aquí puedes realizar la lógica para tokenizar la imagen
  };

  return (
    <div>
      <label>
        Dirección URL de la imagen a tokenizar:
        <input type="text" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      </label>
      <br />
      <label>
        Precio en Wei del token:
        <input type="number" value={weiPrice} onChange={e => setWeiPrice(e.target.value)} />
      </label>
      <br />
      <label>
        Dirección del propietario de la Wallet Metamask:
        <input type="text" value={metamaskAddress} readOnly />
      </label>
      <br />
      <button onClick={handleUploadToIpfs}>Subir a IPFS</button>
      <br />
      <button onClick={handleTokenization}>Tokenizar</button>
      <div style={{ marginTop: '20px', width: '300px', height: '300px', border: '1px solid black' }}>
        {imageUrl && <img src={imageUrl} alt="Imagen tokenizada" style={{ width: '100%', height: '100%' }} />}
      </div>
    </div>
  );
};

export default MyComponent;
