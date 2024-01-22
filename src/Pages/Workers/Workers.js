import React, { useState } from 'react';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import SectionHeading from '../../Components/Shared/SectionHeading';
import SearchInput from '../../Components/Shared/input/SearchInput';
import { WorkersProfiles } from '../../assets/mockData';
import WorkersTable from '../../Components/pageComponents/Workers/WorkersTable';

const Workers = () => {
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
          title={"Workers"}
          links={[
            { title: "Home", url: "/admin/dashboard" },
            { title: "Workers", url: "/admin/workers" },
          ]}
        />
        <div className=" mb-8">
          <div className=" bg-white rounded-[20px] ">
            <div className=" flex items-center justify-between px-[22px] py-[20px] w-full">
              <SectionHeading>Workers Profiles</SectionHeading>
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Worker Profile"
              />
            </div>
            <div>
              <WorkersTable
                tableData={WorkersProfiles}
                rowSelection={rowSelection}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Workers;