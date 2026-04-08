import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Function to handle manual scroll if needed (Optional)
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 px-8 md:px-16 min-h-screen flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.5em] text-gray-500 mb-4 font-mono">
            / bits about me
          </h2>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            Who is <span className="handwritten text-orange-500 italic lowercase">shivansh?</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: The Narrative */}
          <div className="space-y-8 text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
            <p>
              I am a <span className="text-white font-medium">Computer Science & Engineering student</span> with a deep obsession for how 
              <span className="text-green-400 italic"> humans</span> and <span className="text-blue-400 italic"> machines</span> interact. 
            </p>
            
            <p className="relative">
              Currently, I'm building <span className="text-white border-b border-orange-500/50">Codexpert</span>, 
              an AI-driven platform that simplifies development workflows. My goal is to remove the "confusion" 
              from complex code architectures.
              
              <span className="hidden md:block absolute -right-32 top-0 handwritten text-orange-400 text-lg rotate-12 w-40 opacity-70">
                "Always learning, always coding..."
              </span>
            </p>

            <p>
              When I'm not pushing code to <span className="text-white">GitHub</span> or brainstorming for 
              <span className="text-pink-500"> Codewebx</span>, you'll find me exploring the mountains or 
              getting lost in a rain-themed anime. 🏔️🌧️
            </p>
          </div>

          {/* Right Column: Quick Facts */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-[80px]"></div>
            
            <h3 className="handwritten text-3xl text-white mb-8">What drives me:</h3>
            
            <ul className="space-y-6">
              <FactItem number="01" title="AI & Psychology" detail="Interested in how 'Thinking, Fast and Slow' applies to UI design." />
              <FactItem number="02" title="Nature Lover" detail="The best logic often comes from a quiet walk in the woods." />
              <FactItem number="03" title="Startup Mindset" detail="From Codexpert to Codewebx, I love building from 0 to 1." />
              <FactItem number="04" title="Problem Solver" detail="If it's broken, I'll fix it. If it works, I'll optimize it." />
            </ul>
          </div>
        </div>

        {/* --- CTA: Redirect to Contact --- */}
        <a href="#contact" className="inline-block mt-24">
          <motion.div 
            whileHover={{ x: 20 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer inline-flex items-center gap-6"
          >
            {/* Animated Circle Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-orange-500 flex items-center justify-center group-hover:bg-orange-500 transition-all duration-500">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500 group-hover:text-black transition-colors duration-500">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>

            {/* CTA Text */}
            <div className="flex flex-col">
              <span className="text-3xl md:text-6xl font-bold group-hover:text-orange-500 transition-colors duration-500">
                Wanna collaborate?
              </span>
              <span className="text-gray-600 font-mono text-xs uppercase tracking-[0.3em] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                / Click to scroll
              </span>
            </div>
          </motion.div>
        </a>

      </div>
    </section>
  );
};

const FactItem = ({ number, title, detail }) => (
  <li className="flex gap-6 group">
    <span className="font-mono text-orange-500/50 text-sm mt-1">{number}</span>
    <div>
      <h4 className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors">{title}</h4>
      <p className="text-gray-500 text-sm mt-1">{detail}</p>
    </div>
  </li>
);

export default About;