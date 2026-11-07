const IndicatorList = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <span>
        <i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#8cca3e] bg-[#214b09]" />
        Free
      </span>
      <span>
        <i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#5daeff] bg-[#104579]" />
        Car
      </span>
      <span>
        <i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#36c3a8] bg-[#06483e]" />
        Bike
      </span>
      <span>
        <i className="mr-1 inline-block h-2 w-2 rounded-[2px] border border-[#ed9d06] bg-[#603800]" />
        Truck
      </span>
    </div>
  );
};

export default IndicatorList;
