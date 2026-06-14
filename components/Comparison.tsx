const rows = [
  {
    topic: 'Targeting',
    them: 'Spray-and-pray cold lists. Copy-paste outreach.',
    us: 'Niche-locked B2B targeting with intent signals baked in.',
  },
  {
    topic: 'What they build',
    them: 'Tutorial-grade automations. Templates with your logo.',
    us: 'Custom systems designed around how your team actually works.',
  },
  {
    topic: 'Production readiness',
    them: 'Toy demos, mock data, never deployed at scale.',
    us: 'Live with paying clients. Real call volume. Real revenue.',
  },
  {
    topic: 'Handoff',
    them: 'Drops a ZIP and disappears when it breaks.',
    us: 'Loom walkthroughs, docs, and a real support window.',
  },
  {
    topic: 'Outcome',
    them: 'You pay for hours that produce nothing.',
    us: "You pay for a system that runs after we're gone.",
  },
];

export default function Comparison() {
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="reveal-on-scroll mx-auto max-w-3xl text-center">
        <p className="eyebrow mx-auto justify-center">The difference</p>
        <h2 className="heading-lg mt-3">
          Most AI agencies <span className="text-gradient">look the same.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-strong">
          Same templates, same promises, same disappearing act. Here&apos;s how Khaled AI works
          differently — row by row.
        </p>
      </div>

      <div className="reveal-on-scroll mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm">
        <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-[160px_1fr_1fr] md:divide-x md:divide-y-0">
          <div className="hidden bg-bg-soft px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] text-muted md:block" />
          <div className="hidden bg-bg-soft px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] text-danger md:block">
            What 99% of agencies do
          </div>
          <div className="hidden bg-bg-soft px-6 py-4 text-xs font-mono uppercase tracking-[0.2em] text-accent md:block">
            The Khaled AI way
          </div>
        </div>

        {rows.map((row, idx) => (
          <div
            key={row.topic}
            className={`grid grid-cols-1 divide-y divide-border md:grid-cols-[160px_1fr_1fr] md:divide-x md:divide-y-0 ${
              idx % 2 === 0 ? 'bg-transparent' : 'bg-bg-soft/40'
            }`}
          >
            <div className="px-6 py-5 md:py-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted">
                {String(idx + 1).padStart(2, '0')}
              </p>
              <p className="mt-2 text-sm font-extrabold text-white">{row.topic}</p>
            </div>

            <div className="flex gap-3 px-6 py-5 md:py-6">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-danger-soft text-danger">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-muted-strong">
                <span className="font-bold text-white md:hidden">Them: </span>
                {row.them}
              </p>
            </div>

            <div className="flex gap-3 px-6 py-5 md:py-6">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-sm leading-relaxed text-white">
                <span className="font-bold text-accent md:hidden">Us: </span>
                {row.us}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
