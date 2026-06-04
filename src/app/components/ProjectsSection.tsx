import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection({ navigate }: { navigate: any }) {
  const projects = [
    {
      id: "election",
      title: "Machine Learning Election Prediction",
      description:
        "Developed a machine learning-based system to predict election outcomes using historical voting data, demographic information, and regional patterns. The project includes data cleaning, feature engineering, and model training using multiple algorithms such as Logistic Regression, Decision Trees, and Random Forest. Comparative analysis was performed to select the best-performing model. The system highlights key factors influencing election results and provides data-driven insights for better decision-making.",
      image:
        "https://images.unsplash.com/photo-1762279389083-abf71f22d338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: "ocr",
      title: "OCR Answer Checking System",
      description:
        "Built an automated answer evaluation system that uses Optical Character Recognition (OCR) to extract text from handwritten or printed answer sheets. The extracted text is processed and compared with predefined correct answers using similarity matching and NLP techniques. The system helps reduce manual effort, improves evaluation speed, and ensures consistent grading. It is designed to scale for educational institutions and online examination systems.",
      image:
        "https://images.unsplash.com/photo-1646776174801-0d1918cb4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["Python", "Tesseract", "OpenCV", "PIL"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "nlp",
      title: "NLP Text Classification",
      description:
        "Implemented a natural language processing system to classify text documents into multiple categories using deep learning techniques. The workflow includes text preprocessing steps such as tokenization, stopword removal, and stemming, followed by feature extraction and model training using TensorFlow and Keras. The model can be applied to real-world use cases like spam detection, sentiment analysis, and document organization.",
      image:
        "https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      technologies: ["Python", "TensorFlow", "NLTK", "Keras"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
  id: "uiux",
  title: "UX/UI Case Study – Food Delivery App",
  description:
    "Designed a user-friendly food delivery mobile app focusing on smooth navigation, fast ordering, and clean UI using Figma.",
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  technologies: ["Figma", "UX Research", "Wireframing", "Prototyping"],
  gradient: "from-pink-500 to-purple-500",
},
  ];

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              onClick={() => navigate(`/project/${project.id}`)} // ✅ CLICK NAVIGATION
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer relative bg-card backdrop-blur-md border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>

                {/* Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  
                  {/* External Link */}
                  <button
                    onClick={(e) => e.stopPropagation()} // ✅ STOP NAVIGATION
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>

                  {/* GitHub */}
                  <button
                    onClick={(e) => e.stopPropagation()} // ✅ STOP NAVIGATION
                    className="p-3 bg-background/90 backdrop-blur-sm rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full text-sm font-medium border border-current/20 text-foreground/90`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
