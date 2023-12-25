import React from 'react';
import { FaArrowRight, FaTasks, FaUser } from 'react-icons/fa';
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';
import b1 from '../../../assets/blogs/b1.png';
import b2 from '../../../assets/blogs/b2.png';
import b3 from '../../../assets/blogs/b3.png';

const OurBlogs = () => {
    return (
        <section className=''>
           <h3 className='ms-4'> <CommonSectionTitle sectionTitle={"Our Blogs"}></CommonSectionTitle></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 mt-2 text-left">
                <h2 className='text-2xl md:text-3xl font-bold px-3 mx-3'>We provide the best <br /> technical servicesk</h2>
                <p className='px-3 mx-3'>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example.</p>
            </div>
            <br />
        {/* danson  */}
        <div className="Booom grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="CallME   shadow-xl text-left">
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
            <div className="CallME   shadow-xl">
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
            <div className="CallME   shadow-xl">
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
    );
};

export default OurBlogs;