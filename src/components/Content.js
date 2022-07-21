import React from 'react';

//texts
import Source from './Source'

//img
import profile from '../assets/images/profilepic.jpg'

//icon
// import Down from '../assets/images/Down'

const Content = () => {
    return (
        <div className=''>
            <div className='relative w-fit'>
                <img src={profile} alt='prof-pic' className='w-12 sm:w-16 md:w-20 rounded-full'/>
                <span className="absolute top-0 right-0 flex h-3 w-3 sm:w-4 sm:h-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 sm:w-4 sm:h-4 bg-teal-500"></span>
                </span>
            </div>
                <br/>
            <h2 className='text-2xl font-bold text-neutral-700'>بوف نامه</h2>
                <br/>
            <span className='font-bold text-neutral-700'>یک قدیم وبلاگ نویسِ حالا بلاگر ! </span>
                <br/>
                <br/>
            <span className='font-bold text-neutral-700'>آموزش بلاگری و تولید محتوا ، با رسم مثال <span className='font-extrabold text-lg'>(:</span></span>
                <br/>
                <br/>
            <ul>
                  <Source />  
            </ul>
        </div>
    );
};

export default Content;