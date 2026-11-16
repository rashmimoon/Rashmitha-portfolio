"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Award, 
  ExternalLink, 
  Lock, 
  Eye, 
  Building2 
} from "lucide-react";
import { credentialsData, CredentialItem, CredentialType } from "@/data/credentials";
import CredentialModal from "./CredentialModal";

type FilterTab = "all" | CredentialType;

const filterOptions: { label: string; value: FilterTab }[] = [
  { label: "All Credentials", value: "all" },
  { label: "Certificates", value: "certificate" },
  { label: "Digital Badges", value: "badge" },
  { label: "Internship Offers", value: "offer-letter" },
  { label: "Experience", value: "experience" },
];

export default function CredentialGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("all");
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);

  const filteredCredentials = credentialsData.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  return (
    <section id="credentials" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verifiable Evidence &amp; Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Certificates, Badges &amp; Selection Offers
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Organized repository of course completions, virtual internships, and official selection offers. Privacy-sensitive documents are redacted in compliance with ethical recruiter standards.
          </p>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {filterOptions.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeFilter === tab.value
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCredentials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group shadow-lg"
            >
              {/* Thumbnail Container */}
              <div 
                onClick={() => setSelectedCredential(item)}
                className="relative w-full aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.thumbnailUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay Hover Preview Pill */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Preview Document
                  </span>
                </div>

                {/* Badge Category Tag */}
                <div className="absolute top-2.5 left-2.5">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold backdrop-blur-md ${
                      item.isRedacted
                        ? "bg-amber-950/80 text-amber-300 border border-amber-700/60"
                        : "bg-slate-900/80 text-slate-300 border border-slate-700"
                    }`}
                  >
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Privacy Redacted Pill */}
                {item.isRedacted && (
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-black/80 text-amber-300 border border-amber-800/80">
                    <Lock className="w-3 h-3" />
                    Redacted
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 font-medium text-slate-300 truncate">
                      <Building2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      {item.issuer}
                    </span>
                    <span className="text-[11px] text-slate-500 shrink-0">
                      {item.issueDate}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.skills.slice(0, 3).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                        +{item.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedCredential(item)}
                    className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
                  >
                    <span>Inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>

                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for detail preview */}
        <CredentialModal
          credential={selectedCredential}
          onClose={() => setSelectedCredential(null)}
        />

      </div>
    </section>
  );
}
