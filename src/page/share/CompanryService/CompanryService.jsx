import React from 'react';
import comLogo1 from '../../../assets/company/1.png'
import comLogo3 from '../../../assets/company/3.png'
import comLogo4 from '../../../assets/company/4.png'
import comLogo5 from '../../../assets/company/5.png'
import comLogo7 from '../../../assets/company/7.png'


const CompanryService = ({ classC, color }) => {
    return (
        <div className='py-5 my-10'>
          <div className="flex items-center">
          <p className={`text-left font-bold ${classC} `}> <span className={`${color}`}>Over 32K+</span> technical service growing with TechPro </p><hr className='w-2/4'/>
          </div>
            <div className='flex gap-8 my-10 items-center justify-between flex-wrap'>
                <img src={comLogo1} alt="noImg" />
                <img src={comLogo3} alt="noImg" />
                <img src={comLogo4} alt="noImg" />
                <img src={comLogo5} alt="noImg" />
                <img src={comLogo7} alt="noImg" />
            </div>
        </div>
    );
};

export default CompanryService;