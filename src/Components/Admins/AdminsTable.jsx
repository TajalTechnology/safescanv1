import React from "react";
import CustomTable from "../Shared/table/CustomTable";
import { Icon } from "@iconify/react";
import QRCode from "./QRCode";
import AdminTableAction from "./AdminTableAction";

const AdminsTable = ({tableData,rowSelection}) => {
  const columns = [
    {
      title: "First & Last Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-bold text-[#485585]">
          {row.firstName} {row.lastName}
        </span>
      ),
    },
    {
        title: "Mobile Number",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.number}
          </span>
        ),
      },
      {
        title: "Email Address",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.email?.slice(0,8)}...
          </span>
        ),
      },
      {
        title: "Site Address",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.address?.slice(0,12)}...
          </span>
        ),
      },
      {
        title: "Employers Name",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.employersName?.slice(0,12)}...
          </span>
        ),
      },
      {
        title: "Card Image",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info flex items-center gap-1 ">
            <Icon icon="lucide:image" className=" text-[20px]"/>
            0{row.cartImage}
          </span>
        ),
      },
      {
        title: "Minor",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.minor}
          </span>
        ),
      },
      {
        title: "Major",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.major}
          </span>
        ),
      },
      {
        title: "Dismissal",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.dismissal}
          </span>
        ),
      },
      {
        title: "Fine Status",
        key: "id",
        render: (row) => (
          <span className={`text-[14px] font-medium py-1 px-3 rounded-full ${row?.fine > 150 ? "bg-[#F40909]/10 text-[#F40909]" : "bg-[#4CC800]/10 text-[#4CC800]"}`}>
            €{row.fine}
          </span>
        ),
      },
      {
        title: "QRC Code",
        key: "id",
        render: (row) => (<QRCode row={row} />),
      },
      {
        title: "Actions",
        key: "id",
        render: (row) => (<AdminTableAction row={row} />),
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

export default AdminsTable;
