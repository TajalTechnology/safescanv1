import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CustomButton from "../../../Shared/CustomButton";
import { formattedDate } from "../../../../helper/jwt";
import { usePlanMutation } from "../../../../redux/features/superAdmin/superApi";
import toast from "react-hot-toast";

const ExpiryDate = ({ row,refetch }) => {
  const [modalOPen, setModalOpen] = useState(false);
  const [value, onChange] = useState(new Date());

  const formattedNextDate = formattedDate(value)

  const [plan, { isLoading, error, isSuccess }] = usePlanMutation();

  console.log(formattedNextDate)

  useEffect(() => {
    if (isSuccess) {
      const message = "Plan Update success";
      toast.success(message);
      refetch()
      setModalOpen(false)
    }
    if (error) {
      console.log("===error====", error);
      toast.error(error?.data.error || error?.data.message);
    }
  }, [isSuccess, error]);

  const dateUpdate = async()=>{
    const data = {
      username: row?.username,
      expiry_date: formattedNextDate,
    };
    console.log(data)
    const id = row?.userid;
    await plan({ id, data });
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <span className=" text-[14px] font-normal text-info">
          {row?.expiry_date === " " ? "set date" : row?.expiry_date}
        </span>
        <button onClick={() => setModalOpen(true)}>
          <Icon
            icon="formkit:date"
            className=" text-[20px] font-semibold text-info"
          />
        </button>
      </div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        styles={{ borderRadius: 30 }}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={550}
        className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="p-7">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[28px] font-[700] text-dark-gray">
              Change Expire Date
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className=" w-full flex items-center justify-center mt-5">
            <div>
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
          <div className="mt-[30px] flex items-center gap-5">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="font-[500] text-[14px] h-[40px] w-full bg-[#664DFF]/10 duration-300 px-5 rounded-[4px] text-primary hover:bg-primary hover:text-white"
            >
              Cancel
            </button>
            <CustomButton onClick={()=>dateUpdate()} className={" w-full"}>{isLoading ? "Loading..." : "Save Changes"}</CustomButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExpiryDate;
