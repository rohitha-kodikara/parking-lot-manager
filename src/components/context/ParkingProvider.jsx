import { createContext, useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import { slots as initialSlots } from "../../data/data";
import { parkingFees } from "../../data/data";

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

const initialState = {
  vehicleInfo: {
    plateNumber: "",
    vehicleType: parkingFees[0].vehicleType,
  },
  parkingDetails: [],
  slots: initialSlots,
  totalRevenue: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PARKING_DETAIL":
      return {
        ...state,
        parkingDetails: [...state.parkingDetails, action.payload],
      };
    case "UPDATE_SLOT_STYLE":
      return {
        ...state,
        slots: state.slots.map((slot) =>
          slot.id === action.payload.id
            ? { ...slot, style: action.payload.style }
            : slot,
        ),
      };
    case "SET_VEHICLE_INFO":
      return {
        ...state,
        vehicleInfo: action.payload,
      };
    case "UPDATE_TOTAL_REVENUE":
      return {
        ...state,
        totalRevenue: action.payload,
      };
    case "MAKE_SLOT_FREE":
      return {
        ...state,
        slots: state.slots.map((slot) =>
          slot.id === action.payload.id ? { ...slot, style: "free" } : slot,
        ),
      };
    case "MAKE_STATUS_RELEASED":
      return {
        ...state,
        parkingDetails: state.parkingDetails.map((detail) =>
          detail.slotId === action.payload.slotId
            ? { ...detail, status: "Released" }
            : detail,
        ),
      };
    case "CLEAR_ALL_DATA":
      return {
        ...state,
        parkingDetails: [],
        slots: initialSlots,
        totalRevenue: 0,
      };
    case "UPDATE_PlATE_NUMBER":
      return {
        ...state,
        vehicleInfo: {
          ...state.vehicleInfo,
          plateNumber: action.payload.plateNumber,
        },
      };
    case "UPDATE_VEHICLE_TYPE":
      return {
        ...state,
        vehicleInfo: {
          ...state.vehicleInfo,
          vehicleType: action.payload.vehicleType,
        },
      };
    default:
      return state;
  }
}

const ParkingContext = createContext();

const ParkingProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [state, dispatch] = useReducer(reducer, initialState);

  const selectedSlot = searchParams.get("slot") || "All";

  //Validation function to check if the plate number is valid & if already parked
  function isPlateNumberValid(plateNumber) {
    const plateNumberPattern = /^[A-Z]{3}-\d{4}$/;
    return plateNumberPattern.test(plateNumber);
  }
  function isPlateNumberAlreadyParked(plateNumber) {
    return state.parkingDetails.some(
      (detail) =>
        detail.plateNumber === plateNumber && detail.status === "Parked",
    );
  }

  function validateForm() {
    if (!state.vehicleInfo.plateNumber || !state.vehicleInfo.vehicleType) {
      alert("Please fill in all fields.");
      return false;
    }

    if (!isPlateNumberValid(state.vehicleInfo.plateNumber)) {
      alert("Invalid plate number format. Please use the format: ABC-1234");
      return false;
    }
    if (isPlateNumberAlreadyParked(state.vehicleInfo.plateNumber)) {
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
    const availableSlot = state.slots.find((slot) => slot.style === "free").id;

    const newObject = {
      id: crypto.randomUUID(),
      plateNumber: state.vehicleInfo.plateNumber,
      vehicleType: state.vehicleInfo.vehicleType,
      parkingFee: parkingFees.find(
        (fee) => fee.vehicleType === state.vehicleInfo.vehicleType,
      ).fee,
      slotId: availableSlot,
      checkInTime: new Date().toLocaleString(),
      status: "Parked",
    };
    dispatch({ type: "ADD_PARKING_DETAIL", payload: newObject });

    dispatch({
      type: "UPDATE_SLOT_STYLE",
      payload: {
        id: availableSlot,
        style: `occupied-${state.vehicleInfo.vehicleType.toLowerCase()}`,
      },
    });

    dispatch({
      type: "SET_VEHICLE_INFO",
      payload: {
        plateNumber: "",
        vehicleType: parkingFees[0].vehicleType,
      },
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
  const filteredSlots = state.slots.filter((slot) => {
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
  const totalSlots = state.slots.length;
  const occupiedSlots = state.slots.filter(
    (slot) => slot.style !== "free",
  ).length;
  const availableSlots = totalSlots - occupiedSlots;
  //Release slot function
  function releaseSlot(selectedSlot) {
    const chargingFee = state.parkingDetails.find(
      (detail) => detail.slotId === selectedSlot.slotId,
    )?.parkingFee;

    if (selectedSlot.slotType === "free") {
      return;
    } else {
      // setTotalRevenue((previousRevenue) => previousRevenue + chargingFee);
      dispatch({
        type: "UPDATE_TOTAL_REVENUE",
        payload: state.totalRevenue + chargingFee,
      });
    }

    dispatch({
      type: "MAKE_SLOT_FREE",
      payload: { id: selectedSlot.slotId },
    });

    //status updation
    dispatch({
      type: "MAKE_STATUS_RELEASED",
      payload: { slotId: selectedSlot.slotId },
    });
  }

  const statsData = {
    totalSlots: totalSlots,
    occupiedSlots: occupiedSlots,
    availableSlots: availableSlots,
    totalRevenue: state.totalRevenue,
  };

  const freeSlots = totalSlots - occupiedSlots;

  //clear all data
  function clearAllData() {
    dispatch({
      type: "CLEAR_ALL_DATA",
    });
  }

  return (
    <ParkingContext.Provider
      value={{
        stats,
        statsData,
        state,
        dispatch,
        submitParkingDetails,
        parkingFees,
        selectedSlot,
        updateSearchParams,
        filteredSlots,
        freeSlots,
        clearAllData,
        releaseSlot,
        parkingDetails: state.parkingDetails,
      }}
    >
      {children}
    </ParkingContext.Provider>
  );
};

export { ParkingProvider, ParkingContext };
