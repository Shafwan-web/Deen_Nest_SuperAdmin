import React from "react";
import Green_Icon from "../../../assets/icons/Vector_Green_Icon.svg";
import Blue_Icon from "../../../assets/icons/Vector_Blue_Icon.svg";
import Red_Icon from "../../../assets/icons/Vector_Red_Icon.svg";
import Yellow_Icon from "../../../assets/icons/Vector_Yellow_Icon.svg";

export default function BillingState() {
  const billing_State_data = [
    {
      icon: Green_Icon,
      backColor: "#E9FDF0",
      Title: "Monthly Revenue",
      Head: "₹1,52,000",
      HeadColor: "#1E293B",
    },
    {
      icon: Blue_Icon,
      backColor: "#E6F3FF",
      Title: "Active Subscriptions ",
      Head: "2",
      HeadColor: "#16A34A",
    },
    {
      icon: Red_Icon,
      backColor: "#FFEFF0",
      Title: "Failed Payments",
      Head: "1",
      HeadColor: "#DC2626",
    },
    {
      icon: Yellow_Icon,
      backColor: "#FFF9E6",
      Title: "Expiring Soon",
      Head: "2",
      HeadColor: "#DC2626",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 ">
      {billing_State_data.map((value, i) => {
        return (
          <div className="bg-[#FFFFFF] p-4 rounded-sm">
            <div className="flex flex-row gap-4 justify-between items-center">
              <div className="flex flex-col gap-3">
                <div className="text-[#6B7280] font-semibold text-base">
                  <p>{value.Title}</p>
                </div>
                <div
                  className="font-extrabold text-xl font-primary"
                  style={{ color: `${value.HeadColor}` }}
                >
                  {value.Head}
                </div>
              </div>
              <div
                className="p-3 rounded-sm"
                style={{ backgroundColor: `${value.backColor}` }}
              >
                <img src={value.icon} alt="Icon_Btn" className="w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
