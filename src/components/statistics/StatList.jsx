import Stat from "./Stat";

const StatList = ({ stats, statsData }) => {
  return (
    <section
      className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
      aria-label="Garage summary"
    >
      {stats.map((stat, index) => (
        <Stat
          key={index}
          title={stat.title}
          bgColor={stat.bgColor}
          statValue={
            stat.key === "totalRevenue"
              ? statsData[stat.key].toFixed(2)
              : statsData[stat.key]
          }
          prefix={stat.prefix}
        />
      ))}
    </section>
  );
};

export default StatList;
