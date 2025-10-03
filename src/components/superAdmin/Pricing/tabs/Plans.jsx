import React, { useState, useEffect } from "react";
import Delete from "../../../../assets/icons/Super_Admin_delete.svg";
import Edit from "../../../../assets/icons/Super_Admin_Edit.svg";
import Left_Icon from "../../../../assets/icons/Super_Admin_PlanTab_Left_Icon.svg";
import Plus_Icon from "../../../../assets/icons/Plus_Icon_Super_Admin.svg";
import Minus_Icon from "../../../../assets/icons/Minus_Icon_Super_Admin.svg";

export default function Plans() {
  const [quantity, setQuantity] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState("Basic");
  const [numUsers, setNumUsers] = useState(50);
  const [subAdminQuantity, setSubAdminQuantity] = useState(1); // Added state for Sub-Admin quantity
  const [selectedStorage, setSelectedStorage] = useState(null); // Added state for selected storage
  const [selectedSupport, setSelectedSupport] = useState(null); // Added state for selected support
  const [totalPrice, setTotalPrice] = useState(0);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleSubAdminDecrease = () => {
    if (subAdminQuantity > 0) setSubAdminQuantity(subAdminQuantity - 1); // Updated for Sub-Admin quantity
  };

  const handleSubAdminIncrease = () => {
    setSubAdminQuantity(subAdminQuantity + 1); // Updated for Sub-Admin quantity
  };

  const getPricePerUser = (plan) => {
    switch (plan) {
      case "Basic":
        return 10;
      case "Pro":
        return 20;
      case "Enterprise":
        return 30;
      default:
        return 10;
    }
  };

  const plans = ["Basic", "Pro", "Enterprise"];
  const storageOptions = [
    { id: "storage50", name: "Extra Storage (50 GB)", price: 3000 },
    { id: "storage100", name: "Extra Storage (100 GB)", price: 6000 },
    { id: "storage200", name: "Extra Storage (200 GB)", price: 11000 },
  ];
  const supportOptions = [
    { id: "priority", name: "Priority Support", price: 3000 },
    { id: "premium", name: "Premium Support", price: 6000 },
  ];

  const calculateTotal = () => {
    const basePrice = numUsers * getPricePerUser(selectedPlan);
    const subAdminPrice = subAdminQuantity * 300; // Sub-Admin price
    const storagePrice = selectedStorage ? storageOptions.find(opt => opt.id === selectedStorage).price : 0;
    const supportPrice = selectedSupport ? supportOptions.find(opt => opt.id === selectedSupport).price : 0;
    return basePrice + subAdminPrice + storagePrice + supportPrice;
  };

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    setTotalPrice(calculateTotal());
  };

  const handleUsersChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setNumUsers(1);
    } else {
      setNumUsers(value);
    }
    setTotalPrice(calculateTotal());
  };

  const handleStorageChange = (e) => {
    setSelectedStorage(e.target.id); // Updated to handle radio change
    setTotalPrice(calculateTotal());
  };

  const handleSupportChange = (e) => {
    setSelectedSupport(e.target.id); // Updated to handle radio change
    setTotalPrice(calculateTotal());
  };

  useEffect(() => {
    setTotalPrice(calculateTotal());
  }, [selectedPlan, numUsers, subAdminQuantity, selectedStorage, selectedSupport]);

  const data = [
    { icon: Left_Icon, title: "Lorem ipsum" },
    { icon: Left_Icon, title: "Lorem ipsum" },
    { icon: Left_Icon, title: "Lorem ipsum" },
    { icon: Left_Icon, title: "Lorem ipsum" },
    { icon: Left_Icon, title: "Lorem ipsum" },
    { icon: Left_Icon, title: "Lorem ipsum" },
  ];

  return (
    <div className="font-primary">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#FFF] rounded-lg p-8 border border-[#f2f2f2]">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex flex-row justify-between items-center">
              <div className="inline-flex flex-col gap-2">
                <span className="font-bold text-lg">Demo</span>
                <h3 className="text-[#6B7280] text-sm">
                  Perfect for small institutions
                </h3>
              </div>
              <div className="inline-flex flex-row gap-4">
                <img src={Edit} alt="Edit_Icon" className="w-6 h-6" />
                <img src={Delete} alt="Delete_Icon" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-center text-2xl font-medium text-[#6B7280]">
              <h1 className="inline text-4xl font-bold text-[#1E293B]">₹3,000</h1>
              /Monthly
            </span>
            <div className="border border-[#F2F2F2]"></div>
            <div>
              <h2 className="text-[#1E293B] font-bold text-lg mb-4">Features</h2>
              {data.map((val, i) => (
                <div key={i} className="">
                  <div className="inline-flex gap-2 mb-4">
                    <img src={val.icon} alt="Left_Arrow_Icon" />
                    <p className="text-[#6B7280] text-base font-medium">{val.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#FFF] rounded-lg p-8 border border-[#f2f2f2]">
          <div className="flex flex-col gap-12 justify-between">
            <div className="flex flex-row justify-between items-center">
              <div className="inline-flex flex-col gap-2">
                <span className="font-bold text-lg">Basic</span>
                <h3 className="text-[#6B7280] text-sm">
                  Perfect for small institutions
                </h3>
              </div>
              <div className="inline-flex flex-row gap-4">
                <img src={Edit} alt="Edit_Icon" className="w-6 h-6" />
                <img src={Delete} alt="Delete_Icon" className="w-6 h-6" />
              </div>
            </div>
            <span className="text-center text-2xl font-medium text-[#6B7280]">
              <h1 className="inline text-4xl font-bold text-[#1E293B]">₹3,000</h1>
              /Monthly
            </span>
            <div className="border border-[#F2F2F2]"></div>
            <div>
              <h2 className="text-[#1E293B] font-bold text-lg mb-4">Features</h2>
              {data.map((val, i) => (
                <div key={i} className="">
                  <div className="inline-flex gap-2 mb-4">
                    <img src={val.icon} alt="Left_Arrow_Icon" />
                    <p className="text-[#6B7280] text-base font-medium">{val.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] rounded-xl text-[#1E293B] p-6">
          <h2 className="text-lg font-bold">Pricing Calculator</h2>
          <div className="mt-6">
            <span className="text-lg font-medium">Select Plan</span>
            <select
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
            <label className="block text-lg font-bold mt-2">Number of Users</label>
            <input
              type="number"
              value={numUsers}
              onChange={handleUsersChange}
              min="1"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
              placeholder="Enter number of users"
            />
          </div>
          <div className="border border-[#F2F2F2] mt-12"></div>
          <div className="font-bold text-lg mt-6">
            Available Add-ons
            <div className="border border-[#f2f2f2] mt-4 p-4 rounded-lg">
              Quantity Based Add-ons
              <div className="border border-[#F2F2F2] rounded-sm mt-4 p-4">
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-row justify-around gap-2">
                    <h2 className="font-semibold text-base">Sub-Admin</h2>
                    <span className="inline-flex flex-row justify-between items-center gap-2 text-[#6B7280] font-semibold text-sm">
                      <h2 className="text-lg font-bold text-[#1E293B]">₹300</h2>
                      /Per Sub-Admin
                    </span>
                  </div>
                  <span className="text-sm text-[#6B7280] font-semibold pl-10">
                    Additional storage space for
                    <br /> documents and media files
                  </span>
                  <div className="flex flex-row gap-2 justify-around">
                    <div className="inline-flex flex-row gap-2 pl-5 items-center font-medium justify-center">
                      Quantity
                      <button
                        className="border-2 border-[#f2f2f2] p-1 rounded-sm"
                        onClick={handleSubAdminDecrease} // Updated to handle Sub-Admin decrease
                      >
                        <img
                          src={Minus_Icon}
                          alt="Minus_Icon"
                          className="w-4 h-4"
                        />
                      </button>
                      <p className="border border-[#f2f2f2] rounded-sm px-4">
                        {subAdminQuantity} {/* Updated to show Sub-Admin quantity */}
                      </p>
                      <button
                        className="border-2 border-[#f2f2f2] p-1 rounded-sm"
                        onClick={handleSubAdminIncrease} // Updated to handle Sub-Admin increase
                      >
                        <img
                          src={Plus_Icon}
                          alt="Plus_Icon"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                    <div>
                      <h1 className="text-[#1D4ED8] bg-[#E6F3FF] rounded-sm px-4 py-1">
                        Users
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#F2F2F2] rounded-lg mt-4 p-4">
            <h2 className="font-bold text-lg text-[#1E293B]">
              Storage Based Add-ons
            </h2>
            <div className="flex flex-col gap-2 mt-2">
              {storageOptions.map((option) => (
                <div key={option.id} className="flex flex-col gap-1 p-2 border border-[#F2F2F2] rounded-sm">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="storage"
                        className="hidden"
                        id={option.id}
                        checked={selectedStorage === option.id}
                        onChange={handleStorageChange} // Updated to handle storage selection
                      />
                      <label
                        htmlFor={option.id}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-flex items-center justify-center border-2 border-[#126F77] rounded-full">
                          <span className="w-2 h-2 bg-[#126F77] rounded-full hidden peer-checked:block"></span>
                        </span>
                        <span className="text-base font-semibold text-[#1E293B]">
                          {option.name}
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-[#1E293B]">
                        ₹{option.price}
                        <p className="text-[#6B7280] inline text-xs font-medium">
                          /Monthly
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-2">
                    <span className="text-sm pl-6 w-[50%] font-semibold text-[#6B7280]">
                      Additional storage space for documents and media files
                    </span>
                    <span className="text-sm text-[#16A34A] bg-[#E9FDF0] px-2 py-1 rounded">
                      Storage
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#F2F2F2] rounded-lg mt-4 p-4">
            <h2 className="font-bold text-lg text-[#1E293B]">Support Based Add-ons</h2> {/* Updated header */}
            <div className="flex flex-col gap-2 mt-2">
              {supportOptions.map((option) => (
                <div key={option.id} className="flex flex-col gap-1 p-2 border border-[#F2F2F2] rounded-sm">
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="support"
                        className="hidden"
                        id={option.id}
                        checked={selectedSupport === option.id}
                        onChange={handleSupportChange} // Updated to handle support selection
                      />
                      <label
                        htmlFor={option.id}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <span className="w-4 h-4 inline-flex items-center justify-center border-2 border-[#126F77] rounded-full">
                          <span className="w-2 h-2 bg-[#126F77] rounded-full hidden peer-checked:block"></span>
                        </span>
                        <span className="text-base font-semibold text-[#1E293B]">
                          {option.name}
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold text-[#1E293B]">
                        ₹{option.price}
                        <p className="text-[#6B7280] inline text-xs font-medium">
                          /Monthly
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-2">
                    <span className="text-sm pl-6 w-[50%] font-semibold text-[#6B7280]">
                      Additional storage space for documents and media files
                    </span>
                    <span className="text-sm text-[#F59E0B] bg-[#FFF9E6] px-2 py-1 rounded">
                      Support
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-lg text-[#1E293B] mb-4">Plan Breakdown</h2>
            <div className="border border-[#E9EDF6] rounded-sm p-4 bg-[#F6F6F6]">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#6B7280]">
                    {selectedPlan} Plan
                  </span> {/* Updated to dynamic plan */}
                  <span className="text-sm font-bold text-[#1E293B]">
                    ₹{numUsers * getPricePerUser(selectedPlan)}
                  </span> {/* Updated to dynamic price */}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#6B7280]">
                    Sub-Admin ({subAdminQuantity}×₹300)
                  </span> {/* Updated to dynamic Sub-Admin */}
                  <span className="text-sm font-bold text-[#1E293B]">
                    ₹{subAdminQuantity * 300}
                  </span> {/* Updated to dynamic price */}
                </div>
                {selectedStorage && (
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-[#6B7280]">
                      {storageOptions.find(opt => opt.id === selectedStorage).name}
                    </span> {/* Updated to dynamic storage */}
                    <span className="text-sm font-bold text-[#1E293B]">
                      ₹{storageOptions.find(opt => opt.id === selectedStorage).price}
                    </span> {/* Updated to dynamic price */}
                  </div>
                )}
                {selectedSupport && (
                  <div className="flex justify-between items-center">
                    <span className="text-base font-bold text-[#6B7280]">
                      {supportOptions.find(opt => opt.id === selectedSupport).name}
                    </span> {/* Updated to dynamic support */}
                    <span className="text-sm font-bold text-[#1E293B]">
                      ₹{supportOptions.find(opt => opt.id === selectedSupport).price}
                    </span> {/* Updated to dynamic price */}
                  </div>
                )}
                <div className="border border-[#EEEEEE]"></div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#1E293B]">
                    Plan Total
                  </span>
                  <span className="text-sm font-bold text-[#1E293B]">
                    ₹{totalPrice}
                  </span> {/* Updated to dynamic total */}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-base font-bold">Coupon Code</label>
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 p-2 border border-[#E5E7EB] text-[#ADADAE] font-semibold text-base rounded-md focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                />
                <button className="px-4 py-2 bg-[#126F77] text-white text-sm rounded-md font-bold">
                  Apply
                </button>
              </div>
            </div>
            <div className="border border-[#F2F2F2] mt-6"></div>
            <div className="mt-4">
              <h2 className="font-bold text-lg text-[#1E293B] mb-2">Total Calculation</h2>
              <div className="space-y-2 border border-[#126F771A] rounded-sm p-2 bg-[#F3F8F8]">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#6B7280]">
                    Subtotal
                  </span>
                  <span className="text-sm font-bold text-[#1E293B]">
                    ₹{totalPrice}
                  </span> {/* Updated to dynamic total */}
                </div>
                <div className="border border-[#126F771A]"></div>
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-[#1E293B]">
                    Plan Total
                  </span>
                  <span className="text-base font-bold text-[#1E293B]">
                    ₹{totalPrice}
                  </span> {/* Updated to dynamic total */}
                </div>
              </div>
            </div>
            <div className="mt-4 bg-[#F6F6F6] p-2 rounded-md border border-[#E9EDF6]">
              <h2 className="font-bold text-lg text-[#1E293B] mb-2">Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#6B7280]">
                    Plan: {selectedPlan}
                  </span> {/* Updated to dynamic plan */}
                  <span className="text-sm font-medium text-[#1E293B]"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#6B7280]">
                    Users: {numUsers}
                  </span> {/* Updated to dynamic users */}
                  <span className="text-sm font-medium text-[#1E293B]"></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#6B7280]">
                    Sub-admin: {subAdminQuantity}
                  </span> {/* Updated to dynamic Sub-Admin */}
                  <span className="text-sm font-medium text-[#1E293B]"></span>
                </div>
                {selectedStorage && (
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#6B7280]">
                      Storage: {storageOptions.find(opt => opt.id === selectedStorage).name}
                    </span> {/* Updated to dynamic storage */}
                    <span className="text-sm font-medium text-[#1E293B]"></span>
                  </div>
                )}
                {selectedSupport && (
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-sm text-[#6B7280]">
                      Support: {supportOptions.find(opt => opt.id === selectedSupport).name}
                    </span> {/* Updated to dynamic support */}
                    <span className="text-sm font-medium text-[#1E293B]"></span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}