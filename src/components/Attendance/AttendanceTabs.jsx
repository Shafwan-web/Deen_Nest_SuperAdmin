import React from "react";
import Profile from "./tabs/Profile";
import Attendance from "./tabs/Attendance";
import Review from "./tabs/Review";
import FeeHistory from "./tabs/FeeHistory";

export default function AttendanceTabs({ activeTab, setActiveTab }) {
  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <Profile />;
      case "Attendance":
        return <Attendance />;
      case "Review":
        return <Review />;
      case "Fee History":
        return <FeeHistory />;
      default:
        return <Profile />;
    }
  };
  return (
    <div>
      <div className="bg-white flex flex-row justify-between gap-4 rounded-full mt-6 p-4 text-[#999999] font-bold text-sm">
        <div className="flex w-full gap-2">
          <button
            className={`tab-button ${activeTab === "Profile" ? "active" : ""}`}
            onClick={() => setActiveTab("Profile")}
          >
            Profile
          </button>
          <button
            className={`tab-button ${
              activeTab === "Attendance" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Attendance")}
          >
            Attendance
          </button>
          <button
            className={`tab-button ${activeTab === "Review" ? "active" : ""}`}
            onClick={() => setActiveTab("Review")}
          >
            Review
          </button>
          <button
            className={`tab-button ${
              activeTab === "Fee History" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Fee History")}
          >
            Fee History
          </button>
        </div>
      </div>
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
}
