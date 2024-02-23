import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DashboardNav from './DashboardNav';
import { useSelector } from 'react-redux';

const Main = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user){
            navigate("/")
        }
    },[user])

    return (
        <div className=" flex bg-[#F4F7FE]">
            <div className=' bg-white'>
                {/* ----------------admin Dashboard sidebar here----------------- */}
                <Sidebar />
            </div>
            <div className='bg-[#F4F7FE] xl:px-[30px] px-4 w-full min-h-[100vh]'>
                {/* Admin dashboard outlet create */}
                <DashboardNav />
                <div className=''>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;