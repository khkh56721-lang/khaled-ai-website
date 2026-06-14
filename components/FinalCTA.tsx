import { bookingUrl, calAttrs } from '@/lib/booking';

export default function FinalCTA() {
  return (
    <section className="container-tight py-20 md:py-28">
      <div className="reveal-on-scroll relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-64 w-96 rounded-full bg-accent/20 blur-[120px]"
        />
        <div className="relative max-w-2xl">
          <p className="eyebrow">Free · No commitment</p>
          <h2 className="heading-lg mt-3">
            Get your free <span className="text-gradient">AI roadmap.</span>
          </h2>
          <p className="mt-5 text-base text-muted-strong">
            A 30-minute call where we look at your workflow together and map exactly
            where AI would save you time — and where it wouldn&apos;t. You walk away with
            a clear roadmap either way. No pitch, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={bookingUrl} {...calAttrs} className="btn-primary">
              Get my free roadmap
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@khaledakhyarhoum"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
