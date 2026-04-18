import { Sparkles, CheckCircle2, ScanFace, AudioLines, BrainCircuit } from "lucide-react";

export const SkillBadge = ({ name, category }: { name: string; category?: string }) => {
  const slugMap: Record<string, string> = {
    // Frontend
    "Vue.js": "vuedotjs",
    "React": "react",
    "React.js": "react",
    "ReactJS": "react",
    "React Native": "react",
    "TypeScript": "typescript",
    "JavaScript": "javascript",
    "HTML/CSS": "html5",
    "Bootstrap": "bootstrap",
    "Chakra UI": "chakraui",
    "Material UI": "mui",
    "Tailwind CSS": "tailwindcss",
    
    // Backend
    "Java Spring Boot": "springboot",
    "Java (Spring Boot)": "springboot",
    "Java (Spring Boot 3)": "springboot",
    "Python": "python",
    "Python (Flask)": "flask",
    "Flask": "flask",
    "Node.js": "nodedotjs",
    "Node.js (Express.js)": "express",
    "Express.js": "express",
    "ExpressJS": "express",
    "Laravel": "laravel",
    "PHP": "php",
    
    // Database & Message Brokers
    "PostgreSQL": "postgresql",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "Apache Kafka": "apachekafka",
    
    // DevOps, Testing & Tools
    "Docker": "docker",
    "Git": "git",
    "GitLab CI/CD": "gitlab",
    "Linux": "linux",
    "Figma": "figma",
    "Electron.js": "electron",
    "Redux": "redux",
    "JWT": "jsonwebtokens",
    "Flyway": "flyway",
    "Streamlit": "streamlit",
    "Unreal Engine 5": "unrealengine",
    "Blender 3D": "blender",
    "SketchUp": "sketchup",
    "Selenium": "selenium",
    "Jest": "jest"
  };

  const slug = slugMap[name];

  // Intelligent Icon Router
  const renderIcon = () => {
    if (name === "AWS") {
      return <i className="fa-brands fa-aws text-base opacity-80 dark:text-white"></i>;
    }
    if (slug) {
      return <img src={`https://cdn.simpleicons.org/${slug}`} alt={name} className="w-3.5 h-3.5 dark:invert opacity-70" />;
    }
    
    if (name.includes("Computer Vision") || name.includes("OpenCV") || name.includes("YOLOv8") || name.includes("Roboflow")) {
      return <ScanFace className="w-3.5 h-3.5 text-blue-400 opacity-70" />;
    }
    if (name.includes("Speech") || name.includes("VOCA")) {
      return <AudioLines className="w-3.5 h-3.5 text-purple-400 opacity-70" />;
    }
    if (name.includes("Generative AI") || name.includes("AI/ML") || name.includes("Seed-VC") || name.includes("MICA")) {
      return <BrainCircuit className="w-3.5 h-3.5 text-orange-400 opacity-70" />;
    }
    
    if (category === "ai") return <Sparkles className="w-3.5 h-3.5 text-orange-400 opacity-70" />;
    return <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 opacity-70" />;
  };

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
      {renderIcon()}
      {name}
    </div>
  );
};