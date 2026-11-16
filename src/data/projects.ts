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
  category: "Flagship GenAI & ML" | "RAG & LLM Systems" | "Computer Vision & Deep Learning" | "NLP & Web Systems";
  featured: boolean;
  status: "Completed & Deployed" | "Completed Application" | "Completed Prototype";
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
    tagline: "Student Behavior Prediction & Personalized Recommendation System",
    shortSummary: "Flagship intelligent system combining Machine Learning risk classification, Explainable AI (SHAP) feature attribution, and a RAG-powered Generative AI advisor for academic mentors.",
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
      "Explainable AI (SHAP)",
      "Retrieval-Augmented Generation (RAG)",
      "ChromaDB Vector Store",
      "Streamlit",
      "REST API",
      "Pandas & NumPy"
    ],
    problem: "Academic mentors often struggle to identify at-risk students before semester exams. Raw academic data lacks predictive capability, while generic threshold alerts fail to explain why a student is struggling or what personalized interventions to apply.",
    solution: "Developed an AI-based academic-risk prediction system using student information (attendance, marks, academic performance, and activity data). Applied machine learning to predict risk tiers, integrated Explainable AI (SHAP) for transparent feature attribution, and designed a personalized RAG recommendation approach to suggest relevant academic improvement actions through an interactive Streamlit dashboard.",
    myContribution: [
      "Developed the complete AI-based academic risk prediction system from data preprocessing to cloud deployment.",
      "Applied machine learning classification models to identify student risk patterns and enable early academic intervention.",
      "Integrated Explainable AI (SHAP) to make prediction outcomes and feature contributions understandable to mentors.",
      "Designed a personalized recommendation approach grounded with ChromaDB vector retrieval to suggest relevant academic improvement actions.",
      "Built an interactive, responsive Streamlit dashboard featuring risk tier indicators, SHAP plots, and mentor briefing reports.",
      "Deployed the live web app publicly on Streamlit Cloud with public GitHub version control."
    ],
    architecture: {
      overview: "Data Ingestion -> Machine Learning Inference -> SHAP Explainability -> ChromaDB RAG Knowledge Base -> Personalized Recommendation Generation.",
      steps: [
        {
          step: 1,
          title: "Student Activity Ingestion",
          description: "Ingests student attendance, internal assessment marks, and activity logs into structured feature arrays."
        },
        {
          step: 2,
          title: "Risk Classification",
          description: "Supervised ML classifier predicts the risk probability tier (High Risk, Moderate Risk, Low Risk)."
        },
        {
          step: 3,
          title: "SHAP Explainability",
          description: "Computes individual feature attributions showing which metrics (e.g. attendance drop) shifted the risk score."
        },
        {
          step: 4,
          title: "RAG Document Retrieval",
          description: "Retrieves targeted academic counseling strategies from ChromaDB based on the student's risk profile."
        },
        {
          step: 5,
          title: "Interactive Synthesis",
          description: "Renders visual risk gauges, interactive SHAP waterfall graphs, and actionable guidance for the mentor."
        }
      ]
    },
    implementationDetails: [
      {
        title: "Predictive ML Pipeline",
        description: "Implemented Scikit-Learn pipelines handling missing values, standard scaling, and risk tier probability scoring."
      },
      {
        title: "Model Interpretability (SHAP)",
        description: "Surfaced individual feature weights so mentors clearly understand which specific indicators triggered the alert."
      },
      {
        title: "RAG Guidance Engine",
        description: "Indexed pedagogical counseling literature into ChromaDB to provide fact-grounded recommendations without hallucination."
      },
      {
        title: "Streamlit UI & REST Architecture",
        description: "Engineered an intuitive interface with parameter sliders, real-time recalculation, and report exports."
      }
    ],
    evaluation: {
      methodology: "Evaluated classification accuracy and risk sensitivity on student performance records. Validated RAG recommendations against educational counseling rubrics.",
      observations: [
        "Ensemble tree models effectively identified critical attendance inflection points correlating with academic disengagement.",
        "SHAP waterfall plots accurately separated general academic variance from urgent warning factors.",
        "Streamlit Cloud deployment achieved seamless sub-second inference."
      ],
      disclaimer: "Feature attribution explains statistical model weights for this specific profile; it does not confirm clinical causation without educator assessment."
    },
    limitationsAndFutureWork: [
      "Currently tested on academic cohort benchmarks; planned expansion to multi-semester longitudinal tracking.",
      "Incorporating automated follow-up scheduling for academic mentors."
    ]
  },
  {
    slug: "handwritten-digit-recognition",
    title: "Handwritten Digit Recognition Web App",
    tagline: "Deep Learning Computer Vision System for Digit Classification",
    shortSummary: "AI-powered web application utilizing TensorFlow deep neural networks to accurately recognize and predict user-drawn handwritten digits in real-time.",
    category: "Computer Vision & Deep Learning",
    featured: false,
    status: "Completed Application",
    githubUrl: "https://github.com/rashmimoon",
    technologies: [
      "Python",
      "TensorFlow",
      "Deep Learning",
      "Computer Vision",
      "Flask",
      "NumPy",
      "HTML5 Canvas"
    ],
    problem: "Digitizing handwritten numerical data accurately is a core computer vision challenge essential for automated document parsing and optical character recognition workflows.",
    solution: "Developed an AI-powered web application using TensorFlow and Flask. Users can draw or upload handwritten digits, which are preprocessed, resized, and classified through a trained neural network with high confidence scores.",
    myContribution: [
      "Trained and evaluated a convolutional neural network (CNN) model using TensorFlow on standard digit datasets.",
      "Built image preprocessing routines: grayscale conversion, centering, and pixel normalization.",
      "Engineered a lightweight Flask backend to handle HTTP inference requests with sub-100ms response time.",
      "Integrated an interactive HTML5 canvas allowing users to draw digits and receive instant prediction predictions."
    ],
    architecture: {
      overview: "Canvas Drawing -> Image Preprocessing -> TensorFlow CNN Inference -> Probability Distribution -> Web UI Display.",
      steps: [
        {
          step: 1,
          title: "Digit Input",
          description: "User draws a digit on an interactive web canvas or uploads an image."
        },
        {
          step: 2,
          title: "Preprocessing",
          description: "Normalizes dimensions to 28x28 grayscale and aligns bounding box."
        },
        {
          step: 3,
          title: "Neural Network Inference",
          description: "TensorFlow model computes softmax classification probabilities across digits 0–9."
        },
        {
          step: 4,
          title: "Output Delivery",
          description: "Displays top predicted digit alongside confidence distribution bars."
        }
      ]
    },
    implementationDetails: [
      {
        title: "CNN Architecture",
        description: "Constructed convolution, pooling, and dropout layers to prevent overfitting."
      },
      {
        title: "Flask REST API",
        description: "Handled Base64 canvas image payloads and decoded them into NumPy tensors."
      }
    ],
    evaluation: {
      methodology: "Evaluated test accuracy and loss curves across validation splits.",
      observations: [
        "CNN achieved high classification accuracy (>98%) on standard digit benchmarks.",
        "Flask backend provided rapid, latency-free feedback on drawing inputs."
      ],
      disclaimer: "Model performance is optimized for single-digit inputs centered on canvas."
    },
    limitationsAndFutureWork: [
      "Extend architecture to multi-digit continuous string recognition.",
      "Incorporate mobile touch optimization for tablet devices."
    ]
  },
  {
    slug: "text-pattern-detector",
    title: "Text Pattern Detector",
    tagline: "NLP & Regular Expressions Information Extraction Application",
    shortSummary: "Text intelligence application combining Regular Expressions and Natural Language Processing to detect and extract emails, URLs, phone numbers, dates, and keywords from unstructured text.",
    category: "NLP & Web Systems",
    featured: false,
    status: "Completed Application",
    githubUrl: "https://github.com/rashmimoon",
    technologies: [
      "Python",
      "Natural Language Processing (NLP)",
      "Regular Expressions (Regex)",
      "Flask",
      "HTML/CSS"
    ],
    problem: "Extracting structured entities (such as contact info, dates, and domain-specific keywords) from unstructured bodies of text manually is slow, tedious, and error-prone.",
    solution: "Built a fast, reliable text processing application using Python, Regex, and NLP concepts wrapped in a responsive Flask web interface. Users paste text to instantly receive categorized entity tables.",
    myContribution: [
      "Formulated comprehensive regex patterns for robust matching of diverse email, phone, URL, and date formats.",
      "Applied NLP text-cleaning techniques including tokenization and stopword filtering for keyword extraction.",
      "Engineered Flask application routing, input validation, and clean tabular presentation.",
      "Tested edge cases on messy email formats, international phone prefixes, and nested URLs."
    ],
    architecture: {
      overview: "Raw Text Input -> Regex Engine & NLP Tokenizer -> Entity Parsing -> Categorized Output.",
      steps: [
        {
          step: 1,
          title: "Input Ingestion",
          description: "Receives unstructured text via web form or text upload."
        },
        {
          step: 2,
          title: "Pattern Matching",
          description: "Executes regex rules for emails, phone numbers, URLs, and timestamps."
        },
        {
          step: 3,
          title: "NLP Processing",
          description: "Extracts high-frequency keywords and entity tags."
        },
        {
          step: 4,
          title: "Categorized Results",
          description: "Renders parsed entities into organized, copyable tables."
        }
      ]
    },
    implementationDetails: [
      {
        title: "Regex Precision Engineering",
        description: "Constructed non-greedy regex expressions avoiding catastrophic backtracking."
      },
      {
        title: "Flask Web Interface",
        description: "Implemented clean UI with real-time text stats and one-click entity export."
      }
    ],
    evaluation: {
      methodology: "Benchmarked extraction precision and recall on real-world email bodies and document snippets.",
      observations: [
        "100% extraction precision on standard RFC-compliant email addresses and URLs.",
        "Sub-10ms processing latency on text inputs up to 10,000 words."
      ],
      disclaimer: "Phone number parsing conforms to standard national and international notations."
    },
    limitationsAndFutureWork: [
      "Incorporate Named Entity Recognition (NER) models for organization and person name extraction.",
      "Add direct CSV/Excel batch file upload support."
    ]
  },
  {
    slug: "rag-document-assistant",
    title: "Enterprise RAG Document Intelligence",
    tagline: "Semantic PDF Ingestion, Vector Search & Grounded Citation Engine",
    shortSummary: "Context-grounded question answering system that ingests long-form technical PDFs, applies semantic chunking, and yields answers with verifiable page-level citations.",
    category: "RAG & LLM Systems",
    featured: false,
    status: "Completed Prototype",
    githubUrl: "https://github.com/rashmimoon/Studensense-AI",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence-Transformers",
      "OpenAI / Gemini API",
      "PyPDF",
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
      methodology: "Tested against domain-specific technical queries with ground-truth citation references.",
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
  }
];
