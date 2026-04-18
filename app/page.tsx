import { 
  personalInfo, 
  projects,
  skills,
  socialLinks
} from "@/data/portfolio";
import { FadeIn } from "@/components/FadeIn";
import { SkillBadge } from "@/components/SkillBadge";
import { ContactForm } from "@/components/ContactForm";
import { 
  ArrowUpRight, Mail, MapPin, Database, MonitorSmartphone, BrainCircuit, Rocket, Hexagon 
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="px-6 pt-48 pb-32 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold tracking-widest uppercase mb-8 border border-green-200/50 dark:border-green-800/50 shadow-sm transition-colors duration-500">
            <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse transition-colors"></span>
            Available for new projects
          </div>
        </FadeIn>
        
        <FadeIn delay={100}>
          {/* ADJUSTED: Shrunk height to exactly 550px to hug the image, and removed the mb-12 bottom margin */}
          <div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] mt-4 mb-0 font-black tracking-tighter text-6xl md:text-8xl lg:text-[110px] leading-none">
            
            {/* Background Layer (In front of background, behind image) */}
            <h1 className="absolute -top-4 md:-top-10 left-1/2 -translate-x-1/2 w-max mr-12 whitespace-nowrap text-zinc-800 dark:text-white transition-colors duration-500 z-0 text-center">
              Software
            </h1>
            
            {/* Sandwich Image Layer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[550px] md:h-[550px] z-10 pointer-events-none drop-shadow-2xl">
              <div className="w-full h-full relative overflow-visible mask-person">
                <img 
                  src="/assets/images/hero-avatar-4.png" 
                  alt="Avatar representation" 
                  className="w-full h-full object-contain dark:opacity-90 filter drop-shadow-2xl transition-all"
                />
              </div>
            </div>
            
            {/* Foreground Text Layer (In front of image) */}
            <h1 className="absolute top-[190px] md:top-[320px] left-1/2 -translate-x-1/2 ml-15 md:ml-25 w-max whitespace-nowrap text-zinc-800 dark:text-white transition-colors duration-500 z-20 text-center pointer-events-none drop-shadow-xl p-12">
              Engineer
            </h1>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          {/* ADJUSTED: Added mx-auto and text-center to perfectly center the max-w block */}
          <h2 className="text-xl md:text-2xl text-center text-gray-500 dark:text-gray-400 mt-15 md:mt-18 mb-10 max-w-2xl mx-auto font-medium leading-relaxed transition-colors duration-500 relative z-30">
            {personalInfo.tagline} 
          </h2>
        </FadeIn>

        <FadeIn delay={300}>
          {/* REFINED: Normalized top margin */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-center">
            <a href="#work" className="bg-[#1d1d1f] dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black dark:hover:bg-gray-200 transition-colors shadow-lg shadow-black/5 flex items-center gap-2 group">
              View Prototype
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            {/* <a href={socialLinks?.resume || "#"} target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-[#111111] dark:text-white text-[#1d1d1f] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-black transition-colors border border-gray-200 dark:border-white/10 flex items-center gap-2">
              Download Resume
            </a> */}
          </div>
        </FadeIn>
      </section>

      {/* Capabilities / Stack Section */}
      <section id="expertise" className="px-6 py-24 max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4 transition-colors">Capabilities / 2026</p>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white transition-colors">Engineering Stack.</h3>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <FadeIn delay={100}>
            <div className="bg-white dark:bg-[#111111] rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-white/10 h-full hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
                  <MonitorSmartphone className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold dark:text-white">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((item, idx) => (
                  <SkillBadge key={idx} name={item} category="frontend" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Backend Card */}
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-[#111111] rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-white/10 h-full hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold dark:text-white">Backend & API</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((item, idx) => (
                  <SkillBadge key={idx} name={item} category="backend" />
                ))}
              </div>
            </div>
          </FadeIn>

          {/* AI Card */}
          <FadeIn delay={300}>
            <div className="bg-white dark:bg-[#111111] rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-white/10 h-full hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-500 dark:text-orange-400 rounded-2xl flex items-center justify-center">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold dark:text-white">AI & Machine Learning</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.ai.map((item, idx) => (
                  <SkillBadge key={idx} name={item} category="ai" />
                ))}
              </div>
            </div>
          </FadeIn>
          
          {/* DevOps Card */}
          <FadeIn delay={400}>
            <div className="bg-white dark:bg-[#111111] rounded-[2rem] p-8 shadow-sm border border-gray-100 dark:border-white/10 h-full hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-pink-50 dark:bg-pink-900/30 text-pink-500 dark:text-pink-400 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
               <h4 className="text-2xl font-bold dark:text-white">DevOps & SDLC</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.delivery.map((item, idx) => (
                  <SkillBadge key={idx} name={item} category="delivery" />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="relative py-32 overflow-hidden">
        {/* Massive Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-500/5 select-none pointer-events-none z-0">
          SELECTED
        </div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Portfolio</p>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-white transition-colors">Featured Projects</h3>
              </div>
              <Link href="/work" className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 flex items-center gap-1 transition-colors text-sm">
                View All Projects <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
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
                      {project.summary} {/* Fixed: Using .summary instead of .description */}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tech.map((t, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur text-white/90 text-xs font-semibold rounded-full border border-white/10">
                          {t}
                        </span>
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
        </div>
      </section>

      {/* Footer / Let's Architect The Future */}
      <section id="footer-contact" className="px-6 pt-32 pb-12 max-w-[1200px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter text-[#1d1d1f] dark:text-white leading-[0.85] mb-8 transition-colors">
            LET'S ARCHITECT<br />THE FUTURE
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto mb-24 transition-colors">
            Available for select freelance opportunities and consulting.
          </p>
        </FadeIn>

        <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-32 text-left items-center bg-white dark:bg-[#111111] p-8 md:p-16 rounded-[3rem] border border-gray-100 dark:border-white/10 shadow-xl shadow-blue-900/5 transition-colors">
          {/* Contact Form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
            <div className="pl-0 lg:pl-12">
              <h3 className="text-3xl font-bold text-[#1d1d1f] dark:text-white mb-4 transition-colors">Let's Connect</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-10 leading-relaxed font-medium transition-colors">
                I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your vision. Find me on social platforms where I share my journey in code and design.
              </p>
              
             <div className="flex gap-4 mb-16">
                {/* Dynamically connected Social Links (Native SVGs) */}
                <a href={socialLinks?.github || "#"} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-[#1a1a1a] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm border border-gray-100 dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
                <a href={socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-gray-100 dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-white/5 p-4 rounded-2xl border border-white dark:border-white/10">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  {socialLinks?.email || "hello@example.dev"}
                </div>
                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 font-medium bg-white/60 dark:bg-white/5 p-4 rounded-2xl border border-white dark:border-white/10">
                  <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* <div className="mt-32 pt-8 border-t border-gray-200/50 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs font-semibold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div> */}
      </section>
    </main>
  );
}