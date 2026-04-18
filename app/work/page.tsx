import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { SkillBadge } from "@/components/SkillBadge";

export const metadata: Metadata = {
  title: "Work | Ferdy Fauzan",
  description: "A comprehensive look at my professional work, experimental concepts, and system architecture designs.",
};

export default function Work() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-[1200px] mx-auto">
      <FadeIn>
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4 transition-colors">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors">All Projects.</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-2xl text-lg transition-colors">
            A comprehensive look at my professional work, experimental concepts, and system architecture designs.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={index} delay={index * 100}>
            <Link href={`/project/${project.slug}`} className="group block relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-900 border border-gray-800">
              {/* Background Visual */}
              <img 
                src={project.images && project.images.length > 0 ? project.images[0] : `https://placehold.co/800x600/111111/333333?text=${encodeURIComponent(project.title)}`}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              
              {/* Heavy Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex flex-col items-start text-left">
                <h4 className="text-3xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-300 font-medium mb-6 line-clamp-2 pr-12 text-sm leading-relaxed max-w-sm">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t, idx) => (
                    <SkillBadge key={idx} name={t} category="tech" />
                  ))}
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="absolute bottom-10 right-10 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500 text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
