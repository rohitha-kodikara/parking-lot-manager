const Activity = ({ item }) => {
  return (
    <>
      {item.status === "Parked" ? (
        <div
          key={item.id}
          className="grid min-h-[40px] grid-cols-[minmax(0,1fr)_12rem_auto] items-center gap-3 border-b border-[#303030] py-2 last:border-b-0 last:pb-0"
        >
          <span className="text-[14px]">{`${item.plateNumber} (${item.vehicleType}) parked in ${item.slotId}`}</span>
          <span className="whitespace-nowrap text-left text-[13px] tabular-nums">
            {item.checkInTime}
          </span>
          <span
            className={`shrink-0 rounded-md border px-2 py-0.5 text-[13px] ${item.color === "lime" ? "border-[#84c837] bg-[#244b0d] text-[#b2ed70]" : item.color === "teal" ? "border-[#39bea4] bg-[#06473d] text-[#8bf0db]" : "border-[#5baaff] bg-[#104579] text-[#b9dcff]"}`}
          >
            {item.status === "Parked" ? "Parked" : ""}
          </span>
        </div>
      ) : (
        <div
          key={item.id}
          className="grid min-h-[40px] grid-cols-[minmax(0,1fr)_12rem_auto] items-center gap-3 border-b border-[#303030] py-2 last:border-b-0 last:pb-0"
        >
          <span className="text-[14px]">{`${item.plateNumber} (${item.vehicleType}) checked out from ${item.slotId}`}</span>
          <span className="whitespace-nowrap text-left text-[13px] tabular-nums">
            {item.checkInTime}
          </span>
          <span
            className={`shrink-0 rounded-md border px-2 py-0.5 text-[13px] ${item.color === "lime" ? "border-[#84c837] bg-[#244b0d] text-[#b2ed70]" : item.color === "teal" ? "border-[#39bea4] bg-[#06473d] text-[#8bf0db]" : "border-[#5baaff] bg-[#104579] text-[#b9dcff]"}`}
          >
            {item.status === "Released" ? item.parkingFee.toFixed(2) : ""}
          </span>
        </div>
      )}
    </>
  );
};

export default Activity;
