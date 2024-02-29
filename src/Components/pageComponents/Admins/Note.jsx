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

const Note = ({row,refetch}) => {
    const [modalOPen, setModalOpen] = useState(false);
    const [imageItem,setImageItame] = useState()
    const [imgIndex, setImageIndex] = useState(0);
    const [deletModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [updatedImages, setUpdatedImages] = useState([])

    const [activeIndex, setActiveIndex] = useState(0);

    console.log(activeIndex)

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };
  return (
    <>
      <Tooltip placement="topLeft" title="View Images">
        <button
          disabled={row?.cards?.length ? false : true}
          onClick={() => setModalOpen(true)}
          className=" text-[14px]  font-normal text-info flex items-center w-full justify-between gap-1 "
        >
            <span>{"03"}</span>
          <Icon icon="material-symbols:edit-document-outline-rounded" className=" text-[20px]" />
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
            <h2 className=" text-[28px] font-[700] text-dark-gray">
              Card Images
            </h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div>
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
                {[0,1,2,3]?.map((card, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center"
                    key={index}
                  >

                    <div className="h-[200px] border border-red-500 flex items-center justify-center w-full">
                        <div className="w-[70%] h-[80%] border rounded-[14px] border-[#C9D4EA]">

                        </div>
                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </Modal>

      {/* <NoteEdit
        setModalOpen={setModalOpen}
        refetch={refetch}
        editModal={editModal}
        setEditModal={setEditModal}
        imageItem={imageItem}
        row={row}
        imgIndex={imgIndex}
      /> */}

      <DeleteModal
        modalOPen={deletModal}
        onDelete={() => {}}
        setModalOpen={setDeleteModal}
        title={"Delete Image"}
        title2={"Are You Sure?"}
      />
    </>
  );
};

export default Note;
