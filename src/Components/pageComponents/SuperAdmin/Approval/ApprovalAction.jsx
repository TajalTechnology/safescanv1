import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import ApprovalModal from "../../../Shared/modal/ApprovalModal";
import { useApproveMutation } from "../../../../redux/features/superAdmin/superApi";
import toast from "react-hot-toast";

const ApprovalAction = ({ row }) => {
  const [approval, setApproval] = useState(false);
  const [reject, setReject] = useState(false);

  const [approve, { isLoading, error, isSuccess }] = useApproveMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Create Customer success";
      toast.success(message);
      setReject(false);
      setApproval(false)
    }
    if (error) {
      console.log("===error====", error);
      toast.error(error?.data.error || error?.data.message);
    }
  }, [isSuccess, error]);

  const handleREject = async()=>{
      const data={
        username:row?.username,
        is_approved: false,
      }

     await approve(row?.userid,data)
  }

  const handleApprove = async()=>{
    const data={
      username:row?.username,
      is_approved: true,
    }

   await approve(row?.userid,data)
}

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
        onDelete={() => handleREject()}
        setModalOpen={setApproval}
        title={"Approve Customer!"}
        title2={
          "Are you sure you want to approve this customer? This action cannot be undone."
        }
        approval={true}
        buttonText={isLoading ? "Loading...": "Yes, Approve"}
      />
      {/* Reject modal */}
      <ApprovalModal
        modalOPen={reject}
        onDelete={() => handleApprove()}
        setModalOpen={setReject}
        title={"Reject Approval!"}
        title2={
          "Are you sure you want to reject this approval? This action cannot be undone."
        }
        approval={false}
        buttonText={isLoading ? "Loading...": "Reject"}
      />
    </>
  );
};

export default ApprovalAction;
