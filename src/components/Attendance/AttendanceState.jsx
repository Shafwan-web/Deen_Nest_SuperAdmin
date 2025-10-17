import React from "react";
import Attendance_Icon from "../../assets/icons/Icons_Attendance_2.svg";
import AnnualFee from "../../assets/icons/AnnualFee_Icon.svg";
import PaidFee from "../../assets/icons/PaidFee_Icon.svg";
import PendingFee from "../../assets/icons/PendingFee_Icon.svg";
export default function AttendanceState() {
  const attendanceData = [
    {
      icon: Attendance_Icon,
      title: "Avg. Attendance",
      head: "95%",
      headColor: "#1D4ED8",
      iconColor: "#E6F3FF",
    },
    {
      icon: AnnualFee,
      title: "Annual Fee",
      head: " ₹15,000",
      headColor: "#F59E0B",
      iconColor: "#FFF9E6",
    },
    {
      icon: PaidFee,
      title: "Fee Paid ",
      head: "₹12,000",
      headColor: "#16A34A",
      iconColor: "#E9FDF0",
    },
    {
      icon: PendingFee,
      title: "Pending Fee",
      head: " ₹3,000",
      headColor: "#DC2626",
      iconColor: "#FFEFF0",
    },
  ];
  return (
    <div>
      <div className="grid xl:grid-cols-4 gap-4 mt-6">
        {attendanceData.map((item, i) => {
          return (
            <div key={i} className="bg-white p-4 rounded-lg">
              <div className="flex flex-row gap-4 justify-between items-center">
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-[#6B7280] text-base font-semibold">
                      {item.title}
                    </p>
                  </div>
                  <div>
                    <h1
                      className="font-bold text-lg"
                      style={{ color: `${item.headColor}` }}
                    >
                      {item.head}
                    </h1>
                  </div>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: `${item.iconColor}` }}
                >
                  <img src={item.icon} alt="Icon image" />
                </div>
              </div>
            </div>
          );
        })}
        <div className=""></div>
      </div>
    </div>
  );
}
