import React, { useEffect, useRef, useState } from "react";
import CustomInput from "../../Components/Shared/input/CustomInput";
import PasswordInput from "../../Components/Shared/input/PasswordInput";
import { useForm } from "react-hook-form";
import CustomButton from "../../Components/Shared/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Password from "antd/es/input/Password";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);

  const [login, { isSuccess, isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "login success";
      toast.success(message);
      navigate("/super-admin/customers")
    }
    if (error) {
      console.log("===error====", error);
      toast.error("invalid email and password");
    }
  }, [isSuccess, error]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // navigate('/admin/dashboard')
     login(data)

    console.log("data===", data);
  };
  return (
    <div className="flex  ">
      {/* ---------------input fields---------------- */}
      <div className=" bg-white h-[100vh] lg:w-5/12 w-full flex  items-center justify-center">
        <div className="w-full px-[50px] my-16">
          <div className="mb-[50px]">
            <h1 className="text-dark-gray text-[28px] font-bold">Sign In</h1>
            <p className="text-normal text-base text-info">
              Welcome Back! Please Enter Your Username And Password.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <CustomInput
                label={"Username"}
                type={"text"}
                register={register("username", {
                  required: {
                    value: true,
                    message: "Please Enter User Name",
                  },
                })}
                error={errors.lastName}
                placeholder={"Enter Username"}
              />
            </div>

            <div className="mb-2">
              <div className="flex flex-col items-start w-full mt-5 relative">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-medium text-base text-dark-gray"
                >
                  {"Create Password"}
                </label>
                <input
                  className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                  type={showpass ? "text" : "password"}
                  {...register("password", {
                    required: true,
                  })}
                  placeholder={"Enter Password"}
                />
                <div className=" absolute top-[58%] right-[10px]">
                  <button
                    type="button"
                    onClick={() => setShowpass((pre) => !pre)}
                  >
                    {showpass ? (
                      <Icon
                        icon="ic:outline-visibility"
                        className="text-[20px] text-black"
                      />
                    ) : (
                      <Icon
                        icon="mdi:visibility-off-outline"
                        className="text-[20px] text-black"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <p className="underline text-info text-sm font-medium mt-4">
              <Link
                target="_blank"
                to={"/forgotPass"}
                className="font-bold text-primary"
              >
                Forgot Password?
              </Link>
            </p>
            <div className="mt-6 w-full">
              <CustomButton className={"w-full"}>
                {isLoading ? <p>Loading...</p> : <p>Sign In</p>}
              </CustomButton>
            </div>
          </form>
          <p className=" text-center text-info text-sm font-medium mt-4">
            Don't Have An Account?{" "}
            <Link to={"/signIn"} className="font-bold underline text-primary">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* -----------image section---------------------- */}
      <div className="lg:flex lg:flex-col hidden w-7/12 h-screen">
        <div className="w-full h-full relative">
          <img
            src="/Images/loginup.svg"
            alt=""
            className=" absolute bottom-0 right-0 "
          />
          <img
            src="/Images/mainLogo.svg"
            alt=""
            className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          />
          <img
            src="/Images/loginDown.svg"
            alt=""
            className=" absolute top-0 right-0 "
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
