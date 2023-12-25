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
        <div className='bg-black px-4 mx-4'>
            <Banner></Banner> <br /> <br /> <br />
              <div className="px-4">  <CompanryService></CompanryService></div>
            <TechnicalServices></TechnicalServices>
            <AboutUsHome></AboutUsHome>
            <br />
            <OurBlogs></OurBlogs>
            <Testmonialsk></Testmonialsk>
        </div>
    );
};

export default Home;