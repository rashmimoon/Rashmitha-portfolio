export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Virtual Internship" | "Technical Training & Project" | "Academic Project Research";
  period: string;
  location: string;
  status: "Completed" | "Ongoing" | "Verified";
  responsibilities: string[];
  skillsGained: string[];
  certificateRefId?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-google-aiml",
    role: "Google AI-ML Virtual Intern",
    organization: "AICTE / EduSkills Foundation in collaboration with Google for Developers",
    type: "Virtual Internship",
    period: "2024",
    location: "Remote / India",
    status: "Completed",
    responsibilities: [
      "Completed structured coursework and problem sets on Machine Learning fundamentals and deep neural networks.",
      "Trained computer vision and supervised learning models using TensorFlow and Python scikit-learn.",
      "Conducted exploratory data analysis, data normalization, and feature correlation evaluations on standard datasets.",
      "Engaged in technical cohort reviews and passed cumulative assessments on ML model performance evaluation."
    ],
    skillsGained: ["TensorFlow", "Scikit-Learn", "Model Evaluation", "Computer Vision", "EDA"],
    certificateRefId: "google-aicte-internship"
  },
  {
    id: "exp-siemens-altair",
    role: "Data Science Master Virtual Intern",
    organization: "Siemens / Altair (via AICTE EduSkills)",
    type: "Virtual Internship",
    period: "2024",
    location: "Remote / India",
    status: "Completed",
    responsibilities: [
      "Explored industrial data science applications, predictive modeling, and engineering data analytics.",
      "Executed end-to-end data pipelines: outlier detection, missing value imputation, regression modeling, and performance metrics.",
      "Utilized Altair analytics tools alongside Python scripting for interactive visualization of multi-variable trends.",
      "Submitted final capstone project demonstrating structured data science problem-solving methodology."
    ],
    skillsGained: ["Data Science", "Python Analytics", "Predictive Modeling", "Feature Engineering"],
    certificateRefId: "siemens-altair-datascience"
  },
  {
    id: "exp-aws-genai",
    role: "AWS Generative AI & Cloud Trainee",
    organization: "Amazon Web Services (AWS)",
    type: "Technical Training & Project",
    period: "2024",
    location: "Online / Self-paced Technical Track",
    status: "Completed",
    responsibilities: [
      "Studied foundation models, tokenization, transformer architectures, and generative AI workflow lifecycles.",
      "Analyzed cloud-based deployment patterns on Amazon Bedrock, exploring model evaluation, prompt structuring, and cost trade-offs.",
      "Investigated vector embeddings and semantic search integration patterns with serverless AWS architectures.",
      "Reviewed responsible AI guidelines, data privacy controls, and guardrail mechanisms for enterprise LLM apps."
    ],
    skillsGained: ["Generative AI Concepts", "Amazon Bedrock", "Prompt Engineering", "Cloud Fundamentals"],
    certificateRefId: "aws-generative-ai-badge"
  },
  {
    id: "exp-iirs-isro",
    role: "AI/ML for Geodata Analysis Trainee",
    organization: "Indian Institute of Remote Sensing (IIRS) / ISRO",
    type: "Technical Training & Project",
    period: "2024",
    location: "Online Outreach Programme",
    status: "Completed",
    responsibilities: [
      "Participated in the national IIRS-ISRO outreach training on applying artificial intelligence and machine learning to earth observation data.",
      "Analyzed spatial classification techniques for satellite imagery and multi-spectral raster datasets.",
      "Gained deep appreciation for real-world high-volume data challenges and spatial data preparation pipelines."
    ],
    skillsGained: ["Geospatial AI", "Remote Sensing Data", "Image Classification", "Pattern Recognition"],
    certificateRefId: "iirs-isro-geodata"
  },
  {
    id: "exp-python-fullstack",
    role: "Python Full Stack Software Development Trainee",
    organization: "Professional Training Academy",
    type: "Technical Training & Project",
    period: "2023",
    location: "Karnataka, India",
    status: "Completed",
    responsibilities: [
      "Architected responsive web interfaces and decoupled backend REST APIs using Python frameworks and SQLite/PostgreSQL.",
      "Implemented user session management, asynchronous task workflows, and database indexing for rapid queries.",
      "Adopted strict version control hygiene using Git and GitHub with feature branching and code reviews."
    ],
    skillsGained: ["Python", "FastAPI / Flask", "SQL", "Git / GitHub", "REST APIs"],
    certificateRefId: "python-fullstack-dev"
  }
];

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  tag: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-studentsense",
    title: "Engineered StudentSense AI Live Application",
    organization: "Independent Capstone Development",
    date: "2024",
    description: "Successfully built, tested, and deployed an end-to-end AI platform combining Scikit-Learn risk modeling, SHAP explainability, and ChromaDB RAG with public live Streamlit hosting.",
    tag: "Flagship Innovation"
  },
  {
    id: "ach-academic",
    title: "Consistent Academic Distinction in MCA",
    organization: "Master of Computer Applications Programme",
    date: "2024 — Present",
    description: "Maintained distinction standing across advanced coursework in Machine Learning, Algorithms, Data Science, and Software Architecture.",
    tag: "Academic Excellence"
  },
  {
    id: "ach-aicte-internship",
    title: "National Virtual Internship Selection & Completion",
    organization: "AICTE EduSkills & Industry Partners",
    date: "2024",
    description: "Selected for prestigious national technical internship tracks supported by Google and Siemens/Altair, completing all rigorous technical milestones.",
    tag: "Competitive Selection"
  },
  {
    id: "ach-isro-outreach",
    title: "ISRO / IIRS Advanced Technology Programme Participant",
    organization: "Indian Space Research Organisation (IIRS)",
    date: "2024",
    description: "Completed specialized training on AI/ML for Geodata Analysis conducted by leading scientists at IIRS/ISRO.",
    tag: "National Recognition"
  }
];
