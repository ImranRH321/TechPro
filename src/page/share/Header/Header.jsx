import React from 'react';
import  { Link } from 'react-router-dom';
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';

const Header = () => {
    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About us</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/servicesDetails'>Service || Details</Link></li>
        <li><Link to='/blogs'>blog</Link></li>
        <li><Link to='/blogDetail'>blogDetails</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 border">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                        </ul>
                    </div>
                    <span className="ghost text-4xl font-axtrabold flex items-center"> <FaAmericanSignLanguageInterpreting className='text-primary'></FaAmericanSignLanguageInterpreting> <b>TechPro</b> </span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to="/contact">
                <button className="btn btn-neutral btn-md">Contact us</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;