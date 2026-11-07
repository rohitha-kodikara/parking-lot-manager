import React from "react";

const SlotHeader = () => {
  return (
    <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
      <h2 className="flex items-center gap-2 text-[17px] font-semibold">
        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#aa91ff] bg-[#463686] text-[12px]">
          ▦
        </span>
        Slots
      </h2>
      <div className="flex gap-1.5 text-[14px]">
        <button className="rounded-lg border border-[#414141] px-3 py-1.5">
          All
        </button>
        <button className="rounded-lg border border-[#414141] px-3 py-1.5">
          Free
        </button>
        <button className="rounded-lg border border-[#414141] px-3 py-1.5">
          Occupied
        </button>
      </div>
    </div>
  );
};

export default SlotHeader;
