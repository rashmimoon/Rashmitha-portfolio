import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  GitBranch,
  Terminal,
  FileCheck
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.title} — Technical Case Study | Rashmitha C`,
    description: project.shortSummary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb / Back Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors p-2 -ml-2 rounded-lg hover:bg-slate-800/60"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Project Title Header */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-950/80 border border-indigo-700/50 text-indigo-300">
                {project.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-700/50 text-emerald-300">
                {project.status}
              </span>
              {project.featured && (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/80 border border-amber-700/50 text-amber-300">
                  Flagship Case Study
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-indigo-300 font-medium mb-6">
              {project.tagline}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-indigo-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Streamlit Application</span>
                </a>
              )}
            </div>
          </div>

          {/* Top Banner / Dashboard Mockup */}
          {project.coverImageUrl && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-800 mb-12 shadow-2xl bg-slate-950">
              <Image
                src={project.coverImageUrl}
                alt={`${project.title} Interface`}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Core Case Study Sections */}
          <div className="space-y-12">
            
            {/* 1. Problem & Solution Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
                <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  The Problem &amp; Need
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  The Engineered Solution
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* 2. Candidate's Personal Contribution */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-indigo-400" />
                My Direct Engineering Contributions
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                Components I personally architected, coded, integrated, validated, and deployed:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.myContribution.map((contribution, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-4 flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-indigo-950 border border-indigo-700/60 text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Architecture & Data Flow Diagram */}
            {project.architectureDiagramUrl && (
              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-indigo-400" />
                  System Architecture &amp; Data Flow
                </h2>
                <p className="text-xs text-slate-400 mb-6">
                  {project.architecture.overview}
                </p>

                {/* Architecture Diagram Image */}
                <div className="relative w-full aspect-[900/480] rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] mb-8">
                  <Image
                    src={project.architectureDiagramUrl}
                    alt={`${project.title} Architecture Diagram`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Sequential pipeline stages */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Sequential Pipeline Stages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.architecture.steps.map((s) => (
                      <div
                        key={s.step}
                        className="bg-slate-900/60 border border-slate-800 rounded-lg p-3.5"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                            Stage {s.step}
                          </span>
                          <span className="text-xs font-bold text-white">
                            {s.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. Technologies Genuinely Used */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-400" />
                Technologies Genuinely Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-slate-200 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 5. Implementation Modules & Design Choices */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                Implementation Modules &amp; Design Choices
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.implementationDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/60 border border-slate-800 rounded-lg p-4"
                  >
                    <h3 className="text-sm font-bold text-white mb-2">
                      {detail.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Evaluation, Metrics & Critical Ethical Disclaimers */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                Evaluation Methodology &amp; Real Observations
              </h2>
              <p className="text-xs text-slate-400 mb-6">
                {project.evaluation.methodology}
              </p>

              <div className="space-y-2 mb-6">
                {project.evaluation.observations.map((obs, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{obs}</span>
                  </div>
                ))}
              </div>

              {/* Critical Ethical Disclaimer required by PDF */}
              <div className="bg-amber-950/30 border border-amber-800/50 rounded-xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    Responsible AI &amp; Interpretability Disclaimer
                  </h4>
                  <p className="text-xs text-amber-200/90 leading-relaxed">
                    {project.evaluation.disclaimer}
                  </p>
                </div>
              </div>
            </div>

            {/* 7. Limitations & Future Roadmap */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                Known Limitations &amp; Next Engineering Improvements
              </h2>
              <p className="text-xs text-slate-400 mb-4">
                Honest documentation of boundaries and ongoing research extensions:
              </p>
              <ul className="space-y-2">
                {project.limitationsAndFutureWork.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-300 flex items-start gap-2"
                  >
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Bottom Navigation */}
          <div className="mt-14 pt-8 border-t border-slate-800 flex items-center justify-between">
            <Link
              href="/#projects"
              className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio Overview</span>
            </Link>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors"
              >
                <span>Launch Live Demo Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
