import React from 'react';

const CommonSectionTitle = ({ sectionTitle }) => {
    return (
        <div className='flex items-center my-2'>
             <div className="divider w-[20px] h-[2px] bg-[#377DFF] mx-2" ></div> <p className='font-bold'> {sectionTitle}</p>
        </div>
    );
};

export default CommonSectionTitle;