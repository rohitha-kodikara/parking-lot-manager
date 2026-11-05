import useTasks from "./contextAPI/TaskHook";

function NotificationBadge() {
  const { tasks } = useTasks();

  const count = tasks.filter((t) => !t.done).length;

  return (
    <div className="relative text-xl">
      🔔
      <span className="absolute -right-3 -top-2 rounded-full bg-red-500 px-1.5 text-xs font-medium text-white">
        {count}
      </span>
    </div>
  );
}

export default NotificationBadge;
