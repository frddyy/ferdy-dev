"use client";

import { useActionState, useEffect } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { sendContactEmail } from "@/app/actions/contact";

// Define output state for action
type ActionState = { error?: string; success?: boolean } | null;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: ActionState, formData: FormData) => {
      return sendContactEmail(formData);
    },
    null
  );

  if (state?.success) {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 p-12 rounded-3xl shadow-sm border border-green-100 dark:border-green-800/30 flex flex-col items-center justify-center text-center h-full min-h-[400px] transition-colors duration-500">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-800/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6 transition-colors">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-2 transition-colors">Message Sent!</h3>
        <p className="text-green-700 dark:text-green-500 font-medium transition-colors">I'll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#111111] p-8 rounded-3xl shadow-sm border border-gray-50 dark:border-white/10 h-full relative overflow-hidden transition-colors duration-500">
      {/* Loading Overlay */}
      {isPending && (
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center transition-colors">
          <div className="w-8 h-8 border-4 border-blue-200 dark:border-blue-900 border-t-blue-600 dark:border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-400 tracking-wider transition-colors">ROUTING SECURE MESSAGE...</p>
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xs font-bold text-gray-400 tracking-wider">NAME</label>
            <input required id="name" name="name" type="text" placeholder="Jane Doe" className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-600" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-bold text-gray-400 tracking-wider">EMAIL</label>
            <input required id="email" name="email" type="email" placeholder="jane@example.com" className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-600" />
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-xs font-bold text-gray-400 tracking-wider">SUBJECT</label>
          <select id="subject" name="subject" className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all bg-transparent text-sm text-gray-600 dark:text-white appearance-none bg-white dark:bg-[#1a1a1a]">
            <option>Project Inquiry</option>
            <option>Consulting</option>
            <option>Team Expansion</option>
            <option>Other</option>
          </select>
        </div>
        
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-xs font-bold text-gray-400 tracking-wider">MESSAGE</label>
          <textarea required id="message" name="message" rows={4} placeholder="Tell me about your vision..." className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none text-sm bg-white dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-600"></textarea>
        </div>

        {state?.error && (
          <p className="text-red-500 text-sm font-semibold">{state.error}</p>
        )}

        <button disabled={isPending} type="submit" className="bg-[#1d1d1f] dark:bg-white disabled:opacity-50 text-white dark:text-black py-4 rounded-xl font-bold hover:bg-black dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-black/5 active:scale-[0.98]">
          {isPending ? "Sending..." : "Send"}
          {!isPending && <ArrowUpRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}
