import { motion } from "motion/react";
import { Code, Figma, Github, FileCode, Database, Brain } from "lucide-react";

export function SkillsSection() {
  const programmingLanguages = [
    { name: "Python", level: 90, icon: Code },
    { name: "C", level: 85, icon: Code },
    { name: "Java", level: 80, icon: Code },
  ];

  const technologies = [
    { name: "Figma", icon: Figma, color: "from-pink-500 to-purple-500" },
    { name: "GitHub", icon: Github, color: "from-gray-600 to-gray-800" },
    { name: "VS Code", icon: FileCode, color: "from-blue-500 to-blue-600" },
    { name: "Machine Learning", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Data Analysis", icon: Database, color: "from-cyan-500 to-blue-500" },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Programming Languages</h3>
            <div className="space-y-6">
              {programmingLanguages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                        <lang.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-lg font-medium text-foreground">{lang.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{lang.level}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + 0.1 * index, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary via-secondary to-accent relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technologies & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative bg-card backdrop-blur-md border border-accent/20 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] cursor-pointer overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className="relative flex flex-col items-center gap-3">
                    <div className={`p-4 bg-gradient-to-br ${tech.color} rounded-lg shadow-lg group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="font-medium text-center text-foreground">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
