import React, { useState } from "react";
import Plus from "../../assets/icons/Plus_Super_Admin.svg";
import PricingTabs from "../../components/superAdmin/Pricing/PricingTabs";
import Green_Icon from "../../assets/icons/Vector_Green_Icon.svg";
import Blue_Icon from "../../assets/icons/Vector_Blue_Icon.svg";
import Red_Icon from "../../assets/icons/Vector_Red_Icon.svg";
import Yellow_Icon from "../../assets/icons/Vector_Yellow_Icon.svg";
import { tr } from "framer-motion/client";
import CreatePlanModel from "../../components/superAdmin/Pricing/CreatePlanModel";
// import { Link } from "react-router-dom";
const SuperAdminPricingPage = () => {
  const [planOpen, setPlanOpen] = useState(false);

  const handleOpenPlan = () => {
    setPlanOpen(true);
  };

  const handleCloseOpen = () => {
    setPlanOpen(false);
  };
  const Price_State_data = [
    {
      icon: Green_Icon,
      backColor: "#E9FDF0",
      Title: "Total Plans",
      Head: "2",
      // HeadColor: "#1E293B",
    },
    {
      icon: Blue_Icon,
      backColor: "#E6F3FF",
      Title: "Active Plans",
      Head: "2",
      // HeadColor: "#16A34A",
    },
    {
      icon: Red_Icon,
      backColor: "#FFEFF0",
      Title: "Popular Plan",
      Head: "Professional",
      // HeadColor: "#DC2626",
    },
    {
      icon: Yellow_Icon,
      backColor: "#FFF9E6",
      Title: "Avg. Price",
      Head: "₹3,000",
      // HeadColor: "#DC2626",
    },
  ];
  return (
    <div className="font-primary">
      <div className="flex flex-row justify-between gap-4 ">
        <h1 className="font-primary font-bold text-2xl text-[#1E293B]">
          Pricing & Promotions
        </h1>
        <button className="inline-flex justify-center items-center bg-primary gap-2 p-2 rounded-sm text-white">
          <img src={Plus} alt="Plus_Icon" className="w-3 h-3" />
          <span
            className="font-primary font-semibold text-base cursor-pointer"
            onClick={handleOpenPlan}
          >
            {/* <Link to="/create-plan">Create Plan</Link>  working this Link Ok. */}
            Create Plan
          </span>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Price_State_data.map((value, index) => {
          return (
            <div className="bg-[#fff] rounded-sm" key={index}>
              <div className="flex flex-row gap-4 p-4">
                <div
                  className="w-10 h-10 p-2 rounded-sm flex justify-center items-center"
                  style={{ backgroundColor: `${value.backColor}` }}
                >
                  <img src={value.icon} alt="Vector_Icon" className="w-5 h-5" />
                </div>
                <div className="inline-flex flex-col gap-2">
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
      <div></div>

      <PricingTabs />
      {planOpen && <CreatePlanModel onClose={handleCloseOpen} />}
    </div>
  );
};

export default SuperAdminPricingPage;
