import { Icon } from "@iconify/react";
export default function FiltersMenu() {
  const filters = [
    "Personal Information",
    "Education",
    "Work Experience",
    "Activity Filter",
    "Advanced Filter",
  ];
  return (
    <div className="flex w-full flex-col rounded-lg bg-white ">
      <div className="flex w-full justify-between p-5">
        <h3 className="font-semibold">Filters</h3>
        <p>selected 0</p>
      </div>
      <div className="h-[1px] w-full bg-[#EEEEEE]" />

      {filters.map((filter) => (
        <>
          <div className="flex items-center justify-between rounded-lg bg-white p-5">
            <div className="flex items-center gap-1">
              <Icon icon="ci:file-document" />
              <span>{filter}</span>
            </div>
            <Icon icon="majesticons:chevron-down-line" />
          </div>
          <div className="h-[1px] w-full bg-[#EEEEEE]" />
        </>
      ))}
    </div>
  );
}
