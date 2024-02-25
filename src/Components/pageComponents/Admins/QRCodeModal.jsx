import { Icon } from "@iconify/react";
import { Modal, Tooltip } from "antd";
import React, { useState } from "react";
import QRCode from "qrcode.react";
import html2canvas from "html2canvas";


const QRCodeModal = ({ row }) => {
  const [modalOPen, setModalOpen] = useState(false);

  console.log(row);

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = `https://scansafes3.s3.amazonaws.com/${row?.qrc_image}`;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const captureAndDownload = () => {
    const component = document.getElementById("pdf-component");

    if (component) {
      html2canvas(component).then(async (canvas) => {
        const dataURL = canvas.toDataURL("image/jpeg");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = `${row?.last_name}-certificate.jpg`;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })
  }};


  return (
    <>
      <Tooltip placement="topLeft" title="View QRC Code">
        <button
          onClick={() => setModalOpen(true)}
          className=" w-full flex items-center justify-center"
        >
          <img src="/Images/QR_Code.png" alt="QR" />
        </button>
      </Tooltip>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        styles={{ borderRadius: 30 }}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={450}
        className={` bg-red-500 pt-3 rounded-[30px]`}
      >
        <div className="p-7">
          <div className=" flex items-center justify-between">
            <h2 className=" text-[28px] font-[700] text-dark-gray">QRC Code</h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div
            id="pdf-component"
            className="w-full flex items-center flex-col justify-center py-7"
          >
            <div className=" flex items-center gap-2 ">
              <img src="/logo2.png" alt="logo" className="w-[35px]" />
              <div>
                <h3 className=" text-[18px] font-bold text-[rk-grey-900#1B2559] mb-[-6px]">
                  Company Name
                </h3>
                <h4 className=" text-[#68769F] font-medium text-base">
                  Employee : {row?.first_name} {row?.last_name}
                </h4>
              </div>
            </div>
            {/* <QRCode size={250} className=" " value={row.email} /> */}
            <img
              src={`https://scansafes3.s3.amazonaws.com/${row?.qrc_image}`}
              alt="qr-code"
              className="w-[300px] h-[300px]"
            />
          </div>
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button className=" bg-primary hover:bg-primary/80 flex items-center gap-2 duration-300 px-4 h-[38px] rounded-[4px] text-[14px] font-medium text-white">
                <Icon icon="prime:print" className=" text-[25px]" />
                Print QRC Code
              </button>
              {/* <button className=" bg-[#FF4D4D]/20 flex items-center justify-center hover:bg-[#FF4D4D]/80 duration-300 w-[38px] h-[38px] rounded-[4px] font-medium text-[#FF4D4D] hover:text-white">
                <Icon icon="lucide:trash-2" className=" text-[20px]" />
              </button> */}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={captureAndDownload}
                className=" bg-primary hover:bg-primary/80 flex items-center justify-center duration-300 w-[38px] h-[38px] rounded-[4px] text-[14px] font-medium text-white"
              >
                <Icon
                  icon="lucide:arrow-down-to-line"
                  className=" text-[25px]"
                />
              </button>
              <button className=" bg-primary/20 flex items-center justify-center hover:bg-primary/80 duration-300 w-[38px] h-[38px] rounded-[4px] font-medium text-primary hover:text-white">
                <Icon icon="lucide:share-2" className=" text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default QRCodeModal;
