import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar_animation = {
  open: {
    width: "16rem",
    transition: {
      damping: 40,
    },
  },
  closed: {
    width: "5rem",
    transition: {
      damping: 40,
    },
  },
};


const Sidebar = () => {
  // const navigate = useNavigate();
  const path = useLocation();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  // const handelLogout = () => {
  //   navigate("/");
  // };

  const NavData = [
    {
      title: "Dashboard",
      icon: <Icon icon="material-symbols:dashboard-outline" />,
      url: "/admin/dashboard",
    },
    {
      title: "Subscription",
      icon: <Icon icon="tabler:wallet" />,
      url: "/admin/subscription",
    },
    {
      title: "Admins",
      icon: <Icon icon="lucide:user-round-cog" />,
      url: "/admin/admins",
    },
    {
      title: "Workers",
      icon: <Icon icon="mingcute:user-1-line" />,
      url: "/admin/workers",
    },
  ];

  const activeStyle = {
    color: "#1B2559",
    // borderRight: "4px solid #664DFF",
  };
  return (
    <>
      <motion.div
        variants={Sidebar_animation}
        animate={open ? "open" : "closed"}
        className="flex flex-col justify-between bg-[#fff] h-[100vh] sticky top-0"
      >
        <section className="w-full">
          <div className=" flex items-center px-5 py-2 justify-between">
            <div className="h-[80px] flex  items-center">
              {" "}
              <img
                style={{
                  transitionDelay: `600ms`,
                }}
                src="/logo (2).png"
                alt="logo"
                className={`max-w-[143px] mx-auto duration-500 ${
                  open ? "" : "hidden "
                }`}
              />
              <img
                src="/logo2.png"
                alt="logo"
                className={`max-w-[143px] mx-auto ${
                  open ? " hidden duration-500" : ""
                }`}
              />
            </div>
            <button
              onClick={() => setOpen(false)}
              className={`text-[#8E9BBA] text-[25px] ${open ? "" : "hidden"}`}
            >
              <Icon icon="lucide:arrow-left-from-line" />
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`text-[#8E9BBA] text-[25px] bg-white shadow-sm relative top-0 right-[-15px] rounded-full ${open ? "hidden" : ""}`}
            >
              <Icon icon="ic:round-chevron-right" />
            </button>
          </div>

          <div className=" border border-[#F4F7FE] w-full"></div>
          {/* sidebar menu bar */}
          <div className="py-4 grid gap-1">
            {NavData?.map((nav, index) => (
              <NavLink
                key={index}
                to={nav?.url}
                className="pl-6 py-3 flex items-center overflow-hidden group justify-between text-[#B0BBD5]"
                style={path.pathname === nav?.url ? activeStyle : undefined}
              >
                <div className="flex item-center gap-3 font-bold duration-500 ">
                  <div
                    className={`text-[23px] group-hover:text-[#664DFF] ${
                      path.pathname === nav?.url ? " text-[#664DFF]" : ""
                    }`}
                  >
                    {nav?.icon}
                  </div>
                  {/* {open && (
                    <p className="text-[18px] font-[700] duration-500 group-hover:text-[#1B2559]">
                      {nav?.title}
                    </p>
                  )} */}
                  <h2
                    style={{
                      // transitionDelay: `100ms`,
                    }}
                    className={`whitespace-pre text-[18px] font-[700] duration-500 group-hover:text-[#1B2559] ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {nav?.title}
                  </h2>
                  {/* <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {nav?.title}
              </h2> */}
                </div>
                {open && (
                  <div
                    className={`${
                      path.pathname === nav?.url
                        ? " bg-[#664DFF] rounded-full w-[4px] h-[36px]"
                        : "rounded-full duration-500 w-[4px] h-[36px] group-hover:bg-[#664DFF]"
                    }`}
                  ></div>
                )}
              </NavLink>
            ))}
          </div>
        </section>

        <div>
          <div className="flex justify-between items-center group p-4">
            <button
              onClick={() => setShow(true)}
              className="flex gap-2 w-full py-1 cursor-pointer justify-between rounded-[8px] px-3 bg_color_gradient  items-center"
            >
              <p className="text-[16px] font-[500] text-white">Log out</p>
              <span className=" text-white w-[40px] flex items-center justify-center rounded-full h-[40px]">
                <Icon icon="humbleicons:logout" className=" text-[25px]" />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
