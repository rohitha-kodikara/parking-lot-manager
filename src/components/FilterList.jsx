import useTasks from "./contextAPI/TaskHook";
import FilterButton from "./FilterButton";
function FilterList() {
  const { tasks, filter } = useTasks();

  const counts = {
    all: tasks.length,
    pending: tasks.filter((t) => !t.done).length,
    done: tasks.filter((t) => t.done).length,
  };

  return (
    <>
      {["all", "pending", "done"].map((name) => (
        <FilterButton
          key={name}
          active={filter === name}
          count={counts[name]}
          name={name}
        />
      ))}
    </>
  );
}
export default FilterList;
