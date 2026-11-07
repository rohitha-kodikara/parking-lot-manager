import ParkingHeader from "./parking-header/ParkingHeader";
import StatList from "./statistics/StatList";
import CheckInForm from "./check-in-form/CheckInForm";
import Dashboard from "./slots-dashboard/Dashboard";
import ActivityLog from "./activity-log/ActivityLog";

const ParkingLotManager = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#10131f] via-[#111111] to-[#17121d] p-3 font-sans text-white sm:p-4">
      <div className="mx-auto max-w-6xl space-y-3">
        <ParkingHeader
        // freeSlots={freeSlots}
        />
        <StatList
        // stats={stats}
        // statsData={statsData}
        />
        <section className="grid gap-2.5 md:grid-cols-[minmax(220px,0.6fr)_minmax(0,1fr)]">
          <CheckInForm
          // vehicleInfo={state.vehicleInfo}
          // dispatch={dispatch}
          // submitParkingDetails={submitParkingDetails}
          // parkingFees={parkingFees}
          />
          <Dashboard
          // slots={state.slots}
          // filteredSlots={filteredSlots}
          // parkingDetails={state.parkingDetails}
          // selectedSlot={selectedSlot}
          // updateSearchParams={updateSearchParams}
          // releaseSlot={releaseSlot}
          />
        </section>

        <ActivityLog
        // parkingDetails={state.parkingDetails}
        // clearAllData={clearAllData}
        />
      </div>
    </main>
  );
};

export default ParkingLotManager;
