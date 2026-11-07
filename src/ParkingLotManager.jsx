import React, { useState } from "react";
import ParkingHeader from "./components/parking-header/ParkingHeader";
import StatList from "./components/statistics/StatList";
import CheckInForm from "./components/check-in-form/CheckInForm";
import Dashboard from "./components/slots-dashboard/Dashboard";
import ActivityLog from "./components/activity-log/ActivityLog";
import { slots as initialSlots } from "./data/data";
import { parkingFees } from "./data/data";

const stats = ["Total slots", "Occupied", "Available", "Revenue today"];

const ParkingLotManager = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    plateNumber: "",
    vehicleType: parkingFees[0].vehicleType,
  });
  const [parkingDetails, setParkingDetails] = useState([]);
  const [slots, setSlots] = useState(initialSlots);

  //Validation function to check if the plate number is valid & if already parked
  function isPlateNumberValid(plateNumber) {
    const plateNumberPattern = /^[A-Z]{3}-\d{4}$/;
    return plateNumberPattern.test(plateNumber);
  }
  function isPlateNumberAlreadyParked(plateNumber) {
    return parkingDetails.some((detail) => detail.plateNumber === plateNumber);
  }

  function validateForm() {
    if (!vehicleInfo.plateNumber || !vehicleInfo.vehicleType) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!isPlateNumberValid(vehicleInfo.plateNumber)) {
      alert("Invalid plate number format. Please use the format: ABC-1234");
      return false;
    }
    if (isPlateNumberAlreadyParked(vehicleInfo.plateNumber)) {
      alert("This vehicle is already parked.");
      return false;
    }
    return true;
  }

  // Function to handle form submission
  function submitParkingDetails(e) {
    e.preventDefault();

    if (!validateForm()) return;
    // alert("Vehicle parked successfully!");
    const availableSlot = slots.find((slot) => slot.style === "free").id;

    const newObject = {
      plateNumber: vehicleInfo.plateNumber,
      vehicleType: vehicleInfo.vehicleType,
      parkingFee: parkingFees.find(
        (fee) => fee.vehicleType === vehicleInfo.vehicleType,
      ).fee,
      slotId: availableSlot,
      checkInTime: new Date().toLocaleString(),
    };
    setParkingDetails((prev) => {
      return [...prev, newObject];
    });
    // Update the slot style to "occupied" for the assigned slot
    setSlots((prev) => {
      return prev.map((slot) =>
        slot.id === availableSlot
          ? {
              ...slot,
              style: `occupied-${vehicleInfo.vehicleType.toLowerCase()}`,
            }
          : slot,
      );
    });

    setVehicleInfo({
      plateNumber: "",
      vehicleType: parkingFees[0].vehicleType,
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10131f] via-[#111111] to-[#17121d] p-3 font-sans text-white sm:p-4">
      <div className="mx-auto max-w-6xl space-y-3">
        <ParkingHeader />
        <StatList stats={stats} />
        <section className="grid gap-2.5 md:grid-cols-[minmax(220px,0.6fr)_minmax(0,1fr)]">
          <CheckInForm
            vehicleInfo={vehicleInfo}
            setVehicleInfo={setVehicleInfo}
            submitParkingDetails={submitParkingDetails}
            parkingFees={parkingFees}
          />
          <Dashboard slots={slots} parkingDetails={parkingDetails} />
        </section>

        <ActivityLog />
      </div>
    </main>
  );
};

export default ParkingLotManager;
