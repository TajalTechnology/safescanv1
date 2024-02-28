import { Icon } from "@iconify/react";
import { Modal } from "antd";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../../Shared/input/CustomInput";
import CustomButton from "../../../Shared/CustomButton";
import PasswordInput from "../../../Shared/input/PasswordInput";
import { useCreateCustomerMutation } from "../../../../redux/features/superAdmin/superApi";
import toast from "react-hot-toast";
import SuccessToast from "../../../Shared/Toast/SuccessToast";
import ErrorToast from "../../../Shared/Toast/ErrorToast";

const CustomerCreate = ({ modalOPen, setModalOpen,refetch1 }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [createCustomer, { isSuccess, isLoading, error }] =
    useCreateCustomerMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Create Customer success";
      toast.custom(<SuccessToast message={message} />);
      setModalOpen(false)
      refetch1()
    }
    if (error) {
      console.log("===error====", error);
      toast.custom(<ErrorToast message={error?.data.error || error?.data.message} />);
    }
  }, [isSuccess, error]);

  const onSubmit = (data) => {
    const updateData = {
      ...data,
      usertype: "super_admin",
    };
    createCustomer(updateData)
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
      width={560}
      className={``}
      style={modalStyle}
    >
      <div>
        <div className="z-[50000000] rounded-[20px] bg-white">
          <div className=" flex items-center justify-between px-9 pt-6 pb-4">
            <h2 className=" text-[28px] font-bold text-dark-gray">
              Create A Customer
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
            className="w-full mt-[0px] px-9 pb-9 h-[75vh] overflow-y-scroll"
          >
            <div className=" flex items-center gap-5 justify-between">
              <CustomInput
                label={"First Name"}
                type={"text"}
                register={register("first_name", {
                  required: {
                    value: true,
                    message: "Enter First Name",
                  },
                })}
                error={errors.first_name}
                placeholder={"Create username"}
              />
              <CustomInput
                label={"Last Name"}
                type={"text"}
                register={register("last_Name", {
                  required: {
                    value: true,
                    message: "Please enter Password",
                  },
                })}
                error={errors.last_Name}
                placeholder={"Enter Last Name"}
              />
            </div>
            <CustomInput
              label={"UserName"}
              type={"text"}
              register={register("username", {
                required: {
                  value: true,
                  message: "Please enter Mobile Number",
                },
              })}
              error={errors.username}
              placeholder={"Enter Phone Number"}
            />
            <CustomInput
              label={"Mobile Number"}
              type={"text"}
              register={register("phone", {
                required: {
                  value: true,
                  message: "Please enter Mobile Number",
                },
              })}
              error={errors.phone}
              placeholder={"Enter Phone Number"}
            />
            <CustomInput
              label={"Email Address"}
              type={"text"}
              register={register("email", {
                required: {
                  value: true,
                  message: "Please enter Email",
                },
              })}
              error={errors.email}
              placeholder={"Enter Email Address"}
            />
            <CustomInput
              label={"Site Address"}
              type={"text"}
              register={register("site_address", {
                required: {
                  value: true,
                  message: "Please enter Site Address",
                },
              })}
              error={errors.site_address}
              placeholder={"Enter Site Address"}
            />
            <CustomInput
              label={"Employers Name"}
              type={"text"}
              register={register("emloyeer_name", {
                required: {
                  value: true,
                  message: "Please enter Employers Name",
                },
              })}
              error={errors.emloyeer_name}
              placeholder={"Enter  Employers Name"}
            />

            <PasswordInput
              label={"Create Password "}
              register={register("password", {
                required: {
                  value: true,
                  message: "Please enter Create Password ",
                },
              })}
              error={errors.password}
              placeholder={"Enter Password "}
            />
            <PasswordInput
              label={"Re-enter Password "}
              register={register("confirm_password", {
                required: {
                  value: true,
                  message: "Please enter Enter Password ",
                },
              })}
              error={errors.confirm_password}
              placeholder={"Enter Enter Password "}
            />
            <div className="mt-[20px] flex items-center gap-5">
              <CustomButton className={" w-full"}>{isLoading ? "Loading..." : "Create New"}</CustomButton>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default CustomerCreate;
