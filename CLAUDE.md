# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public marketing site for **Khaled AI** (khaled-ai.com). One-person AI automation agency targeting B2B teams. See `../CLAUDE.md` for full brand identity and the wider personal-brand operation; this file is only about the website code.

## Commands

```sh
npm install            # first run only
npm run dev            # local dev → http://localhost:3000 (Turbopack)
npm run build          # full type-check + static export to ./out
npm run lint           # next lint
```

No tests yet — verification is `npm run build` (TypeScript runs in build) followed by manual check of all 4 routes in the dev server. After any non-trivial change, **always restart `npm run dev` and surface the URL to the user** (see `~/.claude/projects/-Users-khaledkhyarhoum-ME/memory/feedback_run_and_show.md`).

## Stack & deploy target

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind 3.4
- `output: 'export'` in `next.config.js` → fully static `./out/` directory, deployed to Cloudflare Pages
- **No server runtime in production.** No API routes, no middleware, no Server Actions. If a feature needs a server, use a Cloudflare Pages Function (`functions/`) instead — but currently we don't.
- Image optimization is off (`images.unoptimized: true`) — static export requires this. Use plain `<img>` for external URLs (simple-icons CDN, etc.).

## Architecture

Flat App Router layout. There are only 4 user-facing routes — keep it that way unless explicitly adding a new page:

- `app/page.tsx` — Home. Composes ~10 section components in a fixed order. Touching the home page = touching `components/`.
- `app/about/page.tsx`, `app/resources/page.tsx`, `app/contact/page.tsx`
- `app/layout.tsx` mounts `<Navbar>` + `<Footer>` globally and loads Inter via `next/font/google`.

Every section of the home page is its own file in `components/`. Sections that need state (`HowItWorks`, `Stats`, `WhatIDo`'s `AnimatedNumber`, `LeadModal`, `ContactForm`, `Navbar`) are marked `'use client'`. Everything else is a server component.

### Lead capture flow

`lib/submitLead.ts` is the single entry point. It `POST`s JSON to `NEXT_PUBLIC_MAKE_WEBHOOK_URL` (Make.com webhook). If the env var is unset (dev without Make wired up), it `console.warn`s and returns `{ ok: true }` so the UI flows through to the thank-you state — **do not** add a hard error path, the placeholder warn is intentional.

Two callers: `components/LeadModal.tsx` (resource downloads, `type: 'resource'`) and `components/ContactForm.tsx` (`type: 'contact'`). Webhook URL goes in `.env.local` (template: `.env.local.example`). **No local DB, no JSON file** — Make.com / Instantly is the source of truth.

### Brand tokens (single source: `tailwind.config.ts`)

| Token | Value | Use |
|---|---|---|
| `bg` | `#161616` | page background |
| `bg-soft` | `#1A1A1A` | section accents, alternate rows |
| `card` | `#1F1F1F` | all cards |
| `border` | `#2E2E2E` | most borders |
| `accent` | `#4ADE80` (mint) | CTAs, headlines, glows |
| `accent-glow` | `rgba(74,222,128,0.22)` | radial blur backgrounds |
| `muted` / `muted-strong` / `silver` | gray scale | body copy hierarchy |

Background radial gradients live in `app/globals.css` (`html, body`), `background-attachment: fixed` so they stay put on scroll. Don't add per-section background colors — let the body gradient bleed through with `bg-card/80` etc.

Buttons on mint = **dark text** (`text-bg`). Forgetting this means white-on-mint = unreadable. `.btn-primary` in `globals.css` already handles this.

The eyebrow style (`.eyebrow` in `globals.css`) renders a small dash via `::before` — never write `// Eyebrow text` literally in JSX, the dash is added automatically.

### Tool logos (the gotcha)

`components/TechLogos.tsx` is the canonical list of brand logos used across the site.

- Most logos pull live from `cdn.simpleicons.org/{slug}` (real brand SVGs, MIT/CC0).
- **3 brands had their logos removed from simple-icons** (Microsoft, Slack, OpenAI requested takedown). For those (OpenAI, Slack, VS Code) the SVG is inlined directly in `TechLogos.tsx` via the `node` field. If you add a new tool and the CDN 404s, do the same — verify with `curl -sI "https://cdn.simpleicons.org/<slug>"`.
- For brands whose official color is pure black (Notion, Cursor, ElevenLabs, LiveKit, LangChain), set `color: 'ffffff'` so the logo is visible on dark bg. For most others, omit `color` to use the brand default.

### Scroll-triggered animations (no libraries)

Two custom patterns — copy these instead of pulling in framer-motion:

1. **`components/AnimatedNumber.tsx`** — IntersectionObserver + `requestAnimationFrame` count-up. Parses the numeric portion of strings like `"1,000+"` or `"98%"`, animates 0 → target, reassembles prefix/suffix.
2. **`components/HowItWorks.tsx`** — scroll-position-based progress (not boolean intersect). Tracks `progress = 0..1` based on the section's `boundingClientRect` vs viewport, then computes phase activation from progress. **This is bidirectional** — scrolling up un-activates phases. Past versions used `Math.max(active, idx)` which only went forward; that broke the UX and was explicitly rejected by the user.

## Brand voice (load-bearing decisions)

These weren't arbitrary — they were chosen after explicit user discussion. Don't revert without asking:

- **Hybrid positioning**: agency tone (`we`/`our`, no age, results-focused) on the home page; founder story (`I`, 20yo, mechatronics, building in public) preserved on the About page. Mirrors abiklabs.com. Pure-personal or pure-agency were considered and rejected.
- **No "Content & Teaching" pillar** on home — the 3 service cards are AI Automation Systems / Voice AI Agents / AI Lead Gen & Outreach. B2B buyers are the target, not content viewers.
- **Anti-guru rules** (also in `../CLAUDE.md`): no fake testimonials, no income screenshots, no pricing pages, no popup spam. Stats are honest-but-conservative with `TODO:` markers — bumping them as projects close is fine, fabricating is not.
- **Photo placement**: founder photo lives **only on the About page**. The home hero is centered text. An earlier version had the photo in the hero; the user moved it.

## TODOs (search for `TODO:`)

Active placeholders that need real values before launch:

- `/public/khaled.jpg` — drop a real photo, then swap the "KA" initials blocks in `app/about/page.tsx` (founder card) for `<img src="/khaled.jpg">`.
- YouTube channel URL — referenced in `components/Footer.tsx` and `app/about/page.tsx` as `https://youtube.com/@khaled-ai` (placeholder).
- Calendly URL — `app/contact/page.tsx` "Book a call" button is currently `href="#"`.
- `NEXT_PUBLIC_MAKE_WEBHOOK_URL` — set in `.env.local`.
- Stat values in `components/Stats.tsx` and `components/WhatIDo.tsx` — update as real numbers come in.
- 3 resource entries in `app/resources/page.tsx` are placeholders until the actual lead magnets exist.

## What NOT to do

- Don't add API routes — they don't work with static export. Use a Cloudflare Pages Function or a client-side fetch to a webhook.
- Don't add a database / local JSON for lead capture — explicitly rejected. Make.com webhook only.
- Don't add framer-motion or a counter library — the two custom patterns above cover every animation we need.
- Don't put `//` markers in eyebrow text or anywhere visible to users — the user removed every one of them. The dash before each eyebrow is rendered via CSS `::before`.
- Don't widen home page sections beyond `max-w-7xl`. The current sizing was tuned in feedback.

## Reference

- Stack/positioning context: `../CLAUDE.md` (this is `~/ME/CLAUDE.md`)
- Visual reference (frequent comparisons): https://abiklabs.com
