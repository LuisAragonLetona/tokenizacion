import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Routes, Route, useNavigate } from "react-router-dom";
import { firebaseConfig } from './utils/FirebaseUtil';
import jscookie from 'jscookie';
import routes from './utils/Rutas';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  firebaseConfig();
  const [metamask, setMetamask] = useState(false);
  const [web3, setWeb3] = useState(null); // guardar instancia de web3
  const [account, setAccount] = useState(null); // guardar cuenta
  const [balance, setBalance] = useState(null);// guardar el balance
  const [user, setUser] = useState(null);
  const { ethereum } = window;

  useEffect(() => {
    async function Wallet() {
      if (typeof window.ethereum !== 'undefined') {
        setMetamask(true);
      } else {
        console.log('No tenemos wallet');
      }
    };
    Wallet();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    let usuarioLeido = JSON.parse(jscookie.get("usuarioCookie"));
    if (usuarioLeido !== null && usuarioLeido.id > 0) {
      setUser(usuarioLeido);
    }
  }, [setUser]); // Este efecto se ejecuta una vez después de que el componente se monta

  
  // let usuarioLeido = JSON.parse(jscookie.get("usuarioCookie"));

  const routeElements = routes(user, setUser).map(route => <Route key={route.path} path={route.path} element={route.element}>{route.children && route.children.map(child => <Route key={child.path} path={child.path} element={child.element} />)}</Route>);

  return (
    <Routes>
      {routeElements}
    </Routes>
  );
}

export default App;
