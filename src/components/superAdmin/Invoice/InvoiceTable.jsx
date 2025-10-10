import React from "react";
import Search from "../../../assets/icons/Search_Super_Admin.svg";
import Col from "../../../assets/icons/Col_Super_Admin.svg";

import Edit from "../../../assets/icons/edit.svg";
import delete_Icon from "../../../assets/icons/delete.svg";
export default function InvoiceTable() {
  const InvoiceData = [
    {
      invoiceId: "#969589",
      customer: "Cody Fisher",
      plan: "Pro",
      amount: "Rs. 2000",
      method: "Net Banking",
      date: "October 25, 2019",
      status: "Paid",
      icon: Edit,
      icon1: delete_Icon,
    },
    {
      invoiceId: "#105986",
      customer: "Guy Hawkins",
      plan: "Pro",
      amount: "Rs. 1000",
      method: "UPI",
      date: "August 2, 2013",
      status: "Paid",
      icon: Edit,
      icon1: delete_Icon,
    },
    {
      invoiceId: "#200257",
      customer: "Theresa Webb",
      plan: "Demo",
      amount: "Rs. 37,000",
      method: "Credit card",
      date: "November 16, 2014",
      status: "Paid",
      icon: Edit,
      icon1: delete_Icon,
    },
    {
      invoiceId: "#526520",
      customer: "Jacob Jones",
      plan: "Pro",
      amount: "Rs. 1000",
      method: "Debit card",
      date: "February 15, 2012",
      status: "Failed",
      icon: Edit,
      icon1: delete_Icon,
    },
    {
      invoiceId: "#526525",
      customer: "Darlene Robertson",
      plan: "Demo",
      amount: "Rs. 40,000",
      method: "UPI",
      date: "April 17, 2016",
      status: "Paid",
      icon: Edit,
      icon1: delete_Icon,
    },
    {
      invoiceId: "#256584",
      customer: "Brooklyn Simmons",
      plan: "Pro",
      amount: "Rs. 40,000",
      method: "CepBank",
      date: "August 24, 2013",
      status: "Pending",
      icon: Edit,
      icon1: delete_Icon,
    },
  ];
  return (
    <div>
      <div className="bg-[#FFFFFF] p-2 md:p-4 mt-6 rounded-lg border border-[#F2F2F2] ">
        <div className="flex flex-row justify-between items-center gap-4 sm:flex-col sm:items-start md:flex-row md:items-center">
          <div>
            <h1 className="text-[#1E293B] font-bold font-primary text-base">
              Invoices
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex gap-2 border border-[#f2f2f2] py-2 px-3 min-w-[200px]">
              <img src={Search} alt="Search_Icon" />
              <span className="text-[#6B7280] text-sm">Search</span>
            </div>
            <div>
              <button className="bg-primary p-2 rounded-lg">
                <img src={Col} alt="Coloumn_Icon" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#F2F2F2] mt-6 w-full"></div>
        <div className="overflow-x-auto">
          <table className="w-full mt-4 min-w-[1100px] custom-scrollbar">
            <thead>
              <tr className="text-left text-[#126F77] text-sm font-primary font-bold">
                <th className="py-2 px-4">Invoice ID</th>
                <th className="py-2 px-4">Customer</th>
                <th className="py-2 px-4">Plan</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Payment Method</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {InvoiceData.map((invoice, index) => (
                <tr
                  key={index}
                  className="border-t border-[#F2F2F2] text-[#6B7280] font-primary mb-20"
                >
                  <td className="py-3 px-4">{invoice.invoiceId}</td>
                  <td className="py-3 px-4">{invoice.customer}</td>
                  <td className="py-3 px-4">{invoice.plan}</td>
                  <td className="py-3 px-4">{invoice.amount}</td>
                  <td className="py-3 px-4">{invoice.method}</td>
                  <td className="py-3 px-4">{invoice.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 font-semibold rounded ${
                        invoice.status === "Paid"
                          ? "bg-green-100 text-[#16A34A]"
                          : invoice.status === "Failed"
                          ? "bg-red-100 text-[#DC2626]"
                          : "bg-yellow-100 text-[#F59E0B]"
                      }`}
                    >
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex flex-row gap-2 justify-start items-center">
                      <button>
                        <img
                          src={invoice.icon}
                          alt="Edit_Icon"
                          className="w-5 h-5"
                        />
                      </button>
                      <button>
                        <img
                          src={invoice.icon1}
                          alt="Delete_Icon"
                          className="w-5 h-5"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
