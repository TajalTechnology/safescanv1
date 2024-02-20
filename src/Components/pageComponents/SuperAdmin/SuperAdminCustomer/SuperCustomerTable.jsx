import React, { useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import SearchInput from "../../../Shared/input/SearchInput";
import CustomButton from "../../../Shared/CustomButton";
import { Customers } from "../../../../assets/mockData";
import SuperCustomerTableData from "./SuperCustomerTableData";
import CustomerCreate from "./CustomerCreate";

const SuperCustomerTable = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [create,setCreate] = useState(false)

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
            <SectionHeading>Customers</SectionHeading>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Customer"
              />
              <CustomButton onClick={() => setCreate(true)}>
                Create New Customer
              </CustomButton>
            </div>
          </div>
          <div>
            <SuperCustomerTableData
              tableData={updateData.slice(0,5)}
              rowSelection={rowSelection}
            />
          </div>
        </div>
      </div>
      <CustomerCreate modalOPen={create} setModalOpen={setCreate}/>
    </div>
  );
};

export default SuperCustomerTable;
