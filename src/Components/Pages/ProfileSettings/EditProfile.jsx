import React, { useState } from 'react';
import EditInput from '../../Shared/input/EditInput';
import { Icon } from '@iconify/react';
import CustomModal from '../../Shared/modal/CustomModal';
import ForgotPassModal from './ForgotPassModal';

const EditProfile = ({setOpenModal}) => {
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className='md:flex items-center gap-5'>
                <div className='w-full'>
                    <EditInput
                        label={'First Name'}
                        type={'text'}
                        register={'fistName'}
                        defaultValue={'Rayan'}
                    />
                </div>
                <div className='w-full'>
                    <EditInput
                        label={'Last Name'}
                        type={'text'}
                        register={'lastName'}
                        defaultValue={'Mahon'}
                    />
                </div>
            </div>
            <div>
                <EditInput
                    label={'Username'}
                    type={'text'}
                    register={'userName'}
                    defaultValue={'Ryanmohon123'}
                />
            </div>
            <div className='relative'>
               <button onClick={()=>{setOpen(true);setOpenModal(false)}} className='absolute right-0 text-primary font-medium text-lg'>Forgot Password?</button>
                <EditInput
                    label={'Password'}
                    type={show ? "text" : "password"}
                    register={'pass'}
                    defaultValue={'12345678'}
                />
                <button className='absolute right-3 bottom-3' type='button' onClick={() => setShow(pre => !pre)}>
                    {
                        show ? <Icon icon="ic:outline-visibility" className='text-[20px] text-info' /> : <Icon icon="mdi:visibility-off-outline" className='text-[20px] text-info' />
                    }
                </button>
            </div>
            <div>
                <EditInput
                    label={'Mobile Number'}
                    type={'text'}
                    register={'phone'}
                    defaultValue={'8266746578'}
                />
            </div>
            <div>
                <EditInput
                    label={'Email Address'}
                    type={'text'}
                    register={'email'}
                    defaultValue={'ryan@cairnhomes.com'}
                />
            </div>
            <div>
                <EditInput
                    label={'Site Name'}
                    type={'text'}
                    register={'siteName'}
                    defaultValue={'Any Site Name'}
                />
            </div>
            <div>
                <EditInput
                    label={'Site Address'}
                    type={'text'}
                    register={'siteAddress'}
                    defaultValue={'7 castle troy road Limerick Co Limerich '}
                />
            </div>
            <div>
                <EditInput
                    label={'Employers Name'}
                    type={'text'}
                    register={'employee'}
                    defaultValue={'CBL Onstruction LTD'}
                />
            </div>
            <div className="flex flex-col items-start w-full mt-4">
                <label
                    htmlFor="otp"
                    className='mb-1.5 font-medium text-lg text-dark-gray'
                >
                    {'T&Cs For Testing '}
                </label>
                <textarea
                    defaultValue={'Our T&Cs Prag..'}
                    className="py-[15px] h-[64px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                    type={'text'}
                    id="otp"
                    {...'t&cs'}
                />

            </div>

            <div className='md:flex items-center gap-5'>
                <div className='w-full relative'>
                    <EditInput
                        label={'1 Major For'}
                        type={'number'}
                        register={'major'}
                        defaultValue={'05'}
                    />
                    <p className='absolute right-3 bottom-[14px] text-sm font-medium text-info'>Minor</p>
                </div>
                <div className='w-full relative'>
                    <EditInput
                        label={'1 Dismissal For'}
                        type={'number'}
                        register={'dismissal'}
                        defaultValue={'02'}
                    />
                    <p className='absolute right-3 bottom-[14px] text-sm font-medium text-info'>Major</p>
                </div>
            </div>
            <div className='md:flex items-center gap-5'>
                <div className=' relative'>
                    <EditInput
                        label={'Fines Per Minor'}
                        type={'number'}
                        register={'perMinor'}
                        defaultValue={'10'}
                    />
                    <p className='absolute right-3 bottom-[14px] text-sm font-medium text-dark-gray'>$</p>
                </div>
                <div className=' relative'>
                    <EditInput
                        label={'Fines Per Major'}
                        type={'number'}
                        register={'perMajor'}
                        defaultValue={'50'}
                    />
                    <p className='absolute right-3 bottom-[14px] text-sm font-medium text-dark-gray'>$</p>
                </div>
                <div className=' relative'>
                    <EditInput
                        label={'Fines Per Dismissal'}
                        type={'number'}
                        register={'perDismissal'}
                        defaultValue={'100'}
                    />
                    <p className='absolute right-3 bottom-[14px] text-sm font-medium text-dark-gray'>$</p>
                </div>
            </div>
            <CustomModal
                width={'600px'}
                modalOPen={open}
                setModalOpen={setOpen}
                title={'Forgot Password'}
                buttonText={'Reset Password'}
            >
                <ForgotPassModal setOpenModal={setOpenModal} />
            </CustomModal>
        </div>
    );
};

export default EditProfile;