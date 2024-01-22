import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../Shared/modal/CustomModal";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";

const ProductsEdit = ({ item, setModalOpen, modalOPen }) => {
  const [active, setActive] = useState("Needs Attention");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: item.name,
      number: item.number,
      address: item.address,
      testersName: item.testersName,
      Location: item.Location,
      note: item.note,
      LastTestDate: "2024-04-01",
      NextTestDate: "2024-04-02",
    },
  });

  const onSubmit = (data) => {
    setModalOpen(false);
  };

  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={590}
      title="Edit Product"
      buttonText={"Save Changes"}
    >
      <div className="flex items-center gap-4">
        <CustomInput
          label={"Product Name"}
          type={"text"}
          register={register("name", {
            required: {
              value: true,
              message: "Please enter first name",
            },
          })}
          error={errors.firstName}
          placeholder={"Enter First Name"}
        />

        <CustomInput
          label={"Product Number"}
          type={"text"}
          register={register("number", {
            required: {
              value: true,
              message: "Please enter Mobile Number",
            },
          })}
          error={errors.number}
          placeholder={"Mobile Number"}
        />
      </div>

      <CustomInput
        label={"Site Address"}
        type={"text"}
        register={register("address")}
        placeholder={"Enter Site Address"}
      />
      <CustomInput
        label={"Testers Name"}
        type={"text"}
        register={register("testersName")}
        placeholder={"Enter Employers Name"}
      />

      <div className=" flex items-center gap-4 justify-between">
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Last Test Date
          </label>
          <input
            className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
            type={"date"}
            id="otp"
            {...register("LastTestDate")}
          />
        </div>
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Next Test Date
          </label>
          <input
            className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
            type={"date"}
            id="otp"
            {...register("NextTestDate")}
          />
        </div>
      </div>

      <CustomInput
        label={"Location"}
        type={"text"}
        register={register("Location")}
        placeholder={"Enter level 3"}
      />

      <div className=" mt-5">
        <h3 className="mb-1.5 font-medium text-base text-dark-gray">
          Fine Status
        </h3>
        <div className="w-full flex item-center justify-center gap-5">
          <button
            onClick={() => setActive("Passed")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${
              active === "Passed"
                ? "bg-[#4CC800] text-white"
                : " bg-transparent text-[#4CC800]"
            }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${
                active === "Passed" ? " text-white" : "text-[#4CC800]/30 "
              }`}
            />
            Passed
          </button>

          <button
            onClick={() => setActive("Needs Attention")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#FFC000] ${
              active === "Needs Attention"
                ? "bg-[#FFC000] text-white"
                : " bg-transparent text-[#FFC000]"
            }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${
                active === "Needs Attention" ? " text-white" : "text-[#FFC000]/30 "
              }`}
            />
            Needs Attention
          </button>

          <button
            onClick={() => setActive("Failed")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${
              active === "Failed"
                ? "bg-[#F40909] text-white"
                : " bg-transparent text-[#F40909]"
            }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${
                active === "Failed" ? " text-white" : "text-[#F40909]/30 "
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
          Last Test Date
        </label>
        <textarea
          className="py-[15px] h-[74px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
          name=""
          {...register("note")}
        ></textarea>
      </div>
    </CustomModal>
  );
};

export default ProductsEdit;
