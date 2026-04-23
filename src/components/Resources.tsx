import { BookMarked, ExternalLink, Star, Video, BookOpen, Globe } from 'lucide-react';

const resourceCategories = [
  {
    title: "📖 Essential Textbooks",
    description: "Core textbooks that cover the material tested in SJChO",
    resources: [
      {
        name: "GCE O-Level Chemistry Textbook",
        author: "Marshall Cavendish / Pearson",
        level: "Foundation",
        stars: 5,
        description: "Your starting point. Master all O-Level content first — roughly 10% of SJChO questions are directly from the O-Level syllabus.",
        tags: ["O-Level", "Essential"],
        url: "https://www.amazon.sg/s?k=O+Level+Chemistry+Textbook"
      },
      {
        name: "A Level H2 Chemistry Key Concepts",
        author: "Popular Bookstore",
        level: "Core",
        stars: 5,
        description: "A concise summary of H2 Chemistry topics. Multiple SJChO Gold medalists recommend this book. Available at Popular bookstores in Singapore.",
        tags: ["A-Level H2", "Highly Recommended"],
        url: "https://www.popular.com.sg/search?q=A+Level+Chemistry"
      },
      {
        name: "Chemistry (Zumdahl & Zumdahl)",
        author: "Houghton Mifflin",
        level: "Advanced",
        stars: 5,
        description: "College-level general chemistry textbook. Excellent for stoichiometry, equilibrium, acid-base, and thermodynamics. Clear explanations with worked problems.",
        tags: ["College-Level", "Olympiad Standard"],
        url: "https://www.amazon.sg/s?k=Zumdahl+Chemistry"
      },
      {
        name: "Chemical Principles (Atkins & Jones)",
        author: "W.H. Freeman",
        level: "Advanced",
        stars: 4,
        description: "Another excellent college-level text. Strong on physical chemistry topics and atomic structure. Good alternative to Zumdahl.",
        tags: ["College-Level", "Physical Chemistry"],
        url: "https://www.amazon.sg/s?k=Atkins+Chemical+Principles"
      },
      {
        name: "Theory and Problems for Chemistry Olympiad",
        author: "Nan Zhihan & Dr Zhang Sheng (NUS)",
        level: "Olympiad",
        stars: 5,
        description: "Written by an IChO Gold Medalist and Singapore's IChO head mentor. Covers challenging concepts with olympiad-style problems. Published by World Scientific.",
        tags: ["Olympiad", "Singapore-Specific"],
        url: "https://www.worldscientific.com/worldscibooks/10.1142/8264"
      },
      {
        name: "Organic Chemistry as a Second Language (Klein)",
        author: "Wiley",
        level: "Organic Chemistry",
        stars: 5,
        description: "The best introduction to organic chemistry mechanisms and thinking. Very readable. Helps enormously with SJChO organic questions.",
        tags: ["Organic", "Beginner-Friendly"],
        url: "https://www.amazon.sg/s?k=Organic+Chemistry+Second+Language+Klein"
      },
    ]
  },
  {
    title: "🎥 YouTube Channels & Video Resources",
    description: "Visual learners — these channels are invaluable for building chemistry intuition",
    resources: [
      {
        name: "Bernard Ng",
        author: "YouTube",
        level: "A-Level H2/H3",
        stars: 5,
        description: "Recommended by multiple SJChO participants on r/SGExams. Covers A-Level content relevant to SJChO in a clear, Singapore-context manner.",
        tags: ["Singapore", "A-Level"],
        url: "https://www.youtube.com/@bernardng1234"
      },
      {
        name: "The Organic Chemistry Tutor",
        author: "YouTube",
        level: "All Levels",
        stars: 5,
        description: "Massive library covering everything from stoichiometry to organic chemistry. His acid-base, kinetics, and equilibrium videos are particularly relevant.",
        tags: ["Comprehensive", "Free"],
        url: "https://www.youtube.com/@theorganicchemistrytutor"
      },
      {
        name: "Khan Academy (Chemistry)",
        author: "khanacademy.org",
        level: "Foundation to Advanced",
        stars: 4,
        description: "Structured course with practice problems. Great for building foundational understanding. Covers AP Chemistry content which overlaps with SJChO.",
        tags: ["Structured", "Free"],
        url: "https://www.khanacademy.org/science/chemistry"
      },
      {
        name: "NileRed",
        author: "YouTube",
        level: "Enrichment",
        stars: 4,
        description: "Fascinating chemistry experiments and demonstrations. Builds chemical intuition and enthusiasm. Recommended by past SJChO participants for background knowledge.",
        tags: ["Experimental", "Enrichment"],
        url: "https://www.youtube.com/@NileRed"
      },
      {
        name: "Professor Dave Explains",
        author: "YouTube",
        level: "A-Level",
        stars: 4,
        description: "Clear, concise explanations of chemistry concepts. Good for quick topic reviews, especially for bonding, kinetics, and thermodynamics.",
        tags: ["Concise", "Free"],
        url: "https://www.youtube.com/@ProfessorDaveExplains"
      },
      {
        name: "Chemiolis",
        author: "YouTube",
        level: "Olympiad",
        stars: 4,
        description: "Recommended by SJChO participants. Covers more advanced chemistry topics relevant to olympiad preparation.",
        tags: ["Olympiad", "Advanced"],
        url: "https://www.youtube.com/@Chemiolis"
      },
    ]
  },
  {
    title: "🌐 Online Platforms & Websites",
    description: "Interactive learning and practice resources",
    resources: [
      {
        name: "SNIC Official Website (snic.org.sg)",
        author: "SNIC",
        level: "Official",
        stars: 5,
        description: "Download past Round 1 questions and Round 2 sample tasks with model answers. Essential practice material directly from the organisers.",
        tags: ["Official", "Past Papers"],
        url: "https://www.snic.org.sg"
      },
      {
        name: "Grail (grail.com)",
        author: "Community",
        level: "A-Level H2/H3",
        stars: 4,
        description: "Online notes and resources for A-Level H2 and H3 Chemistry. Recommended by past SJChO participants for studying beyond O-Level.",
        tags: ["A-Level", "Notes"],
        url: "https://grail.com"
      },
      {
        name: "LibreTexts Chemistry",
        author: "libretexts.org",
        level: "College-Level",
        stars: 4,
        description: "Free, comprehensive chemistry textbook library. Reference-quality explanations and worked examples for any topic.",
        tags: ["Reference", "Free"],
        url: "https://chem.libretexts.org"
      },
      {
        name: "MIT OpenCourseWare",
        author: "ocw.mit.edu",
        level: "Advanced",
        stars: 4,
        description: "Free MIT lecture notes, problem sets, and exams. Great for physical chemistry and more challenging practice problems.",
        tags: ["University-Level", "Free"],
        url: "https://ocw.mit.edu/search/?q=chemistry"
      },
      {
        name: "exams.sg Library",
        author: "SGExams Community",
        level: "O/A-Level",
        stars: 4,
        description: "Community-curated library of O-Level and A-Level study resources. Includes notes, summaries, and practice materials shared by students.",
        tags: ["Community", "Singapore"],
        url: "https://www.reddit.com/r/sgexams/"
      },
    ]
  },
  {
    title: "📝 Practice & Problem-Solving Resources",
    description: "The key to SJChO success — relentless practice with challenging problems",
    resources: [
      {
        name: "O-Level Ten Year Series (TYS)",
        author: "SEAB Past Papers",
        level: "Foundation",
        stars: 4,
        description: "Start here. Ensure you have complete mastery of all O-Level chemistry before attempting more advanced material.",
        tags: ["O-Level", "Essential"],
        url: "https://www.seab.gov.sg/home/examinations/past-examination-papers"
      },
      {
        name: "A-Level H2 Chemistry TYS",
        author: "SEAB Past Papers",
        level: "Core",
        stars: 5,
        description: "Most SJChO Round 1 questions are at A-Level standard. Working through A-Level TYS is highly effective preparation.",
        tags: ["A-Level", "Highly Recommended"],
        url: "https://www.seab.gov.sg/home/examinations/past-examination-papers"
      },
      {
        name: "USNCO Local Exam Past Papers",
        author: "ACS (acs.org)",
        level: "Olympiad",
        stars: 5,
        description: "Free 60-question MCQ papers from the US Chemistry Olympiad. Very similar format and difficulty to SJChO Round 1. Available from 2000 onwards.",
        tags: ["Olympiad", "MCQ Practice", "Free"],
        url: "https://www.acs.org/education/students/highschool/olympiad/usco.html"
      },
      {
        name: "UK Chemistry Olympiad Past Papers",
        author: "RSC (rsc.org)",
        level: "Olympiad",
        stars: 4,
        description: "Written papers from the UK Chemistry Olympiad. Good for practicing free-response questions and Round 2-style problems.",
        tags: ["Olympiad", "FRQ Practice", "Free"],
        url: "https://www.rsc.org/learn/collections/chemistry-olympiad"
      },
      {
        name: "IChO Preparatory Problems",
        author: "icho-official.org",
        level: "Advanced",
        stars: 4,
        description: "Preparatory problems from the International Chemistry Olympiad. Very challenging — only for students aiming for Gold.",
        tags: ["International", "Challenging"],
        url: "https://www.icho-official.org"
      },
    ]
  }
];

export function Resources() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <BookMarked className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Best Study Resources</h2>
        </div>
        <p className="text-slate-500 mt-1">
          Curated resources recommended by past SJChO medalists and chemistry olympiad experts. 
          Organised from foundational to advanced.
        </p>
      </div>

      {/* Priority Guide */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6">
        <h3 className="font-bold text-blue-900 mb-3">📋 Study Priority Order</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/80 rounded-xl p-4">
            <div className="text-2xl mb-2">1️⃣</div>
            <p className="text-sm font-semibold text-blue-900">Master O-Level Chemistry</p>
            <p className="text-xs text-blue-700 mt-1">Complete the entire O-Level syllabus first. This is your foundation.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4">
            <div className="text-2xl mb-2">2️⃣</div>
            <p className="text-sm font-semibold text-blue-900">Learn A-Level H2 Content</p>
            <p className="text-xs text-blue-700 mt-1">~70% of SJChO questions are at A-Level standard. Focus on physical and organic chemistry.</p>
          </div>
          <div className="bg-white/80 rounded-xl p-4">
            <div className="text-2xl mb-2">3️⃣</div>
            <p className="text-sm font-semibold text-blue-900">Practice Olympiad Problems</p>
            <p className="text-xs text-blue-700 mt-1">USNCO past papers are the closest match to SJChO format and difficulty.</p>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      {resourceCategories.map((cat, ci) => (
        <div key={ci}>
          <div className="flex items-center gap-2 mb-4">
            {ci === 0 && <BookOpen size={20} className="text-blue-600" />}
            {ci === 1 && <Video size={20} className="text-red-500" />}
            {ci === 2 && <Globe size={20} className="text-emerald-500" />}
            {ci === 3 && <ExternalLink size={20} className="text-purple-500" />}
            <h3 className="text-xl font-bold text-slate-900">{cat.title}</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4">{cat.description}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {cat.resources.map((res, ri) => (
              <div key={ri} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{res.name}</h4>
                    <p className="text-xs text-slate-500">{res.author} · {res.level}</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={12} className={si < res.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200'} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{res.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-3 mb-3">
                  {res.tags.map((tag, ti) => (
                    <span key={ti} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                {res.url && (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-medium transition-colors"
                  >
                    <span>Visit</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
