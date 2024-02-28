import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useApproveUserMutation, useGetProfileQuery } from '../../../redux/features/admin/adminApi';
import SuccessToast from '../../Shared/Toast/SuccessToast';
import ErrorToast from '../../Shared/Toast/ErrorToast';
import toast from 'react-hot-toast';
import { Icon } from '@iconify/react';
import axios from 'axios';

const Profile = () => {
    const { user, token } = useSelector((state) => state.auth)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { data, isLoading, refetch } = useGetProfileQuery(`${user?.userid}?username=${user?.username}`);
    const [approveUser, { isLoading: updateLoading, isSuccess: updateSuccess, error: updateError }] = useApproveUserMutation();

    useEffect(() => {
        if (updateSuccess) {
            const message = "Profile Updated";
            toast.custom(<SuccessToast message={message} />);
            refetch();
        }
        if (updateError) {
            const errorMsg = updateError?.data.error || updateError?.data.message
            toast.custom(<ErrorToast message={errorMsg} />);
        }
    }, [updateSuccess, updateError]);


    useEffect(() => {
        if (success) {
            toast.custom(<SuccessToast message={success} />);

        }
        if (error) {
            const errorMsg = error?.data.error || error?.data.message
            toast.custom(<ErrorToast message={errorMsg} />);
        }
    }, [success, error]);


    console.log(token)
    const uploadeProfile = async (e) => {

        const getImage = e.target.files[0]
        const image = getImage

        if (data?.profile_image && getImage) {
            const body = {
                username: data?.username,
                profile_image: image
            }
            const id = user?.userid;
            // console.log(image)
            await approveUser({ id, body });
        }


        try {
            const formData = new FormData();
            formData.append('files', image);
            formData.append('image_type', 'profile');

            const response = await axios.post(`https://z6qrd4mv7g.execute-api.us-east-1.amazonaws.com/api/v1/users/image-upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            })
            refetch();
            setSuccess("Profile Updated")
            console.log(response.data)
        } catch (error) {
            console.log('error', error)
            setError(error)
            return error
        }

    }

    return (
        <div className='-mt-10 relative'>
            {
                data?.profile_image ? <img src={`https://scansafes3.s3.amazonaws.com/${data?.profile_image}`} alt="profile" className='w-[100px] h-[100px] rounded-full ' /> : <img src="/images/profile.svg" alt="profile" className=' w-[100px] h-[100px] rounded-full object-cover' />
            }

            <div className='bg-white rounded-full absolute bottom-3 right-1 '>
                <div className='bg-primary/10 hover:bg-primary hover:text-white duration-300 rounded-full border p-1.5 flex items-center justify-center text-primary'>
                    <label for="file-input" class="file-label">
                        <Icon className='w-[12px] h-[12px] cursor-pointer' icon="akar-icons:image" />
                    </label>
                    <input
                        type="file"
                        id="file-input"
                        className='hidden'
                        onChange={uploadeProfile}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;