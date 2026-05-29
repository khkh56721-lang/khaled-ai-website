import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="container-tight pb-10 pt-12 md:pt-20">
        <p className="eyebrow">Contact</p>
        <h1 className="heading-xl mt-4 max-w-3xl">
          Let&apos;s build <span className="text-accent">something.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-strong">
          Two ways to start. Pick the one that fits.
        </p>
      </section>

      <section className="container-tight grid gap-6 pb-12 md:grid-cols-2">
        <div className="card-surface flex flex-col p-7 md:p-9">
          <span className="self-start rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-accent">
            Option 01
          </span>
          <h2 className="mt-5 text-2xl font-extrabold">Book a discovery call</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-strong">
            Free 30 minutes. We map your current workflow, identify what to automate, and see if there&apos;s a real fit. No-pressure scope conversation.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-white">
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> 30 minutes</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> No-pressure scope</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> Proposal within 48 hours</li>
          </ul>
          {/* TODO: replace href with real Calendly URL once booking link is live */}
          <a
            href="#"
            aria-disabled
            className="btn-primary mt-auto w-full justify-center"
          >
            Book a call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="self-start rounded-full border border-border bg-card px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-muted">
            Option 02 — Send a message
          </span>
          <ContactForm />
        </div>
      </section>

      <section className="container-tight pb-16">
        <div className="card-surface p-7 md:p-9">
          <p className="eyebrow">What to expect</p>
          <h2 className="mt-3 text-2xl font-extrabold">
            We work with B2B teams that need:
          </h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {['Voice agents (Vapi)', 'Lead-gen automation', 'Ops workflows (Make / n8n)'].map((item) => (
              <li key={item} className="rounded-2xl border border-border bg-bg px-5 py-4 text-sm font-semibold text-white">
                <span className="mr-2 text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-strong">
            Typical response time: <span className="font-semibold text-white">24 hours.</span> Payment via Wise. English-speaking B2B clients globally.
          </p>
        </div>
      </section>
    </>
  );
}
