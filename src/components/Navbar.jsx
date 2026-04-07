import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent px-8 py-6 md:px-16 md:py-10 flex items-center justify-between">
      {/* Logo / Initials Section */}
      <div className="relative group cursor-pointer">
        <span className="handwritten text-4xl md:text-5xl text-gray-200 lowercase transition-transform duration-300 group-hover:scale-110 inline-block">
          Shivansh
        </span>
        {/* Subtle glow effect behind the logo */}
        <div className="absolute -inset-1 bg-white/5 blur-xl rounded-full -z-10 group-hover:bg-white/10 transition-all"></div>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 md:gap-12">
        <NavLink href="#works" label="Works" />
        <NavLink href="#playground" label="Playground" />
        <NavLink href="#resume" label="Resume" />
        <NavLink href="#contact" label="Contact" />
      </div>
    </nav>
  );
};

// Sub-component for individual links to keep code clean
const NavLink = ({ href, label }) => (
  <a 
    href={href} 
    className="handwritten text-xl md:text-2xl text-gray-400 hover:text-white transition-colors duration-300 relative group"
  >
    {label}
    {/* Animated underline effect on hover */}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
  </a>
);

export default Navbar;