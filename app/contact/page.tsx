import ContactForm from '@/components/ContactForm';
import CalInline from '@/components/CalInline';

export default function ContactPage() {
  return (
    <>
      <section className="container-tight pb-10 pt-12 md:pt-20">
        <p className="eyebrow">Contact</p>
        <h1 className="heading-xl mt-4 max-w-3xl">
          Let&apos;s <span className="text-gradient">talk.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-strong">
          Two ways in: grab a free 30-minute roadmap call on the calendar below, or send a
          message and I&apos;ll reply within 24 hours.
        </p>
      </section>

      {/* Book a call — inline Cal.com calendar */}
      <section className="container-tight pb-14">
        <div className="mb-6 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <h2 className="text-xl font-extrabold text-white">Book a free roadmap call</h2>
          <span className="text-sm text-muted">· 30 min · no pitch</span>
        </div>
        <CalInline />
      </section>

      {/* Message form — the "prefer to write" path */}
      <section className="container-tight pb-12">
        <div className="mx-auto max-w-xl">
          <div className="mb-6 text-center">
            <p className="eyebrow justify-center">Prefer to write?</p>
            <h2 className="mt-3 text-2xl font-extrabold">Send a message instead</h2>
          </div>
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
