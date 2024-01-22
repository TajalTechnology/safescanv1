import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../../Shared/modal/CustomModal";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";

const WorkersEdit = ({ item, setModalOpen, modalOPen }) => {

    const [active,setActive]=useState("due")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      number: item.number,
      address: item.address,
      employersName: item.employersName,
      minor: item.minor,
      major:item.major,
      dismissal:item.dismissal,
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
      title="Edit Worker"
      buttonText={"Save Changes"}
    >
      <div className="flex items-center gap-4">
        <CustomInput
          label={"First Name"}
          type={"text"}
          register={register("firstName", {
            required: {
              value: true,
              message: "Please enter first name",
            },
          })}
          error={errors.firstName}
          placeholder={"Enter First Name"}
        />

        <CustomInput
          label={"Last Name"}
          type={"text"}
          register={register("lastName", {
            required: {
              value: true,
              message: "Please enter last name",
            },
          })}
          error={errors.lastName}
          placeholder={"Enter Last Name"}
        />
      </div>

      <CustomInput
        label={"Mobile Number"}
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
        register={register("address")}
        placeholder={"Enter Site Address"}
      />
      <CustomInput
        label={"Employers Name"}
        type={"text"}
        register={register("employersName")}
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
           <h3 className="mb-1.5 font-medium text-base text-dark-gray">Fine Status</h3> 
           <div className="w-full flex item-center justify-center gap-5">
                <button onClick={()=>setActive("paid")} type="button" className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#4CC800] ${active==="paid" ? "bg-[#4CC800] text-white" : " bg-transparent text-[#4CC800]"}`}><Icon icon="material-symbols:check" className={`text-[18px] ${active==="paid" ? " text-white" : "text-[#4CC800]/30 "}`}/>Fines Paid</button>

                <button onClick={()=>setActive("due")} type="button" className={`py-1 px-3 h-[30px] rounded-full text-[12px] font-medium flex items-center gap-2  border border-[#F40909] ${active==="due" ? "bg-[#F40909] text-white" : " bg-transparent text-[#F40909]"}`}><Icon icon="material-symbols:check" className={`text-[18px] ${active==="due" ? " text-white" : "text-[#F40909]/30 "}`}/>Fines Due</button>
           </div>
      </div>
    </CustomModal>
  );
};

export default WorkersEdit;
