import Link from 'next/link';
import Image from 'next/image';

const stack = [
  'Make.com', 'n8n', 'Vapi', 'Claude Code', 'OpenAI', 'Gemini',
  'ElevenLabs', 'LiveKit', 'Instantly', 'HubSpot',
  'GoHighLevel', 'Slack', 'Airtable',
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-accent-glow opacity-40 blur-[160px]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 text-center md:px-10">
          <p className="eyebrow mx-auto justify-center">About</p>
          <h1 className="heading-xl mt-5 md:text-[6rem] md:leading-[1.02]">
            Real builds. <span className="text-gradient">Real systems.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-strong md:text-xl">
            The story behind Khaled AI — who&apos;s building, why we ship the way we do,
            and how we got here.
          </p>
        </div>
      </section>

      {/* FOUNDER PHOTO */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        {/* TODO: drop /public/khaled.jpg to replace KA placeholder. */}
        <div className="mx-auto w-full max-w-xl">
          <div className="relative">
            <div
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent/10 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
              <Image
                src="/khaled.jpg"
                alt="Khaled Akhyarhoum"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-border bg-bg/80 px-3.5 py-2 text-xs font-semibold backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Founder · Operator
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-border bg-bg/85 px-5 py-4 text-sm backdrop-blur">
                <p className="text-base font-extrabold text-white">Khaled Akhyarhoum</p>
                <p className="mt-1 text-xs text-muted">AI Automation Engineer · Building Globally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 lg:gap-24">
          <article className="space-y-7 text-lg leading-relaxed text-muted-strong md:text-xl md:leading-[1.7]">
            <p className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
              I&apos;m Khaled — 20, Mauritanian, building for clients worldwide.
            </p>
            <p>
              I&apos;m finishing my second year of mechatronics engineering. Before any of this
              clicked, I tried the usual list — dropshipping, trading, SMMA, e-books.
              Each promised &quot;passive income in 30 days&quot; and each taught me the same
              lesson: if it&apos;s a script, you&apos;re the product.
            </p>
            <p>
              Then I found AI automation. Not the &quot;ChatGPT will write your emails&quot; version
              — the real one. Make.com pipelines that move data between systems. Vapi voice
              agents that handle calls 24/7. Claude API workflows that do hours of work in
              seconds. Things businesses actually pay for because they actually work.
            </p>
            <p>
              I shipped my first paid build on Upwork. Then a French voice agent SaaS for
              real estate and retail — live, in production, taking real calls. Khaled AI is
              the agency wrapper around that work: B2B-only, voice agents + lead-gen + ops
              automation, shipped end-to-end.
            </p>
            <p className="text-xl font-extrabold text-white md:text-2xl">
              Everything here is something I&apos;ve built and shipped for a real business. I
              share exactly how it works, so you can build it too.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card/80 p-7 md:p-8">
              <p className="eyebrow">Our stack</p>
              <h3 className="mt-3 text-xl font-extrabold">Tools we ship with</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-bg-soft px-3 py-1.5 text-xs font-semibold text-silver"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 p-7 md:p-8">
              <p className="eyebrow">Watch the journey</p>
              <h3 className="mt-3 text-xl font-extrabold">Building in public</h3>
              <p className="mt-2 text-sm text-muted-strong">
                Every project, every workflow, every client lesson — broken down on YouTube.
              </p>
              {/* TODO: replace with real YouTube channel URL once created */}
              <a
                href="https://www.youtube.com/@khaledakhyarhoum"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-5 w-full justify-center"
              >
                Watch on YouTube
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 p-7 md:p-8">
              <p className="eyebrow">Work together</p>
              <h3 className="mt-3 text-xl font-extrabold">Got a workflow to automate?</h3>
              <p className="mt-2 text-sm text-muted-strong">
                Free 30-min discovery call. We&apos;ll see if there&apos;s a fit.
              </p>
              <Link href="/contact" className="btn-secondary mt-5 w-full justify-center">
                Start a project
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
