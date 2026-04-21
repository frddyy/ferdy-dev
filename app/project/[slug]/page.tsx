import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { ImageCarousel } from "@/components/ImageCarousel";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SkillBadge } from "@/components/SkillBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Ferdy Fauzan`,
    description: project.summary, 
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.images && project.images.length > 0 ? [{ url: project.images[0] }] : [],
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen pt-32 pb-32 px-6 max-w-[1200px] mx-auto relative overflow-hidden bg-white/40 dark:bg-black/40 backdrop-blur-xl rounded-[3rem] shadow-xl border border-white dark:border-white/10 mt-8 mb-8 transition-colors duration-500">
      {/* Decorative Blur Gradients */}
      {/* <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/50 dark:bg-purple-900/30 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/3 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/50 dark:bg-blue-900/30 rounded-full blur-[120px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/3 transition-colors duration-500" /> */}

      <FadeIn>
        <Link href="/work" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-16 hover:text-black dark:hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
            
            {/* Meta Data Sidebar */}
            <div className="flex flex-col gap-1 md:col-span-1">
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-[#1d1d1f] dark:text-white mb-2 transition-colors">{project.title}</h1>
              <p className="text-gray-500 dark:text-gray-400 italic text-lg mb-8 transition-colors">{project.category}</p>
              
              <div className="flex flex-col gap-6 pt-8 border-t border-gray-200 dark:border-white/10 transition-colors">
                {project.year && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider uppercase mb-1 transition-colors">Year</p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white transition-colors">{project.year}</p>
                  </div>
                )}
                {project.context && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider uppercase mb-1 transition-colors">Context</p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white transition-colors">{project.context}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500 tracking-wider uppercase mb-1 transition-colors">Role</p>
                    <p className="font-semibold text-[#1d1d1f] dark:text-white transition-colors">{project.role}</p>
                  </div>
                )}
               <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t, idx) => (
                    <SkillBadge key={idx} name={t} category="tech" />
                  ))}
                </div>
                
                {project.link && (
                  <div className="pt-6">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-full bg-[#1d1d1f] dark:bg-white text-white dark:text-black px-6 py-4 rounded-xl font-bold hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-md active:scale-95 gap-2"
                    >
                      {/* 1. GitHub Check */}
                      {project.link.includes("github.com") ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          View Source Code
                        </>
                      ) : 
                      
                      /* 2. Figma Check */
                      project.link.includes("figma.com") ? (
                        "View Prototype"
                      ) : 

                      /* 3. Google Drive / Video Check */
                      (project.link.includes("youtube.com") || project.link.includes("youtu.be") || project.link.includes("vimeo.com") || project.link.includes("drive.google.com")) ? (
                        <>
                          {/* Specific Check: If it's KWP, treat as Documentation */}
                          {project.slug === "kwp-syariah" ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
                              View Documentation
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                              Watch Video Demo
                            </>
                          )}
                        </>
                      ) : (
                        /* 4. Default Case */
                        "Visit Live Project"
                      )}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Editorial Case Study Area */}
            <div className="md:col-span-2 flex flex-col gap-10 pt-2 md:pl-8 md:border-l border-gray-200 dark:border-white/10 transition-colors">
              
              {/* Summary / Hook */}
              <section>
                <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 tracking-wider uppercase mb-4 transition-colors">Project Overview</h3>
                <p className="text-gray-800 dark:text-gray-200 text-xl lg:text-2xl leading-relaxed font-medium transition-colors">
                  {project.summary}
                </p>
              </section>

              {/* Conditional Details Section */}
              {project.details && (
                <div className="flex flex-col gap-8 mt-4 border-t border-gray-100 dark:border-white/5 pt-10">
                  <section>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 transition-colors">The Problem</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                      {project.details.problem}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 transition-colors">The Solution</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                      {project.details.solution}
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white mb-3 transition-colors">The Impact & Learning</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                      {project.details.impact}
                    </p>
                  </section>
                </div>
              )}
              
            </div>
            
          </div>

          {/* Visual Gallery */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#111] transition-colors mt-8">
            <ImageCarousel images={project.images} link={project.link} />
          </div>
        </div>
      </FadeIn>
    </main>
  );
}