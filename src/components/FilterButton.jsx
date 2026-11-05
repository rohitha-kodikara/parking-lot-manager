import useTasks from "./contextAPI/TaskHook";

function FilterButton({ name, active, count }) {
  const { setFilter, theme } = useTasks();
  console.log(name);
  const dark = theme === "dark";

  return (
    <button
      onClick={() => setFilter(name)}
      className={`flex items-center justify-between rounded-md px-3 py-2 text-sm capitalize ${
        active
          ? "bg-indigo-500 font-medium text-white"
          : dark
            ? "hover:bg-slate-800"
            : "hover:bg-slate-200"
      }`}
    >
      <span>{name}</span>
      <span>{count}</span>
    </button>
  );
}
export default FilterButton;
