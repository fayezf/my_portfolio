import React, { useEffect, useState } from 'react';
import ProvideCard from './ProvideCard';

const Provide = () => {
    const [provides, setProvides] = useState([])

    useEffect(() => {
        fetch('provide.json')
        .then(res => res.json())
        .then(data => setProvides(data))
    }, [])

    return (
        <div className='my-12'>
            <h2 className='text-3xl text-center text-teal-400 font-montserrat font-bold'>Choose I Provide</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 ml-20'>
                {
                    provides?.map(provide => <ProvideCard
                    key={provide._id}
                    provide={provide}
                    ></ProvideCard>)
                }
            </div>
        </div>
    );
};

export default Provide;