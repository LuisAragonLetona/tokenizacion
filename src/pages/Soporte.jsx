import React, { useRef } from 'react';
import { useFormik } from 'formik';
import Sidebar from './Sidebar';
import '../css/soporte.css';
import contactoImage from '../img/contacto.png'; // Importa la imagen correctamente
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Texto = ({ formik }) => {
  const nombreRef = useRef(); // Crea una referencia para luego enfocar

  return (
    <div className="mi-contenedor">
      <div className="cont">
        <div className="caja-imagen">
          <img src={contactoImage} alt="" />
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
          nombreRef.current.focus(); // Enfoca el input después de enviar
        }}>
          <div className="tema">Envíanos un mensaje!</div>
          <ToastContainer></ToastContainer>
          <div className="input-box">
            <input ref={nombreRef} id="nombre" name="nombre" type="text" onChange={formik.handleChange} value={formik.values.nombre} required />
            <label>Ingrese su nombre</label>
          </div>
          <div className="input-box">
            <input id="correo" name="correo" type="text" onChange={formik.handleChange} value={formik.values.correo} required />
            <label>Ingrese su correo</label>
          </div>
          <div className="mensaje-box">
            <textarea id="mensaje" name="mensaje" onChange={formik.handleChange} value={formik.values.mensaje}></textarea>
            <label>Ingrese su mensaje</label>
          </div>
          <div className="input-box">
            <input type="submit" value="enviar mensaje" />
          </div>
        </form>
      </div>
    </div>
  );
};

const Soporte = ({ setUser }) => {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      correo: '',
      mensaje: '',
    },
    onSubmit: async values => {
      try {
        const response = await axios.post("http://localhost:3001/soporte", {
          nombre: values.nombre,
          correo: values.correo,
          mensaje: values.mensaje,
        });
        if (response.data === 'Mensaje registrado con éxito!!') {
          formik.resetForm();
          toast.success(response.data);
        } else {
          toast.warning(response.data);
        }
      } catch (error) {
        formik.resetForm();
        console.error(error);
        toast.error("No se pudo conectar a la base de datos");
      }
    },
  });

  return (
    <div>
      <Sidebar setUser={setUser} contenido={<Texto formik={formik} />} />
    </div>
  );
};

export default Soporte;