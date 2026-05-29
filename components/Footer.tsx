import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-bg">
      <div className="container-tight flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center">
            <Image src="/logo.png" alt="Khaled AI" width={56} height={56} className="object-contain h-14 w-auto" />
          </div>
          <p className="mt-3 text-sm text-muted">
            Khaled Akhyarhoum · AI Automation Engineer
          </p>
          <p className="mt-1 text-xs text-muted">La Rochelle, France → Global</p>
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-strong">
          <li>
            <Link href="/about" className="hover:text-white">About</Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-white">Resources</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </li>
          <li>
            {/* TODO: replace with real YouTube channel URL once created */}
            <a
              href="https://youtube.com/@khaled-ai"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              YouTube
            </a>
          </li>
          <li>
            <a href="mailto:khaled@khaled-ai.com" className="hover:text-white">
              khaled@khaled-ai.com
            </a>
          </li>
        </ul>
      </div>

      <div className="border-t border-border">
        <div className="container-tight flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Khaled AI. Built with intent.</p>
          <p>Made by Khaled — shipping AI systems since 2024.</p>
        </div>
      </div>
    </footer>
  );
}
