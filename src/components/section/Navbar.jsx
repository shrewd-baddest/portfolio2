// ─────────────────────────────────────────────────────────────
// components/sections/Navbar.jsx
// Sticky header with desktop nav + mobile hamburger drawer.
// Goes dark/blurred once the user scrolls past 40 px.
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-black tracking-widest text-violet-400 hover:text-violet-300 transition-colors"
        >
          PAUL
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-mono tracking-widest text-white/60 hover:text-violet-300 transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-violet-400 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-violet-400 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-violet-400 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95 backdrop-blur-md ${
          menuOpen ? "max-h-80 border-b border-violet-900/40" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-mono tracking-widest text-white/70 hover:text-violet-300 transition-colors uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
