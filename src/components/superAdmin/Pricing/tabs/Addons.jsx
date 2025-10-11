import React, { useState } from "react";
import Green_Icon from "../../../../assets/icons/Vector_Green_Icon.svg";
import Yellow_Icon from "../../../../assets/icons/Vector_Yellow_Icon.svg";
import Blue_Icon from "../../../../assets/icons/Vector_Blue_Icon.svg";
import Delete from "../../../../assets/icons/Delete__Fetures_Super_Admin.svg";
import Edit from "../../../../assets/icons/Edit_Feature_Super_Admin.svg";
import Toggle_Icon from "../../../../assets/icons/Toggle_Super_Admin.svg";

export default function Addons() {
  // All in one Card
  const [toggles, setToggles] = useState({
    storage: [false, false, false],
    support: [false, false],
    users: [false, false],
  });
  //----------------------------------------------
  ///Storage Add-ons
  const [ison, setIson] = useState(false);
  const [ison1, setIson1] = useState(false);
  const [ison2, setIson2] = useState(false);

  const handleToggle = () => {
    setIson(!ison);
  };

  const handleToggle1 = () => {
    setIson1(!ison1);
  };
  const handleToggle2 = () => {
    setIson2(!ison2);
  };

  ///Suppot Add-ons
  const [support, setSupport] = useState(false);
  const [support1, setSupport1] = useState(false);

  const handleSupportToggle = () => {
    setSupport(!support);
  };

  const handleSupportToggle1 = () => {
    setSupport1(!support1);
  };
  /// Users Add-ons
  const [users, setUsers] = useState(false);
  const [users1, setUsers1] = useState(false);

  const handleUsersToggle = () => {
    setUsers(!users);
  };

  const handleUsersToggle1 = () => {
    setUsers1(!users1);
  };
  const Addons_Storage_Data = [
    {
      Card_Head: "Extra Storage (50) GB",
      Card_title: "Additional storage space for documents and media files",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: ison,
      handle: handleToggle,
    },
    {
      icon: Green_Icon,
      backcolor: "#E9FDF0",
      Para: "Storage Add-on",
      title: "3 add-oms Available",
      Card_Head: "Extra Storage (50) GB",
      Card_title: "Additional storage space for documents and media files",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: ison1,
      handle: handleToggle1,
    },
    {
      icon: Green_Icon,
      backcolor: "#E9FDF0",
      Para: "Storage Add-on",
      title: "3 add-oms Available",
      Card_Head: "Extra Storage (50) GB",
      Card_title: "Additional storage space for documents and media files",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: ison2,
      handle: handleToggle2,
    },
  ];
  const Addons_Support_Data = [
    {
      Card_Head: "Priority Support",
      Card_title: "24/7 dedicated support with phone and chat",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: support,
      handle: handleSupportToggle,
    },
    {
      Card_Head: "Premium Support",
      Card_title: "dedicated account manager and priority escalation ",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: support1,
      handle: handleSupportToggle1,
    },
  ];

  const Addons_Users_Data = [
    {
      Card_Head: "Additional Users (100)",
      Card_title: "Expand your user limit by 100 users",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: users,
      handle: handleUsersToggle,
    },
    {
      Card_Head: "Additional Users (500)",
      Card_title: "Expand your user limit by 500 users ",
      Delete: Delete,
      Edit: Edit,
      Rs: "₹ 100",
      Month: "Per Month",
      gradientFrom: "rgba(18,111,119,0.2)",
      gradientTo: "rgba(235,99,25,0.2)",
      tglAct: "Active",
      tglDis: "InActive",
      tgl_icon: Toggle_Icon,
      Card_del: "Delete",
      Card_edit: "Edit",
      Toggle_Set: users1,
      handle: handleUsersToggle1,
    },
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-xl font-primary">
      <div className="flex flex-col justify-center gap-4 p-4">
        <div className="flex flex-row items-center gap-4">
          <div
            className="p-3 rounded-sm"
            style={{ backgroundColor: "#E9FDF0" }}
          >
            <img src={Green_Icon} alt="Green_Icon" className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-[#1E293B] font-semibold text-base">
              Storage Add-on
            </h1>
            <p className="text-[#6B7280] font-medium text-sm">
              3 add-oms Available
            </p>
          </div>
        </div>
        {/* <h1>jsdfjsdj</h1> */}
        <div className="grid grid-cols-3 gap-5">
          {Addons_Storage_Data.map((value, index) => {
            return (
              <div
                className="border border-[#126F771A] rounded-lg p-4"
                key={index}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div>
                    <h1 className="font-semibold text-base">
                      {value.Card_Head}
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <button className="">
                      <img
                        src={value.Edit}
                        alt="Edit_Button"
                        className="w-6 h-6"
                      />
                    </button>
                    <button className="">
                      <img
                        src={value.Delete}
                        alt="Delete_Button"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-[#6B7280] mt-2">{value.Card_title}</p>
                <div
                  className="p-4 mt-8 rounded-sm flex flex-row justify-between gap-4"
                  style={{
                    background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                  }}
                >
                  <div className="">
                    <h1 className="font-semibold text-lg">{value.Rs}</h1>
                    <p className="text-[#6B7280]">{value.Month}</p>
                  </div>
                  <div className="flex justify-start mt-4 gap-4 items-center">
                    <h2 className="text-lg font-bold">
                      {value.Toggle_Set ? value.tglAct : value.tglDis}
                    </h2>
                    <button
                      type="button"
                      className={`py-1 px-1 flex rounded-full w-16 transition-all duration-500 ${
                        value.Toggle_Set
                          ? "bg-[#126F77] justify-end"
                          : "bg-gray-300 justify-start"
                      }`}
                      //   className="bg-primary py-1 px-4 flex justify-start items-center rounded-full"
                      onClick={value.handle}
                    >
                      <div
                        className={`flex items-center transition-all duration-900 ${
                          ison ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                      {value.Toggle_Set ? (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      ) : (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-4 mt-4">
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-[#DFE5EF] px-2">
                    <img
                      src={value.Delete}
                      alt="Delete_Icon"
                      className="filter brightness-50 invert-50"
                    />
                    <span className="font-bold text-[#6B7280]">
                      {value.Card_del}
                    </span>
                  </button>
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-primary text-white ">
                    <img
                      src={value.Edit}
                      alt="Edit_Icon"
                      className="w-5 h-5 filter brigtness-50 invert-100"
                    />
                    <span className="font-bold text-[#FFFFFF]">
                      {value.Card_edit}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*----------------------------------------------------------------------------------------------------------New card Any Yellow valu-------------------------------------------------- */}
      <div className="flex flex-col justify-center gap-4 p-4">
        <div className="flex flex-row items-center gap-4 ">
          <div
            className="p-3 rounded-sm"
            style={{ backgroundColor: "#FFF9E6" }}
          >
            <img src={Yellow_Icon} alt="Green_Icon" className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-[#1E293B] font-semibold text-base">
              Support Add-on
            </h1>
            <p className="text-[#6B7280] font-medium text-sm">
              2 add-oms Available
            </p>
          </div>
        </div>
        {/* <h1>jsdfjsdj</h1> */}
        <div className="grid grid-cols-3 gap-5">
          {Addons_Support_Data.map((value, index) => {
            return (
              <div
                className="border border-[#126F771A] rounded-lg p-4"
                key={index}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div>
                    <h1 className="font-semibold text-base">
                      {value.Card_Head}
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <button className="">
                      <img
                        src={value.Edit}
                        alt="Edit_Button"
                        className="w-6 h-6"
                      />
                    </button>
                    <button className="">
                      <img
                        src={value.Delete}
                        alt="Delete_Button"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-[#6B7280] mt-2">{value.Card_title}</p>
                <div
                  className="p-4 mt-8 rounded-sm flex flex-row justify-between gap-4"
                  style={{
                    background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                  }}
                >
                  <div className="">
                    <h1 className="font-semibold text-lg">{value.Rs}</h1>
                    <p className="text-[#6B7280]">{value.Month}</p>
                  </div>
                  <div className="flex justify-start mt-4 gap-4 items-center">
                    <h2 className="text-lg font-bold">
                      {value.Toggle_Set ? value.tglAct : value.tglDis}
                    </h2>
                    <button
                      type="button"
                      className={`py-1 px-1 flex rounded-full w-16 transition-all duration-500 ${
                        value.Toggle_Set
                          ? "bg-[#126F77] justify-end"
                          : "bg-gray-300 justify-start"
                      }`}
                      //   className="bg-primary py-1 px-4 flex justify-start items-center rounded-full"
                      onClick={value.handle}
                    >
                      <div
                        className={`flex items-center transition-all duration-900 ${
                          ison ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                      {value.Toggle_Set ? (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      ) : (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-4 mt-4">
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-[#DFE5EF] px-2">
                    <img
                      src={value.Delete}
                      alt="Delete_Icon"
                      className="filter brightness-50 invert-50"
                    />
                    <span className="font-bold text-[#6B7280]">
                      {value.Card_del}
                    </span>
                  </button>
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-primary text-white ">
                    <img
                      src={value.Edit}
                      alt="Edit_Icon"
                      className="w-5 h-5 filter brigtness-50 invert-100"
                    />
                    <span className="font-bold text-[#FFFFFF]">
                      {value.Card_edit}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*---------------------------------------------------------------------Blue card-------------------------------------------------- */}
      <div className="flex flex-col justify-center gap-4 p-4">
        <div className="flex flex-row items-center gap-4 ">
          <div
            className="p-3 rounded-sm"
            style={{ backgroundColor: "#E6F3FF" }}
          >
            <img src={Blue_Icon} alt="Blue_Icon" className="w-6 h-6" />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-[#1E293B] font-semibold text-base">
              Users Add-Ons
            </h1>
            <p className="text-[#6B7280] font-medium text-sm">
              2 add-oms Available
            </p>
          </div>
        </div>
        {/* <h1>jsdfjsdj</h1> */}
        <div className="grid grid-cols-3 gap-5">
          {Addons_Users_Data.map((value, index) => {
            return (
              <div
                className="border border-[#126F771A] rounded-lg p-4"
                key={index}
              >
                <div className="flex flex-row justify-between gap-4 ">
                  <div>
                    <h1 className="font-semibold text-base">
                      {value.Card_Head}
                    </h1>
                  </div>
                  <div className="flex gap-4">
                    <button className="">
                      <img
                        src={value.Edit}
                        alt="Edit_Button"
                        className="w-6 h-6"
                      />
                    </button>
                    <button className="">
                      <img
                        src={value.Delete}
                        alt="Delete_Button"
                        className="w-6 h-6"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-[#6B7280] mt-2">{value.Card_title}</p>
                <div
                  className="p-4 mt-8 rounded-sm flex flex-row justify-between gap-4"
                  style={{
                    background: `linear-gradient(to right,${value.gradientFrom},${value.gradientTo})`,
                  }}
                >
                  <div className="">
                    <h1 className="font-semibold text-lg">{value.Rs}</h1>
                    <p className="text-[#6B7280]">{value.Month}</p>
                  </div>
                  <div className="flex justify-start mt-4 gap-4 items-center">
                    <h2 className="text-lg font-bold">
                      {value.Toggle_Set ? value.tglAct : value.tglDis}
                    </h2>
                    <button
                      type="button"
                      className={`py-1 px-1 flex rounded-full w-16 transition-all duration-500 ${
                        value.Toggle_Set
                          ? "bg-[#126F77] justify-end"
                          : "bg-gray-300 justify-start"
                      }`}
                      //   className="bg-primary py-1 px-4 flex justify-start items-center rounded-full"
                      onClick={value.handle}
                    >
                      <div
                        className={`flex items-center transition-all duration-900 ${
                          ison ? "translate-x-6" : "translate-x-0"
                        }`}
                      ></div>
                      {value.Toggle_Set ? (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      ) : (
                        <img
                          src={value.tgl_icon}
                          alt="Toggle_Icon"
                          className="w-6 h-6"
                        />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-4 mt-4">
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-[#DFE5EF] px-2">
                    <img
                      src={value.Delete}
                      alt="Delete_Icon"
                      className="filter brightness-50 invert-50"
                    />
                    <span className="font-bold text-[#6B7280]">
                      {value.Card_del}
                    </span>
                  </button>
                  <button className="inline-flex flex-1 flex-row gap-2 justify-center items-center rounded-sm py-2 bg-primary text-white ">
                    <img
                      src={value.Edit}
                      alt="Edit_Icon"
                      className="w-5 h-5 filter brigtness-50 invert-100"
                    />
                    <span className="font-bold text-[#FFFFFF]">
                      {value.Card_edit}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
