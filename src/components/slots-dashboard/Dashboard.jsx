import SlotHeader from "./SlotHeader";
import SlotsList from "./SlotsList";
import IndicatorList from "./IndicatorList";
const Dashboard = ({
  slots,
  filteredSlots,
  parkingDetails,
  updateSearchParams,
  releaseSlot,
}) => {
  return (
    <div className="rounded-xl border border-[#315656] bg-gradient-to-br from-[#172d2d] to-[#151b1c] p-4">
      <SlotHeader slots={slots} updateSearchParams={updateSearchParams} />
      <SlotsList
        filteredSlots={filteredSlots}
        parkingDetails={parkingDetails}
        releaseSlot={releaseSlot}
      />
      <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[13px] text-[#e1e1e1]">
        <IndicatorList />
        <span>Click an occupied slot to check out</span>
      </div>
    </div>
  );
};

export default Dashboard;
