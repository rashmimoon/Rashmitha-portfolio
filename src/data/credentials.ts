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
    id: "google-aicte-internship",
    title: "Google AI-ML Virtual Internship",
    issuer: "Google for Developers & AICTE / EduSkills",
    category: "experience",
    categoryLabel: "Internship Completion",
    issueDate: "2024",
    skills: ["TensorFlow", "Computer Vision", "Deep Learning", "Applied ML"],
    description: "Intensive government and industry recognized virtual internship focusing on real-world Machine Learning pipelines, exploratory data analysis, and deep neural network deployment.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/google-aiml-internship.svg",
    documentUrl: "/credentials/certificates/google-aiml-internship.svg",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "siemens-altair-datascience",
    title: "Data Science Master Virtual Internship",
    issuer: "Siemens / Altair (via AICTE EduSkills)",
    category: "certificate",
    categoryLabel: "Course / Training Completion",
    issueDate: "2024",
    skills: ["Data Science", "Predictive Analytics", "Python", "Statistical Modeling"],
    description: "Hands-on data science master internship involving data engineering, regression analysis, feature selection techniques, and industrial analytics workflows.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/siemens-altair-ds.svg",
    documentUrl: "/credentials/certificates/siemens-altair-ds.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "aws-generative-ai-badge",
    title: "AWS Generative AI Foundations & LLM Concepts",
    issuer: "Amazon Web Services (AWS)",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "2024",
    skills: ["Generative AI", "Amazon Bedrock", "Prompt Engineering", "Cloud AI"],
    description: "Verified digital badge recognizing foundational comprehension of Generative AI principles, foundation models on Amazon Bedrock, fine-tuning approaches, and responsible AI guardrails.",
    verificationUrl: "https://www.credly.com/",
    thumbnailUrl: "/credentials/badges/aws-genai-badge.svg",
    documentUrl: "/credentials/badges/aws-genai-badge.svg",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "aws-cloud-engineer",
    title: "AWS AI-Powered Cloud Engineer Programme",
    issuer: "Amazon Web Services Training & Certification",
    category: "certificate",
    categoryLabel: "Course / Training Completion",
    issueDate: "2024",
    skills: ["Cloud Computing", "AWS S3 & IAM", "Serverless Architecture", "AI Integration"],
    description: "Comprehensive curriculum covering cloud architecture fundamentals, scalable serverless AI service integrations, and robust cloud data engineering pipelines.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/certificates/aws-cloud-engineer.svg",
    documentUrl: "/credentials/certificates/aws-cloud-engineer.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "iirs-isro-geodata",
    title: "AI/ML for Geodata Analysis & Spatial Remote Sensing",
    issuer: "IIRS / ISRO (Indian Space Research Organisation)",
    category: "certificate",
    categoryLabel: "Specialized Technical Training",
    issueDate: "2024",
    skills: ["Spatial AI", "Geodata Analysis", "Machine Learning", "Remote Sensing"],
    description: "National level outreach programme on applying machine learning and pattern classification algorithms to satellite imagery, multispectral data, and geospatial coordinates.",
    verificationUrl: "https://elearning.iirs.gov.in/",
    thumbnailUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    documentUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "python-fullstack-dev",
    title: "Python Full Stack Development & Software Engineering",
    issuer: "Technical Academy / Certification Partner",
    category: "certificate",
    categoryLabel: "Course / Training Completion",
    issueDate: "2023",
    skills: ["Python", "FastAPI", "PostgreSQL", "Frontend Architecture", "REST APIs"],
    description: "Comprehensive training and capstone project delivery focusing on scalable backend architecture, relational database schema design, and asynchronous API endpoints.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-fullstack.svg",
    documentUrl: "/credentials/certificates/python-fullstack.svg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "internship-offer-letter",
    title: "Technical AI / Data Internship Selection Offer",
    issuer: "Technology Partner Organization",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "2024",
    skills: ["AI Engineering", "Software Collaboration", "Agile Sprints"],
    description: "Official internship selection and appointment letter. Presented in compliance with privacy guidelines: personal contact details, compensation clauses, and confidential internal identifiers are strictly redacted.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/internship-offer-redacted.svg",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: In accordance with recruiter privacy specifications, all private phone numbers, home addresses, stipend details, and institutional registration numbers have been redacted for public display."
  }
];
