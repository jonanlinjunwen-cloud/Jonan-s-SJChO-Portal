import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { syllabusTopics } from '../data/syllabus';
import { dataBooklet } from '../data/dataBooklet';

interface GlobalTopicSearchProps {
  onSectionChange: (section: string) => void;
}

export function GlobalTopicSearch({ onSectionChange }: GlobalTopicSearchProps) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { setQuery, setMatches, setHasSearched } = useSearch();

  useEffect(() => {
    if (inputValue.length === 0) {
      setQuery('');
      setMatches(new Set());
      setHasSearched(false);
      return;
    }

    setHasSearched(true);
    const lowerQuery = inputValue.toLowerCase();
    const newMatches = new Set<string>();
    let firstMatch: { type: 'syllabus' | 'databooklet'; id: string } | null = null;

    // Search in Syllabus
    syllabusTopics.forEach(topic => {
      if (topic.title.toLowerCase().includes(lowerQuery)) {
        newMatches.add(`syllabus-${topic.id}`);
        if (!firstMatch) firstMatch = { type: 'syllabus', id: topic.id };
      }

      topic.keyConcepts.forEach((concept, idx) => {
        if (concept.title.toLowerCase().includes(lowerQuery)) {
          newMatches.add(`syllabus-${topic.id}`);
          newMatches.add(`syllabus-${topic.id}-${idx}`);
          if (!firstMatch) firstMatch = { type: 'syllabus', id: topic.id };
        }
      });
    });

    // Search in Data Booklet
    dataBooklet?.sections?.forEach(section => {
      if (section.title.toLowerCase().includes(lowerQuery)) {
        newMatches.add(`databooklet-${section.title}`);
        if (!firstMatch) firstMatch = { type: 'databooklet', id: section.title };
      }

      section.items?.forEach(item => {
        const itemLabel = (item as any).name || (item as any).label || '';
        const itemValue = (item as any).value || (item as any).formula || '';
        if (itemLabel.toLowerCase().includes(lowerQuery) || itemValue.toLowerCase().includes(lowerQuery)) {
          newMatches.add(`databooklet-${section.title}`);
          if (!firstMatch) firstMatch = { type: 'databooklet', id: section.title };
        }
      });
    });

    setMatches(newMatches);
    setQuery(inputValue);

    // Auto-navigate to first match
    if (firstMatch) {
      onSectionChange(firstMatch.type === 'syllabus' ? 'syllabus' : 'databooklet');
      setTimeout(() => {
        const element = document.getElementById(`topic-${firstMatch.id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [inputValue, setQuery, setMatches, setHasSearched, onSectionChange]);

  const handleClear = () => {
    setInputValue('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" size={18} />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search topics (redox, bonding, kinetics…)"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="w-full pl-10 pr-10 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 outline-none rounded-lg text-sm transition-colors focus:bg-slate-50 dark:focus:bg-slate-700 focus:ring-2 focus:ring-blue-400"
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
