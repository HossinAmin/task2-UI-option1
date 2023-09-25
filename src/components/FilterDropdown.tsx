import { useState } from "react";
import { Icon } from "@iconify/react";

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
}

export default function FilterDropdown({ options, onSelect }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[15rem]">
      <div
        className={`flex cursor-pointer items-center justify-between rounded-3xl border px-2
        ${isOpen ? "bg-primary/10" : "bg-white"}`}
        onClick={toggleDropdown}
      >
        <span className="p-2 text-lg text-primary">
          {selectedOption || "Select an option"}
        </span>
        <Icon
          icon="majesticons:chevron-down-line"
          className="text-2xl text-primary "
        />
      </div>
      {isOpen && (
        <ul className="absolute mt-2 w-40 rounded border border-primary bg-white py-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="hover:bg-primary-100 cursor-pointer px-4 py-2"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
