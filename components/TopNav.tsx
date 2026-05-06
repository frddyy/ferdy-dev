"use client";

import {useState} from "react";
import Link from "next/link";
import {personalInfo} from "@/data/portfolio";
import {ThemeToggle} from "./ThemeToggle";
import {Menu, X} from "lucide-react";

export function TopNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {name: "Home", href: "/"},
    {name: "Work", href: "/work"},
    {name: "About", href: "/about"},
    {name: "Notes", href: "/notes"},
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] lg:w-auto max-w-[calc(100vw-2rem)]">
      <div className="bg-white/70 dark:bg-[#111111]/70 backdrop-blur-md shadow-sm border border-gray-200/50 dark:border-white/10 rounded-full px-2 py-2 flex items-center justify-between gap-1 transition-all duration-500 relative">
        <div className="flex items-center gap-3 px-2 lg:px-4 shrink-0">
          <Link
            href="/"
            className="flex items-center justify-center hover:scale-105 transition-transform shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="/favicon.ico"
              alt="Brand Icon"
              className="w-6 h-6 min-w-[24px] shrink-0 dark:invert opacity-90 transition-all duration-500"
            />
          </Link>

          <span className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 font-semibold text-sm text-[#1d1d1f] dark:text-white transition-colors whitespace-nowrap lg:mr-2 pointer-events-none lg:pointer-events-auto">
            {personalInfo.name}
          </span>
        </div>

        <div className="hidden lg:flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 gap-1 transition-colors">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 lg:gap-2 pr-1 lg:pr-2 shrink-0">
          {/* Changed 'sm:block' to 'lg:block' here */}
          <Link
            href="/#contact"
            className="hidden lg:block bg-[#1d1d1f] dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-black text-sm font-semibold px-5 py-2 rounded-full transition-colors shadow-sm ml-2 whitespace-nowrap"
          >
            Contact
          </Link>

          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300 transition-colors flex items-center justify-center shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X size={18} strokeWidth={2.5} />
            ) : (
              <Menu size={18} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 p-3 bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col gap-1 lg:hidden transform origin-top transition-all">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-2xl text-center font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 bg-[#1d1d1f] dark:bg-white hover:bg-black dark:hover:bg-gray-200 text-white dark:text-black text-center text-sm font-semibold px-4 py-3.5 rounded-2xl transition-colors shadow-sm"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
}
