import React from "react";
import CustomTable from "../../Shared/table/CustomTable";
import { Icon } from "@iconify/react";
import ProductsQRCode from "./ProductsQRCode";
import ProductsTableAction from "./ProductsTableAction";
import CardModal from "../../Shared/modal/CardModal";
import { formattedDate } from "../../../helper/jwt";
const ProductsTable = ({ tableData, rowSelection, refetch }) => {
  // const getLastDate = formattedDate(item?.last_test_date)
  // const getNextDate = formattedDate(item?.next_test_date)
  const columns = [
    {
      title: "Name & Number",
      key: "number",
      render: (row) => (
        <div className="flex flex-col">
          <span className=" text-[14px] font-bold text-[#485585]">
            {row?.product_name}
          </span>
          <span className=" text-[14px] font-normal text-info">
            {row?.product_number}
          </span>
        </div>
      ),
      sorter: (a, b) => a.product_number - b.product_number,
    },
    {
      title: "Site Address",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.site_address?.slice(0, 12)}...
        </span>
      ),
    },
    {
      title: "Testers Name",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.tester_name}
        </span>
      ),
    },
    {
      title: "Last Test Date",
      key: "LastTestDate",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {formattedDate(row?.last_test_date)}
        </span>
      ),
      sorter: (a, b) => new Date(a.last_test_date) -new Date( b.last_test_date),
    },
    {
      title: "Next Test Date",
      key: "NextTestDate",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {formattedDate(row?.next_test_date)}
        </span>
      ),
      sorter: (a, b) => new Date(a.next_test_date) - new Date( b.next_test_date),
    },
    {
      title: "Location",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.location?.slice(0, 16)}...
        </span>
      ),
    },
    {
      title: "Status",
      key: "Status",
      render: (row) => (
        <div>
          {row?.status === "passed" && (
            <div className={`text-[14px] w-[75px] font-medium py-1 px-3 flex items-center justify-center rounded-full bg-[#4CC800]/10 text-[#4CC800]`}>
               Passed
            </div>
          )}
          {row?.status === "failed" && (
            <span
              className={`text-[14px] w-[70px] font-medium py-1 px-3 flex items-center justify-center rounded-full bg-[#F40909]/10 text-[#F40909]`}
            >
             Failed
            </span>
          )}
          {row?.status === "attention" && (
            <span
              className={`text-[14px] font-medium py-1 px-3 flex items-center justify-center rounded-full bg-[#FFC000]/10 text-[#FFC000]`}
            >
              Needs Attention
            </span>
          )}
        </div>
      ),
      width:"180px",
      sorter: (a, b) => a.status.localeCompare(b.status, 'en', { sensitivity: 'base' }),
    },
    {
      title: "Image",
      key: "id",
      render: (row) => (<CardModal refetch={refetch} date={'2024-04-01'} dateTitle={'Attached Date'} row={row} />),
    },
    {
      title: "Note",
      key: "id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info flex items-center gap-1 ">
          {row?.note?.slice(0, 12)}<Icon icon="majesticons:clipboard-line" className=" text-[20px]" />
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
      render: (row) => <ProductsTableAction refetch={refetch} row={row} />,
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
