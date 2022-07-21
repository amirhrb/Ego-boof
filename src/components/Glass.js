import React from 'react';
import Content from './Content';

const Glass = () => {
    return (
        <div className='relative z-50 w-full p-5 min-h-[80vh] backdrop-blur-sm bg-[#ffffff3f] shadow-[0 4px 30px rgba(233, 233, 233, 0.1)] rounded-2xl '>
            <Content />
        </div>
    );
};

export default Glass;