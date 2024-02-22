import { Modal } from "antd";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../../Shared/input/CustomInput";
import { Icon } from "@iconify/react";
import CustomButton from "../../Shared/CustomButton";
import { useCreateUserMutation, useCreateUserQuery } from "../../../redux/features/admin/adminApi";

const CreatedAdminModal = ({ modalOPen, setModalOpen }) => {
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState("email")
  const [shareText, setShareText] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [
    createUser,
    { isLoading, isError, error, isSuccess },
  ] = useCreateUserMutation();

  const onSubmit = async (data) => {
    createUser(
      {
        username: data?.username,
        password: data?.Password,
        confirm_password: data?.Password,
        usertype: "admin",
      }

    );
    console.log(data);
    setModalOpen(false);
    setSuccess(true);
  };
  // const onSubmit = async (data) => {
  //   try {
  //     const userInfo = ;

  //     // Dispatch the createUserQuery to create a new user
  //     const result = await useCreateUserQuery(userInfo).unwrap();

  //     // If the user creation is successful, close the modal and set success to true
  //     if (result.status === "success") {
      
  //     } else {
  //       // Handle error cases here, if any
  //       console.error("User creation failed:", result.error);
  //     }
  //   } catch (error) {
  //     console.error("Error creating user:", error);
  //   }
  // };


  const handleShare = () => {
    if (type === 'email') {
      if (shareText.trim() !== '') {
        console.log(shareText)
        // Create a mailto link with the email address
        const mailtoLink = `mailto:${encodeURIComponent(shareText)}`;

        // Open the default email client
        window.location.href = mailtoLink;
        setSuccess(false)
      }
    }
    if (type === 'Whatsapp') {
      if (shareText.trim() !== '') {

        const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(shareText)}`;

        // Open WhatsApp
        window.open(whatsappLink, '_blank');
        setSuccess(false)
      }
    }



  };

  const modalStyle = {
    padding: 0, // Set padding to 0 for the Modal component
  };
  return (
    <div>
      {/* -----create admin------------- */}
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={450}
        className={``}
        style={modalStyle}
      >
        <div>
          <div className="z-[50000000] rounded-[20px] bg-white">
            <div className=" flex items-center justify-between px-9 pt-6 pb-4">
              <h2 className=" text-[28px] font-bold text-dark-gray">
                Create New Admin
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
              className="w-full mt-[0px] px-9 pb-9"
            >
              <div className="">
                <CustomInput
                  label={"Username"}
                  type={"text"}
                  register={register("username", {
                    required: {
                      value: true,
                      message: "Please enter Username",
                    },
                  })}
                  error={errors.username}
                  placeholder={"Create username"}
                />
                <CustomInput
                  label={"Password"}
                  type={"password"}
                  register={register("Password", {
                    required: {
                      value: true,
                      message: "Please enter Password",
                    },
                  })}
                  error={errors.Password}
                  placeholder={"Create Password"}
                />
              </div>
              <div className="mt-[20px] flex items-center gap-5">
                <CustomButton className={" w-full"}>Create New</CustomButton>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      {/* ----------success and share----------- */}
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={success}
        closeIcon={null}
        styles={{ borderRadius: 30 }}
        onOk={() => setSuccess(false)}
        onCancel={() => setSuccess(false)}
        width={450}
      >
        <div className=" p-6 ">
          <div className=" rounded-[30px]">
            <div className=" mb-3">
              <img src="/Images/success.svg" alt="" />
            </div>
            <div>
              <h2 className=" text-[24px] font-[700] text-[#1B2559]">
                Admin Created Successfully!
              </h2>
              <p className="text-[16px] font-[400] text-info">
                Now, You Can Share With Admin Access Details Via Email Or
                Whatsapp.
              </p>
            </div>

            <div className=" pt-4">
              <div className="w-full flex items-center justify-between">
                <button onClick={() => setType("email")} className={`text-base font-medium ${type === "email" ? "text-dark-gray" : "text-primary"} `}>Share Via Email</button>
                <button onClick={() => setType("Whatsapp")} className={`text-base font-medium ${type === "Whatsapp" ? "text-dark-gray" : "text-primary"}`}>Share Via Whatsapp</button>
              </div>
              <input
                className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                type={type === "email" ? "email" : "text"}
                required
                placeholder={type === "email" ? "Enter Email Address" : "Enter Whatsapp Number"}
                id="otp"
                onChange={(e) => setShareText(e.target.value)}

              />
            </div>
          </div>

          <div className=" flex items-center justify-center gap-5 pt-[20px]">
            <button
              onClick={() => setSuccess(false)}
              className="font-bold w-full  h-[40px] px-6 hover:text-red-500 hover:border-red-500 duration-300 rounded-[10px] bg-transparent text-secondary border border-secondary"
            >
              Skip For Now
            </button>
            <button
              onClick={handleShare}
              className="font-bold w-full  h-[40px] px-6 rounded-[10px] bg-primary hover:bg-primary/80 duration-300 border border-primary text-white "
            >
              Share
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CreatedAdminModal;
