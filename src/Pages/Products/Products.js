import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Components/Shared/BreadCrumb";
import SectionHeading from "../../Components/Shared/SectionHeading";
import SearchInput from "../../Components/Shared/input/SearchInput";
import ProductsTable from "../../Components/pageComponents/Products/ProductsTable";
import { useGetProductsQuery } from "../../redux/features/admin/adminApi";
import { useDebounce } from "use-debounce";
import Loader from "../../Components/Shared/Loader";
import CustomButton from "../../Components/Shared/CustomButton";
import AddProduct from "../../Components/pageComponents/Products/AddProduct";

const Products = () => {
  const [search, setSearch] = React.useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [searchQuery, sestSearchQuery] = useState("");
  const [searchValue] = useDebounce(search, 1000);
  const [create, setCreate] = useState(false);

  // -----------get all products-----------

  const { data, isLoading, refetch } = useGetProductsQuery(searchQuery, {
    refetchOnMountOrArgChange: true,
  });

  const generateQuery = (searchValue) => {
    const queryParams = [];
    if (searchValue) {
      queryParams.push(`search=${searchValue}`);
    }

    return queryParams.join("&");
  };

  // console.log(data);

  useEffect(() => {
    const query = generateQuery(searchValue);
    sestSearchQuery(`${query}`);
  }, [searchValue]);

  // ======table Select function=======
  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  // ======add a key for selected=======
  const updateData = data?.Items?.map((item, index) => ({
    key: index + 1,
    ...item,
  }));

  return (
    <>
      <BreadCrumb
        title={"Products"}
        links={[
          { title: "Home", url: "/admin/dashboard" },
          { title: "Products", url: "/admin/products" },
        ]}
      />
      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 mb-8">
            <div className=" bg-white rounded-[20px] ">
              <div className=" flex items-center justify-between px-[22px] py-[20px] w-full">
                <SectionHeading>Products List </SectionHeading>
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <SearchInput
                    search={search}
                    setSearch={setSearch}
                    placeholder="Search By Product Name"
                  />
                  <CustomButton onClick={() => setCreate(true)}>
                    Add Product
                  </CustomButton>
                </div>
              </div>
              <div>
                <ProductsTable
                  tableData={updateData}
                  rowSelection={rowSelection}
                  refetch={refetch}
                />
              </div>
            </div>
          </div>
        </>
      )}
      <AddProduct refetch={refetch} setModalOpen={setCreate} modalOPen={create}/>
    </>
  );
};

export default Products;
