import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-64 w-96 rounded-full bg-accent/20 blur-[120px]"
        />
        <div className="relative max-w-2xl">
          <p className="eyebrow">Ready when you are</p>
          <h2 className="heading-lg mt-3">
            Let&apos;s build <span className="italic text-accent">something.</span>
          </h2>
          <p className="mt-5 text-base text-muted-strong">
            Free 30-min discovery call. We map your workflow, decide if there&apos;s a fit, and I send a scoped proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Book a discovery call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/resources" className="btn-secondary">
              Grab a free resource
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
