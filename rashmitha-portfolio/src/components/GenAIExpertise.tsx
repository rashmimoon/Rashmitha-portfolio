import { 
  Sparkles, 
  Cpu, 
  Terminal, 
  Network, 
  Database, 
  FileSearch, 
  Bot, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowUpRight,
  BookOpen,
  Code2
} from "lucide-react";
import { genAIConcepts, GenAIConcept } from "@/data/skills";
import GenAIWorkflow from "./GenAIWorkflow";

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-indigo-400" />,
  Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
  Terminal: <Terminal className="w-5 h-5 text-violet-400" />,
  Network: <Network className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  FileSearch: <FileSearch className="w-5 h-5 text-indigo-400" />,
  Bot: <Bot className="w-5 h-5 text-pink-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-rose-400" />,
};

export default function GenAIExpertise() {
  return (
    <section id="genai-expertise" className="py-20 bg-[#090d16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Technical Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Generative AI Concepts &amp; Practical Evidence
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mt-2 leading-relaxed">
            I believe recruiter credibility comes from explaining concepts in clear language, demonstrating verified implementations, and acknowledging current learning frontiers without exaggerated claims.
          </p>
        </div>

        {/* Workflow Diagram Banner */}
        <div className="mb-14">
          <GenAIWorkflow />
        </div>

        {/* Concept Cards Grid with "What it is", "How I used it", "What I am learning next" */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            Core GenAI Pillars (9 Evaluated Concepts)
          </h3>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Each concept includes verified application evidence
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genAIConcepts.map((concept: GenAIConcept) => {
            return (
              <div
                key={concept.id}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-slate-700 hover:shadow-lg transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                      {iconMap[concept.iconName] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {concept.shortTag}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {concept.name}
                  </h4>

                  {/* 3 Mandated Labels */}
                  <div className="space-y-3 text-xs leading-relaxed">
                    
                    {/* Label 1: What it is */}
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/80">
                      <div className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider mb-1 flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        What it is
                      </div>
                      <p className="text-slate-300">
                        {concept.whatItIs}
                      </p>
                    </div>

                    {/* Label 2: How I used it */}
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/80">
                      <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider mb-1 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        How I used it
                      </div>
                      <p className="text-slate-300">
                        {concept.howIUsedIt}
                      </p>
                    </div>

                    {/* Label 3: What I am learning next */}
                    <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/80">
                      <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        What I am learning next
                      </div>
                      <p className="text-slate-400">
                        {concept.whatIAmLearningNext}
                      </p>
                    </div>

                  </div>
                </div>

                {/* Footer Link to Project */}
                {concept.relatedProject && (
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Implemented in:</span>
                    <a
                      href="#projects"
                      className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>{concept.relatedProject}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
