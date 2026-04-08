import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menu Toggle Function
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { href: "#works", label: "Works" },
    { href: "#playground", label: "Playground" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-transparent px-8 py-6 md:px-16 md:py-10 flex items-center justify-between relative z-[100]">
      
      {/* Logo Section */}
      <div className="relative group cursor-pointer">
        <span className="handwritten text-4xl md:text-5xl text-gray-200 lowercase transition-transform duration-300 group-hover:scale-110 inline-block">
          Shivansh
        </span>
        <div className="absolute -inset-1 bg-white/5 blur-xl rounded-full -z-10 group-hover:bg-white/10 transition-all"></div>
      </div>

      {/* --- DESKTOP NAVIGATION --- */}
      <div className="hidden md:flex items-center gap-12">
        {menuLinks.map((link) => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))}
      </div>

      {/* --- MOBILE HAMBURGER (Advanced Morphing) --- */}
      <div className="md:hidden z-[110]" onClick={toggleMenu}>
        <div className="relative w-10 h-10 flex flex-col justify-center items-center cursor-pointer">
          {/* Top Line */}
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
            className="w-8 h-[2px] bg-white absolute rounded-full"
          />
          {/* Middle Line */}
          <motion.span 
            animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
            className="w-8 h-[2px] bg-orange-500 absolute rounded-full"
          />
          {/* Bottom Line */}
          <motion.span 
            animate={isOpen ? { rotate: -45, y: 2 } : { rotate: 0, y: 8 }}
            className="w-8 h-[2px] bg-white absolute rounded-full"
          />
        </div>
      </div>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-[105] flex flex-col items-center justify-center"
          >
            {/* Background Decorative Text */}
            <div className="absolute top-20 left-10 opacity-[0.03] pointer-events-none select-none">
              <h1 className="text-[150px] font-black uppercase tracking-tighter">Menu</h1>
            </div>

            <div className="flex flex-col items-center gap-8">
              {menuLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Click pe menu band
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="handwritten text-5xl text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer/Socials in Menu */}
            <div className="absolute bottom-12 flex gap-8">
              <SocialLink label="GH" href="#" />
              <SocialLink label="LI" href="#" />
              <SocialLink label="TW" href="#" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Sub-components
const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="handwritten text-2xl text-gray-400 hover:text-white transition-colors duration-300 relative group"
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const SocialLink = ({ label, href }) => (
  <a href={href} className="text-xs font-mono tracking-widest text-gray-600 hover:text-white transition-colors">
    [{label}]
  </a>
);

export default Navbar;