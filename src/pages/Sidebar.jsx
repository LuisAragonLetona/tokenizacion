import React, { useState } from 'react';
import '../css/sidebar.css';
import Carousel from './Carousel';
import Cards from './Cards';
import Solutions from './Solutions';
import MensajeMMW from './MensajeMMW';

function Sidebar(props) {
  const walletBalance = props.balance;
  const walletAddress = props.account;
  const conectarWallet = props.conectarWallet;
  const metamask = props.metamask;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showWalletMessage, setShowWalletMessage] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleWalletClick = async () => {
    setShowWalletMessage(!showWalletMessage);
  };

  return (
    <div className="d-flex">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo-details">
          <div className="logo_name">Tokenizacion</div>
          <i className="bx bx-menu" id="btn" onClick={toggleSidebar}></i>
        </div>
        <ul className="nav-list">
          <li>
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Buscar..." />
            <span className="tooltip">Buscar</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-store"></i>
              <span className="links_name">Mercado</span>
            </a>
            <span className="tooltip">Mercado</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user"></i>
              <span className="links_name">Mi Perfil</span>
            </a>
            <span className="tooltip">Mi Perfil</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-mail-send"></i>
              <span className="links_name">Mensajes</span>
            </a>
            <span className="tooltip">Mensajes</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bxl-graphql"></i>
              <span className="links_name">Mis contratos</span>
            </a>
            <span className="tooltip">Mis contratos</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-widget"></i>
              <span className="links_name">Rastreo de Titulos</span>
            </a>
            <span className="tooltip">Rastreo de Titulos</span>
          </li>
          <li>
            <a href="#" onClick={handleWalletClick}>
              <i className="bx bx-wallet-alt"></i>
              <span className="links_name">Billetera</span>
            </a>
            <span className="tooltip">wallet</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-wrench"></i>
              <span className="links_name">Soporte</span>
            </a>
            <span className="tooltip">Soporte</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-clipboard"></i>
              <span className="links_name">Ter&Con</span>
            </a>
            <span className="tooltip">Ter&Con</span>
          </li>
          <li className="profile">
            <div className="profile-details">
              <img src="profile.jpg" alt="profileImg" />
              <div className="name_job">
                <div className="name">Nameles</div>
                <div className="job">M.C.A.L.R.G</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li>
        </ul>
      </div>
      <Carousel></Carousel>
      <div className="mt-3">
        <section className={`home-section ${showWalletMessage ? '' : 'd-none'}`}>
          <MensajeMMW
            metamaskDetected={true}
            connectedToPlatform={!metamask}
            onConnectWallet={conectarWallet}
            walletAddress={walletAddress}
            walletBalance={walletBalance}
          />
        </section>
      </div>
    </div >
  );
}

export default Sidebar;