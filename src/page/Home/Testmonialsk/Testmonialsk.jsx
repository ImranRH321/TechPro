import React from 'react';
import { FaStar } from 'react-icons/fa';
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';

const Testmonialsk = () => {
    return (
        <div className='my-8'>
            <div className="text-center">
               <div className="text-center flex justify-center">
               <CommonSectionTitle sectionTitle={'Testimonials'}></CommonSectionTitle>
               </div>
                <h2 className='text-3xl font-bold font-senf'>Kind words from customers <br />
                    around the world</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lef mt-8">
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <h2 className="card-title text-2xl text-warning mb-5">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>  
                            <FaStar></FaStar>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>
                       <div className="Man_power flex items-center gap-2 mt-5">
                       <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-md font-bold">Doe Williamson</h2>
                            <h6><span>CEO at Google</span></h6>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <h2 className="card-title text-2xl text-warning mb-5">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>
                       <div className="Man_power flex items-center gap-2 mt-5">
                       <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-md font-bold">Doe Williamson</h2>
                            <h6><span>CEO at Google</span></h6>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <h2 className="card-title text-2xl text-warning mb-5">
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                            <FaStar></FaStar>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Libero lorem eget vitae sapien sed et. Pharetra diam adipiscing aliquet commodo rhon pellent esque sollicitudin purus. Lectus amet erat aliquet. </p>
                       <div className="Man_power flex items-center gap-2 mt-5">
                       <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-md font-bold">Doe Williamson</h2>
                            <h6><span>CEO at Google</span></h6>
                        </div>
                       </div>
                    </div>
                </div>
              
            </div>
            {/*  */}

        </div>
    );
};

export default Testmonialsk;