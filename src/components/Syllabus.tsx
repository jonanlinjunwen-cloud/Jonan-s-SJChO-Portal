import { useState } from 'react';
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { syllabusTopics } from '../data/syllabus';

export function Syllabus() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedConcept, setExpandedConcept] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(syllabusTopics.map(t => t.category)))];
  const filteredTopics = filterCategory === 'All' ? syllabusTopics : syllabusTopics.filter(t => t.category === filterCategory);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Detailed Syllabus & Study Notes</h2>
        </div>
        <p className="text-slate-500 mt-1">
          Click on each topic to expand detailed study notes. Each section covers O-Level foundations and extends to A-Level material as needed for SJChO.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Topics */}
      <div className="space-y-4">
        {filteredTopics.map(topic => (
          <TopicCard
            key={topic.id}
            topic={topic}
            isExpanded={expandedTopic === topic.id}
            expandedConcept={expandedConcept}
            onToggle={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
            onConceptToggle={(id) => setExpandedConcept(expandedConcept === id ? null : id)}
          />
        ))}
      </div>
    </div>
  );
}

function TopicCard({ topic, isExpanded, expandedConcept, onToggle, onConceptToggle }: {
  topic: typeof syllabusTopics[0];
  isExpanded: boolean;
  expandedConcept: string | null;
  onToggle: () => void;
  onConceptToggle: (id: string) => void;
}) {
  const categoryColors: Record<string, string> = {
    'Physical Chemistry': 'bg-blue-50 text-blue-700',
    'Organic Chemistry': 'bg-emerald-50 text-emerald-700',
    'Inorganic Chemistry': 'bg-purple-50 text-purple-700',
    'Practical Chemistry': 'bg-amber-50 text-amber-700',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-5 md:p-6 flex items-center gap-4 hover:bg-slate-50/50 transition-colors text-left"
      >
        <span className="text-2xl shrink-0">{topic.icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg font-bold text-slate-900">{topic.title}</h3>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[topic.category] || 'bg-slate-50 text-slate-700'}`}>
              {topic.category}
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
          <p className="text-xs text-slate-400 mt-1">{topic.keyConcepts.length} key concepts</p>
        </div>
        {isExpanded ? <ChevronDown size={20} className="text-slate-400 shrink-0" /> : <ChevronRight size={20} className="text-slate-400 shrink-0" />}
      </button>

      {isExpanded && (
        <div className="border-t border-slate-100">
          {topic.keyConcepts.map((concept, ci) => {
            const conceptId = `${topic.id}-${ci}`;
            const isOpen = expandedConcept === conceptId;
            return (
              <div key={ci} className="border-b border-slate-50 last:border-b-0">
                <button
                  onClick={() => onConceptToggle(conceptId)}
                  className="w-full px-5 md:px-6 py-4 flex items-center gap-3 hover:bg-blue-50/30 transition-colors text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                    {ci + 1}
                  </div>
                  <span className="text-sm font-semibold text-slate-800 flex-1">{concept.title}</span>
                  {isOpen ? <ChevronDown size={16} className="text-slate-400 shrink-0" /> : <ChevronRight size={16} className="text-slate-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-5 pl-14 md:pl-16">
                    <div className="prose prose-sm max-w-none text-slate-700 whitespace-pre-line leading-relaxed">
                      {renderContent(concept.content)}
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

function renderContent(content: string) {
  const lines = content.split('\n');
  return lines.map((line, i) => {
    // Process bold text
    const processed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    if (line.startsWith('|')) {
      return renderTable(lines, i);
    }
    if (line.trim() === '') {
      return <br key={i} />;
    }
    return <p key={i} className="my-1" dangerouslySetInnerHTML={{ __html: processed }} />;
  });
}

function renderTable(lines: string[], startIndex: number): React.ReactNode {
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
      <table className="w-full text-xs border-collapse border border-slate-200 rounded-lg">
        <thead>
          <tr className="bg-slate-50">
            {rows[0].map((cell, ci) => (
              <th key={ci} className="border border-slate-200 px-3 py-2 text-left font-semibold text-slate-800">{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 px-3 py-2 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
