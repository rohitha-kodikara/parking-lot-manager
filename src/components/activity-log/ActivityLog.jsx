import Activity from "./Activity";
import { activity } from "../../data/data";

import ActivityHeader from "./ActivityHeader";

const ActivityLog = ({ parkingDetails, clearAllData }) => {
  return (
    <section className="rounded-xl border border-[#633d5d] bg-gradient-to-br from-[#2b1d2d] to-[#1d1820] p-4">
      <ActivityHeader clearAllData={clearAllData} />
      <div>
        {parkingDetails.length > 0 ? (
          parkingDetails.map((item) => <Activity key={item.id} item={item} />)
        ) : (
          <p className="text-center text-gray-400">No activity yet.</p>
        )}
      </div>
    </section>
  );
};

export default ActivityLog;
