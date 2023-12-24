import React from 'react';
import blogBg from '../../assets/blogs/bgb.png'
import { FaTasks, FaUser } from 'react-icons/fa';

const BlogDetails = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl md:text-4xl font-extrabold  my-4 py-3'>The shocking revelation  <br />
                    of our insurance.</h1>
             
                <div>
                    <img src={blogBg} className='w-full h-[400px] rounded' alt="" />
                </div>
                {/* icon here */}
               <div className="totalContent  mx-[70px] px-2 text-left">
                 <div className='flex justify-between my-8'>
                    <p className="flex items-center  gap-2">
                        <span className='text-orange-400'><FaUser></FaUser></span> <span> By Johnson</span>
                    </p>
                    <p className="flex  items-center gap-2">
                        <span className='text-orange-400'><FaTasks></FaTasks></span> <span>   23 Sep, 2023</span>
                    </p>
                </div>
                <h2 className="text-2xl font-extrabold">Comprehensive Technical Support</h2>
                <p className="my-3">
                    By Johnson
                    23 Sep, 2024
                    In a world brimming with possibilities, individuals have the innate ability to shape their destinies. This is where the concept of agency comes into play. Agency refers to an individual's capacity to make intentional choices, take proactive steps, and influence their own lives. <br /> <br />
                    In a world brimming with possibilities, individuals have the innate ability to shape their destinies. This is where the concept of agency comes into play. Agency refers to an individual's capacity to make intentional choices, take proactive steps, and influence their own lives. It is a force that propels us.
                </p>
                <h2 className='text-2xl font-extrabold py-2'>Empowerment through TechPro</h2>
                <p className='my-3'>When individuals embrace agency, they tap into a wellspring of empowerment. They develop a growth mindset, acknowledging that setbacks are learning opportunities and failure is not definitive. Agency allows us to set goals aligned with our values and design meaningful paths to achieve them. It encourages us to seek out resources, knowledge, and support systems that foster our personal development. <br /> <br /> Cultivating agency requires a blend of self-reflection, self-awareness, and self-directed action. It starts with identifying our passions, strengths, and values, as these serve.</p>
                
                <p className={` border-l-4 text border-orange-500 px-4 my-3`}>“Developing effective goal-setting skills enables us to create actionable plans, breaking down larger objectives into smaller, manageable steps. Building resilience and adaptability helps us navigate obstacles and setbacks with determination and flexibility.”</p>
                <h1 className='text-2xl font-extrabold py-2'>The impact of TechPro on society</h1>
                <p className='my-3'>When individuals embrace agency, they tap into a wellspring of empowerment. They develop a growth mindset, acknowledging that setbacks are learning opportunities and failure is not definitive. Agency allows us to set goals aligned with our values and design meaningful paths to achieve them. It encourages us to seek out resources, knowledge, and support systems that foster our personal development.</p> 
                <p className="my-2">
                    Cultivating agency requires a blend of self-reflection, self-awareness, and self-directed action. It starts with identifying our passions, strengths, and values, as these serve.
                </p>
                <h2 className='font-extrabold text-2xl mb-3 mt-5'>Unleashing power within for societal transformation </h2>
                Agency is a formidable force that resides within each of us, waiting to be unleashed. Discover the profound impact of agency on our lives and society as a whole. This blog highlights the significance of embracing agency, empowering individuals to take control of their destinies, achieve personal fulfillment, and contribute to positive societal transformation. <br />
                <p className='mt-2'>
                    <li>The Key to Personal Empowerment</li>
                    <li>Embracing Autonomy and Self-Efficacy</li>
                    <li>Overcoming Obstacles and Failure</li>
                    <li>Designing Pathways to Success</li>
                    <li>The Ripple Effect of Empowered Individuals</li>
                </p>    
               </div>
            </div>
        </div>
    );
};

export default BlogDetails;