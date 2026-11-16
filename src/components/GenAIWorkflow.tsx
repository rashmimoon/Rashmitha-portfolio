"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";

interface WorkflowStep {
  step: number;
  title: string;
  badge: string;
  description: string;
  codeSnippet?: string;
  details: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    title: "User Inquiry & Goal",
    badge: "Input Stage",
    description: "The user submits a question or an educator requests an academic guidance plan for an at-risk student.",
    details: "Example: 'Generate an intervention plan for Student #8402 showing a 22% drop in attendance.'",
    codeSnippet: 'query = "Student #8402 attendance alert: provide supportive mentoring strategy."'
  },
  {
    step: 2,
    title: "Input Validation & Guardrails",
    badge: "Responsible AI",
    description: "Input is inspected for PII, prompt injections, and scope boundaries before processing.",
    details: "Confidential numbers, student personal addresses, and adversarial instructions are scrubbed or rejected.",
    codeSnippet: "sanitized_input = guardrails.sanitize_pii(query)"
  },
  {
    step: 3,
    title: "Dense Query Embedding",
    badge: "Vector Math",
    description: "The sanitized prompt is encoded into a high-dimensional vector using an embedding model.",
    details: "Maps query semantics into a 384/1536-dimensional space to enable geometric similarity comparison.",
    codeSnippet: "query_vector = embed_model.encode(sanitized_input)"
  },
  {
    step: 4,
    title: "Vector Retrieval & Filtering",
    badge: "ANN Search",
    description: "ChromaDB performs approximate nearest neighbor search to retrieve top-k relevant knowledge chunks.",
    details: "Metadata filtering limits candidate documents to verified counseling guides and pedagogical literature.",
    codeSnippet: "docs = vector_store.similarity_search(query_vector, k=3, filter={'type': 'guidance'})"
  },
  {
    step: 5,
    title: "Grounded Prompt Synthesis",
    badge: "Prompt Engineering",
    description: "Retrieved documents, ML inference outputs, and SHAP weights are combined into a structured prompt.",
    details: "Strict system prompt instructions constrain the LLM to rely only on the provided context.",
    codeSnippet: 'prompt = f"""[CONTEXT]\\n{docs}\\n[FACTORS]\\n{shap_factors}\\nGenerate empathetic plan:"""'
  },
  {
    step: 6,
    title: "LLM Generation",
    badge: "Model Inference",
    description: "Foundation model (Gemini / OpenAI / Claude) generates structured advice with low temperature.",
    details: "Deterministic parameters ensure consistency, structured JSON formatting, and absence of hallucinations.",
    codeSnippet: "response = llm.generate(prompt, temperature=0.2, max_tokens=600)"
  },
  {
    step: 7,
    title: "Source Display & Citations",
    badge: "Transparency",
    description: "The UI surfaces the generated answer alongside exact document citations and SHAP feature graphs.",
    details: "Allows the human counselor to cross-examine why the model made each specific recommendation.",
    codeSnippet: "ui.render(response.text, sources=docs.sources, disclaimer=SHAP_DISCLAIMER)"
  },
  {
    step: 8,
    title: "Evaluation & Feedback",
    badge: "Observability",
    description: "The response is logged and checked for faithfulness, hallucination metrics, and mentor feedback.",
    details: "Continuous evaluation loop ensures the pipeline adheres to ethical and factual benchmarks.",
    codeSnippet: "eval_score = ragas.evaluate(response, ground_truth=counseling_rubric)"
  }
];

export default function GenAIWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Interactive GenAI &amp; RAG Architecture Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Standard workflow implemented across StudentSense AI and document intelligence systems.
          </p>
        </div>
        <div className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 font-medium">
          Step {activeStep + 1} of {workflowSteps.length}
        </div>
      </div>

      {/* Step Pills Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
        {workflowSteps.map((step, idx) => (
          <button
            key={step.step}
            onClick={() => setActiveStep(idx)}
            className={`flex flex-col items-center justify-center p-2.5 rounded-lg border text-center transition-all ${
              activeStep === idx
                ? "bg-indigo-950 border-indigo-500 text-white shadow-md shadow-indigo-950/50"
                : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
            }`}
          >
            <span className={`text-[10px] font-bold ${activeStep === idx ? "text-indigo-400" : "text-slate-500"}`}>
              0{step.step}
            </span>
            <span className="text-[11px] font-medium truncate w-full mt-0.5">
              {step.title.split(" ")[0]}
            </span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase Card */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-900/40 border border-indigo-700/40 text-indigo-300 text-xs font-semibold">
              <span>Phase {workflowSteps[activeStep].step}</span>
              <span>•</span>
              <span>{workflowSteps[activeStep].badge}</span>
            </div>

            <h4 className="text-lg font-bold text-white">
              {workflowSteps[activeStep].title}
            </h4>

            <p className="text-sm text-slate-300 leading-relaxed">
              {workflowSteps[activeStep].description}
            </p>

            <div className="pt-2 text-xs text-sky-300/90 bg-sky-950/30 border border-sky-800/40 rounded-lg p-3">
              <span className="font-semibold">Implementation Detail:</span>{" "}
              {workflowSteps[activeStep].details}
            </div>
          </div>

          {/* Code snippet pane */}
          {workflowSteps[activeStep].codeSnippet && (
            <div className="w-full md:w-5/12 bg-[#090d16] border border-slate-800 rounded-lg p-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-500 uppercase">
                <span>Code Execution Hook</span>
                <span className="text-emerald-400">active</span>
              </div>
              <pre className="text-indigo-300 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {workflowSteps[activeStep].codeSnippet}
              </pre>
            </div>
          )}
        </div>

        {/* Navigation buttons inside active step */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-800/80 text-xs">
          <button
            onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ← Previous Stage
          </button>
          <button
            onClick={() => setActiveStep((prev) => (prev < workflowSteps.length - 1 ? prev + 1 : 0))}
            className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
          >
            Next Stage →
          </button>
        </div>
      </div>
    </div>
  );
}
