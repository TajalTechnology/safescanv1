import React, { useState } from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import SearchInput from "../../Components/Shared/input/SearchInput";
import SectionHeading from "../../Components/Shared/SectionHeading";
import AdminsTable from "../../Components/Admins/AdminsTable";
import { AdminProfiles } from "../../assets/mockData";

const Admins = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

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
              placeholder="Search Worker Profile"
            />
          </div>
          <div>
            <AdminsTable
              tableData={AdminProfiles}
              rowSelection={rowSelection}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admins;
