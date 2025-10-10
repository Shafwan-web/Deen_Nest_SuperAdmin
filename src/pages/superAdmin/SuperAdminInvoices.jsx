import React, { useState } from "react";
import Upload_Icon from "../../assets/icons/Upload_Icon.svg";
import InvoiceState from "../../components/superAdmin/Invoice/InvoiceState";
import InvoiceTable from "../../components/superAdmin/Invoice/InvoiceTable";
import CreateUpload from "../../components/superAdmin/Invoice/CreateUpload";

const SuperAdminInvoices = () => {
  const [upopen, setUpopen] = useState(false);

  const handleOpenup = () => {
    setUpopen(true);
  };
  const handleCloseup = () => {
    setUpopen(false);
  };
  return (
    <>
      <div className="flex flex-row gap-2 justify-between font-primary">
        <div>
          <h1 className="font-primary font-extrabold text-base md:text-2xl">
            Invoices
          </h1>
        </div>
        <div>
          <button
            className="flex flex-row gap-4 bg-primary justify-center items-center rounded-sm px-1 md:px-3 py-2 
          cursor-pointer hover:scale-105 duration-300 hover:text-base"
            onClick={handleOpenup}
          >
            <img src={Upload_Icon} alt="Upload_Icon" className="w-4 h-4" />
            <h3 className="text-white font-bold text-sm md:text-base">
              Upload Invoice
            </h3>
          </button>
        </div>
      </div>
      <InvoiceState />
      <InvoiceTable />
      {upopen && <CreateUpload onClose={handleCloseup} />}
    </>
  );
};

export default SuperAdminInvoices;
