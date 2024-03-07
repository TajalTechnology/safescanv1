import { Icon } from "@iconify/react";
import { Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import DeleteModal from "./DeleteModal";
import { useDeleteProductCardImageMutation } from "../../../redux/features/admin/adminApi";
import SuccessToast from "../Toast/SuccessToast";
import ErrorToast from "../Toast/ErrorToast";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { formattedDate } from "../../../helper/jwt";

const CardModal = ({ row, refetch }) => {
  const [modalOPen, setModalOpen] = useState(false);
  const { token } = useSelector((state) => state.auth)
  const [imgIndex, setImageIndex] = useState(0);
  // const [deletModal, setDeleteModal] = useState(false);
  // const [editModal, setEditModal] = useState(false);
  const [updatedImages, setUpdatedImages] = useState([])
  // const [file, setFile] = useState("")
  const [isSuccess, setIsSuccess] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // const [deleteProductCardImage, { isSuccess: deletImageSuccess, error: deleteImageError, isLoading: deleteLoading }] = useDeleteProductCardImageMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.custom(<SuccessToast message={isSuccess} />);
    }
    if (error) {
      const errorMsg = error?.data.error || error?.data.message
      toast.custom(<ErrorToast message={errorMsg} />);
    }
  }, [isSuccess, error]);

  // useEffect(() => {
  //   if (deletImageSuccess) {
  //     toast.custom(<SuccessToast message={'Image Successfully Deleted.'} />);
  //     refetch();
  //     setImageIndex(0)
  //   }
  //   if (deleteImageError) {
  //     const errorMsg = deleteImageError?.data.error || deleteImageError?.data.message
  //     toast.custom(<ErrorToast message={errorMsg} />);
  //   }
  // }, [deletImageSuccess, deleteImageError]);

  useEffect(() => {
    setUpdatedImages(row?.product_images)
  }, [row]);

  const img = `https://scansafes3.s3.amazonaws.com/${updatedImages[imgIndex]}`


  const addImage = async (e) => {
    setIsLoading(true)
    const getImage = e.target.files[0]
    if (getImage) {

      const formData = new FormData();
      formData.append(`files`, getImage)
      const id = row?.productid;
      try {
        const response = await axios.patch(`https://23zw2glbhk.execute-api.us-east-1.amazonaws.com/api/v1/products/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        })
        refetch();
        setIsLoading(false)
        setIsSuccess("Successfully Image Added.")
        console.log(response.data)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }

    }

  }

  // const handelDelete = async () => {
  //   const id = `${row?.productid}`;
  //   const body = {
  //     index: imgIndex
  //   }
  //   await deleteProductCardImage({ id, body });
  // }

  // useEffect(() => {
  //   if (updatedImages?.length < 1) {
  //     setModalOpen(false)
  //   }
  // }, [updatedImages?.length])

  return (
    <>
      <Tooltip placement="topLeft" title="View Images">
        <button
          disabled={updatedImages?.length < 1}
          onClick={() => setModalOpen(true)}
          className={`text-[14px] font-normal text-info flex items-center gap-1 ${updatedImages?.length < 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <Icon icon="lucide:image" className=" text-[20px]" />{updatedImages?.length}
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
        width={1005}
        className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="p-7">
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
          <div className="w-full flex items-center justify-center py-5">
            <img
              src={img}
              alt="card"
              className="w-full  h-[300px] md:h-[544px] object-container"
            />
          </div>
          {/* <div className=" flex items-center justify-between flex-wrap gap-3 mb-5">
            <div className="">
              <p className="text-[20px] font-bold text-dark-gray">
                Attached Date:<span className="text-lg font-medium"> {formattedDate(row?.created_at)}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">

              <div className=' px-3.5 h-10 bg-primary/10  duration-300 rounded-[4px]  font-medium text-sm text-primary  flex items-center justify-center'>
                <label for="file-input" className="cursor-pointer" >
                  {isLoading ? 'Loading...' : 'Add Image'}
                </label>
                <input
                  type="file"
                  id="file-input"
                  className='hidden'
                  onChange={addImage}
                />
              </div>
              <button
                onClick={() => setDeleteModal(true)}
                className=" bg-error/10 flex items-center justify-center hover:bg-[#FF4D4D]/80 duration-300 w-[38px] h-[38px] rounded-[4px] font-medium text-[#FF4D4D] hover:text-white"
              >
                <Icon icon="lucide:trash-2" className=" text-[20px]" />
              </button>
            </div>
          </div> */}
          <div>
            <>
              <Swiper
                slidesPerView={4}
                spaceBetween={20}
                navigation={{
                  clickable: true,
                }}
                breakpoints={{
                  320: {
                    // width: 576,
                    slidesPerView: 1,
                  },
                  580: {
                    // width: 768,
                    slidesPerView: 2,
                  },
                  800: {
                    // width: 768,
                    slidesPerView: 3,
                  },
                  920: {
                    // width: 768,
                    slidesPerView: 4,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {updatedImages?.map((card, index) => (
                  <SwiperSlide
                    className="flex items-center justify-center"
                    key={index}
                  >
                    <button
                      onClick={() => setImageIndex(index)}
                      className={`${imgIndex === index
                        ? "border-[3px] border-primary rounded-[18px]"
                        : "border-2 border-transparent rounded-[18px]"
                        }`}
                    >
                      <div className="h-[106px] w-[185px]">
                        <img
                          src={`https://scansafes3.s3.amazonaws.com/${card}`}
                          alt="card"
                          className="rounded-[14px] w-[185px]"
                        />
                      </div>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </div>
        </div>
      </Modal>

      {/* Edit Modal */}
      {/* <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={editModal}
        closeIcon={null}
        styles={{ borderRadius: 30 }}
        onOk={() => setEditModal(false)}
        onCancel={() => setEditModal(false)}
        width={1005}
      >
        <div className="p-7">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[28px] font-[700] text-dark-gray">
              Edit Card Image
            </h2>
            <button
              onClick={() => setEditModal(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div className="w-full flex relative h-[520px] items-center justify-center ">
            <img
              src={file ? URL.createObjectURL(file) : img}
              alt="card"
              className="w-full h-full object-container"
            />

            <label
              htmlFor="id"
              className=" absolute top-0 cursor-pointer rounded-2xl left-0 w-full h-full flex bg-black/20 flex-col items-center justify-center text-[#E2DDFF] "
            >
              <Icon icon="lucide:image-plus" className=" text-[30px]" />
              <h2 className="text-[18px] font-medium">Tap To Change Image</h2>
              <input
                id="id"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className=" hidden"
              />
            </label>

          </div>
          <div className=" flex items-center justify-between flex-wrap gap-3 mb-2 mt-5 ">
            <div className=" border rounded-[8px] border-[#E1E9F8] md:w-[50%] w-full flex items-center justify-between">
              <p className="text-[14px] w-[250px] md:w-[200px] font-[500] bg-[#E1E9F8] py-3 px-5 text-dark-gray">
                {dateTitle}
              </p>

              <input
                type={"date"}
                defaultValue={date}
                className="w-full border-none outline-none py-2 px-4"
              />
            </div>
            <div className="flex items-center gap-3">
              <CustomButton onClick={() => { setEditModal(false); saveChange(); }}>
                <span className="flex items-center text-white gap-2">
                  <span>Save Changes</span>
                </span>
              </CustomButton>
              <button
                onClick={() => setEditModal(false)}
                className=" border border-dark-gray/40  flex items-center justify-center text-dark-gray hover:bg-primary  duration-300 px-5  h-[40px] rounded-[8px] font-medium hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal> */}

      {/* <DeleteModal
        modalOPen={deletModal}
        onDelete={() => handelDelete()}
        setModalOpen={setDeleteModal}
        title={"Delete Image"}
        title2={"Are You Sure?"}
        isLoading={deleteLoading}
      /> */}
    </>
  );
};

export default CardModal;
