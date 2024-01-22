import React, { useState } from 'react';
import SectionWrapper from '../../Components/Shared/SectionWrapper';
import Notification from '../../Components/Pages/Notifications/Notification';
import BreadCrumb from '../../Components/Shared/BreadCrumb';

const Notifications = () => {
    const [activeTab, setActiveTab] = useState('All Notifications')
    const data = [
        {
            id: 1,
            title: 'Test Overdue ',
            subTitle: 'Prodcut number 123 on site in castroy was due for testing on the 23/11/2023 please itest asdap ',
            position: 'critical',
            status: 'read',
            time: 'Now'
        },
        {
            id: 2,
            title: 'Dispinary Action Assigned',
            subTitle: 'Admin user \David has iussued a dispinary warning to worker Ryan  on your site in castle troy',
            position: 'warning',
            status: 'unread',
            time: '01/12/23'
        },
        {
            id: 3,
            title: 'Test Overdue ',
            subTitle: 'Prodcut number 123 on site in castroy was due for testing on the 23/11/2023 please itest asdap ',
            position: 'critical',
            status: 'read',
            time: 'Yestarday'
        },
        {
            id: 4,
            title: 'Dispinary Action Assigned',
            subTitle: 'Admin user \David has iussued a dispinary warning to worker Ryan  on your site in castle troy',
            position: 'warning',
            status: 'unread',
            time: '01/12/23'
        },
        {
            id: 5,
            title: 'Test Overdue ',
            subTitle: 'Prodcut number 123 on site in castroy was due for testing on the 23/11/2023 please itest asdap ',
            position: 'critical',
            status: 'read',
            time: '01/12/23'
        },
        {
            id: 6,
            title: 'Dispinary Action Assigned',
            subTitle: 'Admin user \David has iussued a dispinary warning to worker Ryan  on your site in castle troy',
            position: 'warning',
            status: 'unread',
            time: '01/12/23'
        },
        {
            id: 7,
            title: 'Test Overdue ',
            subTitle: 'Prodcut number 123 on site in castroy was due for testing on the 23/11/2023 please itest asdap ',
            position: 'critical',
            status: 'read',
            time: '01/12/23'
        },
        {
            id: 8,
            title: 'Dispinary Action Assigned',
            subTitle: 'Admin user \David has iussued a dispinary warning to worker Ryan  on your site in castle troy',
            position: 'warning',
            status: 'unread',
            time: '01/12/23'
        },
        {
            id: 9,
            title: 'Test Overdue ',
            subTitle: 'Prodcut number 123 on site in castroy was due for testing on the 23/11/2023 please itest asdap ',
            position: 'critical',
            status: 'read',
            time: '01/12/23'
        },
        {
            id: 10,
            title: 'Dispinary Action Assigned',
            subTitle: 'Admin user \David has iussued a dispinary warning to worker Ryan  on your site in castle troy',
            position: 'warning',
            status: 'unread',
            time: '01/12/23'
        },
    ]
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
                                activeTab === 'All Notifications' && <Notification data={data} />
                            }
                            {
                                activeTab === 'Unread' && <Notification data={data.filter((d) => d.status === 'unread')} />
                            }
                            {
                                activeTab === 'Read' && <Notification data={data.filter((d) => d.status === 'read')} />
                            }
                        </div>
                    </div>
                </SectionWrapper>
            </div>
        </>

    );
};

export default Notifications;