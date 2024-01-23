import React, { useState } from 'react';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import SectionHeading from '../../Components/Shared/SectionHeading';
import SearchInput from '../../Components/Shared/input/SearchInput';
import CustomButton from '../../Components/Shared/CustomButton';
import CreatedWorkersTable from '../../Components/pageComponents/CreatedWorkers/CreatedWorkersTable';
import { CreatedAdmins } from '../../assets/mockData';
import CreatedWorkersModal from '../../Components/pageComponents/CreatedWorkers/CreatedWorkersModal';

const CreateWorker = () => {
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
          title={"Create Worker"}
          links={[
            { title: "Home", url: "/admin/dashboard" },
            { title: "Create Worker", url: "/admin/create-worker" },
          ]}
        />
        <div className=" mb-8">
          <div className=" bg-white rounded-[20px] ">
            <div className=" flex md:items-center flex-col md:flex-row justify-between px-[22px] py-[20px] w-full">
              <SectionHeading>Created Workers</SectionHeading>
              <div className='flex flex-col md:flex-row md:items-center gap-3'>
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Admin"
              />
              <CustomButton onClick={()=>setCreate(true)}>Create New Worker</CustomButton>
              </div>
            </div>
            <div>
              <CreatedWorkersTable
                tableData={updateData}
                rowSelection={rowSelection}
              />
            </div>
          </div>
        </div>

          {/* =======admin create modal======= */}
            <CreatedWorkersModal modalOPen={create} setModalOpen={setCreate}/>

      </>
    );
};

export default CreateWorker;