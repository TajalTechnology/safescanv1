import React from "react";
import CustomTable from "../../Shared/table/CustomTable";
import QRCode from "./QRCodeModal";
import AdminTableAction from "./AdminTableAction";
import CardModal from "../../Shared/modal/CardModal";

const AdminsTable = ({ tableData, rowSelection }) => {
  const columns = [
    {
      title: "First & Last Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-bold text-[#485585]">
          {row?.first_name} {row?.last_name}
        </span>
      ),
    },
    {
        title: "Mobile Number",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.phone}
          </span>
        ),
      },
      {
        title: "Email Address",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.email?.slice(0,8)}...
          </span>
        ),
      },
      {
        title: "Site Address",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.site_address?.slice(0,12)}...
          </span>
        ),
      },
      {
        title: "Employers Name",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.emloyeer_name?.slice(0,12)}...
          </span>
        ),
      },
      {
        title: "Card Image",
        key: "id",
        // render: (row) => (<CardModal date={'2024-04-01'} dateTitle={'Expire Date'} row={row}/>),
      },
      {
        title: "Minor",
        key: "minor",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.minor}
          </span>
        ),
        sorter: (a, b) => a?.minor - b?.minor,
      },
      {
        title: "Major",
        key: "major",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row?.major}
          </span>
        ),
        sorter: (a, b) => a.major - b.major,
      },
      {
        title: "Dismissal",
        key: "dismissal",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info">
            {row.dismissal}
          </span>
        ),
        sorter: (a, b) => a?.dismissal - b?.dismissal,
      },
      {
        title: "Fine Status",
        key: "fine",
        render: (row) => (
          <span className={`text-[14px] font-medium py-1 px-3 rounded-full ${row?.fineStatus ==="due" ? "bg-[#F40909]/10 text-[#F40909]" : "bg-[#4CC800]/10 text-[#4CC800]"}`}>
            €{row.outstanding_fines}
          </span>
        ),
        sorter: (a, b) => a?.outstanding_fines - b?.outstanding_fines,
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
    <div className="w-full">
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
