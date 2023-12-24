import React from 'react';
import OurBlogs from '../OurBlogs/OurBlogs';
import Testmonialsk from '../Testmonialsk/Testmonialsk';
import AboutUsHome from '../AboutUsHome';
import TechnicalServices from '../TechnicalServices.jsx/TechnicalServices';
import CompanryService from '../../share/CompanryService/CompanryService';
import Banner from '../Bannner/Banner';
import { FaHome } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            {/* <div className='bg-green-500  p-5 rounded-full absolute   bottom-10 right-20'>
                <span className='text-5xl'><FaHome></FaHome></span>
            </div>
             */}
            <Banner></Banner> <br /> <br /> <br />
            <CompanryService></CompanryService>
            <TechnicalServices></TechnicalServices>
            <AboutUsHome></AboutUsHome>
            <OurBlogs></OurBlogs>
            <Testmonialsk></Testmonialsk>
        </div>
    );
};

export default Home;