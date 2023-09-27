import { Icon } from "@iconify/react";
import useSearchQuery from "../hooks/useSearchQuery";

export default function Searchbar() {
  const { setSearchQuery } = useSearchQuery();
  return (
    <div className="relative flex w-[22rem] items-center">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Icon
          icon="ci:search-magnifying-glass"
          className="text-lg text-gray-400"
        />
      </span>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        className="w-full rounded-lg px-10 py-4 focus:border-blue-300 focus:outline-none focus:ring"
        placeholder={"Serach by name, edu, exp or #tag"}
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Icon icon="ci:circle-warning" className="text-lg text-gray-400" />
      </span>
    </div>
  );
}
