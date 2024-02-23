import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import SectionHeading from "../../Components/Shared/SectionHeading";
import SearchInput from "../../Components/Shared/input/SearchInput";
import CreatedAdminsTable from "../../Components/pageComponents/CreatedAdmins/CreatedAdminsTable";
import CustomButton from "../../Components/Shared/CustomButton";
import CreatedAdminModal from "../../Components/pageComponents/CreatedAdmins/CreatedAdminModal";
import { useSelector } from "react-redux";
import { useDebounce } from "use-debounce";
import { useGetAdminQuery } from "../../redux/features/admin/adminApi";

const CreateAdmin = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [create, setCreate] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [searchQuery, sestSearchQuery] = useState("");
  const [searchValue] = useDebounce(search, 1000);

  console.log(user);
  console.log("query", searchQuery);

  // ========data fecthing=========
  const { data, isLoading, refetch } = useGetAdminQuery(searchQuery, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

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
  }, [searchValue, refetch, user]);

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
        title={"Create Admin"}
        links={[
          { title: "Home", url: "/admin/dashboard" },
          { title: "Create Admin", url: "/admin/create-admin" },
        ]}
      />
      <div className=" mb-8">
        <div className=" bg-white rounded-[20px] ">
          <div className=" flex md:items-center flex-col md:flex-row justify-between px-[22px] py-[20px] w-full">
            <SectionHeading>Created Admins</SectionHeading>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Worker Profile"
              />
              <CustomButton onClick={() => setCreate(true)}>
                Create New Admin
              </CustomButton>
            </div>
          </div>
          <div className="w-full">
            {isLoading ? (
              <div className=" w-full h-[450px] flex items-center justify-center">
                {" "}
                <h2 className=" text-[25px] font-semibold">Loading...</h2>
              </div>
            ) : (
              <>
                <CreatedAdminsTable
                  tableData={updateData}
                  rowSelection={rowSelection}
                />
              </>
            )}
          </div>
        </div>
      </div>

      {/* =======admin create modal======= */}
      <CreatedAdminModal modalOPen={create} refetch={refetch} setModalOpen={setCreate} />
    </>
  );
};

export default CreateAdmin;
