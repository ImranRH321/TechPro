import React from 'react';
import per1 from '../../assets/services/per1.png'
import per2 from '../../assets/services/per2.png'

const ServiceDetails = () => {
    return (
        <div>
            <h1>services</h1>
            <h1 className='text-2xl font-extrabold'>IT Support Services</h1>
            <p>In today's fast-paced digital landscape, businesses and individuals rely heavily on technology to streamline their operations and stay connected. However, with the increasing complexity of IT systems and the constant evolution of technology, technical challenges and issues are bound to arise. That's where our IT Support Services come into play.</p>
            <div>
                <img src={per1} className='w-full h-[460px] rounded' alt="" />
            </div>
            <h2 className="text-2xl font-extrabold">Comprehensive Technical Support</h2>
            <p className="my-3">
                Our IT support services encompass a wide range of technical assistance, from resolving day-to-day IT issues to tackling complex network and infrastructure problems. Whether you're a small business, a large corporation, or an individual user, our team of skilled technicians is here to help.Nor is there anyone who loves or pursues or desires itself because is pain, but occasionally. home cleaning service options and continue by example.
            </p>
            <h2 className='text-2xl font-extrabold'>Remote and On-Site Assistance</h2>
            <p className='my-3'>We understand that IT problems can occur at any time and place. Our services offer both remote and on-site assistance, ensuring that you receive the support you need, no matter where you are.</p>
            <h1 className='text-2xl font-extrabold'>Hardware and Software Support</h1>
            <p className='my-3'>Our experts are well-versed in diagnosing and resolving hardware and software-related issues. Whether it's a malfunctioning device, a software bug, or a compatibility problem, we have the expertise to get you back on track..</p>
            <div>
                <img src={per1} className='w-full h-[460px] rounded' alt="" />
            </div>
            <div className="logod">
                <h1 className='font-extrabold'>Why Choose Us</h1>
                <p>In today's fast-paced digital landscape, businesses and individuals rely heavily on technology to streamline their operations and stay connected. However, with the increasing complexity of IT systems and the constant evolution of technology, technical challenges and issues are bound to arise. That's where our IT Support Services come into play.</p>
            </div>
            <div className="send">
                <li> <span className='font-extrabold'>Expertise:</span> Our team of certified IT professionals possesses extensive knowledge and experience in handling a wide array of IT issues. We stay up-to-date with the latest industry trends to provide you with cutting-edge solutions.</li>
                <li> <span className='font-extrabold'>Timely Responses:</span>  We understand the importance of resolving IT issues promptly. Our responsive customer support ensures that you receive assistance when you need it most.</li>
                <li> <span className='font-extrabold'> Customized Solutions:</span>  We tailor our IT support services to meet your specific needs. Whether you require ongoing IT maintenance or one-time troubleshooting, our services are flexible to accommodate your requirements.        .</li>
                <li> <span className='font-extrabold'>Cost-Effective:</span> We offer competitive pricing without compromising on the quality of service. Our goal is to provide cost-effective solutions that deliver tangible results. .</li>
                <li> <span className='font-extrabold'>Client-Centric Approach:</span> Customer satisfaction is at the heart of our IT support services. We prioritize your needs, offering clear communication and a commitment to resolving your technical issues efficiently.</li>
            </div>
        </div>
    );
};

export default ServiceDetails;