import React from 'react';
import { FaArrowRight, FaTasks, FaUser } from 'react-icons/fa';

const OurBlogs = () => {
    return (
        <div className='border text-left '>
            <div className='flex items-center gap-2'> <span> <FaArrowRight></FaArrowRight> </span><h2 className='text-md font-bold'>Our Blogs</h2></div>
            <div className="sm:flex justify-between">
                <h2 className='text-2xl font-extrabold w-[306px] border'>Lets discover our latest finished project</h2>
                <h2 className='text-md w-[306px] border'>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example.</h2>
            </div>
            <div className="Booom grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="CallME  bg-base-100 shadow-xl">
                    <figure><img className="w-[401px] h-[278px] rounded" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex  border'>
                            <p className="flex items-center gap-2">
                                <FaUser></FaUser><span> By Johnson</span>
                            </p>
                            <p className="flex  items-center gap-2">
                                <FaTasks></FaTasks><span>   23 Sep, 2023</span>
                            </p>
                        </div>
                        <h2 className="card-title">The Significance of User-Centered Design !</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                    </div>
                </div>
            <div className="CallME  bg-base-100 shadow-xl">
                    <figure><img className="w-[401px] h-[278px] rounded" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex  border'>
                            <p className="flex items-center gap-2">
                                <FaUser></FaUser><span> By Johnson</span>
                            </p>
                            <p className="flex  items-center gap-2">
                                <FaTasks></FaTasks><span>   23 Sep, 2023</span>
                            </p>
                        </div>
                        <h2 className="card-title">The Significance of User-Centered Design !</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                    </div>
                </div>
            <div className="CallME  bg-base-100 shadow-xl">
                    <figure><img className="w-[401px] h-[278px] rounded" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex  border'>
                            <p className="flex items-center gap-2">
                                <FaUser></FaUser><span> By Johnson</span>
                            </p>
                            <p className="flex  items-center gap-2">
                                <FaTasks></FaTasks><span>   23 Sep, 2023</span>
                            </p>
                        </div>
                        <h2 className="card-title">The Significance of User-Centered Design !</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Vitae eget feugiat nulla egestas. Proin auctor egestas habitasse a sem vel dapibus nulla.?</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBlogs;