import Avatar from "./Avatar";
import useTasks from "./contextAPI/TaskHook";

function UserMenu() {
  const { user, theme } = useTasks();
  const dark = theme === "dark";

  return (
    <div className="flex items-center gap-2">
      <Avatar name={user.name} />
      <div className="leading-tight">
        <p className="text-sm font-medium">{user.name}</p>
        <p className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
          {user.role}
        </p>
      </div>
    </div>
  );
}
export default UserMenu;
