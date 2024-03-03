import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../Shared/modal/CustomModal";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";
import { useUpdateProductMutation } from "../../../redux/features/admin/adminApi";
import DatePicker from "react-datepicker";
import { formattedDate } from "../../../helper/jwt";
import toast from "react-hot-toast";
import SuccessToast from "../../Shared/Toast/SuccessToast";
import ErrorToast from "../../Shared/Toast/ErrorToast";

const ProductsEdit = ({ refetch, item, setModalOpen, modalOPen }) => {
  const [active, setActive] = useState(item?.status);
  const getLastDate = formattedDate(item?.last_test_date)
  const getNextDate = formattedDate(item?.next_test_date)
  // const [lastDate, setLastDate] = useState(getLastDate);
  const [nextDate, setNextDate] = useState(getNextDate);
  const formattedNextDate = formattedDate(nextDate)

  const [updateProduct, { isLoading, isSuccess, error }] = useUpdateProductMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Product Successfully Updated";
      toast.custom(<SuccessToast message={message} />);
      refetch();
      setModalOpen(false);
    }
    if (error) {
      const errorMsg = error?.data.error || error?.data.message
      toast.custom(<ErrorToast message={errorMsg} />);
    }
  }, [isSuccess, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      product_name: item.product_name,
      // product_number: item.product_number,
      tester_name: item.tester_name,
      location: item.location,
      site_address: item.site_address,
      // note: item.note,
      // last_test_date: item.last_test_date,
      // next_test_date: formattedDate(item.next_test_date),
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('product_name', data?.product_name);
    formData.append('location', data?.location);
    formData.append('site_address', data?.site_address);
    // formData.append('note', data?.note);
    // formData.append('last_test_date', formattedLastDate);
    formData.append('next_test_date', formattedNextDate);
    formData.append('status', active);
    const id = item?.productid;

    await updateProduct({ id, body: formData });
    setModalOpen(false);
  };

  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={590}
      title="Edit Product"
      buttonText={isLoading ? <><p>Loading...</p></> : "Save Changes"}
    >
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
          error={errors.firstName}
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
        register={register("site_address")}
        placeholder={"Enter Site Address"}
      />
      <div>
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="tester"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            {'Testers Name'}
          </label>
          <input
            className="py-[15px] h-[44px] px-[14px]  text-[#A3AED0] placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
            type={'text'}
            required
            disabled
            id="tester"
            {...register("tester_name", {
              required: {
                value: true,
                message: "",
              },
            })}
          />

        </div>
      </div>
      {/* <CustomInput
        label={"Testers Name"}
        type={"text"}
        register={register("tester_name")}
        placeholder={"Enter tester Name"}
      /> */}

      <div className=" flex items-center gap-4 justify-between">
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Last Test Date
          </label>
          <DatePicker
            selected={getLastDate}
            disabled
            required
            placeholderText="Select Date"
            className="w-full border border-gray-300 rounded-[10px] pl-2 pr-8 py-2.5 text-[#A3AED0] "
          />
        </div>
        <div className="flex flex-col items-start w-full mt-3">
          <label
            htmlFor="otp"
            className="mb-1.5 font-medium text-base text-dark-gray"
          >
            Next Test Date
          </label>
          <DatePicker
            selected={nextDate}
            onChange={(date) => setNextDate(date)}
            required
            placeholderText="Select Date"
            className="w-full border border-gray-300 rounded-[10px] pl-2 pr-8 py-2.5 text-dark-gray "
          />
        </div>
      </div>

      <CustomInput
        label={"Location"}
        type={"text"}
        register={register("location")}
        placeholder={"Enter level 3"}
      />

      <div className=" mt-5">
        <h3 className="mb-1.5 font-medium text-base text-dark-gray">
          Fine Status
        </h3>
        <div className="w-full flex item-center justify-center gap-5">
          <button
            onClick={() => setActive("passed")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${active === "passed"
              ? "bg-[#4CC800] text-white"
              : " bg-transparent text-[#4CC800]"
              }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${active === "passed" ? " text-white" : "text-[#4CC800]/30 "
                }`}
            />
            Passed
          </button>

          <button
            onClick={() => setActive("attention")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#FFC000] ${active === "attention"
              ? "bg-[#FFC000] text-white"
              : " bg-transparent text-[#FFC000]"
              }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${active === "attention" ? " text-white" : "text-[#FFC000]/30 "
                }`}
            />
            Needs Attention
          </button>

          <button
            onClick={() => setActive("failed")}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${active === "failed"
              ? "bg-[#F40909] text-white"
              : " bg-transparent text-[#F40909]"
              }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${active === "failed" ? " text-white" : "text-[#F40909]/30 "
                }`}
            />
            Failed
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col items-start w-full mt-3">
        <label
          htmlFor="otp"
          className="mb-1.5 font-medium text-base text-dark-gray"
        >
          Note
        </label>
        <textarea
          className="py-[15px] h-[74px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
          name=""
          {...register("note")}
        ></textarea>
      </div> */}
    </CustomModal>
  );
};

export default ProductsEdit;
