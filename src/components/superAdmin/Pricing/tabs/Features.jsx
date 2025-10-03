import React from "react";
import Delete from "../../../../assets/icons/Delete__Fetures_Super_Admin.svg";
import Edit from "../../../../assets/icons/Edit_Feature_Super_Admin.svg";

export default function Features() {
  const Features_Core_data = [
    {
      Head: "Student Management",
      icon: Edit,
      icon1: Delete,
      para: "Comprehensive student profile and enroll management",
    },
    {
      Head: "Fee Collection",
      icon: Edit,
      icon1: Delete,
      para: "Automated fee collection and payment tracking",
    },
    {
      Head: "Class Management",
      icon: Edit,
      icon1: Delete,
      para: "Create and manage classes with subject assignments",
    },
  ];
  const Features_Management_data = [
    {
      Head: "Maulana Management ",
      icon: Edit,
      icon1: Delete,
      para: "Manage teacher profiles, assignments  and schedules",
    },
    {
      Head: "Attendance Tracking",
      icon: Edit,
      icon1: Delete,
      para: "Digital attendance management for students and teachers",
    },
    {
      Head: "Exam Management",
      icon: Edit,
      icon1: Delete,
      para: "Create, schedule and manage examinations",
    },
    {
      Head: "Grade Book",
      icon: Edit,
      icon1: Delete,
      para: "Record and manage student grades and assessments",
    },
  ];
  const Features_Analytics_data = [
    {
      Head: "Basic Reporting",
      icon: Edit,
      icon1: Delete,
      para: "Essential reports for free collection and student data",
    },
    {
      Head: "Advanced Analytics",
      icon: Edit,
      icon1: Delete,
      para: "Detailed insights and performance analytics",
    },
    {
      Head: "Financial Reports",
      icon: Edit,
      icon1: Delete,
      para: "Comprehensive financial reporting and forecasting",
    },
    {
      Head: "Student performance Analytics",
      icon: Edit,
      icon1: Delete,
      para: "Track and analyze individual student progress",
    },
  ];
  const Features_Comm__data = [
    {
      Head: "Parent Communication ",
      icon: Edit,
      icon1: Delete,
      para: "SMS and email notifications to parents",
    },
    {
      Head: "Announcement System",
      icon: Edit,
      icon1: Delete,
      para: "School-wide announcements and notification",
    },
    {
      Head: "Parent Portal",
      icon: Edit,
      icon1: Delete,
      para: "Dedicated portal for parents to track child progress",
    },
  ];
  const Features_Storage_data = [
    {
      Head: "Document management ",
      icon: Edit,
      icon1: Delete,
      para: "Store and organize important documents and files",
    },
    {
      Head: "backup & Restore",
      icon: Edit,
      icon1: Delete,
      para: "Automated data backup and recovery options",
    },
  ];
  const Features_Support_data = [
    {
      Head: "Priority Support ",
      icon: Edit,
      icon1: Delete,
      para: "24/7 priority customer support",
    },
    {
      Head: "Training Resources",
      icon: Edit,
      icon1: Delete,
      para: "Access to training materials and webinars",
    },
    {
      Head: "Custom Integrations",
      icon: Edit,
      icon1: Delete,
      para: "Custom API integrations and development support",
    },
  ];
  return (
    <div className="bg-[#FFF] border border-[#f2f2f2] rounded-lg">
      <div className="p-4">
        <h1>Features</h1>
      </div>
      <div className="border border-[#F2F2F2]"></div>

      {/* Core Div Start------------------------------------------------------------------- */}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className=" text-[#16A34A] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#E9FDF0" }}
          >
            Core
          </span>
          <p className="text-[#1E293B] font-semibold">3 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Core_data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Core Finish---------------------------------------------------------------------------- */}
      {/*Management --------------------- */}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className="text-[#1D4ED8] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#E6F3FF" }}
          >
            Management
          </span>
          <p className="text-[#1E293B] font-semibold">4 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Management_data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/*Analytics --------------------- */}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className="text-[#F59E0B] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#FFF9E6" }}
          >
            Analytics
          </span>
          <p className="text-[#1E293B] font-semibold">4 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Analytics_data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/*Comminication ---------------------*/}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className="text-[#7B1EB2] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#F3E8FF" }}
          >
            Communication
          </span>
          <p className="text-[#1E293B] font-semibold">3 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Comm__data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/*Storage --------------------- */}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className="text-[#AE4200] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#FFEDD4" }}
          >
            Storage
          </span>
          <p className="text-[#1E293B] font-semibold">2 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Storage_data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/*Support --------------------- */}
      <div>
        <div className="flex flex-row gap-4 items-center p-4">
          <span
            className="text-[#A60F62] text-base p-2 font-bold rounded-md"
            style={{ backgroundColor: "#FCE7F3" }}
          >
            Support
          </span>
          <p className="text-[#1E293B] font-semibold">3 Features</p>
        </div>
        <div className="grid grid-cols-3 p-4 gap-6">
          {Features_Support_data.map((val, i) => {
            return (
              <div
                className="border border-[#f2f2f2] bg-[#FFFFFF] rounded-lg p-6"
                key={i}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div className="flex">
                    <h1 className="font-semibold text-lg">{val.Head}</h1>
                  </div>
                  <div className="flex flex-row gap-2 justify-between">
                    <img src={val.icon} alt="Icon" className="w-6 h-6" />
                    <img src={val.icon1} alt="Icon" className="w-6 h-6" />
                  </div>
                </div>
                <p className="mt-6 text-[#6B7280] mb-6">{val.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
