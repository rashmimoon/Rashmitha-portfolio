export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: "Virtual Internship" | "Industry Internship" | "Technical Training & Project";
  period: string;
  location: string;
  status: "Completed" | "Ongoing" | "Verified";
  responsibilities: string[];
  skillsGained: string[];
  certificateRefId?: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-novitech",
    role: "AI & Data Analytics Intern",
    organization: "NoviTech R&D Pvt. Ltd.",
    type: "Industry Internship",
    period: "Internship Track",
    location: "Tamil Nadu, India",
    status: "Completed",
    responsibilities: [
      "Worked on real-world AI and data analytics tasks with an emphasis on practical problem-solving.",
      "Engineered data pipelines for preprocessing, cleaning, and exploratory data analysis across structured datasets.",
      "Collaborated on practical model evaluations and technical documentation for analytics solutions."
    ],
    skillsGained: ["AI Engineering", "Data Analytics", "Python", "Problem Solving", "EDA"]
  },
  {
    id: "exp-google-aiml",
    role: "AICTE Virtual Intern — AI-ML (Google)",
    organization: "AICTE / EduSkills in collaboration with Google for Developers",
    type: "Virtual Internship",
    period: "Virtual Internship Track",
    location: "Remote / India",
    status: "Completed",
    responsibilities: [
      "Developed practical knowledge of Artificial Intelligence and Machine Learning using Python.",
      "Trained and evaluated machine learning and deep learning pipelines with TensorFlow.",
      "Engaged in technical cohort assessments covering model evaluation metrics, precision, and recall."
    ],
    skillsGained: ["Machine Learning", "TensorFlow", "Python", "Model Evaluation"],
    certificateRefId: "google-aicte-internship"
  },
  {
    id: "exp-siemens-altair",
    role: "AICTE Virtual Intern — Data Science Master (ALTAIR)",
    organization: "AICTE / EduSkills in partnership with ALTAIR",
    type: "Virtual Internship",
    period: "Virtual Internship Track",
    location: "Remote / India",
    status: "Completed",
    responsibilities: [
      "Gained practical exposure to data analytics, data preprocessing, and data visualization through project-based activities.",
      "Executed end-to-end data pipelines: outlier detection, feature selection, and predictive modeling.",
      "Delivered capstone analytics project solving engineering data problems."
    ],
    skillsGained: ["Data Science", "Data Preprocessing", "Data Visualization", "ALTAIR Analytics"],
    certificateRefId: "siemens-altair-datascience"
  },
  {
    id: "exp-python-fullstack",
    role: "Python Full Stack Development Trainee",
    organization: "EduSkills Foundation",
    type: "Technical Training & Project",
    period: "Training Program",
    location: "Remote / India",
    status: "Completed",
    responsibilities: [
      "Built foundational skills in Python-based web application development and backend fundamentals.",
      "Developed web applications integrating databases (MySQL, Oracle) with Flask and REST APIs.",
      "Applied version control best practices using Git and GitHub for collaborative development."
    ],
    skillsGained: ["Python", "Flask", "Backend Development", "MySQL", "REST APIs", "Git"],
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
    organization: "SRM Institute of Science and Technology",
    date: "2024",
    description: "Successfully built, tested, and deployed an end-to-end AI platform combining Scikit-Learn risk modeling, SHAP explainability, and ChromaDB RAG with public live Streamlit hosting.",
    tag: "Flagship Innovation"
  },
  {
    id: "ach-academic-srm",
    title: "Semester II CGPA: 8.50 in MCA GenAI Specialization",
    organization: "SRM Institute of Science and Technology",
    date: "Current Standing",
    description: "Achieved top academic performance (Semester I: 7.83, Semester II: 8.50) in advanced Generative AI and Machine Learning coursework.",
    tag: "Academic Excellence"
  },
  {
    id: "ach-bsc-degree",
    title: "B.Sc. Computer Science Distinction",
    organization: "S.T. Hindu College",
    date: "Undergraduate Degree",
    description: "Graduated with 7.37 CGPA with a strong foundation in Computer Science, C/C++, Python, and Relational Databases.",
    tag: "Degree Foundation"
  },
  {
    id: "ach-aicte-internship",
    title: "AICTE Virtual Internship Completions (Google & Altair)",
    organization: "AICTE EduSkills",
    date: "National Tracks",
    description: "Completed rigorous virtual internship programs certified by Google for Developers and ALTAIR.",
    tag: "Industry Certified"
  }
];
