import React from 'react';
import { FaAccessibleIcon, FaTasks, FaUser } from 'react-icons/fa';
import bgb from '../../assets/blogs/bgb.png';
import b1 from '../../assets/blogs/b1.png';
import b2 from '../../assets/blogs/b2.png';
import b3 from '../../assets/blogs/b3.png';

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
        </div>
    );
};

export default Blogs;