import React from "react";

const ParkingHeader = () => {
  return (
    <header className="flex h-[60px] items-center justify-between rounded-xl bg-[#554bbb] px-4">
      <div className="flex items-center gap-2.5">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#eeeeff] text-[#554bbb]">
          <span className="rounded border border-current px-1 text-[13px] font-bold leading-[17px]">
            P
          </span>
        </span>
        <div>
          <h1 className="text-[18px] font-semibold leading-6">
            City Park garage
          </h1>
          <p className="text-[13px] leading-5 text-[#e0dcff]">
            Level A · open 24 hours
          </p>
        </div>
      </div>
      <span className="rounded-full bg-[#effbdc] px-2.5 py-0.5 text-[10px] font-medium text-[#355a12]">
        7 slots free
      </span>
    </header>
  );
};

export default ParkingHeader;
