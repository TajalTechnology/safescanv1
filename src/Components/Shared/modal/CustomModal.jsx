import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React from "react";
import CustomButton from "../button/CustomButton";

const CustomModal = ({
  modalOPen,
  setModalOpen,
  width,
  className,
  title,
  children,
  handleSubmit=(e)=>{e.preventDefault()},
  buttonText,
}) => {

  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };
  return (
    <div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={width}
        className={` ${className}`}
        style={modalStyle}
      >
        <div className="z-[50000000] rounded-[20px] p-5 bg-white">
          <div className=" flex items-center justify-between px-9 pt-6 pb-5">
            <h2 className=" text-[28px] font-bold text-dark-gray">
              {title}
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[14px] text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#68769F]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="w-full mt-[0px] px-9 pb-9">
            <div className="">{children}</div>
            <div className="mt-[38px] flex items-center gap-5">
              <CustomButton onClick={()=>setModalOpen(false)} className={" w-full"}>{buttonText}</CustomButton>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="font-[500] text-[14px] h-[40px] w-full hover:border-primary hover:text-primary duration-300 px-5 rounded-[10px] bg-transparent text-[#666D90] border border-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
