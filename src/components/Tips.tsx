import { Lightbulb, Target, Clock, Brain, Trophy, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

const tipSections = [
  {
    icon: <Target className="text-blue-600" size={24} />,
    title: "Preparation Strategy",
    tips: [
      {
        heading: "Master O-Level First, Then Extend to A-Level",
        detail: "SJChO is officially based on the GCE O-Level syllabus, but questions extend far beyond. Complete the entire O-Level syllabus as your first priority (roughly 10% of questions are directly O-Level). Then systematically learn A-Level H2 content, especially physical chemistry and organic chemistry."
      },
      {
        heading: "Focus on Understanding, Not Memorisation",
        detail: "SJChO tests analytical reasoning and creative application, not rote knowledge. Understand WHY reactions happen, not just WHAT happens. Be able to apply concepts to unfamiliar situations — this is the hallmark of olympiad questions."
      },
      {
        heading: "Learn Key A-Level Topics Early",
        detail: "Topics that are almost guaranteed to appear above O-Level standard: electronic configurations (s, p, d, f), Hess's Law, Born-Haber cycles, rate equations and orders of reaction, Kc/Kp calculations, buffer solutions, organic mechanisms, transition metal complexes, and spectroscopy basics."
      },
      {
        heading: "Build a Study Schedule",
        detail: "Start preparing at least 3-4 months before the competition (ideally January for a May exam). Dedicate 2-3 hours per week to olympiad preparation, with more time in the final month. Alternate between learning new content and practicing past papers."
      },
    ]
  },
  {
    icon: <Brain className="text-purple-600" size={24} />,
    title: "Topic-Specific Tips",
    tips: [
      {
        heading: "Stoichiometry & Calculations — Get Fast and Accurate",
        detail: "These are the most common questions and often the easiest marks. Practice until you can do mole calculations, titration problems, and empirical formulae in your sleep. Speed and accuracy here frees up time for harder questions."
      },
      {
        heading: "Organic Chemistry — The Biggest Differentiator",
        detail: "Multiple past participants emphasise that organic chemistry knowledge is crucial for SJChO. Learn functional groups, reaction mechanisms (nucleophilic substitution, electrophilic addition), and isomerism (including optical isomerism and E/Z notation). This is where many students lose marks."
      },
      {
        heading: "Bonding & Structure — High-Yield Topic",
        detail: "VSEPR theory, intermolecular forces, and lattice energy are very commonly tested. Make sure you can draw molecular shapes, predict bond angles (and explain deviations), and compare properties based on bonding type."
      },
      {
        heading: "Spectroscopy — Prepare for Round 2",
        detail: "Raman spectroscopy, UV-vis spectroscopy, and IR spectroscopy have appeared in recent Round 2 papers (at H3 standard). While you don't need to be an expert, understanding the basics of what each technique measures and how to interpret simple spectra will give you a significant advantage."
      },
      {
        heading: "Transition Metals — Don't Neglect This",
        detail: "Crystal field theory, complex ion formation, and ligand substitution are common A-Level extension topics in SJChO. Learn the common transition metal ions, their colours, and how to draw complex ion structures."
      },
    ]
  },
  {
    icon: <Clock className="text-amber-600" size={24} />,
    title: "Exam Technique for Round 1",
    tips: [
      {
        heading: "Manage Your Time: 2.4 Minutes per Question",
        detail: "You have 120 minutes for 50 MCQs — that's roughly 2.4 minutes per question. Some questions will take 30 seconds (recall-based), others may need 5 minutes (calculation-heavy). Don't get stuck on any single question."
      },
      {
        heading: "Use Process of Elimination",
        detail: "With 4 options per question, eliminating even 2 wrong answers dramatically improves your odds. Even if you're unsure of the correct answer, eliminating obviously wrong options makes guessing much more strategic."
      },
      {
        heading: "Negative Marking Strategy",
        detail: "+2 for correct, −0.5 for wrong, 0 for blank. This means if you can eliminate even one option, it's statistically beneficial to guess. Blank answers give you 0 marks — an educated guess is almost always better than leaving blank."
      },
      {
        heading: "Do Easy Questions First",
        detail: "Skim through the paper and answer all the straightforward questions first. This ensures you collect all the 'easy' marks and builds confidence. Then tackle the harder questions with remaining time."
      },
      {
        heading: "Watch Out for Trick Questions",
        detail: "SJChO loves to test whether you truly understand concepts or just memorised them. Common traps: confusing thermodynamic feasibility with kinetic feasibility, mixing up oxidising and reducing agents, incorrect mole ratios in stoichiometry."
      },
    ]
  },
  {
    icon: <Lightbulb className="text-emerald-600" size={24} />,
    title: "Round 2 Preparation",
    tips: [
      {
        heading: "Watch the Videos Carefully — Answers Are Often There",
        detail: "Round 2 is based on experiment videos. Most answers can be inferred from careful observation. Don't panic if the topic is unfamiliar — the questions test your ability to reason from given information, not prior knowledge of that specific experiment."
      },
      {
        heading: "Practice Data Analysis Skills",
        detail: "Round 2 often requires interpreting graphs, calculating values from experimental data, and drawing conclusions. Practice reading graphs, calculating slopes and intercepts, and performing error analysis."
      },
      {
        heading: "Learn About Recent Chemistry Nobel Prizes",
        detail: "Some Round 2 questions have been linked to recent chemistry Nobel Prizes. Having a general awareness of current chemistry research and breakthroughs can give you context for unfamiliar questions."
      },
      {
        heading: "Practice Structured Writing",
        detail: "Open-ended questions in Round 2 require clear, concise explanations. Practice writing answers that explain chemical phenomena step-by-step. Use correct terminology and show your reasoning."
      },
    ]
  },
  {
    icon: <Trophy className="text-amber-500" size={24} />,
    title: "Mindset & Motivation",
    tips: [
      {
        heading: "It's Okay to Find It Hard — That's the Point",
        detail: "SJChO is designed to be challenging. Even strong students may only be able to confidently answer 20-25 out of 50 questions. Don't be discouraged — the competition is about relative performance, not absolute scores."
      },
      {
        heading: "Every Mark Counts — Even Participation Has Value",
        detail: "The olympiad pathway is SJChO → SChO → IChO. Even a participation certificate shows initiative. The experience of taking a challenging chemistry paper builds exam skills that help with O-Levels and A-Levels."
      },
      {
        heading: "Stay Curious, Not Just Competitive",
        detail: "The students who perform best in chemistry olympiads are genuinely curious about chemistry. Watch NileRed videos, read chemistry news, explore beyond the syllabus. This deepens your understanding in ways that pure studying cannot."
      },
      {
        heading: "Learn from Your Mistakes",
        detail: "After every practice paper, review every question you got wrong (and the ones you guessed correctly). Understand WHY the correct answer is right and why the wrong answers are wrong. This is where the real learning happens."
      },
    ]
  }
];

const quickWins = [
  { emoji: "📝", tip: "Complete O-Level syllabus by March at the latest" },
  { emoji: "📚", tip: "Get 'A Level H2 Chemistry Key Concepts' from Popular" },
  { emoji: "🎬", tip: "Watch Bernard Ng and Organic Chemistry Tutor on YouTube" },
  { emoji: "🇺🇸", tip: "Do at least 5 USNCO Local Exam past papers under timed conditions" },
  { emoji: "🧪", tip: "Practise titration calculations until they're automatic" },
  { emoji: "🔬", tip: "Learn basic IR and UV-vis spectroscopy for Round 2" },
  { emoji: "⏱️", tip: "Time yourself when practising — exam conditions matter" },
  { emoji: "🤔", tip: "Never leave a question blank — educated guess > no answer" },
];

export function Tips() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">General Tips & Strategies</h2>
        </div>
        <p className="text-slate-500 mt-1">
          Practical advice from past SJChO medalists, chemistry olympiad trainers, and experienced educators.
        </p>
      </div>

      {/* Quick Wins */}
      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="text-amber-500" size={20} />
          <h3 className="text-lg font-bold text-amber-900">Quick Wins — Start Today</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          {quickWins.map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
              <span className="text-xl">{item.emoji}</span>
              <p className="text-sm text-amber-900 font-medium">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Insight from Past Participants */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-3">
          <CheckCircle size={20} />
          <h3 className="font-bold text-lg">What Past SJChO Medalists Say</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm italic text-blue-100">
              "I would say the standards are way above O level... study A level H2 and H3 chemistry notes, don't neglect O level chemistry syllabus as well."
            </p>
            <p className="text-xs text-blue-200 mt-2">— r/SGExams participant</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm italic text-blue-100">
              "Popular sells a book 'A Level H2 Chemistry Key Concepts'. You can use that as study material as it will cover what's tested in SJChO."
            </p>
            <p className="text-xs text-blue-200 mt-2">— SJChO Gold medalist from neighbourhood school</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm italic text-blue-100">
              "If you just cover basic JC1 content (spdf, skeletal formula, hydrogen bonding, enantiomers), you should easily make it to Round 2."
            </p>
            <p className="text-xs text-blue-200 mt-2">— Two-time SJChO Merit holder</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <p className="text-sm italic text-blue-100">
              "Most of the answers should be in the videos, since they are testing your ability to infer. Just calm down and read carefully."
            </p>
            <p className="text-xs text-blue-200 mt-2">— SJChO participant on Round 2</p>
          </div>
        </div>
      </div>

      {/* Detailed Tip Sections */}
      {tipSections.map((section, si) => (
        <div key={si} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-100 flex items-center gap-3">
            {section.icon}
            <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {section.tips.map((tip, ti) => (
              <div key={ti} className="p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {ti + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{tip.heading}</h4>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{tip.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Common Mistakes */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 md:p-6 bg-gradient-to-r from-rose-500 to-red-500 text-white flex items-center gap-3">
          <AlertTriangle size={22} />
          <h3 className="text-lg font-bold">Common Mistakes to Avoid</h3>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { mistake: "Confusing thermodynamic feasibility with reaction rate", fix: "ΔG < 0 means a reaction CAN happen, not that it WILL happen quickly. Kinetics (Ea) determines rate." },
            { mistake: "Removing 3d electrons before 4s when forming ions", fix: "When writing ion configurations, remove 4s electrons FIRST. Example: Fe²⁺ = [Ar] 3d⁶ (not 3d⁴ 4s²)." },
            { mistake: "Forgetting that catalysts do NOT shift equilibrium position", fix: "Catalysts speed up both forward and reverse reactions equally. They only help reach equilibrium faster." },
            { mistake: "Using wrong units in gas calculations", fix: "PV = nRT requires P in Pa, V in m³. For dm³, use PV = nRT with P in kPa. Always check units!" },
            { mistake: "Confusing strong/weak with concentrated/dilute", fix: "Strength = degree of dissociation. Concentration = amount per unit volume. A weak acid can be concentrated." },
            { mistake: "Incorrect oxidation state assignments", fix: "In peroxides, O = −1 (not −2). In OF₂, O = +2. In metal hydrides, H = −1. Always check for exceptions." },
            { mistake: "Forgetting about spectator ions in ionic equations", fix: "Only include species that actually change. Cancel ions that appear unchanged on both sides." },
            { mistake: "Mixing up anode and cathode in electrolytic vs galvanic cells", fix: "In galvanic cells: anode = negative (oxidation). In electrolytic cells: anode = positive (oxidation). Oxidation ALWAYS at anode." },
          ].map((item, i) => (
            <div key={i} className="p-5 md:px-6 md:py-4">
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold text-sm shrink-0">✗</span>
                <div>
                  <p className="text-sm font-medium text-slate-800">{item.mistake}</p>
                  <p className="text-sm text-emerald-700 mt-1 flex items-start gap-1.5">
                    <span className="font-bold shrink-0">✓</span>
                    {item.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Week Checklist */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-6">
        <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
          <CheckCircle className="text-emerald-600" size={20} />
          Final Week Checklist
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            "Review all formulas in the Data Booklet section",
            "Do one full timed practice paper (50 MCQs in 2 hours)",
            "Review mistakes from all previous practice papers",
            "Brush up on qualitative analysis tests",
            "Revisit organic chemistry reaction mechanisms",
            "Get a good night's sleep before the exam",
            "Prepare non-programmable calculator and 2B pencil",
            "Stay calm — remember that everyone finds it hard!",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
              <div className="w-5 h-5 rounded border-2 border-emerald-300 shrink-0" />
              <p className="text-sm text-emerald-900">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
