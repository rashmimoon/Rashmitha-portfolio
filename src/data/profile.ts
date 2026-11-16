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
  role: "MCA Student | Generative AI & AI/ML Developer",
  headline: "Building intelligent applications with Generative AI, Machine Learning and RAG.",
  subheadline: "Focused on explainable AI, vector retrieval systems, and practical agentic workflows.",
  summary: "I'm an MCA student passionate about engineering practical AI solutions. I design and build projects combining machine learning, model explainability (SHAP/XAI), and generative AI with retrieval-augmented generation. Constantly strengthening my software engineering and LLM development skills through hands-on architectures and verified implementations.",
  location: "India",
  email: "rashmitha.c.dev@gmail.com",
  github: "https://github.com/rashmimoon",
  linkedin: "https://linkedin.com/in/rashmitha-c",
  resumeUrl: "/resume/resume.pdf",
  avatarUrl: "/images/profile-photo.png",
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Affiliated University / Institute",
      period: "2024 — Present",
      grade: "First Class with Distinction",
      highlights: [
        "Core focus on Advanced Machine Learning, Natural Language Processing, and Cloud Architecture.",
        "Engineered StudentSense AI as an end-to-end intelligent prediction and recommendation system.",
        "Active member of AI/ML student symposiums and technical coding forums."
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA) / B.Sc Computer Science",
      institution: "State University / College",
      period: "2021 — 2024",
      grade: "Distinction",
      highlights: [
        "Strong foundation in Object-Oriented Programming, Data Structures, Algorithms, and Relational Databases.",
        "Completed capstone projects in Python full-stack software development and exploratory data analysis.",
        "Consistently recognized for academic consistency and practical laboratory excellence."
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
      evidence: "Deployed interactive Streamlit and Next.js applications with responsive UX, error boundaries, and API integration."
    }
  ]
};
