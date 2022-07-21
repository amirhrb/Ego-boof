import React from 'react';
import Glass from './Glass'

//imgs
import shapes from '../assets/images/perspective_matte-min.png'
import insta from '../assets/images/Instagram_perspective_matte.png'

const GlassBox = () => {
    return (
        <div className='w-4/5 min-h-fit relative mt-[50px] rounded-2xl shadow-[-4px -4px 10px white inset]'>
            <Glass />
        <div className='absolute w-28 h-28 top-10 -left-1 sm:-left-3 md:-left-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full'></div>
        
        <img src={shapes} alt="shapes" className='absolute w-48 -bottom-20 -right-8'/>
        <img src={insta} alt="insta" className='absolute w-24 top-3/4 left-5'/>
        </div>
    );
};

export default GlassBox;