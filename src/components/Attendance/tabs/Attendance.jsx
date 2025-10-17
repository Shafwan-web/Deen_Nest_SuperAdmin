import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  //   Legend,
} from "recharts";
import Days_7_Icon from "../../../assets/icons/Days_7_Icon.svg";
import Present_Icon from "../../../assets/icons/Present_6_Icon.svg";
import Absent_Icon from "../../../assets/icons/Absent_Icon.svg";
import Holiday from "../../../assets/icons/Holiday_Icon.svg";
import Export_Icon from "../../../assets/icons/Export_Icon.svg";
import Download_Icon from "../../../assets/icons/Download_Icon_attendance.svg";

export default function Attendance() {
  const [isLoading, setIsLoading] = useState(false); // State to track loading
  const data = [
    { name: "Holiday", value: 10, color: "#EF4444" },
    { name: "Absent", value: 20, color: "#f97316" }, // orange
    { name: "Present", value: 70, color: "#0f766e" }, // teal
  ];
  const summary_data = [
    {
      icon: Days_7_Icon,
      backColor: "#B6D0D2",
      head: "7",
      title: "Total Days",
      text_Color: "#126F77",
    },
    {
      icon: Present_Icon,
      backColor: "#B9F8CF",
      head: "6",
      title: "Days Present",
      text_Color: "#0F8236",
    },
    {
      icon: Absent_Icon,
      backColor: "#FFC9C9",
      head: "1",
      title: "Absent",
      text_Color: "#C10007",
    },
    {
      icon: Holiday,
      backColor: "#BEDBFF",
      head: "0",
      title: "Holiday",
      text_Color: "#1447E6",
    },
  ];
  const attendanceLog = [
    { date: "Monday, January 12, 2025", status: "Present" },
    { date: "Tuesday, January 28, 2025", status: "Holiday" },
    { date: "Wednesday, January 29, 2025", status: "Absent" },
    { date: "Thursday, January 30, 2025", status: "Present" },
  ];
  // Function to convert data to CSV
  const convertToCSV = (data) => {
    const header = "Date,Status\n";
    const rows = data.map((row) => `${row.date},${row.status}`).join("\n");
    return header + rows;
  };

  // Function to trigger file download
  const handleExport = () => {
    if (attendanceLog.length === 0) return; // Do nothing if no data
    setIsLoading(true);
    const csv = convertToCSV(attendanceLog);
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "attendance_report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    setIsLoading(false); // Reset loading state
  };

  // Download function (can be same as export for now)
  const handleDownload = () => {
    handleExport(); // Reuse export logic for simplicity
  };
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
          <div className="flex-1 w-full bg-white rounded-md p-4 relative">
            <h3 className="font-bold text-sm mb-4 sm:text-base">
              Attendance Overview
            </h3>
            <div className="absolute left-0 right-0 border border-[#f2f2f2]"></div>
            <div className="mt-6 w-full h-64 flex justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    // outerRadius={90}
                    // innerRadius={60}
                    outerRadius="70%" // now responsive
                    innerRadius="50%" // now responsive
                    dataKey="value"
                    label={({ name, value }) => `${name} (${value})`}
                    labelLine={false}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  {/* <Legend verticalAlign="bottom" align="center" /> */}
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="flex-1 w-full relative md:flex-3 bg-white rounded-md p-4">
            <div className="">
              <h1 className="text-[#1E293B] font-bold text-sm md:text-base mb-4">
                Summary Statistics
              </h1>
              {/* <div className="ml-[-16px] mr-[-16px] border-t border-[#f2f2f2] w-[calc(100%+32px)]]"></div> */}
              <div className="absolute left-0 right-0 border border-[#f2f2f2]"></div>
              <div className="mt-8 grid-cols-2 grid gap-4">
                {summary_data.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-md p-2 md:p-4 items-center"
                    style={{ backgroundColor: `${item.backColor}80` }}
                  >
                    <div className="flex flex-col gap-2 justify-center items-center">
                      <div
                        className="inline-flex justify-center items-center p-2 gap-2 font-bold text-3xl"
                        style={{ color: `${item.text_Color}` }}
                      >
                        <img src={item.icon} alt="Icon image" />
                        <h1 className="text-lg md:text-2xl lg:text-3xl">
                          {item.head}
                        </h1>
                      </div>
                      <div>
                        <p
                          className="font-semibold text-sm md:text-lg"
                          style={{ color: `${item.text_Color}` }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white rounded-md p-2 md:p-4">
          <div className="flex flex-col items-start gap-1 justify-between md:flex-row md:items-center md:gap-4">
            <div className="flex justify-center items-center">
              <h3 className="font-bold text-sm mb-4 sm:text-base">
                Daily Attendance Log
              </h3>
            </div>
            <div className="flex gap-2 ">
              <button
                className="inline-flex justify-center items-center gap-1 px-1 md:gap-2 md:py-1 md:px-2 bg-[#DFE5EF] rounded-sm 
                disabled:opacity-50 cursor-pointer"
                onClick={handleExport}
                disabled={attendanceLog.length === 0 || isLoading}
              >
                <img src={Export_Icon} alt="Export_Icon" />
                <p className="font-bold text-[10px] md:text-sm text-[#6B7280]">
                  {/* Export Report (CSV) */}
                  {isLoading ? "Exporting..." : "Export Report (CSV)"}
                </p>
              </button>
              <button
                className="inline-flex justify-center items-center gap-2 py-1 px-2 bg-[#126F77] rounded-sm cursor-pointer disabled:opacity-50"
                onClick={handleDownload}
                disabled={attendanceLog.length === 0 || isLoading}
              >
                <img src={Download_Icon} alt="Download_Icon" />
                <p className="text-white text-[10px] md:text-sm">
                  {/* Download */}
                  {isLoading ? "Downloading..." : "Download"}
                </p>
              </button>
            </div>
          </div>
          <div className="ml-[-8px] mr-[-8px] md:ml-[-16px] md:mr-[-16px] border-t border-[#f2f2f2] mt-4 w-[calc(100%+16px)] md:w-[calc(100%+32px)]mt-4"></div>
          <div className="mt-4">
            {attendanceLog.map((log, index) => (
              <div
                key={index}
                className={`p-4 mt-2 rounded-sm ${
                  log.status === "Present"
                    ? "bg-[#B9F8CF]/40 border border-[#B9F8CF]"
                    : log.status === "Absent"
                    ? "bg-[#FFC9C9]/40 border border-[#FFC9C9]"
                    : "bg-[#BEDBFF]/40 border border-[#BEDBFF]"
                }`}
              >
                {/* <span
                  className={`inline-flex flex-col gap-2 ${
                    log.status === "Present"
                      ? "text-[#B9F8CF]"
                      : log.status === "Absent"
                      ? "bg-red-100"
                      : "bg-blue-100"
                  }`}
                >
                  <p>{log.date}</p>
                  <p>{log.status}</p>
                </span> */}
                <span className={`inline-flex flex-col gap-2 `}>
                  <p className="text-sm font-semibold md:text-base">
                    {log.date}
                  </p>
                  <p
                    className={`text-xs md:text-sm font-semibold ${
                      log.status === "Present"
                        ? "text-[#0F8236]"
                        : log.status === "Absent"
                        ? "text-[#C10007]"
                        : "text-[#1447E6]"
                    }`}
                  >
                    {log.status}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
