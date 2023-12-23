import React from 'react';
import bImg from '../../../assets/img/a1.png'
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="text-left p-3">
                    <CommonSectionTitle sectionTitle={"Welcome to TechPro"}></CommonSectionTitle>
                    <h1 className='md:text-5xl font-bold mt-3 text-2xl'>Leading global technical service provider</h1>
                    <p className='my-3 py-2'>Posuere tortor magna hendrerit elit dolor sed cursus sed mus. Mauris quis sed aliquet vestibulum massa.</p>
                    <div className='flex gap-5'>

                        <button className="btn bg-[#F84C03]  hover:bg-[#F84C03] px-6 rounded text-white">Get Stated</button>
                        <button className="btn hover:bg-black border  hover:text-white  px-6 rounded ">Learn More</button>
                    </div>
                    <div className="heloStart flex gap-4 flex-wrap mt-5">
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-value">450+</div>
                                <div className="stat-desc mt-3">Colections</div>
                            </div>

                        </div>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-value">15K+</div>
                                <div className="stat-desc mt-3">Customers</div>
                            </div>

                        </div>
                        <div className="stats shadow">
                            <div className="stat">
                                <div className="stat-value">4.9+</div>
                                <div className="stat-desc mt-3">Review Rating</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=" border2">
                  <div className="background_img mx-auto">
                   <img className='w-[400px] md:w-4/5' src={bImg} alt="noIMg" />
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;