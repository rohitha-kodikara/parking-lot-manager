import useTasks from "./contextAPI/TaskHook";

function Welcome() {
  const { user, theme, tasks } = useTasks();
  const dark = theme === "dark";
  const left = tasks.filter((t) => !t.done).length;

  return (
    <div>
      <h2 className="text-xl font-semibold">
        Welcome back, {user.name.split(" ")[0]}
      </h2>
      <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
        You have {left} tasks left today.
      </p>
    </div>
  );
}
export default Welcome;
