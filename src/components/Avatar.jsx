import useTasks from "./contextAPI/TaskHook";

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-medium text-white">
      {initials}
    </div>
  );
}
export default Avatar;
