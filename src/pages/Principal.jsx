import React from 'react';
import '../css/cards.css';
import Hero from './Hero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AcercaDe from './AcercaDe';
import jscookie from 'jscookie';

export default function Principal(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    let usuarioLeido = JSON.parse(jscookie.get("usuarioCookie"));

    return (
        <div className="overflow-hidden">
            <Hero />
            <AcercaDe />
            {usuarioLeido.nombre}
        </div>
    )
}