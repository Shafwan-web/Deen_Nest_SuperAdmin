import React from "react";
import Profile_Img from "../../assets/Img/Attendance_Profile.png";
export default function AttendanceProfile() {
  return (
    <div>
      <div className="bg-primary font-primary mt-4 rounded-sm">
        <div className="flex flex-row gap-2 p-2 md:p-4 items-center">
          <div>
            <img
              src={Profile_Img}
              alt="Profile_Img"
              className="w-10 h-10 md:w-16 md:h-16 rounded-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-white font-extrabold text-lg md:text-2xl ">John Doe</h1>
            <p className="font-semibold text-white text-sm md:text-base">G.R.No.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
