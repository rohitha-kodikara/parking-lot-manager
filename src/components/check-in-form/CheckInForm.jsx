import useParking from "../../components/context/useParkingHook";
const CheckInForm = () => {
  const { vehicleInfo, dispatch, submitParkingDetails, parkingFees } =
    useParking();

  return (
    <div className="rounded-xl border border-[#3b4168] bg-gradient-to-br from-[#1c2038] to-[#171923] p-4">
      <form onSubmit={submitParkingDetails} className="flex flex-col">
        <h2 className="mb-3 flex items-center gap-2 text-[17px] font-semibold">
          <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#5bb6ff] bg-[#124c81] text-[12px]">
            🚙
          </span>
          Check in vehicle
        </h2>
        <label
          className="mb-1 block text-[14px] text-[#dedede]"
          htmlFor="plate"
        >
          Plate number
        </label>
        <input
          id="plate"
          placeholder="ABC-1234"
          value={vehicleInfo.plateNumber}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_PlATE_NUMBER",
              payload: { ...vehicleInfo, plateNumber: e.target.value },
            })
          }
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
          value={vehicleInfo.vehicleType}
          onChange={(e) =>
            dispatch({
              type: "UPDATE_VEHICLE_TYPE",
              payload: { ...vehicleInfo, vehicleType: e.target.value },
            })
          }
          className="h-[34px] w-full rounded-md border border-[#41486f] bg-[#121522] px-2.5 text-[15px] outline-none"
        >
          {parkingFees.map((fee) => (
            <option key={fee.id} value={fee.vehicleType}>
              {fee.vehicleType}
            </option>
          ))}
        </select>
        <div className="mt-2 flex flex-wrap gap-1.5 text-[13px]">
          <span className="rounded-md border border-[#48bea1] bg-[#064739] px-2 py-0.5 text-[#91f3d8]">
            Bike LKR.100.00/h
          </span>
          <span className="rounded-md border border-[#5ca8ff] bg-[#103d70] px-2 py-0.5 text-[#b7dbff]">
            Car LKR.150.00/h
          </span>
          <span className="rounded-md border border-[#eda400] bg-[#603700] px-2 py-0.5 text-[#ffd35c]">
            Truck LKR.200.00/h
          </span>
        </div>
        <button className="cursor-pointer mt-2.5 h-[36px] w-full rounded-md bg-[#1762a5] text-[15px] font-semibold hover:bg-[#2176bc]">
          Park vehicle
        </button>
      </form>
    </div>
  );
};

export default CheckInForm;
