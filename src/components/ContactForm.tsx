import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Code,
  Palette,
  Smartphone,
  Server,
  Settings,
  Rocket,
} from "lucide-react";

const skills = [
  {
    icon: <Server size={32} className="text-lime-400" />,
    title: "Backend Engineering",
    desc: "Building secure, scalable systems with Django, PostgreSQL, and modern API architectures.",
  },
  {
    icon: <Code size={32} className="text-lime-400" />,
    title: "Frontend Development",
    desc: "Creating fast, responsive web interfaces with React, Redux, TypeScript, and Tailwind CSS.",
  },
  {
    icon: <Smartphone size={32} className="text-lime-400" />,
    title: "Mobile Development",
    desc: "Developing cross-platform mobile apps using React Native with clean UI and smooth performance.",
  },
  {
    icon: <Palette size={32} className="text-lime-400" />,
    title: "UI/UX & Branding",
    desc: "Designing intuitive user experiences and unique digital identities that tell a story.",
  },
  {
    icon: <Settings size={32} className="text-lime-400" />,
    title: "DevOps & Cloud",
    desc: "Automating deployment, CI/CD pipelines, and cloud integration for reliability and speed.",
  },
  {
    icon: <Rocket size={32} className="text-lime-400" />,
    title: "Innovation & Leadership",
    desc: "Co-founder of Qreeblik Medical — driving tech that connects healthcare and innovation.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SkillsSection: React.FC = () => {
  return (
    <section className="px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Beyond the Code: A Full-Stack{" "}
          <span className="text-lime-400">Expertise</span>
        </h2>
        <p className="max-w-3xl mx-auto text-zinc-400">
          As a software engineer, I design end-to-end solutions that combine
          technical performance, intuitive design, and product strategy.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative flex flex-col items-start p-6 overflow-hidden transition-all duration-300 border shadow-lg bg-zinc-950/50 border-lime-400/20 rounded-2xl backdrop-blur-sm hover:border-lime-400/60 hover:shadow-lime-500/10"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_farthest-side,rgba(163,230,53,0.15),rgba(163,230,53,0))]"></div>
            </div>

            <div className="relative z-10">
              <div className="mb-5 transition-transform duration-300 transform group-hover:scale-110">
                {skill.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold tracking-wide text-white">
                {skill.title}
              </h3>
              <p className="leading-relaxed text-zinc-400">{skill.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

