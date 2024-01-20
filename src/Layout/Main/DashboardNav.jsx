import { Icon } from '@iconify/react'
import { Popover } from 'antd'
import React, { useContext} from 'react'
// import NavNotification from '../../Shared/Notification/NavNotification';
import { SidebarContext } from '../../Context/CustomContext';

const DashboardNav = ({name,user,role}) => {

    const { setSidebarShow } = useContext(SidebarContext)


    // ====mobile view popup content====
    const content = (
        <div className="py-4 px-4 ">
            <div className=' flex  flex-col items-center justify-center'>
                <h3 className=' text-base m-[-5px] p-0 font-medium text-text-primary'>{name}</h3>
                <p className=' text-[11px]  p-0 font-normal text-light-black'>{user}</p>
            </div>
           
                {/* <NavNotification role={role}/> */}

            <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black hover:bg-primary/10 hover:text-[#252F67] py-2 px-5">
                <Icon icon="mingcute:world-2-fill" className=' text-light-black text-[25px]'/>
                Language
            </button>
        </div>
      );


  return (
    <div className='w-fullNotification h-[100px]  flex items-center justify-end z-50'>
        <div className=' bg-white lg2:w-[600px] lg:w-[450px] w-full p-[10px] pr-5 flex items-center justify-between gap-5 rounded-full'>
            <div className=' w-[10%] lg:hidden'>
                <button onClick={()=>setSidebarShow(true)} className=' flex items-center justify-start ml-3'><Icon icon="pepicons-pop:menu" className=' text-[25px]'/></button>
            </div>
            
            <div className=' relative lg:w-[90%] w-[80%]'>
                <Icon icon="iconamoon:search-bold" className=' absolute top-[14px] left-[14px] text-[#2B3674] text-[16px]'/>
                <input type="text" placeholder='Search' className=' placeholder-[#8F9BBA]  text-[14px] pl-9 outline-none font-[400] w-full bg-[#F9F9FB] py-3 px-5 rounded-full'/>
            </div>

            <div className=' hidden lg:flex items-center w-[400px] justify-end lg2:gap-[16px] gap-3'>
                {/* <NavNotification role={role}/> */}
                <button>
                    <Icon icon="mingcute:world-2-fill" className=' text-light-black text-[25px]'/>
                </button>
                <button className=' hidden lg:flex items-center gap-2'>
                    <div>
                    <img src="/images/user1.png" alt="" className=' w-[35px] h-[35px] rounded-full'/>
                    </div>
                    <div>
                        <h3 className=' text-base mb-[-5px] p-0 font-medium text-text-primary'>{name}</h3>
                        <p className=' text-[11px] text-start  p-0 font-normal text-light-black'>{user}</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav