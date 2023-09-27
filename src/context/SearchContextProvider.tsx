import { createContext, useState, ReactNode } from "react";

export const SearchContext = createContext<
  | {
      searchQuery: string;
      setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export default function SearchContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
