import React, { useEffect, useState } from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import Notification from '../../Components/Pages/Notifications/Notification';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
// import { NotificationsData } from "../../assets/mockData";
import { useGetNotificationsQuery } from '../../redux/features/admin/adminApi';
import { useDebounce } from 'use-debounce';
import Loader from '../../Components/Shared/Loader';

const Notifications = () => {
    const [activeTab, setActiveTab] = useState('All Notifications')
    const [search, setSearch] = React.useState("");

    const [searchQuery, sestSearchQuery] = useState("");

    const [searchValue] = useDebounce(search, 1000);

    const { data, isLoading, refetch } = useGetNotificationsQuery(searchQuery, {
        refetchOnMountOrArgChange: true,
    });
    console.log("this is search query--------", searchQuery)
    const generateQuery = (searchValue) => {
        const queryParams = [];
        if (searchValue) {
            queryParams.push(`is_read=${searchValue}`);
        }
        return queryParams.join("&");
    };
    const notifications = data?.Items

    console.log("===========", notifications);

    useEffect(() => {
        const query = generateQuery(searchValue);
        sestSearchQuery(`${query}`);
    }, [searchValue]);

    const tabs = [
        {
            id: 1,
            title: 'All Notifications',
            status: ''
        },
        {
            id: 2,
            title: 'Unread',
            status: 'false'
        },
        {
            id: 3,
            title: 'Read',
            status: 'true'
        },
    ]

    return (
        <>
            <BreadCrumb
                title={"Notifications"}
                links={[
                    { title: "Home", url: "/admin/dashboard" },
                    { title: "Notifications", url: "/admin/notifications" },
                ]}
            />
            <img src='https://scansafes3.s3.amazonaws.com/icone.png' alt='dkdjfds'/>
            <div className='mb-10'>
                <SectionWrapper>
                    <div className=' px-[25px] py-7'>
                        {/* ----------tabs section------------ */}
                        <div className='mb-7 flex items-center gap-10'>
                            {
                                tabs.map((tab) => <button key={tab.id} onClick={() => { setActiveTab(tab?.title); setSearch(tab?.status) }} className={`text-sm px-1 pb-2 ${activeTab === tab.title ? 'text-primary border-b-[3px] border-primary' : 'text-info/80 border-b border-transparent'}`}>{tab?.title}</button>)
                            }
                        </div>
                        <div>
                            {isLoading ? <><Loader /></> : <>
                                <Notification data={notifications} />
                            </>}
                            {/* {
                                activeTab === 'All Notifications' && <Notification data={data} />
                            }
                            {
                                activeTab === 'Unread' && <Notification data={NotificationsData.filter((d) => d.status === 'unread')} />
                            }
                            {
                                activeTab === 'Read' && <Notification data={NotificationsData.filter((d) => d.status === 'read')} />
                            } */}
                        </div>
                    </div>
                </SectionWrapper>
            </div>


        </>

    );
};

export default Notifications;