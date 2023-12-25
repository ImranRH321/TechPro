import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAmericanSignLanguageInterpreting } from 'react-icons/fa';
import logoImg from '../../../assets/img/logo.png'
const Header = () => {
    const navlinks = <>

        <li><NavLink activeClassName='active-link' exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='active-link' to='/about'>About us</NavLink></li>
        <li><NavLink activeClassName='active-link' to='/services'>Service</NavLink></li>
        <li><NavLink activeClassName='active-link' to='/servicesDetails'>Project</NavLink></li>
        <li><NavLink activeClassName='active-link' to='/blogs'>Blog</NavLink></li>
        <li><NavLink activeClassName='active-link' to='/blogDetail'>Blog Details</NavLink></li>

    </>

    return (
        <div>
            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    {/* logo left  */}
                <NavLink activeClassName='active-link ' exact to='/'>
                    <div className='flex items-center ms-4'>
                    <img className='w-[60px]' src={logoImg} alt="nimg" />
                        <span className="ghost sm:text-3xl  font-axtrabold flex items-center"> <b>TechPro</b> </span>
                    </div>
                       
                    </NavLink>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end me-5">
                    <Link to="/contact">
                        <button className="btn btn-neutral btn-md">Contact us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;