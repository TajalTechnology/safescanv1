import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import SearchInput from "../../Components/Shared/input/SearchInput";
import SectionHeading from "../../Components/Shared/SectionHeading";
import { AdminProfiles } from "../../assets/mockData";
import AdminsTable from "../../Components/pageComponents/Admins/AdminsTable";
import {
  useGetAdminQuery,
  useGetUserQuery,
} from "../../redux/features/admin/adminApi";
import { useDebounce } from "use-debounce";

const Admins = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [searchQuery, sestSearchQuery] = useState("");
  const [searchValue] = useDebounce(search, 1000);

  console.log(searchQuery);

  // ========data fecthing=========
  const { data, isLoading, refetch } = useGetAdminQuery(searchQuery, {
    refetchOnMountOrArgChange: true,
  });

  const generateQuery = (searchValue) => {
    const queryParams = [];
    if (searchValue) {
      queryParams.push(`&search=${searchValue}`);
    }

    return queryParams.join("&");
  };

  useEffect(() => {
    const query = generateQuery(searchValue);
    sestSearchQuery(`${query}`);
    refetch();
  }, [searchValue, refetch]);

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
  const updateData = data?.map((item) => ({ key: item?.userid, ...item }));

  return (
    <>
      <BreadCrumb
        title={"Admins"}
        links={[
          { title: "Home", url: "/admin/dashboard" },
          { title: "Admins", url: "/admin/admins" },
        ]}
      />
      <div className=" mb-8">
        <div className=" bg-white rounded-[20px] ">
          <div className=" flex items-center justify-between px-[22px] py-[20px] w-full">
            <SectionHeading>Admin Profiles</SectionHeading>
            <SearchInput
              search={search}
              setSearch={setSearch}
              placeholder="Search Admin Profile"
            />
          </div>
          <div className="w-full">
            {isLoading ? (
              <div className=" w-full h-[450px] flex items-center justify-center">
                {" "}
                <h2 className=" text-[25px] font-semibold">Loading...</h2>
              </div>
            ) : (
              <>
                <AdminsTable
                  tableData={updateData}
                  rowSelection={rowSelection}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admins;
