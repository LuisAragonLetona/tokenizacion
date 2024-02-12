import { Navigate } from 'react-router-dom';
import Principal from '../pages/Principal';
import Sesion from '../pages/Sesion';
import Mercado from '../pages/Mercado';
import General from '../pages/General';
import Mensajes from '../pages/Mensajes';
import Perfil from '../pages/Perfil';
import Tercon from '../pages/Tercon';
import Billetera from '../pages/Billetera';
import Error404 from '../pages/404';
import Soporte from '../pages/Soporte';
import RegistroTokens from '../pages/RegistroTokens';
import MiCrt from '../pages/sub_RT/MiCrt';
import Formulario from '../pages/Formulario';
import { Personas } from '../pages/Personas';

const Rutas = (user, setUser) => {
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
        { path: 'sesion', element: <Sesion setUser={setUser} /> },
        { path: 'mercado', element: <Mercado setUser={setUser} /> },
        { path: 'perfil', element: <Perfil user={user} setUser={setUser} /> },
        { path: 'mensajes', element: <Mensajes setUser={setUser} /> },
        { path: 'MiCrt', element: <MiCrt setUser={setUser} /> },
        { path: 'RegToks', element: <RegistroTokens /> },
        { path: 'billetera', element: <Billetera user={user} setUser={setUser} /> },
        { path: 'soporte', element: <Soporte setUser={setUser} /> },
        { path: 'tercon', element: <Tercon setUser={setUser} /> },
        { path: 'general', element: <General user={user} setUser={setUser} /> },
        { path: '404', element: <Error404 /> },
        { path: 'formulario', element: <Formulario /> },
        {
          path: '',
          element: user !== null ? <General user={user} setUser={setUser} /> : <Principal />,
        },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
  ];
  return routes;
};

export default Rutas;