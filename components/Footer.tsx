"use client";

import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-gray-200/60 dark:border-white/10 bg-white/30 dark:bg-black/30 backdrop-blur-3xl transition-colors duration-500">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-bold text-[#1d1d1f] dark:text-white tracking-tight text-lg mb-1 transition-colors">{personalInfo.name}</span>
          <span className="text-gray-500 dark:text-gray-400 font-medium text-sm transition-colors">© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* <div className="flex items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-400 transition-colors">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest text-xs">LinkedIn</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Twitter</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest text-xs">Github</a>
        </div> */}

        <a 
          href="#top" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="w-12 h-12 bg-white dark:bg-[#111] rounded-full flex items-center justify-center shadow-sm border border-gray-100 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:shadow-md transition-all group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </footer>
  );
}
