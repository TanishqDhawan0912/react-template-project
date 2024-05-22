import React from "react";
export default function header() {
  return (
    <header>
      <div className="text-[12px] font-medium text-center bg-[#2c3942] text-white py-2">
        <div className=" md:text-right md:mr-4 md:py-1 md:text-[15px]">
          CONTACT SUPPORT:{" "}
          <span className="ml-[5px] text-yellow-400">+1800 1234 5678</span>
          <span className="ml-[10px] mr-[10px]">|</span>
          CONTACT US
          <span className="ml-[10px] mr-[10px]">|</span>
          HELP
        </div>
      </div>
    </header>
  );
}
