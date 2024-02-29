import { Icon } from '@iconify/react';
import React from 'react';
import { formattedDate } from '../../helper/jwt';

const Notification = ({ data, handleSeeAll }) => {
    return (
        <div className='w-full'>
            <button className='w-full' onClick={handleSeeAll}>
                {
                    data?.length > 0 ? <>
                        {data.slice(0, 4).map((notifi, index) => <div key={index} className='flex  gap-2 border-b border-gray-100 py-[18px] w-full '>
                            <div className={`flex items-center justify-center h-[34px] w-[34px] rounded-[10px] p-2 ${notifi?.is_read === true ? 'text-Warning bg-Warning/10' : ' text-error bg-error/10'}`}>

                                {notifi?.is_read === true ? <Icon className='text-lg' icon="ph:warning-bold" /> : <Icon className='text-lg' icon="mingcute:warning-line" />}


                            </div>
                            <div className='-mt-1 w-[90%]'>
                                <div className='flex justify-between w-full flex-wrap gap-2 '>
                                    <p className='text-dark-gray font-medium text-base'>{notifi?.headline}</p>
                                    <div className='flex items-center gap-1.5'><p className='text-xs font-medium text-info/80'>{formattedDate(notifi?.created_at)}</p>
                                        {/* {notifi.time === 'Now' && <span className='w-1.5 mb-1 h-1.5 rounded-full bg-primary'></span>} */}
                                    </div>
                                </div>
                                <p className='text-info/80 text-start text-sm'>{notifi?.details}</p>

                            </div>
                        </div>)}
                    </> : <>
                        <div className='py-5 flex items-center justify-center text-xl text-dark-gray/40 font-bold'>No notification yet</div>
                    </>
                }

            </button>
        </div>
    );
};

export default Notification;