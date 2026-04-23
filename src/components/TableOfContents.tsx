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
  },
  syllabus: {
    id: 'syllabus',
    label: '📖 Syllabus & Notes',
  },
  resources: {
    id: 'resources',
    label: '🔗 Study Resources',
  },
  databooklet: {
    id: 'databooklet',
    label: '📋 Data Booklet',
  },
  practice: {
    id: 'practice',
    label: '✏️ Practice Papers',
  },
  tips: {
    id: 'tips',
    label: '💡 General Tips',
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
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-4 h-fit">
      <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
        <span>📑 Contents</span>
      </h3>
      <nav className="space-y-1">
        {tocItems.map(item => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeSection === item.id
                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
