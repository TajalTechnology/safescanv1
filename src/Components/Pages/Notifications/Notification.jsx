import { Icon } from '@iconify/react';
import React from 'react';
import { formattedDate } from '../../../helper/jwt';

const Notification = ({ data }) => {

    return (
        <div className='h-[80vh]  overflow-y-auto'>
            {data.map((notifi, index) => <div key={index}
             className='flex  gap-2 items-center border-b border-gray-100 py-[18px] w-full '>
                <div className={` flex items-center justify-center rounded-[10px] p-2 ${notifi?.is_read ===true ? 'text-Warning bg-Warning/10' : ' text-error bg-error/10'}`}>

                    {notifi?.is_read ===true ? <Icon className='text-lg' icon="ph:warning-bold" /> : <Icon className='text-lg' icon="mingcute:warning-line" />}


                </div>
                <div className='flex justify-between w-full flex-wrap gap-3'>
                    <div>
                        <p className='text-dark-gray font-medium text-base'>{notifi?.headline}</p>
                        <p className='text-info/80 -mt-1 text-sm'>{notifi?.details}</p>
                    </div>
                    <div className='flex items-center gap-1.5'><p className='text-xs font-medium text-info/80'>{formattedDate(notifi?.created_at)}</p>
                    {/* {notifi.time==='Now'&& <span className='w-1.5 mb-1 h-1.5 rounded-full bg-primary'></span>} */}
                    </div>
                </div>
            </div>)}
        </div>
    );
};

export default Notification;