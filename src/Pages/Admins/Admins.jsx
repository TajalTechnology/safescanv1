import React from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import SearchInput from "../../Components/Shared/input/SearchInput";
import SectionHeading from "../../Components/Shared/SectionHeading";

const Admins = () => {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <BreadCrumb
        title={"Dashboard"}
        links={[
          { title: "Home", url: "/admin/dashboard" },
          { title: "Dashboard", url: "/admin/dashboard" },
        ]}
      />
      <div className=" bg-white py-[30px] rounded-[20px] px-[22px]">
        <div className=" flex items-center justify-between w-full">
          <SectionHeading>Admin Profiles</SectionHeading>
          <SearchInput
            search={search}
            setSearch={setSearch}
            placeholder="Search Worker Profile"
          />
        </div>
      </div>
    </>
  );
};

export default Admins;
