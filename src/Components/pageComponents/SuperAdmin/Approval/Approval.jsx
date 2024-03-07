import React, { useEffect, useState } from "react";
import SectionHeading from "../../../Shared/SectionHeading";
import SearchInput from "../../../Shared/input/SearchInput";
import ApprovalTable from "./ApprovalTable";
import { useDebounce } from "use-debounce";
import Loader from "../../../Shared/Loader";


const Approval = ({search,setSearch,sestSearchQuery,searchQuery,data, isLoading,refetch,refetch1,refetch2}) => {
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
    sestSearchQuery(`account_status=pending${query}`);
  }, [searchValue]);


  console.log(data)

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
            {isLoading ? (
              <div className=" w-full h-[450px] flex items-center justify-center">
                  <Loader />
              </div>
            ) : (
              <>
                <ApprovalTable
                  tableData={data}
                  refetch={refetch}
                  refetch1={refetch1}
                  refetch2={refetch2}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
