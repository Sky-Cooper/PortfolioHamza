import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, PlayCircle, Info } from "lucide-react";

type Props = {
  title: string;
  images: string[];
  description: string;
  tech: string[];
  role: string;
  links: { demo?: string; github?: string; live?: string };
};

const ProjectCard: React.FC<Props> = ({
  title,
  images,
  description,
  tech,
  role,
  links,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow logic for images
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(
      () => setCurrentImageIndex((prev) => (prev + 1) % images.length),
      5000 // Image changes every 5 seconds
    );
    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];
  const isMobileView = currentImage?.toLowerCase().includes("mobile");

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col p-6 overflow-hidden transition-all duration-300 border shadow-2xl bg-zinc-950/60 border-lime-400/20 rounded-2xl backdrop-blur-lg hover:border-lime-400/50 hover:shadow-lime-500/10"
    >
      {/* Image container with slideshow */}
      {images.length > 0 && (
        <div className="relative flex items-center justify-center h-56 mb-6 overflow-hidden rounded-lg bg-zinc-900/70">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={`${title} screenshot`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`transition-transform object-contain duration-500 group-hover:scale-105 ${
                isMobileView ? "h-full w-auto py-2" : "h-full w-full object-cover"
              }`}
            />
          </AnimatePresence>

          {/* Subtle gradient overlay on the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent"></div>

          {/* Mobile phone frame overlay */}
          {isMobileView && (
            <div className="absolute inset-0 border-[10px] border-zinc-900 rounded-[2.5rem] shadow-inner pointer-events-none" />
          )}

          {/* Slideshow progress dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div 
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === currentImageIndex ? 'bg-lime-400' : 'bg-zinc-600'}`}
                    />
                ))}
            </div>
          )}
        </div>
      )}

      {/* Project details */}
      <h3 className="text-2xl font-bold tracking-wide text-lime-300">{title}</h3>
      <p className="mb-3 text-sm italic font-light text-zinc-400">{role}</p>

      <p className="mb-4 text-sm leading-relaxed text-zinc-300 flex-grow">
        {description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tech.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-medium border rounded-full text-lime-300 border-lime-400/30 bg-lime-950/50"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action links */}
      <div className="flex items-center gap-5 mt-auto text-lime-400">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-white hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
        )}
        {links.demo && (
          <a href={links.demo} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-white hover:scale-110">
            <PlayCircle className="w-5 h-5" />
          </a>
        )}
        {links.live && (
          <a href={links.live} target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:text-white hover:scale-110">
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
        <button className="transition duration-300 hover:text-white hover:scale-110">
          <Info className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
