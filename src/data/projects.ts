export interface ProjectArchitectureStep {
  step: number;
  title: string;
  description: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  shortSummary: string;
  category: "Flagship GenAI & ML" | "RAG & LLM Systems" | "AI Agents & NLP";
  featured: boolean;
  status: "Completed & Deployed" | "Completed Prototype" | "Research & Development";
  githubUrl: string;
  demoUrl?: string;
  architectureDiagramUrl?: string;
  coverImageUrl?: string;
  technologies: string[];
  problem: string;
  solution: string;
  myContribution: string[];
  architecture: {
    overview: string;
    steps: ProjectArchitectureStep[];
  };
  implementationDetails: {
    title: string;
    description: string;
  }[];
  evaluation: {
    methodology: string;
    observations: string[];
    disclaimer: string;
  };
  limitationsAndFutureWork: string[];
}

export const projectsData: ProjectCaseStudy[] = [
  {
    slug: "studentsense-ai",
    title: "StudentSense AI",
    tagline: "Student Behaviour Prediction & Personalized AI Recommendation System",
    shortSummary: "Flagship dual-engine application combining Machine Learning risk classification, Explainable AI (SHAP) feature attribution, and a RAG-powered Generative AI advisor for academic mentors.",
    category: "Flagship GenAI & ML",
    featured: true,
    status: "Completed & Deployed",
    githubUrl: "https://github.com/rashmimoon/Studensense-AI",
    demoUrl: "https://studensense-ai-kbye6d7burrtgqdyxpz45d7.streamlit.app/",
    architectureDiagramUrl: "/projects/studentsense/architecture.svg",
    coverImageUrl: "/projects/studentsense/dashboard.svg",
    technologies: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Explainable AI (SHAP)",
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB Vector Store",
      "Large Language Models (LLMs)",
      "Streamlit Cloud",
      "Pandas & NumPy"
    ],
    problem: "Academic counselors and university mentors frequently struggle to identify students at risk of academic probation or disengagement before semester exams. Existing management systems either provide raw scores without predictive capability or issue generic alerts that don't explain why a student is struggling or what specific pedagogical interventions should be taken.",
    solution: "StudentSense AI bridges predictive classification with interpretable narrative guidance. An ML classifier predicts the student's academic risk tier. A SHAP explainer surfaces exact feature contributions (such as attendance drops, submission delays, or quiz test trends). Finally, a RAG pipeline indexes academic counseling playbooks into ChromaDB, grounding an LLM to generate targeted, empathetic, and actionable guidance for the mentor.",
    myContribution: [
      "Engineered the full system architecture from raw data preprocessing and ML model training to cloud deployment.",
      "Trained and evaluated classification models (Random Forest, Logistic Regression, XGBoost) on student behavioral and academic indicators.",
      "Integrated SHAP (SHapley Additive exPlanations) to compute local attribution values, ensuring every single prediction is fully interpretable rather than a black box.",
      "Constructed a RAG pipeline utilizing vector embeddings stored in ChromaDB, enabling the LLM to ground its guidance in verified pedagogical literature.",
      "Implemented prompt templates enforcing ethical guardrails, tone sensitivity, and the explicit disclaimer that feature attribution does not equal causation.",
      "Built and deployed the interactive multi-view dashboard using Streamlit, featuring real-time risk simulation, SHAP force plots, and instant mentor reports."
    ],
    architecture: {
      overview: "The system functions as a tightly coupled three-tier pipeline: Predictive Modeling -> Explainability -> Retrieval-Augmented Generation.",
      steps: [
        {
          step: 1,
          title: "Data Ingestion & Feature Preprocessing",
          description: "Student behavioral signals (attendance percentages, assignment completion rates, internal test marks, forum engagement) are cleaned, normalized, and transformed into numeric feature vectors."
        },
        {
          step: 2,
          title: "Predictive ML Inference",
          description: "The trained classifier computes the probability distribution across risk tiers (Low Risk, Moderate Risk, High Risk) with calibrated decision boundaries."
        },
        {
          step: 3,
          title: "SHAP Explainability Layer",
          description: "TreeExplainer calculates exact SHAP values for the given student, highlighting top positive and negative contributors to the risk score."
        },
        {
          step: 4,
          title: "Semantic Vector Retrieval (RAG)",
          description: "The top negative risk drivers are converted into query embeddings and matched against ChromaDB's index of pedagogical intervention playbooks using cosine similarity."
        },
        {
          step: 5,
          title: "Grounded LLM Synthesis & UI Display",
          description: "The student profile, SHAP attribution findings, and retrieved intervention docs are injected into a structured prompt, producing an actionable mentor briefing with clear disclaimers."
        }
      ]
    },
    implementationDetails: [
      {
        title: "Model Pipeline & Preprocessing",
        description: "Implemented Scikit-Learn pipelines handling missing value imputation, standard scaling, and categorical encoding to guarantee deterministic evaluation."
      },
      {
        title: "Local Feature Attribution with SHAP",
        description: "Rendered interactive SHAP summary plots and individual waterfall charts within Streamlit, allowing counselors to see exactly how each behavioral factor shifted the student's probability."
      },
      {
        title: "ChromaDB Vector Retrieval",
        description: "Indexed structured counseling manuals into 500-token chunks with 50-token overlap, tagging metadata by category (attendance, study habits, mental wellness) for precision filtering."
      },
      {
        title: "Responsible Prompt Engineering",
        description: "Prompt constraints strictly mandate supportive phrasing, prohibit judgmental terminology, and enforce that recommendations are suggestions for educator review rather than automated mandates."
      }
    ],
    evaluation: {
      methodology: "Evaluated classification accuracy, precision, recall, and ROC-AUC across stratified train-test splits. Tested RAG retrieval precision and faithfulness by validating that generated suggestions directly match retrieved counseling protocols.",
      observations: [
        "Ensemble tree models demonstrated superior performance in capturing non-linear interactions between attendance dips and test score trajectories.",
        "SHAP explanations confirmed feature alignment with established academic indicators, providing intuitive diagnostic validation.",
        "Retrieval latency was optimized to sub-second response times using local ChromaDB vector indexing.",
        "Grounded generation eliminated hallucinated policy advice by constraining LLM generation to retrieved context documents."
      ],
      disclaimer: "Feature attribution explains which inputs influenced the model's prediction for this specific data sample. It provides correlational attribution and should not be interpreted as definitive proof of real-world causation without educator assessment."
    },
    limitationsAndFutureWork: [
      "Current evaluation was conducted on benchmarked and synthetic student datasets; plans include validation on real-world anonymized institutional records.",
      "Expanding the RAG knowledge base to incorporate personalized regional language counseling guidelines.",
      "Developing a longitudinal tracking feature to evaluate the efficacy of recommended interventions across subsequent academic terms."
    ]
  },
  {
    slug: "rag-document-assistant",
    title: "Enterprise RAG Document Intelligence",
    tagline: "Semantic PDF Ingestion, Vector Search & Grounded Citation Engine",
    shortSummary: "Context-grounded question answering system that ingests long-form technical PDFs, applies semantic chunking, and yields answers with verifiable page-level citations.",
    category: "RAG & LLM Systems",
    featured: true,
    status: "Completed Prototype",
    githubUrl: "https://github.com/rashmimoon/Studensense-AI",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence-Transformers",
      "OpenAI / Gemini API",
      "PyPDF / pdfplumber",
      "Streamlit"
    ],
    problem: "Large technical documentation, syllabus guidelines, and research papers are difficult to search using simple keyword lookups. Traditional LLM Q&A without retrieval suffers from hallucinations and fails to provide verifiable page citations.",
    solution: "Engineered an end-to-end RAG architecture with recursive character splitting, dense embeddings, vector indexing, and grounded context injection that highlights exact source excerpts for every answer.",
    myContribution: [
      "Configured recursive chunking with dynamic overlap to maintain semantic continuity across section headers.",
      "Built vector storage index with metadata filters tracking document name, chapter, and page number.",
      "Implemented source citation rendering in the user interface to enable rapid user verification.",
      "Benchmarked retrieval recall across varied chunk sizes (256, 512, and 1024 tokens)."
    ],
    architecture: {
      overview: "Document Ingestion -> Text Extraction -> Recursive Chunking -> Embeddings Computation -> Vector Store -> Query Matching -> Grounded Prompt -> Cited Generation.",
      steps: [
        {
          step: 1,
          title: "PDF Parsing",
          description: "Extracts text while preserving headers and page metadata."
        },
        {
          step: 2,
          title: "Semantic Chunking",
          description: "Splits text using sentence boundaries and 500-token chunks with 75-token overlap."
        },
        {
          step: 3,
          title: "Dense Vector Embedding",
          description: "Generates normalized vectors using Sentence-Transformers / text-embedding-3."
        },
        {
          step: 4,
          title: "Cosine Similarity Retrieval",
          description: "Retrieves top-k most relevant chunks based on query similarity."
        },
        {
          step: 5,
          title: "Synthesized Answer with Citations",
          description: "Generates concise answer referencing source documents and page numbers."
        }
      ]
    },
    implementationDetails: [
      {
        title: "Chunking Trade-off Analysis",
        description: "Tested small vs large chunking windows to determine optimal context preservation vs retrieval noise."
      },
      {
        title: "Strict Hallucination Prevention",
        description: "Instructed the LLM to output 'Information not present in provided context' whenever retrieval confidence fell below threshold."
      }
    ],
    evaluation: {
      methodology: "Tested against 50 domain-specific technical queries with ground-truth citation references.",
      observations: [
        "Semantic search achieved significantly higher recall than traditional keyword searching on conceptual questions.",
        "Grounding prompts eliminated hallucinated claims across all benchmark queries."
      ],
      disclaimer: "Document retrieval performance depends on original OCR and document quality."
    },
    limitationsAndFutureWork: [
      "Add hybrid lexical + vector search (BM25 + HNSW) for exact acronym matches.",
      "Incorporate reranking with Cohere Rerank / Cross-Encoder."
    ]
  },
  {
    slug: "genai-resume-matcher",
    title: "GenAI Resume & Job Alignment Engine",
    tagline: "Structured Skill Extraction, Semantic Gap Analysis & ATS Feedback",
    shortSummary: "Intelligent career assistant that parses candidate resumes, extracts structured skill profiles via LLM JSON mode, and computes semantic alignment with targeted job descriptions.",
    category: "AI Agents & NLP",
    featured: true,
    status: "Completed Prototype",
    githubUrl: "https://github.com/rashmimoon/Studensense-AI",
    technologies: [
      "Python",
      "OpenAI API (JSON Schema)",
      "Pydantic",
      "Sentence-Transformers",
      "Streamlit",
      "Scikit-Learn"
    ],
    problem: "Job seekers struggle to understand why their resumes fail ATS filters, while recruiters spend hours manually comparing unstructured resumes against complex job requirement matrices.",
    solution: "Designed a deterministic structured extraction engine that parses candidate resumes into Pydantic data schemas, maps skills to job requirements, and provides actionable recommendations without bias.",
    myContribution: [
      "Created structured output schemas enforcing strict JSON compliance for skill categories, experience years, and technical competencies.",
      "Implemented semantic similarity scoring between candidate capabilities and job requirement keywords.",
      "Built objective gap analysis reports highlighting missing high-demand technologies.",
      "Enforced responsible AI principles to avoid demographic bias and focus strictly on verified skills."
    ],
    architecture: {
      overview: "Resume Ingestion -> Structured Schema Extraction -> Job Description Vectorization -> Competency Gap Calculation -> Objective Feedback Generation.",
      steps: [
        {
          step: 1,
          title: "Resume Ingestion",
          description: "Accepts PDF/DOCX resumes and cleans text."
        },
        {
          step: 2,
          title: "Structured Extraction",
          description: "LLM parses text into typed Pydantic models (Skills, Roles, Tools)."
        },
        {
          step: 3,
          title: "Semantic Mapping",
          description: "Measures overlap between candidate skills and job specifications."
        },
        {
          step: 4,
          title: "Gap Identification",
          description: "Identifies missing requirements and suggests actionable portfolio projects."
        }
      ]
    },
    implementationDetails: [
      {
        title: "Schema Validation with Pydantic",
        description: "Enforced reliable data extraction by parsing LLM outputs into strictly typed Python dataclasses."
      },
      {
        title: "Bias-Free Evaluation",
        description: "Stripped personal identifiers, names, genders, and locations prior to requirement matching."
      }
    ],
    evaluation: {
      methodology: "Tested across 25 diverse tech roles and sample candidate resumes.",
      observations: [
        "Structured JSON schema reduced extraction parsing failures to 0%.",
        "Semantic matching successfully connected equivalent technologies (e.g., PostgreSQL <-> Relational Databases)."
      ],
      disclaimer: "Matching scores are algorithmic estimations and require human recruiter review."
    },
    limitationsAndFutureWork: [
      "Add support for multilingual resume parsing.",
      "Integrate automated cover letter tailoring based on verified project evidence."
    ]
  }
];
