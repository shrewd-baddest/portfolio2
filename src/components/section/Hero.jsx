import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SOCIAL_LINKS } from "../../data";
import githubIcon from "../../assets/git1.png";
import linkedinIcon from "../../assets/linkedin.png";
import whatsAppIcon from "../../assets/wozapu.png";

export default function Hero() {
  const namesRef = useRef(null);
  const textAnimRef = useRef(null);
  const multiTextRef = useRef(null);
  const socialRefs = useRef([]);

  const icons = {
    GitHub: githubIcon,
    LinkedIn: linkedinIcon,
    WhatsApp: whatsAppIcon,
  };

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      namesRef.current,
      { x: -100, opacity: 0, duration: 2 },
      { opacity: 1, x: 0, duration: 2 },
    )
      .fromTo(
        textAnimRef.current,
        { x: -100, opacity: 0, duration: 2 },
        { x: 0, opacity: 1, duration: 2 },
      )
      .fromTo(
        multiTextRef.current,
        {
          fontSize: "0.2rem",
          duration: 3,
          ease: "power2.inOut",
        },
        { fontSize: "1rem", duration: 3, ease: "power2.inOut" },
      )
      .fromTo(
        socialRefs.current,
        {
          y: -100,
          opacity: 0,
          ease: "bounce.out",
          stagger: { amount: 1.5, from: "end" },
        },
        { y: 0, opacity: 1 },
      );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 z-10"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* .names — slides in from left */}
        <div ref={namesRef}>
          <p className="text-violet-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"></p>
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-none tracking-tight">
            Hallo, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
              Onsongo
            </span>
          </h1>
        </div>

        {/* .text-animate — slides in from left */}
        <div ref={textAnimRef} className="mb-4">
          <p className="text-xl md:text-2xl text-white/50 font-light mb-1">
            And I'm a
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white/80">
            Full Stack Developer
          </p>
        </div>

        {/* .multiple-text — grows from tiny font size */}
        <div className="mb-10">
          <p
            ref={multiTextRef}
            className="max-w-xl text-white/50 leading-relaxed font-sans text-base mb-8"
          >
            Aspiring software engineer, passionate about coding and
            problem-solving. Committed to learning, adapting, and contributing
            to innovative tech solutions.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-violet-600 hover:bg-violet-500 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-200 hover:shadow-lg hover:shadow-violet-700/50 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* #social — staggered bounce drop from top */}
        <div className="flex gap-6 mt-8">
          {SOCIAL_LINKS.map((s, i) => (
            <a
              key={s.label}
              ref={(el) => (socialRefs.current[i] = el)}
              href={s.href}
              title={s.title}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={icons[s.label]}
                alt={s.label}
                className="w-11 h-11 rounded-full border border-violet-500/40 flex items-center justify-center text-xs font-mono font-bold text-violet-400 hover:border-violet-400 hover:bg-violet-900/40 hover:text-white transition-all duration-200 hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        {/* <span className="text-xs font-mono tracking-widest">SCROLL</span> */}
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}
