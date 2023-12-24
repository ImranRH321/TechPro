import React from 'react';
import { FaAccessibleIcon, FaTasks, FaUser } from 'react-icons/fa';
import bgb from '../../assets/blogs/bgb.png';
import b1 from '../../assets/blogs/b1.png';
import b2 from '../../assets/blogs/b2.png';
import b3 from '../../assets/blogs/b3.png';
import CommonSectionTitle from '../share/CommonSectionTitle/CommonSectionTitle';
import PageBackground from '../share/PageBackground/PageBackground';

const Blogs = () => {
    return (
        <div>
            <PageBackground smallHead={'All Blogs'} title={'Follow Our Blog for Updates'} content={`Our team of experts who have been in the profession for years focuses on helping`} newLine={' you achieve optimal technical surface.'}></PageBackground>
            <section className="Area">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 shadow-xl">
                        <div className=" text-left ">
                            <img className='rounded' src={bgb} alt="bgbNoImg" />
                            <div className='flex  justify-between mt-4'>
                                <p className="flex items-center gap-2">
                                    <span className='text-[#F84C03]'><FaUser></FaUser> </span>
                                    <span className='text-gray'> By Johnson</span>
                                </p>
                                <p className="flex  items-center  gap-2">
                                    <span className='text-[#F84C03]'><FaAccessibleIcon></FaAccessibleIcon> </span><span className='text-gray'>   23 Sep, 2023</span>
                                </p>
                            </div>
                            <h2 className='font-extrabold text-lg my-2'>The shocking revelation of our insurance.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Amet dolor egestas fringilla imperdiet justo eget. Tristique sagittis pretium nulla tellus lectus rhoncus eget. Blandit malesuada dolor urna elementum elementum enim volutpat nunc nibh.</p>

                        </div>
                    </div>
                    {/* right side  */}
                    <div className="card shadow-xl sonamiya">
                        <div className="bg-white shadow-xl px-2 py-4 rounded flex items-center text-left gap-5">
                            <img className=' h-[120px]' src={b1} alt="noImg" />
                            <div>
                                <h2 className="font-extrabold">
                                    World leading technical company since 1997
                                </h2>
                                <p className='mt-2'>    By Johnson | 23 Sep, 2023 </p>
                            </div>
                        </div>
                        <div className="bg-white my-5 shadow-xl px-3 py-4 rounded flex items-center text-left gap-5">
                            <img className=' h-[120px]' src={b1} alt="noImg" />
                            <div>
                                <h2 className="font-extrabold">
                                    World leading technical company since 1997
                                </h2>
                                <p className='mt-2'>    By Johnson | 23 Sep, 2023 </p>
                            </div>
                        </div>
                        <div className="bg-white shadow-xl px-3 py-4 rounded flex items-center text-left gap-5">
                            <img className=' h-[120px]' src={b1} alt="noImg" />
                            <div>
                                <h2 className="font-extrabold">
                                    World leading technical company since 1997
                                </h2>
                                <p className='mt-2'>    By Johnson | 23 Sep, 2023 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* section 2  */}
            <section className=''>
                <div className='flex flex-col items-center my-16'>
                    <CommonSectionTitle sectionTitle={"Latest Blogs"}></CommonSectionTitle>
                    <h2 className='text-2xl font-extrabold'>Lets discover our latest <br /> finished project</h2>
                </div>
                {/* danson  */}
                <div className="Booom grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="CallME  bg-base-100 shadow-xl text-left">
                        <div className='p-5'>
                            <figure><img className="w-[300px]  mx-auto lg:w-full h-[200px] rounded" src={b3} alt="Shoes" /></figure>
                        </div>
                        <div className="p-5">
                            <div className='flex justify-between'>
                                <p className="flex items-center gap-2">
                                    <span className='text-orange-400'> <FaUser></FaUser></span> <small> By Johnson</small>
                                </p>
                                <p className="flex  items-center gap-2">
                                    <span className='text-orange-400'><FaTasks></FaTasks></span>  <small>   23 Sep, 2023</small>
                                </p>
                            </div>
                            <h2 className="card-title my-2">The Significance of User-Centered Design !</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                        </div>
                    </div>
                    <div className="CallME  bg-base-100 shadow-xl">
                        <figure><img className="w-[300px]  mx-auto lg:w-full p-5 h-[200px]  rounded" src={b1} alt="Shoes" /></figure>
                        <div className="p-5 text-left">
                            <div className='flex justify-between'>
                                <p className="flex items-center gap-2">
                                    <span className='text-orange-400'> <FaUser></FaUser></span> <small> By Johnson</small>
                                </p>
                                <p className="flex  items-center gap-2">
                                    <span className='text-orange-400'><FaTasks></FaTasks></span>  <small>   23 Sep, 2023</small>
                                </p>
                            </div>
                            <h2 className="card-title my-2">The Impact of user-centered Design </h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                        </div>
                    </div>
                    <div className="CallME  bg-base-100 shadow-xl">
                        <figure><img className="w-[300px] h-[200px] p-3 rounded" src={b2} alt="Shoes" /></figure>
                        <div className="p-4 text-left">
                            <div className='flex justify-between'>
                                <p className="flex items-center gap-2">
                                    <span className='text-orange-400'> <FaUser></FaUser></span> <small> By Johnson</small>
                                </p>
                                <p className="flex  items-center gap-2">
                                    <span className='text-orange-400'><FaTasks></FaTasks></span>  <small>   23 Sep, 2023</small>
                                </p>
                            </div>
                            <h2 className="card-title my-2">The Significance of User-Centered Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                        </div>
                    </div>
                </div>
                {/* danso end */}
            </section>
        </div>
    );
};

export default Blogs;