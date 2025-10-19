import { useEffect, useRef } from "react";
import "./index.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Projects from "./components/Projects";
import Techs from "./components/Techs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;
      bgRef.current.style.setProperty("--cursor-x", `${x}%`);
      bgRef.current.style.setProperty("--cursor-y", `${y}%`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        background:
          // UPDATED: Changed orange RGBA to lime green RGBA for the cursor glow
          "radial-gradient(at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(163, 230, 53, 0.15), transparent 60%), linear-gradient(to bottom, #000000, #111111, #0a0a0a)",
      }}
    >
      {/* UPDATED: Changed orange hex code to lime green in the animated gradient */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(45deg,#000,#1a1a1a,#a3e635,#000)] bg-[length:400%_400%] opacity-30 pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            // UPDATED: Changed from bg-orange-400 to bg-lime-400 for the particles
            className="absolute w-1.5 h-1.5 bg-lime-400/40 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Body />
        <Techs />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;