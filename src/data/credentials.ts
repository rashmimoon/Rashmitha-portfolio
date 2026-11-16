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
  // --- VIRTUAL INTERNSHIPS & EXPERIENCE ---
  {
    id: "google-aiml-virtual-internship",
    title: "Google AI-ML Virtual Internship",
    issuer: "Google for Developers & AICTE / EduSkills",
    category: "experience",
    categoryLabel: "Internship Completion",
    issueDate: "2024",
    skills: ["TensorFlow", "Computer Vision", "Deep Learning", "Applied ML"],
    description: "National virtual internship track certified by AICTE and Google for Developers, focusing on practical machine learning pipelines, TensorFlow models, and algorithmic evaluations.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/google-aiml-internship.svg",
    documentUrl: "/credentials/certificates/google-ai-ml-virtual-internship.pdf",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "data-science-master-altair",
    title: "Data Science Master Virtual Internship",
    issuer: "AICTE / EduSkills in partnership with ALTAIR",
    category: "experience",
    categoryLabel: "Internship Completion",
    issueDate: "2024",
    skills: ["Data Analytics", "Data Preprocessing", "Data Visualization", "ALTAIR Analytics"],
    description: "Hands-on data science master internship involving data analytics, preprocessing routines, multi-variable visualization, and practical problem-solving using ALTAIR tools.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/siemens-altair-ds.svg",
    documentUrl: "/credentials/certificates/data-science-master-virtual-internship.pdf",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "python-fullstack-dev-internship",
    title: "Python Full Stack Development With Project",
    issuer: "EduSkills Foundation",
    category: "experience",
    categoryLabel: "Technical Training & Project",
    issueDate: "2023",
    skills: ["Python", "Flask", "Backend Development", "MySQL", "REST APIs", "Git"],
    description: "Full-stack Python engineering internship covering end-to-end web architectures, decoupled REST APIs, relational database integrations, and version control collaboration.",
    verificationUrl: "https://eduskillsfoundation.org/verify",
    thumbnailUrl: "/credentials/certificates/python-fullstack.svg",
    documentUrl: "/credentials/certificates/python-full-stack-development-with-project-virtual-internship.pdf",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },

  // --- DIGITAL BADGES ---
  {
    id: "aws-genai-badge",
    title: "AWS Gen AI Virtual Internship Digital Badge",
    issuer: "Amazon Web Services (AWS)",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified",
    skills: ["Generative AI", "Amazon Bedrock", "Foundation Models", "Prompt Engineering"],
    description: "Official AWS digital credential recognizing practical competence in Generative AI architectures, foundation model integration, and cloud AI development.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-gen-ai-virtualinternship-badge.png",
    documentUrl: "/credentials/badges/aws-gen-ai-virtualinternship-badge.png",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "aws-machine-learning-badge",
    title: "AWS Machine Learning & NLP Credential",
    issuer: "Amazon Web Services (AWS)",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified",
    skills: ["Natural Language Processing", "Machine Learning", "AWS SageMaker"],
    description: "Verified AWS credential recognizing natural language processing and applied machine learning techniques on cloud infrastructure.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-machine-learning-nlp-badge.png",
    documentUrl: "/credentials/certificates/aws-machine-learning-nlp.pdf",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "aws-serverless-badge",
    title: "AWS Serverless & Cloud Infrastructure Badge",
    issuer: "Amazon Web Services (AWS)",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified",
    skills: ["Serverless Architecture", "AWS Lambda", "Cloud Computing"],
    description: "Specialized AWS badge validating serverless computing patterns, event-driven design, and cloud scalability.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-serverless-badge.png",
    documentUrl: "/credentials/badges/aws-serverless-badge.png",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "oracle-cloud-badge",
    title: "Oracle Cloud Foundations Associate Badge",
    issuer: "Oracle University",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified",
    skills: ["Oracle Cloud Infrastructure", "Cloud Security", "Enterprise DB"],
    description: "Official Oracle Cloud badge recognizing certified foundational expertise in OCI services, IAM security, and enterprise database solutions.",
    verificationUrl: "https://education.oracle.com/",
    thumbnailUrl: "/credentials/badges/oracle-badge.jpg",
    documentUrl: "/credentials/certificates/oracle-certificate.png",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },
  {
    id: "cisco-cyber-security-badge",
    title: "Cisco Networking & Cyber Security Badge",
    issuer: "Cisco Networking Academy",
    category: "badge",
    categoryLabel: "Digital Credential / Badge",
    issueDate: "Verified",
    skills: ["Network Security", "Threat Detection", "Information Security"],
    description: "Official Cisco digital credential recognizing cyber security principles, defensive protocols, and safe network topologies.",
    verificationUrl: "https://www.netacad.com/",
    thumbnailUrl: "/credentials/badges/cisco-cyber-security-badge.png",
    documentUrl: "/credentials/certificates/cisco-cyber-security.pdf",
    isRedacted: false,
    statusBadge: "Verified Digital Badge"
  },

  // --- CERTIFICATES ---
  {
    id: "aws-academy-genai",
    title: "AWS Academy Graduate — Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    category: "certificate",
    categoryLabel: "GenAI Specialization",
    issueDate: "2024",
    skills: ["Generative AI", "Amazon Bedrock", "LLMs", "Prompt Engineering"],
    description: "Graduation certificate from AWS Academy verifying mastery of foundation models, transformer architectures, prompt structuring, and responsible AI guardrails.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-gen-ai-virtualinternship-badge.png",
    documentUrl: "/credentials/certificates/aws-academy-graduate---generative-ai-foundations.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "aws-cloud-engineer-cert",
    title: "AWS AI-Powered Cloud Engineer Virtual Internship",
    issuer: "Amazon Web Services (AWS)",
    category: "certificate",
    categoryLabel: "Cloud AI Credential",
    issueDate: "2024",
    skills: ["Cloud Architecture", "AWS Compute", "AI Services", "S3 & IAM"],
    description: "Comprehensive program covering AI-powered cloud applications, serverless computing, and enterprise cloud data pipelines.",
    verificationUrl: "https://aws.amazon.com/training/",
    thumbnailUrl: "/credentials/badges/aws-started-with-compute-badge.png",
    documentUrl: "/credentials/certificates/ai-powered-cloud-engineer-virtual-internship.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "oracle-certificate",
    title: "Oracle Cloud Infrastructure Certified Associate",
    issuer: "Oracle University",
    category: "certificate",
    categoryLabel: "Cloud Architecture Credential",
    issueDate: "Verified",
    skills: ["Oracle Cloud Infrastructure", "Compute & Networking", "Cloud Security"],
    description: "Certified qualification for Oracle Cloud Infrastructure core components, database integration, and high-availability architecture.",
    verificationUrl: "https://education.oracle.com/",
    thumbnailUrl: "/credentials/certificates/oracle-certificate.png",
    documentUrl: "/credentials/certificates/oracle-certificate.png",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "isro-certification",
    title: "ISRO / IIRS AI & Geospatial Machine Learning",
    issuer: "Indian Space Research Organisation (ISRO) / IIRS",
    category: "certificate",
    categoryLabel: "Specialized Technical Training",
    issueDate: "2024",
    skills: ["Geospatial AI", "Remote Sensing", "Satellite Classification", "Pattern Recognition"],
    description: "National outreach certification on applying AI and Machine Learning to earth observation, satellite telemetry, and spatial data analytics.",
    verificationUrl: "https://elearning.iirs.gov.in/",
    thumbnailUrl: "/credentials/certificates/isro-iirs-aiml.svg",
    documentUrl: "/credentials/certificates/isro-certification.pdf",
    isRedacted: false,
    statusBadge: "Completed Programme"
  },
  {
    id: "python-for-ai-cert",
    title: "Python for AI Certification",
    issuer: "Technical Training Partner",
    category: "certificate",
    categoryLabel: "Programming & AI",
    issueDate: "Verified",
    skills: ["Python", "NumPy", "Pandas", "Scikit-Learn", "Model Training"],
    description: "Specialized certification demonstrating applied Python programming in scientific computing, machine learning, and AI model workflows.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-for-ai.png",
    documentUrl: "/credentials/certificates/python-for-ai.png",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "quantum-qiskit-cert",
    title: "Quantum Computing with Qiskit & Advanced Algorithms",
    issuer: "Quantum Computing Track",
    category: "certificate",
    categoryLabel: "Advanced Computing",
    issueDate: "Completed",
    skills: ["Quantum Computing", "Qiskit", "Quantum Circuits", "Superposition"],
    description: "Specialized technical credential covering quantum circuit mechanics, entanglement, and executing quantum algorithms on IBM Qiskit simulators.",
    verificationUrl: "https://qiskit.org/",
    thumbnailUrl: "/credentials/certificates/quantum-computing-with-qiskit-and-advanced-algorithms.jpeg",
    documentUrl: "/credentials/certificates/quantum-computing-with-qiskit-and-advanced-algorithms.jpeg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "python-quantum-programming",
    title: "Python Programming for Quantum Computing",
    issuer: "Quantum Computing Institute",
    category: "certificate",
    categoryLabel: "Advanced Computing",
    issueDate: "Completed",
    skills: ["Quantum Linear Algebra", "Python", "Quantum Gate Operators"],
    description: "Practical programming certification focusing on formulating and executing quantum gate operations using Python mathematical libraries.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-programming-for-quantum-computing.jpeg",
    documentUrl: "/credentials/certificates/python-programming-for-quantum-computing.jpeg",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "saras-openai-genai",
    title: "Sara's OpenAI & Generative AI Specialization",
    issuer: "OpenAI Learning Track",
    category: "certificate",
    categoryLabel: "GenAI Specialization",
    issueDate: "Completed",
    skills: ["OpenAI API", "Generative AI", "Prompt Engineering", "JSON Mode"],
    description: "Specialized training on OpenAI models, prompt design patterns, context augmentation, and building intelligent LLM applications.",
    verificationUrl: "https://openai.com/",
    thumbnailUrl: "/credentials/badges/aws-gen-ai-virtualinternship-badge.png",
    documentUrl: "/credentials/certificates/saras-open-ai-and-gen-ai.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "infosys-genai-landscape",
    title: "Infosys Springboard — Generative AI Landscape",
    issuer: "Infosys Springboard",
    category: "certificate",
    categoryLabel: "GenAI Specialization",
    issueDate: "2024",
    skills: ["Generative AI", "LLM Ecosystem", "AI Ethics", "Enterprise AI"],
    description: "Industry-aligned certification exploring the generative AI ecosystem, foundation model architectures, multimodal systems, and enterprise adoption.",
    verificationUrl: "https://infyspringboard.onwingspan.com/",
    thumbnailUrl: "/credentials/badges/aws-trained-bladge.png",
    documentUrl: "/credentials/certificates/infosys-gen-ai-landscape.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "claude-ai-fluency",
    title: "AI Fluency: Framework and Foundation (Claude)",
    issuer: "Anthropic / Technical Fluency Track",
    category: "certificate",
    categoryLabel: "GenAI Specialization",
    issueDate: "2024",
    skills: ["Prompt Structuring", "Claude Architecture", "Context Windows", "System Prompts"],
    description: "Technical framework certification on foundation models, prompt engineering, XML tags structuring, and context retention with Claude models.",
    verificationUrl: "https://anthropic.com/",
    thumbnailUrl: "/credentials/badges/aws-badge.png",
    documentUrl: "/credentials/certificates/ai-fluncy-framwork-and-foundation-claude.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "uiux-design-cert",
    title: "UI/UX Design Certificate",
    issuer: "Design & UX Academy",
    category: "certificate",
    categoryLabel: "Design & Usability",
    issueDate: "Completed",
    skills: ["UI/UX Design", "Wireframing", "Figma", "User Journey Mapping"],
    description: "Principles of human-computer interaction, visual hierarchy, accessible color contrast, and designing user-friendly interfaces for intelligent software products.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/certificates/python-fullstack.svg",
    documentUrl: "/credentials/certificates/uiux-design-certificate.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },
  {
    id: "machine-learning-cert",
    title: "Machine Learning Master & Professional Certification",
    issuer: "AI / Data Science Academy",
    category: "certificate",
    categoryLabel: "Machine Learning",
    issueDate: "Completed",
    skills: ["Machine Learning", "Model Evaluation", "Scikit-Learn", "Predictive Analytics"],
    description: "Comprehensive qualification covering supervised and unsupervised learning algorithms, feature scaling, model validation, and metric evaluation.",
    verificationUrl: "https://github.com/rashmimoon",
    thumbnailUrl: "/credentials/badges/aws-machine-learning-badge.png",
    documentUrl: "/credentials/certificates/machine-learning-certificate.pdf",
    isRedacted: false,
    statusBadge: "Verified Credential"
  },

  // --- OFFICIAL INTERNSHIP SELECTION & OFFER LETTERS ---
  {
    id: "offer-google-aiml",
    title: "Google AI-ML Internship Selection Letter",
    issuer: "Google for Developers & AICTE EduSkills",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Official Selection",
    skills: ["AI/ML Engineering", "Virtual Internship Track", "Competitive Selection"],
    description: "Official selection and appointment notification for the national AI-ML virtual internship program. In compliance with recruiter privacy guidelines, sensitive private details and signatures are protected.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/google-ai-ml-offer-letter.pdf",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: Official candidate selection and appointment record. Private personal contact information and confidential identifiers are redacted in compliance with recruiter privacy standards."
  },
  {
    id: "offer-aws-genai",
    title: "AWS Generative AI Internship Selection Letter",
    issuer: "Amazon Web Services (AWS) & EduSkills",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Official Selection",
    skills: ["Generative AI", "Cloud AI", "Bedrock Integration"],
    description: "Official appointment and selection record for the AWS Generative AI virtual internship track. Preserved in verified format.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/aws-gen-ai-offerletter.pdf",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: Official candidate selection record. Sensitive personal identifiers are redacted for public portfolio display."
  },
  {
    id: "offer-aws-cloud-engineer",
    title: "AWS AI-Powered Cloud Engineer Offer Letter",
    issuer: "AWS & AICTE EduSkills",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Official Selection",
    skills: ["Cloud Engineering", "AI Integration", "Serverless Systems"],
    description: "Official selection letter for the AI-Powered Cloud Engineer technical track.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/aws-ai-powered-cloud-engineer-offerletter.pdf",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: Official selection record. Sensitive identifiers and signatures are redacted."
  },
  {
    id: "offer-ai-engineer",
    title: "AI Engineer Internship Appointment Offer",
    issuer: "Technology Partner Organization",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Official Selection",
    skills: ["AI Engineering", "Machine Learning", "Software Development"],
    description: "Official internship appointment and role confirmation for AI Engineering responsibilities.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/ai-engineer-offer-letter.pdf",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: Official appointment offer. Confidential terms, compensation, and personal contact info are redacted."
  },
  {
    id: "offer-python-fullstack",
    title: "Python Full Stack Development Offer Letter",
    issuer: "EduSkills Technical Academy",
    category: "offer-letter",
    categoryLabel: "Internship Offer / Selection",
    issueDate: "Official Selection",
    skills: ["Full Stack Python", "Web Development", "Backend Architecture"],
    description: "Official selection letter for Python Full Stack Development with project internship track.",
    thumbnailUrl: "/credentials/certificates/internship-offer-redacted.svg",
    documentUrl: "/credentials/certificates/python-fullstack-development-offer-letter.pdf",
    isRedacted: true,
    statusBadge: "Official Selection / Offer",
    privacyNote: "Notice: Official candidate selection record. Private contact information is protected."
  }
];
