import React from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import { Icon } from '@iconify/react';
import CustomButton from '../../Components/Shared/CustomButton';
import BreadCrumb from '../../Components/Shared/BreadCrumb';

const Subscriptions = () => {
    return (

        <>
            <BreadCrumb
                title={"Subscription"}
                links={[
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Subscription", url: "/admin/subscription" },
                ]}
            />
            <div className='w-full grid lg2:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                <SectionWrapper>
                    <div className='bg-primary p-[25px] flex flex-col justify-between text-white rounded-[20px]'>
                        <div>
                            <div className='flex items-center justify-between mb-2.5'>
                                <div className='bg-black/20 h-[44px] w-[44px] rounded-[10px] flex items-center justify-center'>
                                    <Icon className='text-2xl' icon="humbleicons:box" />
                                </div>
                                <div className='bg-black/20 text-xs font-medium py-1.5 px-3 rounded-full'><p>Current Plan</p></div>
                            </div>
                            <div>
                                <h1 className='text-[20px] font-bold'>Basic Plan</h1>
                                <div className='flex items-center'>
                                    <h1 className='text-[20px] font-bold'>€100</h1><span className='font-medium text-xs text-white/60 mt-1'>/Per Month</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <span className='flex items-center gap-2.5 text-sm text-white/60 mb-1'><span className='bg-white w-1 h-1 rounded-full'></span><span>100 Profiles</span></span>
                                <span className='flex items-center gap-2.5 text-sm text-white/60 mb-1'><span className='bg-white w-1 h-1 rounded-full'></span><span>500 Products</span></span>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 text-white/80 mt-20'>
                            <img src="/images/calender.svg" alt="" />
                            <p className='text-base font-bold '>Expire Date: 23/05/2023</p>
                        </div>
                    </div>
                </SectionWrapper>
                {/* --------premium plan */}
                <SectionWrapper>

                    <div className=' w-full p-[25px]'>
                        <div>
                            <div className='flex items-center gap-2.5 mb-2.5'>
                                <div className='bg-primary text-white h-[44px] w-[44px] rounded-[10px] flex items-center justify-center'>
                                    <Icon className='text-2xl' icon="lucide:codesandbox" />
                                </div>
                                <p className='font-bold text-dark-gray text-[20px]'>Premium</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='text-[28px] font-bold text-dark-gray'>€159</h1><span className='font-medium text-xs text-info/80 mt-1'>/Per Month</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <span className='flex items-center gap-2.5 text-sm text-info/80 mb-1'><span className='bg-dark-gray w-1 h-1 rounded-full'></span><span>250 Profiles</span></span>
                                <span className='flex items-center gap-2.5 text-sm text-info/80 mb-1'><span className='bg-dark-gray w-1 h-1 rounded-full'></span><span>1000 Products</span></span>
                            </div>
                        </div>
                        <div className='text-white/80 mt-20 w-full'>
                            <CustomButton className={'w-full'}><p>Upgrade Now</p></CustomButton>
                        </div>
                    </div>
                </SectionWrapper>
                {/* --------platinum plan */}
                <SectionWrapper>

                    <div className='w-full p-[25px]'>
                        <div>
                            <div className='flex items-center gap-2.5 mb-2.5'>
                                <div className='bg-primary text-white h-[44px] w-[44px] rounded-[10px] flex items-center justify-center'>
                                    <Icon className='text-2xl' icon="lucide:gem" />
                                </div>
                                <p className='font-bold text-dark-gray text-[20px]'>Platinum</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <h1 className='text-[28px] font-bold text-dark-gray'>€159</h1><span className='font-medium text-xs text-info/80 mt-1'>/Per Month</span>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <span className='flex items-center gap-2.5 text-sm text-info/80 mb-1'><span className='bg-dark-gray w-1 h-1 rounded-full'></span><span>Unlimited Profiles</span></span>
                                <span className='flex items-center gap-2.5 text-sm text-info/80 mb-1'><span className='bg-dark-gray w-1 h-1 rounded-full'></span><span>Unlimited Products</span></span>
                            </div>
                        </div>
                        <div className='text-white/80 mt-20 w-full'>
                            <CustomButton className={'w-full'}><p>Upgrade Now</p></CustomButton>
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </>

    );
};

export default Subscriptions;