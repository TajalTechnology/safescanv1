import React, { useState } from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import Notification from '../../Components/Pages/Notifications/Notification';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import { NotificationsData } from "../../assets/mockData";

const Notifications = () => {
    const [activeTab, setActiveTab] = useState('All Notifications')
    const tabs = [
        {
            id: 1,
            title: 'All Notifications'
        },
        {
            id: 1,
            title: 'Unread'
        },
        {
            id: 1,
            title: 'Read'
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
            <div className='mb-10'>
                <SectionWrapper>
                    <div className=' px-[25px] py-7'>
                        {/* ----------tabs section------------ */}
                        <div className='mb-7 flex items-center gap-10'>
                            {
                                tabs.map((tab) => <button key={tab.id} onClick={() => setActiveTab(tab.title)} className={`text-sm px-1 pb-2 ${activeTab === tab.title ? 'text-primary border-b-[3px] border-primary' : 'text-info/80 border-b border-transparent'}`}>{tab.title}</button>)
                            }
                        </div>
                        <div>
                            {
                                activeTab === 'All Notifications' && <Notification data={NotificationsData} />
                            }
                            {
                                activeTab === 'Unread' && <Notification data={NotificationsData.filter((d) => d.status === 'unread')} />
                            }
                            {
                                activeTab === 'Read' && <Notification data={NotificationsData.filter((d) => d.status === 'read')} />
                            }
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </>

    );
};

export default Notifications;