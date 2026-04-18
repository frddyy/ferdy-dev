"use client";

import { FadeIn } from "@/components/FadeIn";
import { certificates, achievements } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

interface GalleryProps {
  onOpenModal: (srcs: string[], title: string) => void;
}

export function InteractiveGallery({ onOpenModal }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {/* Certificates */}
      <FadeIn delay={200}>
        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-white/80 dark:border-white/10 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-sm">02</span>
            Certifications
          </h2>
          <div className="space-y-4 mt-6">
            {certificates.map((cert, index) => (
              <button 
                key={index} 
                onClick={() => onOpenModal(cert.images || [], cert.title)}
                className="w-full text-left flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/30 hover:bg-purple-50/50 dark:hover:bg-purple-900/10 group transition-all"
              >
                <div className="pr-4">
                  <h4 className="text-lg font-bold text-[#1d1d1f] dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300">{cert.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
                    <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                    <span>{cert.issuer}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white dark:bg-[#111] shadow-sm flex items-center justify-center text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Achievements */}
      <FadeIn delay={300}>
        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-white/80 dark:border-white/10 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-10 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm">03</span>
            Achievements
          </h2>
          <div className="space-y-4 mt-6">
            {achievements.map((achieve, index) => (
              <button 
                key={index}
                onClick={() => onOpenModal(achieve.images || [], achieve.title)}
                className="w-full text-left flex flex-col md:flex-row md:items-center justify-between p-6 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-orange-200 dark:hover:border-orange-500/30 hover:bg-orange-50/50 dark:hover:bg-orange-900/10 group transition-all"
              >
                <div className="pr-4">
                  <h4 className="text-lg font-bold text-[#1d1d1f] dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">{achieve.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400 font-medium mt-1 line-clamp-1">{achieve.description}</p>
                  <div className="flex items-center gap-2 mt-3 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                    {achieve.date}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-white dark:bg-[#111] shadow-sm flex items-center justify-center text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}