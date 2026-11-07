import ParkingHeader from "./components/parking-header/ParkingHeader";
import StatList from "./components/statistics/StatList";
import CheckInForm from "./components/check-in-form/CheckInForm";
import Dashboard from "./components/slots-dashboard/Dashboard";
import ActivityLog from "./components/activity-log/ActivityLog";

const stats = ["Total slots", "Occupied", "Available", "Revenue today"];

const App = () => (
  <main className="min-h-screen bg-gradient-to-br from-[#10131f] via-[#111111] to-[#17121d] p-3 font-sans text-white sm:p-4">
    <div className="mx-auto max-w-5xl space-y-3">
      <ParkingHeader />
      <StatList stats={stats} />
      <section className="grid gap-2.5 md:grid-cols-[minmax(190px,0.52fr)_minmax(0,1fr)]">
        <CheckInForm />
        <Dashboard />
      </section>

      <ActivityLog />
    </div>
  </main>
);

export default App;
