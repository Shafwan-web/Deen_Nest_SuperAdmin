import React from "react";
import Image_Icon from "../../assets/icons/Upload_Img_Icon.svg";
const SuperAdminSettingPage = () => {
  return (
    <div className="font-primary ">
      <h1 className="font-extrabold text-2xl">Setting</h1>
      <div className="bg-[#FFFFFF] border border-[#f2f2f2] rounded-lg mt-6 p-4">
        <h1 className="font-bold text-base">General Setting</h1>

        <div className="flex flex-row justify-start gap-4 mt-10">
          <div className="border-dashed border-2 border-[#F2F2F2] w-18 h-18 flex justify-center items-center">
            <img src={Image_Icon} alt="Image_Icon" className=" w-7 h-7" />
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex gap-4 justify-center items-center  ">
              <button className="bg-[#EEEEEE] text-[#181818] font-bold px-3 py-2 rounded-sm border-2 border-[#D9D9D9]">
                Upload Logo
              </button>
              <button className="bg-primary px-3 py-2 text-white rounded-sm font-bold">
                Remove
              </button>
            </div>
            <div className="">
              <p className="text-[#999999]">Recommended Size: 200x200px</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-between gap-4">
              <div className="flex-1 ">
                <label className="font-bold text-sm">Name</label>
                <input
                  type="text"
                  defaultValue="Anish Kalidiya"
                  className="w-full p-2 border border-[#E9EDF6] rounded mt-1 bg-[#F6F6F6]"
                />
              </div>
              <div className="flex-1">
                <label className="font-bold text-sm">Email</label>
                <input
                  type="email"
                  defaultValue="example@gmail.com"
                  className="w-full p-2 border border-[#E9EDF6] rounded mt-1 bg-[#F6F6F6]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h2 className="font-bold text-sm">Password Setup</h2>
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <label className="font-bold text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full p-2 border border-[#f2f2f2] rounded mt-1 bg-[#F6F6F6]"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-bold text-sm">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full p-2 border border-[#f2f2f2] rounded mt-1 bg-[#F6F6F6]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-sm">Sub-Admin Setup</h2>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="font-bold text-sm">
                    Default Sub-Admin Count
                  </label>
                  <input
                    type="number"
                    defaultValue="10"
                    className="w-full p-2 border border-[#f2f2f2] rounded mt-1 bg-[#F6F6F6]"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-bold text-sm">
                    Sub-Admin per user
                  </label>
                  <input
                    type="number"
                    defaultValue="25"
                    className="w-full p-2 border border-[#f2f2f2] rounded mt-1 bg-[#F6F6F6]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSettingPage;
