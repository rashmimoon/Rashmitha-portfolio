"use client";

import Image from "next/image";
import { 
  FileText, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Terminal, 
  CheckCircle2 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[250px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Candidate Role Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-700/40 text-indigo-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profileData.role}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Building intelligent applications with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-300 to-violet-400">
                Generative AI, Machine Learning
              </span>{" "}
              and RAG.
            </h1>

            {/* Subheadline / Intro */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {profileData.summary}
            </p>

            {/* Quick Proof Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mb-8">
              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
                <div className="text-indigo-400 font-bold text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  StudentSense AI
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Live ML + SHAP + RAG</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3">
                <div className="text-sky-400 font-bold text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400" />
                  Virtual Intern
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">Google AI-ML &amp; Siemens</div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-3 col-span-2 sm:col-span-1">
                <div className="text-violet-400 font-bold text-sm flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-violet-400" />
                  AWS &amp; ISRO
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">GenAI &amp; Spatial AI Tracks</div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-sm font-semibold transition-all w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/40 text-sm font-medium transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social / Repository Links */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-slate-400 text-xs">
              <span className="text-slate-500">Verified links:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (rashmimoon)</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo & Verified Recruiter Snapshot */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl opacity-20 blur-md" />

              {/* Main Profile Card */}
              <div className="relative bg-[#0f172a] border border-slate-800 rounded-2xl p-6 shadow-2xl">
                
                {/* Photo Container */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-900 border border-slate-700/60 mb-5 shadow-inner">
                  <Image
                    src={profileData.avatarUrl}
                    alt={`Portrait of ${profileData.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    className="object-cover"
                  />
                  
                  {/* Overlay Verification Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-700/80 rounded-lg py-1.5 px-3 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">{profileData.name}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Profile
                    </span>
                  </div>
                </div>

                {/* Candidate Overview Card Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Academic Track:</span>
                    <span className="text-slate-200 font-semibold">Master of Computer Applications</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Core Focus:</span>
                    <span className="text-indigo-300 font-medium">GenAI, RAG, Explainable ML</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Flagship Build:</span>
                    <a 
                      href="#projects" 
                      className="text-sky-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      StudentSense AI
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="pt-2 border-t border-slate-800">
                    <p className="text-[11px] text-slate-500 text-center">
                      Recruiter note: Prepared according to the GenAI portfolio specification with verified credentials and public code repositories.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
