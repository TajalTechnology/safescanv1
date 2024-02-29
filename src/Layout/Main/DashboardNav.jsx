import { Icon } from "@iconify/react";
import { NotificationsData } from "../../assets/mockData";
import { Popover } from "antd";
import Notification from "../../Components/Shared/Notification";
import { useNavigate } from "react-router-dom";
import { useGetNotificationsQuery } from "../../redux/features/admin/adminApi";

const DashboardNav = () => {
  const navigate = useNavigate()

  const { data, isLoading, refetch } = useGetNotificationsQuery('', {
    refetchOnMountOrArgChange: true,
});
  const handleSeeAll = () => {
    navigate('/admin/notifications')
  }
  const content = (
    <div className=" ">
      <div className=" md:w-[408px] w-[100%] px-5 py-[25px]">
        <div className="w-full  flex items-center justify-between gap-2">
          <h2 className="text-[20px] font-bold text-dark-gray">
            Notifications
          </h2>
          <button onClick={handleSeeAll} className="text-sm text-primary font-medium">See All</button>
        </div>
        {/* -------------------------here notification ------- */}
        <div className="mt-9 ">
          <Notification handleSeeAll={handleSeeAll} data={data?.Items} />
        </div>
      </div>
    </div>
  );


  return (
    <>
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
              className=" placeholder-[#8F9BBA] text-dark-gray  text-[14px] pl-10 outline-none font-[400] w-full bg-transparent py-3 px-5 rounded-full"
            />
          </div>
        </div>
        <div>
          <Popover content={content} placement="bottomRight" trigger="click">
            {/* <button className=" text-sm flex  w-full items-center gap-2 rounded-[10px] font-medium text-light-black py-2 md:px-0 px-5">
              <Badge size="small" count={4} offset={[-7, 4]} className="mt-1">
                <Icon
                  icon="basil:notification-solid"
                  className=" text-light-black text-[25px]"
                />
              </Badge>
              <span className=" flex md:hidden">Notification</span>
            </button> */}
            <div className="bg-white w-[48px] relative rounded-md flex items-center justify-center  h-[48px]">
              <button className=" text-primary text-[27px]"><Icon icon="lets-icons:bell-pin" /></button>
              <div className="w-[7px] absolute top-[14px] right-[13px] h-[7px] bg-red-500 rounded-full"></div>
            </div>
          </Popover>
        </div>

      </div>
    </>
  );
};

export default DashboardNav;
