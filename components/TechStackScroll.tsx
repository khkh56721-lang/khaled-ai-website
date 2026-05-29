import { TOOLS, ToolLogo } from './TechLogos';

export default function TechStackScroll() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <section className="py-16 md:py-20">
      <div className="container-tight">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted">
          The AI stack we ship with
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-bg to-transparent" />
        <ul className="flex w-max animate-scroll-x gap-8">
          {row.map((tool, i) => (
            <li
              key={`${tool.name}-${i}`}
              className="group relative flex h-28 w-36 shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-border-soft bg-card/60 px-4 transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <ToolLogo
                tool={tool}
                className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-muted">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
