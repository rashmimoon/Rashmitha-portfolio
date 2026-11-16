import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle, 
  Clock 
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function ResumeCTA() {
  return (
    <section id="resume" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-[#0f172a] border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Copy & Highlights */}
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>ATS-Optimized Resume</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Ready for Technical Interviews &amp; Review
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Download my comprehensive, single-page ATS-formatted resume formatted for automated scanning and recruiter evaluation.
              </p>

              {/* Verified checklist */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Includes StudentSense AI architecture &amp; ML metrics</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lists verified Google, Siemens &amp; AWS credentials</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Privacy-compliant with zero exposed personal identity numbers</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-3.5 h-3.5" />
                <span>Resume version updated for 2025/2026 hiring cycles</span>
              </div>
            </div>

            {/* Right Column: Download Card */}
            <div className="md:col-span-5 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-indigo-950 border border-indigo-600/40 flex items-center justify-center text-indigo-400 mb-4 shadow-inner">
                <FileText className="w-7 h-7" />
              </div>

              <h3 className="text-base font-bold text-white mb-1">
                {profileData.name} — Resume
              </h3>
              <p className="text-xs text-indigo-300 mb-6 font-medium">
                MCA | Generative AI &amp; AI/ML Developer
              </p>

              <div className="w-full space-y-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/25 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>View in Browser</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
