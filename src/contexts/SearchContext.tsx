import React, { createContext, useContext, useState } from "react";

interface ISearch {
  currentSearch: string,
  setCurrentSearch: any
}

export const SearchContext = createContext({} as ISearch);

type SearchType = {
  children: React.ReactNode;
};

export function SearchProvider({ children }: SearchType) {
  const [currentSearch, setCurrentSearch] = useState("");

  const value = {
    currentSearch,
    setCurrentSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export const useSearch = () => {
    const value = useContext(SearchContext)
    return value
}