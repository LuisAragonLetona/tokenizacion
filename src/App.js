import './App.css';
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { firebaseConfig } from './utils/FirebaseUtil';
import jscookie from 'jscookie';
import routes from './utils/Rutas';
import { Provider } from 'react-redux';
import store from './Store';


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
  const ruta = useLocation().pathname;

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
  }, [setUser]);

  if (ruta !== '/' && ruta !== '/sesion' && user === null) {
    navigate("/", { replace: true });
  }

  const routeElements = routes(user, setUser, ruta).map(route => <Route key={route.path} path={route.path} element={route.element}>{route.children && route.children.map(child => <Route key={child.path} path={child.path} element={child.element} />)}</Route>);

  return (
    <Provider store={store}>
      <Routes>
        {routeElements}
      </Routes>
    </Provider>
  );
}

export default App;
