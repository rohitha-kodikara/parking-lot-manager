import React, { useState } from "react";
import ParkingHeader from "./parking-header/ParkingHeader";
import StatList from "./statistics/StatList";
import CheckInForm from "./check-in-form/CheckInForm";
import Dashboard from "./slots-dashboard/Dashboard";
import ActivityLog from "./activity-log/ActivityLog";
import { slots as initialSlots } from "../data/data";
import { parkingFees } from "../data/data";
import { useSearchParams } from "react-router-dom";

const stats = [
  {
    key: "totalSlots",
    title: "total Slots",
    bgColor: "border-[#e5794f] bg-[#702a13]",
    prefix: "",
  },
  {
    key: "occupiedSlots",
    title: "Occupied",
    bgColor: "border-[#8aca3c] bg-[#234d0a]",
    prefix: "",
  },
  {
    key: "availableSlots",
    title: "Available",
    bgColor: "border-[#f1a000] bg-[#603503]",
    prefix: "",
  },
  {
    key: "totalRevenue",
    title: "Revenue Today",
    bgColor: "border-[#9188e9] bg-[#3c347f]",
    prefix: "LKR.",
  },
];

const ParkingLotManager = () => {
  const [vehicleInfo, setVehicleInfo] = useState({
    plateNumber: "",
    vehicleType: parkingFees[0].vehicleType,
  });
  const [parkingDetails, setParkingDetails] = useState([]);
  const [slots, setSlots] = useState(initialSlots);
  const [totalRevenue, setTotalRevenue] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  const selectedSlot = searchParams.get("slot") || "All";

  //Validation function to check if the plate number is valid & if already parked
  function isPlateNumberValid(plateNumber) {
    const plateNumberPattern = /^[A-Z]{3}-\d{4}$/;
    return plateNumberPattern.test(plateNumber);
  }
  function isPlateNumberAlreadyParked(plateNumber) {
    return parkingDetails.some(
      (detail) =>
        detail.plateNumber === plateNumber && detail.status === "Parked",
    );
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
      id: crypto.randomUUID(),
      plateNumber: vehicleInfo.plateNumber,
      vehicleType: vehicleInfo.vehicleType,
      parkingFee: parkingFees.find(
        (fee) => fee.vehicleType === vehicleInfo.vehicleType,
      ).fee,
      slotId: availableSlot,
      checkInTime: new Date().toLocaleString(),
      status: "Parked",
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

  //filtering the parkingDetails
  function updateSearchParams(value, key) {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value === "" || value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    setSearchParams(newSearchParams);
  }
  const filteredSlots = slots.filter((slot) => {
    if (selectedSlot === "All") {
      return true; // Show all slots
    } else if (selectedSlot === "Free") {
      return slot.style === "free"; // Show only free slots
    } else if (selectedSlot === "Occupied") {
      return slot.style !== "free"; // Show only occupied slots
    }
    return true; // Default case (show all slots)
  });

  //stats data
  const totalSlots = slots.length;
  const occupiedSlots = slots.filter((slot) => slot.style !== "free").length;
  const availableSlots = totalSlots - occupiedSlots;
  //Release slot function
  function releaseSlot(selectedSlot) {
    const chargingFee = parkingDetails.find(
      (detail) => detail.slotId === selectedSlot.slotId,
    )?.parkingFee;

    if (selectedSlot.slotType === "free") {
      return;
    } else {
      setTotalRevenue((previousRevenue) => previousRevenue + chargingFee);
    }

    setSlots((prev) => {
      return prev.map((slot) =>
        slot.id === selectedSlot.slotId ? { ...slot, style: "free" } : slot,
      );
    });
    //status updation
    setParkingDetails((prev) =>
      prev.map((detail) =>
        detail.slotId === selectedSlot.slotId
          ? { ...detail, status: "Released" }
          : detail,
      ),
    );
  }

  const statsData = {
    totalSlots,
    occupiedSlots,
    availableSlots,
    totalRevenue,
  };

  //clear all data
  function clearAllData() {
    setSlots(initialSlots);
    setParkingDetails([]);
    setTotalRevenue(0);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10131f] via-[#111111] to-[#17121d] p-3 font-sans text-white sm:p-4">
      <div className="mx-auto max-w-6xl space-y-3">
        <ParkingHeader />
        <StatList stats={stats} statsData={statsData} />
        <section className="grid gap-2.5 md:grid-cols-[minmax(220px,0.6fr)_minmax(0,1fr)]">
          <CheckInForm
            vehicleInfo={vehicleInfo}
            setVehicleInfo={setVehicleInfo}
            submitParkingDetails={submitParkingDetails}
            parkingFees={parkingFees}
          />
          <Dashboard
            slots={slots}
            filteredSlots={filteredSlots}
            parkingDetails={parkingDetails}
            selectedSlot={selectedSlot}
            updateSearchParams={updateSearchParams}
            releaseSlot={releaseSlot}
          />
        </section>

        <ActivityLog
          parkingDetails={parkingDetails}
          clearAllData={clearAllData}
        />
      </div>
    </main>
  );
};

export default ParkingLotManager;
