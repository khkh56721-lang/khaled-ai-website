const points = [
  {
    title: 'Real systems, not theory',
    desc: 'Everything we ship runs in production for a real client or our own ops. No tutorial demos, no toy projects.',
  },
  {
    title: 'Full process transparency',
    desc: 'Every build comes with a Loom walkthrough and docs. You see the wiring, the prompts, the why — your team owns it.',
  },
  {
    title: 'Budget-aware stack',
    desc: 'We default to no-code (Make, n8n) when it fits. Custom code only when it earns its keep in your ops.',
  },
  {
    title: 'B2B specialists',
    desc: 'Voice agents, lead-gen, and ops automation for B2B teams. We don&apos;t pretend to do everything — we do this well.',
  },
];

export default function WhyMe() {
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <p className="eyebrow">Why us</p>
          <h2 className="heading-lg mt-3">
            Built different.<br />
            <span className="text-accent">Shipped different.</span>
          </h2>
          <p className="mt-5 text-base text-muted-strong">
            A focused team obsessed with AI automation for B2B. We say no to the wrong fits so we
            can ship great work for the right ones.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {points.map((p, i) => (
            <div key={p.title} className="card-surface p-6">
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
