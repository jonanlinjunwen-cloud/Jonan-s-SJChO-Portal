import { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { syllabusTopics } from '../data/syllabus';
import { TopicSearch } from './TopicSearch';

export function Syllabus() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState<Set<string>>(new Set());
  const [hasSearched, setHasSearched] = useState(false);

  const categories = ['All', ...Array.from(new Set(syllabusTopics.map(t => t.category)))];
  const filteredTopics = filterCategory === 'All' ? syllabusTopics : syllabusTopics.filter(t => t.category === filterCategory);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setHasSearched(query.length > 0);

    if (query.length === 0) {
      setSearchMatches(new Set());
      setExpandedTopic(null);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const matches = new Set<string>();
    let firstMatch: string | null = null;

    syllabusTopics.forEach(topic => {
      // Check topic title
      if (topic.title.toLowerCase().includes(lowerQuery)) {
        matches.add(topic.id);
        if (!firstMatch) firstMatch = topic.id;
      }

      // Check concept titles
      topic.keyConcepts.forEach((concept, idx) => {
        if (concept.title.toLowerCase().includes(lowerQuery)) {
          matches.add(topic.id);
          matches.add(`${topic.id}-${idx}`);
          if (!firstMatch) firstMatch = topic.id;
        }
      });
    });

    setSearchMatches(matches);

    // Auto-expand first match
    if (firstMatch) {
      setExpandedTopic(firstMatch);
      setTimeout(() => {
        const element = document.getElementById(`topic-${firstMatch}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchMatches(new Set());
    setHasSearched(false);
    setExpandedTopic(null);
  };

  // Highlight text function
  const highlightText = (text: string, query: string) => {
    if (!query || searchMatches.size === 0) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === query.toLowerCase()
        ? `<mark style="background-color: #fef08a; font-weight: 600;">${part}</mark>`
        : part
    ).join('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Detailed Syllabus & Study Notes</h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Click on each topic to expand detailed study notes. Each section covers O-Level foundations and extends to A-Level material as needed for SJChO.
        </p>
      </div>

      {/* Search Bar */}
      <TopicSearch onSearch={handleSearch} onClear={handleClearSearch} />

      {/* No Results Message */}
      {hasSearched && searchMatches.size === 0 && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-center">
          <p className="text-amber-900 dark:text-amber-100 font-medium">
            No matching topics found for "{searchQuery}"
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
            Try searching for other terms like "redox", "kinetics", or "equilibrium"
          </p>
        </div>
      )}

      {/* Category Filter */}
      {!hasSearched && (
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-blue-600 dark:bg-blue-700 text-white shadow-md shadow-blue-200'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Topics */}
      <div className="space-y-4">
        {filteredTopics.map(topic => {
          const isMatchedTopic = searchMatches.has(topic.id);
          const shouldShow = !hasSearched || isMatchedTopic;

          if (!shouldShow) return null;

          return (
            <TopicCard
              key={topic.id}
              topic={topic}
              isExpanded={expandedTopic === topic.id}
              expandedConcept={expandedConcept}
              onToggle={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
              onConceptToggle={(id) => setExpandedConcept(expandedConcept === id ? null : id)}
              searchQuery={searchQuery}
              searchMatches={searchMatches}
              highlightText={highlightText}
            />
          );
        })}
      </div>
    </div>
  );
}

function TopicCard({ 
  topic, 
  isExpanded, 
  expandedConcept, 
  onToggle, 
  onConceptToggle,
  searchQuery,
  searchMatches,
  highlightText
}: {
  topic: typeof syllabusTopics[0];
  isExpanded: boolean;
  expandedConcept: string | null;
  onToggle: () => void;
  onConceptToggle: (id: string) => void;
  searchQuery: string;
  searchMatches: Set<string>;
  highlightText: (text: string, query: string) => string;
}) {
  const categoryColors: Record<string, string> = {
    'Physical Chemistry': 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
    'Organic Chemistry': 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300',
    'Inorganic Chemistry': 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
    'Practical Chemistry': 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300',
  };

  const isMatched = searchMatches.has(topic.id);

  return (
    <div 
      id={`topic-${topic.id}`}
      className={`bg-white dark:bg-slate-800 rounded-2xl border shadow-sm overflow-hidden transition-all ${
        isMatched && searchQuery
          ? 'border-yellow-300 dark:border-yellow-600 shadow-lg shadow-yellow-200/50 dark:shadow-yellow-900/30'
          : 'border-slate-200 dark:border-slate-700'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-5 md:p-6 flex items-center gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors text-left"
      >
        <span className="text-2xl shrink-0">{topic.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 
              className="text-lg font-bold text-slate-900 dark:text-white"
              dangerouslySetInnerHTML={{
                __html: highlightText(topic.title, searchQuery)
              }}
            />
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[topic.category] || 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300'}`}>
              {topic.category}
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{topic.description}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{topic.keyConcepts.length} key concepts</p>
        </div>
        {isExpanded ? <ChevronDown size={20} className="text-slate-400 dark:text-slate-500 shrink-0" /> : <ChevronRight size={20} className="text-slate-400 dark:text-slate-500 shrink-0" />}
      </button>

      {isExpanded && (
        <div className="border-t border-slate-100 dark:border-slate-700">
          {topic.keyConcepts.map((concept, ci) => {
            const conceptId = `${topic.id}-${ci}`;
            const isOpen = expandedConcept === conceptId;
            const isConceptMatched = searchMatches.has(conceptId);

            return (
              <div 
                key={ci} 
                className={`border-b border-slate-50 dark:border-slate-700 last:border-b-0 transition-colors ${
                  isConceptMatched && searchQuery ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : ''
                }`}
              >
                <button
                  onClick={() => onConceptToggle(conceptId)}
                  className="w-full px-5 md:px-6 py-4 flex items-center gap-3 hover:bg-blue-50/30 dark:hover:bg-slate-700/50 transition-colors text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
                    {ci + 1}
                  </div>
                  <span 
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 flex-1"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(concept.title, searchQuery)
                    }}
                  />
                  {isOpen ? <ChevronDown size={16} className="text-slate-400 dark:text-slate-500 shrink-0" /> : <ChevronRight size={16} className="text-slate-400 dark:text-slate-500 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 pl-14 md:pl-16">
                    <div className="prose prose-sm dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                      {renderContent(concept.content, searchQuery)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function renderContent(content: string, searchQuery: string = '') {
  const lines = content.split('\n');
  return lines.map((line, i) => {
    // Process bold text
    let processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Highlight search matches
    if (searchQuery) {
      processed = processed.replace(
        new RegExp(`(${searchQuery})`, 'gi'),
        `<mark style="background-color: #fef08a; font-weight: 600;">$1</mark>`
      );
    }
    
    if (line.startsWith('|')) {
      return renderTable(lines, i, searchQuery);
    }
    if (line.trim() === '') {
      return <br key={i} />;
    }
    return <p key={i} className="my-1" dangerouslySetInnerHTML={{ __html: processed }} />;
  });
}

function renderTable(lines: string[], startIndex: number, searchQuery: string = ''): React.ReactNode {
  // Collect consecutive table lines
  const tableLines: string[] = [];
  let i = startIndex;
  while (i < lines.length && lines[i].startsWith('|')) {
    tableLines.push(lines[i]);
    i++;
  }

  const rows = tableLines
    .filter(line => !line.match(/^\|[\s-|]+\|$/)) // skip separator rows
    .map(line => line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim()));

  if (rows.length === 0) return null;

  return (
    <div key={startIndex} className="my-3 overflow-x-auto">
      <table className="w-full text-xs border-collapse border border-slate-200 dark:border-slate-700 rounded-lg">
        <thead>
          <tr className="bg-slate-50 dark:bg-slate-700/50">
            {rows[0].map((cell, ci) => (
              <th key={ci} className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-left font-semibold text-slate-800 dark:text-slate-200">{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 dark:border-slate-700 px-3 py-2 text-slate-600 dark:text-slate-400">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
