import { Trophy, Users, Clock, Award, CheckCircle, Calendar, FlaskConical } from 'lucide-react';

export function Overview() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white p-8 md:p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Trophy size={14} />
            National Chemistry Competition
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Singapore Junior<br />Chemistry Olympiad
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A comprehensive study guide covering all topics, formulas, resources, and strategies
            to excel in the SJChO — from O-Level foundations to A-Level extensions.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Users size={18} />
              <span className="text-sm">2,000+ participants yearly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Award size={18} />
              <span className="text-sm">80+ schools represented</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <Calendar size={18} />
              <span className="text-sm">Since 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🎯</span>
            <h3 className="text-lg font-bold text-slate-900">What is SJChO?</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The <strong>Singapore Junior Chemistry Olympiad (SJChO)</strong> is a national chemistry competition
            for secondary school students (Sec 3–5), organised by the <strong>Singapore National Institute of
              Chemistry (SNIC)</strong> in partnership with NUS, NTU, SUTD, and IMRE, with MOE support.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-2">
            It seeks to promote excitement in learning Chemistry and identify talented young chemists.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">✅</span>
            <h3 className="text-lg font-bold text-slate-900">Eligibility</h3>
          </div>
          <ul className="space-y-2">
            {[
              "Full-time Sec 3, 4, and 5 students",
              "International students (Grade ≤10 or age ≤17) based in Singapore",
              "No age limit — focus on academic level",
              "Registration via school (S$20 per student)",
              "Registration deadline: ~31 March annually"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📅</span>
            <h3 className="text-lg font-bold text-slate-900">2026 Key Dates</h3>
          </div>
          <div className="space-y-3">
            <DateItem label="Registration Deadline" date="31 March 2026" />
            <DateItem label="Round 1" date="20 May 2026 (Wed)" sub="3:00 – 5:00 PM, Online" />
            <DateItem label="Round 2" date="1 July 2026 (Wed)" sub="3:00 – 5:00 PM, at NUS" />
            <DateItem label="Awards Ceremony" date="TBA" />
          </div>
          <p className="text-xs text-slate-400 mt-3">* Dates may change — confirm with latest SNIC circular</p>
        </div>
      </div>

      {/* Competition Format */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900">Competition Format</h2>
          <p className="text-slate-500 mt-1">SJChO consists of two rounds testing different skills</p>
        </div>
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          <div className="p-6 md:p-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-sm font-semibold mb-4">
              <Clock size={14} />
              Round 1 — Theory
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">MCQ Paper</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Duration:</strong> 2 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Format:</strong> 50 Multiple Choice Questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Scoring:</strong> +2 per correct, −0.5 per wrong answer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Platform:</strong> Online via ClassMarker (invigilated at school)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>All registered candidates</strong> participate</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span><strong>Syllabus:</strong> Based on GCE O-Level but extends well beyond</span>
              </li>
            </ul>
            <div className="mt-4 bg-amber-50 rounded-lg p-3 text-xs text-amber-800">
              <strong>💡 Tip:</strong> No penalty for blank answers — only guess if you can eliminate options!
            </div>
          </div>
          <div className="p-6 md:p-8">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-semibold mb-4">
              <FlaskConical size={14} />
              Round 2 — Practical
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Video-Based Experimental</h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Duration:</strong> 2 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Format:</strong> Open-ended + MCQ based on experiment videos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Selection:</strong> Top ~20% from Round 1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Venue:</strong> NUS (in-person)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Tests:</strong> Experimental reasoning, inference, data analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 font-bold">•</span>
                <span><strong>Content:</strong> May include spectroscopy, organic synthesis, chromatography</span>
              </li>
            </ul>
            <div className="mt-4 bg-blue-50 rounded-lg p-3 text-xs text-blue-800">
              <strong>💡 Tip:</strong> Most answers can be inferred from the videos — focus on critical thinking!
            </div>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Awards System</h2>
        <p className="text-slate-500 mb-6">All Round 2 participants receive an award certificate</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 rounded-xl bg-amber-50 border border-amber-100">
            <span className="text-3xl">🥇</span>
            <p className="font-bold text-slate-900 mt-2">Gold</p>
            <p className="text-xs text-slate-500 mt-1">Top performers</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span className="text-3xl">🥈</span>
            <p className="font-bold text-slate-900 mt-2">Silver</p>
            <p className="text-xs text-slate-500 mt-1">Strong performance</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-orange-50 border border-orange-100">
            <span className="text-3xl">🥉</span>
            <p className="font-bold text-slate-900 mt-2">Bronze</p>
            <p className="text-xs text-slate-500 mt-1">Good showing</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <span className="text-3xl">📜</span>
            <p className="font-bold text-slate-900 mt-2">Merit</p>
            <p className="text-xs text-slate-500 mt-1">Solid effort</p>
          </div>
        </div>
        <div className="mt-6 p-4 bg-slate-50 rounded-xl text-sm text-slate-600">
          <p><strong>Ratio:</strong> Awards are distributed approximately 1:1:1:1 (Gold : Silver : Bronze : Merit).</p>
          <p className="mt-1"><strong>School Awards:</strong> Top-performing schools are recognised in 3 bands based on total medals won.</p>
          <p className="mt-1"><strong>DSA Value:</strong> Gold and Silver awards can support DSA and scholarship applications for JC science programmes.</p>
        </div>
      </div>

      {/* Syllabus Overview */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Syllabus at a Glance</h2>
        <p className="text-slate-500 mb-6">Questions are based on GCE O-Level Chemistry but test analytical reasoning and creative application. Many questions reach A-Level H2/H3 standard.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { topic: "Stoichiometry & Redox", level: "O-Level + A-Level" },
            { topic: "Atomic Structure & Quantum Numbers", level: "A-Level Extension" },
            { topic: "Chemical Bonding & VSEPR", level: "O-Level + A-Level" },
            { topic: "Intermolecular Forces", level: "A-Level" },
            { topic: "Chemical Kinetics & Rate Laws", level: "A-Level" },
            { topic: "Thermodynamics (ΔH, ΔS, ΔG)", level: "A-Level" },
            { topic: "Chemical Equilibria (Kc, Kp)", level: "A-Level" },
            { topic: "Acids, Bases & Buffers", level: "O-Level + A-Level" },
            { topic: "Electrochemistry", level: "O-Level + A-Level" },
            { topic: "Organic Chemistry", level: "O-Level + A-Level" },
            { topic: "Periodicity & Group Chemistry", level: "O-Level + A-Level" },
            { topic: "Transition Metals & Complexes", level: "A-Level" },
            { topic: "Qualitative Analysis", level: "O-Level + A-Level" },
            { topic: "Practical & Spectroscopy", level: "A-Level / H3" },
            { topic: "Separation Techniques", level: "A-Level" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-800">{item.topic}</p>
                <p className="text-xs text-slate-500">{item.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DateItem({ label, date, sub }: { label: string; date: string; sub?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
      <div>
        <p className="text-sm font-medium text-slate-800">{label}</p>
        <p className="text-sm text-amber-700 font-semibold">{date}</p>
        {sub && <p className="text-xs text-slate-500">{sub}</p>}
      </div>
    </div>
  );
}
