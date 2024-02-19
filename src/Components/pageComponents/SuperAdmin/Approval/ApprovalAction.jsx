import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useState } from "react";

const ApprovalAction = ({row}) => {
    const [deleteModal,setDeleteModal] = useState(false)
    const [edit, setEdit] = useState(false);
  return (
    <>
      <div className=" flex items-center gap-1">
        <Tooltip placement="topLeft" title="Edit">
          <button onClick={() => setEdit(true)}>
            <Icon
              icon="ic:round-close" 
              className="text-[22px] hover:text-[#0070F0] text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Delete">
          <button onClick={() => setDeleteModal(true)}>
            <Icon
              icon="game-icons:check-mark"
              className="text-[20px] hover:text-red-500 text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
      </div>
    </>
  );
};

export default ApprovalAction;
