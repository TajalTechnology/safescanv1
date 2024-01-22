import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useState } from "react";
import DeleteModal from "../../Shared/modal/DeleteModal";
import ShareModal from "../../Shared/modal/ShareModal";
import CreatedWorkers from "./CreatedWorkersEdit";

const CreatedWorkersTableAction = ({ row }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [share,setShare] = useState(false);
  const [shareText,setShareText] = useState("");

  return (
    <>
      <div className=" flex items-center gap-1">
      <Tooltip placement="topLeft" title="Share">
          <button onClick={() => setShare(true)}>
            <Icon
              icon="lucide:share-2" 
              className="text-[22px] hover:text-[#0070F0] text-[#8E9BBA]"
            />
          </button>
        </Tooltip>
        <Tooltip placement="topLeft" title="Edit">
          <button onClick={() => setEdit(true)}>
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
      {/* ============= Workers edit Modal============ */}
      <CreatedWorkers item={row} modalOPen={edit} setModalOpen={setEdit} />

      {/* ============= Workers edit Modal============ */}
      <ShareModal item={row} modalOPen={share} setModalOpen={setShare} shareText={shareText} setShareText={setShareText}/>

     {/* ============= Workers delete Modal============ */}
      <DeleteModal
        modalOPen={deleteModal}
        onDelete={() => setDeleteModal(false)}
        setModalOpen={setDeleteModal}
        title={"Delete Worker Profile!"}
        title2={
          "Are you sure you want to delete this worker profile? This action cannot be undone."
        }
      />
    </>
  );
};

export default CreatedWorkersTableAction;
