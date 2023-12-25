import React from 'react';
import bgImage from '../../../assets/img/bgDark.png'
import CommonSectionTitle from '../CommonSectionTitle/CommonSectionTitle';
import { useLocation } from 'react-router-dom';

const PageBackground = ({ smallHead, title, content, newLine }) => {
    const location = useLocation();
    const aktaDagerJonno = location.pathname === "/about";

    return (
      <div className="bg-black">
          <section className=' -mt-0'>
            <div className="h-[360px] bg-center flex justify-center items-center  border" style={{ backgroundImage: `url(${bgImage})` }}>
                <div className='text-center text-black'>
                    {/* dont not tink this is right or wrong */}
                    {aktaDagerJonno ? <h1 className='flex justify-center'> <CommonSectionTitle sectionTitle={`${smallHead}`}></CommonSectionTitle></h1> : <p className='font-bold'> {smallHead}</p>}
                    {/* end  */}
                    <h1 className='text-4xl font-extrabold pt-2'>{title}</h1>
                    <p className='mt-6 mb-3'>{content}</p>
                    <p>{newLine}</p>

                </div>
            </div>
        </section>
      </div>
    );
};

export default PageBackground;   