import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 mt-20 text-base-content">
                <div>
                    <p className='text-slate-400'>Copyright © 2023 | Fayez Ahammed</p>
                    <div className='flex gap-x-6 justify-center my-4'>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.facebook.com/fayez.chowdhury.7374/"><FaFacebookF /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.instagram.com/mohammad_fayez_ahmed/"><FaInstagram /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://github.com/fayezf"><FaGithub /></a>
                        <a className=' text-lg text-white bg-slate-800 rounded-full p-2 hover:bg-blue-500 animate-pulse' href="https://www.linkedin.com/in/muhammad-fayez-48989127b/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;