import { useState } from 'react';
import { BookOpen, FlaskConical, FileText, BookMarked, Lightbulb, GraduationCap, Menu, X } from 'lucide-react';
import { Overview } from './components/Overview';
import { Syllabus } from './components/Syllabus';
import { Resources } from './components/Resources';
import { DataBooklet } from './components/DataBooklet';
import { PracticePapers } from './components/PracticePapers';
import { Tips } from './components/Tips';

const navItems = [
  { id: 'overview', label: 'Overview', icon: GraduationCap },
  { id: 'syllabus', label: 'Syllabus & Notes', icon: BookOpen },
  { id: 'resources', label: 'Study Resources', icon: BookMarked },
  { id: 'databooklet', label: 'Data Booklet', icon: FileText },
  { id: 'practice', label: 'Practice Papers', icon: FlaskConical },
  { id: 'tips', label: 'General Tips', icon: Lightbulb },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-200">
                🧪
              </div>
              <div>
                <h1 className="text-lg font-bold text-slate-900 leading-tight">SJChO Study Notes</h1>
                <p className="text-xs text-slate-500 hidden sm:block">Singapore Junior Chemistry Olympiad</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-50'
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-slate-500">
          <p>SJChO Study Notes — A comprehensive study resource for the Singapore Junior Chemistry Olympiad</p>
          <p className="mt-1 text-xs text-slate-400">Based on GCE O-Level and A-Level Chemistry syllabi. Not affiliated with SNIC or MOE.</p>
        </div>
      </footer>
    </div>
  );
}
