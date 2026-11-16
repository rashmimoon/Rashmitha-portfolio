export interface ProfileData {
  name: string;
  role: string;
  headline: string;
  subheadline: string;
  summary: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatarUrl: string;
  education: {
    degree: string;
    institution: string;
    period: string;
    grade?: string;
    highlights: string[];
  }[];
  strengths: {
    title: string;
    description: string;
    evidence: string;
  }[];
}

export const profileData: ProfileData = {
  name: "Rashmitha C",
  role: "MCA Student (GenAI Specialization) | AI/ML Developer",
  headline: "Building intelligent applications with Generative AI, Machine Learning and RAG.",
  subheadline: "Specializing in Generative AI at SRM Institute of Science and Technology.",
  summary: "MCA student specializing in Generative AI at SRM Institute of Science and Technology. Passionate about engineering intelligent systems with machine learning, explainability (SHAP/XAI), and context-aware retrieval-augmented generation. Supported by hands-on academic projects (StudentSense AI), virtual internships with Google and Altair, and practical Python full-stack development.",
  location: "Chengalpattu, Tamil Nadu, India",
  email: "rashmimoon2005@gmail.com",
  github: "https://github.com/rashmimoon",
  linkedin: "https://linkedin.com/in/rashmitha-",
  resumeUrl: "/resume/resume.pdf",
  avatarUrl: "/images/profile-photo.png",
  education: [
    {
      degree: "Master of Computer Applications (MCA) — Generative AI Specialization",
      institution: "SRM Institute of Science and Technology",
      period: "2024 — 2027 (Currently Pursuing)",
      grade: "Semester I CGPA: 7.83 | Semester II CGPA: 8.50",
      highlights: [
        "Core curriculum: Generative AI, Machine Learning, TensorFlow, Natural Language Processing, and LLM Application Concepts.",
        "Built flagship project StudentSense AI combining ML risk classification, SHAP explanations, and ChromaDB RAG.",
        "Strong focus on context-aware information retrieval and scalable AI web applications."
      ]
    },
    {
      degree: "Bachelor of Science (B.Sc.) in Computer Science",
      institution: "S.T. Hindu College",
      period: "Completed",
      grade: "CGPA: 7.37",
      highlights: [
        "Rigorous foundation in Computer Science principles, Python, C/C++, Data Structures, and Relational Databases (MySQL, Oracle).",
        "Engineered web applications and text pattern recognition models using Python and regex.",
        "Active technical contributor in computing seminars and collegiate coding competitions."
      ]
    }
  ],
  strengths: [
    {
      title: "Grounded LLM & RAG Systems",
      description: "Architecture of vector retrieval pipelines that mitigate hallucinations through source citations and context grounding.",
      evidence: "Implemented StudentSense AI RAG advisor using ChromaDB embeddings and dynamic prompt construction."
    },
    {
      title: "Explainable Machine Learning (XAI)",
      description: "Commitment to model transparency rather than treating ML models as black boxes.",
      evidence: "Integrated SHAP (SHapley Additive exPlanations) in student risk prediction to explain feature attribution clearly to educators."
    },
    {
      title: "Full-Stack AI Application Development",
      description: "Bridging the gap between raw Python notebooks and intuitive, production-ready web interfaces.",
      evidence: "Deployed interactive Streamlit and Flask applications with responsive UX, error boundaries, and REST API endpoints."
    }
  ]
};
