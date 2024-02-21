import React from "react";
import CustomTable2 from "../../../Shared/table/CustomTable2";
import CustomerAction from "./CustomerAction";

const SuperCustomerTableData = ({ tableData, rowSelection }) => {
  const columns = [
    {
      title: "Username",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-bold text-[#485585]">
          {row.Username}
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
          {row.address?.slice(0, 16)}...
        </span>
      ),
    },
    {
      title: "Site Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.SiteName}
        </span>
      ),
    },
    {
      title: "Employers Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.EmployersName}
        </span>
      ),
    },
    {
      title: "Plan",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row.Plan}</span>
      ),
      sorter: (a, b) => a.Plan - b.Plan,
    },
    {
      title: "Expire Date",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">{row.ExpireDate}</span>
      ),
      sorter: (a, b) => a.ExpireDate - b.ExpireDate,
    },
    {
      title: "Action",
      key: "id",
      render: (row) => (
       <CustomerAction row={row} />
      )
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

export default SuperCustomerTableData;
