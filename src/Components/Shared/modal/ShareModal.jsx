import { Icon } from "@iconify/react";
import { Modal } from "antd";
import CustomButton from "../CustomButton";

const ShareModal = ({type,setType,modalOPen,setModalOpen,shareText,setShareText,handleShare}) => {
    
  return (
    <div>
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
      >
        <div className="z-[50000000] rounded-[20px] bg-white">
          <div className=" flex items-center justify-between px-9 pt-6 pb-4">
            <h2 className=" text-[28px] font-bold text-dark-gray">Share Access Details</h2>
            <button
              onClick={() => setModalOpen(false)}
              className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <form  className="w-full mt-[0px] px-9 pb-9">
          <div className=" pt-4">
              <div className="w-full flex items-center justify-between">
                <button type="button" onClick={()=>setType("email")} className={`text-base font-medium ${type==="email" ? "text-dark-gray" : "text-primary"} `}>Share Via Email</button>
                <button type="button" onClick={()=>setType("Whatsapp")} className={`text-base font-medium ${type==="Whatsapp" ? "text-dark-gray" : "text-primary"}`}>Share Via Whatsapp</button>
              </div>
              <input
                className="py-[15px] h-[44px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
                type={type==="email" ?"email" : "text"}
                required
                placeholder={type==="email" ? "Enter Email Address" : "Enter Whatsapp Number"}
                id="otp"
                value={shareText}
                onChange={(e)=>setShareText(e.target.value)}
              />
            </div>
            <div className="mt-[20px] flex items-center gap-5">
              <CustomButton
                onClick={handleShare}
                className={" w-full"}
              >
                Share
              </CustomButton>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ShareModal;
