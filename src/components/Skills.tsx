"use client";

import { useState } from "react";
import { 
  Code2, 
  Search, 
  Layers 
} from "lucide-react";
import { technicalSkills } from "@/data/skills";

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...technicalSkills.map((c) => c.category)];

  const filteredCategories = technicalSkills.map((cat) => {
    const filteredSkills = cat.skills.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.notes && s.notes.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCat =
        selectedCategory === "All" || cat.category === selectedCategory;
      return matchesSearch && matchesCat;
    });

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[#0c1222]/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive Technical Repertoire</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technical Skills &amp; Developer Stack
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Structured inventory of core competencies across Generative AI, Machine Learning, programming languages, and cloud developer tools.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 bg-[#0f172a] border border-slate-800 p-3 rounded-xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, tool or library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-8 text-center text-slate-400 text-sm">
              No skills found matching &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6"
              >
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-indigo-400" />
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-slate-900/70 border border-slate-800/80 rounded-lg p-3 flex flex-col justify-between hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-white">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            skill.level === "Advanced"
                              ? "bg-indigo-950 text-indigo-300 border border-indigo-800/60"
                              : skill.level === "Proficient"
                              ? "bg-sky-950 text-sky-300 border border-sky-800/60"
                              : "bg-slate-800 text-slate-300 border border-slate-700"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.notes && (
                        <p className="text-[11px] text-slate-400 mt-1">
                          {skill.notes}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
