import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferdy.dev"),
  title: "Mochamad Ferdy Fauzan | Software Engineer",
  description: "Software Engineer specializing in scalable fullstack architecture, applied AI, and pixel-perfect user experiences.",
  keywords: [
    "Mochamad Ferdy Fauzan", 
    "Software Engineer", 
    "Fullstack Developer", 
    "Frontend Architecture", 
    "Vue",
    "React", 
    "Next.js", 
    "Computer Vision", 
    "AI/ML"
  ],
  authors: [{ name: "Mochamad Ferdy Fauzan" }],
  openGraph: {
    title: "Mochamad Ferdy Fauzan | Software Engineer",
    description: "Software Engineer specializing in scalable fullstack architecture, applied AI, and pixel-perfect user experiences.",
    url: "https://ferdy.dev", // Note: Change this if you use a different domain later
    siteName: "Ferdy Fauzan Portfolio",
    images: [
      {
        url: "https://placehold.co/1200x630/111111/ffffff?text=Ferdy+Fauzan+|+Software+Engineer",
        width: 1200,
        height: 630,
        alt: "Mochamad Ferdy Fauzan - Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="min-h-full flex flex-col bg-[#fdfdfd] dark:bg-[#050505] text-[#1d1d1f] dark:text-white font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden transition-colors duration-500">
        <ThemeProvider defaultTheme="system">
          {/* Soft Background Mesh Gradients */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 dark:bg-blue-600/20 blur-[120px] transition-colors duration-700" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-purple-400/20 dark:bg-purple-600/20 blur-[120px] transition-colors duration-700" />
            <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-indigo-300/20 dark:bg-indigo-600/20 blur-[120px] transition-colors duration-700" />
          </div>
          <TopNav />
          {/* Native Layout Page Transitions Container */}
          <main className="relative z-10 flex-1 w-full animate-route-fade transition-all duration-700">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
