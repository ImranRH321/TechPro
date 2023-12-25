import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../share/Header/Header';
import Footer from '../share/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-[#101010] text-white'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;