import { motion } from "motion/react";
import { Download, GraduationCap, Award, Briefcase, Code } from "lucide-react";

export function ResumeSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sardar Patel Institute of Technology",
      period: "2022 - 2026",
      description: "Focus on Machine Learning, Data Structures, and Software Engineering",
    },
  ];

  const experience = [
    {
      role: "ML Research Intern",
      company: "Tech Company",
      period: "Summer 2025",
      description: "Worked on predictive analytics and data modeling projects",
    },
  ];

  const achievements = [
    {
      title: "Machine Learning Certification",
      issuer: "Coursera",
      icon: Award,
    },
    {
      title: "Hackathon Winner",
      issuer: "Tech Fest 2025",
      icon: Award,
    },
    {
      title: "Best Project Award",
      issuer: "College Symposium",
      icon: Award,
    },
  ];

  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
          
  <motion.a
  href="/resume/Nitin_Shelake_AI_Engineer_resume.pdf"
  download
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4, delay: 0.2 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.05 }}
  className="group relative inline-flex px-10 py-5 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]"
>
  <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

  <span className="relative flex items-center gap-3 text-white font-semibold text-lg">
    <Download className="w-6 h-6" />
    Download Resume (PDF)
        </span>
        </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  
                  <div className="bg-card backdrop-blur-md border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <span className="text-sm px-3 py-1 bg-primary/20 rounded-full text-primary font-medium">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-lg shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Experience</h3>
            </div>

            <div className="space-y-4">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative pl-8 pb-8 border-l-2 border-secondary/30 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-to-br from-secondary to-accent shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
                  
                  <div className="bg-card backdrop-blur-md border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                      <span className="text-sm px-3 py-1 bg-secondary/20 rounded-full text-secondary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-lg shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Achievements & Certifications</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-card backdrop-blur-md border border-accent/20 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] cursor-pointer overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
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
