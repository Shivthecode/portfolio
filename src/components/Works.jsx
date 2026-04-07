import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Codexpert",
    category: "AI / Web App",
    description: "An AI-powered platform for developers to streamline coding workflows and documentation.",
    tech: ["React", "Node.js", "OpenAI API"],
    link: "https://github.com/Shivthecode/codeXpert.git",
    color: "bg-green-500/10"
  },
  {
    id: 2,
    title: "Hello-11",
    category: "Mobile App",
    description: "A cross-platform React Native application focused on seamless user communication.",
    tech: ["React Native", "Firebase", "Redux"],
    link: "https://github.com/codewebxteam/Hello-11-App.git",
    color: "bg-blue-500/10"
  },
  {
    id: 3,
    title: "CIB",
    category: "Social Web App",
    description: "A webapp that help to solve social problems",
    tech: ["Next.js", "Tailwind", "Lenis"],
    link: "https://github.com/Shivthecode/cib.git",
    color: "bg-pink-500/10"
  }
];

const Works = () => {
  return (
    <section id="works" className="py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs mb-4 font-mono">/ selected works</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              Featured <span className="handwritten text-orange-500 italic lowercase">projects.</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 text-sm italic">
            A collection of digital products focused on solving real-world problems with code.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl border border-white/5 p-8 transition-all hover:border-orange-500/30 ${project.color}`}
            >
              {/* Category Tag */}
              <span className="text-[10px] uppercase tracking-widest text-orange-500 font-mono font-bold">
                {project.category}
              </span>

              {/* Title & Description */}
              <h3 className="text-3xl font-bold mt-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                {project.title}
              </h3>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-orange-500 transition-colors"
              >
                View Case Study 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              {/* Hand-drawn number icon (Top Right) */}
              <span className="absolute top-6 right-8 handwritten text-4xl opacity-10 group-hover:opacity-100 transition-opacity text-orange-500">
                0{project.id}
              </span>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center">
          <p className="handwritten text-gray-500 text-2xl mb-4 italic">Want to see more code?</p>
          <a 
            href="https://github.com" 
            target="_blank" 
            className="text-white border-b-2 border-orange-500 pb-1 hover:text-orange-500 transition-all font-bold tracking-widest text-sm uppercase"
          >
            Explore My GitHub Repository
          </a>
        </div>

      </div>
    </section>
  );
};

export default Works;