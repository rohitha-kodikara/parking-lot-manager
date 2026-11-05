import useTasks from "./contextAPI/TaskHook";
import FilterList from "./FilterList";

function Sidebar() {
  const { user, theme } = useTasks();

  const dark = theme === "dark";
  const firstName = user.name.split(" ")[0];

  return (
    <aside className="flex flex-col gap-2">
      <p
        className={`mb-2 text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}
      >
        Signed in as {firstName}
      </p>
      <FilterList />
    </aside>
  );
}
export default Sidebar;
