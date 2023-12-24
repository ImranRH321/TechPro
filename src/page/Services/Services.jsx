import React from 'react';
import { FaArrowRight, FaPhone, FaCode, FaFacebook, FaConnectdevelop, FaUserClock, FaClosedCaptioning, FaTape, FaConfluence, FaSearchDollar, FaImage } from 'react-icons/fa';
import CompanryService from '../share/CompanryService/CompanryService';
import Testmonialsk from '../Home/Testmonialsk/Testmonialsk';
import PageBackground from '../share/PageBackground/PageBackground';

const Services = () => {
    return (
        <div>
           {/* backgroundImage  */}
           <PageBackground smallHead={'Highest Level Of Service'} title={'Our Services'} content={`Our team of experts who have been in the profession for years focuses on helping`} newLine={' you achieve optimal technical surface.'}></PageBackground>
           
           {/* backgroundImage  */}
            {/* banner page  */}
            <section className="sevices_container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3  text-left">
                <h2 className='text-4xl font-bold px-3 mx-3'>We provide the best <br /> technical servicesk</h2>
                <p className='px-3 mx-3'>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example.</p>
            </div>
                {/* Ar koto valobasba akto komiya deo  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lef mt-8">
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon1  */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaConnectdevelop></FaConnectdevelop></button>
                            <h2 className='font-extrabold my-4'>Energy & Renewables</h2>
                            <p>Real time problems solving is not just about time, it’s about time. This allows you to solve within a specified time problem. </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon 2 */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaPhone></FaPhone></button>
                            {/*  */}
                            <h2 className='font-extrabold  my-4'>Industry & Automation</h2>
                            <p>Real time problems solving is not just about time, it’s about time. This allows you to solve within a specified time problem.  </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer text-orange-500'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon 3 */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaCode></FaCode></button>

                            <h2 className='font-extrabold my-4'>Building Installations</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon 4 */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaUserClock></FaUserClock></button>

                            <h2 className='font-extrabold my-4'>Cybersecurity Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon 5 */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaImage></FaImage></button>

                            <h2 className='font-extrabold my-4'>Cloud Computing Solutions</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className=" text-left">
                            {/* icon 6 */}
                            <button className='bg-slate-100 p-3 rounded-full text-orange-500'><FaTape></FaTape></button>

                            <h2 className='font-extrabold my-4'>Network Solutions</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                            <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                        </div>
                    </div>

                </div>
            </section>
            <div className='my-10 py-7 bg-slate-50'>
                <CompanryService classC={'flex justify-center'} color="font-extrabold"></CompanryService>
            </div>
            <Testmonialsk></Testmonialsk>
        </div>
    );
};

export default Services;