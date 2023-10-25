import React from 'react';

import { caracteristicasData } from '../data';
import { BsArrowRight } from 'react-icons/bs';
const Caracteristicas = () => {
    const { title, subtitle, list } = caracteristicasData;
    return (
        <section className='my-[70px] xl:my-[150px]'>
            <div className='container mx-auto'>
                {/* texto */}
                <div className='text-center'>
                    <h2 className='h2 mb-6 xl:mb-12'
                    data-aos='fade-down'
                    data-aos-delay='100'
                    >{title}</h2>
                    <p className='lead max-w-[585px] mx-auto mb-16 xl:mb-24'>
                        {subtitle}
                    </p>
                </div>
                {/* lista de caracteristicas */}
                <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-2'>
                    {list.map((feature, index) => {
                        const { image, bgImage, title, description, linkText, delay } = feature;
                        return (
                            <div className='w-full max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index} data-aos='zoom-in' data-aos-offset='100' data-aos-delay={delay}>
                                {/* Imagenes de fondo */}
                                <div className='hidden xl:block absolute top-0 right-0 -z-10'>
                                    <img src={bgImage} alt="" />
                                </div>
                                {/* Iconos de imagen */}
                                <div className='max-w-[120px] xl:mr-7 xl:max-w-[230px]'
                                    data-aos='zoom-in-right'
                                    data-aos-delay={delay}
                                >
                                    <img src={image} alt="" />
                                </div>
                                {/* Texto */}
                                <div className='max-w-[220px]'>
                                    <h3 className='h3 mb-4'>{title}</h3>
                                    <p className='font-light italic gap-x-2 group'>{description}</p>
                                    <div className='flex items-center gap-x-2 group'>
                                        <a className='text-primary font-bold' href="#">{linkText}</a>
                                        <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all' />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Caracteristicas;