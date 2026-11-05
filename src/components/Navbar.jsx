import Logo from "./Logo";
import NavActions from "./NavActions";

function Navbar({ theme }) {
  const dark = theme === "dark";

  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-3 ${dark ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white"}`}
    >
      <Logo />
      <NavActions />
    </header>
  );
}
export default Navbar;
