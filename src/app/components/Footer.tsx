import { motion } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/NitinShelake4448", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/nitin-shelake-2a0410326/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/nitinshelake", label: "Twitter" },
    { icon: Mail, href: "mailto:ndshelake3@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-primary/20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="group p-4 bg-card backdrop-blur-md border border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          ></motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground">
              Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
            </p>
            <p className="text-sm text-muted-foreground">
              © 2026 Nitin D Shelake. All Rights Reserved.
            </p>
          </motion.div>

          {/* Scroll to top button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
          >
            <span className="text-white font-medium">Back to Top ↑</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}