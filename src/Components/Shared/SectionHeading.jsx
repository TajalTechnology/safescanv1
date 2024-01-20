import React from 'react';

const SectionHeading = ({children}) => {
    return (
        <div>
            <p className='text-2xl font-bold text-dark-gray'>{children}</p>
        </div>
    );
};

export default SectionHeading;