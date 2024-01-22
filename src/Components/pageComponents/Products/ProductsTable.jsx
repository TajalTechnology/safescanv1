import React from "react";
import CustomTable from "../../Shared/table/CustomTable";
import { Icon } from "@iconify/react";
import ProductsQRCode from "./ProductsQRCode";
import ProductsTableAction from "./ProductsTableAction";

const ProductsTable = ({ tableData, rowSelection }) => {
  const columns = [
    {
      title: "Name & Number",
      key: "id",
      render: (row) => (
        <div className="flex flex-col">
          <span className=" text-[14px] font-bold text-[#485585]">
            {row.name}
          </span>
          <span className=" text-[14px] font-normal text-info">
            {row.number}
          </span>
        </div>
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
      title: "Testers Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.testersName}
        </span>
      ),
    },
    {
      title: "Last Test Date",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.LastTestDate}
        </span>
      ),
    },
    {
      title: "Next Test Date",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.NextTestDate}
        </span>
      ),
    },
    {
      title: "Location",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row.Location?.slice(0, 16)}...
        </span>
      ),
    },
    {
      title: "Status",
      key: "id",
      render: (row) => (
        <div>
          {row.Status === "Passed" && (
            <span className={`text-[14px] font-medium py-1 px-3 rounded-full bg-[#4CC800]/10 text-[#4CC800]`}>
              {row.Status}
            </span>
          )}
          {row.Status === "Failed" && (
            <span
              className={`text-[14px] font-medium py-1 px-3 rounded-full bg-[#F40909]/10 text-[#F40909]`}
            >
              {row.Status}
            </span>
          )}
            {row.Status === "Needs Attention" && (
            <span
              className={`text-[14px] font-medium py-1 px-3 rounded-full bg-[#FFC000]/10 text-[#FFC000]`}
            >
              {row.Status}
            </span>
          )}
        </div>
      ),
    },
    {
      title: "Image",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info flex items-center gap-1 ">
          <Icon icon="lucide:image" className=" text-[20px]" />0{row.cartImage}
        </span>
      ),
    },
    {
        title: "Note",
        key: "id",
        render: (row) => (
          <span className=" text-[14px] font-normal text-info flex items-center gap-1 ">
            {row.note?.slice(0, 12)}<Icon icon="majesticons:clipboard-line" className=" text-[20px]" />
          </span>
        ),
      },

    {
      title: "QRC Code",
      key: "id",
      render: (row) => <ProductsQRCode row={row} />,
    },
    {
      title: "Actions",
      key: "id",
      render: (row) => <ProductsTableAction row={row} />,
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

export default ProductsTable;
