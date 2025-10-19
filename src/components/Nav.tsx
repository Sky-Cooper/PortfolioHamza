import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// 👇 ÉTAPE 1 : IMPORTE TON FICHIER PDF ICI
// Assure-toi que le chemin est correct par rapport à l'emplacement de ton fichier Navbar.tsx
import cvPDF from "../../assets/images/cv.png";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].link) as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-zinc-950/80 border-b border-lime-400/20 shadow-lg shadow-lime-500/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400 to-transparent animate-pulse opacity-50"></div>
      <nav className="relative px-6 mx-auto max-w-7xl sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <h1 className="text-2xl font-extrabold text-white select-none">
              <span className="text-lime-400 transition-colors group-hover:text-lime-300">
                H
              </span>
              amza Elbouanani
            </h1>
          </a>

          <div className="items-center hidden gap-8 md:flex">
            {navItems.map(({ name, link }) => (
              <a
                key={name}
                href={link}
                onClick={() => setActiveSection(name)}
                className={`relative text-zinc-300 hover:text-white font-medium transition-colors duration-300 group ${
                  activeSection === name ? "text-lime-400" : ""
                }`}
              >
                {name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-lime-400 transition-all duration-300 origin-left ${
                    activeSection === name ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* 👇 ÉTAPE 2 : MODIFIE LE LIEN POUR LE DESKTOP */}
            <a
              href={cvPDF}
              download="Hamza-Elbouanani-CV.pdf" // Ceci définit le nom du fichier téléchargé
              className="hidden px-5 py-2 text-sm font-semibold transition-all duration-300 border rounded-full text-lime-400 border-lime-400/50 md:inline-block hover:bg-lime-400/10 hover:border-lime-400"
            >
              Download CV
            </a>

            <button
              className="z-50 p-2 text-lime-400 rounded-md md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full md:hidden bg-zinc-950/95 backdrop-blur-xl border-t border-lime-400/20"
          >
            <div className="px-6 pt-4 pb-6 space-y-3">
              {navItems.map(({ name, link }) => (
                <a
                  key={name}
                  href={link}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(name);
                  }}
                  className={`block px-4 py-2 rounded-md text-zinc-300 transition-colors ${
                    activeSection === name ? "text-lime-400 bg-lime-400/10" : ""
                  }`}
                >
                  {name}
                </a>
              ))}
              {/* 👇 ÉTAPE 3 : MODIFIE LE LIEN POUR LE MOBILE */}
              <a
                href={cvPDF}
                download="Hamza-Elbouanani-CV.pdf"
                className="block w-full px-4 py-3 mt-4 text-center text-lime-400 transition-colors border rounded-full border-lime-400/50 hover:bg-lime-400/10"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;