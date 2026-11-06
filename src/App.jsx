import React from "react";

const slots = [
  { id: "A1", plate: "KA-4821", type: "Car", style: "occupied-car" },
  { id: "A2", plate: "Free", style: "free" },
  { id: "A3", plate: "WP-1190", type: "Bike", style: "occupied-bike" },
  { id: "A4", plate: "Free", style: "free" },
  { id: "A5", plate: "NB-7305", type: "Truck", style: "occupied-truck" },
  { id: "A6", plate: "Free", style: "free" },
  { id: "A7", plate: "Free", style: "free" },
  { id: "A8", plate: "CAB-2256", type: "Car", style: "occupied-car" },
  { id: "A9", plate: "Free", style: "free" },
  { id: "A10", plate: "KY-0043", type: "Bike", style: "occupied-bike" },
  { id: "A11", plate: "Free", style: "free" },
  { id: "A12", plate: "Free", style: "free" },
];

const activity = [
  { text: "KY-0043 (bike) checked out from A7", label: "+$3", color: "lime" },
  { text: "KY-0043 (bike) parked in A10", label: "Parked", color: "teal" },
  { text: "CAB-2256 (car) parked in A8", label: "Parked", color: "blue" },
];

const App = () => (
  <main className="min-h-screen bg-gradient-to-br from-[#10131f] via-[#111111] to-[#17121d] p-3 font-sans text-white sm:p-4">
    <div className="mx-auto max-w-5xl space-y-3">
      <header className="flex h-[60px] items-center justify-between rounded-xl bg-[#554bbb] px-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#eeeeff] text-[#554bbb]">
            <span className="rounded border border-current px-1 text-[13px] font-bold leading-[17px]">P</span>
          </span>
          <div>
            <h1 className="text-[18px] font-semibold leading-6">City Park garage</h1>
            <p className="text-[13px] leading-5 text-[#e0dcff]">Level A · open 24 hours</p>
          </div>
        </div>
        <span className="rounded-full bg-[#effbdc] px-2.5 py-0.5 text-[10px] font-medium text-[#355a12]">7 slots free</span>
      </header>

      <section className="grid grid-cols-2 gap-2.5 sm:grid-cols-4" aria-label="Garage summary">
        <div className="h-[68px] rounded-lg border border-[#9188e9] bg-[#3c347f] p-3">
          <p className="text-[14px] text-[#c5beff]">Total slots</p><p className="text-[23px] font-semibold leading-7">12</p>
        </div>
        <div className="h-[68px] rounded-lg border border-[#e5794f] bg-[#702a13] p-3">
          <p className="text-[14px] text-[#ff9c77]">Occupied</p><p className="text-[23px] font-semibold leading-7">5</p>
        </div>
        <div className="h-[68px] rounded-lg border border-[#8aca3c] bg-[#234d0a] p-3">
          <p className="text-[14px] text-[#a8e65c]">Available</p><p className="text-[23px] font-semibold leading-7">7</p>
        </div>
        <div className="h-[68px] rounded-lg border border-[#f1a000] bg-[#603503] p-3">
          <p className="text-[14px] text-[#ffb52d]">Revenue today</p><p className="text-[23px] font-semibold leading-7">$38</p>
        </div>
      </section>

      <section className="grid gap-2.5 md:grid-cols-[minmax(190px,0.52fr)_minmax(0,1fr)]">
        <div className="rounded-xl border border-[#3b4168] bg-gradient-to-br from-[#1c2038] to-[#171923] p-4">
          <h2 className="mb-3 flex items-center gap-2 text-[17px] font-semibold">
            <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#5bb6ff] bg-[#124c81] text-[12px]">🚙</span>
            Check in vehicle
          </h2>
          <label className="mb-1 block text-[14px] text-[#dedede]" htmlFor="plate">Plate number</label>
          <input id="plate" placeholder="ABC-1234" className="mb-2.5 h-[34px] w-full rounded-md border border-[#41486f] bg-[#121522] px-2.5 text-[15px] outline-none placeholder:text-[#777]" />
          <label className="mb-1 block text-[14px] text-[#dedede]" htmlFor="vehicle">Vehicle type</label>
          <select id="vehicle" className="h-[34px] w-full rounded-md border border-[#41486f] bg-[#121522] px-2.5 text-[15px] outline-none">
            <option>Car</option><option>Bike</option><option>Truck</option>
          </select>
          <div className="mt-2 flex flex-wrap gap-1.5 text-[13px]">
            <span className="rounded-md border border-[#48bea1] bg-[#064739] px-2 py-0.5 text-[#91f3d8]">Bike $1/h</span>
            <span className="rounded-md border border-[#5ca8ff] bg-[#103d70] px-2 py-0.5 text-[#b7dbff]">Car $2/h</span>
            <span className="rounded-md border border-[#eda400] bg-[#603700] px-2 py-0.5 text-[#ffd35c]">Truck $4/h</span>
          </div>
          <button className="mt-2.5 h-[36px] w-full rounded-md bg-[#1762a5] text-[15px] font-semibold hover:bg-[#2176bc]">Park vehicle</button>
        </div>

        <div className="rounded-xl border border-[#315656] bg-gradient-to-br from-[#172d2d] to-[#151b1c] p-4">
          <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-[17px] font-semibold">
              <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#aa91ff] bg-[#463686] text-[12px]">▦</span>
              Slots
            </h2>
            <div className="flex gap-1.5 text-[14px]">
              <button className="rounded-lg border border-[#414141] px-3 py-1.5">All</button>
              <button className="rounded-lg border border-[#414141] px-3 py-1.5">Free</button>
              <button className="rounded-lg border border-[#414141] px-3 py-1.5">Occupied</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
            {slots.map((slot) => (
              <div key={slot.id} className={`flex h-[63px] flex-col items-center justify-center rounded-lg border text-center leading-[15px] ${slot.style === "free" ? "border-[#7ebd36] bg-[#214b09] text-[#a5e759]" : slot.style === "occupied-car" ? "border-[#57a8ff] bg-[#104579] text-[#b9dcff]" : slot.style === "occupied-bike" ? "border-[#35bda5] bg-[#06483e] text-[#80eed6]" : "border-[#ed9a00] bg-[#603800] text-[#ffd35b]"}`}>
                <span className="text-[14px] font-medium">{slot.id}</span><span className="text-[14px]">{slot.plate}</span>{slot.type && <span className="text-[13px] opacity-90">{slot.type}</span>}
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[13px] text-[#e1e1e1]">
            <div className="flex flex-wrap gap-2">
              <span><i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#8cca3e] bg-[#214b09]" />Free</span>
              <span><i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#5daeff] bg-[#104579]" />Car</span>
              <span><i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#36c3a8] bg-[#06483e]" />Bike</span>
              <span><i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#ed9d06] bg-[#603800]" />Truck</span>
            </div>
            <span>Click an occupied slot to check out</span>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-[#633d5d] bg-gradient-to-br from-[#2b1d2d] to-[#1d1820] p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-[17px] font-semibold">
            <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#ff75a0] bg-[#762b4c] text-[12px]">☷</span>
            Activity log
          </h2>
          <button className="rounded-lg border border-[#594957] px-3 py-1.5 text-[14px]">⟳ Reset lot</button>
        </div>
        <div>
          {activity.map((item) => (
            <div key={item.text} className="flex min-h-[40px] items-center justify-between gap-3 border-b border-[#303030] py-2 last:border-b-0 last:pb-0">
              <span className="text-[14px]">{item.text}</span>
              <span className={`shrink-0 rounded-md border px-2 py-0.5 text-[13px] ${item.color === "lime" ? "border-[#84c837] bg-[#244b0d] text-[#b2ed70]" : item.color === "teal" ? "border-[#39bea4] bg-[#06473d] text-[#8bf0db]" : "border-[#5baaff] bg-[#104579] text-[#b9dcff]"}`}>{item.label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  </main>
);

export default App;
