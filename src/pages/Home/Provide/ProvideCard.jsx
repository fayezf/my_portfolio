import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProvideCard = ({ provide }) => {
    const { name, image, description } = provide;

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="card h-96 w-80 border border-transparent hover:border-teal-300 my-8 shadow-slate-100 shadow-md" data-aos="fade-up" data-aos-duration="1500">
            <figure><img className='h-full w-full' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold text-2xl">{name}</h2>
                <p className='text-center'>{description}</p>
            </div>
        </div>
    );
};

export default ProvideCard;