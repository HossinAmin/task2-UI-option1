import { useState } from "react";
import { Icon } from "@iconify/react";

const options = [
  "Applied",
  "Shortlisted",
  "Technical Interview",
  "Opportunity Browsing",
  "Video Interview I",
  "Video Interview II",
  "Video Interview III",
  "Offer",
  "Withdrawn",
];

export default function FilterDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[18rem]">
      <div
        className={`mb-1 flex cursor-pointer select-none items-center justify-between rounded-3xl border bg-white px-3 py-2
        ${isOpen ? "rounded-b-none " : ""}`}
        onClick={toggleDropdown}
      >
        <span className="text-primary">
          {selectedOption || "Select an option"}
        </span>
        <Icon
          icon="majesticons:chevron-down-line"
          className="text-2xl text-primary"
        />
      </div>
      {isOpen && (
        <ul className="absolute w-full select-none rounded-lg rounded-t-none bg-white  shadow-lg ">
          {options.map((option, index) => (
            <li
              key={index}
              className={`flex w-full cursor-pointer items-center justify-between px-3 py-5 last:border-none odd:border-b-2 even:border-b-2  hover:bg-primary/10 active:bg-primary/5
              ${option == selectedOption ? "bg-primary/10" : ""}`}
              onClick={() => handleOptionSelect(option)}
            >
              <span>{option}</span>
              <span className="flex items-center justify-center rounded-full bg-[#F8F8F8] px-4 py-1 text-center text-sm text-[#444444]">
                {Math.ceil(Math.random() * 100)}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
