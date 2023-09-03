import React, { useState } from 'react';
import car1 from '../img/carousel-1.jpg';
import car2 from '../img/carousel-2.jpg';
import car3 from '../img/carousel-3.jpg';

export default function Carousel() {

    return (
        <div className="container mt-3">
            <div id="carouselExampleAutoplaying" className="carousel slide w-100 h-80" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car1} className="d-block w-100 h-80" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={car2} className="d-block w-100 h-80" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={car3} className="d-block w-100 h-80" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}