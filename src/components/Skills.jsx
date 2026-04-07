import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skills = [
  { 
    name: 'React / Next.js', 
    level: 'Expert', 
    color: '#22d3ee', 
    icon: '⚛️',
    details: '{ status: "Mastered", hooks: "Custom", ssr: true }'
  },
  { 
    name: 'AI / LLM Integration', 
    level: 'Expert', 
    color: '#a855f7', 
    icon: '🧠',
    details: 'Prompt Engineering & RAG Architectures'
  },
  { 
    name: 'React Native', 
    level: 'Advanced', 
    color: '#3b82f6', 
    icon: '📱',
    details: 'Cross-platform native bridges & animations'
  },
  { 
    name: 'Python / ML', 
    level: 'Intermediate', 
    color: '#eab308', 
    icon: '🐍',
    details: 'Neural Networks & Data Processing'
  },
  { 
    name: 'Tailwind CSS', 
    level: 'Expert', 
    color: '#2dd4bf', 
    icon: '🎨',
    details: 'Design Systems & Responsive Layouts'
  },
  { 
    name: 'Node.js', 
    level: 'Advanced', 
    color: '#22c55e', 
    icon: '🟢',
    details: 'Microservices & Event-driven Architecture'
  },
];

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="playground" className="py-32 px-8 md:px-16 relative overflow-hidden">
      
      {/* Background Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header with floating animation */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row items-baseline gap-4 mb-20 relative z-10"
      >
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white opacity-90">
          LAB<span className="text-orange-500">.</span>
        </h2>
        <span className="handwritten text-orange-400 text-3xl md:text-4xl -rotate-6 animate-pulse">
          Technical Expertise
        </span>
      </motion.div>

      {/* Grid Layout - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`relative group cursor-crosshair overflow-hidden rounded-[2.5rem] border border-white/5 bg-zinc-900/50 backdrop-blur-xl p-8
              ${index === 0 || index === 5 ? 'md:col-span-7' : 'md:col-span-5'}`}
          >
            {/* Animated Gradient Border */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ 
                background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)` 
              }}
            />

            <div className="flex flex-col h-full justify-between relative z-10">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-125">
                    {skill.icon}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {skill.level}
                  </span>
                </div>
              </div>

              {/* Code-like details - Shows on hover */}
              <div className="mt-8 overflow-hidden">
                <p className="text-gray-400 text-sm font-mono leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                   <span className="text-orange-500">const</span> meta = <span className="text-gray-200 underline decoration-dotted">{skill.details}</span>;
                </p>
              </div>

              {/* Visual Tech Bar */}
              <div className="mt-6 relative h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  className="absolute h-full left-0 top-0"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </div>

            {/* Background floating text - Very faint */}
            <span className="absolute -bottom-4 -right-4 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-all">
              {index + 1}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Master Text */}
      <div className="mt-32 relative flex flex-col items-center">
         <motion.div 
           animate={{ y: [0, -10, 0] }}
           transition={{ duration: 4, repeat: Infinity }}
           className="p-12 border-2 border-dashed border-white/10 rounded-[3rem] text-center backdrop-blur-sm"
         >
            <p className="handwritten text-gray-400 text-3xl md:text-5xl opacity-80 leading-tight">
               Crafting digital <br />
               <span className="text-white underline decoration-orange-500 decoration-wavy underline-offset-8 italic">experiences</span> that scale.
            </p>
         </motion.div>
      </div>

    </section>
  );
};

export default Skills;