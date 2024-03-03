import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "axios";
import SuccessToast from "./Toast/SuccessToast";
import toast from "react-hot-toast";
import ErrorToast from "./Toast/ErrorToast";

const StrikeModal = ({ modalOPen, setModalOpen, refetch }) => {
  const [active, setActive] = useState("minor");
  const [lastDate, setLastDate] = useState(new Date());
  const [nextDate, setNextDate] = useState();
  const [imageFiles, setImageFiles] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // setLoading(true);
    // const formData = new FormData();
    // formData.append("product_name", data?.product_name);
    // formData.append("location", data?.location);
    // formData.append("site_address", data?.site_address);
    // formData.append("note", data?.note);
    // formData.append("status", active);
    // imageFiles.forEach((image, index) => {
    //   formData.append(`files`, image);
    // });
    // try {
    //   const response = await axios.post(`/api/v1/products`, formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });
    //   if (response.status === 201) {
    //     handleSuccess();
    //   } else {
    //     handleUnexpectedStatus();
    //   }
    // } catch (error) {
    //   handleError(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleSuccess = () => {
    setModalOpen(false);
    setImageFiles([]);
    refetch();
    reset();
    const message = "Product added successfully.";
    toast.custom(<SuccessToast message={message} />);
  };

  const handleUnexpectedStatus = () => {
    toast.custom(
      <ErrorToast message={"Unexpected response status. Please try again."} />
    );
  };

  const handleError = (error) => {
    console.error("Error:", error);
    toast.custom(
      <ErrorToast message={"An error occurred. Please try again."} />
    );
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setImageFiles([...imageFiles, ...files]);
  };

  const handleImageDelete = (index) => {
    const newImages = [...imageFiles];
    newImages.splice(index, 1);
    setImageFiles(newImages);
  };

  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };
  return (
    <Modal
      centered
      cancelText
      cancelButtonProps
      footer={null}
      open={modalOPen}
      closeIcon={null}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      width={650}
      style={modalStyle}
    >
      <div className="z-[50000000] rounded-[20px] bg-white">
        <div className=" flex items-center justify-between px-9 pt-6 pb-4">
          <h2 className=" text-[28px] font-bold text-dark-gray">
            {"Strike Admin"}
          </h2>
          <button
            onClick={() => setModalOpen(false)}
            className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
          >
            <Icon icon="material-symbols:close" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-[0px] max-h-[75vh] overflow-y-scroll px-9 pb-9"
        >
          <div className="">
            <div className=" mt-5">
              <h3 className="mb-1.5 font-medium text-base text-dark-gray">
              Select Strike Option
              </h3>
              <div className="w-full flex item-center justify-center gap-5">
                <button
                  onClick={() => setActive("minor")}
                  type="button"
                  className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${
                    active === "minor"
                      ? "bg-[#4CC800] text-white"
                      : " bg-transparent text-[#4CC800]"
                  }`}
                >
                  <Icon
                    icon="material-symbols:check"
                    className={`text-[18px] ${
                      active === "minor" ? " text-white" : "text-[#4CC800]/30 "
                    }`}
                  />
                  Minor
                </button>

                <button
                  onClick={() => setActive("major")}
                  type="button"
                  className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#FFC000] ${
                    active === "major"
                      ? "bg-[#FFC000] text-white"
                      : " bg-transparent text-[#FFC000]"
                  }`}
                >
                  <Icon
                    icon="material-symbols:check"
                    className={`text-[18px] ${
                      active === "major"
                        ? " text-white"
                        : "text-[#FFC000]/30 "
                    }`}
                  />
                  Major
                </button>

                <button
                  onClick={() => setActive("dismissal")}
                  type="button"
                  className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${
                    active === "dismissal"
                      ? "bg-[#F40909] text-white"
                      : " bg-transparent text-[#F40909]"
                  }`}
                >
                  <Icon
                    icon="material-symbols:check"
                    className={`text-[18px] ${
                      active === "dismissal" ? " text-white" : "text-[#F40909]/30 "
                    }`}
                  />
                  Dismissal
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start w-full mt-3">
              <label
                htmlFor="otp"
                className="mb-1.5 font-medium text-base text-dark-gray"
              >
                Write Note
              </label>
              <textarea
                className="py-[15px] h-[74px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                name=""
                {...register("note")}
                placeholder="Some Note Here..."
              ></textarea>
            </div>
            <div className="flex flex-col items-start w-full mt-3">
        <label
          htmlFor="otp"
          className="mb-1.5 font-medium text-base text-dark-gray"
        >
          Attach Image
        </label>
        <div className=" w-full cursor-pointer h-[175px] relative flex items-center justify-center rounded-2xl bg-[#2D2D2D]/5 border border-dashed border-[#2D2D2D]">
          <div className=" flex items-center justify-center flex-col">
            <Icon
              icon="mynaui:cloud-upload"
              className="text-[#2D2D2D] text-[50px]"
            />
            <h3 className=" text-[14px] font-bold text-[#2D2D2D]">
              Upload Image
            </h3>
          </div>
          <input
            type="file"
            multiple
            onChange={handleFileSelect}
            className=" absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
          />
        </div>
        <div>
          {imageFiles ? (
            <>
              <div className=" flex flex-wrap gap-2 items-center py-2">
                {imageFiles?.map((file, index) => (
                  <div
                    key={index}
                    className=" w-[100px] relative h-[70px] group rounded-md overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      className=" w-full h-full object-fill"
                    />
                    <button type="button" onClick={()=>handleImageDelete(index)} className=" absolute group-hover:flex hidden top-0 left-0 w-full h-full bg-black/50  items-center justify-center">
                      <Icon
                        icon="gg:trash-empty"
                        className="text-[22px] text-white"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
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
            <CustomButton className={" w-full"}>Strike</CustomButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default StrikeModal;
