import React, { useEffect } from 'react';
import Sidebar from './Sidebar';

// Importar perfil partes
import Imagen from './sub_perfil/Imagen';
import AjusPerfil from './sub_perfil/AjusPerfil';
import InfPubli from './sub_perfil/InfPubli';
import Claveycorreo from './sub_perfil/Claveycorreo';

function Perfil(props) {
  useEffect(() => {
    // Cargar la fuente de Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div>
      <Sidebar setUser={props.setUser} contenido={
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
          <Imagen user={props.user} />
          {/* Agregar un espacio vertical entre Imagen y AjusPerfil */}
          <div style={{ margin: '20px 0' }}></div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <AjusPerfil style={{ flex: '1', minWidth: '300px' }} />
            {/* Agregar un espacio horizontal entre AjusPerfil, InfPubli y Claveycorreo */}
            <div style={{ width: '20px' }}></div>
            <InfPubli style={{ flex: '1', minWidth: '300px' }} />
            {/* Agregar un espacio horizontal entre InfPubli y Claveycorreo */}
            <div style={{ width: '20px' }}></div>
            <Claveycorreo style={{ flex: '1', minWidth: '300px' }} />
          </div>
          <div className="leading-normal text-center text-sm text-slate-500 lg:text-left" style={{ marginTop: '20px' }}>
            © {new Date().getFullYear()}, TokenMall
          </div>
        </div>
      } />
    </div>
  );
}

export default Perfil;
