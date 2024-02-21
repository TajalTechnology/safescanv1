import React, { useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import SearchInput from "../../../Shared/input/SearchInput";
import { Customers } from "../../../../assets/mockData";
import ApprovalTable from "./ApprovalTable";

const Approval = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);


  // ======table Select function=======
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

    // ======add a key for selected=======
    const updateData = Customers.map((item,index)=>({key:index+1,...item}))
  return (
    <div>
      <div className=" mb-8">
        <div className=" bg-white rounded-[20px] ">
          <div className=" flex md:items-center flex-col md:flex-row justify-between px-[22px] py-[20px] w-full">
            <SectionHeading>Approval</SectionHeading>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Customer"
              />
            </div>
          </div>
          <div>
            <ApprovalTable
              tableData={updateData.slice(0,5)}
              rowSelection={rowSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;

