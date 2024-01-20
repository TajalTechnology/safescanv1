import React, { useRef, useState } from 'react';
import CustomInput from '../../Components/Shared/input/CustomInput';
import PasswordInput from '../../Components/Shared/input/PasswordInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../Components/Shared/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Password from 'antd/es/input/Password';

const SignUp = () => {
    const navigate = useNavigate();
    const [showpass, setShowpass] = useState(false)
    const [showrepass, setShowrepass] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm();

    const onSubmit = () => {
        navigate('/admin/dashboard')
    }
    return (
        <div className='flex  '>
            {/* ---------------input fields---------------- */}
            <div className=' bg-white lg:w-5/12 w-full flex  items-center justify-center'>
                <div className='w-full px-[50px] my-16'>
                    <div className='mb-[50px]'>
                        <h1 className='text-dark-gray text-[28px] font-bold'>Sign Up</h1>
                        <p className='text-normal text-base text-info'>Please Fill Those Information Bellow To Create an Account.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-2'>
                            <CustomInput
                                label={"Username"}
                                type={'text'}
                                register={'username'}
                                error={'User name is required'}
                                placeholder={'Enter Username'}
                            />
                        </div>
                        <div className='mb-2'>
                            <CustomInput
                                label={"Email Address"}
                                type={'email'}
                                register={'email'}
                                error={'Email is required'}
                                placeholder={'Enter Email Address'}
                            />
                        </div>
                        <div className='mb-2'>
                            <CustomInput
                                label={"Phone Number"}
                                type={'text'}
                                register={'phone'}
                                error={'Phone Number is required'}
                                placeholder={'Enter Phone Number'}
                            />
                        </div>
                        <div className='mb-2'>
                            <CustomInput
                                label={"Site Address"}
                                type={'text'}
                                register={'siteAddress'}
                                error={'Site Address is required'}
                                placeholder={'Enter Site Address'}
                            />
                        </div>
                        <div className='lg:flex items-center gap-4'>
                            <div className='mb-2 w-full'>
                                <CustomInput
                                    label={"Site Name"}
                                    type={'text'}
                                    register={'siteName'}
                                    error={'Site Name is required'}
                                    placeholder={'Enter Site Name'}
                                />
                            </div>
                            <div className='mb-2 w-full'>
                                <CustomInput
                                    label={"Employers Name"}
                                    type={'text'}
                                    register={'employersName'}
                                    error={'Employers Name is required'}
                                    placeholder={'Enter Employers Name'}
                                />
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className="flex flex-col items-start w-full mt-5 relative">
                                <label htmlFor="otp" className="mb-1.5 font-medium text-base text-dark-gray">
                                    {"Create Password"}
                                </label>
                                <input
                                    className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                                    type={showpass ? "text" : "password"}
                                    {...register("password", {
                                        required: true
                                    })}
                                    placeholder={"Enter Password"}
                                />
                                <div className=' absolute top-[58%] right-[10px]'>
                                    <button type='button' onClick={() => setShowpass(pre => !pre)}>
                                        {
                                            showpass ? <Icon icon="ic:outline-visibility" className='text-[20px] text-black' /> : <Icon icon="mdi:visibility-off-outline" className='text-[20px] text-black' />
                                        }
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='mb-2'>
                            <div className="flex flex-col items-start w-full mt-5 relative">
                                <label htmlFor="otp" className="mb-1.5 font-medium text-base text-dark-gray">
                                    {"Re-enter Password"}
                                </label>
                                <input
                                    className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                                    type={showrepass ? "text" : "password"}
                                    placeholder={"Enter Password"}
                                    {...register("confirm_password", {
                                        required: true,
                                        validate: (val) => {
                                            if (watch('password') !== val) {
                                                return "Your passwords do no match";
                                            }
                                        },
                                    })}

                                />
                                <div className=' absolute top-[58%] right-[10px]'>
                                    <button type='button' onClick={() => setShowrepass(pre => !pre)}>
                                        {
                                            showrepass ? <Icon icon="ic:outline-visibility" className='text-[20px] text-black' /> : <Icon icon="mdi:visibility-off-outline" className='text-[20px] text-black' />
                                        }
                                    </button>
                                </div>
                            </div>

                        </div>
                        {errors?.confirm_password?.message && <p className='text-error mt-1'>Your passwords does not match!</p>}
                        <div className='mt-6 w-full'>
                            <CustomButton className={'w-full'}>
                                <p>Sign Up</p>
                            </CustomButton>
                        </div>
                    </form>
                    <p className='text-center text-info text-sm font-medium mt-4'>Already Have An Account? <Link to={'/signIn'} className='font-bold underline text-primary'>Sign In</Link></p>
                </div>
            </div>

            {/* -----------image section---------------------- */}
            <div className='lg:flex lg:flex-col hidden w-7/12 h-screen'>
                {/* <div className='flex-1'>
                    <img src="/Images/loginDown.svg" alt="background" className='h-full w-full object-cover' />
                </div>

                <div className='flex-1 flex items-center justify-center'>
                    <p>hello logo</p>
                </div>

                <div className='flex-1'>
                    <img src="/Images/loginUp.svg" alt="background" className='h-full w-full object-cover' />
                </div> */}
            </div>

        </div>
    );
};

export default SignUp;