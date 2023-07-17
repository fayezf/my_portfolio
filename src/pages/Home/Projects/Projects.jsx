import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../../assets/projects1/home.png';
import img2 from '../../../assets/projects1/login.png';
import img3 from '../../../assets/projects1/payment.png';
import img4 from '../../../assets/projects1/manageClasses.png';
import Projects2 from './Projects2';
import Projects3 from './Projects3';

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <h2 className='text-3xl text-center font-montserrat text-teal-400 font-bold'>My Recent Projects</h2>
            <div className='md:flex gap-4 my-16 px-8' data-aos="fade-up" data-aos-duration="1500">
                <div className="carousel w-1/4 ml-80 ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide2" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide3" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide4" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={img4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="text-slate-500 text-2xl bg-transparent border-none">❮</a>
                            <a href="#slide1" className="text-slate-500 text-2xl bg-transparent border-none">❯</a>
                        </div>
                    </div>
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
                    <div className='md:flex gap-4'>
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