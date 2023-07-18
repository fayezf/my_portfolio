import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/projects1/home.png';
import Projects2 from './Projects2';
import Projects3 from './Projects3';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center font-montserrat text-teal-400 font-bold'>My Recent Projects</h2>
            <div className='md:flex justify-center gap-4 my-16 px-10 ml-20' data-aos="fade-up" data-aos-duration="1500">
                <div className='mb-2'>
                    <img style={{ width: '200px' }} src={img1} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl text-slate-400 font-montserrat'>Tiger-Claw Martial School</h2>
                    <h2 className='text-teal-400 font-montserrat'>This is an Full-Stack martial arts school website. User can <br /> Select Class and admission for available seat also can <br /> Complete payment via Online payment.</h2>
                    <li className='text-slate-400 font-montserrat'>Have admin, instructor and user different dashboard.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can delete, manage users and manage classes.</li>
                    <li className='text-slate-400 font-montserrat'>Admin can make admin and instructor</li>
                    <li className='text-slate-400 font-montserrat'>User can Login via (Google Sign-in)</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-teal-400'>Front-end technology:</span>React js, Tailwind,React Router, Firebase Authentication</li>
                    <li className='text-slate-400 font-montserrat'><span className='text-teal-400'>Back-end technology:</span>Node js,Express js, MongoDB</li>
                    <div className='md:flex gap-4 mt-2'>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://martial-arts-69e3f.web.app/">Live Preview</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/martial-client">Client Code</a></button>
                        <button className='btn btn-primary border-none btn-sm text-white bg-teal-600'><a href="https://github.com/fayezf/martial-server">Server Code</a></button>
                    </div>
                </div>
            </div>
            <Projects2></Projects2>
            <Projects3></Projects3>
        </div>
    );
};

export default Projects;