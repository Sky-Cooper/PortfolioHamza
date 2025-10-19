import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight, HeartPulse, CheckCircle, Lock, Smartphone, BrainCircuit, MessageSquareQuoteIcon } from "lucide-react"

// --- Image Imports ---
import qlWeb1 from '../assets/images/qreeblikmedicalscreenshot1.png';
import qlWeb2 from '../assets/images/qreeblikmedicalscreenshot2.png';
import qlWeb3 from '../assets/images/qreeblikmedicalScreenshot3.png';
import qlWeb4 from '../assets/images/qreeblikmedicalScreenshot4.png';
import qlWeb6 from '../assets/images/qreeblikmedicalscreenshot6.png';
import qlWeb7 from '../assets/images/qreeblikmedicalscreenshot7.png';

import qlMobile1 from '../assets/images/qreeblikmobilscreesnshot1.jpg';
import qlMobile2 from '../assets/images/qreeblikmobilescreessnhot2.jpg';
import qlMobile3 from '../assets/images/qreeblikmobilescreenshot3.jpg';
import qlMobile4 from '../assets/images/qreeblikmobileScreenshot4.jpg';
import qlMobile5 from '../assets/images/qreeblikmobileScreenshot5.jpg';
import qlMobile6 from '../assets/images/qreeblikmobileScresenshot6.jpg';

import f2r1 from '../assets/images/f2r1.png';
import f2r2 from '../assets/images/f2r2.png';
import f2r3 from '../assets/images/f2r3.png';
import f2r4 from '../assets/images/f2r4.png';
import f2r5 from '../assets/images/f2r5.png';



// --- Project Data ---
const projects = [
  {
    title: "Qreeb Lik Web Platform",
    images: [qlWeb1, qlWeb2, qlWeb3, qlWeb4, qlWeb6, qlWeb7],
    description: "A comprehensive medical platform designed to connect doctors and patients in Morocco, featuring secure data handling and real-time communication. Built for robust performance and scalability.",
    features: [
        { icon: <HeartPulse />, text: "Patient & Doctor Dashboards" },
        { icon: <CheckCircle />, text: "Secure Appointment Booking" },
        { icon: <Smartphone />, text: "Real-time Notifications" }
    ],
    tech: ["React", "GraphQL", "Django", "PostgreSQL", "Vercel", "DigitalOcean"], // Added Vercel & DigitalOcean
    role: "Co-founder & Full-Stack Developer",
    links: { github: "#", live: "https://qreeblik.com" }, // Added live link
  },
  {
    title: "Qreeb Lik Mobile App",
    images: [qlMobile1, qlMobile2, qlMobile3, qlMobile4, qlMobile5, qlMobile6],
    description: "A cross-platform app for patients and doctors, built with React Native for a seamless native experience on both iOS and Android. Provides on-the-go access to medical services.",
    features: [
        { icon: <BrainCircuit />, text: "Intelligent AI Health Assistant" },
        { icon: <CheckCircle />, text: "Instant Appointment Alerts" },
        { icon: <Smartphone />, text: "Native Performance & Usability" }
    ],
    tech: ["React Native", "TypeScript", "GraphQL"],
    role: "Lead Mobile Developer",
    links: { github: "#", live: "https://qreeblik.com" }, // Added live link
  },
  {
    title: "Virtual Library System",
    images: [
    f2r1,
    f2r2,
    f2r3,
    f2r4,
    f2r5
    ],
description: "An intelligent library application that leverages a locally-run, fine-tuned Phi-2 AI model to provide smart book recommendations. It also integrates a RAG-based AI assistant to guide users and facilitate support requests to the admin.",
   features: [
        { icon: <BrainCircuit />, text: "AI-Powered Book Recommendations (Phi-2)" },
        { icon: <MessageSquareQuoteIcon />, text: "RAG Assistant for User Guidance & Support" },
        { icon: <Lock />, text: "Spring Security Authentication" }
    ],
    tech: ["Spring Boot", "Thymeleaf", "Java", "AI/RAG", "Phi-2", "MongoDB"],
    role: "Backend Developer",
    links: { github: "#" },
  },
];

type Project = typeof projects[0];

// --- Device Mockup and Gallery Components ---
const PhoneMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[450px] w-[220px] shadow-xl">
        <div className="w-[120px] h-[15px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[64px] rounded-s-lg"></div>
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
        <div className="h-[48px] w-[3px] bg-gray-800 absolute -end-[13px] top-[100px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black">{children}</div>
    </div>
);

const MonitorMockup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-full">
        <div className="relative border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] md:h-[294px]">
            <div className="rounded-lg overflow-hidden h-full bg-black">{children}</div>
        </div>
        <div className="relative bg-gray-700 rounded-b-xl h-[20px] w-full">
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-[19px] h-[10px] w-[100px] bg-gray-800 rounded-b-md"></div>
        </div>
    </div>
);

const ImageGalleryWithMockup: React.FC<{ images: (string | { default: string })[]; isMobile: boolean }> = ({ images, isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageSources = images.map(img => (typeof img === 'string' ? img : img.default));

    const handleNext = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex((p) => (p + 1) % imageSources.length); };
    const handlePrev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrentIndex((p) => (p - 1 + imageSources.length) % imageSources.length); };

    const MockupComponent = isMobile ? PhoneMockup : MonitorMockup;

    return (
        <div className="flex flex-col items-center gap-4">
            <MockupComponent>
                <div className="relative w-full h-full group">
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={currentIndex}
                            src={imageSources[currentIndex]}
                            alt={`Project image ${currentIndex + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    <button onClick={handlePrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronLeft size={16} />
                    </button>
                    <button onClick={handleNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </MockupComponent>
            
            {/* Thumbnail Strip */}
            <div className="flex flex-wrap justify-center gap-2 max-w-md">
                {imageSources.map((img, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        className={`w-14 h-10 rounded-md overflow-hidden transition ${currentIndex === index ? 'ring-2 ring-lime-400' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
                    </button>
                ))}
            </div>
        </div>
    );
};

// --- Reusable Project Showcase Component ---
const ProjectShowcase: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    const isReversed = index % 2 !== 0;
    const isMobileProject = project.title.includes("Mobile");

    return (
        <motion.div
            className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="lg:w-1/2 lg:flex-shrink-0">
                <ImageGalleryWithMockup images={project.images} isMobile={isMobileProject} />
            </div>
            <div className="lg:w-1/2">
                <p className="mb-3 text-sm font-semibold tracking-wider text-lime-400">{project.role}</p>
                <h3 className="mb-4 text-4xl font-bold text-white md:text-5xl">{project.title}</h3>
                <p className="mb-8 text-zinc-400 max-w-lg leading-relaxed">{project.description}</p>
                <ul className="mb-8 space-y-5">
                    {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-4">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-lime-400">
                                {React.cloneElement(feature.icon, { size: 18 })}
                            </span>
                            <span className="text-zinc-300">{feature.text}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300">{t}</span>
                    ))}
                </div>
                <div className="flex items-center gap-6">
                    {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors">
                            <Github size={20} /> Code
                        </a>
                    )}
                    {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 transition-colors">
                            <ExternalLink size={20} /> Visit Site
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// --- Main ProjectsSection Component ---
const ProjectsSection: React.FC = () => {
    return (
        <section id="projects" className="relative px-6 py-16 mx-auto max-w-7xl sm:px-8 lg:px-12 divide-y divide-zinc-800">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="pb-16 text-4xl font-extrabold text-center text-white md:text-5xl"
            >
                My Latest <span className="text-lime-400">Creations</span>
            </motion.h2>
            <div>
                {projects.map((proj, i) => (
                    <ProjectShowcase key={i} project={proj} index={i} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;