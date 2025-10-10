import React, { useState } from "react";
import Close_Icon from "../../../assets/icons/Super_Admin_Close.svg";
import Upload_File_Icon from "../../../assets/icons/Upload_File_Icon.svg";
export default function CreateUpload({ onClose }) {
  const [Invoice, setInvoice] = useState("");
  const [status, setStatus] = useState("");
  const [customer, setCustomer] = useState("");
  const [invoiceFile, setInvoiceFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInvoiceFile(file);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!invoiceFile) {
        alert("Please upload an invoice file before submitting!");
        return;
      }
      alert(`Invoice Uploaded Successfully: ${invoiceFile.name}`);
      onClose();
    };
  };
  return (
    <div>
      <div className="font-primary text-[#1E293B] w-[100%]">
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            style={{ zIndex: 40 }}
          ></div>
          <div
            className="bg-[#FFFFFF] border border-[#E9EDF6]
                rounded-md w-[700px] max-h-[90vh] overflow-y-auto shadow-lg relative m-4"
            style={{ zIndex: 50 }}
          >
            {/* Header */}
            <div className="relative">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-base text-[#1E293B] font-bold">
                  Upload Invoice
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-black text-lg cursor-pointer"
                >
                  <img src={Close_Icon} alt="Close_Icon" />
                </button>
              </div>
              <hr className="border-[#F2F2F2] border-t" />
            </div>
            <form className="space-y-4 p-4">
              {/* Row 1: Plan Name + Category */}
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="Invoice"
                    className="block mb-1 font-bold text-sm md:text-base"
                  >
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    name="Invoice"
                    id="Invoice"
                    value={Invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2 text-[12px] md:text-base"
                    placeholder="Enter Invoice Number"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="status"
                    className="block mb-1 font-bold text-sm md:text-base"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2 text-[12px] md:text-base"
                  >
                    <option value="">Select status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="Invoice"
                  className="block mb-1 font-bold text-sm md:text-base"
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  name="Customer Name"
                  id="C_Name"
                  value={Invoice}
                  onChange={(e) => setInvoice(e.target.value)}
                  className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2 text-sm md:text-base"
                  placeholder="Enter Customer Name"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label
                  htmlFor="invoiceFile"
                  className="block mb-2 font-bold text-sm md:text-base"
                >
                  Invoice file
                </label>

                <div
                  className="border-2 border-dashed border-[#D1D5DB] rounded-md p-6 flex flex-col
                   justify-center items-center text-center cursor-pointer hover:border-primary transition-all"
                  onClick={() => document.getElementById("invoiceFile").click()}
                >
                  <img
                    src={Upload_File_Icon}
                    alt="Upload Icon"
                    className="w-6 h-6 md:w-10 md:h-10 md:mb-3 opacity-70"
                  />

                  {invoiceFile ? (
                    <p className="text-[#1E293B] font-medium">
                      {invoiceFile.name}
                    </p>
                  ) : (
                    <>
                      <p className="text-[#CCCCCC] font-medium">
                        Upload Invoice file: PDF, PNG, JPG
                      </p>
                      <p className="text-gray-400 text-sm">
                        Maximum file size 10MB
                      </p>
                    </>
                  )}

                  <input
                    id="invoiceFile"
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-2 py-1 md:px-6 md:py-2 text-sm md:text-base  border border-gray-300 rounded-md text-[#6B7280] font-bold bg-[#DFE5EF] hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-2 py-2 md:px-6 md:py-2 bg-primary text-sm md:text-base text-white font-semibold rounded-md hover:bg-opacity-80"
                >
                  Upload Invoice
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
