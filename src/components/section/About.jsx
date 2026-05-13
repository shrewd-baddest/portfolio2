import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImg from "../../assets/shrewd.jpg";
import Heading from "../ui/Heading";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const shrewdRef = useRef(null);
  const contHeadRef = useRef(null);
  const contParRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: shrewdRef.current,
            start: "top 90%",
            end: "bottom 70%",
          },
        })
        .from(shrewdRef.current, { y: 200, duration: 1, opacity: 0 })
        .from(contHeadRef.current, {
          fontSize: "0.2rem",
          duration: 1,
          ease: "power2.in",
        })
        .from(contParRef.current, {
          fontSize: "0.2rem",
          duration: 3,
          ease: "power2.inOut",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="relative z-10 py-24 bg-white/2">
      <div className="max-w-6xl mx-auto px-6">
        <Heading pre="About" highlight="Me" />

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* #shrewd — rises from below on scroll */}
          <div
            ref={shrewdRef}
            className="shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-linear-to-br from-violet-700 to-fuchsia-700 flex items-center justify-center text-6xl font-black text-white shadow-2xl shadow-violet-900/50"
          >
            <img
              className="shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full bg-linear-to-br from-violet-700 to-fuchsia-700 flex items-center justify-center text-6xl font-black text-white shadow-2xl shadow-violet-900/50"
              src={myImg}
              alt="Onsongo"
            />
          </div>

          <div>
            {/* .cont-head — grows from tiny font size */}
            <h3
              ref={contHeadRef}
              className="text-2xl font-bold text-violet-300 mb-4"
            >
              Full Stack Developer !
            </h3>

            {/* .cont-par — grows from tiny font size */}
            <p
              ref={contParRef}
              className="text-white/60 leading-relaxed font-sans text-base"
            >
              Passionate third-year software engineering student dedicated to
              mastering the art of coding. Eager to explore diverse facets of
              technology, from algorithm design to web development. Enthusiastic
              about problem-solving and collaborating on innovative projects.
              Proficient in JavaScript and its frameworks — React, Node.js,
              Express.js — as well as HTML/CSS, Tailwind CSS, and PHP.
              Constantly seeking opportunities to expand skills and contribute
              to the ever-evolving tech landscape. Let's build the future
              together!
            </p>

            <a
              href="#skills"
              className="inline-block mt-6 px-6 py-2 border border-violet-500/50 rounded-full font-mono text-sm text-violet-300 hover:bg-violet-900/40 hover:border-violet-400 transition-all duration-200"
            >
              My Skills →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
