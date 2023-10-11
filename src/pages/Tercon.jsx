import React from 'react';
import Sidebar from './Sidebar';
import perfil from '../img/lacchain.png';

class Tercon extends React.Component {
  render() {
    const fechaEdicion = "13 de septiembre de 2023, 1:30 P.m"; // Hora fija de edición de los términos

    const Texto = () => {
      const estiloContenedor = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Centra verticalmente
        maxWidth: '70%', // Limita el ancho al 70%
        margin: '0 auto', // Centra horizontalmente
        textAlign: 'justify', // Justifica el texto
      };

      const estiloTitulo = {
        fontSize: '50px',
        textAlign: 'center', // Centra el título
      };

      const estiloLinea = {
        width: '50%', // Ancho de la línea decorativa
        border: '1px solid #000', // Estilo de línea (puedes cambiar el color y el estilo)
        margin: '20px 0', // Espacio vertical
      };

      const estiloFecha = {
        fontSize: '12px', // Tamaño de letra pequeña
        textAlign: 'center', // Centra el texto
        marginTop: '10px', // Espacio superior
      };

      // Estilos para dispositivos más pequeños (ejemplo: iPads y móviles)
      const mediaQuery = '@media (max-width: 768px)'; // Puedes ajustar el valor para adaptarlo a tus necesidades

      const estiloTituloResponsive = {
        fontSize: '30px',
      };

      const estiloFechaResponsive = {
        fontSize: '10px',
        marginTop: '5px',
      };

      return (
        <div style={estiloContenedor}>
          <img src={perfil} alt="profileImg" /> {/* Imagen original */}
          <br /> {/* Espacio */}
          <hr style={estiloLinea} /> {/* Línea decorativa */}
          <h1 style={estiloTitulo}>Términos y Condiciones de la Plataforma</h1>
          <br /> {/* Espacio */}
          <p>
          Bienvenido(a) a la Plataforma de TokenMall de Activos Digitales (en adelante, "la Plataforma"). Te invitamos a leer detenidamente los siguientes términos y condiciones antes de utilizar nuestros servicios. Al acceder o utilizar la Plataforma, aceptas estar sujeto(a) a estos términos y condiciones. Si no estás de acuerdo con ellos, por favor, no utilices la Plataforma.

1. Comportamiento del Usuario

1.1. Esperamos un buen comportamiento de todos los usuarios dentro de la comunidad de la Plataforma. Esto incluye, pero no se limita a, el respeto mutuo, la cortesía y la ética en todas las interacciones.

1.2. Nos reservamos el derecho de tomar medidas adecuadas en caso de que un usuario viole estas normas de comportamiento. Estas medidas pueden incluir advertencias, restricciones temporales o permanentes, y la eliminación de la cuenta del usuario.

2. Cambios en los Términos y Condiciones

2.1. Los términos y condiciones de la Plataforma están sujetos a cambios sin previo aviso. Se notificarán cambios importantes a los usuarios a través de notificaciones en la Plataforma o por correo electrónico registrado en la cuenta del usuario.

2.2. Es responsabilidad del usuario revisar periódicamente estos términos y condiciones para estar al tanto de las actualizaciones.

3. Uso de la Plataforma

3.1. La Plataforma se proporciona con fines informativos y de entretenimiento. No garantizamos la precisión o integridad de la información proporcionada.

3.2. Los usuarios deben ser conscientes de los riesgos asociados con la inversión en activos digitales y tomar sus decisiones con responsabilidad.

4. Política de Privacidad

4.1. La Política de Privacidad de la Plataforma se encuentra disponible en [enlace a la Política de Privacidad] y rige la recopilación y el uso de datos personales de los usuarios.

5. Propiedad Intelectual

5.1. Todos los contenidos de la Plataforma, incluyendo textos, imágenes, videos y otros materiales, están protegidos por derechos de autor y otras leyes de propiedad intelectual.

5.2. Los usuarios no tienen permiso para copiar, distribuir o modificar cualquier contenido de la Plataforma sin autorización previa.
          </p>
          <hr style={estiloLinea} /> {/* Línea decorativa */}
          <br /> {/* Espacio */}
          <p style={estiloFecha}>Fecha de edición: {fechaEdicion}</p>
          <br /> {/* Espacio */}
          
          {/* Estilos para dispositivos más pequeños */}
          <style>
            {`${mediaQuery} {
              h1 {
                ${JSON.stringify(estiloTituloResponsive)}
              }
              p {
                font-size: ${estiloFechaResponsive.fontSize};
                text-align: ${estiloFechaResponsive.textAlign};
                margin-top: ${estiloFechaResponsive.marginTop};
              }
            }`}
          </style>
        </div>
      );
    };

    return (
      <div>
        <Sidebar contenido={<Texto />} />
      </div>
    );
  }
}

export default Tercon;
