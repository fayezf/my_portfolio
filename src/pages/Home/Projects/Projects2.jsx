import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/projects2/home.png';

const Projects2 = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='md:flex justify-center gap-4 my-16 px-10 ml-20' data-aos="fade-up" data-aos-duration="1500">
                <div className='mb-2'>
                    <img style={{width: '200px'}} src={img1} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl text-slate-400 font-montserrat'>Kid Toy</h2>
                    <h2 className='text-teal-400 font-montserrat'>This is a kids toy based website.</h2>
                    <li className='text-slate-400 font-montserrat'>Have admin and user different dashboard.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can delete,add and manage users.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can make admin also</li>
                    <li className='text-slate-400 font-montserrat'>User can Login via (Google Sign-in)</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-teal-400'>Front-end technology:</span>React js, Tailwind,React Router, Firebase Authentication</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-teal-400'>Back-end technology:</span>Node js,Express js, MongoDB</li>
                    <div className='md:flex gap-4 mt-2'>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://education-learning-toys.web.app/">Live Preview</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/kid-toy-client">Client Code</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/kid-toy-server">Server Code</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects2;