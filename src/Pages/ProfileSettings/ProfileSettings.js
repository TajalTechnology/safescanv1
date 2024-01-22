import React, { useState } from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import CustomButton from '../../Components/Shared/CustomButton';
import { Icon } from '@iconify/react';
import CustomModal from '../../Components/Shared/modal/CustomModal';
import EditProfile from '../../Components/Pages/ProfileSettings/EditProfile';
import BreadCrumb from '../../Components/Shared/BreadCrumb';

const ProfileSettings = () => {
    const [show, setShow] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    return (

        <>
            <BreadCrumb
                title={"Profile Settings"}
                links={[
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Profile Settings", url: "/admin/profile-settings" },
                ]}
            />
            <div className='grid grid-cols-1 text-info/70 mb-10'>
                <SectionWrapper>
                    {/* -------cover image---------- */}
                    <div className=' border-b'>
                        <img src="/images/coverPhoto.svg" alt="cover" className=' object-cover h-[196px]' />
                    </div>
                    <div className='flex flex-wrap gap-4 items-center justify-between mt-[14px] mx-5 md:mx-0  md:pl-[46px] md:pr-[25px] '>
                        <div className='md:flex items-center gap-5'>
                            <img src="/images/profile.svg" alt="profile" className='-mt-10 ' />
                            <div>
                                <h1 className='font-bold text-2xl text-dark-gray'>Ryan Mahon </h1>
                                <p className='text-lg font-medium -mt-1'>ryan@cairnhomes.com</p>
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
                                <h1 className='text-lg font-medium text-[#485585]'>Ryanmohon123</h1>
                            </div>

                            <div>
                                <p className='text-xs font-medium'>Password</p>
                                <div className='flex items-center justify-between gap-2'>
                                    {
                                        show ? <h1 className='text-lg font-medium text-[#485585]'>12345678</h1> : <h1 className='text-lg font-medium text-[#485585]'>********</h1>
                                    }
                                    <button type='button' className='mr-5' onClick={() => setShow(pre => !pre)}>
                                        {
                                            show ? <Icon icon="ic:outline-visibility" className='text-base text-info ' /> : <Icon icon="mdi:visibility-off-outline" className='text-base  text-info' />
                                        }
                                    </button>
                                </div>

                            </div>

                            <div>
                                <p className='text-xs font-medium'>Phone Number </p>
                                <h1 className='text-lg font-medium text-[#485585]'>8266746578</h1>
                            </div>

                        </div>
                        <div className='border-b py-5 border-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5'>
                            <div>
                                <p className='text-xs font-medium'>Site Name</p>
                                <h1 className='text-lg font-medium text-[#485585]'>Any Site Name</h1>
                            </div>
                            <div>
                                <p className='text-xs font-medium'>Site Address</p>
                                <h1 className='text-lg font-medium text-[#485585]'>7 castle troy road Limerick Co Limerich </h1>
                            </div>
                            <div>
                                <p className='text-xs font-medium'>Employers Name</p>
                                <h1 className='text-lg font-medium text-[#485585]'>CBL Onstruction LTD</h1>
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
                                <h1 className='text-lg font-medium text-[#485585]'>05 Minor</h1>
                            </div>
                            <div>
                                <p className='text-xs font-medium'>1 Dismissal  For</p>
                                <h1 className='text-lg font-medium text-[#485585]'>02 Major </h1>
                            </div>
                        </div>
                        <div className='border-b py-5 border-gray-100 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2.5'>
                            <div>
                                <p className='text-xs font-medium'>Fines Per Minor</p>
                                <h1 className='text-lg font-medium text-[#485585]'>$10</h1>
                            </div>
                            <div>
                                <p className='text-xs font-medium'>Fines Per Major</p>
                                <h1 className='text-lg font-medium text-[#485585]'>$50</h1>
                            </div>
                            <div>
                                <p className='text-xs font-medium'>Fines Per Dismissal</p>
                                <h1 className='text-lg font-medium text-[#485585]'>$100</h1>
                            </div>

                        </div>

                    </div>
                </SectionWrapper>
                <CustomModal
                    width={'600px'}
                    modalOPen={openModal}
                    setModalOpen={setOpenModal}
                    title={'Edit Information'}
                    buttonText={'Save Changes'}
                >
                    <EditProfile setOpenModal={setOpenModal} />
                </CustomModal>
            </div>

        </>

    );
};

export default ProfileSettings;