import React from "react";
import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Backend & APIs",
    techs: ["Django", "Spring Boot", "RESTful APIs", "GraphQL", "Celery"],
  },
  {
    title: "Frontend & Mobile",
    techs: ["React", "React Native", "Next.js", "Redux", "Tailwind CSS", "TypeScript", "JavaScript"],
  },
  {
    title: "Databases & DevOps",
    techs: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Docker", "GitHub Actions"],
  },
];

// A reusable component for a single scrolling row
const ScrollingTechRow: React.FC<{ techs: string[]; duration?: number; direction?: 'left' | 'right' }> = ({ techs, duration = 30, direction = 'left' }) => {
  // We need to duplicate the array to create a seamless loop
  const duplicatedTechs = [...techs, ...techs];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        transition={{ ease: "linear", duration, repeat: Infinity }}
      >
        {duplicatedTechs.map((tech, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-4 py-2 text-base font-medium border rounded-full text-zinc-300 border-zinc-700 bg-zinc-900"
          >
            {tech}
          </div>
        ))}
      </motion.div>
      {/* Gradient fade-out effect on the edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
};


const TechsSection: React.FC = () => {
  return (
    <section id="tech-stack" className="relative px-6 py-24 mx-auto max-w-7xl sm:px-8 lg:px-12">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          My Digital <span className="text-lime-400">Toolkit</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          The technologies I use to build high-performance, scalable, and beautiful applications from concept to deployment.
        </p>
      </motion.div>

      <div className="mt-16 space-y-8">
        {techCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="mb-4 text-xl font-semibold tracking-wide text-center text-white">
              {category.title}
            </h3>
            <ScrollingTechRow
              techs={category.techs}
              direction={index % 2 === 0 ? 'left' : 'right'} // Alternate scroll direction
              duration={25 + index * 5} // Vary speeds for a more dynamic feel
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechsSection;