import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useState } from "react";
import ApprovalModal from "../../../Shared/modal/ApprovalModal";

const ApprovalAction = ({ row }) => {
  const [approval, setApproval] = useState(false);
  const [reject, setReject] = useState(false);
  return (
    <>
      <div className=" flex items-center gap-1">
        <Tooltip placement="topLeft" title="Reject">
          <button onClick={() => setReject(true)}>
            <Icon
              icon="ic:round-close"
              className="text-[22px] hover:text-red-500 text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Approve">
          <button onClick={() => setApproval(true)}>
            <Icon
              icon="game-icons:check-mark"
              className="text-[20px] hover:text-green-500 text-[#46B900]"
            />
          </button>
        </Tooltip>
      </div>

      {/* approval modal */}
      <ApprovalModal
        modalOPen={approval}
        onDelete={() => setApproval(false)}
        setModalOpen={setApproval}
        title={"Approve Customer!"}
        title2={
          "Are you sure you want to approve this customer? This action cannot be undone."
        }
        approval={true}
        buttonText="Yes, Approve"
      />
      {/* Reject modal */}
      <ApprovalModal
        modalOPen={reject}
        onDelete={() => setReject(false)}
        setModalOpen={setReject}
        title={"Reject Approval!"}
        title2={
          "Are you sure you want to reject this approval? This action cannot be undone."
        }
        approval={false}
        buttonText="Reject"
      />
    </>
  );
};

export default ApprovalAction;
