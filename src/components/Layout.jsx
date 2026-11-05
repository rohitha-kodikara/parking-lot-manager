import Navbar from "./Navbar";
import Main from "./Main";
import useTasks from "./contextAPI/TaskHook";

function Layout() {
  const { theme } = useTasks();

  const dark = theme === "dark";
  //   const pendingCount = tasks.filter((t) => !t.done).length;

  return (
    <div
      className={`min-h-screen ${dark ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-800"}`}
    >
      <Navbar theme={theme} />
      <Main />
    </div>
  );
}
export default Layout;
