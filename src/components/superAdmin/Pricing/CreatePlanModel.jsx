// import React, { useState } from "react";
// import Close_Icon from "../../../assets/icons/Super_Admin_Close.svg";

// const CreatePlanModel = ({ onClose }) => {
//   const [planName, setPlanName] = useState("");
//   const [category, setCategory] = useState("");
//   const [pricing, setPricing] = useState("");
//   const [billingCycle, setBillingCycle] = useState("");
//   const handleChange = (e) => {
//     setPlanName(e.target.value);
//   };
//   return (
//     <div className="font-primary text-[#1E293B] w-[100%] ">
//       <div
//         className="
//       fixed inset-0 flex items-center justify-center z-50 px-3"
//       >
//         <div
//           className="absolute inset-0 bg-black opacity-50"
//           style={{ zIndex: 40 }} // Lower z-index than modal
//           onClick={onClose}
//         ></div>
//         {/* //    fixed inset-0 bg-white-400 bg-opacity-50 flex justify-center items-center z-50 */}
//         <div
//           className="bg-[#FFFFFF] border border-[#FFFFFF] rounded-xl p-6
//          w-[700px]  max-h-[90vh] overflow-y-auto shadow-lg relative"
//         >
//           <div className="relative">
//             <div
//               className="inline-flex flex-row justify-between items-center gap-4 mb-4"
//               style={{ minWidth: "100%" }}
//             >
//               <h1 className="text-base font-bold">Create New Pricing Plan</h1>
//               <img
//                 src={Close_Icon}
//                 alt="Close_Icon"
//                 className="cursor-pointer w-6 h-6"
//                 onClick={onClose}
//               />
//             </div>
//           </div>
//           <div className="border border-[#F2F2F2]"></div>

//           <form className="space-y-4">
//             {/* Row 1: Plan Name + Category */}
//             <div className="flex flex-row gap-4">
//               <div className="flex-1">
//                 <label htmlFor="planName" className="block mb-1 font-medium">
//                   Plan Name
//                 </label>
//                 <input
//                   type="text"
//                   name="planName"
//                   id="planName"
//                   value={planName}
//                   onChange={(e) => setPlanName(e.target.value)}
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Enter plan name"
//                 />
//               </div>

//               <div className="flex-1">
//                 <label htmlFor="category" className="block mb-1 font-medium">
//                   Category
//                 </label>
//                 <select
//                   id="category"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 >
//                   <option value="">Select category</option>
//                   <option value="core">Core</option>
//                   <option value="management">Management</option>
//                   <option value="analytics">Analytics</option>
//                 </select>
//               </div>
//             </div>

//             {/* Row 2: Pricing + Billing Cycle */}
//             <div className="flex flex-row gap-4">
//               <div className="flex-1">
//                 <label htmlFor="pricing" className="block mb-1 font-medium">
//                   Pricing
//                 </label>
//                 <input
//                   type="text"
//                   name="pricing"
//                   id="pricing"
//                   value={pricing}
//                   onChange={(e) => setPricing(e.target.value)}
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                   placeholder="Enter price"
//                 />
//               </div>

//               <div className="flex-1">
//                 <label
//                   htmlFor="billingCycle"
//                   className="block mb-1 font-medium"
//                 >
//                   Billing Cycle
//                 </label>
//                 <select
//                   id="billingCycle"
//                   value={billingCycle}
//                   onChange={(e) => setBillingCycle(e.target.value)}
//                   className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//                 >
//                   <option value="">Select cycle</option>
//                   <option value="monthly">Monthly</option>
//                   <option value="quarterly">Quarterly</option>
//                   <option value="yearly">Yearly</option>
//                 </select>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CreatePlanModel;
import React, { useState } from "react";
import Close_Icon from "../../../assets/icons/Super_Admin_Close.svg";
import Toggle_Icon from "../../../assets/icons/Toggle_Super_Admin.svg";

const CreatePlanModel = ({ onClose }) => {
  const [planName, setPlanName] = useState("");
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [billingCycle, setBillingCycle] = useState("");

  const [ison, setIson] = useState(false);

  const handleChange = (e) => {
    setPlanName(e.target.value);
  };
  const handleToggle = () => {
    setIson(!ison); // Toggle the state
  };

  return (
    <div className="font-primary text-[#1E293B] w-[100%]">
      <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
        {/* Backdrop with 50% opacity */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ zIndex: 40 }}
          // onClick={onClose}
        ></div>
        {/* Modal with higher z-index and StudentForm-like styling */}
        <div
          className="bg-[#FFFFFF] border border-[#E9EDF6]
           rounded-md p-4 w-[700px] max-h-[90vh] overflow-y-auto shadow-lg relative"
          style={{ zIndex: 50 }}
        >
          {/* Header */}
          <div className="relative">
            <div className="flex justify-between items-center px-6 py-4">
              <h2 className="text-base text-[#1E293B] font-bold">
                Create New Pricing Plan
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-lg cursor-pointer"
              >
                <img src={Close_Icon} alt="Close_Icon" />
              </button>
            </div>
            <hr className="border-[#F2F2F2] border-t" />
          </div>

          <form className="space-y-4 px-6 pb-6 mt-6">
            {/* Row 1: Plan Name + Category */}
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="planName"
                  className="block mb-1 font-bold text-base"
                >
                  Plan Name
                </label>
                <input
                  type="text"
                  name="planName"
                  id="planName"
                  value={planName}
                  onChange={(e) => setPlanName(e.target.value)}
                  className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2"
                  placeholder="Enter plan name"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="category"
                  className="block mb-1 font-bold text-base"
                >
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2"
                >
                  <option value="">Select category</option>
                  <option value="core">Core</option>
                  <option value="management">Management</option>
                  <option value="analytics">Analytics</option>
                </select>
              </div>
            </div>

            {/* Row 2: Pricing + Billing Cycle */}
            <div className="flex flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="pricing"
                  className="block mb-1 font-bold text-base"
                >
                  Pricing
                </label>
                <input
                  type="text"
                  name="pricing"
                  id="pricing"
                  value={pricing}
                  onChange={(e) => setPricing(e.target.value)}
                  className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE] rounded-md p-2"
                  placeholder="Enter price"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="billingCycle"
                  className="block mb-1 font-bold text-base"
                >
                  Billing Cycle
                </label>
                <select
                  id="billingCycle"
                  value={billingCycle}
                  onChange={(e) => setBillingCycle(e.target.value)}
                  className="mt-1 block w-full border border-[#E9EDF6] text-[#ADADAE]  rounded-md p-2"
                >
                  <option value="">Select cycle</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="font-bold text-base mb-6">Features</h2>
              <span
                className="text-[#16A34A] text-base p-2 font-bold rounded-md"
                style={{ backgroundColor: "#E9FDF0" }}
              >
                Core
              </span>
              <div className="mt-10 flex flex-row gap-3 pl-4">
                <input type="checkbox" />
                <span className="text-base font-bold">Student Management</span>
              </div>
              <div className="mt-6 flex flex-row gap-3 pl-4">
                <input type="checkbox" />
                <span className="text-base font-bold">Fee Collection</span>
              </div>
              <div className="mt-6 flex flex-row gap-3 pl-4">
                <input type="checkbox" />
                <span className="text-base font-bold">Class Management</span>
              </div>
              <div className="mt-8">
                <span
                  className="text-[#1D4ED8] text-base p-2 font-bold rounded-md"
                  style={{ backgroundColor: "#E6F3FF" }}
                >
                  Management
                </span>
                <div className="mt-10 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Teacher Management
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Attendance Tracking
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Exam Management</span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Grade Book</span>
                </div>
              </div>
              <div className="mt-8">
                <span
                  className="text-[#F59E0B] text-base p-2 font-bold rounded-md"
                  style={{ backgroundColor: "#FFF9E6" }}
                >
                  Analytics
                </span>
                <div className="mt-10 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Basic Reporting</span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Advanced Analytics
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Financial Reports</span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Student performance Analytics
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <span
                  className="text-[#7B1EB2] text-base p-2 font-bold rounded-md"
                  style={{ backgroundColor: "#F3E8FF" }}
                >
                  Communication
                </span>
                <div className="mt-10 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Parent Communication
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Announcement System
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Parent Portal</span>
                </div>
              </div>
              <div className="mt-8">
                <span
                  className="text-[#AE4200] text-base p-2 font-bold rounded-md"
                  style={{ backgroundColor: "#FFEDD4" }}
                >
                  Storage
                </span>
                <div className="mt-10 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Document management
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">backup & Restore</span>
                </div>
              </div>{" "}
              <div className="mt-8">
                <span
                  className="text-[#A60F62] text-base p-2 font-bold rounded-md"
                  style={{ backgroundColor: "#FCE7F3" }}
                >
                  Support
                </span>
                <div className="mt-10 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">Priority Support</span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Training Resources
                  </span>
                </div>
                <div className="mt-6 flex flex-row gap-3 pl-4">
                  <input type="checkbox" />
                  <span className="text-base font-bold">
                    Custom Integrations
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h1 className="font-bold text-base">Description</h1>
              <textarea
                rows={3}
                placeholder="Write a Brief about Plan"
                className="w-full bg-[#fff] rounded-lg p-4 h-20 font-medium text-sm text-[#ADADAE] border border-[#E9EDF6]
                "
                // w-full bg-[#f3f3f5] rounded-lg p-2 sm:p-3 md:p-4 lg:p-4 xl:p-4 2xl:p-4 h-24 sm:h-24 md:h-32  outline-none focus:ring-2 focus:ring-[#126F77] transition-all
                required
              ></textarea>
              {/* <button
                onClick={onClick}
                disabled={disabled}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md ${bgColor} ${textColor} font-primary font-semibold text-base transition-colors duration-200 ${
                  disabled
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {icon && (
                  <img src={icon} alt={`${text} Icon`} className="w-4 h-4" />
                )}
                <span>{text}</span>
              </button> */}
              <div className="flex justify-start mt-4 gap-4 items-center">
                <button
                  type="button"
                  className={`py-1 px-1 flex rounded-full w-16 transition-all duration-500 ${
                    ison
                      ? "bg-[#126F77] justify-end"
                      : "bg-gray-300 justify-start"
                  }`}
                  //   className="bg-primary py-1 px-4 flex justify-start items-center rounded-full"
                  onClick={handleToggle}
                >
                  <div
                    className={`flex items-center transition-all duration-900 ${
                      ison ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                  {ison ? (
                    <img
                      src={Toggle_Icon}
                      alt="Toggle_Icon"
                      className="w-6 h-6"
                    />
                  ) : (
                    <img
                      src={Toggle_Icon}
                      alt="Toggle_Icon"
                      className="w-6 h-6"
                    />
                  )}
                </button>
                <h2 className="text-lg font-bold">
                  {ison ? "Active" : "Disable"}
                </h2>
              </div>
              <div className="flex justify-end items-center gap-4 mt-6">
                <button className="bg-[#DFE5EF] text-[#6B7280] px-4 py-2 rounded-sm">
                  Cancel
                </button>
                <button className="bg-primary px-4 py-2 text-white rounded-sm">
                  Create Plan
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePlanModel;
