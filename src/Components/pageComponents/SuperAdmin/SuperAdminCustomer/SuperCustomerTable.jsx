import React, { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import SearchInput from "../../../Shared/input/SearchInput";
import CustomButton from "../../../Shared/CustomButton";
import SuperCustomerTableData from "./SuperCustomerTableData";
import CustomerCreate from "./CustomerCreate";
import { useCustomersQuery } from "../../../../redux/features/superAdmin/superApi";
import { useDebounce } from "use-debounce";

const SuperCustomerTable = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [create, setCreate] = useState(false);
  const [searchQuery, sestSearchQuery] = useState("");
  const [searchValue] = useDebounce(search, 1000);

  console.log(searchQuery)

  // ========data fecthing=========
  const { data, isLoading,refetch } = useCustomersQuery(searchQuery,{ refetchOnMountOrArgChange: true });

  const generateQuery = (searchValue) => {
    const queryParams = [];
    if (searchValue) {
      queryParams.push(`&search=${searchValue}`);
    }

    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery(searchValue);
    sestSearchQuery(`is_approved=true${query}`);
    refetch()
  }, [searchValue,refetch]);

  // ======table Select function=======
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  console.log("all data=====",data)

  // ======add a key for selected=======
  const updateData = data?.map((item, index) => ({
    key: item?.admin_serial,
    ...item,
  }));
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
            {isLoading ? (
              <div className=" w-full h-[450px] flex items-center justify-center">
                {" "}
                <h2 className=" text-[25px] font-semibold">Loading...</h2>
              </div>
            ) : (
              <>
                <SuperCustomerTableData
                  tableData={updateData}
                  rowSelection={rowSelection}
                />
              </>
            )}
          </div>
        </div>
      </div>
      <CustomerCreate modalOPen={create} setModalOpen={setCreate} />
    </div>
  );
};

export default SuperCustomerTable;
