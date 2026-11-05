import React, { createContext, useState } from "react";

const TaskContext = createContext();

const INITIAL_TASKS = [
  { id: 1, title: "Design the login screen", done: false },
  { id: 2, title: "Review pull requests", done: false },
  { id: 3, title: "Write the weekly report", done: true },
  { id: 4, title: "Fix the navbar bug", done: false },
  { id: 5, title: "Plan the sprint meeting", done: true },
  { id: 6, title: "Reply to client emails", done: false },
];

const TaskProvider = ({ children }) => {
  const [user] = useState({ name: "Sam Carter", role: "Product designer" });
  const [theme, setTheme] = useState("light");
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [filter, setFilter] = useState("all");

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }
  return (
    <div>
      <TaskContext.Provider
        value={{
          user,
          theme,
          tasks,
          filter,
          setFilter,
          toggleTheme,
          toggleTask,
          deleteTask,
        }}
      >
        {children}
      </TaskContext.Provider>
    </div>
  );
};

export { TaskProvider, TaskContext };
