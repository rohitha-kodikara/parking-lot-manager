const ActivityHeader = () => {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-[17px] font-semibold">
        <span className="flex h-[23px] w-[23px] items-center justify-center rounded-full border border-[#ff75a0] bg-[#762b4c] text-[12px]">
          ☷
        </span>
        Activity log
      </h2>
      <button className="rounded-lg border border-[#594957] px-3 py-1.5 text-[14px]">
        ⟳ Reset lot
      </button>
    </div>
  );
};

export default ActivityHeader;
