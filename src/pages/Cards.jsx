import React from 'react';
import '../css/cards.css';
import uno from '../img/10.jpg';
import dos from '../img/11.jpg';
import tres from '../img/13.jpg';

export default function Cards(props) {

    return (
        <>
            <section id="section-2449" className="section-margin mb-3">
                <section className="backgroundwhite pt-4" id="section-1037" style={{ background: "#ffffff" }}>
                    <div className="container">
                        <div className="header text-center">
                            <h1 className="fontsans-light-28 colorblack" limbo-dom="texto">Lorem ipsum dolor sit amet</h1>
                        </div>
                        <div className="cards-container">
                            <div className="item-comparador-tarjeta">
                                <div className="cpd-area-img text-center backgroundgreen"><img alt="Móvil"
                                    src={uno} width="295" height="192"></img>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                    <label className="item-comparador-tarjeta-nombre opensans-regular-14 colorblack">Lorem ipsum</label>
                                    <h3 className="item-comparador-tarjeta-nombre fontsans-bold-18 colorblack">Lorem ipsum dolor sit, amet consectetur adipisicing elit!</h3>
                                    <p className="item-comparador-tarjeta-descripcion opensans-regular-12 colorblack">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat quidem autem quaerat cupiditate, quia tenetur accusamus! Ipsam vel illum nam blanditiis optio eaque libero dolorum rerum, sint aliquid sed!.<br></br></p>
                                    <div className="mt-auto cards-thin-btn mx-auto">
                                        <button className="btn btn-primary btn-secondary" id="btn_card1"
                                            
                                            type="button">&nbsp;Conoce más&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-comparador-tarjeta">
                                <div className="cpd-area-img text-center backgroundwhite"><img alt="Facturación"
                                    src={dos} width="295" height="192"></img>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                    <label className="item-comparador-tarjeta-nombre opensans-regular-14 colorblack">Lorem ipsum</label>
                                    <h3 className="item-comparador-tarjeta-nombre fontsans-bold-18 colorblack">Lorem ipsum dolor sit, amet consectetur adipisicing elit! </h3>
                                    <p className="item-comparador-tarjeta-descripcion opensans-regular-12 colorblack">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat quidem autem quaerat cupiditate, quia tenetur accusamus! Ipsam vel illum nam blanditiis optio eaque libero dolorum rerum, sint aliquid sed!.<br></br></p>
                                    <div className="mt-auto cards-thin-btn mx-auto">
                                        <button className="btn btn-primary btn-secondary" id="btn_card2"
                                            
                                            type="button">&nbsp;Conoce más&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                            <div className="item-comparador-tarjeta">
                                <div className="cpd-area-img text-center backgroundpurple"><img alt="Puntos"
                                   src={tres} width="295" height="192"></img>
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                    <label className="item-comparador-tarjeta-nombre opensans-regular-14 colorblack">Lorem ipsum</label>
                                    <h3 className="item-comparador-tarjeta-nombre fontsans-bold-18 colorblack">Lorem ipsum dolor sit, amet consectetur adipisicing elit!</h3>
                                    <p className="item-comparador-tarjeta-descripcion opensans-regular-12 colorblack">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo repellat quidem autem quaerat cupiditate, quia tenetur accusamus! Ipsam vel illum nam blanditiis optio eaque libero dolorum rerum, sint aliquid sed!.<br></br></p>
                                    <div className="mt-auto cards-thin-btn mx-auto">
                                        <button className="btn btn-primary btn-secondary" id="btn_card3"
                                             type="button">&nbsp;Conoce más&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}