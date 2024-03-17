import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../Shared/modal/CustomModal";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import { formattedDate } from "../../../helper/jwt";
import toast from "react-hot-toast";
import SuccessToast from "../../Shared/Toast/SuccessToast";
import ErrorToast from "../../Shared/Toast/ErrorToast";
import axios from "axios";
import { useSelector } from "react-redux";
import Unverified from "../../Shared/modal/Unverified";

const AddProduct = ({ refetch, setModalOpen, modalOPen }) => {
  const [active, setActive] = useState("passed");
  const [lastDate, setLastDate] = useState(new Date());
  const [nextDate, setNextDate] = useState(new Date());
  const formattedNextDate = formattedDate(nextDate);
  const [imageFiles, setImageFiles] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [veryfyModal, setVeryfyModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("product_name", data?.product_name);
    formData.append("location", data?.location);
    formData.append("site_address", data?.site_address);
    formData.append("note", data?.note);
    formData.append("next_test_date", formattedNextDate);
    formData.append("status", active);
    if (active === "passed") {
      formData.append("passed", "true");
    }
    if (active === "attention") {
      formData.append("attention", "true");
    }
    if (active === "failed") {
      formData.append("failed", "true");
    }

    // Append image files to the FormData object
    imageFiles.forEach((image, index) => {
      formData.append(`files`, image);
    });

    try {
      const response = await axios.post(
        `https://23zw2glbhk.execute-api.us-east-1.amazonaws.com/api/v1/products`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("=======rrtrtrtrtrtrt======", response.status);

      if (response.status === 201) {
        // Handle success
        handleSuccess();
      } else {
        // Handle unexpected response status
        if (response.status === 401) {
          setVeryfyModal(true);
          setModalOpen(false);
        } else {
          handleUnexpectedStatus();
        }
      }
    } catch (error) {
      setVeryfyModal(true);
      setModalOpen(false);
    } finally {
      setLoading(false);
    }
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

  return (
    <>
      <CustomModal
        modalOPen={modalOPen}
        setModalOpen={setModalOpen}
        handleSubmit={handleSubmit(onSubmit)}
        width={590}
        title="Add Product"
        buttonText={
          loading ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            "Add Product"
          )
        }
      >
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Product Image
          </label>
          <div className=" w-full cursor-pointer h-[175px] relative flex items-center justify-center rounded-2xl bg-[#2D2D2D]/5 border-2 border-dashed border-[#2D2D2D]">
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
                      <button
                        type="button"
                        onClick={() => handleImageDelete(index)}
                        className=" absolute group-hover:flex hidden top-0 left-0 w-full h-full bg-black/50  items-center justify-center"
                      >
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
        <div className="flex items-center gap-4">
          <CustomInput
            label={"Product Name"}
            type={"text"}
            register={register("product_name", {
              required: {
                value: true,
                message: "Please enter product name",
              },
            })}
            error={errors.product_name}
            placeholder={"Enter product Name"}
          />

          {/* <CustomInput
          label={"Product Number"}
          type={"text"}
          register={register("product_number", {
            required: {
              value: true,
              message: "Please enter Mobile Number",
            },
          })}
          error={errors.number}
          placeholder={"Mobile Number"}
        /> */}
        </div>

        <CustomInput
          label={"Site Address"}
          type={"text"}
          register={register("site_address", {
            required: {
              value: true,
              message: "Please enter site address",
            },
          })}
          error={errors.site_address}
          placeholder={"Enter Site Address"}
        />
        {/* <CustomInput
        label={"Testers Name"}
        type={"text"}
        register={register("tester_name")}
        placeholder={"Enter tester Name"}
      /> */}

        <div id="date" className="grid  grid-cols-1 lg:grid-cols-2 gap-5 ">
          <div className="flex flex-col items-start  mt-3">
            <label
              htmlFor="last"
              className="mb-1.5 font-medium text-base text-dark-gray"
            >
              Last Test Date
            </label>
            <DatePicker
              selected={lastDate}
              onChange={(date) => setLastDate(date)}
              disabled
              placeholderText="Select Date"
              className=" border w-full  border-gray-300 rounded-[10px] focus:border-primary outline-none text-[#A3AED0] pl-2 pr-8 py-2.5 "
            />
          </div>
          <div className="flex flex-col items-start mt-3">
            <label
              htmlFor="otp"
              className="mb-1.5 font-medium text-base text-dark-gray"
            >
              Next Test Date
            </label>
            <DatePicker
              selected={nextDate}
              onChange={(date) => setNextDate(date)}
              placeholderText="Select Date"
              className="w-full border border-gray-300 rounded-[10px] pl-2 pr-8 py-2.5 "
            />
          </div>
        </div>

        <CustomInput
          label={"Location"}
          type={"text"}
          register={register("location", {
            required: {
              value: true,
              message: "Please enter location",
            },
          })}
          error={errors.location}
          placeholder={"Enter Location"}
        />

        <div className=" mt-5">
          <h3 className="mb-1.5 font-medium text-base text-dark-gray">
            Fine Status
          </h3>
          <div className="w-full flex item-center justify-center gap-5">
            <button
              onClick={() => setActive("passed")}
              type="button"
              className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${
                active === "passed"
                  ? "bg-[#4CC800] text-white"
                  : " bg-transparent text-[#4CC800]"
              }`}
            >
              <Icon
                icon="material-symbols:check"
                className={`text-[18px] ${
                  active === "passed" ? " text-white" : "text-[#4CC800]/30 "
                }`}
              />
              Passed
            </button>

            <button
              onClick={() => setActive("attention")}
              type="button"
              className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#FFC000] ${
                active === "attention"
                  ? "bg-[#FFC000] text-white"
                  : " bg-transparent text-[#FFC000]"
              }`}
            >
              <Icon
                icon="material-symbols:check"
                className={`text-[18px] ${
                  active === "attention" ? " text-white" : "text-[#FFC000]/30 "
                }`}
              />
              Needs Attention
            </button>

            <button
              onClick={() => setActive("failed")}
              type="button"
              className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${
                active === "failed"
                  ? "bg-[#F40909] text-white"
                  : " bg-transparent text-[#F40909]"
              }`}
            >
              <Icon
                icon="material-symbols:check"
                className={`text-[18px] ${
                  active === "failed" ? " text-white" : "text-[#F40909]/30 "
                }`}
              />
              Failed
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Notes
          </label>
          <textarea
            className="py-[15px] h-[74px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
            name=""
            {...register("note")}
          ></textarea>
        </div>
      </CustomModal>

      <Unverified modalOPen={veryfyModal} setModalOpen={setVeryfyModal} />
    </>
  );
};

export default AddProduct;
