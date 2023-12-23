import React from 'react';
import CommonSectionTitle from '../share/CommonSectionTitle/CommonSectionTitle';
import { FaFan } from 'react-icons/fa';

const AboutUsHome = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5 text-left">
                <div className="border">
                    img hobe bro
                </div>
                <div className="border ">
                    <CommonSectionTitle sectionTitle={"About us"}></CommonSectionTitle>
                    <h2 className='text-4xl font-bold my-4'>World leading technical company since 1997</h2>
                    <p>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and cont inue by example, leaving other cleaning companies.</p>
                    <div className="flex items-center gap-4 my-4 bg-blue-50 py-2">
                        <span className='text-5xl text-yellow-400'> <FaFan></FaFan></span>
                        <div>
                            <h2 className='font-bold'>Company details gather</h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                    <h3>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options.</h3>
                </div>

            </div>
            {/* shodo tomar jonno sob korlam nijer jonno shudo babdai raklam  */}

            <div className="grid grid-cols-2 gap-5 text-left">

                <div className="border ">
                    <CommonSectionTitle sectionTitle={"About us"}></CommonSectionTitle>
                    <h2 className='text-4xl font-bold my-4'>Experience backed by our expertise at your service</h2>
                    <p>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example..</p>
                    <div className="1maical flex items-center gap-4 my-4 bg-blue-50 py-2">
                        <span className='text-3xl p-3 text-yellow-400 bg-blue-300 rounded-full'> <FaFan></FaFan></span>
                        <div>
                            <h2 className='font-bold'>Company details gather</h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                    <div className="1maical flex items-center gap-4 my-4 bg-blue-50  py-2">
                        <span className='text-3xl p-3 text-yellow-400 bg-blue-300 rounded-full'> <FaFan></FaFan></span>
                        <div>
                            <h2 className='font-bold'>Company details gather</h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                    <h3>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options.</h3>
                </div>
                {/* img na bosale ki hobe */}
                <div className="border">
                    img hobe bro
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;