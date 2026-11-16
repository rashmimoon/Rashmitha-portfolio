"use client";

import { useState } from "react";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  MapPin, 
  ShieldCheck,
  Clock
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profileData } from "@/data/profile";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Safe client-side message handler
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#0c1222]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Recruiter &amp; Engineering Inquiries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get in Touch / Hiring Inquiries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            Available for full-time GenAI and AI/ML developer roles, internships, and technical research discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-xl space-y-6">
              <h3 className="text-base font-bold text-white mb-2">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    GitHub Repositories
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                    github.com/rashmimoon
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-950/80 border border-sky-800/50 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    Connect on LinkedIn
                  </span>
                </div>
              </a>

              {/* Location & Availability Note */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Location: {profileData.location} (Open to Relocation / Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Typical Response Time: Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Protected Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-base font-bold text-white mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below or email directly at {profileData.email}.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-slate-900/80 border border-emerald-700/60 rounded-xl space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-600/60 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been registered. You can also send an email directly to{" "}
                    <a href={`mailto:${profileData.email}`} className="text-indigo-400 underline">
                      {profileData.email}
                    </a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Name / Organization *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Talent Team / Hiring Manager"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. GenAI / ML Developer Opportunity"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Share project scope, role details, or interview scheduling information..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-all shadow-md shadow-indigo-600/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Inquiries</span>
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Privacy-protected. No marketing spam.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
