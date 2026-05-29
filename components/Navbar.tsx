'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-4xl items-center justify-between rounded-full border border-border px-4 py-3 backdrop-blur transition-all ${
          scrolled ? 'bg-card/90 shadow-[0_10px_40px_rgba(0,0,0,0.4)]' : 'bg-card/70'
        }`}
      >
        <Link href="/" className="flex items-center pl-3">
          <Image src="/logo.png" alt="Khaled AI" width={56} height={56} className="object-contain h-14 w-auto" priority />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-muted-strong transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-bg transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Let&apos;s Talk
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 md:hidden"
          aria-label="Open menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-border bg-card p-4 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base text-muted-strong hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-4 py-3 text-center text-sm font-bold text-bg"
              >
                Let&apos;s Talk →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
