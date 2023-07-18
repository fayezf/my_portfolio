import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../../../assets/image/img.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row-reverse items-center mt-12 mr-24 ml-8'>
                <img className='ml-16 mt-20' style={{ width: '300px', border: 'inset' }} src={img} alt="" />
                <div className='mt-16'>
                    <h2 className=' text-center font-bold font-montserrat text-slate-400'>Assalamu Alaikum</h2>
                    <h2 className='uppercase text-4xl my-1 text-center font-bold font-montserrat text-teal-500'>I'm Fayez Ahammed</h2>
                    <div className='font-bold my-1 font-montserrat text-slate-400 text-center'>
                        <TypeAnimation
                            sequence={[
                                'MERN Stack Developer',
                                1000,
                                'React Developer',
                                1000,
                                'JavaScript Developer',
                                1000,
                                'Front End Developer',
                                1000,
                            ]}
                            speed={30}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <p className='my-1 text-slate-400 font-montserrat text-center'>I am an enthusiastic JavaScript developer with knowing some <br /> framework for the frontend and the backend. <br /> I'm basically a MERN developer.</p>
                    <div className='flex gap-x-6 justify-center my-6'>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.facebook.com/fayez.chowdhury.7374/"><FaFacebookF /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.instagram.com/mohammad_fayez_ahmed/"><FaInstagram /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://github.com/fayezf"><FaGithub /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.linkedin.com/in/muhammad-fayez-48989127b/"><FaLinkedinIn /></a>
                    </div>
                    <div className='text-center space-x-4'>
                        <Link to="/contact" className="btn btn-accent border-none text-white bg-teal-700">Hire Me</Link>
                        <button className="btn btn-sm btn-accent text-white"><a href="fayez_resume.pdf" download>Get Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;