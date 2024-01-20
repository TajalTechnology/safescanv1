import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Main = () => {
    return (
        <div className='flex'>
            <div className='bg-red-200 px-5'>
                <Sidebar />
            </div>
            <div className='bg-green-200 px-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default Main;