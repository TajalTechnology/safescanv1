import { Icon } from "@iconify/react";
import React, { useState } from "react";
import SectionWrapper from "../../../Shared/SectionWrapper";
import { useCustomersQuery } from "../../../../redux/features/superAdmin/superApi";

const SuperAdminCustomerTop = () => {
  const [searchQuery, sestSearchQuery] = useState("");
  const { data, isLoading, refetch } = useCustomersQuery("", {
    refetchOnMountOrArgChange: true,
  });

  const approved = data?.filter((item)=>item.is_approved===true)
  const notApproved = data?.filter((item)=>item.is_approved===false)

  let currentDate = new Date();
  var sevenDaysAgo = new Date(currentDate);
  sevenDaysAgo.setDate(currentDate.getDate() - 7);

// Get the timestamp
let timestamp = currentDate.getTime();
const firstDate = sevenDaysAgo.getTime();

console.log("fsdfdsfdfdfdfdf===========dsfsdff",timestamp)

  const { data:data1, } = useCustomersQuery(`is_approved=true&`, {
    refetchOnMountOrArgChange: true,
  });




  return (
    <>
      <div className="lg:flex items-center gap-5 justify-between mb-5">
        <div className="w-full lg:w-1/2">
          <SectionWrapper>
            <div className="p-5 md:flex items-center justify-between w-full ">
              <div className="flex items-center gap-4 w-full md:w-[35%]">
                <div className="bg-primary/10 p-2.5 flex items-center justify-center rounded-[10px] h-[44px] w-[44px]">
                  <Icon
                    className="w-[24] text-primary"
                    icon="mingcute:user-3-line"
                  />
                </div>
                <div className="h-10 -mt-2">
                  <p className="text-xs font-medium text-info/50">Total Customers</p>
                  <h1 className="text-2xl font-bold text-dark-gray">{data?.length}</h1>
                </div>
              </div>

              <div className="flex items-center h-10 w-full  md:w-[65%]  justify-between mt-10 md:mt-0">
                <div className="w-[50%]">
                  <p className="text-xs font-medium text-info/50">Today</p>
                  <h1 className="text-2xl font-bold text-dark-gray">02</h1>
                </div>
                <div className="w-[50%]">
                  <p className="text-xs font-medium text-info/50">Last Week</p>
                  <h1 className="text-2xl font-bold text-dark-gray">16</h1>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
        <div className="w-full lg:w-1/2 lg:mt-0 mt-5">
          <SectionWrapper>
            <div className="p-5 md:flex items-center justify-between w-full bg-primary rounded-[20px] text-white">
              <div className="flex items-center gap-4 w-full md:w-[35%]">
                <div className="bg-black/20 p-2.5 flex items-center justify-center rounded-[10px] h-[44px] w-[44px]">
                  <Icon className="w-40" icon="lucide:gavel" />
                </div>
                <div className="h-10 -mt-2">
                  <p className="text-xs font-medium text-white/70">
                  Total Pending
                  </p>
                  <h1 className="text-2xl font-bold ">{notApproved?.length}</h1>
                </div>
              </div>

              <div className="flex items-center h-10 w-full  md:w-[65%]  justify-between mt-10 md:mt-0">
                <div className="w-[50%]">
                  <p className="text-xs font-medium text-white/70">
                  Total Approved 
                  </p>
                  <h1 className="text-2xl font-bold ">{approved?.length}</h1>
                </div>
                <div className="w-[50%]">
                  <p className="text-xs font-medium text-white/70">
                  Last Week Approved 
                  </p>
                  <h1 className="text-2xl font-bold ">23</h1>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </>
  );
};

export default SuperAdminCustomerTop;
