export type CredentialType = 
  | "certificate" 
  | "badge" 
  | "offer-letter" 
  | "experience";

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  category: CredentialType;
  categoryLabel: string;
  issueDate: string;
  expiryDate?: string;
  skills: string[];
  description: string;
  verificationUrl?: string;
  thumbnailUrl: string;
  documentUrl?: string;
  isRedacted: boolean;
  statusBadge: "Verified Credential" | "Completed Programme" | "Official Selection / Offer" | "Verified Digital Badge";
  privacyNote?: string;
}

export const credentialsData: CredentialItem[] = [
  {
    id: "aws-academy-genai",
    title: "AWS Academy Graduate — Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified Credential",
    skills: ["Generative AI", "Amazon Bedrock", "Foundation Models", "Prompt Engineering"],
    description: "Verified AWS credential recognizing comprehensive understanding of Generative AI principles, foundation model architectures on AWS, prompt design, and cloud AI workloads.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-genai-badge.svg",
    documentUrl: "/credentials/badges/aws-genai-badge.svg",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "oracle-cloud-foundations",
    title: "Oracle Cloud Foundations Associate",
    issuer: "Oracle University",
    category: "certificate",
    categoryLabel: "Cloud Architecture Credential",
    issueDate: "Verified",
    skills: ["Oracle Cloud Infrastructure", "Cloud Security", "Compute & Networking", "Databases"],
    description: "Official Oracle Cloud certification validating core knowledge of OCI architecture, identity and access management, cloud storage, security, and enterprise database services.",
    verificationUrl: "https://education.oracle.com/",
    thumbnailUrl: "/credentials/certificates/aws-cloud-engineer.svg",
    documentUrl: "/credentials/certificates/aws-cloud-engineer.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "aicte-google-internship",
    title: "AICTE Virtual Internship — AI-ML (Google)",
    issuer: "AICTE / EduSkills & Google for Developers",
    category: "experience",
    categoryLabel: "Internship Completion",
    issueDate: "Completed Track",
    skills: ["Artificial Intelligence", "Machine Learning", "Python", "TensorFlow"],
    description: "National virtual internship track certified by AICTE and Google for Developers, focusing on practical machine learning pipelines, TensorFlow models, and algorithmic evaluations.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/google-aiml-internship.svg",
    documentUrl: "/credentials/certificates/google-aiml-internship.svg",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "aicte-altair-ds",
    title: "AICTE Virtual Internship — Data Science Master (ALTAIR)",
    issuer: "AICTE / EduSkills & ALTAIR",
    category: "experience",
    categoryLabel: "Internship Completion",
    issueDate: "Completed Track",
    skills: ["Data Analytics", "Data Preprocessing", "Data Visualization", "Predictive Modeling"],
    description: "Hands-on data science master internship involving data analytics, preprocessing routines, multi-variable visualization, and practical problem-solving using ALTAIR tools.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/siemens-altair-ds.svg",
    documentUrl: "/credentials/certificates/siemens-altair-ds.svg",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "python-for-ai",
    title: "Python for AI Certification",
    issuer: "Technical Certification Partner",
    category: "certificate",
    categoryLabel: "Course / Training Completion",
    issueDate: "Verified",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Data Manipulation"],
    description: "Specialized certification demonstrating proficiency in Python programming for artificial intelligence workflows, scientific computing, and statistical data wrangling.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-fullstack.svg",
    documentUrl: "/credentials/certificates/python-fullstack.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "quantum-computing-qiskit",
    title: "Quantum Computing with Qiskit",
    issuer: "Quantum Technology & Computing Track",
    category: "certificate",
    categoryLabel: "Advanced Computing Credential",
    issueDate: "Completed",
    skills: ["Quantum Computing", "Qiskit", "Quantum Circuits", "Python"],
    description: "Rigorous curriculum covering quantum algorithms, qubit manipulation, superposition, entanglement, and quantum circuit simulation with IBM Qiskit.",
    verificationUrl: "https://qiskit.org/",
    thumbnailUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    documentUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "python-quantum-programming",
    title: "Python Programming for Quantum Computing",
    issuer: "Computing Academy",
    category: "certificate",
    categoryLabel: "Course / Training Completion",
    issueDate: "Completed",
    skills: ["Quantum Algorithms", "Python Linear Algebra", "Quantum Gates"],
    description: "Applied quantum programming focusing on translating matrix operations and mathematical models into executable quantum algorithms using Python.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    documentUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "saras-openai-genai",
    title: "Sara's OpenAI & Generative AI",
    issuer: "OpenAI Learning Track",
    category: "certificate",
    categoryLabel: "GenAI Specialization",
    issueDate: "Completed",
    skills: ["OpenAI API", "Generative AI", "Prompt Engineering", "LLM Integration"],
    description: "Specialized training in architecting applications using OpenAI foundation models, system prompting strategies, API function calling, and generative workflows.",
    verificationUrl: "https://openai.com/",
    thumbnailUrl: "/credentials/badges/aws-genai-badge.svg",
    documentUrl: "/credentials/badges/aws-genai-badge.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "ui-ux-designing",
    title: "UI/UX Designing Fundamentals",
    issuer: "Design & UX Track",
    category: "certificate",
    categoryLabel: "Design & Usability",
    issueDate: "Completed",
    skills: ["UI/UX Design", "Wireframing", "Responsive Design", "Accessibility"],
    description: "Principles of human-computer interaction, visual hierarchy, accessible color contrast, and designing user-friendly interfaces for intelligent software products.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-fullstack.svg",
    documentUrl: "/credentials/certificates/python-fullstack.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "novitech-offer-letter",
    title: "AI & Data Analytics Internship Appointment",
    issuer: "NoviTech R&D Pvt. Ltd.",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Selection Offer",
    skills: ["AI Engineering", "Data Analytics", "Practical Problem Solving"],
    description: "Official internship appointment and selection record for AI and data analytics tasks. In compliance with recruiter privacy guidelines, personal phone numbers, addresses, and compensation terms are strictly redacted.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/internship-offer-redacted.svg",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: In accordance with recruiter privacy specifications, all private phone numbers, personal addresses, stipend amounts, and registration numbers are redacted for public display."
  }
];
