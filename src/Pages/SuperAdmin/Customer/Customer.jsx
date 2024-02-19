import React from "react";
import BreadCrumb from "../../../Components/Shared/BreadCrumb";
import SuperAdminCustomerTop from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperAdminCustomerTop";
import SectionHeading from "../../../Components/Shared/SectionHeading";
import SearchInput from "../../../Components/Shared/input/SearchInput";
import CustomButton from "../../../Components/Shared/CustomButton";
import CreatedAdminsTable from "../../../Components/pageComponents/CreatedAdmins/CreatedAdminsTable";
import SuperCustomerTable from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperCustomerTable";

const Customer = () => {
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
        <SuperCustomerTable />
      </div>
    </>
  );
};

export default Customer;
