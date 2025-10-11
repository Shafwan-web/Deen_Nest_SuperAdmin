// import React, { useState } from "react";
// import Tick from "../../assets/icons/SuperAdmin_tickMark.svg";
// export default function Notification() {
//   const [tick, setTick] = useState(false);
//   const Notification_Data = [
//     {
//       head: "New Message from Maulana",
//       para: "Parent inquiry about Zainab progress in Arabic Language ",
//       molana: "From: Maulana Ahmad",
//       hr: "2 Hours ago",
//     },
//     {
//       head: "New Message from Maulana",
//       para: "Parent inquiry about Zainab progress in Arabic Language ",
//       molana: "From: Maulana Ahmad",
//       hr: "2 Hours ago",
//     },
//     {
//       head: "New Message from Maulana",
//       para: "Parent inquiry about Zainab progress in Arabic Language ",
//       molana: "From: Maulana Ahmad",
//       hr: "2 Hours ago",
//     },
//     {
//       head: "New Message from Maulana",
//       para: "Parent inquiry about Zainab progress in Arabic Language ",
//       molana: "From: Maulana Ahmad",
//       hr: "2 Hours ago",
//     },
//     {
//       head: "New Message from Maulana",
//       para: "Parent inquiry about Zainab progress in Arabic Language ",
//       molana: "From: Maulana Ahmad",
//       hr: "2 Hours ago",
//     },
//   ];
//   return (
//     <div className="font-primary">
//       <div className="bg-[#FFF] p-4 rounded-lg mt-3 md:mt-6">
//         <h1 className="font-bold text-sm md:text-base ">Donors Details</h1>
//         <div className="mt-6">
//           <div className="grid grid-cols-1 gap-4 ">
//             {Notification_Data.map((item, i) => {
//               return (
//                 <div className="border border-[#F2F2F2] rounded-lg p-4" key={i}>
//                   <div className="flex flex-row gap-4">
//                     <div className="">
//                       <input
//                         type="checkbox"
//                         className={`
//                             appearance-none w-4 h-4 border-2
//                             border-[#126f77] rounded-sm checked:border-[#126f77] cursor-pointer"
//                              ${
//                                tick ? (
//                                  <img
//                                    src={Tick}
//                                    alt="Tick_Icon"
//                                    className="w-3 h-3"
//                                  />
//                                ) : (
//                                  "border-[#126f77]"
//                                )
//                              }`}
//                       />
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <h1>{item.head}</h1>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import Tick from "../../assets/icons/SuperAdmin_tickMark.svg";

export default function Notification() {
  // ✅ Step 1: Track checked state for each notification
  const [checkedItems, setCheckedItems] = useState([]);

  const Notification_Data = [
    {
      head: "New Message from Maulana",
      para: "Parent inquiry about Zainab progress in Arabic Language",
      molana: "From: Maulana Ahmad",
      hr: "2 Hours ago",
    },
    {
      head: "New Message from Maulana",
      para: "Parent inquiry about Zainab progress in Arabic Language",
      molana: "From: Maulana Ahmad",
      hr: "2 Hours ago",
    },
    {
      head: "New Message from Maulana",
      para: "Parent inquiry about Zainab progress in Arabic Language",
      molana: "From: Maulana Ahmad",
      hr: "2 Hours ago",
    },
    {
      head: "New Message from Maulana",
      para: "Parent inquiry about Zainab progress in Arabic Language",
      molana: "From: Maulana Ahmad",
      hr: "2 Hours ago",
    },
    {
      head: "New Message from Maulana",
      para: "Parent inquiry about Zainab progress in Arabic Language",
      molana: "From: Maulana Ahmad",
      hr: "2 Hours ago",
    },
  ];

  // ✅ Step 2: Handle checkbox click
  const handleCheck = (index) => {
    setCheckedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="font-primary">
      <div className="bg-[#FFF] p-4 rounded-lg mt-3 md:mt-6">
        <h1 className="font-bold text-sm md:text-base">Donors Details</h1>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-4">
            {Notification_Data.map((item, i) => (
              <div
                key={i}
                className="border border-[#F2F2F2] rounded-lg p-4 flex flex-row gap-4 items-start"
              >
                {/* ✅ Custom checkbox container */}
                <div className="flex  flex-row w-full items-start justify-center gap-4">
                  <input
                    type="checkbox"
                    className="accent-[#126F77] border-2 border-[#126f77] w-4 h-4 rounded-sm cursor-pointer"
                  />
                  {/* Notification Text */}
                  <div className="flex  w-full  flex-col gap-1">
                    <div className="flex md:flex-row justify-between gap-4">
                      <div className="">
                        <h1 className="font-semibold text-[#000000] text-xs sm:text-base">
                          {item.head}
                        </h1>
                      </div>
                      <div className="">
                        <p className="text-[#6B7280] text-[10px] sm:text-sm font-semibold">
                          {item.hr}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#64748B]">
                      {item.para}
                    </p>
                    <span className="text-xs text-[#94A3B8] mt-2">
                      {item.molana}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
