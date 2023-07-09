import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo1.png';
import ThemeChange from '../ThemeChange/ThemeChange';

const NavBar = () => {

    const navItems = <>
        <li><Link to="/" className='font-semibold'>Home</Link></li>
        <li><Link to="/portfolio" className='font-semibold'>Portfolio</Link></li>
        <li><Link to="/about" className='font-semibold'>About Me</Link></li>
        <li><Link to="/blog" className='font-semibold'>Blogs</Link></li>
        <li><Link to="/contact" className='font-semibold'>Contact Us</Link></li>
    </>

    return (
        <div className="navbar fixed top-0 z-10 max-w-screen-2xl w-full bg-teal-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-white bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <img style={{ width: '70px' }} src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeChange></ThemeChange>
            </div>
        </div>
    );
};

export default NavBar;