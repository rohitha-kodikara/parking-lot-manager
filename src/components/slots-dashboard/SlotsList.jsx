import React from "react";

import Slot from "./Slot";

const SlotsList = ({ slots, parkingDetails }) => {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
      {slots.map((slot) => (
        <Slot key={slot.id} slot={slot} parkingDetails={parkingDetails} />
      ))}
    </div>
  );
};

export default SlotsList;
