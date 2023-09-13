import { Navigate } from 'react-router-dom';
import Principal from '../pages/Principal';

const routes = () => [
  {
    path: 'app',
    children: [
      { path: 'ajustes', element: <>Ajustes</> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '', element: <>appo</> }
    ]
  },
  {
    path: '/',
    children: [
      { path: 'mercado', element: <>Mercado</> },
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
        element: <Principal/>,
      },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];
export default routes;
