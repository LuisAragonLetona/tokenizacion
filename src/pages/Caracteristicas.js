import React from 'react';

import { caracteristicasData } from '../data';
import { BsArrowRight } from 'react-icons/bs';
const Caracteristicas = () => {
    const { title, subtitle, list } = caracteristicasData;
    return (
        <section className='my-[70px] x1:my-[150px]'>
            <div className='container mx-auto'>
                {/* text */}
                <div className='text-center'>
                    <h2 className='h2 mb-6 x1:mb-12'>{title}</h2>
                    <p className='lead max-w-[585px] mx-auto mb-16 x1:mb-24'>
                        {subtitle}
                    </p>
                </div>
                {/* feature lists */}
                <div className='grid grid-cols-1 gap-[50px] x1:grid-cols-2'>
                    {list.map((feature, index) => {
                        const { image, bgImage, title, description, linkText, delay } = feature;
                        return (
                            <div className='w-full bg-blue-50 max-w-[530px] h-[360px] relative flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto' key={index}>
                                {/* Background Images */}
                                <div className='hidden xl:flex absolute top-0 right-0 -z-10'>
                                    <img src={bgImage} alt="" />
                                </div>
                                {/* Image Icons */}
                                <div className='max-w-[120px] x1:mr-7 x1:max-w-[230px]'>
                                    <img src={image} alt='' />
                                </div>
                                {/* Text */}
                                <div>text</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default Caracteristicas;