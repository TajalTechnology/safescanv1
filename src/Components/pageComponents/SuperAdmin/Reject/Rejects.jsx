import React, { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import SearchInput from "../../../Shared/input/SearchInput";
import { useDebounce } from "use-debounce";
import Loader from "../../../Shared/Loader";
import RejectsTable from "./RejectsTable";


const Rejects = ({search,setSearch,sestSearchQuery,searchQuery,data, isLoading,refetch,refetch1}) => {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchValue] = useDebounce(search, 1000);


  const generateQuery = (searchValue) => {
    const queryParams = [];
    if (searchValue) {
      queryParams.push(`&search=${searchValue}`);
    }
    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery(searchValue);
    sestSearchQuery(`is_approved=false${query}`);
  }, [searchValue]);

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
  const updateData = data?.map((item, index) => ({
    key: item?.userid,
    ...item,
  }));
  return (
    <div>
      <div className=" mb-8">
        <div className=" bg-white rounded-[20px] ">
          <div className=" flex md:items-center flex-col md:flex-row justify-between px-[22px] py-[20px] w-full">
            <SectionHeading>Rejected</SectionHeading>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Customer"
              />
            </div>
          </div>
          <div>
            {isLoading ? (
              <div className=" w-full h-[450px] flex items-center justify-center">
                  <Loader />
              </div>
            ) : (
              <>
                <RejectsTable
                  tableData={updateData}
                  rowSelection={rowSelection}
                  refetch={refetch}
                  refetch1={refetch1}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rejects;
