import { SearchContext } from "../context/SearchContextProvider";
import { useContext } from "react";

function useSearchContext() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }
  return context;
}

export default function useSearchQuery() {
  const { searchQuery, setSearchQuery } = useSearchContext();
  return { searchQuery, setSearchQuery };
}
