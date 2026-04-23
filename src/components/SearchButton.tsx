import { Search } from 'lucide-react';

interface SearchButtonProps {
  onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
      title="Press Cmd+K or Ctrl+K to search"
    >
      <Search size={18} />
      <span className="text-sm font-medium">Search</span>
      <kbd className="hidden lg:inline-block ml-auto text-xs bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 px-2 py-1 rounded border border-slate-200 dark:border-slate-600">
        ⌘K
      </kbd>
    </button>
  );
}
