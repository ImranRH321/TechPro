import React from 'react';
import Footer from '../../share/Footer/Footer';
import OurBlogs from '../OurBlogs/OurBlogs';
import Testmonialsk from '../Testmonialsk/Testmonialsk';
import AboutUsHome from '../AboutUsHome';
import TechnicalServices from '../TechnicalServices.jsx/TechnicalServices';
import CompanryService from '../../share/CompanryService/CompanryService';
import Banner from '../Bannner/Banner';
import Header from '../../share/Header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Banner></Banner> */}
            {/* <CompanryService></CompanryService> */}
            {/* <TechnicalServices></TechnicalServices> */}
            {/* <AboutUsHome></AboutUsHome> */}
            {/* <OurBlogs></OurBlogs> */}
            {/* <Testmonialsk></Testmonialsk> */}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;