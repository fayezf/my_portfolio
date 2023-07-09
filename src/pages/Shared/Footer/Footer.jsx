import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-4 mt-20 text-base-content">
                <div>
                    <p className='text-slate-400'>Copyright © 2023 | Fayez Ahammed</p>
                    <div className='flex gap-x-6 justify-center my-4'>
                        <a className='text-blue-500 text-2xl hover:scale-150 hover:bg-slate-50 animate-pulse' href="https://www.linkedin.com/in/muhammad-fayez-48989127b/"><FaLinkedin /></a>
                        <a className='text-blue-500 text-2xl hover:scale-150 hover:bg-slate-50 animate-pulse' href="https://www.facebook.com/fayez.chowdhury.7374/"><FaFacebookSquare /></a>
                        <a className='text-blue-500 text-2xl hover:scale-150 hover:bg-slate-50 animate-pulse' href="https://www.instagram.com/mohammad_fayez_ahmed/"><FaInstagram /></a>
                        <a className='text-blue-500 text-2xl hover:scale-150 hover:bg-slate-50 animate-pulse' href="https://github.com/fayezf"><FaGithubSquare /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;