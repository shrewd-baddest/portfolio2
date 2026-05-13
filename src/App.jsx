// ─────────────────────────────────────────────────────────────
// App.jsx  —  Root component
// Composes all sections in order. Each section is fully
// self-contained with its own GSAP animations and state.
// ─────────────────────────────────────────────────────────────

import Hero from "./components/section/Hero";
import Navbar from "./components/section/Navbar";
import Portfolio from "./components/section/Portfolio";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "#07011f",
        fontFamily: "'Courier New', Courier, monospace",
      }}
    >
      {/* Ambient background blobs — purely decorative */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-fuchsia-700/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-700/15 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
