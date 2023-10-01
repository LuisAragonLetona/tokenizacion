import React, { useState } from 'react';
import Aos from 'aos';
import '../css/sesion.css';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Sesion(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
        setIsActive(!isActive);
    };

    const registrar = () => {
        axios.post("http://localhost:3001/registrar", {
            nombre: nombre,
            email: email,
            password: password,
        }).then(() => {
            alert("Empleado registrado");
            limpiarCampos();
        });
    }

    const limpiarCampos = () => {
        setNombre("");
        setEmail("");
        setPassword("");
    }

    const login = () => {
        axios.post("http://localhost:3001/login", {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response.data[0]);
            limpiarCampos();
        });
    }
    
    /*-----*/

    return (
        <div className="overflow-sesion">
            <div className={`container-form sign-up ${isActive ? 'active' : ''}`}>
                <div className="message">
                    <h2>Bienvenido a TokenizacionSV</h2>
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
                    <input type="text" id="nombre" placeholder="Nombre" onChange={(event) => { setNombre(event.target.value) }} />
                    <input type="email" id="email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />
                    <input type="password" id="pass" placeholder="Contraseña" onChange={(event) => { setPassword(event.target.value) }} />
                    <button className="registrar" id="registrarse" type="submit" onClick={registrar}>Registrarse</button>
                    <span id="txtCredentials"></span>
                </div>
            </div>

            <div className={`container-form sign-in ${isActive ? 'active' : ''}`}>
                <div className="formulario">
                    <h2 className="create-account">Iniciar Sesion</h2>
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
                    <p className="cuenta-gratis">¿Aun no tienes una cuenta?</p>
                    <input id="email2" type="email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }}  value={email}/>
                    <input id="password" type="password" placeholder="Contraseña" onChange={(event) => { setPassword(event.target.value) }} value={password} />
                    <button className="iniciar_sesion" type="submit" onClick={login}>Iniciar sesion</button>
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