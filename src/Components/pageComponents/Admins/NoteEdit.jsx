import React from "react";
import CustomModal from "../../Shared/modal/CustomModal";
import { useForm } from "react-hook-form";

const NoteEdit = ({ editModal, setEditModal, setModalOpen }) => {
  const isLoading = false;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    setModalOpen(true);
    setEditModal(false);
  };

  return (
    <CustomModal
      modalOPen={editModal}
      setModalOpen={setEditModal}
      handleSubmit={handleSubmit(onSubmit)}
      width={590}
      title="Edit Admin"
      buttonText={isLoading ? "Loading..." : "Save Changes"}
    >
      <div className="w-full">
        <textarea
          name=""
          id=""
          placeholder="Write Something..."
          className="py-[15px] h-[95px] px-[14px]  text-dark-gray placeholder:text-[#A3AED0]  rounded-[10px] w-full text-sm font-medium outline-none  border-[1px] focus:border-primary"
        ></textarea>
      </div>
    </CustomModal>
  );
};

export default NoteEdit;
