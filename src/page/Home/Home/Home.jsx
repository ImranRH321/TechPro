import React from 'react';
import Footer from '../../share/Footer/Footer';
import OurBlogs from '../OurBlogs/OurBlogs';
import Testmonialsk from '../Testmonialsk';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <OurBlogs></OurBlogs>
            <Testmonialsk></Testmonialsk>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;