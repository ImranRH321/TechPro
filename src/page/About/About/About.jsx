import React from 'react';
import CoverBackground from '../../share/CoverBackground/CoverBackground';
import { FaMusic } from 'react-icons/fa';
import man1 from '../../../assets/about/man1.png'
import man2 from '../../../assets/about/man2.png'
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';

const About = () => {
    return (
        <div>
            <h1 className='text-black'>Iabout page </h1>
            {/* <CoverBackground></CoverBackground> */}
            <div className="container_flow">
                <CommonSectionTitle sectionTitle={"Our Misssion"}></CommonSectionTitle>
                <h1 className='text-3xl font-extrabold text-left my-3'>Your happiness is our <br /> first priority</h1>
                {/* row bro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
                    <div className='border border-red-400'>
                        
                        <div className="border flex justify-center gap-5 items-center text-left">
                            <div className="avatar ">
                                <div className="w-12">
                                    <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className='font-extrabold'>Highly Rated & Esteemed</h2>
                                <p>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                            </div>
                        </div>
                        <div className="border flex my-5 justify-center gap-5 items-center text-left">
                            <div className="avatar ">
                                <div className="w-12">
                                    <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className='font-extrabold'>Highly Rated & Esteemed</h2>
                                <p>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                            </div>
                        </div>
                        <div className="border flex justify-center gap-5 items-center text-left">
                            <div className="avatar ">
                                <div className="w-12">
                                    <img className='rounded-full' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className='font-extrabold'>Highly Rated & Esteemed</h2>
                                <p>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className='Right_img border flex  gap-5 flex-wrap'>
                        <img className='w-[200px]' src={man1} alt="noImg" />
                        <img className='w-[200px]' src={man2} alt="noImg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;