import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  // Use an object to track copied state for each item independently
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({
    email: false,
    phone: false,
  });

  // A reusable function to handle copying
  const handleCopy = (e: React.MouseEvent, text: string, type: 'email' | 'phone') => {
    e.preventDefault(); // Prevents default link behavior (mailto: or tel:)
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });

    setTimeout(() => {
      setCopied(prev => ({ ...prev, [type]: false }));
    }, 2000); // Message disappears after 2 seconds
  };

  return (
    <footer className="relative px-6 py-16 mt-20 text-center border-t border-lime-400/20">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-400/70 to-transparent animate-pulse"></div>

      <div className="container mx-auto">
        <h3 className="mb-3 text-2xl font-bold text-white">
          Hamza Elbouanani
        </h3>
        <p className="mb-8 text-zinc-400">
          Crafting Digital Experiences that Matter
        </p>

        {/* Social Media Links */}
        <div className="flex items-start justify-center gap-8 mb-8">
          {/* --- EMAIL ICON WITH COPY FUNCTIONALITY --- */}
          <div className="relative">
             <motion.a
                href="mailto:hamzaelbouanani001@gmail.com"
                onClick={(e) => handleCopy(e, "hamzaelbouanani001@gmail.com", "email")}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="transition text-zinc-400 hover:text-lime-400"
                aria-label="Copy Email Address"
              >
              <Mail size={24} />
            </motion.a>
            <AnimatePresence>
              {copied.email && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold bg-lime-400 text-black rounded-md shadow-lg"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- PHONE ICON WITH COPY FUNCTIONALITY --- */}
          <div className="relative">
            <motion.a
              href="tel:0632614894"
              onClick={(e) => handleCopy(e, "0632614894", "phone")}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="transition text-zinc-400 hover:text-lime-400"
              aria-label="Copy Phone Number"
            >
              <Phone size={24} />
            </motion.a>
            <AnimatePresence>
              {copied.phone && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-semibold bg-lime-400 text-black rounded-md shadow-lg"
                >
                  Copied!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <motion.a
            href="https://www.linkedin.com/in/hamza-elbouanani-150137268/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="transition text-zinc-400 hover:text-lime-400"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Hamza Elbouanani. All Rights Reserved.
        </p>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-lime-500/20 blur-3xl rounded-full opacity-30 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;