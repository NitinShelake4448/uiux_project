import { useParams, useNavigate } from "react-router-dom";

const projects: any = {
election: {
title: "Machine Learning Election Prediction",
about:
"Developed a machine learning-based system to predict election outcomes using historical voting data, demographic information, and regional patterns. The project includes data cleaning, feature engineering, and model training using multiple algorithms such as Logistic Regression, Decision Trees, and Random Forest.",
tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],

duration: "3 Months",
role: "Machine Learning Developer",
status: "Completed",

features: [
  "Historical election data analysis",
  "Demographic-based prediction model",
  "Feature engineering and preprocessing",
  "Multiple ML algorithm comparison",
  "Prediction accuracy evaluation",
  "Interactive result visualization"
],
  
image:
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

screenshots: [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
],

},

ocr: {
title: "OCR Answer Checking System",

about:
  "Built an automated answer evaluation system that uses OCR and NLP techniques to extract, process, and evaluate answers automatically.",

tech: ["Python", "Tesseract", "OpenCV", "PIL"],

duration: "4 Months",
role: "AI Developer",
status: "Completed",

  features: [
  "OCR-based text extraction",
  "Automatic answer evaluation",
  "Similarity score calculation",
  "Handwritten and printed text support",
  "Reduced manual checking effort",
  "Fast and scalable grading process"
],

image:
  "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80",

screenshots: [
  "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
  "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
],

},

nlp: {
title: "NLP Text Classification",

about:
  "Implemented a natural language processing system to classify text documents into multiple categories using deep learning techniques.",

tech: ["Python", "TensorFlow", "Keras", "NLTK"],

duration: "2 Months",
role: "NLP Engineer",
status: "Completed",

features: [
  "Text preprocessing pipeline",
  "Tokenization and stemming",
  "Deep learning classification model",
  "Multi-category document classification",
  "Sentiment analysis support",
  "High accuracy prediction results"
],
  
image:
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

screenshots: [
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
],

},

uiux: {
title: "UX/UI Case Study – Food Delivery App",

about:
  "Designed a modern food delivery application focusing on usability, intuitive navigation, and seamless user experience.",

tech: ["Figma", "User Research", "Wireframing", "Prototyping"],

duration: "1-2 Month",
role: "UI/UX Designer",
status: "Completed",

features: [
  "User-centered design process",
  "Low-fidelity wireframing",
  "Interactive Figma prototype",
  "Simple food ordering workflow",
  "Improved checkout experience",
  "Responsive mobile-first design"
],
  
image:
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",

screenshots: [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
],

},
};

export default function ProjectDetail() {
const { id } = useParams();
const navigate = useNavigate();

const project = projects[id as keyof typeof projects];

if (!project)
return ( <div className="text-white text-center mt-20">
Project Not Found </div>
);

return ( <div className="min-h-screen bg-background text-foreground p-10">

  <button
    onClick={() => navigate(-1)}
    className="mb-6 px-4 py-2 bg-primary rounded-lg"
  >
    ← Back
  </button>

  <div className="flex flex-col md:flex-row gap-10">

    <div className="md:w-1/2">
      <img
        src={project.image}
        className="rounded-xl w-full shadow-lg"
      />
    </div>

    <div className="md:w-1/2 space-y-4">
      <h1 className="text-4xl font-bold">
        {project.title}
      </h1>

      <p className="text-muted-foreground">
        {project.about}
      </p>

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

  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-3">
      About the Project
    </h2>

    <p className="text-muted-foreground">
      {project.about}
    </p>
  </div>

  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-3">
      Technologies Used
    </h2>

    <div className="flex flex-wrap gap-3">
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

  {/* Key Features */}
<div className="mt-8">
  <h2 className="text-2xl font-semibold mb-4">
    Key Features
  </h2>

  <ul className="space-y-3">
    {project.features.map(
      (feature: string, index: number) => (
        <li
          key={index}
          className="flex items-start gap-3"
        >
          <span className="text-orange-500 text-xl">
            •
          </span>

          <span className="text-muted-foreground">
            {feature}
          </span>
        </li>
      )
    )}
  </ul>
</div>
  
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-3">
      Project Details
    </h2>

    <p><strong>Duration:</strong> {project.duration}</p>
    <p><strong>Role:</strong> {project.role}</p>
    <p><strong>Status:</strong> {project.status}</p>
  </div>

  {id === "uiux" && (
    <div className="mt-10 space-y-6">

      <div>
        <h2 className="text-xl font-semibold">
          Problem Statement
        </h2>
        <p className="text-muted-foreground">
          Users faced difficulty browsing restaurants,
          placing orders quickly, and navigating through
          cluttered interfaces.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          User Research
        </h2>
        <p className="text-muted-foreground">
          Conducted surveys and competitor analysis to
          identify pain points such as slow checkout and
          confusing UI.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Wireframing
        </h2>
        <p className="text-muted-foreground">
          Created low-fidelity wireframes to define
          structure, layout, and user flow.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          Final Design
        </h2>
        <p className="text-muted-foreground">
          Designed high-fidelity UI screens in Figma
          with modern design principles.
        </p>
      </div>

    </div>
  )}

  <div className="mt-10">
    <h2 className="text-2xl font-semibold mb-4">
      Project Screenshots
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {project.screenshots.map(
        (img: string, index: number) => (
          <img
            key={index}
            src={img}
            className="rounded-lg shadow-lg hover:scale-105 transition"
          />
        )
      )}
    </div>
  </div>
</div>

);
}
