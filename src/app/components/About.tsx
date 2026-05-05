import { motion } from "motion/react";
import { Music, Headphones, Radio, Award } from "lucide-react";
import aboutImage from "../../imports/568513828_17883436293392962_4805521125778757587_n.jpg";

const stats = [
  { icon: Music, value: "15+", label: "Events Performed" },
  { icon: Headphones, value: "400+", label: "Happy Listeners" },
  { icon: Radio, value: "2+", label: "Years Experience" },
  { icon: Award, value: "1", label: "Award Won (ASYV DJ Grade Competition)" },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <img
                src={aboutImage}
                alt="DJ KONNIE"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-1.5xl md:text-1xl">My name is ISHIMWE David. I am currently studying in senior 5 MCE at ASYV(Agahozo-Shalom Youth Village) as well part of technical team.
              I am passionte about DJing and sound engineering as well light designing is also my hobby.
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              With over 2+ years of experience behind the decks, I've mastered the art of reading the audience with high energy and
              creating the perfect atmosphere with high sound quality when I am not behind the deck. From intimate Village performance at ASYV,
              my mission is to take listeners on an unforgettable journey through music by using energetic transition, loops and effects.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Specializing in Afrobeat, Amapiano, and Afrohouse music, I mix classic tracks with
              cutting-edge beats to create a unique soft sound that keeps the dance floor
              moving with good vibes.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-100" />
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-500/50 transition-all"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-500" />
              <div className="text-3xl md:text-4xl mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
