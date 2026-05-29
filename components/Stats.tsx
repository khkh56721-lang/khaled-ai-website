import AnimatedNumber from './AnimatedNumber';

/*
 * Results section — kept Khaled's 6 stats per his preference, added:
 * 1. A small "what's counted" footnote per card → transparency = honesty signal
 * 2. Staggered count-up so the numbers don't all fire at the same moment (more delightful, less casino-like)
 * 3. A 7th, full-width "Latest shipment" anchor row beneath the grid — concrete proof
 *    that anchors the abstract stats to one real, named project.
 *
 * TODO: update each value/footnote as projects close. The footnotes exist
 * specifically so a B2B buyer can audit what's counted — they're the "show
 * your work" line that makes the headline number trustworthy.
 */
const results = [
  {
    value: '10+',
    label: 'Systems in production',
    sub: 'Voice agents, automation pipelines, and lead-gen workflows live for clients worldwide.',
    footnote: 'Counts every deployed automation that ran for ≥30 days in 2025–2026.',
  },
  {
    value: '1,000+',
    label: 'Hours of manual work eliminated',
    sub: 'Across enrichment, outreach, scheduling, and ops — automated end-to-end.',
    footnote: 'Estimated from client workflow time-savings × runtime since deployment.',
  },
  {
    value: '200+',
    label: 'Meetings booked',
    sub: 'Inbound + outbound, driven by automated lead-gen pipelines we built.',
    footnote: 'Counted across client lead-gen scenarios deployed and tracked in Make.',
  },
  {
    value: '100%',
    label: 'Project completion rate',
    sub: 'Every scoped project shipped. Nothing left half-built, nothing abandoned.',
    footnote: 'Scoped & paid engagements only. Discovery calls without a proposal not counted.',
  },
  {
    value: '24/7',
    label: 'Voice agents handling calls',
    sub: 'After-hours coverage, qualification, and appointment booking — no humans needed.',
    footnote: 'Live Vapi-based voice agents currently in production for real-estate + retail clients.',
  },
  {
    value: '98%',
    label: 'Client satisfaction',
    sub: 'Long-term partnerships, repeat work, real production usage.',
    footnote: 'Based on post-project feedback and repeat-engagement rate.',
  },
];

const latestShipment = {
  pill: 'Live · Q1 2026',
  name: 'French Voice Agent SaaS',
  desc: 'After-hours voice agent for real-estate + retail clients in France. Handles inbound calls, qualifies leads, and books appointments via SMS confirmation — all autonomous.',
  // TODO: when the next project ships, swap this card to feature that one and move this to a case-studies page.
};

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-glow blur-[180px] opacity-40"
      />
      <div className="container-tight relative">
        <div className="max-w-3xl">
          <p className="eyebrow">Results</p>
          <h2 className="heading-lg mt-3">
            Our work speaks through <span className="text-accent">numbers.</span>
          </h2>
          <p className="mt-5 text-base text-muted-strong">
            Eight months of building, deploying, and supporting AI systems for B2B teams
            of every size — from solo founders to global ops teams. Each number below has
            a footnote so you can see what&apos;s actually counted.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {results.map((s, idx) => (
            <div
              key={s.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-accent/50 md:p-7"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
              />
              <AnimatedNumber
                value={s.value}
                delayMs={idx * 160}
                className="text-5xl font-extrabold tracking-tight text-accent md:text-6xl"
              />
              <p className="mt-4 text-base font-extrabold text-white">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.sub}</p>
              <p className="mt-3 border-t border-border-soft pt-3 text-[10px] italic leading-relaxed text-muted/70">
                {s.footnote}
              </p>
            </div>
          ))}
        </div>

        {/* Latest shipment — concrete anchor under the abstract numbers */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent-soft to-transparent p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-accent">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  {latestShipment.pill}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">
                  Latest shipment
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-extrabold md:text-3xl">{latestShipment.name}</h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-strong">
                {latestShipment.desc}
              </p>
            </div>
            <a
              href="/contact/"
              className="btn-primary shrink-0 self-start md:self-center"
            >
              Build something similar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
