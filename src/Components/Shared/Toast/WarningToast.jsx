import { Icon } from '@iconify/react';
import React from 'react';

const WarningToast = ({message}) => {
    return (
        <>
             <div className="bg-dark-gray rounded-[16px] md:w-[570px] p-4">
                <div className="flex items-center gap-2 justify-between">
                    <div className='flex items-center gap-2'>
                        <Icon className='text-Warning text-2xl -rotate-2' icon="ic:baseline-warning"  />
                        <h1 className="text-2xl font-bold text-white">Warning Toast</h1>
                    </div>
                    <div className='bg-white/30 flex items-center justify-center w-6 h-6 rounded-full'>
                        <Icon className='text-white text-lg' icon="gridicons:cross" />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-6'></div>
                    <p className='text-white mt-1.5'>{message}</p>
                </div>

            </div>
        </>
    );
};

export default WarningToast;