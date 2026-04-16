import { useParams, useNavigate } from "react-router-dom";

const projects: any = {
  election: {
    title: "Machine Learning Election Prediction",
    about:
      "Developed a machine learning-based system to predict election outcomes using historical data, demographic information, and regional patterns.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  ocr: {
    title: "OCR Answer Checking System",
    about:
      "Built an OCR-based system to extract and evaluate answers automatically using NLP techniques.",
    tech: ["Python", "Tesseract", "OpenCV", "PIL"],
    image: "https://images.unsplash.com/photo-1581090700227-1e8eeb6d2b2c",
  },
  nlp: {
    title: "NLP Text Classification",
    about:
      "Implemented deep learning-based text classification using TensorFlow and NLP preprocessing techniques.",
    tech: ["Python", "TensorFlow", "Keras", "NLTK"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  svm: {
    title: "Support Vector Machine Implementation",
    about:
      "Implemented SVM from scratch including kernel functions and optimization techniques.",
    tech: ["Python", "NumPy", "Matplotlib", "SciPy"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects[id as keyof typeof projects];

  if (!project) return <div className="text-white">Project Not Found</div>;

  return (
    <div className="min-h-screen bg-background text-foreground p-10">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-primary rounded-lg"
      >
        ← Back
      </button>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10">
        
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={project.image}
            className="rounded-xl w-full h-auto shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{project.title}</h1>

          <p className="text-muted-foreground">
            {project.about}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button className="px-4 py-2 bg-primary rounded-lg">
              Live Demo
            </button>
            <button className="px-4 py-2 bg-secondary rounded-lg">
              GitHub
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">About the Project</h2>
        <p className="text-muted-foreground">{project.about}</p>
      </div>

      {/* Technologies */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary/20 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshots */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Project Screenshots</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src={project.image} className="rounded-lg" />
          <img src={project.image} className="rounded-lg" />
          <img src={project.image} className="rounded-lg" />
          <img src={project.image} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
