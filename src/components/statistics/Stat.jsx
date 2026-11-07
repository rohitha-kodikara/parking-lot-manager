import React from "react";

const Stat = ({ title, bgColor, statValue, prefix }) => {
  return (
    <div className={`h-[68px] rounded-lg border ${bgColor} p-3`}>
      <p className="text-[14px] text-[#c5beff]">{title}</p>
      <p className="text-[23px] font-semibold leading-7">
        {prefix}
        {statValue}
      </p>
    </div>
  );
};

export default Stat;
