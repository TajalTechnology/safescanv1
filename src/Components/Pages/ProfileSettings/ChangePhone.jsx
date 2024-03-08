import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import CustomButton from "../../Shared/CustomButton";
import CustomInput from "../../Shared/input/CustomInput";
import PasswordInput from "../../Shared/input/PasswordInput";
import { useForm } from "react-hook-form";
import OtpModal from "./OtpModal";
import { usePhoneChangeMutation } from "../../../redux/features/admin/adminApi";
import toast from "react-hot-toast";
import SuccessToast from "../../Shared/Toast/SuccessToast";
import ErrorToast from "../../Shared/Toast/ErrorToast";

const ChangePhone = ({ modalOPen, setModalOpen,refetch }) => {
  const [opt, setOtp] = useState(false);
  const [lastData,setLastData] = useState()
  const [phoneChange,{isLoading,isSuccess,error,data}] = usePhoneChangeMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      const message = "Send OTP";
      toast.custom(<SuccessToast message={message} />);
      setModalOpen(false);
      setOtp(true)
      reset();
    }
    if (error) {
      toast.custom(
        <ErrorToast message={error?.data.error || error?.data.message} />
      );
    }
  }, [isSuccess, error]);

  const onSubmit = async(data) => {
    console.log(data)
    setLastData(data)
    await phoneChange(data)
  };

  console.log(data)


  return (
    <>
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
      >
        <div className="z-[50000000] rounded-[20px] bg-white">
          <div className=" flex items-center justify-between px-9 pt-6 pb-4">
            <h2 className=" text-[28px] font-bold text-dark-gray">
              {"Change Phone Number"}
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
              <CustomInput
                label={"New Number"}
                type={"number"}
                register={register("phone", {
                  required: {
                    value: true,
                    message: "Please enter phone",
                  },
                })}
                error={errors.phone}
                placeholder={"Enter Your New Phone Number"}
              />
              <PasswordInput
                label={"Password"}
                type={"password"}
                register={register("password", {
                  required: {
                    value: true,
                    message: "Please enter Password",
                  },
                })}
                error={errors.password}
                placeholder={"Enter Your Password"}
              />
            </div>
            <div className="mt-[30px] flex items-center gap-5">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="font-[500] text-[14px] h-[40px] w-full bg-[#664DFF]/10 duration-300 px-5 rounded-[4px] text-primary hover:bg-primary hover:text-white"
              >
                Cancel
              </button>
              <CustomButton className={" w-full"}>
                {isLoading ? "Loading..." : "Continue"}
              </CustomButton>
            </div>
          </form>
        </div>
      </Modal>
      <OtpModal
        refetch={refetch}
        modalOPen={opt}
        setModalOpen={setOtp}
        oldData={data}
        lastData={lastData}
      />
    </>
  );
};

export default ChangePhone;
