import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


//SVG's in js files
import Angle from '../assets/images/Angle'
import Instagram from '../assets/images/Instagram'
import Telegram from '../assets/images/Telegram'
import WhatsApp from '../assets/images/WhatsApp'


const Socials = () => {
    return (
        <>
            <p  
            className="mt-40 mb-10 text-2xl font-extralight"
            data-aos="fade-up"
            data-aos-once="true"
            >راه های ارتباطی</p>
            <Angle />
            <div
             data-aos="fade-up"
             data-aos-once="true"
             className='flex flex-col items-center mt-10 mb-28 pb-5'>
                <div 
                className='flex flex-row pb-2 mb-1 border-stone-400 border-b-2'
                >
                    <a href='https://www.instagram.com/boof_blogger/?utm_medium=copy_link'><Instagram /></a>
                    <a href='#'><Telegram /></a>
                    <a href='#'><WhatsApp /></a>
                </div>
                    <h4 dir='ltr'><a href='https://www.instagram.com/boof_blogger/?utm_medium=copy_link'>@Ego-blogger</a></h4>
            </div>
        </>
    );
};

AOS.init();

export default Socials;