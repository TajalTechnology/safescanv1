import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React from "react";

const DeleteModal = ({
  modalOPen,
  setModalOpen,
  className,
  title,
  title2,
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
        className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="bg-red-500 pt-10 rounded-[30px] h-14  -z-20 relative left-0 top-[-10px]"></div>
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
            <div className=" w-[110px] h-[110px] rounded-full border-[5px] border-dashed border-[#FFE5E5] bg-[#FFF6F6] flex items-center justify-center">
              <Icon
                icon="basil:trash-alt-outline"
                className="text-[45px] text-red-500"
              />
            </div>
          </div>

          <div>
            <h2 className=" text-[25px] text-center font-[500] text-text-primary">
              Are You Sure?
            </h2>
            <p className="text-[16px] font-[400] text-[#707EAE] text-center">
              {title} <br /> {title2}
            </p>
          </div>
        </div>

        <div className=" flex items-center justify-center gap-5 pt-[40px] pb-9">
          <button
            onClick={()=>{onDelete();setModalOpen(false)}}
            className="font-bold  h-[40px] px-6 rounded-[10px] bg-red-500 hover:bg-red-700 duration-300 border border-red-500 text-white "
          >
            Delete
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="font-bold  h-[40px] px-6 hover:text-red-500 hover:border-red-500 duration-300 rounded-[10px] bg-transparent text-secondary border border-secondary"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
