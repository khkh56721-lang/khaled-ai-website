import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Khaled AI — AI Automation Engineer',
  description:
    'I build AI systems that work — voice agents, automation workflows, and Claude-powered systems for real businesses. Then I teach you exactly how.',
  metadataBase: new URL('https://khaled-ai.com'),
  openGraph: {
    title: 'Khaled AI — AI Automation Engineer',
    description:
      'Voice agents, automation workflows, AI systems for real businesses. Built by Khaled Akhyarhoum.',
    url: 'https://khaled-ai.com',
    siteName: 'Khaled AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaled AI — AI Automation Engineer',
    description: 'AI automation, voice agents, real systems for real businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-bg font-sans text-white antialiased">
        <Navbar />
        <main className="pt-24">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
