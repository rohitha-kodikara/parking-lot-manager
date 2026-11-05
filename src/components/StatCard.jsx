function StatCard({ label, value, theme }) {
  const dark = theme === "dark";

  return (
    <div
      className={`rounded-lg p-3 ${dark ? "bg-slate-800" : "bg-white shadow-sm"}`}
    >
      <p className={`text-xs ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {label}
      </p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
export default StatCard;
