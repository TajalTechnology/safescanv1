import { Icon } from "@iconify/react";
import { Tooltip } from "antd";
import React, { useState } from "react";
import DeleteModal from "../../Shared/modal/DeleteModal";
import ProductsEdit from "./ProductsEdit";

const ProductsTableAction = ({ row }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [edit, setEdit] = useState(false);

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
      <ProductsEdit item={row} modalOPen={edit} setModalOpen={setEdit} />

     {/* ============= Workers delete Modal============ */}
      <DeleteModal
        modalOPen={deleteModal}
        onDelete={() => setDeleteModal(false)}
        setModalOpen={setDeleteModal}
        title={"Delete Product!"}
        title2={
          "Are you sure you want to delete this product? This action cannot be undone."
        }
      />
    </>
  );
};

export default ProductsTableAction;
