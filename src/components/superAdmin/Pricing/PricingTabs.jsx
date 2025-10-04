import React, { useState } from "react";
import Plans from "./tabs/Plans";
import Features from "./tabs/Features";
import Addons from "./tabs/Addons";
import Coupons from "./tabs/Coupons";

export default function PricingTabs({ activeTab, setActiveTab }) {
  // const [activeTab, setActiveTab] = useState("plans");
  const RenderTab = () => {
    switch (activeTab) {
      case "plans":
        return <Plans />;
      case "features":
        return <Features />;
      case "addons":
        return <Addons />;
      case "coupons":
        return <Coupons />;
      default:
        return <Plans />;
    }
  };
  return (
    <>
      <div className="bg-white flex flex-row justify-between gap-4 rounded-full text-center mt-6 p-4 text-[#999999] font-bold text-sm">
        {/* Tabs Header */}
        <div className="flex w-full gap-2">
          <button
            className={`tab-button ${activeTab === "plans" ? "active" : ""}`}
            onClick={() => setActiveTab("plans")}
          >
            Plans
          </button>
          <button
            className={`tab-button ${activeTab === "features" ? "active" : ""}`}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={`tab-button ${activeTab === "addons" ? "active" : ""}`}
            onClick={() => setActiveTab("addons")}
          >
            Addons
          </button>
          <button
            className={`tab-button ${activeTab === "coupons" ? "active" : ""}`}
            onClick={() => setActiveTab("coupons")}
          >
            Coupons
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-4">{RenderTab()}</div>
    </>
  );
}
