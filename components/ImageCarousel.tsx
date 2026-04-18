"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ImageCarousel({ images, link }: { images?: string[], link?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-[#f5f5f7] flex items-center justify-center">
        <span className="text-gray-400 font-medium tracking-widest uppercase text-sm">No Preview</span>
      </div>
    );
  }

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full aspect-video relative group overflow-hidden bg-[#f5f5f7] dark:bg-[#111]">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
          <img
            src={images[currentIndex]}
            alt={`Preview ${currentIndex + 1}`}
            // FIXED: Changed object-cover to object-contain
            className="w-full h-full object-contain transition-opacity duration-500 hover:opacity-90"
          />
        </a>
      ) : (
        <img
          src={images[currentIndex]}
          alt={`Preview ${currentIndex + 1}`}
          // FIXED: Changed object-cover to object-contain
          className="w-full h-full object-contain transition-opacity duration-500"
        />
      )}
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full shadow-sm hover:bg-white text-gray-800"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full shadow-sm hover:bg-white text-gray-800"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrentIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-black dark:bg-white w-4" : "bg-black/20 dark:bg-white/50 hover:bg-black/50 dark:hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}