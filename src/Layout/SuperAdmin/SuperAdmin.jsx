import React, { useEffect } from "react";
import SuperSidbar from "../../Components/Sidebar/SuperSidbar";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SuperAdminNav from "./SuperAdminNav";

const SuperAdmin = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(()=>{
      if(user?.usertype ==="super_admin" && user?.admin_serial === 1){
          
      }else{
        navigate("/")
      }
  },[user,navigate])

  return (
    <div className=" flex bg-[#F4F7FE]">
      <div className=" bg-white">
        {/* ----------------admin Dashboard sidebar here----------------- */}
        <SuperSidbar />
      </div>
      <div className="bg-[#F4F7FE] xl:px-[30px] px-4 w-full min-h-[100vh]">
        {/* Admin dashboard outlet create */}
        <SuperAdminNav />
        <div className="">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
