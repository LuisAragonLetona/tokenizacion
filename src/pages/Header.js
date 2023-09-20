import React, { useState } from 'react'
import NavMobile from './NavMobile'
import Nav from './Nav'
import Logo from '../img/lacchain.png'

import { FaBars } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
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
            <button className='btn btn-quaternary flex items-center gap-x-[20px] group'>
              Prueba <BsArrowRight className='text-2xl text-accent-primary group-hover:text-white transition' />
            </button>
            <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden text-2xl text-primary cursor-pointer'>
              <FaBars />
            </div>
          </div>
      </div>
    </header>
  )
}

export default Header
