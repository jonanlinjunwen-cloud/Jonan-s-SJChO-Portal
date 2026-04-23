import { FileText, Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { dataBooklet } from '../data/dataBooklet';
import { useSearch } from '../context/SearchContext';

export function DataBooklet() {
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const { query, matches, hasSearched } = useSearch();
  const [filteredSections, setFilteredSections] = useState(dataBooklet.sections);

  // Filter sections based on search
  useEffect(() => {
    if (!hasSearched || query.length === 0) {
      setFilteredSections(dataBooklet.sections);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = dataBooklet.sections.filter(section => {
      // Check section title
      if (section.title.toLowerCase().includes(lowerQuery)) return true;

      // Check items
      const hasMatchingItems = section.items?.some((item: any) => {
        const name = item.name || item.symbol || '';
        const value = item.value || item.formula || '';
        return name.toLowerCase().includes(lowerQuery) || value.toLowerCase().includes(lowerQuery);
      });

      // Check formulas
      const hasMatchingFormulas = section.formulas?.some(f =>
        f.name.toLowerCase().includes(lowerQuery) ||
        f.formula.toLowerCase().includes(lowerQuery) ||
        f.note?.toLowerCase().includes(lowerQuery)
      );

      return hasMatchingItems || hasMatchingFormulas;
    });

    setFilteredSections(filtered);
  }, [query, hasSearched]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedFormula(id);
      setTimeout(() => setCopiedFormula(null), 2000);
    }).catch(() => {});
  };

  const highlightText = (text: string, query: string) => {
    if (!query || matches.size === 0) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, idx) =>
      part.toLowerCase() === query.toLowerCase()
        ? `<mark style="background-color: #fef08a; font-weight: 600;">${part}</mark>`
        : part
    ).join('');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Data Booklet & Formulas</h2>
        </div>
        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Essential formulas, constants, and equations for SJChO preparation. 
          While SJChO does not provide a data booklet, knowing these formulas is crucial.
        </p>
      </div>

      {/* No Results Message */}
      {hasSearched && query && filteredSections.length === 0 && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-center">
          <p className="text-amber-900 dark:text-amber-100 font-medium">
            No matching formulas or constants found for "{query}"
          </p>
          <p className="text-sm text-amber-800 dark:text-amber-200 mt-1">
            Try searching for other terms like "gas law", "energy", or "constant"
          </p>
        </div>
      )}

      {/* Fundamental Constants */}
      {filteredSections.length > 0 && (
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-5 md:p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h3 className="text-lg font-bold">Fundamental Constants</h3>
            <p className="text-blue-100 text-sm mt-1">The building blocks of chemical calculations</p>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {dataBooklet.sections[0].items?.map((item, i) => {
              const itemName = item.name || '';
              const matches = !hasSearched || query.length === 0 || 
                itemName.toLowerCase().includes(query.toLowerCase()) ||
                item.value.toLowerCase().includes(query.toLowerCase()) ||
                item.symbol.toLowerCase().includes(query.toLowerCase());

              if (!matches) return null;

              return (
                <div key={i} className={`px-5 md:px-6 py-3 flex items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${
                  matches && query ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : ''
                }`}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300 min-w-[3rem]">{item.symbol}</span>
                    <span 
                      className="text-sm text-slate-600 dark:text-slate-400"
                      dangerouslySetInnerHTML={{ __html: highlightText(itemName, query) }}
                    />
                  </div>
                  <span 
                    className="font-mono text-sm font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-lg"
                    dangerouslySetInnerHTML={{ __html: highlightText(item.value, query) }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Formula Sections */}
      {filteredSections.slice(1).map((section, si) => (
        <div key={si} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className={`p-5 md:p-6 ${
            si === 0 ? 'bg-gradient-to-r from-emerald-600 to-teal-600' :
            si === 1 ? 'bg-gradient-to-r from-orange-500 to-red-500' :
            si === 2 ? 'bg-gradient-to-r from-violet-600 to-purple-600' :
            si === 3 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
            si === 4 ? 'bg-gradient-to-r from-pink-600 to-rose-600' :
            si === 5 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
            si === 6 ? 'bg-gradient-to-r from-slate-700 to-slate-800' :
            'bg-gradient-to-r from-emerald-600 to-green-600'
          } text-white`}>
            <h3 
              className="text-lg font-bold"
              dangerouslySetInnerHTML={{ __html: highlightText(section.title, query) }}
            />
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {section.formulas?.map((formula, fi) => {
              const formulaId = `${si}-${fi}`;
              const matches = !hasSearched || query.length === 0 ||
                formula.name.toLowerCase().includes(query.toLowerCase()) ||
                formula.formula.toLowerCase().includes(query.toLowerCase()) ||
                formula.note?.toLowerCase().includes(query.toLowerCase());

              if (!matches) return null;

              return (
                <div key={fi} className={`px-5 md:px-6 py-4 hover:bg-slate-50/50 dark:hover:bg-slate-700/50 transition-colors ${
                  matches && query ? 'bg-yellow-50/50 dark:bg-yellow-900/10' : ''
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p 
                        className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-1"
                        dangerouslySetInnerHTML={{ __html: highlightText(formula.name, query) }}
                      />
                      <div className="formula-block !text-left !bg-slate-50 dark:!bg-slate-700 !border-slate-200 dark:!border-slate-600">
                        <span 
                          className="font-semibold text-slate-900 dark:text-slate-100"
                          dangerouslySetInnerHTML={{ __html: highlightText(formula.formula, query) }}
                        />
                      </div>
                      {formula.note && (
                        <p 
                          className="text-xs text-slate-500 dark:text-slate-400 mt-1.5"
                          dangerouslySetInnerHTML={{ __html: highlightText(formula.note, query) }}
                        />
                      )}
                    </div>
                    <button
                      onClick={() => copyToClipboard(formula.formula, formulaId)}
                      className="p-2 rounded-lg text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors shrink-0"
                      title="Copy formula"
                    >
                      {copiedFormula === formulaId ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Quick Reference - Periodic Table Trends */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="p-5 md:p-6 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <h3 className="text-lg font-bold">Quick Reference: Key Trends</h3>
          <p className="text-slate-300 text-sm mt-1">Memorise these for rapid MCQ answering</p>
        </div>
        <div className="p-5 md:p-6 grid md:grid-cols-2 gap-4">
          <TrendCard
            title="Across a Period (→)"
            items={[
              "Atomic radius ↓ (increasing Zeff)",
              "Ionisation energy ↑ (generally)",
              "Electronegativity ↑",
              "Metallic character ↓",
            ]}
            color="blue"
          />
          <TrendCard
            title="Down a Group (↓)"
            items={[
              "Atomic radius ↑ (more shells)",
              "Ionisation energy ↓",
              "Electronegativity ↓",
              "Metallic character ↑",
            ]}
            color="indigo"
          />
          <TrendCard
            title="Acid Strength"
            items={[
              "HCl < HBr < HI (hydrogen halides)",
              "HClO < HClO₂ < HClO₃ < HClO₄",
              "Strong: HCl, H₂SO₄, HNO₃",
              "Weak: CH₃COOH, H₂CO₃, H₂SO₃",
            ]}
            color="rose"
          />
          <TrendCard
            title="Key Tests to Remember"
            items={[
              "AgNO₃ → Cl⁻(white), Br⁻(cream), I⁻(yellow)",
              "BaCl₂ + HCl → SO₄²⁻(white ppt)",
              "Acid + carbonate → CO₂ (limewater milky)",
              "Tollens' → aldehyde (silver mirror)",
            ]}
            color="emerald"
          />
        </div>
      </div>
    </div>
  );
}

function TrendCard({ title, items, color }: { title: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800',
    rose: 'bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800',
    emerald: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800',
  };
  return (
    <div className={`rounded-xl border p-4 ${colorMap[color] || 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}>
      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
            <span className="text-slate-400 dark:text-slate-500">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
