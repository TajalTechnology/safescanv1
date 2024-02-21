import React, { useState } from "react";
import ApprovalModal from "../../../Shared/modal/ApprovalModal";
import { Icon } from "@iconify/react";

const CustomerAction = ({ row }) => {
  const [reject, setReject] = useState(false);
  return (
    <>
      <button onClick={()=>setReject(true)} className=" text-[#FF6969] flex items-center gap-1 justify-center py-1 bg-[#FF6969]/10 hover:bg-[#FF6969] hover:text-white duration-300 px-3 rounded-md text-[16px] font-medium">
      <Icon icon="tabler:ban" className=" mt-[2px]" /> Reject
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
