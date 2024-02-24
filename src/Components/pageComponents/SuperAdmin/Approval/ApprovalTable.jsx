import React from "react";
import CustomTable2 from "../../../Shared/table/CustomTable2";
import ApprovalAction from "./ApprovalAction";

const ApprovalTable = ({ tableData, rowSelection,refetch,refetch1 }) => {
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
      title: "Mobile Number",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.phone === "" ? "--" : row.phone}
        </span>
      ),
    },
    {
      title: "Email Address",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row.email?.slice(0, 16)}...</span>
      ),
    },
    {
      title: "Site Address",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.site_address?.slice(0, 16)}...
        </span>
      ),
    },
    {
      title: "Site Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.site_name}
        </span>
      ),
    },
    {
      title: "Employers Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.emloyeer_name}
        </span>
      ),
    },
    {
      title: "Request Date",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row.RequestDate}</span>
      ),
      sorter: (a, b) => a.RequestDate - b.RequestDate,
    },
    {
        title: "Action",
        key: "id",
        render: (row) => (
          <ApprovalAction row={row} refetch={refetch} refetch1={refetch1} />
        ),
      },
  ];

  return (
    <div>
      <CustomTable2
        tableData={tableData}
        rowSelection={rowSelection}
        columns={columns}
        scroll={{ x: "750px" }}
      />
    </div>
  );
};

export default ApprovalTable;
