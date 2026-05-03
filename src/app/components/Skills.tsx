import { motion } from "motion/react";
import { Code2, Database, Zap, ExternalLink } from "lucide-react";
import asyvtyperImage from "../../imports/asyvtyper.png";

export function Skills() {
  const skills = [
    {
      icon: <Code2 size={32} />,
      title: "TypeScript",
      description: "Build scalable and type-safe applications with strong typing and modern JavaScript features",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Database size={32} />,
      title: "MongoDB",
      description: "Design and manage NoSQL databases with flexible schemas and powerful aggregation pipelines",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: <Zap size={32} />,
      title: "Next.js",
      description: "Create full-stack web applications with server-side rendering, API routes, and optimized performance",
      color: "from-purple-600 to-pink-600",
    },
  ];

  const projects = [
    {
      title: "ASYVTypers - Typing Speed Trainer",
      description: "An interactive typing skill improvement platform built to help users increase their typing speed and accuracy through engaging practice exercises.",
      tech: ["TypeScript", "React", "Next.js"],
      link: "https://asyvtyper.vercel.app",
      image: asyvtyperImage,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Programming Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in modern web technologies and full-stack development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all h-full">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${skill.color} mb-6`}>
                  <div className="text-white">{skill.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-3">{skill.title}</h3>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-3xl mb-8">Featured Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all">
                  {/* Project Image/Preview */}
                  <div 
                    className="h-48 relative overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-2xl mb-3">{project.title}</h4>
                    <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                    >
                      View Project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
