import useTasks from "./contextAPI/TaskHook";

function ThemeToggle() {
  const { theme, toggleTheme } = useTasks();

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border border-slate-400 px-3 py-1 text-sm hover:bg-slate-500/10"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
export default ThemeToggle;
