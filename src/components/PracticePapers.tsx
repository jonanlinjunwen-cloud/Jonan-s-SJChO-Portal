import { FlaskConical, ExternalLink, Star, AlertCircle } from 'lucide-react';

const practicePapers = [
  {
    category: "🎯 SJChO Official Papers",
    description: "Past papers and sample questions directly from the organisers. The most authentic practice you can get.",
    difficulty: "Mixed",
    papers: [
      {
        name: "SJChO Past Year Papers (Round 1)",
        source: "SNIC Official",
        url: "https://www.snic.org.sg/index.php/event/sjcho/sjcho-syllabus-and-sample-questions",
        description: "Download past Round 1 MCQ papers from the SNIC website. These are the exact style and format of the competition.",
        difficulty: 4,
        format: "50 MCQs, 2 hours",
        relevance: "⭐⭐⭐⭐⭐ — Directly from the source",
      },
      {
        name: "SJChO Round 2 Sample Task",
        source: "SNIC Official",
        url: "https://www.snic.org.sg/index.php/event/sjcho/sjcho-syllabus-and-sample-questions",
        description: "Sample Round 2 task with video-based experiments (e.g., Carrot Chemistry). Includes open-ended questions and model answers.",
        difficulty: 4,
        format: "Open-ended + MCQ",
        relevance: "⭐⭐⭐⭐⭐ — Directly from the source",
      },
    ]
  },
  {
    category: "🇺🇸 US Chemistry Olympiad (USNCO)",
    description: "The closest international equivalent to SJChO. Similar MCQ format, similar difficulty. Highly recommended.",
    difficulty: "A-Level to Olympiad",
    papers: [
      {
        name: "USNCO Local Exam Past Papers",
        source: "American Chemical Society",
        url: "https://www.acs.org/education/students/highschool/olympiad/past-exams.html",
        description: "60-question MCQ papers available from 1999 onwards. Format is very similar to SJChO Round 1. Topics covered are almost identical to the SJChO syllabus.",
        difficulty: 4,
        format: "60 MCQs, 110 minutes",
        relevance: "⭐⭐⭐⭐⭐ — Best external practice",
      },
      {
        name: "USNCO National Exam Past Papers",
        source: "American Chemical Society",
        url: "https://www.acs.org/education/students/highschool/olympiad/past-exams.html",
        description: "More challenging than the local exam. Includes FRQ and practical sections. Good for Round 2 preparation.",
        difficulty: 5,
        format: "MCQ + FRQ + Practical",
        relevance: "⭐⭐⭐⭐ — Great for Round 2 prep",
      },
    ]
  },
  {
    category: "🇬🇧 UK Chemistry Olympiad",
    description: "Written by the Royal Society of Chemistry. Good for practising analytical thinking and open-ended questions.",
    difficulty: "A-Level to Olympiad",
    papers: [
      {
        name: "UK Chemistry Olympiad Past Papers",
        source: "Royal Society of Chemistry",
        url: "https://edu.rsc.org/enrichment/uk-chemistry-olympiad/past-papers",
        description: "Annual papers with mark schemes and examiners' reports. Topics like organic synthesis, thermodynamics, and spectroscopy feature prominently.",
        difficulty: 4,
        format: "Written paper, ~2 hours",
        relevance: "⭐⭐⭐⭐ — Excellent analytical practice",
      },
    ]
  },
  {
    category: "🇸🇬 Singapore A-Level Practice",
    description: "Since most SJChO questions are at A-Level standard, A-Level TYS is essential practice.",
    difficulty: "A-Level H2",
    papers: [
      {
        name: "GCE A-Level H2 Chemistry TYS",
        source: "SEAB / Popular Bookstore",
        url: "#",
        description: "Available at Popular bookstores. Working through the H2 Chemistry TYS builds the knowledge base needed for ~70% of SJChO Round 1 questions.",
        difficulty: 3,
        format: "Mixed (MCQ + Structured + Free Response)",
        relevance: "⭐⭐⭐⭐⭐ — Essential foundation",
      },
      {
        name: "GCE O-Level Chemistry TYS",
        source: "SEAB / Popular Bookstore",
        url: "#",
        description: "Start here if you haven't completed the O-Level syllabus. Ensures you don't miss the ~10% of directly O-Level questions.",
        difficulty: 2,
        format: "MCQ + Structured",
        relevance: "⭐⭐⭐⭐ — Important baseline",
      },
    ]
  },
  {
    category: "🧪 Other Countries' Practice Papers",
    description: "Additional practice from chemistry competitions worldwide. Great for broadening your problem-solving skills.",
    difficulty: "Varies",
    papers: [
      {
        name: "Canadian Chemistry Olympiad (CCO)",
        source: "Chemical Institute of Canada",
        url: "https://cheminst.ca/programs/cico/",
        description: "Good quality problems at a similar level to SJChO. Useful for additional MCQ practice.",
        difficulty: 4,
        format: "MCQ + Written",
        relevance: "⭐⭐⭐ — Good supplementary practice",
      },
      {
        name: "Australian Chemistry Competition",
        source: "Australian Science Innovations",
        url: "https://www.asi.edu.au/programs/australian-chemistry-olympiad/",
        description: "Another good source of chemistry practice problems with a different perspective.",
        difficulty: 4,
        format: "Written exam",
        relevance: "⭐⭐⭐ — Good supplementary practice",
      },
    ]
  }
];

export function PracticePapers() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <FlaskConical className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Practice Papers & Past Exams</h2>
        </div>
        <p className="text-slate-500 mt-1">
          The best way to prepare for SJChO is to practice with papers of similar style and difficulty.
          Here are the closest matches ranked by relevance.
        </p>
      </div>

      {/* Important Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="text-amber-500 shrink-0 mt-0.5" size={20} />
        <div>
          <p className="text-sm font-semibold text-amber-800">Important Note</p>
          <p className="text-sm text-amber-700 mt-1">
            SJChO does NOT publicly release all past papers. The SNIC website provides some sample questions.
            USNCO Local Exams are the <strong>best freely available substitute</strong> — they have nearly identical format,
            topic coverage, and difficulty level.
          </p>
        </div>
      </div>

      {/* Recommended Practice Order */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-4">📋 Recommended Practice Order</h3>
        <div className="space-y-3">
          {[
            { step: 1, text: "Complete O-Level Chemistry TYS — master the basics first", time: "2-3 weeks" },
            { step: 2, text: "Work through A-Level H2 Chemistry TYS — build advanced understanding", time: "4-6 weeks" },
            { step: 3, text: "Practice SJChO sample papers from SNIC website — understand the format", time: "1 week" },
            { step: 4, text: "Do USNCO Local Exam papers (at least 5 years) — closest match to SJChO", time: "3-4 weeks" },
            { step: 5, text: "Try UK Chemistry Olympiad papers — for analytical/open-ended practice", time: "2-3 weeks" },
            { step: 6, text: "If aiming for Gold: attempt IChO preparatory problems", time: "Ongoing" },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold shrink-0">
                {item.step}
              </span>
              <div className="flex-1">
                <p className="text-sm">{item.text}</p>
              </div>
              <span className="text-xs text-blue-200 shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Paper Categories */}
      {practicePapers.map((cat, ci) => (
        <div key={ci} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 md:p-6 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-900">{cat.category}</h3>
            <p className="text-sm text-slate-500 mt-1">{cat.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                Difficulty: {cat.difficulty}
              </span>
            </div>
          </div>
          <div className="divide-y divide-slate-100">
            {cat.papers.map((paper, pi) => (
              <div key={pi} className="p-5 md:p-6 hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-900">{paper.name}</h4>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{paper.format}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Source: {paper.source}</p>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{paper.description}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, si) => (
                          <Star key={si} size={12} className={si < paper.difficulty ? 'text-amber-400 fill-amber-400' : 'text-slate-200'} />
                        ))}
                      </div>
                      <span className="text-xs text-slate-500">Difficulty</span>
                    </div>
                    <p className="text-xs text-blue-600 font-medium mt-2">{paper.relevance}</p>
                  </div>
                  {paper.url !== '#' && (
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 text-sm font-medium hover:bg-blue-100 transition-colors shrink-0"
                    >
                      <ExternalLink size={14} />
                      Access
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
