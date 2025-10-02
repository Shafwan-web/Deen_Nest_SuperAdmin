import React from "react";
import Search from "../../../assets/icons/Search_Super_Admin.svg";
import Col from "../../../assets/icons/Col_Super_Admin.svg";
export default function BillingTable() {
  const paymentData = [
    {
      invoiceId: "#969589",
      customer: "Cody Fisher",
      plan: "Pro",
      amount: "Rs. 2000",
      method: "Net Banking",
      date: "October 25, 2019",
      status: "Paid",
    },
    {
      invoiceId: "#105986",
      customer: "Guy Hawkins",
      plan: "Pro",
      amount: "Rs. 1000",
      method: "UPI",
      date: "August 2, 2013",
      status: "Paid",
    },
    {
      invoiceId: "#200257",
      customer: "Theresa Webb",
      plan: "Demo",
      amount: "Rs. 37,000",
      method: "Credit card",
      date: "November 16, 2014",
      status: "Paid",
    },
    {
      invoiceId: "#526520",
      customer: "Jacob Jones",
      plan: "Pro",
      amount: "Rs. 1000",
      method: "Debit card",
      date: "February 15, 2012",
      status: "Failed",
    },
    {
      invoiceId: "#526525",
      customer: "Darlene Robertson",
      plan: "Demo",
      amount: "Rs. 40,000",
      method: "UPI",
      date: "April 17, 2016",
      status: "Paid",
    },
    {
      invoiceId: "#256584",
      customer: "Brooklyn Simmons",
      plan: "Pro",
      amount: "Rs. 40,000",
      method: "CepBank",
      date: "August 24, 2013",
      status: "Pending",
    },
  ];
  return (
    <div>
      <div className="bg-[#FFFFFF] p-4 mt-6 rounded-lg border border-[#F2F2F2]">
        <div className="flex flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-[#1E293B] font-bold font-primary text-base">
              Payment History
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="flex gap-2 border border-[#f2f2f2] py-2 px-3 w-[300px]">
              <img src={Search} alt="Search_Icon" />
              <span className="text-[#6B7280] text-sm">Search</span>
            </div>
            <div>
              <button className="bg-primary p-3 rounded-lg">
                <img src={Col} alt="Coloumn_Icon" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-[#F2F2F2] mt-6 w-full"></div>
        <table className="w-full mt-4">
          <thead>
            <tr className="text-left text-[#126F77] text-sm font-primary">
              <th className="py-2 px-4">Invoice ID</th>
              <th className="py-2 px-4">Customer</th>
              <th className="py-2 px-4">Plan</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Payment Method</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((payment, index) => (
              <tr
                key={index}
                className="border-t border-[#F2F2F2] text-[#6B7280] font-primary mb-20"
              >
                <td className="py-3 px-4">{payment.invoiceId}</td>
                <td className="py-3 px-4">{payment.customer}</td>
                <td className="py-3 px-4">{payment.plan}</td>
                <td className="py-3 px-4">{payment.amount}</td>
                <td className="py-3 px-4">{payment.method}</td>
                <td className="py-3 px-4">{payment.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded ${
                      payment.status === "Paid"
                        ? "bg-green-100 text-[#16A34A]"
                        : payment.status === "Failed"
                        ? "bg-red-100 text-[#DC2626]"
                        : "bg-yellow-100 text-[#F59E0B]"
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
