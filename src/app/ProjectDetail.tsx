import { useParams, useNavigate } from "react-router-dom";

const projects: any = {
  election: {
    title: "Machine Learning Election Prediction",
    about:
      "Developed a machine learning-based system to predict election outcomes using historical voting data, demographic information, and regional patterns. The project includes data cleaning, feature engineering, and model training using multiple algorithms such as Logistic Regression, Decision Trees, and Random Forest. Comparative analysis was performed to select the best-performing model. The system highlights key factors influencing election results and provides data-driven insights for better decision-making.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  ocr: {
    title: "OCR Answer Checking System",
    about:
      "Built an automated answer evaluation system that uses Optical Character Recognition (OCR) to extract text from handwritten or printed answer sheets. The extracted text is processed and compared with predefined correct answers using similarity matching and NLP techniques. The system helps reduce manual effort, improves evaluation speed, and ensures consistent grading. It is designed to scale for educational institutions and online examination systems.",
    tech: ["Python", "Tesseract", "OpenCV", "PIL"],
   image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",
  },
  nlp: {
    title: "NLP Text Classification",
    about:
      "Implemented a natural language processing system to classify text documents into multiple categories using deep learning techniques. The workflow includes text preprocessing steps such as tokenization, stopword removal, and stemming, followed by feature extraction and model training using TensorFlow and Keras. The model can be applied to real-world use cases like spam detection, sentiment analysis, and document organization.",
    tech: ["Python", "TensorFlow", "Keras", "NLTK"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  uiux: {
  title: "UX/UI Case Study – Food Delivery App",

  about:
    "This project focuses on designing a modern food delivery mobile application with improved user experience, intuitive navigation, and faster checkout process.",

  tech: ["Figma", "User Research", "Wireframing", "Prototyping"],

  image:
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
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

      {/* UX Case Study */}
<div className="mt-10 space-y-6">

  <div>
    <h2 className="text-xl font-semibold">Problem Statement</h2>
    <p className="text-muted-foreground">
      Users faced difficulty browsing restaurants, placing orders quickly, and navigating through cluttered interfaces.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold">User Research</h2>
    <p className="text-muted-foreground">
      Conducted surveys and competitor analysis to identify pain points such as slow checkout and confusing UI.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold">Wireframing</h2>
    <p className="text-muted-foreground">
      Created low-fidelity wireframes to define structure, layout, and user flow before final design.
    </p>
  </div>

  <div>
    <h2 className="text-xl font-semibold">Final Design</h2>
    <p className="text-muted-foreground">
      Designed high-fidelity UI screens in Figma with a clean layout, modern components, and improved usability.
    </p>
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
