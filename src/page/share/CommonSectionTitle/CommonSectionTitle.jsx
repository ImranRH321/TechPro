import React from 'react';

const CommonSectionTitle = ({ sectionTitle }) => {
    return (
        <div className='flex items-center'>
            --- <p className='font-bold'> {sectionTitle}</p>
        </div>
    );
};

export default CommonSectionTitle;