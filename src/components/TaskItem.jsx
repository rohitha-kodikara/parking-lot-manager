function TaskItem({ task, theme, onToggleTask, onDeleteTask }) {
  const dark = theme === "dark";

  return (
    <li
      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${dark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white"}`}
    >
      <label className="flex cursor-pointer items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleTask(task.id)}
          className="h-4 w-4 accent-indigo-500"
        />
        <span className={task.done ? "text-slate-400 line-through" : ""}>
          {task.title}
        </span>
      </label>
      <button
        onClick={() => onDeleteTask(task.id)}
        className="text-sm text-red-500 hover:underline"
      >
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
