import React from "react";
import CustomTable from "../../Shared/table/CustomTable";
import CreatedAdminsTableAction from "./CreatedAdminsTableAction";

const CreatedAdminsTable = ({tableData,rowSelection,refetch}) => {
  const columns = [
    {
      title: "Username",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-bold text-[#485585]">
          {row.username}
        </span>
      ),
    },
    {
        title: "Phone Number",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.phoneNumber === "" ?"--":row.phoneNumber}
          </span>
        ),
      },
      {
        title: "Status",
        key: "id",
        width:"100px",
        render: (row) => (
          <div>
            {row.status === "Active" && (
              <span className={`text-[14px] font-medium py-1 px-3 rounded-full bg-[#4CC800]/10 text-[#4CC800]`}>
                {row.status}
              </span>
            )}
            {row.status === "Inactive" && (
              <span
                className={`text-[14px] font-medium py-1 px-3 rounded-full bg-[#2D396B]/10 text-[#2D396B]`}
              >
                {row.status}
              </span>
            )}
          </div>
        ),
      },

      {
        title: "Actions",
        key: "id",
        width:"120px",
        render: (row) => (<CreatedAdminsTableAction row={row} refetch={refetch} />),
      },

  ];

  return (
    <div>
      <CustomTable
        tableData={tableData}
        rowSelection={rowSelection}
        columns={columns}
        scroll={{ x: "750px" }}
      />
    </div>
  );
};

export default CreatedAdminsTable;
