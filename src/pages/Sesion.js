import React from 'react';
import '../css/sesion.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Sesion(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    return (
        <div className="overflow-hidden">
            <div className="container-form sign-up">
                <div className="message">
                    <h2>Bienvenido a TokenizacionSV</h2>
                    <p>Si ya tienes una cuenta por favor inicia sesion aqui</p>
                    <button className="sign-up-btn">Iniciar Sesion</button>
                </div>
            </div>
        </div>
    )
}