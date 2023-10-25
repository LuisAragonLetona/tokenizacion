import React from 'react';
import '../css/cards.css';
import Hero from './Hero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import AcercaDe from './AcercaDe';
import Caracteristicas from './Caracteristicas';
import Testimonios from './Testimonios';
import FooterLanding from './FooterLanding';
import CtaSection from './CtaSection';

export default function Principal() {
    Aos.init({
        duration: 1800,
        offset: 0
    });

    return (
        <div className="overflow-hidden">
            <Hero />
            <AcercaDe />
            <Caracteristicas />
            <Testimonios />
            <CtaSection />
            <FooterLanding />
        </div>
    )
}