"use client";

import { useState } from "react";
// Ensure you add 'languages' to your import from portfolio.ts
import { personalInfo, experiences, education, organizations, languages } from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { ImageModal } from "@/components/ImageModal";
import { ArrowUpRight, Globe } from "lucide-react";

export default function About() {
  const [modalState, setModalState] = useState({ isOpen: false, srcs: [] as string[], title: "" });
  
  const openModal = (srcs: string[], title: string) => {
    setModalState({ isOpen: true, srcs, title });
  };

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-32 px-6 max-w-[1000px] mx-auto">
      
      {/* 00. HEADER & PHOTO */}
      <div className="relative w-full mb-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 w-[90%] max-w-[300px] md:max-w-none md:w-[350px] lg:w-[450px] h-[450px] sm:h-[500px] md:h-[550px] z-0 overflow-hidden opacity-30 dark:opacity-60 md:opacity-80 lg:opacity-100 transition-all duration-700 pointer-events-none">
          <img src="/assets/images/hero-avatar.png" alt="Ferdy" className="w-full h-full object-cover object-top filter drop-shadow-2xl" />
        </div>

        <FadeIn>
          <div className="relative z-10 pt-8 md:pt-12 pb-24 sm:pb-32 md:pb-48 w-full md:max-w-[70%] lg:max-w-[65%]">
            <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4">About Me</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 md:mb-8">Behind the Code.</h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 font-medium leading-relaxed w-full md:max-w-[80%] bg-white/50 dark:bg-black/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-5 md:p-0 rounded-2xl border border-white/20 md:border-transparent">
              {personalInfo.bio} 
            </p>
          </div>
        </FadeIn>
      </div>

      {/* 01. EXPERIENCE */}
      <FadeIn delay={100}>
        <div className="relative z-20 -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-16 shadow-xl border border-white/80 dark:border-white/10 mb-12 transition-all duration-500">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mb-8 md:mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm">01</span>
            Professional Experience
          </h2>
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative">
                <div className="md:col-span-1 border-l-2 border-gray-100 dark:border-gray-800 pl-4 md:border-none md:pl-0">
                  <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">{exp.duration}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white">{exp.company}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{exp.role}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 02 & 03. GALLERY */}
      <InteractiveGallery onOpenModal={openModal} />

      {/* 04. EDUCATION */}
      <FadeIn delay={400}>
        <div className="relative z-20 mt-12 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-16 shadow-xl border border-white/80 dark:border-white/10 mb-12 transition-all">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm">04</span>
            Academic Background
          </h2>
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 border-l-2 border-emerald-100 dark:border-emerald-900/30 pl-4 md:border-none md:pl-0">
                  <p className="text-xs font-bold tracking-widest text-emerald-600 uppercase">{edu.date}</p>
                  <p className="text-sm font-medium text-gray-500 mt-2">{edu.location}</p>
                </div>
                <div className="md:col-span-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white">{edu.institution}</h3>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold border border-emerald-200/50 w-fit">GPA {edu.gpa}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-lg mb-6">{edu.degree}</p>
                  <div className="bg-white/50 dark:bg-black/30 rounded-xl p-5 border border-gray-100 dark:border-white/5 mb-6 shadow-sm">
                    <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Final Project / IP Registered</p>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{edu.project}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-white/5 border border-gray-200/50 rounded-lg">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 05. LANGUAGES */}
      <FadeIn delay={450}>
        <div className="relative z-20 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-16 shadow-xl border border-white/80 dark:border-white/10 mb-12 transition-all">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 flex items-center justify-center text-sm">05</span>
            Language Proficiency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages && languages.map((lang, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white/40 dark:bg-black/20 border border-gray-100 dark:border-white/5">
                <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1d1d1f] dark:text-white">{lang.name}</h3>
                  <p className="text-teal-600 dark:text-teal-400 font-medium text-sm mt-0.5">{lang.level}</p>
                  {lang.description && (
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">{lang.description}</p>
                  )}
                  {lang.images && (
                    <button 
                      onClick={() => openModal(lang.images!, `${lang.name} Proficiency Credential`)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 hover:text-teal-700 mt-4 transition-all group"
                    >
                      View Credential <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* 06. LEADERSHIP */}
      <FadeIn delay={500}>
        <div className="relative z-20 bg-white/70 dark:bg-[#111]/80 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-16 shadow-xl border border-white/80 dark:border-white/10 transition-all">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1d1d1f] dark:text-white mb-12 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-sm">06</span>
            Leadership & Community
          </h2>
          <div className="space-y-12">
            {organizations.map((org, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1 border-l-2 border-indigo-100 dark:border-indigo-900/30 pl-4 md:border-none md:pl-0">
                  <p className="text-xs font-bold tracking-widest text-indigo-600 uppercase">{org.duration}</p>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#1d1d1f] dark:text-white">{org.organization}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{org.role}</p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{org.description}</p>
                  
                  {org.images && (
                    <button 
                      onClick={() => openModal(org.images!, org.role)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-all group"
                    >
                      View Credential <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <ImageModal 
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        imageSrcs={modalState.srcs}
        title={modalState.title}
      />
    </main>
  );
}