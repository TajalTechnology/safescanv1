import React from "react";
import BreadCrumb from "../../../Components/Shared/BreadCrumb";
import SuperAdminCustomerTop from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperAdminCustomerTop";
import SuperCustomerTable from "../../../Components/pageComponents/SuperAdmin/SuperAdminCustomer/SuperCustomerTable";
import Approval from "../../../Components/pageComponents/SuperAdmin/Approval/Approval";

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
      <div className=" mt-5">
          <Approval />
      </div>
    </>
  );
};

export default Customer;
