import { Icon } from "@iconify/react";
import { Modal, Tooltip } from "antd";
import React, { useState } from "react";

const ProductNote = ({ row }) => {
  const [modalOPen, setModalOpen] = useState(false);
  return (
    <>
      <Tooltip placement="topLeft" title="View Note">
        <button
          disabled={!row?.note}
          onClick={() => setModalOpen(true)}
          className=" text-[14px]  font-normal text-info flex items-center w-full justify-between gap-1 "
        >
          <span className=" text-[14px] font-normal text-info flex items-center gap-1 ">
            {row?.note?.slice(0, 12)}...
          </span>
          <Icon
            icon="material-symbols:edit-document-outline-rounded"
            className=" text-[20px]"
          />
        </button>
      </Tooltip>
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
        width={660}
        className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="px-8 py-6">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[28px] font-[700] text-dark-gray">Note</h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>

          <div className="p-5 border rounded-[10px] mt-5 border-dark-gray/40">
            <p className="text-dark-gray">{row?.note}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductNote;
