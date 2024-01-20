import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DashboardNav from './DashboardNav';

const Main = () => {
    return (
        <div className=" flex bg-[#F4F7FE]">
            <div className=''>
                {/* ----------------admin Dashboard sidebar here----------------- */}
                <Sidebar />
            </div>
            <div className='bg-[#F4F7FE] w-full min-h-[100vh]'>
                {/* Admin dashboard outlet create */}
                <DashboardNav name={"Liam Ketla"} user="Admin" role={"admin"} />
                <div className='xl:px-[30px] px-4 '>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;