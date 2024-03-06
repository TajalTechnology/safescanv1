import { Icon } from "@iconify/react";
import { Modal, Tooltip } from "antd";
import React, { useRef, useState } from "react";
// import QRCode from "qrcode.react";
// import html2canvas from "html2canvas";
import ReactToPrint from "react-to-print";
import ShareModal from "../../Shared/modal/ShareModal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const QRCodeModal = ({ row,product=false }) => {
  const [modalOPen, setModalOpen] = useState(false);
  const componentRef = useRef();
  const [share, setShare] = useState(false);
  const [shareText, setShareText] = useState("");
  const [type, setType] = useState("Whatsapp");


  // ========download funcation===========




  const captureAndDownload = () => {
    const component = document.getElementById("pdf-component");

    if (component) {
      // const originalWidth = component.scrollWidth;
      // const originalHeight = component.scrollHeight;

      // // Set the element's size to cover the entire content
      // component.style.width = `${originalWidth}px`;
      // component.style.height = `${originalHeight}px`;

      html2canvas(component).then(async (canvas) => {
        const dataURL = canvas.toDataURL("image/jpeg");
        const a = document.createElement("a");
        a.href = `https://scansafes3.s3.amazonaws.com/${row?.qrc_image}`
        a.download = `image.png`;
        //only here download as pdf
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

      });
    }
  };
  console.log(row?.qrc_image)
  // ======Share funcation=========
  const handleShare = async () => {

    if (type === 'Whatsapp') {
      if (shareText.trim() !== '') {
        const whatsappMessage = `
        Hi, I am from Logoipsum.

        https://scansafes3.s3.amazonaws.com/${row?.qrc_image}

         `
        const whatsappLink = `https://wa.me/${shareText}/?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
        setShare(false)
      }
    }
  };

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
            <h2 className=" text-[28px] font-[700] text-dark-gray">QRC dCode</h2>
            <button
              onClick={() => setModalOpen(false)}
              className=" w-[40px] text-[30px] h-[40px] rounded-lg flex items-center justify-center hover:bg-[#FDEEEE] hover:text-[#FF5959] text-[#969BB3]"
            >
              <Icon icon="material-symbols:close" />
            </button>
          </div>
          <div
            ref={componentRef}
            className="w-full flex items-center flex-col justify-center py-7"
          >
            <div className=" flex items-center gap-2 ">
              <img src="/logo2.png" alt="logo" className="w-[35px]" />
              <div>
                <h3 className=" text-[18px] font-bold text-[rk-grey-900#1B2559] mb-[-6px]">
                  Company Name
                </h3>
                <h4 className=" text-[#68769F] font-medium text-base">
                   {product ? `${row.product_name}` :`Employee : ${row?.frist_name} ${row?.last_name}`}
                </h4>
              </div>
            </div>
            {/* <QRCode size={250} className=" " value={row.email} /> */}
            <div
              id="pdf-component"
            >
              <img

                // src={`https://scansafes3.s3.amazonaws.com/1708928709838-Screenshot_23.png`}
                src={`https://scansafes3.s3.amazonaws.com/${row?.qrc_image}`}
                alt="qr-code"
                className="w-[300px] h-[300px]"
              />
            </div>
          </div>
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ReactToPrint
                trigger={() => (
                  <button className=" bg-primary hover:bg-primary/80 flex items-center gap-2 duration-300 px-4 h-[38px] rounded-[4px] text-[14px] font-medium text-white">
                    <Icon icon="prime:print" className=" text-[25px]" />
                    Print QRC Code
                  </button>
                )}
                content={() => componentRef.current}
              />

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
              <button
                onClick={() => { setShare(true); setModalOpen(false) }}
                className=" bg-primary/20 flex items-center justify-center hover:bg-primary/80 duration-300 w-[38px] h-[38px] rounded-[4px] font-medium text-primary hover:text-white"
              >
                <Icon icon="lucide:share-2" className=" text-[20px]" />
              </button>
            </div>
          </div>
        </div>
      </Modal>

      <ShareModal
        type={type}
        setType={setType}
        item={row}
        modalOPen={share}
        setModalOpen={setShare}
        shareText={shareText}
        setShareText={setShareText}
        handleShare={handleShare}
      />
    </>
  );
};

export default QRCodeModal;
