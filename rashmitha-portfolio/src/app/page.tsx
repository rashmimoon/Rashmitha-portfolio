import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import GenAIExpertise from "@/components/GenAIExpertise";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import CredentialGallery from "@/components/CredentialGallery";
import ResumeCTA from "@/components/ResumeCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projects";
import { FolderGit2, Sparkles } from "lucide-react";

export default function Home() {
  const flagshipProject = projectsData.find((p) => p.slug === "studentsense-ai");
  const otherProjects = projectsData.filter((p) => p.slug !== "studentsense-ai");

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-indigo-500/20 selection:text-white">
      {/* Sticky Compact Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About & Education */}
        <About />

        {/* Dedicated Generative AI Expertise & Interactive Workflow */}
        <GenAIExpertise />

        {/* Technical Skills & Stack */}
        <Skills />

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 bg-[#090d16] border-t border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col items-start mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-700/50 text-indigo-300 text-xs font-semibold mb-3">
                <FolderGit2 className="w-3.5 h-3.5" />
                <span>Featured Engineering Implementations</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Featured Projects &amp; Case Studies
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
                Detailed case studies following a consistent recruiter-first evaluation format: problem, solution, architecture, my contribution, evaluation, and limitations.
              </p>
            </div>

            {/* Flagship Project Showcase */}
            {flagshipProject && (
              <div className="mb-14">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Flagship Capstone Project
                  </span>
                </div>
                <ProjectCard project={flagshipProject} />
              </div>
            )}

            {/* Other Projects Grid */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  Other Specialized Architectures
                </h3>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Retrieval, structured extraction, and agentic prototypes
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Experience & Training */}
        <Experience />

        {/* Credentials, Badges & Offers Gallery */}
        <CredentialGallery />

        {/* Downloadable Resume CTA */}
        <ResumeCTA />

        {/* Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
