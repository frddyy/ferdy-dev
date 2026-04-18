"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom"; // <-- 1. Import createPortal

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrcs: string[];
  title: string;
}

export function ImageModal({ isOpen, onClose, imageSrcs, title }: ImageModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Make sure we only render on the client side where document.body exists
  if (!mounted || !isOpen) return null;

  // 2. Wrap the entire return statement in createPortal
  return createPortal(
    // I bumped the z-index to z-[100] just to be absolutely certain it layers over everything
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className="relative flex flex-col max-w-5xl w-full max-h-[90vh] bg-white dark:bg-[#111] rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200 dark:border-white/10 animate-route-fade"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5 bg-white dark:bg-[#111] z-10 transition-colors flex-shrink-0">
          <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-white truncate transition-colors">{title}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-400 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 min-h-0 overflow-y-auto bg-gray-50 dark:bg-black/50 p-6 md:p-10 transition-colors flex flex-col items-center">
          {imageSrcs && imageSrcs.length > 0 ? (
            <div className="flex flex-col gap-8 items-center justify-center w-full h-full">
              {imageSrcs.map((src, idx) => (
                <img 
                  key={idx}
                  src={src} 
                  alt={`${title} - part ${idx + 1}`} 
                  className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-xl shadow-lg border border-gray-200/50 dark:border-white/5 bg-white dark:bg-[#111]"
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-full min-h-[250px] flex items-center justify-center text-gray-400 font-medium">
              Images not available
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body // <-- 3. Tell the Portal to render this directly into the <body> tag
  );
}