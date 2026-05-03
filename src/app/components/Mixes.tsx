import { motion } from "motion/react";
import { Play, Download, Clock, Lock, Pause } from "lucide-react";
import { useState, useRef } from "react";

const mixes = [
  {
    title: "Midnight Sessions Vol. 3",
    genre: "Afro Beats",
    duration: "62 min",
    plays: "15.2K",
    coverGradient: "from-purple-600 to-blue-600",
    uploaded: true,
    file: "/mixes/mix_20m56s.mp3",
  },
  {
    title: "Festival Anthems 2024",
    genre: "Progressive House",
    duration: "78 min",
    plays: "28.5K",
    coverGradient: "from-pink-600 to-orange-600",
    uploaded: false,
  },
  {
    title: "Underground Techno",
    genre: "Techno",
    duration: "85 min",
    plays: "22.1K",
    coverGradient: "from-indigo-600 to-purple-600",
    uploaded: false,
  },
  {
    title: "Summer Vibes Mix",
    genre: "Tropical House",
    duration: "55 min",
    plays: "31.8K",
    coverGradient: "from-yellow-600 to-pink-600",
    uploaded: false,
  },
  {
    title: "After Hours",
    genre: "Melodic Techno",
    duration: "90 min",
    plays: "19.4K",
    coverGradient: "from-purple-600 to-pink-600",
    uploaded: false,
  },
  {
    title: "Peak Time Energy",
    genre: "Tech House",
    duration: "68 min",
    plays: "25.7K",
    coverGradient: "from-red-600 to-purple-600",
    uploaded: false,
  },
];

export function Mixes() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayClick = (mixTitle: string, file: string) => {
    if (currentlyPlaying === mixTitle) {
      // Pause current
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentlyPlaying(null);
    } else {
      // Play new
      if (audioRef.current) {
        audioRef.current.src = file;
        audioRef.current.volume = 1;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setCurrentlyPlaying(mixTitle);
            })
            .catch((error) => {
              console.error("Audio playback failed:", error);
            });
        } else {
          setCurrentlyPlaying(mixTitle);
        }
      }
    }
  };

  const handleAudioEnd = () => {
    setCurrentlyPlaying(null);
  };

  return (
    <>
      <audio ref={audioRef} onEnded={handleAudioEnd} crossOrigin="anonymous" />
      <section id="mixes" className="py-20 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Latest Mixes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest productions and live sets, here this is mixes that I have performed in different events, and also some of my original productions that I have not yet uploaded, but they are coming soon.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mixes.map((mix, index) => (
            <motion.div
              key={mix.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all">
                {/* Cover Art */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${mix.coverGradient} opacity-80`} />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="text-black ml-1" size={24} fill="currentColor" />
                    </button>
                  </div>

                  {/* Genre Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {mix.genre}
                  </div>
                </div>

                {/* Mix Info */}
                <div className="p-6">
                  <h3 className="text-xl mb-2">{mix.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {mix.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Play size={16} />
                      {mix.plays}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    {mix.uploaded ? (
                      <>
                        <button
                          onClick={() => handlePlayClick(mix.title, mix.file)}
                          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                        >
                          {currentlyPlaying === mix.title ? (
                            <>
                              <Pause size={16} />
                              Pause
                            </>
                          ) : (
                            <>
                              <Play size={16} />
                              Play
                            </>
                          )}
                        </button>
                        <a
                          href={mix.file}
                          download
                          className="px-4 py-2 border border-gray-700 rounded-lg hover:border-purple-500 transition-colors flex items-center justify-center"
                        >
                          <Download size={16} />
                        </a>
                      </>
                    ) : (
                      <div className="flex-1 bg-gray-800/50 py-2 rounded-lg flex items-center justify-center gap-2 text-gray-500 cursor-not-allowed">
                        <Lock size={16} />
                        Not Yet Uploaded
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
