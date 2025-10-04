import React from "react";
import Close_Icon from "../../../assets/icons/Super_Admin_Close.svg";

export default function CreateFeatureModel({ onClose }) {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative bg-white rounded-lg p-6 shadow-lg z-10 w-[700px] max-h-[90vh] ">
          {/* max-w-md */}
          <div className="flex flex-row gap-2 justify-between items-center">
            <h1 className="font-primary font-bold text-[#1E293B] text-lg">
              Create Feature
            </h1>
            <img
              src={Close_Icon}
              alt="Clode_Icon"
              onClick={onClose}
              className="cursor-pointer w-4 h-4"
            />
          </div>
          <div className="border border-[#F2F2F2] mt-6"></div>
          <div className="flex flex-row gap-5 justify-between mt-6">
            <div className="flex-1 flex flex-col ">
              <label htmlFor="Name" className="font-bold text-base">
                Feature Name
              </label>

              <input
                type="text"
                placeholder="Enter Features Name"
                className="border border-[#E9EDF6] rounded-sm p-2 mt-2"
              />
            </div>
            <div className="flex-1 flex flex-col ">
              <label htmlFor="category" className="font-bold text-base">
                Category
              </label>

              <select
                id="category"
                className="border border-[#E9EDF6] rounded-sm p-2 mt-2 text-[#333333]"
              >
                <option value="">Select</option>
                <option className="text-[#333333]">Management</option>
                <option className="text-[#333333]">Analytics</option>
                <option className="text-[#333333]">Communication</option>
                <option>Storage</option>
                <option>Support</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="
            Description
            "
              className=" mt-4 font-bold text-base ]"
            >
              Description
            </label>
            <textarea
              className="border border-[#E9EDF6] text-[#ADADAE] p-3"
              rows={4}
              placeholder="write a description for Feature"
            />
          </div>
          <div className="flex flex-row justify-end gap-3 mt-5">
            <button className="bg-[#DFE5EF] px-2 py-2 rounded-sm text-[#6B7280] font-bold">
              Cancel
            </button>
            <button className="bg-primary px-2 py-2 rounded-sm text-[#FFFFFF] font-bold">
              Create Feature
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div class="relative w-full h-48 bg-gray-200">
    //   <div class="absolute inset-0 bg-blue-500 opacity-75">
    //     <h1>This is Demo</h1>
    //     <img src={Close_Icon} alt="Clode_Icon" onClick={onClose } />
    //   </div>
    // </div>
  );
}
