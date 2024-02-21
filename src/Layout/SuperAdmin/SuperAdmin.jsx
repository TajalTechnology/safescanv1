import React, { useEffect } from "react";
import SuperSidbar from "../../Components/Sidebar/SuperSidbar";
import DashboardNav from "../Main/DashboardNav";
import { Outlet, useNavigate } from "react-router-dom";

const SuperAdmin = () => {
  const navigate = useNavigate();
  const user = false

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user])
  return (
    <div className=" flex bg-[#F4F7FE]">
      <div className=" bg-white">
        {/* ----------------admin Dashboard sidebar here----------------- */}
        <SuperSidbar />
      </div>
      <div className="bg-[#F4F7FE] xl:px-[30px] px-4 w-full min-h-[100vh]">
        {/* Admin dashboard outlet create */}
        <DashboardNav />
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
