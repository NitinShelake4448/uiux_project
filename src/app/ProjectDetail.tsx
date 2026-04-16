import { useParams } from "react-router-dom";

const projects: any = {
  election: {
    title: "Machine Learning Election Prediction",
    about:
      "Developed a machine learning-based system to predict election outcomes using historical voting data, demographic information, and regional patterns. The project includes data cleaning, feature engineering, and model training using multiple algorithms such as Logistic Regression, Decision Trees, and Random Forest. Comparative analysis was performed to select the best-performing model. The system highlights key factors influencing election results and provides data-driven insights for better decision-making.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
  },
  ocr: {
    title: "OCR-Based Answer Checking System",
    about:
      "Built an automated answer evaluation system that uses Optical Character Recognition (OCR) to extract text from handwritten or printed answer sheets. The extracted text is processed and compared with predefined correct answers using similarity matching and NLP techniques. The system helps reduce manual effort, improves evaluation speed, and ensures consistent grading. It is designed to scale for educational institutions and online examination systems.",
    tech: ["Python", "Tesseract", "OpenCV", "PIL"],
  },
  nlp: {
    title: "NLP Text Classification",
    about:
      "Implemented a natural language processing system to classify text documents into multiple categories using deep learning techniques. The workflow includes text preprocessing steps such as tokenization, stopword removal, and stemming, followed by feature extraction and model training using TensorFlow and Keras. The model can be applied to real-world use cases like spam detection, sentiment analysis, and document organization.",
    tech: ["Python", "TensorFlow", "Keras", "NLTK"],
  },
  svm: {
    title: "SVM Implementation",
    about:
      "Developed a Support Vector Machine (SVM) algorithm from scratch to understand its mathematical foundations and working principles. The implementation includes margin maximization, kernel functions (linear and non-linear), and optimization techniques. The project also visualizes decision boundaries and supports classification tasks, providing a deeper understanding of how SVM models operate internally.",
    tech: ["Python", "NumPy", "Matplotlib", "SciPy"],
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) return <div>Project Not Found</div>;

  return (
    <div style={{ padding: "40px" }}>
      <h1>{project.title}</h1>

      <h3>About the Project</h3>
      <p>{project.about}</p>

      <h3>Technologies Used</h3>
      <div>
        {project.tech.map((t: string, i: number) => (
          <span key={i} style={{ marginRight: "10px" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
