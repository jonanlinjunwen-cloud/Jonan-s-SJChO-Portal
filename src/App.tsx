import { useState, useEffect } from 'react';
import { BookOpen, FlaskConical, FileText, BookMarked, Lightbulb, GraduationCap, Menu, X } from 'lucide-react';
import { Overview } from './components/Overview';
import { Syllabus } from './components/Syllabus';
import { Resources } from './components/Resources';
import { DataBooklet } from './components/DataBooklet';
import { PracticePapers } from './components/PracticePapers';
import { Tips } from './components/Tips';
import { TableOfContents } from './components/TableOfContents';
import { DarkModeToggle } from './components/DarkModeToggle';
import { SearchButton } from './components/SearchButton';
import { SearchModal } from './components/SearchModal';
import { useDarkMode } from './context/DarkModeContext';
import { SearchResult } from './data/searchIndex';

const navItems = [
  { id: 'overview', label: 'Overview', icon: GraduationCap },
  { id: 'syllabus', label: 'Syllabus & Notes', icon: BookOpen },
  { id: 'resources', label: 'Study Resources', icon: BookMarked },
  { id: 'databooklet', label: 'Data Booklet', icon: FileText },
  { id: 'practice', label: 'Practice Papers', icon: FlaskConical },
  { id: 'tips', label: 'General Tips', icon: Lightbulb },
];

export default function App() {
  const { isDark } = useDarkMode();
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSearchSelect = (result: SearchResult) => {
    if (result.id.startsWith('syllabus')) {
      setActiveSection('syllabus');
    } else if (result.id.startsWith('databooklet')) {
      setActiveSection('databooklet');
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview': return <Overview />;
      case 'syllabus': return <Syllabus />;
      case 'resources': return <Resources />;
      case 'databooklet': return <DataBooklet />;
      case 'practice': return <PracticePapers />;
      case 'tips': return <Tips />;
      default: return <Overview />;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className="dark:bg-slate-950 dark:text-white transition-colors">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200">
                  🧪
                </div>
                <div>
                  <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">Jonan's SJChO Study Notes</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">Singapore Junior Chemistry Olympiad</p>
                </div>
              </div>

              {/* Desktop Nav + Search */}
              <nav className="hidden lg:flex items-center gap-2">
                <SearchButton onClick={() => setSearchOpen(true)} />
                {navItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon size={16} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Right side: Dark mode toggle + Mobile menu */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSearchOpen(true)}
                  className="sm:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  title="Search"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                <DarkModeToggle />
                <button
                  className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">
              <div className="px-4 py-3 space-y-1">
                {navItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeSection === item.id
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <Icon size={18} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </header>

        {/* Main Content with Sidebar */}
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar - TOC */}
              <aside className="hidden lg:block">
                <TableOfContents
                  activeSection={activeSection}
                  onNavigate={setActiveSection}
                  isOpen={tocOpen}
                />
              </aside>

              {/* Mobile TOC Toggle */}
              <div className="lg:hidden mb-4">
                <button
                  onClick={() => setTocOpen(!tocOpen)}
                  className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  {tocOpen ? '📑 Hide' : '📑 Show'} Contents
                </button>
                {tocOpen && (
                  <div className="mt-3">
                    <TableOfContents
                      activeSection={activeSection}
                      onNavigate={setActiveSection}
                      isOpen={tocOpen}
                      onClose={() => setTocOpen(false)}
                    />
                  </div>
                )}
              </div>

              {/* Main Content */}
              <main className="lg:col-span-3">
                {renderSection()}
              </main>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>SJChO Study Notes — A comprehensive study resource for the Singapore Junior Chemistry Olympiad</p>
            <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">Based on GCE O-Level and A-Level Chemistry syllabi. Not affiliated with SNIC or MOE.</p>
          </div>
        </footer>

        {/* Search Modal */}
        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
          onSelectResult={handleSearchSelect}
        />
      </div>
    </div>
  );
}
