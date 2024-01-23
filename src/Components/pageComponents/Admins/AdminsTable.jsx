import React, { useState } from "react";
import CustomTable from "../../Shared/table/CustomTable";
import { Icon } from "@iconify/react";
import QRCode from "./QRCode";
import AdminTableAction from "./AdminTableAction";
import CardModal from "../../Shared/modal/CardModal";

const AdminsTable = ({ tableData, rowSelection }) => {
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
          {row.email?.slice(0, 8)}...
        </span>
      ),
    },
    {
      title: "Site Address",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.address?.slice(0, 12)}...
        </span>
      ),
    },
    {
      title: "Employers Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.employersName?.slice(0, 12)}...
        </span>
      ),
    },
    {
      title: "Card Image",
      key: "id",
      render: (row) => (<CardModal date={'12/06/24'} dateTitle={'Expire Date'} row={row}/>),
    },
    {
      title: "Minor",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.minor}
        </span>
      ),
      sorter: (a, b) => a.minor - b.minor,
    },
    {
      title: "Major",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.major}
        </span>
      ),
      sorter: (a, b) => a.major - b.major,
    },
    {
      title: "Dismissal",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.dismissal}
        </span>
      ),
      sorter: (a, b) => a.dismissal - b.dismissal,
    },
    {
      title: "Fine Status",
      key: "id",
      render: (row) => (
        <span className={`text-[14px] font-medium py-1 px-3 rounded-full ${row?.fine > 150 ? "bg-[#F40909]/10 text-[#F40909]" : "bg-[#4CC800]/10 text-[#4CC800]"}`}>
          €{row.fine}
        </span>
      ),
      sorter: (a, b) => a.fine - b.fine,
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
    <>
      <CustomTable
        tableData={tableData}
        rowSelection={rowSelection}
        columns={columns}
        scroll={{ x: "750px" }}
      />
      
    </>
  );
};

export default AdminsTable;
