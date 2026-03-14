import { motion } from "motion/react";
import { Download, Mail, FolderOpen } from "lucide-react";
import profileImage from "../../assets/profile.png";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Nitin D Shelake
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Student | Aspiring Developer | Tech Enthusiast
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-foreground/80 leading-relaxed"
            >
              Passionate about building innovative solutions with cutting-edge technologies.
              Currently exploring the realms of Machine Learning, AI, and modern web development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-white font-semibold">
                  <FolderOpen className="w-5 h-5" />
                  View Projects
                </span>
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className="group relative px-8 py-4 bg-card backdrop-blur-md border border-primary/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-foreground font-semibold">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-4 bg-card backdrop-blur-md border border-accent/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2 text-foreground font-semibold">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Profile image container with glassmorphism */}
              <div className="relative rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_rgba(59,130,246,0.4)] backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Nitin D Shelake"
                  className="w-full h-full object-cover aspect-square"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
