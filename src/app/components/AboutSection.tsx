import { motion } from "motion/react";
import { Code2, Sparkles, Rocket } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Building scalable and efficient applications",
    },
    {
      icon: Sparkles,
      title: "Artificial Intelligence",
      description: "Exploring ML and deep learning technologies",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Creating solutions that make a difference",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-card backdrop-blur-md border border-primary/20 rounded-2xl p-8 shadow-[0_0_40px_rgba(59,130,246,0.1)]">
              <p className="text-lg leading-relaxed text-foreground/90">
                Nitin D Shelake is a Computer Science student passionate about software development, 
                artificial intelligence, and modern web technologies. He completed his BTech from 
                Sardar Patel Institute of Technology and enjoys building innovative solutions while 
                continuously learning new technologies.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mt-4">
                With a strong foundation in programming and a keen interest in machine learning, 
                Nitin strives to bridge the gap between theoretical knowledge and practical 
                applications. His journey in tech is driven by curiosity and a desire to create 
                meaningful impact through code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="group bg-card backdrop-blur-md border border-secondary/20 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}