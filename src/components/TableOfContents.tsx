import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface TOCItem {
  id: string;
  label: string;
  children?: TOCItem[];
}

const TOC_ITEMS: Record<string, TOCItem> = {
  overview: {
    id: 'overview',
    label: '📚 Overview',
    children: [
      { id: 'overview-what', label: 'What is SJChO?' },
      { id: 'overview-format', label: 'Competition Format' },
      { id: 'overview-tips', label: 'Quick Tips' },
    ]
  },
  syllabus: {
    id: 'syllabus',
    label: '📖 Syllabus & Notes',
    children: [
      { id: 'syllabus-atomic', label: 'Atomic Structure' },
      { id: 'syllabus-bonding', label: 'Bonding & Structure' },
      { id: 'syllabus-reactions', label: 'Chemical Reactions' },
      { id: 'syllabus-equilibrium', label: 'Equilibrium' },
    ]
  },
  resources: {
    id: 'resources',
    label: '🔗 Study Resources',
    children: [
      { id: 'resources-videos', label: 'Video Channels' },
      { id: 'resources-textbooks', label: 'Textbooks' },
      { id: 'resources-websites', label: 'Websites' },
    ]
  },
  databooklet: {
    id: 'databooklet',
    label: '📋 Data Booklet',
    children: [
      { id: 'databooklet-constants', label: 'Constants & Units' },
      { id: 'databooklet-table', label: 'Periodic Table' },
    ]
  },
  practice: {
    id: 'practice',
    label: '✏️ Practice Papers',
    children: [
      { id: 'practice-past', label: 'Past Papers' },
      { id: 'practice-solutions', label: 'Solutions' },
    ]
  },
  tips: {
    id: 'tips',
    label: '💡 General Tips',
    children: [
      { id: 'tips-exam', label: 'Exam Strategies' },
      { id: 'tips-studying', label: 'Study Tips' },
    ]
  }
};

interface TableOfContentsProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export function TableOfContents({ activeSection, onNavigate, isOpen = true, onClose }: TableOfContentsProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set([activeSection]));

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setExpandedItems(new Set([sectionId]));
    onClose?.();
  };

  const tocItems = Object.values(TOC_ITEMS);

  return (
    <div className={`${isOpen ? 'block' : 'hidden'} bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4 h-fit sticky top-20`}>
      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span>📑 Contents</span>
      </h3>
      <nav className="space-y-1">
        {tocItems.map(item => (
          <div key={item.id}>
            <button
              onClick={() => {
                handleNavigate(item.id);
                if (item.children) toggleExpanded(item.id);
              }}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center justify-between ${
                activeSection === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span>{item.label}</span>
              {item.children && (
                <ChevronDown
                  size={16}
                  className={`transition-transform ${expandedItems.has(item.id) ? 'rotate-180' : ''}`}
                />
              )}
            </button>

            {item.children && expandedItems.has(item.id) && (
              <div className="pl-2 space-y-1 mt-1">
                {item.children.map(child => (
                  <button
                    key={child.id}
                    onClick={() => handleNavigate(item.id)}
                    className="w-full text-left px-3 py-1.5 rounded text-xs text-slate-600 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
