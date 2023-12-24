import React from 'react';
import { FaAccessibleIcon, FaTasks, FaUser } from 'react-icons/fa';
import bgb from '../../assets/blogs/bgb.png';
import b1 from '../../assets/blogs/b1.png';
import b2 from '../../assets/blogs/b2.png';
import b3 from '../../assets/blogs/b3.png';
import CommonSectionTitle from '../share/CommonSectionTitle/CommonSectionTitle';

const Blogs = () => {
    return (
        <div>
           <section className="Area">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-5 border shadow-md">
                        <div className=" text-left ">
                          <img className='my-2 rounded' src={bgb} alt="bgbNoImg" />  
                        <div className='flex  justify-between'>
                            <p className="flex items-center gap-2 ">
                                <span className='text-[#F84C03]'><FaUser></FaUser> </span>
                                <span className='text-gray'> By Johnson</span>
                            </p>
                            <p className="flex  items-center  gap-2">
                            <span className='text-[#F84C03]'><FaAccessibleIcon></FaAccessibleIcon> </span><span className='text-gray'>   23 Sep, 2023</span>
                            </p>
                        </div>    
                            <h2 className='font-extrabold text-3xl my-3'>The shocking revelation of our insurance.</h2>
                           <p>Lorem ipsum dolor sit amet consectetur. Amet dolor egestas fringilla imperdiet justo eget. Tristique sagittis pretium nulla tellus lectus rhoncus eget. Blandit malesuada dolor urna elementum elementum enim volutpat nunc nibh.</p>
                           
                        </div>
                    </div>
                    {/* right side  */}
                    <div className="card shadow-xl sonamiya">
                      <div className="bg-white shadow-xl px-3 py-4 rounded flex items-center text-left gap-5">
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
            <div className="CallME  bg-base-100 shadow-xl">
                    <figure><img className="w-[300px] h-[200px]  rounded" src={b3} alt="Shoes" /></figure>
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
                    <figure><img className="w-[300px] h-[200px] rounded" src={b1} alt="Shoes" /></figure>
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
                    <figure><img className="w-[300px] h-[200px]  rounded" src={b2} alt="Shoes" /></figure>
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
            {/* danso end */}
          </section>
         </div>
    );
};

export default Blogs;