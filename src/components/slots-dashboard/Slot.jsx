import React from "react";

const statusStyles = {
  free: "border-[#7ebd36] bg-[#214b09] text-[#a5e759]",
  "occupied-car": "border-[#57a8ff] bg-[#104579] text-[#b9dcff]",
  "occupied-bike": "border-[#35bda5] bg-[#06483e] text-[#80eed6]",
  "occupied-truck": "border-[#ed9a00] bg-[#603800] text-[#ffd35b]",
};

const Slot = ({ slot, parkingDetails }) => {
  const getPlateNumber = parkingDetails.find(
    (detail) => detail.slotId === slot.id,
  )?.plateNumber;

  console.log(parkingDetails);

  return (
    <div
      key={slot.id}
      className={`flex h-[63px] flex-col items-center justify-center rounded-lg border text-center leading-[15px] 
        ${statusStyles[slot.style]}`}
    >
      <span className="text-[14px] font-medium">{slot.id}</span>
      <span className="text-[12px]">{slot.style}</span>
      <span className="text-[12px]">{getPlateNumber || ""}</span>
    </div>
  );
};

export default Slot;
