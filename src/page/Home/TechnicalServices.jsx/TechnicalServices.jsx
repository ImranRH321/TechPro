import React from 'react';
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';
import { FaArrowAltCircleDown, FaArrowRight, FaCode, FaCodiepie, FaDolly, FaFileCode, FaPhone } from 'react-icons/fa';

const TechnicalServices = () => {
    return (
        <div className='bg-white   p-5 my-16'>
            {/* <CommonSectionTitle sectionTitle={"What we provide"}></CommonSectionTitle> */}
                 <div className="flex gap-x-3">
                 <div className="divider w-[20px] h-[2px] bg-[#377DFF] mx-2" ></div>
            <h4 className='text-left text-1xl font-semibold my-2'>   What we provide</h4>        FF
                 </div>
            <div className="flex items-center justify-between">
                <h2 className=' sm:text-2xl lg:text-4xl font-bold'>We provide the best <br /> technical servicesk</h2>

                <button className="btn btn-neutral"> <FaArrowAltCircleDown></FaArrowAltCircleDown> All Services</button>
            </div>
            {/* Ar koto valobasba akto komiya deo  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lef mt-8">
                <div className="card bg-base-100 shadow-xl">
                    <div className=" text-left">
                        <span className='inline-block bg-slate-100 p-3 rounded-full text-red-400'>
                            <FaDolly></FaDolly>
                        </span>
                        <h2 className='text-lg font-extrabold mb-4'>Energy & Renewables</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                        <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className=" text-left">
                        <span className='inline-block bg-slate-100 p-3 rounded-full text-red-400'>
                            <FaPhone></FaPhone>
                        </span>
                        <h2 className='text-lg font-semibold mb-4'>Industry & Automation</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                        <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer text-orange-500'>Learn More <FaArrowRight></FaArrowRight></h3>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className=" text-left">
                        <span className='inline-block bg-slate-100 p-3 rounded-full text-red-400'>
                            <FaCodiepie></FaCodiepie>
                        </span>
                        <h2 className='text-lg font-semibold mb-4'>Building Installations</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>

                        <h3 className='font-extrabold mt-3 flex items-center gap-2 cursor-pointer'>Learn More <FaArrowRight></FaArrowRight></h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TechnicalServices;