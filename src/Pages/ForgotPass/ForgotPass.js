import React, { useRef, useState } from 'react';
import CustomInput from '../../Components/Shared/input/CustomInput';
import PasswordInput from '../../Components/Shared/input/PasswordInput';
import { useForm } from 'react-hook-form';
import CustomButton from '../../Components/Shared/CustomButton';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Password from 'antd/es/input/Password';

const ForgotPass = () => {
    const [showpass, setShowpass] = useState(false)
    const [showrepass, setShowrepass] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = () => {
    }
    return (
        <div className='flex  '>
            {/* ---------------input fields---------------- */}
            <div className=' bg-white lg:w-5/12  h-[100vh] w-full flex  items-center justify-center'>
                <div className='w-full px-[50px] my-16'>
                    <div className='mb-[50px]'>
                        <h1 className='text-dark-gray text-[28px] font-bold'>Forgot Password?</h1>
                        <p className='text-normal text-base text-info'>Please Enter Your Account Email Address To Get Password Reset Link.</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='mb-2'>
                            <CustomInput
                                label={"Email Address"}
                                type={'email'}
                                register={'email'}
                                error={'Email is required'}
                                placeholder={'Enter Email Address'}
                            />
                        </div>



                        <div className='mt-6 w-full'>
                            <CustomButton className={'w-full'}>
                                <p>Reset Password</p>
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>

            {/* -----------image section---------------------- */}
            <div className='lg:flex lg:flex-col hidden w-7/12 h-screen'>

            </div>

        </div>
    );
};

export default ForgotPass;