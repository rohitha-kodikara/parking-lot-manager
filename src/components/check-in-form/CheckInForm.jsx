import React from "react";

const CheckInForm = () => {
  return (
    <div className="rounded-xl border border-[#3b4168] bg-gradient-to-br from-[#1c2038] to-[#171923] p-4">
      <h2 className="mb-3 flex items-center gap-2 text-[17px] font-semibold">
        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#5bb6ff] bg-[#124c81] text-[12px]">
          🚙
        </span>
        Check in vehicle
      </h2>
      <label className="mb-1 block text-[14px] text-[#dedede]" htmlFor="plate">
        Plate number
      </label>
      <input
        id="plate"
        placeholder="ABC-1234"
        className="mb-2.5 h-[34px] w-full rounded-md border border-[#41486f] bg-[#121522] px-2.5 text-[15px] outline-none placeholder:text-[#777]"
      />
      <label
        className="mb-1 block text-[14px] text-[#dedede]"
        htmlFor="vehicle"
      >
        Vehicle type
      </label>
      <select
        id="vehicle"
        className="h-[34px] w-full rounded-md border border-[#41486f] bg-[#121522] px-2.5 text-[15px] outline-none"
      >
        <option>Car</option>
        <option>Bike</option>
        <option>Truck</option>
      </select>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[13px]">
        <span className="rounded-md border border-[#48bea1] bg-[#064739] px-2 py-0.5 text-[#91f3d8]">
          Bike $1/h
        </span>
        <span className="rounded-md border border-[#5ca8ff] bg-[#103d70] px-2 py-0.5 text-[#b7dbff]">
          Car $2/h
        </span>
        <span className="rounded-md border border-[#eda400] bg-[#603700] px-2 py-0.5 text-[#ffd35c]">
          Truck $4/h
        </span>
      </div>
      <button className="mt-2.5 h-[36px] w-full rounded-md bg-[#1762a5] text-[15px] font-semibold hover:bg-[#2176bc]">
        Park vehicle
      </button>
    </div>
  );
};

export default CheckInForm;
