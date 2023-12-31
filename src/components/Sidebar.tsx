import { Icon } from "@iconify/react";

export default function Sidebar() {
  const iconNames = [
    "ci:house-01",
    "ci:users-group",
    "lucide:calendar-check",
    "ci:share-android",
    "ci:file-document",
    "ci:notebook",
    "ci:heart-01",
    "material-symbols:chevron-left-rounded",
  ];

  return (
    <aside className="flex w-[5rem] flex-col items-center justify-between bg-white py-5 shadow-lg">
      <div className="flex flex-col items-center justify-between gap-2">
        <div className="aspect-square w-10 rounded-full bg-[#D9D9D9]" />
        {iconNames.map((icon) => (
          <button key={icon} className="text-button">
            <Icon icon={icon} />
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button className="text-button">
          <Icon icon="mingcute:settings-3-line" />
        </button>
        <span className="avatar">AS</span>
      </div>
    </aside>
  );
}
