import React from 'react';
import { Link } from 'react-router-dom';

//import hero data
import { heroData } from '../data'
import Header from './Header';
const Hero = () => {
    //Destruture hero data
    const { title, subtitle, btnText, image } = heroData;
    const ancho = window.innerWidth;
    return (
        <section className='lg:h-[900px] py-12'>
            <Header />
            <div className='container mx-auto h-full relative 2xl:px-8'>
                <div className='flex flex-col xl:flex-row items-center h-full md:py-24'>
                    {/* Text */}
                    <div className='text-center xl:text-left xl:absolute'>
                        <h1 className='h1 xl:max-w-[700px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='400'>{title+ancho}</h1>
                        <p className='lead xl:max-w-[380px] mb-6 lg:mb-12' data-aos='fade-down' data-aos-delay='500'> {subtitle} </p>
                        <Link to='/sesion'>
                        <button className='btn btn-primary mb-8 xl:mb-0' data-aos='fade-down' data-aos-delay='600'>{btnText}</button></Link>
                    </div>
                    {/* Imags */}
                    <div className='xl:absolute xl:-right-12 xl:bottom-16 2xl:pr-10' data-aos='fade-up' data-aos-delay='700'>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Hero;