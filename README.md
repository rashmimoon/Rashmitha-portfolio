# Rashmitha C — Generative AI & AI/ML Developer Portfolio

A modern, recruiter-focused portfolio website engineered with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Designed specifically for MNC recruiters, hiring teams, and technical interviewers seeking deep proof of competence in Generative AI, Retrieval-Augmented Generation (RAG), and Explainable Machine Learning (XAI).

---

## 🎯 Live Links & Showcase

- **Live Portfolio Website**: [Deploy to Vercel Guide below](#-deployment-to-vercel)
- **Flagship Project (StudentSense AI Demo)**: [https://studensense-ai-kbye6d7burrtgqdyxpz45d7.streamlit.app/](https://studensense-ai-kbye6d7burrtgqdyxpz45d7.streamlit.app/)
- **StudentSense AI GitHub Repository**: [https://github.com/rashmimoon/Studensense-AI](https://github.com/rashmimoon/Studensense-AI)
- **Candidate GitHub Profile**: [https://github.com/rashmimoon](https://github.com/rashmimoon)

---

## 🏗️ Architecture & Sections

1. **Hero & Professional Positioning**: Clear headline, introductory narrative, verified profile snapshot, and rapid action CTAs.
2. **About Me & Education**: Academic background in MCA, Bachelor's degree, core strengths, and research interests.
3. **Dedicated Generative AI Section**:
   - 9 core GenAI concepts (LLMs, Prompt Engineering, Embeddings, Vector Search, RAG, AI Agents, Evaluation, Responsible AI).
   - Each concept answered via three short standards: **What it is**, **How I used it**, and **What I am learning next**.
   - Interactive 8-stage **GenAI Workflow Diagram** showcasing data sanitization, vector retrieval, grounded prompt synthesis, and evaluation.
4. **Technical Skills Stack**: Categorized and searchable matrix across AI/ML, GenAI, Web Frameworks, and Cloud Developer Tools.
5. **Project Case Studies**:
   - **StudentSense AI** (Flagship): Risk prediction + SHAP feature attribution + ChromaDB RAG.
   - **Enterprise RAG Document Intelligence**: Semantic PDF ingestion and citation grounding.
   - **GenAI Resume & Job Alignment Engine**: Structured JSON schema extraction and skill gap analysis.
   - Dedicated case-study detail pages (`/projects/[slug]`).
6. **Experience & Training**: Clear demarcation between virtual internships (Google AI-ML, Siemens/Altair) and technical training tracks (AWS, ISRO/IIRS).
7. **Credentials, Badges & Redacted Offers**: Interactive filterable gallery (`All`, `Certificates`, `Badges`, `Internship Offers`, `Experience`) with modal previews and strict PII redaction compliance.
8. **ATS-Optimized Resume**: One-click PDF download and in-browser preview.
9. **Contact & Hiring Inquiries**: Verified channels and protected inquiry form.

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18.17+ or v20+ recommended)
- npm or pnpm

### Quick Start
```bash
# Clone the repository
git clone https://github.com/rashmimoon/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Testing

```bash
# Compile and test production build
npm run build

# Run production server locally
npm run start

# Run linting
npm run lint
```

---

## 🚢 Deployment to Vercel (Step-by-Step)

### Option A: One-Click Git Push & Vercel Import (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: complete recruiter-focused GenAI portfolio"
   git branch -M main
   git remote add origin https://github.com/rashmimoon/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New...** ➔ **Project**.
   - Select your repository `portfolio` and click **Import**.
   - Framework preset: `Next.js` (detected automatically).
   - Click **Deploy**.

3. **Get Your Live Portfolio URL**:
   - Vercel will instantly generate a live URL:
     `https://rashmitha-portfolio.vercel.app` (or custom domain).
   - Copy this URL and update your Resume header, LinkedIn headline, and GitHub bio!

---

## 🔒 Privacy & Ethical Compliance

In accordance with strict recruiter guidelines:
- No Personally Identifiable Information (home address, personal phone numbers, identity card IDs) is stored or exposed.
- All offer letters and credentials containing sensitive compensation or signature fields are rendered in redacted format.
- Model attributions (SHAP) are explicitly documented as statistical correlations, not clinical causation.
