import React, { useEffect } from 'react'
import ErrorToast from './Toast/ErrorToast';
import SuccessToast from './Toast/SuccessToast';
import toast from 'react-hot-toast';
import { useOtpSendMutation } from '../../redux/features/auth/authApi';

const ResentOtp2 = ({data}) => {
    const [otpSend, { isLoading, isSuccess, error, data:otpData }] =useOtpSendMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Send otp your phone";
      toast.custom(<SuccessToast message={message} />);
    }
    if (error) {
      toast.custom(
        <ErrorToast message={error?.data.error || error?.data.message} />
      );
    }
  }, [isSuccess, error,otpData]);

  const onSubmit = async () => {
      await otpSend(data);
      console.log(data);
  };

  console.log("====otpData====", otpData);
  return (
    <div>
        <button type='button' disabled={isLoading} onClick={()=>onSubmit()} className=' text-red-500'>re sent otp</button>
    </div>
  )
}

export default ResentOtp2