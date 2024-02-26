import React from 'react';
import TopSection from '../../Components/Pages/Dashboard/TopSection';
import FinesOverview from '../../Components/Pages/Dashboard/FinesOverview';
import TotalProducts from '../../Components/Pages/Dashboard/TotalProducts';
import TotalUsers from '../../Components/Pages/Dashboard/TotalUsers';
import FinesAmount from '../../Components/Pages/Dashboard/FinesAmount';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import { useGetAdminQuery, useGetProductsQuery, useGetWorkerQuery } from '../../redux/features/admin/adminApi';
import Loader from '../../Components/Shared/Loader';

const Dashboard = () => {
    const { data: admins, isLoading: adminsLoading, refetch: adminsRefetch } = useGetAdminQuery('');
    const { data: workers, isLoading: workersLoading, refetch: workersRefetch } = useGetWorkerQuery('');
     const { data:products, isLoading} = useGetProductsQuery('');
    // console.log( workers)
    return (
        <>
            <BreadCrumb
                title={"Dashboard"}
                links={[
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Dashboard", url: "/admin/dashboard" },
                ]}
            />
            {
                adminsLoading && workersLoading && isLoading ? <><Loader/></> : <>
                    <div className='grid grid-cols-1 mb-10'>
                        <TopSection admins={admins} workers={workers}/>
                        <div className='lg:flex gap-5 mb-5'>
                            <div className='w-full lg:w-2/3'>
                                <FinesOverview />
                            </div>
                            <div className='w-full lg:w-1/3 mt-5 lg:mt-0'>
                                <TotalProducts products={products} />
                            </div>
                        </div>
                        <div className='lg:flex gap-5'>
                            <div className='w-full lg:w-2/3'>
                                <TotalUsers admins={admins} workers={workers} />
                            </div>
                            <div className='w-full lg:w-1/3 mt-5 lg:mt-0'>
                                <FinesAmount  />
                            </div>
                        </div>

                    </div>
                </>
            }

        </>

    );
};

export default Dashboard;