const Activity = ({ item }) => {
  return (
    <div
      key={item.text}
      className="flex min-h-[40px] items-center justify-between gap-3 border-b border-[#303030] py-2 last:border-b-0 last:pb-0"
    >
      <span className="text-[14px]">{item.text}</span>
      <span
        className={`shrink-0 rounded-md border px-2 py-0.5 text-[13px] ${item.color === "lime" ? "border-[#84c837] bg-[#244b0d] text-[#b2ed70]" : item.color === "teal" ? "border-[#39bea4] bg-[#06473d] text-[#8bf0db]" : "border-[#5baaff] bg-[#104579] text-[#b9dcff]"}`}
      >
        {item.label}
      </span>
    </div>
  );
};

export default Activity;
