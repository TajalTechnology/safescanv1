import React from 'react';
import SectionWrapper from '../../Shared/SectionWrapper';
import { Icon } from '@iconify/react';

const TopSection = () => {
    return (
        <>
            <div className='flex items-center gap-5 flex-wrap justify-between'>
                <div className='w-1/2'>
                    <SectionWrapper>
                        <div className='p-5 flex items-center justify-between w-full '>
                            <div className='flex items-center gap-4'>
                                <div className='bg-primary/10 p-2.5 flex items-center justify-center rounded-[10px] h-[44px] w-[44px]'>
                                    <Icon className='w-[24] text-primary' icon="mingcute:user-3-line" />
                                </div>
                                <div className='h-10 -mt-2'>
                                    <p className='text-xs font-medium text-info/50'>Users</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >245</h1>
                                </div>
                            </div>

                            <div className='flex items-center h-10  '>
                                <div>
                                    <p className='text-xs font-medium text-info/50'>Workers</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >45</h1>
                                </div>
                                <div>
                                    <p className='text-xs font-medium text-info/50'>Admins</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >200</h1>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
                <div className='w-1/2'>
                    <SectionWrapper>
                        <div className='p-5 flex items-center justify-between w-full '>
                            <div className='flex items-center gap-4'>
                                <div className='bg-primary/10 p-2.5 flex items-center justify-center rounded-[10px] h-[44px] w-[44px]'>
                                    <Icon className='w-[24] text-primary' icon="mingcute:user-3-line" />
                                </div>
                                <div className='h-10 -mt-2'>
                                    <p className='text-xs font-medium text-info/50'>Users</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >245</h1>
                                </div>
                            </div>

                            <div className='flex items-center h-10  '>
                                <div>
                                    <p className='text-xs font-medium text-info/50'>Workers</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >45</h1>
                                </div>
                                <div>
                                    <p className='text-xs font-medium text-info/50'>Admins</p>
                                    <h1 className='text-2xl font-bold text-dark-gray' >200</h1>
                                </div>
                            </div>
                        </div>
                    </SectionWrapper>
                </div>
            </div>

        </>
    );
};

export default TopSection;