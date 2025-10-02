import React from "react";
import BillingState from "../../components/superAdmin/Billing/BillingState";
import BillingTable from "../../components/superAdmin/Billing/BillingTable";

const SuperAdminBillingPage = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl text-[#1E293b] font-primary mb-3">
          Billing
        </h1>
      </div>
      <BillingState />
      <BillingTable />
    </div>
  );
};

export default SuperAdminBillingPage;
