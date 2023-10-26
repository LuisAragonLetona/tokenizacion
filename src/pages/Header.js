import React, { useState } from 'react';
import NavMobile from './NavMobile';
import Nav from './Nav';
import Logo from '../img/lacchain.png';
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import '../css/modal.css';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <header className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0' data-aos='fade-down' data-aos-delay='1200' data-aos-duration='1000'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            {/* Logo */}
            <a href="#/">
              <img style={{ width: 100 }} src={Logo} alt="" />
            </a>
            {/* nav inicialmente oculto - Solamente se muestra en pantallas grandes */}
            <div className='hidden lg:flex'>
              <Nav />
            </div>
          </div>
          {/* Movile nav - Inicialmente mostrandose / oculto en pantallas grandes  */}
          <div className={`${
            navMobile ? 'max-h52' : 'max-h-0'
          } lg:hidden top-24 bg-accent-terciary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
            <NavMobile />
          </div>
          <button className='btn btn-quaternary flex items-center gap-x-[20px]' onClick={() => setModalVisible(true)}>
            Redes sociales <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
          </button>
          <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden text-2xl text-primary cursor-pointer'>
            <FaBars />
          </div>
          {modalVisible && (
            <div id="id01" className="modal-social">
              <form className="modal-content animate" method="post">
                <div className="imgcontainer">
                  <span onClick={() => setModalVisible(false)} className="close" title="Cerrar Ventana">&times;</span>
                </div>
                <div className="mainmodal">
                  <div className="icon-modal fb">
                    <i className="fa-brands fa-facebook-f"></i>
                    <span><a href="https://www.facebook.com/profile.php?id=61552943694466" style={{ textDecoration: 'none', color: '#fff' }}>TokenMall</a></span>
                  </div>
                  <div className="icon-modal twt">
                    <i className="fa-brands fa-twitter"></i>
                    <span><a href="https://twitter.com/Tokemall284235" style={{ textDecoration: 'none', color: '#fff' }}>@TokenMall</a></span>
                  </div>
                  <div className="icon-modal ins">
                    <i className="fa-brands fa-instagram"></i>
                    <span><a href="https://www.instagram.com/tokemall5/" style={{ textDecoration: 'none', color: '#fff' }}>TokenMall</a></span>
                  </div>
                  <div className="icon-modal git">
                    <i className="fa-brands fa-github"></i>
                    <span><a href="https://github.com/LuisAragonLetona/TokenMall.git" style={{ textDecoration: 'none', color: '#fff' }}>TokenMall</a></span>
                  </div>
                  <div className="icon-modal yt">
                    <i className="fa-brands fa-youtube"></i>
                    <span><a href="https://www.youtube.com/" style={{ textDecoration: 'none', color: '#fff' }}>TokenMall</a></span>
                  </div>
                </div>
                <div className="containerlogin" style={{ backgroundColor: '#f1f1f1' }}>
                  <button type="button" onClick={() => setModalVisible(false)} className="cancelbtn">Cerrar</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      

    </header>
  );
}

export default Header;
