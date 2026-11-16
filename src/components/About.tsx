import { 
  GraduationCap, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  Award,
  ChevronRight 
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0c1222]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/40 text-indigo-400 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5" />
            <span>Professional Profile &amp; Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            About Me &amp; Academic Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            MCA student bridging statistical machine learning, model explainability, and generative AI retrieval pipelines to build trustworthy, human-centered systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative and Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-indigo-400" />
                Engineering Philosophy &amp; Approach
              </h3>
              <div className="text-slate-300 text-sm sm:text-base space-y-3 leading-relaxed">
                <p>
                  As an MCA student pursuing Generative AI and Machine Learning engineering roles, my objective is to develop AI applications that are grounded, transparent, and provably useful in real-world scenarios.
                </p>
                <p>
                  Rather than treating Large Language Models as standalone black-box solutions, I engineer multi-stage architectures that ground generative responses in deterministic ML predictions, local SHAP feature attributions, and domain-specific vector indices.
                </p>
                <p>
                  My flagship project, <span className="text-indigo-400 font-semibold">StudentSense AI</span>, demonstrates this methodology end-to-end: coupling behavioral risk classification with transparent explainability and grounded counseling guidance for academic mentors.
                </p>
              </div>
            </div>

            {/* Core Strengths Grid */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                Demonstrated Engineering Strengths
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {profileData.strengths.map((strength, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0f172a] border border-slate-800/80 rounded-xl p-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="w-7 h-7 rounded-lg bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-indigo-400 mb-2.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <h5 className="text-xs font-bold text-white mb-1.5 leading-snug">
                        {strength.title}
                      </h5>
                      <p className="text-[11px] text-slate-400 leading-normal mb-3">
                        {strength.description}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-[10px] text-indigo-300/90 font-medium">
                        Evidence: {strength.evidence}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Education & Academic History */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-7 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                Education &amp; Credentials
              </h3>

              <div className="space-y-6">
                {profileData.education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="relative pl-6 pb-6 border-l-2 border-slate-800 last:border-l-0 last:pb-0"
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-indigo-500" />

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <h4 className="text-sm font-bold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-xs px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/50 text-indigo-300 font-medium">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-medium mb-1">
                      {edu.institution}
                    </p>

                    {edu.grade && (
                      <p className="text-xs text-emerald-400 font-medium mb-2.5">
                        Academic Standing: {edu.grade}
                      </p>
                    )}

                    <ul className="space-y-1.5 mt-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 text-indigo-400 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Recruiter Verified Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-400" />
                  MCA Degree Status: Current Candidate
                </span>
                <span className="text-slate-500">Verified Institution</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
