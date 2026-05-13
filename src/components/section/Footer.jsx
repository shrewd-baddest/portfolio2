// ─────────────────────────────────────────────────────────────
// components/sections/Footer.jsx
// Simple footer with copyright and back-to-top link.
// ─────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 border-t border-white/5 text-center">
      <p className="text-xs font-mono text-white/30 tracking-widest">
        © 2025 PAUL ONSONGO — ALL RIGHTS RESERVED
      </p>
      <a
        href="#home"
        className="inline-block mt-4 text-xs font-mono text-violet-500 hover:text-violet-300 tracking-widest transition-colors"
      >
        ↑ BACK TO TOP
      </a>
    </footer>
  );
}
