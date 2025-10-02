import React, { useState } from "react";
import Delete from "../../../../assets/icons/Super_Admin_delete.svg";
import Edit from "../../../../assets/icons/Super_Admin_Edit.svg";
import Left_Icon from "../../../../assets/icons/Super_Admin_PlanTab_Left_Icon.svg";
import { div } from "framer-motion/client";
export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("Basic");

  const [numUsers, setNumUsers] = useState(50);
  const [totalPrice, setTotalPrice] = useState(0);

  const getPricePerUser = (plan) => {
    switch (plan) {
      case "Basic":
        return 10;
      case "Pro":
        return 20;
      case "Enterprise":
        return 30;
      default:
      case "Choose a Pricing Plan":
        return 10;
    }
  };
  const plans = ["Basic", "Pro", "Enterprise"];
  const calculateTotal = () => {
    const pricePerUser = getPricePerUser(selectedPlan);
    return numUsers * pricePerUser;
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    setTotalPrice(calculateTotal());
  };

  const handleUsersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setNumUsers(1); // Minimum 1 user
    } else {
      setNumUsers(value);
    }
    setTotalPrice(calculateTotal());
  };

  // Recalculate on mount
  React.useEffect(() => {
    setTotalPrice(calculateTotal());
  }, []);
  const data = [
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
    {
      icon: Left_Icon,
      title: "Lorem ipsum",
    },
  ];
  return (
    <div className="font-primary">
      <div className="grid grid-cols-3 gap-3">
        <div className=" bg-[#FFF] rounded-lg p-8 border border-[#f2f2f2]">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex flex-row justify-between items-center">
              <div className="inline-flex flex-col gap-2">
                <span className="font-bold text-lg">Demo</span>
                <h3 className="text-[#6B7280] text-sm ">
                  Perfect for small institutions
                </h3>
              </div>
              <div className="inline-flex flex-row gap-4">
                <img src={Edit} alt="Edit_Icon" className="w-6 h-6" />
                <img src={Delete} alt="Delete_Icon" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-center text-2xl font-medium text-[#6B7280]">
              <h1 className="inline text-4xl font-bold text-[#1E293B]">
                ₹3,000
              </h1>
              /Monthly
            </span>
            <div className="border border-[#F2F2F2]"></div>
            <div>
              <h2 className="text-[#1E293B] font-bold text-lg mb-4">
                Features
              </h2>
              {data.map((val, i) => {
                return (
                  <div key={i} className="">
                    <div className="inline-flex gap-2 mb-4">
                      <img src={val.icon} alt="Left_Arrow_Icon" />
                      <p className="text-[#6B7280] text-base font-medium ">
                        {val.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------Second Card */}
        <div className=" bg-[#FFF] rounded-lg p-8 border border-[#f2f2f2]">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex flex-row justify-between items-center">
              <div className="inline-flex flex-col gap-2">
                <span className="font-bold text-lg">Basic</span>
                <h3 className="text-[#6B7280] text-sm ">
                  Perfect for small institutions
                </h3>
              </div>
              <div className="inline-flex flex-row gap-4">
                <img src={Edit} alt="Edit_Icon" className="w-6 h-6" />
                <img src={Delete} alt="Delete_Icon" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-center text-2xl font-medium text-[#6B7280]">
              <h1 className="inline text-4xl font-bold text-[#1E293B]">
                ₹3,000
              </h1>
              /Monthly
            </span>
            <div className="border border-[#F2F2F2]"></div>
            <div>
              <h2 className="text-[#1E293B] font-bold text-lg mb-4">
                Features
              </h2>
              {data.map((val, i) => {
                return (
                  <div key={i} className="">
                    <div className="inline-flex gap-2 mb-4">
                      <img src={val.icon} alt="Left_Arrow_Icon" />
                      <p className="text-[#6B7280] text-base font-medium ">
                        {val.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------------------3 Card*/}
        <div className="bg-[#FFFFFF] rounded-xl text-[#1E293B]  w-[350px] h-[640px] p-6">
          <h2 className="text-lg font-bold">Pricing Calculator</h2>
          <div className="mt-6">
            <span className="text-lg font-medium">Select Plan</span>
            {/* <label className="block text-lg font-medium mb-2">
              Select Plan
            </label> */}
            <select
              placeholder="Choose a Pricing Plan"
              value={selectedPlan}
              onChange={handlePlanChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
            >
              {plans.map((plan) => (
                <option key={plan} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium mt-2">
              Number of Users
            </label>
            <input
              type="number"
              value={numUsers}
              onChange={handleUsersChange}
              min="1"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              placeholder="Enter number of users"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
