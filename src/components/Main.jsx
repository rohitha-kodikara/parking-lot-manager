import Sidebar from "./Sidebar";
import Content from "./Content";

function Main() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-6 md:grid-cols-[200px_1fr]">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Main;
