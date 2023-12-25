import React from 'react';
import CommonSectionTitle from '../../share/CommonSectionTitle/CommonSectionTitle';
import p1 from '../../../assets/ourMeet/p1.png'
import p2 from '../../../assets/ourMeet/p2.png'
import p3 from '../../../assets/ourMeet/p3.png'
import p4 from '../../../assets/ourMeet/p4.png'

const OurMeet = () => {
    return (
        <div className='mx-4'>
            <div className='flex justify-center mt-10'> <CommonSectionTitle sectionTitle={'Our Team'}></CommonSectionTitle></div>
            <h1 className='text-3xl font-extrabold'>Meet our creative team</h1>
            <br />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-lef mt-5">
                <div className="card bg-black shadow-xl">
                    <div className=" text-left">
                        <img src={p1} alt="noImg" />
                        <p className='font-extrabold text-center mt-3'>Faye Carson</p>
                        <p className=' text-center'>Instuctor</p>
                    </div>
                </div>
                <div className="card bg-black shadow-xl">
                    <div className=" text-left">
                        <img src={p2} alt="noImg" />
                        <p className='font-extrabold text-center mt-3'>Faye Carson</p>
                        <p className=' text-center'>Instuctor</p>
                    </div>
                </div>
                <div className="card bg-black shadow-xl">
                    <div className=" text-left">
                        <img src={p3} alt="noImg" />
                        <p className='font-extrabold text-center mt-3'>Faye Carson</p>
                        <p className=' text-center'>Instuctor</p>
                    </div>
                </div>
                <div className="card bg-black shadow-xl">
                    <div className=" text-left">
                        <img src={p4} alt="noImg" />
                        <p className='font-extrabold text-center mt-3'>Faye Carson</p>
                        <p className=' text-center'>Instuctor</p>
                    </div>
                </div>
            </div>
                <p className='text-center mt-3'>... .... .... </p>
        </div>

    );
};

export default OurMeet; 