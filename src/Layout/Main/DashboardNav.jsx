import { Icon } from "@iconify/react";

// import NavNotification from '../../Shared/Notification/NavNotification';

const DashboardNav = () => {
  return (
    <div className="w-full Notification h-[100px] mr-20 gap-5  flex items-center justify-end z-50">
      <div className=" bg-white  h-[48px] lg:w-[350px] w-full p-[5px] flex items-center justify-between gap-5 rounded-md">
        <div className=" relative w-[100%]">
          <Icon
            icon="iconamoon:search-bold"
            className=" absolute top-[14px] left-[12px] text-[#1B2559] text-[16px]"
          />
          <input
            type="text"
            placeholder="Search"
            className=" placeholder-[#8F9BBA]  text-[14px] pl-10 outline-none font-[400] w-full bg-transparent py-3 px-5 rounded-full"
          />
        </div>
      </div>

      <div className="bg-white w-[48px] relative rounded-md flex items-center justify-center  h-[48px]">
          <button className=" text-primary text-[27px]"><Icon icon="lets-icons:bell-pin" /></button>
          <div className="w-[7px] absolute top-[14px] right-[13px] h-[7px] bg-red-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default DashboardNav;
