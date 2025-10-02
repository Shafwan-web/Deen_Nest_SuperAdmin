import React from "react";
import Plus from "../../assets/icons/Plus_Super_Admin.svg";
import PricingTabs from "../../components/superAdmin/Pricing/PricingTabs";
import Green_Icon from "../../assets/icons/Vector_Green_Icon.svg";
import Blue_Icon from "../../assets/icons/Vector_Blue_Icon.svg";
import Red_Icon from "../../assets/icons/Vector_Red_Icon.svg";
import Yellow_Icon from "../../assets/icons/Vector_Yellow_Icon.svg";

const SuperAdminPricingPage = () => {
  const Price_State_data = [
    {
      icon: Green_Icon,
      
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
          <span className="font-primary font-semibold text-base cursor-pointer">
            Create Plan
          </span>
        </button>
      </div>
      <PricingTabs />
    </div>
  );
};

export default SuperAdminPricingPage;
