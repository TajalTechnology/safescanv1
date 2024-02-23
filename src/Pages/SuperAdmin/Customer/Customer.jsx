import React, { useState } from "react";
import BreadCrumb from "../../../Components/Shared/BreadCrumb";
import SuperAdminCustomerTop from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperAdminCustomerTop";
import SuperCustomerTable from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperCustomerTable";
import Approval from "../../../Components/pageComponents/SuperAdmin/Approval/Approval";
import { useApproveCustomersQuery, useCustomersQuery } from "../../../redux/features/superAdmin/superApi";

const Customer = () => {
  const [search, setSearch] = React.useState("");
  const [search1, setSearch1] = React.useState("");
  const [searchQuery, sestSearchQuery] = useState("");
  const [searchQuery1, sestSearchQuery1] = useState("");
  // ========data fecthing approve=========
  const { data, isLoading, refetch } = useCustomersQuery(searchQuery, {
    refetchOnMountOrArgChange: true,
  });

   // ========data fecthing Not approve=========
  const {
    data: data1,
    isLoading: isLoading1,
    refetch: refetch1,
  } = useApproveCustomersQuery(searchQuery1, { refetchOnMountOrArgChange: true });

  return (
    <>
      <BreadCrumb
        title={"Customers"}
        links={[
          { title: "Home", url: "/super-admin/customers" },
          { title: "Customers", url: "/super-admin/customers" },
        ]}
      />
      <SuperAdminCustomerTop />

      <div>
        <SuperCustomerTable
          search={search1}
          setSearch={setSearch1}
          searchQuery={searchQuery}
          sestSearchQuery={sestSearchQuery}
          data={data}
          isLoading={isLoading}
          refetch={refetch}
          refetch1={refetch1}
        />
      </div>
      <div className=" mt-5">
        <Approval
          search={search}
          setSearch={setSearch}
          searchQuery={searchQuery1}
          sestSearchQuery={sestSearchQuery1}
          data={data1}
          isLoading={isLoading1}
          refetch={refetch}
          refetch1={refetch1}
        />
      </div>
    </>
  );
};

export default Customer;
