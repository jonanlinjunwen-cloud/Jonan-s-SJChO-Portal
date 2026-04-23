import { FileText, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { dataBooklet } from '../data/dataBooklet';

export function DataBooklet() {
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedFormula(id);
      setTimeout(() => setCopiedFormula(null), 2000);
    }).catch(() => {});
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <FileText className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Data Booklet & Formulas</h2>
        </div>
        <p className="text-slate-500 mt-1">
          Essential formulas, constants, and equations for SJChO preparation. 
          While SJChO does not provide a data booklet, knowing these formulas is crucial.
        </p>
      </div>

      {/* Fundamental Constants */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 md:p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h3 className="text-lg font-bold">Fundamental Constants</h3>
          <p className="text-blue-100 text-sm mt-1">The building blocks of chemical calculations</p>
        </div>
        <div className="divide-y divide-slate-100">
          {dataBooklet.sections[0].items?.map((item, i) => (
            <div key={i} className="px-5 md:px-6 py-3 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm font-bold text-blue-700 min-w-[3rem]">{item.symbol}</span>
                <span className="text-sm text-slate-600">{item.name}</span>
              </div>
              <span className="font-mono text-sm font-medium text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formula Sections */}
      {dataBooklet.sections.slice(1).map((section, si) => (
        <div key={si} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
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
            <h3 className="text-lg font-bold">{section.title}</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {section.formulas?.map((formula, fi) => {
              const formulaId = `${si}-${fi}`;
              return (
                <div key={fi} className="px-5 md:px-6 py-4 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-800 mb-1">{formula.name}</p>
                      <div className="formula-block !text-left !bg-slate-50 !border-slate-200">
                        <span className="font-semibold text-slate-900">{formula.formula}</span>
                      </div>
                      {formula.note && <p className="text-xs text-slate-500 mt-1.5">{formula.note}</p>}
                    </div>
                    <button
                      onClick={() => copyToClipboard(formula.formula, formulaId)}
                      className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors shrink-0"
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
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
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
    blue: 'bg-blue-50 border-blue-100',
    indigo: 'bg-indigo-50 border-indigo-100',
    rose: 'bg-rose-50 border-rose-100',
    emerald: 'bg-emerald-50 border-emerald-100',
  };
  return (
    <div className={`rounded-xl border p-4 ${colorMap[color] || 'bg-slate-50 border-slate-100'}`}>
      <h4 className="text-sm font-bold text-slate-800 mb-2">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
            <span className="text-slate-400">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
