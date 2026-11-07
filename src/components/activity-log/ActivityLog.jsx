import Activity from "./Activity";
import { activity } from "../../data/data";

import ActivityHeader from "./ActivityHeader";

const ActivityLog = ({ parkingDetails }) => {
  return (
    <section className="rounded-xl border border-[#633d5d] bg-gradient-to-br from-[#2b1d2d] to-[#1d1820] p-4">
      <ActivityHeader />
      <div>
        {activity.map((item, index) => (
          <Activity key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ActivityLog;
