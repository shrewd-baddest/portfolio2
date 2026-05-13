export default function Heading({ pre, highlight }) {
  return (
    <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">
      <span className="text-white">{pre} </span>
      <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">
        {highlight}
      </span>
    </h2>
  );
}
