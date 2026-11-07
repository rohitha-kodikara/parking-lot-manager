import React from "react";
import { slots } from "../../data/data";
import Slot from "./Slot";

const SlotsList = () => {
  return (
    <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4">
      {slots.map((slot) => (
        <Slot key={slot.id} slot={slot} />
      ))}
    </div>
  );
};

export default SlotsList;
