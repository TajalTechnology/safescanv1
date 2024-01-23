import React from 'react';
import TopSection from '../../Components/Pages/Dashboard/TopSection';
import FinesOverview from '../../Components/Pages/Dashboard/FinesOverview';
import TotalProducts from '../../Components/Pages/Dashboard/TotalProducts';
import TotalUsers from '../../Components/Pages/Dashboard/TotalUsers';
import FinesAmount from '../../Components/Pages/Dashboard/FinesAmount';
import BreadCrumb from '../../Components/Shared/BreadCrumb';

const Dashboard = () => {
    return (
        <>
        <BreadCrumb
          title={"Dashboard"}
          links={[
            { title: "Home", url: "/admin/dashboard" },
            { title: "Dashboard", url: "/admin/dashboard" },
          ]}
        />
        <div className='grid grid-cols-1 mb-10'>
            <TopSection />
            <div className='lg:flex gap-5 mb-5'>
                <div className='w-full lg:w-2/3'>
                    <FinesOverview />
                </div>
                <div className='w-full lg:w-1/3 mt-5 lg:mt-0'>
                    <TotalProducts />
                </div>
            </div>
            <div className='lg:flex gap-5'>
                <div className='w-full lg:w-2/3'>
                    <TotalUsers />
                </div>
                <div className='w-full lg:w-1/3 mt-5 lg:mt-0'>
                    <FinesAmount />
                </div>
            </div>

        </div>
        </>
        
    );
};

export default Dashboard;