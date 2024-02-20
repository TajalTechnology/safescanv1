import React, { useState } from "react";
import ApprovalModal from "../../../Shared/modal/ApprovalModal";

const CustomerAction = ({ row }) => {
  const [reject, setReject] = useState(false);
  return (
    <>
      <button onClick={()=>setReject(true)} className=" text-[#FF6969] flex items-center justify-center py-1 bg-[#FF6969]/10 hover:bg-[#FF6969] hover:text-white duration-300 px-5 rounded-md text-[16px] font-medium">
        Reject
      </button>
      {/* Reject modal */}
      <ApprovalModal
        modalOPen={reject}
        onDelete={() => setReject(false)}
        setModalOpen={setReject}
        title={"Reject Customer!"}
        title2={
          "Are you sure you want to Reject this customer? This action cannot be undone."
        }
        approval={false}
        buttonText="Reject"
      />
    </>
  );
};

export default CustomerAction;
