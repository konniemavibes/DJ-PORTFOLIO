import { motion } from "motion/react";
import { Play, Music2, FileText } from "lucide-react";
import heroImage from "../../imports/image.png";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="DJ KONNIE"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Music2 size={48} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl mb-4 tracking-tight"
        >
          ISHIMWE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">DAVID</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Elevating Soundscapes & Creating Unforgettable Moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="https://docs.google.com/document/d/17bm0povFUZ7U4e8ECWSi6qxZ1FvKMPiklODEB5nVo4M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play size={20} />
            CV
          </a>
          <a
            href="https://docs.google.com/document/d/1CXQEELIyQGX5joX8CTd9PjUsC5_pZmE6iugi4QrmJsQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all cursor-pointer"
          >
            Cover Letter
          </a>
          <a
            href="https://drive.google.com/file/d/1d5hQsDlV4rRko_HzemYn8T9V3fGX-V6W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText size={20} />
            Recommendation Letter
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}