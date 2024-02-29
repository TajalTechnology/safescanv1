import React, { useState } from "react";
import NoteEdit from "./NoteEdit";
import { Modal, Tooltip } from "antd";
import { Icon } from "@iconify/react";
import CustomButton from "../../Shared/CustomButton";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DeleteModal from "../../Shared/modal/DeleteModal";

const Note = ({ row, refetch }) => {
  const [modalOPen, setModalOpen] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [deletModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);


  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const NoteData = [0,1,2,3,4]

  return (
    <>
      <Tooltip placement="topLeft" title="View Images">
        <button
          disabled={row?.cards?.length ? false : true}
          onClick={() => setModalOpen(true)}
          className=" text-[14px]  font-normal text-info flex items-center w-full justify-between gap-1 "
        >
          <span>{"03"}</span>
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
            <h2 className=" text-[28px] font-[700] text-dark-gray">Notes</h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className=" flex items-center gap-5 w-full my-5">
            <div className="w-[70%]">
              <textarea
                name=""
                id=""
                placeholder="Write Something..."
                className="py-[15px] h-[95px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
              ></textarea>
            </div>
            <div className="w-[30%] flex items-center justify-center">
              <div className="flex items-center justify-center flex-col w-full gap-3">
                <CustomButton className={" w-full"}>{"Add Note"}</CustomButton>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="font-[500] text-[14px] h-[40px] w-full bg-[#664DFF]/10 duration-300 px-5 rounded-[4px] text-primary hover:bg-primary hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-[20px]">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={20}
                navigation={{
                  clickable: true,
                }}
                modules={[Navigation]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
              >
                {NoteData?.map((card, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center"
                    key={index}
                  >
                    <div className="h-full flex items-center justify-center w-full">
                      <div className="w-[85%] h-[80%] border rounded-[14px] p-5 border-[#C9D4EA]">
                        <div className=" flex items-center justify-between">
                          <h2 className=" text-[14px] font-bold text-dark-gray">
                            24-02-2024
                          </h2>
                          <div className="flex items-center gap-2">
                            <button onClick={()=>{setEditModal(true)}} className=" w-[30px] h-[30px] flex items-center justify-center rounded-lg border border-primary/40">
                              <Icon
                                icon="mingcute:pencil-line"
                                className="text-[22px] hover:text-[#0070F0] text-primary"
                              />
                            </button>
                            <button onClick={()=>{setItemIndex(index);setDeleteModal(true)}} className=" w-[30px] h-[30px] flex items-center justify-center rounded-lg border border-[#F40909]/40">
                              <Icon
                                icon="gg:trash-empty"
                                className="text-[22px] hover:text-red-500 text-[#F40909]"
                              />
                            </button>
                          </div>
                        </div>

                        <div className=" mt-3">
                          <p className=" text-[14px] font-normal text-[#485585]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
          <div>
            <div className="w-full flex items-center justify-center">
                <h2 className=" text-[#68769F] text-[16px]">{activeIndex+1}/{NoteData.length}</h2>
            </div>
            <div className="flex mt-5 items-center justify-center flex-col w-full gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="font-[500] text-[14px] h-[40px] w-full bg-[#664DFF]/10 duration-300 px-5 rounded-[4px] text-primary hover:bg-primary hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <NoteEdit
        setModalOpen={setModalOpen}
        refetch={refetch}
        editModal={editModal}
        setEditModal={setEditModal}
        row={row}
      />

      <DeleteModal
        modalOPen={deletModal}
        onDelete={() => {}}
        setModalOpen={setDeleteModal}
        title={"Delete Note!"}
        title2={"Are you sure you want to delete this note? This action cannot be undone."}
      />
    </>
  );
};

export default Note;
