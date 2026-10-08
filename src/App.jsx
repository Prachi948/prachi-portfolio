import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";

import { initSmoothScroll } from "./lib/scroll";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const marquee = [
  "JAVA",
  "SPRING BOOT",
  "AI AGENTS",
  "INDUSTRIAL AUTOMATION",
  "SCADA",
  "MICROSERVICES",
  "QUARKUS",
  "OPC-UA",
];

/* Glow that trails the cursor — driven by motion values, no re-renders */
function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const sx = useSpring(x, { stiffness: 90, damping: 22, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 90, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    const move = (e) => {
      x.set(e.clientX - 210);
      y.set(e.clientY - 210);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} />;
}

function PageProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });
  return <motion.div className="page-progress" style={{ scaleX }} />;
}

function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-copy" key={copy}>
            {marquee.map((item) => (
              <span key={item} style={{ display: "contents" }}>
                <span>{item}</span>
                <i>✦</i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => initSmoothScroll(), []);

  return (
    <>
      <PageProgress />
      <CursorGlow />
      <div className="noise" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
