import React, { useEffect, useRef, useState } from 'react';
import bcrypt from 'bcryptjs';
import Aos from 'aos';
import '../css/sesion.css';
import 'aos/dist/aos.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import jscookie from 'jscookie';

export default function Sesion(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    /* const [nombre, setNombre] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); */
    const [isActive, setIsActive] = useState(false);


    const emailRef = useRef();
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    const validationSchema = Yup.object().shape({
        nombre: Yup.string().required('El nombre es requerido'),
        email: Yup.string().email('Email inválido').required('El email es requerido'),
        pass: Yup.string().required('Ingresa una contraseña'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('pass'), null], 'Las contraseñas deben coincidir')
            .required('La confirmación de la contraseña es requerida'),
    });

    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            pass: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const hash = await bcrypt.hash(values.pass, 10);
                const response = await axios.post("http://localhost:3001/registrar", {
                    nombre: values.nombre,
                    email: values.email,
                    password: hash,
                });
                formik.resetForm();
                toast.success(response.data);
                setTimeout(() => {
                    handleToggle();
                }, 4000);
            } catch (error) {
                console.error(error);
                toast.error("No se pudo conectar a la base de datos");
            }
        },
    });

    const Login = () => {

        axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response.data);
            if (response.data === 'Contraseña incorrecta' || response.data === 'Usuario no encontrado') {
                toast.warning(response.data);
            } else {
                toast.success("¡Bienvenido/a " + response.data.nombre + '!');
                let usuarioJSON = JSON.stringify(response.data);
                // Simple Session Cookie
                jscookie.set({
                    name: 'usuarioCookie',
                    value: usuarioJSON
                });

                navigate("/");
            }
        });
    }

    /*-----*/

    return (
        <div className="overflow-sesion">
            <div className={`container-form sign-up ${isActive ? 'active' : ''}`}>
                <div className="message">
                    <h2>Bienvenido a TokenMall</h2>
                    <ToastContainer></ToastContainer>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <button className="sign-up-btn" onClick={handleToggle}>Iniciar Sesion</button>
                </div>
                <div className="formulario">
                    <h2 className="create-account">Crear una cuenta</h2>
                    <div className="iconos">
                        <div className="border-icon">
                            <i className='bx bxl-instagram'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-linkedin'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-facebook-circle'></i>
                        </div>
                    </div>
                    <p className="cuenta-gratis">Crear una cuenta gratis</p>
                    {formik.errors.nombre && formik.touched.nombre && <>{formik.errors.nombre}</>}
                    <input type="text" id="nombre" placeholder="Nombre" onChange={formik.handleChange} value={formik.values.nombre} />
                    {formik.errors.email && formik.touched.email && <>{formik.errors.email}</>}
                    <input type="email" id="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.pass && formik.touched.pass && <>{formik.errors.pass}</>}
                    <input type="password" id='pass' placeholder="Contraseña" onChange={formik.handleChange} value={formik.values.pass} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword && <>{formik.errors.confirmPassword}</>}
                    <input type="password" id="confirmPassword" placeholder="Confirmar Contraseña" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                    <button className="registrar" id="registrarse" type="submit" onClick={formik.handleSubmit}>Registrarse</button>
                    <span id="txtCredentials"></span>
                </div>
            </div>

            <div className={`container-form sign-in ${isActive ? 'active' : ''}`}>
                <div className="formulario">
                    <h2 className="create-account">Iniciar Sesion</h2>
                    <ToastContainer></ToastContainer>
                    <div className="iconos">
                        <div className="border-icon">
                            <i className='bx bxl-instagram'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-linkedin'></i>
                        </div>
                        <div className="border-icon">
                            <i className='bx bxl-facebook-circle'></i>
                        </div>
                    </div>
                    <p className="cuenta-gratis">¿Aún no tienes una cuenta?</p>
                    <input ref={emailRef} id="email2" type="email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} value={email} autoFocus />
                    <input id="password" type="password" placeholder="Contraseña" onChange={(event) => { setPassword(event.target.value) }} value={password} />
                    <button className="iniciar_sesion" type="submit" onClick={Login}>Iniciar sesion</button>
                    <span id="txtLogin"></span>
                </div>
                <div className="welcome-back">
                    <div className="message">
                        <h2>Bienvenido de nuevo</h2>
                        <p>Si aun no tienes una cuenta por favor registrate aquí</p>
                        <button type="submit" className="sign-in-btn" onClick={handleToggle}>Registrarse</button>
                    </div>
                </div>
            </div>
        </div>
    )
}