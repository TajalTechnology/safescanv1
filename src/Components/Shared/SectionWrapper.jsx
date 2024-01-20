import React from 'react';

const SectionWrapper = ({children}) => {
    return (
        <div className={`rounded-[20px] bg-white`}>
            {children}
        </div>
    );
};

export default SectionWrapper;