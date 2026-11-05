import { useContext } from "react";
import { TaskContext } from "./TaskProvider";

const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
};

export default useTasks;
