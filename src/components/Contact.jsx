import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  // 1. Apne real links yahan update kar lo
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shivthecoder/' },
    { name: 'GitHub', url: 'https://github.com/Shivthecode' },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle' },
    { name: 'Instagram', url: 'https://instagram.com/yourhandle' },
  ];

  return (
    <section id="contact" className="py-24 px-8 md:px-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <h2 className="handwritten text-orange-500 text-3xl mb-2 rotate-[-2deg]">Got a project?</h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            Let’s build <span className="text-gray-500 italic">together.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Direct Contact & Socials */}
          <div className="space-y-12 order-2 lg:order-1">
            <div>
              <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-6 font-mono italic">/ drop a line</p>
              <a 
                href="mailto:srd887490@gmail.com" 
                className="text-3xl md:text-5xl font-light hover:text-orange-500 transition-colors duration-500 break-all underline decoration-gray-800 underline-offset-8"
              >
                srd887490@gmail.com
              </a>
            </div>

            <div className="relative">
              <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-6 font-mono">/ stalk my socials</p>
              <div className="flex flex-col gap-4 items-start">
                {/* 2. Map through socialLinks with URL and Target */}
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"        // New tab mein khulne ke liye
                    rel="noopener noreferrer" // Security ke liye
                    whileHover={{ x: 10, color: '#f97316' }}
                    className="text-2xl font-bold text-gray-300 cursor-pointer"
                  >
                    {social.name} .
                  </motion.a>
                ))}
              </div>
              
              {/* Hand-drawn arrow pointing to the form */}
              <div className="absolute hidden lg:block -right-10 top-1/2 transform -translate-y-1/2">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="opacity-30">
                    <path d="M10 50 Q 50 50, 90 50 M90 50 L80 40 M90 50 L80 60" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
                 </svg>
                 <p className="handwritten text-orange-400 text-sm mt-2 ml-4">Fill this up!</p>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm order-1 lg:order-2"
          >
            <form className="space-y-10">
              <div className="group border-b border-white/10 focus-within:border-orange-500 transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-widest text-gray-600 block mb-2 font-mono">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Shivansh Dwivedi" 
                  className="bg-transparent w-full text-xl md:text-2xl text-white outline-none placeholder:text-gray-800"
                />
              </div>

              <div className="group border-b border-white/10 focus-within:border-orange-500 transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-widest text-gray-600 block mb-2 font-mono">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@world.com" 
                  className="bg-transparent w-full text-xl md:text-2xl text-white outline-none placeholder:text-gray-800"
                />
              </div>

              <div className="group border-b border-white/10 focus-within:border-orange-500 transition-colors pb-4">
                <label className="text-[10px] uppercase tracking-widest text-gray-600 block mb-2 font-mono">Your Message</label>
                <textarea 
                  rows="3"
                  placeholder="Tell me about your amazing project..." 
                  className="bg-transparent w-full text-xl md:text-2xl text-white outline-none placeholder:text-gray-800 resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-6 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-500 uppercase tracking-widest"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;