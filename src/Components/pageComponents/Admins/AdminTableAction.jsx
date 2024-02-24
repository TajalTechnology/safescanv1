import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import DeleteModal from "../../Shared/modal/DeleteModal";
import AdminEdit from "./AdminEdit";
import { useDeleteUserMutation } from "../../../redux/features/admin/adminApi";
import toast from "react-hot-toast";

const AdminTableAction = ({ row, refetch }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteUser, { isSuccess, isLoading, error }] = useDeleteUserMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = "Admin Delete success";
      toast.success(message);
      refetch();
      setDeleteModal(false)
    }
    if (error) {
      toast.error(error?.data.error || error?.data.message);
    }
  }, [isSuccess, error]);

  const handelDelete= async()=>{
    const id = `${row?.userid}?username=${row?.username}`;
    await deleteUser(id)

  }

  return (
    <>
      <div className=" flex items-center gap-1">
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
      <AdminEdit
        item={row}
        modalOPen={edit}
        refetch={refetch}
        setModalOpen={setEdit}
      />

      <DeleteModal
        modalOPen={deleteModal}
        onDelete={() => handelDelete()}
        setModalOpen={setDeleteModal}
        title={"Delete Admin Profile!"}
        title2={
          "Are you sure you want to delete this admin profile? This action cannot be undone."
        }
        isLoading={isLoading}
      />
    </>
  );
};

export default AdminTableAction;
