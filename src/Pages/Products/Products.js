import React, { useState } from 'react';
import BreadCrumb from '../../Components/Shared/BreadCrumb';
import SectionHeading from '../../Components/Shared/SectionHeading';
import SearchInput from '../../Components/Shared/input/SearchInput';
import ProductsTable from '../../Components/pageComponents/Products/ProductsTable';
import { ProductsData } from '../../assets/mockData';

const Products = () => {
    const [search, setSearch] = React.useState("");
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  
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
    const updateData = ProductsData.map((item,index)=>({key:index+1,...item}))


    return (
        <>
        <BreadCrumb
          title={"Products"}
          links={[
            { title: "Home", url: "/admin/dashboard" },
            { title: "Products", url: "/admin/products" },
          ]}
        />
        <div className=" mb-8">
          <div className=" bg-white rounded-[20px] ">
            <div className=" flex items-center justify-between px-[22px] py-[20px] w-full">
              <SectionHeading>Products List </SectionHeading>
              <SearchInput
                search={search}
                setSearch={setSearch}
                placeholder="Search Worker Profile"
              />
            </div>
            <div>
              <ProductsTable
                tableData={updateData}
                rowSelection={rowSelection}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default Products;