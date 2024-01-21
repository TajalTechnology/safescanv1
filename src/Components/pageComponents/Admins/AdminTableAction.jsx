import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useState } from "react";
import DeleteModal from "../../Shared/modal/DeleteModal";

const AdminTableAction = ({ row }) => {
  const [deleteModal,setDeleteModal] = useState(false)



  return (
    <>
      <div className=" flex items-center gap-1">
        <Tooltip placement="topLeft" title="Edit">
          <button onClick={() => {}}>
            <Icon
              icon="mingcute:pencil-line"
              className="text-[22px] hover:text-[#0070F0] text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Delete">
          <button onClick={() => setDeleteModal(true)}>
            <Icon
              icon="gg:trash-empty"
              className="text-[22px] hover:text-red-500 text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
      </div>

      <DeleteModal modalOPen={deleteModal} onDelete={()=>setDeleteModal(false)} setModalOpen={setDeleteModal} title={"Delete Admin Profile!"} title2={"Are you sure you want to delete this admin profile? This action cannot be undone."}/>
    </>
  );
};

export default AdminTableAction;
