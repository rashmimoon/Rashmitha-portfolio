"use client";

import { 
  Sparkles, 
  Mail, 
  ShieldCheck 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#070b13] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-700/50 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              MCA student building practical intelligent systems with Generative AI, Machine Learning, and RAG architectures.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Compliant with recruiter privacy standards.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Site Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About &amp; Education</a>
              <a href="#genai-expertise" className="hover:text-white transition-colors">GenAI Expertise</a>
              <a href="#skills" className="hover:text-white transition-colors">Technical Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects &amp; Case Studies</a>
              <a href="#experience" className="hover:text-white transition-colors">Experience &amp; Training</a>
              <a href="#credentials" className="hover:text-white transition-colors">Credentials &amp; Badges</a>
              <a href="#resume" className="hover:text-white transition-colors">Download Resume</a>
            </div>
          </div>

          {/* Socials & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Connect Directly
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (rashmimoon)</span>
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{profileData.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Built with Next.js App Router &amp; Tailwind CSS</span>
            <span>•</span>
            <span>Vercel Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
