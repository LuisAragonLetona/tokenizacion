import { Navigate, useLocation } from 'react-router-dom';
import Principal from '../pages/Principal';
import Sesion from '../pages/Sesion';
import Mercado from '../pages/Mercado';

const Rutas = () => {
  let location = useLocation();
  if (location.pathname === '/sesion') {
    require('../css/sesion.css');
  }
  const routes = [
    {
      path: 'app',
      children: [
        { path: 'ajustes', element: <>Ajustes</> },
        { path: '*', element: <Navigate to="/404" /> },
        { path: '', element: <>App</> }
      ]
    },
    {
      path: '/',
      children: [
        { path: 'sesion', element: <Sesion></Sesion> },
        { path: 'mercado', element: <Mercado/> },
        { path: 'sesion', element: <>Login y Registro</> },
        { path: 'perfil', element: <>Mi perfil</> },
        { path: 'mensajes', element: <>Mensajes</> },
        { path: 'contratos', element: <>Contratos</> },
        { path: 'rastreo', element: <>Rastreo de títulos</> },
        { path: 'billetera', element: <>Wallet</> },
        { path: 'soporte', element: <>Soporte</> },
        { path: 'tercon', element: <>Terminos y condiciones</> },
        { path: '404', element: <>Error404</> },
        {
          path: '',
          element: <Principal />,
        },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
  ];
  return routes;
};

export default Rutas;
