import useTasks from "./contextAPI/TaskHook";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, theme, filter, toggleTask, deleteTask } = useTasks();

  const visible = tasks.filter((t) => {
    if (filter === "pending") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  if (visible.length === 0) {
    return <p className="text-sm text-slate-500">No tasks here.</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {visible.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          theme={theme}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
export default TaskList;
