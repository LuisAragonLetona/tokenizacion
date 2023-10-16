import React from 'react';
import '../css/cards.css';
import Hero from './Hero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AcercaDe from './AcercaDe';
import Caracteristicas from './Caracteristicas';

export default function Principal(props) {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    return (
        <div className="overflow-hidden">
            <Hero />
            <AcercaDe />
            <Caracteristicas />
            {props.test}
        </div>
    )
}