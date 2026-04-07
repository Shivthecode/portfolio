import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";

// GSAP Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // GSAP Ticker setup
    const update = (time) => {
      ScrollTrigger.update();
    };
    gsap.ticker.add(update);
    
    return () => gsap.ticker.remove(update);
  }, []);

  // Jab tak component mount na ho, white screen na dikhe isliye loading state
  if (!isMounted) return <div className="bg-[#0a0a0a] min-h-screen" />;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white selection:bg-orange-500/40 font-sans overflow-x-hidden">
        
        {/* Cursor component with safety */}
        <Cursor />

        {/* Global Backgrounds */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.15] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <header className="relative z-50">
          <Navbar />
        </header>

        <main className="relative z-10">
          <Hero />
          <About />
          <Works />
          <Skills />
          <Contact />
        </main>

        <footer className="py-10 text-center opacity-20 text-[10px] uppercase tracking-[0.5em]">
          shivansh dwivedi © 2026
        </footer>
      </div>
    </ReactLenis>
  );
}

export default App;