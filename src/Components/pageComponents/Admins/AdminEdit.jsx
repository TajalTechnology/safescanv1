import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../Shared/modal/CustomModal";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";
import { useUpdateUserMutation } from "../../../redux/features/admin/adminApi";
import toast from "react-hot-toast";

const AdminEdit = ({ item, setModalOpen, refetch, modalOPen }) => {
  const [active, setActive] = useState(0);
  const [updateUser, { isLoading, isSuccess, error }] = useUpdateUserMutation();
  // console.log("modal Data=======", item);

  useEffect(() => {
    if (isSuccess) {
      const message = "Update Admin success";
      toast.success(message);
      refetch();
      setModalOpen(false);
    }
    if (error) {
      toast.error(error?.data.error || error?.data.message);
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (item) {
      setActive(item?.fine_status);
    }
  }, [item]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: item.first_name,
      last_name: item.last_name,
      email: item.email,
      phone: item.phone,
      site_address: item.site_address,
      emloyeer_name: item.emloyeer_name,
      minor: item.minor,
      major: item.major,
      dismissal: item.dismissal,
    },
  });

  const onSubmit = (data) => {
    const bodyData = {
      username: item?.username,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      site_address: data.site_address,
      emloyeer_name: data.emloyeer_name,
      minor: Number(data.minor),
      major: Number(data.major),
      dismissal: Number(data.dismissal),
    };
    const id = item?.userid;
    updateUser({ id, bodyData });
    console.log("update data=====", bodyData);

    // setModalOpen(false);
  };

  return (
    <CustomModal
      modalOPen={modalOPen}
      setModalOpen={setModalOpen}
      handleSubmit={handleSubmit(onSubmit)}
      width={590}
      title="Edit Worker"
      buttonText={isLoading ? "Loading..." : "Save Changes"}
    >
      <div className="flex items-center gap-4">
        <CustomInput
          label={"First Name"}
          type={"text"}
          register={register("first_name", {
            required: {
              value: true,
              message: "Please enter first name",
            },
          })}
          error={errors.first_name}
          placeholder={"Enter First Name"}
        />

        <CustomInput
          label={"Last Name"}
          type={"text"}
          register={register("last_name", {
            required: {
              value: true,
              message: "Please enter last name",
            },
          })}
          error={errors.last_name}
          placeholder={"Enter Last Name"}
        />
      </div>

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
        placeholder={"Mobile Number"}
      />

      <CustomInput
        label={"Email Address"}
        type={"email"}
        register={register("email", {
          required: {
            value: true,
            message: "Please enter Email Address",
          },
        })}
        error={errors.email}
        placeholder={"Email Address"}
      />

      <CustomInput
        label={"Site Address"}
        type={"text"}
        register={register("site_address")}
        placeholder={"Enter Site Address"}
      />
      <CustomInput
        label={"Employers Name"}
        type={"text"}
        register={register("emloyeer_name")}
        placeholder={"Enter Employers Name"}
      />

      <div className=" flex items-center gap-4 justify-between">
        <CustomInput
          label={"level 1"}
          type={"text"}
          register={register("minor")}
          placeholder={"Enter level 1"}
        />
        <CustomInput
          label={"level 2"}
          type={"text"}
          register={register("major")}
          placeholder={"Enter level 2 "}
        />
        <CustomInput
          label={"level 3"}
          type={"text"}
          register={register("dismissal")}
          placeholder={"Enter level 3"}
        />
      </div>

      <div className=" mt-5">
        <h3 className="mb-1.5 font-medium text-base text-dark-gray">
          Fine Status
        </h3>
        <div className="w-full flex item-center justify-center gap-5">
          <button
            onClick={() => setActive(0)}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${
              active === 0
                ? "bg-[#4CC800] text-white"
                : " bg-transparent text-[#4CC800]"
            }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${
                active === 0 ? " text-white" : "text-[#4CC800]/30 "
              }`}
            />
            Fines Paid
          </button>

          <button
            onClick={() => setActive(1)}
            type="button"
            className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${
              active === 1
                ? "bg-[#F40909] text-white"
                : " bg-transparent text-[#F40909]"
            }`}
          >
            <Icon
              icon="material-symbols:check"
              className={`text-[18px] ${
                active === 1 ? " text-white" : "text-[#F40909]/30 "
              }`}
            />
            Fines Due
          </button>
        </div>
      </div>
    </CustomModal>
  );
};

export default AdminEdit;
