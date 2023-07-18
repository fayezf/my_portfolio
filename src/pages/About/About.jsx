import React, { useEffect } from 'react';
import AOS from 'aos';
import photo from '../../assets/image/img.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='mt-32'>
            <div className='md:flex justify-center px-16'>
                <img style={{ width: '300px', border: 'outset' }} src={photo} alt="" />
            </div>
            <h2 className='text-3xl text-center text-teal-500 uppercase mt-8'>I'm Fayez Ahammed</h2>
            <p className='mt-4 text-slate-400 font-montserrat text-center'>I am an enthusiastic JavaScript developer with <br /> knowing some framework for the frontend and <br /> the backend. I am basically a MERN developer. <br /> I always focus on learning new technology.</p>
            <div className='flex gap-x-6 justify-center mt-12'>
                <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.facebook.com/fayez.chowdhury.7374/"><FaFacebookF /></a>
                <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.instagram.com/mohammad_fayez_ahmed/"><FaInstagram /></a>
                <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://github.com/fayezf"><FaGithub /></a>
                <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.linkedin.com/in/muhammad-fayez-48989127b/"><FaLinkedinIn /></a>
            </div>
            <div className='md:flex justify-center gap-28 px-16'>
                <div>
                    <h2 className='text-4xl text-center text-teal-500 font-bold mt-20'>My Skills</h2>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <li className='text-red-600 mt-4 text-2xl font-medium'>Expertise:</li>
                        <div className='mt-1'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2'>HTML</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>CSS</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Bootstrap</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Tailwind</span>
                        </div>
                        <br />
                        <div className='mt-1'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Es6</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>JavaScript</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>React JS</span>
                        </div>
                        <br />
                        <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>React Router</span>
                        <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>MongoDB</span>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <li className='text-red-600 text-2xl mt-4 font-medium'>Comfortable:</li>
                        <div className='mt-2'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2'>Firebase</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>JWT</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Rest api</span>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <li className='text-red-600 text-2xl mt-4 font-medium'>Familiar:</li>
                        <div className='mt-2'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2'>Node.js</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Nest.js</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Payment gateway</span>
                            <br />
                            <div className='mt-1'>
                                <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>React query</span>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500">
                        <li className='text-red-600 text-2xl mt-4 font-medium'>Tools:</li>
                        <div className='mt-1'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2'>Git</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Chrome Dev-tool</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>ChatGPT</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>VSCode</span>
                        </div>
                        <br />
                        <div className='mt-1'>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2'>Figma</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Github</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>MS-Office</span>
                            <span className='bg-slate-500 text-white font-medium rounded-sm px-2 ml-4'>Surge</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='text-4xl text-center text-teal-500 font-bold mt-20'>My Education</h2>
                    <h2 className='text-red-600 text-2xl mt-4 font-medium' data-aos="fade-right" data-aos-duration="1500">Graduation</h2>
                    <p className='text-teal-400 mt-4 font-semibold' data-aos="fade-right" data-aos-duration="1500">Diploma in CSE, Narayanganj <br /> Polytechnic Institute (Narayanganj, Bangladesh)</p>
                </div>
            </div>
        </div>
    );
};

export default About;