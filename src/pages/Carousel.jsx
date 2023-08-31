import React from 'react';

export default function Carousel(props) {

    return (
        <div className="container">
            <div id="carouselExampleAutoplaying" className="carousel slide  w-100 h-80 " data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://zipmex.com/static/d0d0b4d874d5503d225a4490b70351a6/1bbe7/yo.jpg" className="d-block w-100 h-80" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.blockchaineconomia.es/wp-content/uploads/2021/03/gobernanza-blockchain-2100x1200.jpg" className="d-block w-100 h-80" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://thecryptolegal.com/wp-content/uploads/2019/04/money-transfer-3588301_1920-1024x725.jpg" className="d-block w-100 h-80" alt="..."></img>
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