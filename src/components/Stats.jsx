import useTasks from "./contextAPI/TaskHook";
import StatCard from "./StatCard";

function Stats() {
  const { tasks, theme } = useTasks();

  const done = tasks.filter((t) => t.done).length;
  const items = [
    { label: "Total", value: tasks.length },
    { label: "Pending", value: tasks.length - done },
    { label: "Done", value: done },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((item) => (
        <StatCard
          key={item.label}
          label={item.label}
          value={item.value}
          theme={theme}
        />
      ))}
    </div>
  );
}

export default Stats;
