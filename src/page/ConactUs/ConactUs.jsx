import React from 'react';
import { FaFileMedicalAlt, FaPhone, FaTimes, FaUber, FaUserTimes } from 'react-icons/fa';
import contactImg from '../../assets/services/contact.png'
import PageBackground from '../share/PageBackground/PageBackground';

const ConactUs = () => {
    return (
        <div>
             <PageBackground smallHead={'Contact Us'} title={'Our Help Center'} content={`Our team of experts who have been in the profession for years focuses on helping`} newLine={' you achieve optimal technical surface.'}></PageBackground>
         
             {/* --------------------------- cholo valobasi---------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-lef mt-8">
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <button className='bg-slate-100 p-3 rounded-full text-[#377DFF]'><FaPhone></FaPhone></button>
                        <h2 className='font-extrabold my-3'>Call Us Today</h2>
                        <p><small>+1 (717) 550-1675
                            <br /> +4 (248) 762-0356</small></p>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <button className='bg-slate-100 p-3 rounded-full text-[#377DFF]'><FaFileMedicalAlt></FaFileMedicalAlt></button>
                        <h2 className='font-extrabold my-3'>Send Message Via Email</h2>
                        <p><small>support@techpro.com
                            <br /> info.techpro@gmail.com</small></p>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className=" text-left">
                        <button className='bg-slate-100 p-3 rounded-full text-[#377DFF]'><FaUber></FaUber></button>
                        <h2 className='font-extrabold my-3'>Visit Our Office</h2>
                        <p>3448 Ile De France St #242, Fort Wainwright, Alaska 99703, USA</p>
                    </div>
                </div>

            </div>
            {/* she to buje na  Amar ki kora*/}
            <div className="form_container_helo  py-10 px-5 my-20">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="card ">
                        <div className=" text-left">
                            <h2 className='font-extrabold text-3xl text-white'>Love to hear from you, leave a message</h2>
                            <img className='my-3' src={contactImg} alt="noFound" />
                        </div>
                    </div>
                    <div className="card  ">
                        <div className="Container_from_Answer">
                            <form>
                                <div className="Left_right flex gap-4  lg:flex-nowrap">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">First Name★</span>
                                        </label>
                                        <input type="email" placeholder="Enter first name" className="input input-bordered w-full text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white font-semibold">Last Name★</span>
                                        </label>
                                        <input type="email" placeholder="Enter last name" className="input input-bordered w-full text-black" required />
                                    </div>
                                </div>
                                {/* email  */}
                                <div className="form-control my-4">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold">Email★</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered text-black" required />
                                </div>
                                {/* Messages  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white font-semibold">Message★
                                        </span>
                                    </label>
                                    {/* lg */}
                                    <textarea placeholder="Type here ..." className="textarea-bordered textarea text-black   h-[122px]" ></textarea>
                                </div>
                                <div className="flex justify-end mt-4 ">
                                    <button className="btn text-white bg-[#F84C03]">Send message</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConactUs;