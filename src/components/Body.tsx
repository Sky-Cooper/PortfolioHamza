import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Rocket,
  ChevronDown,
} from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Backend Engineering",
    desc: "Building secure, scalable systems with Spring Boot, PostgreSQL, and modern API architectures.",
  },
  {
    icon: Code,
    title: "Frontend Development",
    desc: "Creating fast, responsive web interfaces with React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Developing cross-platform mobile apps using React Native with clean UI and smooth performance.",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    desc: "Designing intuitive user experiences and unique digital identities that tell a compelling story.",
  },
  {
    icon: Rocket,
    title: "Innovation & Leadership",
    desc: "Co-founder of Qreeblik Medical — driving tech that connects healthcare and innovation.",
  },
];

const AccordionItem: React.FC<{
  skill: typeof skills[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ skill, isOpen, onClick }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      className="border-b border-zinc-800 overflow-hidden"
      initial={false}
      animate={{
        backgroundColor: isOpen ? "rgba(39, 39, 42, 0.5)" : "rgba(24, 24, 27, 0)",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.button
        className="flex items-center justify-between w-full p-6 text-left"
        onClick={onClick}
        whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.3)" }}
      >
        <span className="text-xl font-semibold text-white">{skill.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="text-zinc-500" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative px-6 pb-6"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p className="text-zinc-400 max-w-2xl">{skill.desc}</p>
            <Icon
              size={128}
              className="absolute right-0 bottom-0 text-lime-500/5 opacity-50 -translate-y-1/2 translate-x-1/4"
              strokeWidth={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="skills" className="px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          What I Do
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          I specialize in turning complex ideas into elegant, high-performance
          digital solutions across the full product lifecycle.
        </p>
      </motion.div>

      <motion.div
        className="max-w-3xl mx-auto mt-16 border-t border-zinc-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <AccordionItem
            key={index}
            skill={skill}
            isOpen={expandedIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;