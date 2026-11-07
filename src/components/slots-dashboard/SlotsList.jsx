import useParking from "../context/useParkingHook";
import Slot from "./Slot";

const SlotsList = () => {
  const { filteredSlots, state, releaseSlot } = useParking();

  return (
    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
      {filteredSlots.length === 0 ? (
        <div className="col-span-3 text-center text-[14px] text-[#e1e1e1] sm:col-span-4">
          <div className="border border-[#e1e1e1] rounded-2xl w-full h-max py-15 px-4 text-center text-[14px] text-[#e1e1e1]">
            {" "}
            No slots found.
          </div>
        </div>
      ) : (
        filteredSlots.map((slot) => (
          <Slot
            key={slot.id}
            slot={slot}
            // filteredSlots={filteredSlots}
            parkingDetails={state.parkingDetails}
            onReleaseSlot={releaseSlot}
          />
        ))
      )}
    </div>
  );
};

export default SlotsList;
