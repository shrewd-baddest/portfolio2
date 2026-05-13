import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function SkillBar({ label, pct, index = 0 }) {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { width: "0%" },
      {
        width: `${pct}%`,
        duration: 1.2,
        ease: "power2.out",
        delay: index * 0.08,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      },
    );
  }, [pct, index]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-mono text-violet-300 tracking-widest uppercase">
          {label}
        </span>
        <span className="text-sm font-mono text-violet-400">{pct}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full bg-linear-to-r from-violet-500 to-fuchsia-400"
          style={{ width: "0%" }}
        />
      </div>
    </div>
  );
}
