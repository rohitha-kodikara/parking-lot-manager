import Welcome from "./Welcome";
import Stats from "./Stats";
import TaskList from "./TaskList";

function Content() {
  return (
    <main className="flex flex-col gap-5">
      <Welcome />
      <Stats />
      <TaskList />
    </main>
  );
}
export default Content;
