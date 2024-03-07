import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DashboardNav from "./DashboardNav";

const Main = () => {
  // const { user } = useSelector((state) => state.auth);

  const tokenString = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  
  console.log("======tokenString======",user)

  const navigate = useNavigate();
  useEffect(() => {
    if (!user || !tokenString || user?.admin_serial === 1) {
      navigate("/");
    }
  }, [user,tokenString]);

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
