import React from 'react';
import { FaBeer, FaClock, FaFacebook, FaLinkedin, FaLocationArrow, FaPhone, FaSearch, FaStrikethrough, FaTwitter, FaYoutube } from "react-icons/fa";
import fbSmLogo from '../../../assets/icons/VectorFb.png'
import victor from '../../../assets/footer/Vector.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#101010] text-white">
                <aside>
                      
                    <h1 className='text-3xl font-bold flex'>  <img src={victor} alt="Noimg" /><span className='ps-3'>TechPro</span></h1>
                    <div className='w-full md:w-[174px] text-left'>
                        <p>Lorem ipsum dolor sit amet consectetur. Ac arcu in dignissim aliquam tincidunt praesent eget vulputate pellentesque.</p>

                    </div>
                    <div className="flex items-center gap-5">
                        <h2 className='bg-[#F84C03] p-2 rounded-full text-white'>  <FaFacebook></FaFacebook></h2>
                        {/* <h2 className='bg-black'>  <img src="fbSmLogo" alt="noFb" /></h2> */}
                        <FaLinkedin></FaLinkedin>
                        <FaTwitter></FaTwitter>
                        <FaYoutube></FaYoutube>
                        <FaSearch></FaSearch>
                    </div>
                </aside>
                <nav>
                    <header className="footer-title">Quick Link</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Services</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <header className="footer-title">Utility pages</header>
                    <a className="link link-hover">Instructions</a>
                    <a className="link link-hover">Style guide</a>
                    <a className="link link-hover">Licenses</a>
                    <a className="link link-hover">404 Not found </a>
                    <a className="link link-hover">Password protected </a>
                </nav>
                <nav className='text-left'>
                    <header className="footer-title">Contact Information</header>
                    <p className='flex items-center'> <span className='rounded text-red-700  p-3'><FaLocationArrow></FaLocationArrow></span> 1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063</p>
                    <p className='flex items-center'> <span className='rounded text-red-700  p-3'><FaPhone></FaPhone></span> +1 283 444 5555</p>
                    <p className='flex items-center'> <span className='rounded text-red-700  p-3'><FaClock></FaClock></span> Opening Hours: <br />
8:00 AM – 7:45 PM</p>
                    
                </nav>
            </footer>
            {/* bx  */}
            <hr />
            <footer className="footer border-t-1  px-10 py-4 bg-[#101010] text-white border-base-100">
                <aside className="items-center grid-flow-col">
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                    <p>Copyright © 2023 TechPro, all rights reserved.</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <p>Term of use</p>
                        <p>Privacy Policy</p>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;