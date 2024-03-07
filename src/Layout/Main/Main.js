import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardNav from "./DashboardNav";
import { useSelector } from "react-redux";
import Loader from "../../Components/Shared/Loader";

const Main = () => {
  const { user } = useSelector((state) => state.auth);

  console.log("======user======",user)

  const navigate = useNavigate();
  useEffect(() => {
    if (!user || user?.admin_serial === 1) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      {/* {!user ? (
        <>
            <Loader></Loader>
        </>
      ) : ( */}
        <>
          <div className=" flex bg-[#F4F7FE]">
            <div className=" bg-white">
              {/* ----------------admin Dashboard sidebar here----------------- */}
              <Sidebar />
            </div>
            <div className="bg-[#F4F7FE] xl:px-[20px] w-full px-4 min-h-[100vh]">
              {/* Admin dashboard outlet create */}
              <DashboardNav />
              <div className=" w-full">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </>
      {/* )} */}
    </>
  );
};

export default Main;
