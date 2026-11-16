import Link from "next/link";
import Image from "next/image";
import { 
  ExternalLink, 
  Layers, 
  ArrowRight 
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectCaseStudy } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between shadow-xl">
      {/* Top Media / Preview Banner */}
      {project.coverImageUrl && (
        <div className="relative w-full aspect-video bg-slate-900 border-b border-slate-800 overflow-hidden group">
          <Image
            src={project.coverImageUrl}
            alt={`${project.title} Preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-950/80 backdrop-blur-md text-indigo-400 border border-slate-700/80">
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-md ${
                project.status === "Completed & Deployed"
                  ? "bg-emerald-950/80 text-emerald-400 border border-emerald-700/60"
                  : "bg-slate-900/80 text-slate-300 border border-slate-700"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
      )}

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
              {project.title}
              {project.featured && (
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700/50">
                  Flagship
                </span>
              )}
            </h3>
            <p className="text-xs text-indigo-300 font-medium">
              {project.tagline}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            {project.shortSummary}
          </p>

          {/* Problem & Solution Compact Summary */}
          <div className="space-y-3 mb-6 bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 text-xs">
            <div>
              <span className="font-bold text-slate-200">The Problem: </span>
              <span className="text-slate-400">{project.problem}</span>
            </div>
            <div className="pt-2 border-t border-slate-800/80">
              <span className="font-bold text-indigo-400">Engineered Solution: </span>
              <span className="text-slate-300">{project.solution}</span>
            </div>
          </div>

          {/* Key Technologies */}
          <div className="mb-6">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 6).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 border border-slate-700/50"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 6 && (
                <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-slate-800/40 text-slate-400">
                  +{project.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors shadow-sm"
                aria-label={`Open live demo for ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
