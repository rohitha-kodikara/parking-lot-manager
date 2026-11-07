import React, { useContext } from "react";
import { ParkingContext } from "./ParkingProvider";

const useParking = () => {
  const context = useContext(ParkingContext);
  if (!context) {
    throw new Error("useParking must be used within a ParkingProvider");
  }
  return context;
};

export default useParking;
