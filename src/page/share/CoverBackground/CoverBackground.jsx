import React from 'react';
import CommonSectionTitle from '../CommonSectionTitle/CommonSectionTitle';
import bgDark from '../../../assets/img/bgDark.png'

const CoverBackground = () => {
    return (
        <div className="h-[464px] bg-center flex justify-center items-center  border" style={{ backgroundImage: `url(${bgDark})` }}>
            <div className='text-center'>
                <h1 className='flex justify-center'> <CommonSectionTitle sectionTitle={"About our company"}></CommonSectionTitle></h1>
                <h1 className='text-4xl font-extrabold pt-2'>Your Trusted TechPro Partner</h1>
                <p className='mt-6 mb-3'>Our team of experts who have been in the profession for years focuses on helping <br /> you achieve optimal technical surface.</p>
                {/* <img src={bgDark} alt="" />  */}
            </div>
        </div>
    );
};

export default CoverBackground;