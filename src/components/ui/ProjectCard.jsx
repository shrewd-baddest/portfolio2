import SE from "../../assets/dhls5o34.png";
import heroImg from "../../assets/istockphoto-1462651815-612x612.jpg";
import graphDesign from "../../assets/istockphoto-1091439170-612x612.jpg";
import seo from "../../assets/istockphoto-1444868074-612x612.jpg";
import air from "../../assets/istockphoto-1462651844-612x612.jpg";

export default function ProjectCard({
  title,
  bullets,
  href,
  cardRef,
  imgRef,
  cardLabel,
}) {
  const icons = {
    "E-commerce": SE,
    "Admin Panel": heroImg,
    Marketplace: graphDesign,
    Slider: seo,
    Aircraft: air,
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-violet-500/60 hover:bg-violet-900/20 transition-colors duration-300">
      {/* .portfolio-layer — GSAP slides this in from the left */}
      <div ref={cardRef} className="flex-1">
        <a
          href={href || "#"}
          target={href && href !== "#" ? "_blank" : undefined}
          rel="noreferrer"
          className="group"
        >
          <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-violet-300 transition-colors flex items-start gap-2">
            <span className="text-violet-500 mt-0.5">▸</span>
            {title}
          </h3>
        </a>

        <ul className="space-y-1.5">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="text-sm text-white/65 leading-relaxed pl-4 border-l border-violet-500/30"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div ref={imgRef}>
        <img
          className="shrink-0 w-16 h-16 rounded-xl bg-linear-to-br from-violet-700 to-fuchsia-700 flex items-center justify-center text-2xl font-black text-white shadow-lg"
          src={icons[cardLabel] || SE}
          alt={cardLabel}
        />
      </div>

      {/* .imag — GSAP drops this in from above */}
    </div>
  );
}
