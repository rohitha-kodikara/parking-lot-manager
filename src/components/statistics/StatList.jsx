import Stat from "./Stat";

const StatList = ({ stats }) => {
  return (
    <section
      className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
      aria-label="Garage summary"
    >
      {stats.map((stat, index) => (
        <Stat
          key={index}
          title={stat}
          value={
            index === 0 ? "12" : index === 1 ? "5" : index === 2 ? "7" : "$38"
          }
        />
      ))}

      {/* <div className="h-[68px] rounded-lg border border-[#e5794f] bg-[#702a13] p-3">
        <p className="text-[14px] text-[#ff9c77]">Occupied</p>
        <p className="text-[23px] font-semibold leading-7">5</p>
      </div>
      <div className="h-[68px] rounded-lg border border-[#8aca3c] bg-[#234d0a] p-3">
        <p className="text-[14px] text-[#a8e65c]">Available</p>
        <p className="text-[23px] font-semibold leading-7">7</p>
      </div>
      <div className="h-[68px] rounded-lg border border-[#f1a000] bg-[#603503] p-3">
        <p className="text-[14px] text-[#ffb52d]">Revenue today</p>
        <p className="text-[23px] font-semibold leading-7">$38</p>
      </div> */}
    </section>
  );
};

export default StatList;
