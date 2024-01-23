import React, { useState } from 'react';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import SectionHeading from '../../Components/Shared/SectionHeading';
import SearchInput from '../../Components/Shared/input/SearchInput';
import CreatedAdminsTable from '../../Components/pageComponents/CreatedAdmins/CreatedAdminsTable';
import { CreatedAdmins } from '../../assets/mockData';
import CustomButton from '../../Components/Shared/CustomButton';
import CreatedAdminModal from '../../Components/pageComponents/CreatedAdmins/CreatedAdminModal';

const CreateAdmin = () => {
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
      const updateData = CreatedAdmins.map((item,index)=>({key:index+1,...item}))

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
              <div className='flex flex-col md:flex-row md:items-center gap-3'>
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Worker Profile"
              />
              <CustomButton onClick={()=>setCreate(true)}>Create New Admin</CustomButton>
              </div>
            </div>
            <div>
              <CreatedAdminsTable
                tableData={updateData}
                rowSelection={rowSelection}
              />
            </div>
          </div>
        </div>

          {/* =======admin create modal======= */}
            <CreatedAdminModal modalOPen={create} setModalOpen={setCreate}/>

      </>
    );
};

export default CreateAdmin;