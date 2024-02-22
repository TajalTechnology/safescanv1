import React, { useRef, useState } from 'react';
import CustomInput from '../../Components/Shared/input/CustomInput';
import PasswordInput from '../../Components/Shared/input/PasswordInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../Components/Shared/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import Password from 'antd/es/input/Password';
import CreateNewPass from '../../Components/Shared/CreateNewPass';

const ForgotPass = () => {
    const [test, setTest] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
        setTest(true)
    }
    return (
        <>
            {
                !test ? <>
                    {/* -----------------forgot pass----------------- */}
                    <div className='flex  '>
                        {/* ---------------input fields---------------- */}
                        <div className=' bg-white lg:w-5/12  h-[100vh] w-full flex  items-center justify-center'>
                            <div className='w-full px-[50px] my-16'>
                                <div className='mb-[50px]'>
                                    <h1 className='text-dark-gray text-[28px] font-bold'>Forgot Password?</h1>
                                    <p className='text-normal text-base text-info'>Please Enter OTP That Sent To 017******24</p>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className='text-lg font-medium text-dark-gray mb-4'>Enter OTP</h1>
                                    <div className='mb-2 flex items-center mx-auto w-[280px] gap-9 '>
                                        <CustomInput
                                            label={""}
                                            type={"text"}
                                            register={'email'}
                                            error={'Email is required'}

                                        />
                                        <CustomInput
                                            label={""}
                                            type={"text"}
                                            register={'email'}
                                            error={'Email is required'}

                                        />
                                        <CustomInput
                                            label={""}
                                            type={"text"}
                                            register={'email'}
                                            error={'Email is required'}

                                        />
                                        <CustomInput
                                            label={""}
                                            type={"text"}
                                            register={'email'}
                                            error={'Email is required'}

                                        />
                                    </div>
                                    <div className='mt-6 w-full'>
                                        <CustomButton className={'w-full'}>
                                            <p>Verify OTP</p>
                                        </CustomButton>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* -----------image section---------------------- */}
                        <div className='lg:flex lg:flex-col hidden w-7/12 h-screen'>
                            <div className='w-full h-full relative'>
                                <img src="/Images/loginup.svg" alt="" className=' absolute bottom-0 right-0 ' />
                                <img src="/Images/mainLogo.svg" alt="" className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />
                                <img src="/Images/loginDown.svg" alt="" className=' absolute top-0 right-0 ' />
                            </div>
                        </div>

                    </div>
                </> : <>

                    <CreateNewPass />
                </>
            }

            {/* ------------create new pass------------------ */}


        </>
    );
};

export default ForgotPass;