import { Search, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface TopicSearchProps {
  onSearch: (query: string) => void;
  onClear: () => void;
}

export function TopicSearch({ onSearch, onClear }: TopicSearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    onClear();
    inputRef.current?.focus();
  };

  return (
    <div className="relative mb-6">
      <div className="relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={20} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search chemistry topics (e.g. redox, kinetics, equilibrium…)"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
            aria-label="Clear search"
          >
            <X size={20} />
          </button>
        )}
      </div>
      {query && (
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          💡 Searching across {query.length} characters
        </p>
      )}
    </div>
  );
}
