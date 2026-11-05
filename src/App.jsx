import Layout from "./components/Layout";
import { TaskProvider } from "./components/contextAPI/TaskProvider";

export default function App() {
  return (
    <TaskProvider>
      <Layout />
    </TaskProvider>
  );
}
