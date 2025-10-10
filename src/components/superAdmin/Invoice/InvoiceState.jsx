import React from "react";
import Green_Icon from "../../../assets/icons/Vector_Green_Icon.svg";
import Blue_Icon from "../../../assets/icons/Vector_Blue_Icon.svg";
import Red_Icon from "../../../assets/icons/Vector_Red_Icon.svg";
import Yellow_Icon from "../../../assets/icons/Vector_Yellow_Icon.svg";
export default function InvoiceState() {
  const Invoice_data = [
    {
      icon: Green_Icon,
      backColor: "#E9FDF0",
      Title: "Paid",
      Head: "2",
      // HeadColor: "#1E293B",
    },
    {
      icon: Red_Icon,
      backColor: "#FFEFF0",
      Title: "Overdue",
      Head: "1",
      // HeadColor: "#DC2626",
    },
    {
      icon: Yellow_Icon,
      backColor: "#FFF9E6",
      Title: "Pending",
      Head: "1",
      // HeadColor: "#DC2626",
    },
    {
      icon: Blue_Icon,
      backColor: "#E6F3FF",
      Title: "Total Amount",
      Head: "₹12,000",
      // HeadColor: "#16A34A",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 font-primary">
        {Invoice_data.map((value, index) => {
          return (
            <div className="bg-[#fff] rounded-sm" key={index}>
              <div className="flex flex-row gap-4 items-center p-4">
                <div
                  className="w-13 h-13 p-2 rounded-sm flex justify-center items-center"
                  style={{ backgroundColor: `${value.backColor}` }}
                >
                  <img src={value.icon} alt="Vector_Icon" className="w-7 h-7" />
                </div>
                <div className="inline-flex flex-col gap-1">
                  <p className="text-[#6B7280] font-semibold text-base">
                    {value.Title}
                  </p>
                  <h1 className="text-[#1E293B] font-bold text-lg">
                    {value.Head}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
