// ─────────────────────────────────────────────────────────────
// components/sections/Skills.jsx
// Renders three skill columns (Coding / Professional / Soft).
// Each SkillBar handles its own GSAP ScrollTrigger animation.
// ─────────────────────────────────────────────────────────────

import Heading from "../ui/Heading";
import SkillBar from "../ui/SkillBar";
import { CODING_SKILLS, PRO_SKILLS, SOFT_SKILLS } from "../../data";

function SkillColumn({ title, skills }) {
  return (
    <div>
      <h3 className="text-sm font-mono tracking-[0.3em] text-violet-400 uppercase mb-6 pb-2 border-b border-violet-900">
        {title}
      </h3>
      {skills.map((s, i) => (
        <SkillBar key={s.label} label={s.label} pct={s.pct} index={i} />
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Heading pre="My" highlight="Skills" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <SkillColumn title="Coding Skills" skills={CODING_SKILLS} />
          <SkillColumn title="Professional Skills" skills={PRO_SKILLS} />
          <SkillColumn title="Soft Skills" skills={SOFT_SKILLS} />
        </div>
      </div>
    </section>
  );
}
