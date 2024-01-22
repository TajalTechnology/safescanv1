import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React from "react";

const LogOutModal = ({
  modalOPen,
  setModalOpen,
  className,
  onDelete,
}) => {
  return (
    <div className="">
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        styles={{borderRadius:30}}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={520}
        className={` bg-primary pt-3 rounded-[30px]`}
      >
        <div className=" bg-primary pt-10 rounded-[30px] h-14  -z-20 relative left-0 top-[-10px]"></div>
        <div className=" rounded-[30px] mt-[-40px]">
          <div className=" flex items-center justify-end mr-5">
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-3xl h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          <div style={{borderRadius:"16px"}} className=" w-full flex items-center justify-center py-3 pb-[40px]">
            <div className=" w-[110px] h-[110px] rounded-full border-[5px] border-dashed border-primary/20 bg-primary/10 flex items-center justify-center">
              <Icon
                icon="line-md:log-out"
                className="text-[45px] text-[#252F67]"
              />
            </div>
          </div>

          <div>
            <h2 className=" text-[25px] text-center font-[500] text-text-primary">
                 Log Out
            </h2>
            <p className="text-[16px] font-[400] text-[#707EAE] text-center">
                Are You Sure You Want To Log Out?
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-5 pt-[40px] pb-9">
          <button
            onClick={()=>{onDelete();setModalOpen(false)}}
            className="font-bold  h-[40px] px-6 rounded-[10px] bg-primary  hover:bg-primary/80 duration-300 border-primary text-white "
          >
            Log Out
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="font-bold  h-[40px] px-6 hover:bg-red-500 hover:text-white duration-300 hover:border-red-500 rounded-[10px] bg-transparent text-secondary border border-secondary"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModal;
