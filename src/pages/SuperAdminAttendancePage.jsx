import React, { useState } from "react";
import down_Icon from "../assets/icons/Down_Icon.svg";
import Right_Arrow from "../assets/icons/rigth_Arrow_Icon.svg";
import Left_Arrow from "../assets/icons/left_Arrow_Icon.svg";
import AttendanceProfile from "../components/Attendance/AttendanceProfile";
import AttendanceState from "../components/Attendance/AttendanceState";
export default function SuperAdminAttendancePage() {
  // Step 1: start and end date
  const [startDate, setStartDate] = useState(new Date()); // current date
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    const nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7); // 7 days after today
    return nextWeek;
  });
  // Step 2: format the date nicely like "Sep 18"
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };
  return (
    <div className="font-primary">
      <div className="flex flex-row gap-4 justify-between items-center">
        <div className="">
          <h1 className="font-extrabold text-2xl">Attendance</h1>
        </div>
        <div className="inline-flex justify-center items-center gap-4">
          <button className=" bg-[#E9EDF4] border border-[#E9EDF4] gap-2 p-2 rounded-sm text-[#126F77]">
            <select className="font-primary font-normal text-sm text-[#000000D9] cursor-pointer">
              <option value="This Week">This Week</option>
              <option value="This Month">This Month</option>
              <option value="This Year">This Year</option>
            </select>
            {/* <img src={down_Icon} alt="Down_Icon" /> */}
          </button>
          <button className="flex flex-row  items-center gap-4">
            <img
              src={Right_Arrow}
              alt="Right_Arrow"
              className="bg-[#E9EDF4] flex items-center p-4 rounded-sm w-12 h-12"
              onClick={() => {
                // Go one week back
                const newStart = new Date(startDate);
                newStart.setDate(newStart.getDate() - 7);
                const newEnd = new Date(endDate);
                newEnd.setDate(newEnd.getDate() - 7);
                setStartDate(newStart);
                setEndDate(newEnd);
              }}
            />
            <p className="bg-white p-2">
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
            <img
              src={Left_Arrow}
              alt="Right_Arrow"
              className="bg-[#E9EDF4] flex items-center p-4 rounded-sm w-12 h-12"
              onClick={() => {
                // Go one week forward
                const newStart = new Date(startDate);
                newStart.setDate(newStart.getDate() + 7);
                const newEnd = new Date(endDate);
                newEnd.setDate(newEnd.getDate() + 7);
                setStartDate(newStart);
                setEndDate(newEnd);
              }}
            />
          </button>
        </div>
      </div>
      <AttendanceProfile />
      <AttendanceState />
    </div>
  );
}
