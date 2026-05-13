// ─────────────────────────────────────────────────────────────
// components/sections/Portfolio.jsx
// Project showcase section.
//
// GSAP ScrollTrigger timeline (trigger: #portfolio, start:'top 90%'):
//   1. cardLayerRefs[] → from { x:-200, opacity:0, duration:1,
//                               stagger:{ amount:1.5, each:1 } }
//   2. imgRefs[]       → from { delay:0.4, opacity:0, duration:0.5,
//                               y:-40, ease:'bounce.out' }
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "../ui/Heading";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "../../data";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const cardLayerRefs = useRef([]);
  const imgRefs = useRef([]);

  useEffect(() => {
    const layers = cardLayerRefs.current.filter(Boolean);
    const imgs = imgRefs.current.filter(Boolean);
    if (!layers.length) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#portfolio",
            start: "top 90%",
            end: "bottom 70%",
            toggleActions: "play none none none",
          },
        })
        .from(layers, {
          x: -200,
          opacity: 0,
          duration: 1,
          stagger: { amount: 1.5, each: 1 },
        })
        .from(imgs, {
          delay: 0.4,
          opacity: 0,
          duration: 0.5,
          y: -40,
          ease: "bounce.out",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="relative z-10 py-24 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <Heading pre="Latest" highlight="Projects" />

        <div className="flex flex-col gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              bullets={p.bullets}
              href={p.href}
              cardRef={(el) => (cardLayerRefs.current[i] = el)}
              imgRef={(el) => (imgRefs.current[i] = el)}
              cardLabel={p.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
