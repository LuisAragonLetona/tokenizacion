import React from 'react';
import lacchain from '../img/lacchain.png'

export default function Menu(props) {
    const functionwallet = props.conectarWallet;
    const balance = props.balance;
    const metamask = props.metamask;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={lacchain} style={{ width: '100px' }} alt="..."></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/#">Persona</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Tarjetas</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Servicios
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="/#">Servicio1</a></li>
                                <li><a className="dropdown-item" href="/#">Servicio2</a></li>
                                <li><a className="dropdown-item" href="/#">Servicio3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Billetera Oro</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">MultiPremios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Contáctanos</a>
                        </li>
                    </ul>
                    <span className="d-flex">
                        <button type="button" className="btn btn-outline-dark text-bg-light">login</button>
                        {metamask ? (<button type="button" className="btn btn-outline-dark text-bg-light ms-2" onClick={functionwallet}>Conectar Wallet</button>) : (<button type="button" className="btn btn-outline-dark text-bg-light ms-2" onClick={functionwallet}>Wallet Conectada</button>)}
                        
                    </span>
                </div>
            </div>
        </nav>
    )
}


