import { Play, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface VideoPlaylist {
  title: string;
  description: string;
  category: string;
  videos: {
    id: string;
    title: string;
    channel: string;
    duration: string;
    description: string;
    youtubeId: string;
    topics: string[];
  }[];
}

const videoPlaylists: VideoPlaylist[] = [
  {
    title: "Stoichiometry & Redox",
    description: "Master mole calculations, balancing equations, and oxidation-reduction reactions",
    category: "Physical Chemistry",
    videos: [
      {
        id: "1",
        title: "The Mole Concept Explained",
        channel: "The Organic Chemistry Tutor",
        duration: "12:45",
        description: "Complete guide to moles, Avogadro's number, and molar mass calculations",
        youtubeId: "zA6fbn3bVlQ",
        topics: ["Moles", "Stoichiometry", "Calculations"]
      },
      {
        id: "2",
        title: "Balancing Chemical Equations",
        channel: "Professor Dave Explains",
        duration: "8:32",
        description: "Step-by-step method for balancing any chemical equation",
        youtubeId: "kJcNHvQ8SNw",
        topics: ["Equations", "Balancing", "Conservation"]
      },
      {
        id: "3",
        title: "Redox Reactions & Oxidation States",
        channel: "Khan Academy",
        duration: "15:20",
        description: "Understanding oxidation states and identifying redox processes",
        youtubeId: "MReEYX6TA7I",
        topics: ["Redox", "Oxidation States", "Electron Transfer"]
      }
    ]
  },
  {
    title: "Atomic Structure & Bonding",
    description: "Electrons, orbitals, and how atoms combine",
    category: "Physical Chemistry",
    videos: [
      {
        id: "4",
        title: "Electron Configuration",
        channel: "The Organic Chemistry Tutor",
        duration: "18:15",
        description: "Master the aufbau principle, Pauli exclusion, and Hund's rule",
        youtubeId: "uJF7T2kLDuE",
        topics: ["Electrons", "Configuration", "Orbitals"]
      },
      {
        id: "5",
        title: "Ionic vs Covalent Bonding",
        channel: "Professor Dave Explains",
        duration: "9:45",
        description: "Clear explanation of different types of chemical bonds",
        youtubeId: "OxNvOVkIIU0",
        topics: ["Bonding", "Ionic", "Covalent"]
      },
      {
        id: "6",
        title: "VSEPR Theory & Molecular Geometry",
        channel: "Khan Academy",
        duration: "14:30",
        description: "Predicting molecular shapes and bond angles",
        youtubeId: "v0QqJy_rXPw",
        topics: ["VSEPR", "Geometry", "Shape"]
      }
    ]
  },
  {
    title: "Thermodynamics & Kinetics",
    description: "Energy, entropy, rates, and reactions",
    category: "Physical Chemistry",
    videos: [
      {
        id: "7",
        title: "Enthalpy & Energy Diagrams",
        channel: "Professor Dave Explains",
        duration: "11:20",
        description: "Understanding enthalpy changes and reaction profiles",
        youtubeId: "zVWlNDI6Tmo",
        topics: ["Enthalpy", "Energy", "Thermodynamics"]
      },
      {
        id: "8",
        title: "Reaction Rates & Collision Theory",
        channel: "The Organic Chemistry Tutor",
        duration: "16:40",
        description: "Factors affecting reaction rates and activation energy",
        youtubeId: "Fv4tStTe5dU",
        topics: ["Kinetics", "Rate", "Activation Energy"]
      },
      {
        id: "9",
        title: "Catalysts & Enzymes",
        channel: "Khan Academy",
        duration: "10:15",
        description: "How catalysts lower activation energy without being consumed",
        youtubeId: "iBg_PcGrTas",
        topics: ["Catalysis", "Mechanisms", "Enzymes"]
      }
    ]
  },
  {
    title: "Acids, Bases & Equilibrium",
    description: "pH, buffers, and chemical equilibrium",
    category: "Physical Chemistry",
    videos: [
      {
        id: "10",
        title: "pH, pOH & Buffers",
        channel: "The Organic Chemistry Tutor",
        duration: "22:10",
        description: "Complete guide to acid-base chemistry and buffer solutions",
        youtubeId: "qV0ld92RBvw",
        topics: ["pH", "Buffers", "Acids"]
      },
      {
        id: "11",
        title: "Le Chatelier's Principle",
        channel: "Professor Dave Explains",
        duration: "10:50",
        description: "How equilibrium shifts in response to changing conditions",
        youtubeId: "pG-QR52lMak",
        topics: ["Equilibrium", "Le Chatelier", "Shifts"]
      },
      {
        id: "12",
        title: "Equilibrium Constants",
        channel: "Khan Academy",
        duration: "13:25",
        description: "Understanding Kc, Kp, and Q calculations",
        youtubeId: "1uqPdkC1L5M",
        topics: ["Constants", "Calculations", "Equilibrium"]
      }
    ]
  },
  {
    title: "Organic Chemistry Mechanisms",
    description: "SN1, SN2, elimination, and addition reactions",
    category: "Organic Chemistry",
    videos: [
      {
        id: "13",
        title: "SN1 vs SN2 Reactions",
        channel: "Organic Chemistry Tutor",
        duration: "19:30",
        description: "Nucleophilic substitution mechanisms explained clearly",
        youtubeId: "MwJB5dZQlW4",
        topics: ["Mechanisms", "SN1", "SN2"]
      },
      {
        id: "14",
        title: "Elimination Reactions",
        channel: "The Organic Chemistry Tutor",
        duration: "15:45",
        description: "E1 and E2 mechanisms with Zaitsev's rule",
        youtubeId: "Ul6J3JMHFPo",
        topics: ["Elimination", "Alkenes", "Mechanisms"]
      },
      {
        id: "15",
        title: "Addition to Alkenes (Markovnikov's Rule)",
        channel: "Professor Dave Explains",
        duration: "11:20",
        description: "Predicting products of electrophilic addition",
        youtubeId: "J5X8VBFZPjI",
        topics: ["Addition", "Markovnikov", "Alkenes"]
      }
    ]
  },
  {
    title: "Inorganic Chemistry & Periodicity",
    description: "Group chemistry, trends, and qualitative analysis",
    category: "Inorganic Chemistry",
    videos: [
      {
        id: "16",
        title: "Periodic Table Trends",
        channel: "Khan Academy",
        duration: "14:15",
        description: "Atomic radius, ionization energy, electronegativity patterns",
        youtubeId: "AHbJLBhOBkU",
        topics: ["Periodicity", "Trends", "Periodic Table"]
      },
      {
        id: "17",
        title: "Halogens & Halides",
        channel: "Professor Dave Explains",
        duration: "9:50",
        description: "Group 17 chemistry and displacement reactions",
        youtubeId: "hGBGLv-q1Eg",
        topics: ["Group 17", "Halogens", "Chemistry"]
      },
      {
        id: "18",
        title: "Transition Metals & Complex Ions",
        channel: "The Organic Chemistry Tutor",
        duration: "20:30",
        description: "Transition metal chemistry, complexes, and colors",
        youtubeId: "s5cKJLlNd9I",
        topics: ["Transitions", "Complexes", "Colors"]
      }
    ]
  },
  {
    title: "Experiments & Demonstrations",
    description: "Visual chemistry to build intuition",
    category: "Enrichment",
    videos: [
      {
        id: "19",
        title: "Exothermic & Endothermic Reactions",
        channel: "NileRed",
        duration: "8:20",
        description: "Cool chemistry experiments demonstrating energy changes",
        youtubeId: "ZfCEi8FS93g",
        topics: ["Experiments", "Energy", "Reactions"]
      },
      {
        id: "20",
        title: "Acid-Base Indicators",
        channel: "Professor Dave Explains",
        duration: "7:30",
        description: "How indicators change color and what it tells us",
        youtubeId: "pCeEd3PnqrE",
        topics: ["Indicators", "pH", "Experiments"]
      }
    ]
  }
];

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [expandedPlaylist, setExpandedPlaylist] = useState<string | null>(null);

  const selectedVideoData = videoPlaylists
    .flatMap(p => p.videos)
    .find(v => v.youtubeId === selectedVideo);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Play className="text-blue-600" size={28} />
          <h2 className="text-2xl font-bold text-slate-900">Video Resources</h2>
        </div>
        <p className="text-slate-500 mt-1">
          Curated YouTube videos to help you understand key chemistry concepts. Click any video to watch, or explore playlists by topic.
        </p>
      </div>

      {selectedVideo && selectedVideoData && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="aspect-video bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title={selectedVideoData.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{selectedVideoData.title}</h3>
            <p className="text-sm text-slate-500 mb-4">{selectedVideoData.channel} • {selectedVideoData.duration}</p>
            <p className="text-slate-700 mb-4">{selectedVideoData.description}</p>
            <div className="flex flex-wrap gap-2">
              {selectedVideoData.topics.map(topic => (
                <span key={topic} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                  {topic}
                </span>
              ))}
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              Back to Playlists
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {videoPlaylists.map((playlist, index) => (
          <div key={index} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedPlaylist(expandedPlaylist === playlist.title ? null : playlist.title)}
              className="w-full p-5 md:p-6 flex items-start gap-4 hover:bg-slate-50 transition-colors text-left"
            >
              <div className="text-3xl shrink-0">🎬</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900">{playlist.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{playlist.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                    playlist.category === 'Physical Chemistry' ? 'bg-blue-100 text-blue-700' :
                    playlist.category === 'Organic Chemistry' ? 'bg-emerald-100 text-emerald-700' :
                    playlist.category === 'Inorganic Chemistry' ? 'bg-purple-100 text-purple-700' :
                    'bg-amber-100 text-amber-700'
                  }`}>
                    {playlist.category}
                  </span>
                  <span className="text-xs text-slate-500">{playlist.videos.length} videos</span>
                </div>
              </div>
            </button>

            {expandedPlaylist === playlist.title && (
              <div className="border-t border-slate-100">
                {playlist.videos.map((video, vi) => (
                  <button
                    key={vi}
                    onClick={() => setSelectedVideo(video.youtubeId)}
                    className="w-full p-4 md:p-5 border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50 transition-colors text-left flex items-start gap-4"
                  >
                    <div className="w-24 h-14 bg-slate-200 rounded-lg flex items-center justify-center shrink-0">
                      <Play size={20} className="text-slate-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900">{video.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{video.channel} • {video.duration}</p>
                      <p className="text-xs text-slate-600 mt-2">{video.description}</p>
                    </div>
                    <ExternalLink size={16} className="text-blue-500 shrink-0 mt-1" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
