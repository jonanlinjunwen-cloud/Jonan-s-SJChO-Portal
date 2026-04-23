import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { buildSearchIndex, searchTopics, SearchResult } from '../data/searchIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (result: SearchResult) => void;
}

export function SearchModal({ isOpen, onClose, onSelectResult }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchIndex] = useState(() => buildSearchIndex());

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const newResults = searchTopics(query, searchIndex);
      setResults(newResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query, searchIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results.length > 0) {
      e.preventDefault();
      onSelectResult(results[selectedIndex]);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 dark:bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
        <div className="w-full max-w-2xl mx-4">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="relative border-b border-slate-200 dark:border-slate-700 p-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search topics, concepts, formulas..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-10 pr-10 py-3 bg-transparent text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none text-lg"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Results */}
            <div className="max-h-96 overflow-y-auto">
              {results.length > 0 ? (
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {results.map((result, idx) => (
                    <button
                      key={result.id}
                      onClick={() => {
                        onSelectResult(result);
                        onClose();
                      }}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        idx === selectedIndex
                          ? 'bg-blue-50 dark:bg-blue-900/30'
                          : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0 mt-0.5">{result.icon || '📄'}</span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-slate-900 dark:text-white text-sm">
                            {result.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                            {result.content}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded">
                              {result.section}
                            </span>
                            {result.category && (
                              <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                                {result.category}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : query ? (
                <div className="p-8 text-center">
                  <p className="text-slate-500 dark:text-slate-400">No topics found matching "{query}"</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Try searching for concepts, formulas, or reactions</p>
                </div>
              ) : (
                <div className="p-8 text-center">
                  <p className="text-slate-500 dark:text-slate-400">Start typing to search...</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-4 py-2 text-xs text-slate-500 dark:text-slate-400 flex justify-between">
              <span>Press <kbd className="px-1 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">↵</kbd> to select</span>
              <span>Press <kbd className="px-1 py-0.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded">Esc</kbd> to close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
