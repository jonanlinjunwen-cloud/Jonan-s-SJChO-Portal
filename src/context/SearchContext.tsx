import { createContext, useContext, useState } from 'react';

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  matches: Set<string>;
  setMatches: (matches: Set<string>) => void;
  hasSearched: boolean;
  setHasSearched: (hasSearched: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [matches, setMatches] = useState<Set<string>>(new Set());
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <SearchContext.Provider value={{ query, setQuery, matches, setMatches, hasSearched, setHasSearched }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
}
