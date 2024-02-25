import React, { useState } from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import CustomButton from '../../Components/Shared/CustomButton';
import { Icon } from '@iconify/react';
import CustomModal from '../../Components/Shared/modal/CustomModal';
import EditProfile from '../../Components/Pages/ProfileSettings/EditProfile';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import { useSelector } from 'react-redux';
import { useGetProfileQuery } from '../../redux/features/admin/adminApi';
import Loader from '../../Components/Shared/Loader';

const ProfileSettings = () => {
    const [show, setShow] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const { user } = useSelector((state) => state.auth)
    const { data, isLoading, refetch } = useGetProfileQuery(`${user?.userid}?username=${user?.username}`);
   
    return (

        <>
            <BreadCrumb
                title={"Profile Settings"}
                links={[
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Profile Settings", url: "/admin/profile-settings" },
                ]}
            />
            
            {
                isLoading ? <><Loader/></> : <>
                    <div className='grid grid-cols-1 text-info/70 mb-10'>
                        <SectionWrapper>
                            {/* -------cover image---------- */}
                            <div className=' border-b'>
                                <img src="/images/coverPhoto.svg" alt="cover" className=' object-cover w-[100%] h-[196px]' />
                            </div>
                            <div className='flex flex-wrap gap-4 items-center justify-between mt-[14px] mx-5 md:mx-0  md:pl-[46px] md:pr-[25px] '>
                                <div className='md:flex items-center gap-5'>
                                    <img src="/images/profile.svg" alt="profile" className='-mt-10 ' />
                                    <div>
                                        <h1 className='font-bold text-2xl text-dark-gray'>{data?.username}</h1>
                                        <p className='text-lg font-medium -mt-1'>{data?.email}</p>
                                    </div>
                                </div>
                                <div>
                                    <CustomButton onClick={() => setOpenModal(true)}>
                                        <span className='flex items-center text-white gap-2'>
                                            <Icon className='text-lg text-white rotate-180' icon="tabler:edit-circle" />
                                            <span>Edit Information</span>
                                        </span>
                                    </CustomButton>
                                </div>
                            </div>
                            {/* ------------information---------------- */}
                            <div className='mt-5 mb-14 px-[25px]'>
                                <div className='border-b py-5 border-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5'>
                                    <div>
                                        <p className='text-xs font-medium'>User Name</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.username}</h1>
                                    </div>

                                    {/* <div>
                                        <p className='text-xs font-medium'>Password</p>
                                        <div className='flex items-center justify-between gap-2'>
                                            {
                                                show ? <h1 className='text-lg font-medium text-[#485585]'>{data?.password}</h1> : <h1 className='text-lg font-medium text-[#485585]'>********</h1>
                                            }
                                            <button type='button' className='mr-5' onClick={() => setShow(pre => !pre)}>
                                                {
                                                    show ? <Icon icon="ic:outline-visibility" className='text-base text-info ' /> : <Icon icon="mdi:visibility-off-outline" className='text-base  text-info' />
                                                }
                                            </button>
                                        </div>

                                    </div> */}

                                    <div>
                                        <p className='text-xs font-medium'>Phone Number </p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.phone}</h1>
                                    </div>

                                </div>
                                <div className='border-b py-5 border-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5'>
                                    <div>
                                        <p className='text-xs font-medium'>Site Name</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.site_name}</h1>
                                    </div>
                                    <div>
                                        <p className='text-xs font-medium'>Site Address</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.site_address}</h1>
                                    </div>
                                    <div>
                                        <p className='text-xs font-medium'>Employers Name</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.emloyeer_name}</h1>
                                    </div>

                                </div>
                                <div className='border-b py-5 border-gray-100 grid grid-cols-1 '>
                                    <div>
                                        <p className='text-xs font-medium'>T&Cs For Testing </p>
                                        <h1 className='text-lg font-medium text-[#485585]'>Our T&Cs Prag..</h1>
                                    </div>
                                </div>
                                <div className='border-b py-5 border-gray-100 grid md:grid-cols-2 grid-cols-1 gap-2.5'>
                                    <div>
                                        <p className='text-xs font-medium'>1 Major For</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.minor} Minor</h1>
                                    </div>
                                    <div>
                                        <p className='text-xs font-medium'>1 Dismissal  For</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>{data?.major} Major </h1>
                                    </div>
                                </div>
                                <div className='border-b py-5 border-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5'>
                                    <div>
                                        <p className='text-xs font-medium'>Fines Per Minor</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>$ {data?.fines_per_mainor}</h1>
                                    </div>
                                    <div>
                                        <p className='text-xs font-medium'>Fines Per Major</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>$ {data?.fines_per_major}</h1>
                                    </div>
                                    <div>
                                        <p className='text-xs font-medium'>Fines Per Dismissal</p>
                                        <h1 className='text-lg font-medium text-[#485585]'>$ {data?.fines_per_dismissal}</h1>
                                    </div>

                                </div>

                            </div>
                        </SectionWrapper>



                    </div>

                    <EditProfile item={data} refetch={refetch} modalOPen={openModal} setOpenModal={setOpenModal} />
                </>
            }
        </>

    );
};

export default ProfileSettings;