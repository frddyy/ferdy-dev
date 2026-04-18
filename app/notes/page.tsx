import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes | Ferdy Fauzan",
  description: "Notes and essays on software architecture, design patterns, and engineering culture.",
};

export default function Notes() {
  return (
    <main className="min-h-screen pt-48 pb-24 px-6 max-w-[800px] mx-auto text-center flex flex-col items-center justify-center">
      <FadeIn>
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors duration-500">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6 transition-colors duration-500">Notes & Essays.</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed transition-colors duration-500">
          I'm currently documenting my thoughts on software architecture, design patterns, and engineering culture. Check back soon for my first post.
        </p>
      </FadeIn>
    </main>
  );
}
