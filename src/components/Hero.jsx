import React from 'react';
import { motion } from 'framer-motion';
// 1. Sabse pehle image ko import karein
import shivProfile from '../assets/shiv.jpeg'; 

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-12">
      
      {/* Left Content: Text & Badges */}
      <div className="max-w-4xl z-10 text-left">
        <h1 className="text-5xl md:text-[84px] font-bold leading-[1.1] text-[#444] tracking-tight">
          architecting <span className="text-white relative inline-block">
            solutions
            {/* Orange Hand-drawn Underline SVG */}
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 338 12" fill="none" preserveAspectRatio="none">
              <path 
                d="M3 9C118.5 2.5 220 2.5 335 9" 
                stroke="#f97316" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="animate-draw" 
              />
            </svg>
          </span> that <br />
          solve complex problems & <br />
          helps users interact with <br />
          <span className="text-white">intelligence....</span> 
          <span className="inline-block animate-bounce ml-2 text-4xl md:text-6xl">👀</span>
        </h1>

        {/* Floating Capsule for Role */}
        <div className="mt-16 relative w-fit">
          <div className="absolute inset-0 bg-white opacity-10 rounded-full blur-md"></div>
          <div className="relative border-2 border-white/60 rounded-full px-8 py-3 bg-black/40 backdrop-blur-md">
            <span className="handwritten text-2xl md:text-4xl text-white italic tracking-wide">
              Computer Science Student
            </span>
          </div>
        </div>

        {/* Work Experience Ticker (Bottom Text) */}
        <div className="mt-12">
          <p className="text-[10px] md:text-xs font-mono text-gray-500 tracking-[0.3em] uppercase">
            PRV. WORKED FOR <span className="text-green-500 font-bold">Codexpert</span>, 
            <span className="text-yellow-400 font-bold ml-2">CODEWEBX</span>, 
            <span className="text-blue-500 font-bold ml-2">CIB</span>
          </p>
        </div>
      </div>

      {/* Right Content: The Draggable Polaroid Photo */}
      <div className="relative mt-20 lg:mt-0 flex flex-col items-center">
        <motion.div 
          drag
          dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          whileTap={{ cursor: "grabbing" }}
          initial={{ rotate: 8, y: 20, opacity: 0 }}
          animate={{ rotate: 8, y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative cursor-grab bg-[#fdfdfd] p-4 pb-16 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] w-[280px] md:w-[340px]"
        >
          {/* Main Profile Image */}
          <div className="bg-gray-300 aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-gray-100">
            <img 
              src={shivProfile} // 2. Yahan variable use kiya hai jo Vercel build mein kaam karega
              alt="Shivansh Dwivedi" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* "Hi, I'm Shivansh" Text */}
          <div className="mt-6 relative">
            <p className="handwritten text-black text-3xl md:text-4xl">Hi, I'm Shivansh</p>
            {/* Decorative arrow icon */}
            <div className="absolute -top-12 -right-8 text-orange-500 transform rotate-12">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M7 7l10 10M17 7l-10 10" />
               </svg>
            </div>
          </div>

          {/* Tape Effect on Top */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-10 bg-orange-400/30 -rotate-2 backdrop-blur-[2px] border-x border-white/20 shadow-sm"></div>
        </motion.div>

        {/* Drag Hint */}
        <p className="handwritten text-gray-500 text-lg mt-8 opacity-50 flex items-center gap-2">
           <span className="animate-pulse">Drag to play</span> 
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
        </p>
      </div>

    </section>
  );
};

export default Hero;