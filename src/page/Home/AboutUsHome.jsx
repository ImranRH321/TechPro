import React from 'react';
import CommonSectionTitle from '../share/CommonSectionTitle/CommonSectionTitle';
import { FaAssistiveListeningSystems, FaFan, FaNetworkWired, FaShopify } from 'react-icons/fa';
import side1 from '../../assets/about/side.png';
import side2 from '../../assets/about/side2.png';

const AboutUsHome = () => {
    return (
        <div className='bg-gray p-7 my-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                <div className="imgbabo">
                    <img src={side1} alt="noimg" />
                </div>
                <div className="AkaTako ">
                    <CommonSectionTitle sectionTitle={"About us"}></CommonSectionTitle>
                    <h2 className='text-4xl font-bold my-4'>World leading technical company since 1997</h2>
                    <p>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and cont inue by example, leaving other cleaning companies.</p>
                    <div className="flex items-center gap-4 my-4 bg-blue-50 py-2">
                        <span className='text-3xl p-3 text-blue-600 bg-blue-200 rounded-full'> <FaAssistiveListeningSystems></FaAssistiveListeningSystems></span>
                        <div>
                            <h2 className='font-bold'>Company details gather</h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                    <h3>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options.</h3>
                </div>

            </div>
            {/* shodo tomar jonno sob korlam nijer jonno shudo babdai raklam  */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mt-5 py-3">

                <div className="TuiValoTakba flex flex-col ">
                    <CommonSectionTitle sectionTitle={"What we offer"}></CommonSectionTitle>
                    <div className="rounded">
                        <h2 className='md:text-2xl lg:text-4xl font-bold my-4'>Experience backed by our expertise at your service</h2>
                        <p>Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example..</p>
                    </div>
                    <div className="1maical flex items-center gap-4 my-4 bg-blue-50 py-2">
                        <span className='text-3xl p-3 text-blue-600 bg-blue-200 rounded-full'> <FaShopify></FaShopify></span>
                        <div>
                            <h2 className='font-bold'>Highly Rated & Esteemed </h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                    <div className="1maical flex items-center gap-4 my-4 bg-blue-50  py-2">
                        <span className='text-3xl p-3 text-blue-600 bg-blue-200 rounded-full'> <FaNetworkWired></FaNetworkWired></span>
                        <div>
                            <h2 className='font-bold'>
                                Globally SatisFaction Guarantee</h2>
                            <h2>Mollis facilisis nibh libero in nisl. Pulvinar donec lorem arcu augue feugiat enim.</h2>
                        </div>
                    </div>
                   
                </div>
                {/* img na bosale ki hobe */}
                <img className='' src={side2} alt="sidenoImg" />
              
            </div>
        </div>
    );
};

export default AboutUsHome;