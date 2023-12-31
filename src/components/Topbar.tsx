import FilterDropdown from "./FilterDropdown";
import ButtonsGroup from "./ButtonsGroup";
import { Icon } from "@iconify/react";

export default function Topbar() {
  return (
    <nav className="flex w-full items-center justify-between py-6">
      <div>
        <h2 className="text-xl">London Internship Program</h2>
        <p className="text-xs">London</p>
      </div>
      <FilterDropdown />
      <div className="flex h-full items-center gap-2">
        <ButtonsGroup />
        <span className="h-[70%] w-0.5 rounded-full bg-divider" />
        <div className="flex items-center ">
          <button className="primary-button h-12 w-[16rem] rounded-xl rounded-r-none border-r-[2px]">
            Move To Video Interview I
          </button>
          <button className="primary-button h-12 rounded-xl rounded-l-none">
            <Icon
              icon="majesticons:chevron-down-line"
              className="text-2xl text-white"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
