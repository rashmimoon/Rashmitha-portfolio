import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building, 
  ChevronRight, 
  Award
} from "lucide-react";
import { experienceData, achievementsData } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0c1222]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Exposure &amp; Career Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Experience, Virtual Internships &amp; Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Structured distinction between virtual internships, technical industry training tracks, and applied engineering projects with verified responsibilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Experience & Training Timeline */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Building className="w-4 h-4 text-indigo-400" />
                Industry Training &amp; Virtual Internships
              </h3>
              <span className="text-xs text-slate-400">
                Accurately labeled programmes
              </span>
            </div>

            <div className="space-y-6">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 relative hover:border-slate-700 transition-colors shadow-sm"
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-base font-bold text-white">
                          {item.role}
                        </h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            item.type === "Virtual Internship"
                              ? "bg-sky-950 text-sky-300 border border-sky-800/60"
                              : "bg-indigo-950 text-indigo-300 border border-indigo-800/60"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="text-xs text-indigo-300 font-medium mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 sm:text-right">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities list */}
                  <ul className="space-y-2 mt-4 text-xs sm:text-sm text-slate-300">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-indigo-400 mt-1 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Gained Footer */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-slate-500 mr-1">
                      Skills Applied:
                    </span>
                    {item.skillsGained.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Distinctives */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Key Achievements &amp; Differentiators
              </h3>
              <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                Measurable recognitions, academic standing, and demonstrated milestone accomplishments.
              </p>

              <div className="space-y-4">
                {achievementsData.map((ach) => (
                  <div
                    key={ach.id}
                    className="bg-slate-900/60 border border-slate-800 rounded-lg p-3.5"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50">
                        {ach.tag}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {ach.date}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white mt-1.5 mb-1">
                      {ach.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 leading-normal">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recruiter Guarantee Banner */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>All listed programmes match verifiable completion certificates.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
