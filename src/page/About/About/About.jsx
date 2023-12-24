import React from 'react';
import CoverBackground from '../../share/CoverBackground/CoverBackground';
import { FaMusic } from 'react-icons/fa';
import man1 from '../../../assets/about/man1.png'
import man2 from '../../../assets/about/man2.png'
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';
import OurMeet from '../OurMeet/OurMeet';
import topImg from '../../../assets/about/side.png'
import downImg from '../../../assets/about/side2.png'
import bgImage from '../../../assets/img/bgDark.png'
import PageBackground from '../../share/PageBackground/PageBackground';

const About = () => {
    return (
        <div>
            <PageBackground smallHead={'About our company'} title={'Your Trusted TechPro Partner'} content={`Our team of experts who have been in the profession for years focuses on helping`} newLine={' you achieve optimal technical surface.'}></PageBackground>
            {/* end of No result  */}
            <div className="container_flow part1">
                <CommonSectionTitle sectionTitle={"Our Misssion"}></CommonSectionTitle>
                <h1 className='text-3xl font-extrabold text-left my-3'>Your happiness is our <br /> first priority</h1>
                {/* row bro */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
                    <div className=' border-red-400'>

                        <div className=" flex justify-center gap-5 items-center text-left">
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
                        <div className=" flex my-5 justify-center gap-5 items-center text-left">
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
                        <div className=" flex justify-center gap-5 items-center text-left">
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
                        <img className='w-[200px] rounded' src={man1} alt="noImg" />
                        <img className='w-[200px] rounded' src={man2} alt="noImg" />
                    </div>
                </div>
            </div>
            <div className="part2 OurMeetPage">
                <OurMeet></OurMeet>
            </div>
            {/* Start bro */}
            <div className="my-5 bosStart">
                <h1 className='text-center font-extrabold text-3xl'>How we’ve helped our clients</h1>
                <div className="heloStart flex gap-10 justify-center flex-wrap mt-5">
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value text-[#377DFF]">15</div>
                            <div className="stat-desc font-bold mt-3">Years of experience</div>
                        </div>

                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value text-[#377DFF]">36k</div>
                            <div className="stat-desc font-bold mt-3">Social followers</div>
                        </div>

                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value text-[#377DFF]">428</div>
                            <div className="stat-desc font-bold mt-3">Project completed</div>
                        </div>

                    </div>
                    <div className="stats shadow">
                        <div className="stat">
                            <div className="stat-value text-[#377DFF]">92k</div>
                            <div className="stat-desc font-bold mt-3">Social profiles</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;